import { NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      name,
      category = 'buttons',
      description = '',
      tags = [],
      tech = ['React', 'Tailwind', 'Bootstrap'],
      status = 'new',
      projectsUsedIn = ['Customer Portal'],
      usageNotes = [],
      props = [],
      code = {},
      componentCode: customComponentCode,
    } = data;

    if (!name || !/^[A-Z][A-Za-z0-9]*$/.test(name.trim())) {
      return NextResponse.json(
        { error: 'Component name must be PascalCase (e.g. Tabs, Dropdown, Rating, Toast)' },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const id = trimmedName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    const projectRoot = process.cwd();

    // 1. Create component folder in src/components/library/<Name>
    const compDir = path.join(projectRoot, 'src', 'components', 'library', trimmedName);
    if (!fs.existsSync(compDir)) {
      fs.mkdirSync(compDir, { recursive: true });
    }

    // 2. Write Component.jsx
    const defaultComponentCode = `'use client';

import React from 'react';

export default function ${trimmedName}({ className = '', children, ...props }) {
  return (
    <div
      className={\`inline-flex items-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800 shadow-xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 \${className}\`}
      {...props}
    >
      {children || '${trimmedName} Component'}
    </div>
  );
}
`;
    const finalComponentCode = customComponentCode?.trim() || defaultComponentCode;
    fs.writeFileSync(path.join(compDir, `${trimmedName}.jsx`), finalComponentCode, 'utf8');

    // 3. Write index.js
    fs.writeFileSync(
      path.join(compDir, 'index.js'),
      `export { default } from './${trimmedName}';\n`,
      'utf8'
    );

    // 4. Update src/data/components.js
    const dataFilePath = path.join(projectRoot, 'src', 'data', 'components.js');
    let dataContent = fs.readFileSync(dataFilePath, 'utf8');

    if (!dataContent.includes(`id: '${id}'`)) {
      const defaultProps = [
        { name: 'className', type: 'string', default: "''", description: 'Additional CSS classes.' },
        { name: 'children', type: 'ReactNode', default: 'undefined', description: 'Component label or children elements.' },
      ];
      const finalProps = props.length > 0 ? props : defaultProps;

      const defaultUsage = [
        `Import directly from @/components/library/${trimmedName}`,
        'Ensure accessible aria labels when using with interactive actions',
      ];
      const finalUsage = usageNotes.length > 0 ? usageNotes : defaultUsage;

      const finalTags = tags.length > 0 ? tags : [id, category, 'ui'];
      const finalTech = tech.length > 0 ? tech : ['React', 'Tailwind', 'Bootstrap'];
      const finalProjects = projectsUsedIn.length > 0 ? projectsUsedIn : ['Customer Portal'];

      const reactCode = code.react?.trim() || `<${trimmedName}>${trimmedName} Action</${trimmedName}>`;
      const htmlCode = code.htmlCss?.trim() || `<div class="px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold">${trimmedName} Action</div>`;
      const bsCode = code.bootstrap?.trim() || `<div class="badge bg-primary p-2">${trimmedName} Action</div>`;

      const newEntry = `  {
    id: '${id}',
    name: '${trimmedName}',
    category: '${category}',
    description: ${JSON.stringify(description || `Reusable ${trimmedName} component designed for modern web applications.`)},
    tags: ${JSON.stringify(finalTags)},
    tech: ${JSON.stringify(finalTech)},
    status: '${status}',
    dateAdded: '${new Date().toISOString().split('T')[0]}',
    projectsUsedIn: ${JSON.stringify(finalProjects)},
    usageNotes: ${JSON.stringify(finalUsage, null, 6)},
    props: ${JSON.stringify(finalProps, null, 6)},
    code: {
      react: ${JSON.stringify(reactCode)},
      htmlCss: ${JSON.stringify(htmlCode)},
      bootstrap: ${JSON.stringify(bsCode)},
    },
  },
];`;

      const cleanData = dataContent.trim().replace(/\];\s*$/, '').trim().replace(/,$/, '');
      fs.writeFileSync(dataFilePath, `${cleanData},\n${newEntry}\n`, 'utf8');
    }

    // 5. Update ComponentRenderer.jsx with import and preview cases
    const rendererPath = path.join(projectRoot, 'src', 'components', 'library', 'ComponentRenderer.jsx');
    let rendererContent = fs.readFileSync(rendererPath, 'utf8');

    if (!rendererContent.includes(`import ${trimmedName} from './${trimmedName}'`)) {
      // Add import
      rendererContent = rendererContent.replace(
        /(import [A-Za-z0-9]+ from '\.\/[A-Za-z0-9]+';\n)(\nexport default function ComponentRenderer)/,
        `$1import ${trimmedName} from './${trimmedName}';\n$2`
      );

      // Add thumbnail preview case
      const thumbnailCase = `      case '${id}':
        return (
          <div className="flex items-center justify-center p-2">
            <${trimmedName}>${trimmedName}</${trimmedName}>
          </div>
        );\n`;
      rendererContent = rendererContent.replace(
        /(switch \(componentId\) \{)/,
        `$1\n${thumbnailCase}`
      );

      // Add interactive preview case
      const interactiveCase = `    case '${id}':
      return (
        <div className="flex items-center justify-center p-6">
          <${trimmedName}>Interactive ${trimmedName}</${trimmedName}>
        </div>
      );\n`;
      rendererContent = rendererContent.replace(
        /(\/\/ Full Interactive React \+ Tailwind Mode[^\n]*\n\s*switch \(componentId\) \{)/,
        `$1\n${interactiveCase}`
      );

      fs.writeFileSync(rendererPath, rendererContent, 'utf8');
    }

    return NextResponse.json({
      success: true,
      id,
      name: trimmedName,
      message: `Component "${trimmedName}" created and registered successfully!`,
      path: `/component/${id}`,
    });
  } catch (error) {
    console.error('Error creating component:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create component' },
      { status: 500 }
    );
  }
}

