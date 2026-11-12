#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const [name, category = 'buttons'] = process.argv.slice(2);

if (!name || !/^[A-Z][A-Za-z0-9]*$/.test(name)) {
  console.error('Usage: npm run new:component -- <ComponentName> [category]');
  console.error('Example: npm run new:component -- Badge buttons');
  console.error('Valid categories: buttons, forms, navigation, cards, modals, tables, alerts, layout, gallery, game-betting');
  process.exit(1);
}

// Convert PascalCase to kebab-case id: e.g. PrimaryButton -> primary-button
const id = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

// 1. Create component folder
const componentDir = path.join(process.cwd(), 'src', 'components', 'library', name);
if (fs.existsSync(componentDir)) {
  console.error(`Error: Directory ${componentDir} already exists.`);
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

// 2. Write Component.jsx
const componentFile = path.join(componentDir, `${name}.jsx`);
const componentCode = `'use client';

import React from 'react';

export default function ${name}({ className = '', children, ...props }) {
  return (
    <div
      className={\`inline-flex items-center px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-800 shadow-xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 \${className}\`}
      {...props}
    >
      {children || '${name} Component'}
    </div>
  );
}
`;
fs.writeFileSync(componentFile, componentCode, 'utf8');

// 3. Write index.js
const indexFile = path.join(componentDir, 'index.js');
fs.writeFileSync(indexFile, `export { default } from './${name}';\n`, 'utf8');

console.log(`✔ Created component folder: src/components/library/${name}/`);
console.log(`✔ Created ${name}.jsx and index.js`);

// 4. Update src/data/components.js if not already present
const componentsDataPath = path.join(process.cwd(), 'src', 'data', 'components.js');
let componentsDataContent = fs.readFileSync(componentsDataPath, 'utf8');

if (!componentsDataContent.includes(`id: '${id}'`)) {
  const newEntry = `  {
    id: '${id}',
    name: '${name}',
    category: '${category}',
    description: 'Reusable ${name} component designed for modern web applications.',
    tags: ['${id}', '${category}', 'ui'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'new',
    dateAdded: '${new Date().toISOString().split('T')[0]}',
    projectsUsedIn: ['Internal App'],
    usageNotes: [
      'Import directly from @/components/library/${name}',
      'Ensure accessible labeling when using custom children',
    ],
    props: [
      { name: 'className', type: 'string', default: "''", description: 'Additional CSS classes.' },
      { name: 'children', type: 'ReactNode', default: 'undefined', description: 'Component content.' },
    ],
    code: {
      react: \`<${name}>${name} Action</${name}>\`,
      htmlCss: \`<div class="inline-flex items-center px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold">${name} Action</div>\`,
      bootstrap: \`<div class="badge bg-primary p-2">${name} Action</div>\`,
    },
  },
];`;

  const cleanContent = componentsDataContent.trim().replace(/\];\s*$/, '').trim().replace(/,$/, '');
  const updatedContent = `${cleanContent},\n${newEntry}\n`;
  fs.writeFileSync(componentsDataPath, updatedContent, 'utf8');
  console.log(`✔ Added metadata entry for '${id}' in src/data/components.js`);
}

// 5. Update ComponentRenderer.jsx with import and cases
const rendererPath = path.join(process.cwd(), 'src', 'components', 'library', 'ComponentRenderer.jsx');
let rendererContent = fs.readFileSync(rendererPath, 'utf8');

if (!rendererContent.includes(`import ${name} from './${name}'`)) {
  // Add import after last component import
  rendererContent = rendererContent.replace(
    /(import OddsCard from '\.\/OddsCard';)/,
    `$1\nimport ${name} from './${name}';`
  );

  // Add thumbnail case
  const thumbnailCase = `      case '${id}':
        return <${name}>${name}</${name}>;\n`;
  rendererContent = rendererContent.replace(
    /(switch \(componentId\) \{)/,
    `$1\n${thumbnailCase}`
  );

  // Add interactive case
  const interactiveCase = `    case '${id}':
      return (
        <div className="flex items-center justify-center p-6">
          <${name}>Active ${name}</${name}>
        </div>
      );\n`;
  rendererContent = rendererContent.replace(
    /(\/\/ Full Interactive React \+ Tailwind Mode[^\n]*\n\s*switch \(componentId\) \{)/,
    `$1\n${interactiveCase}`
  );

  fs.writeFileSync(rendererPath, rendererContent, 'utf8');
  console.log(`✔ Registered in src/components/library/ComponentRenderer.jsx`);
}

console.log(`\n🎉 Success! Visit http://localhost:3000/component/${id} to see your component.`);
