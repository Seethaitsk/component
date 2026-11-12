'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ChevronRight,
  Plus,
  Trash2,
  Sparkles,
  Code2,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Layers,
  FileCode,
} from 'lucide-react';
import { categories } from '@/data/categories';

export default function CreateComponentPage() {
  const router = useRouter();

  // Basic Details
  const [name, setName] = useState('');
  const [category, setCategory] = useState('buttons');
  const [status, setStatus] = useState('new');
  const [description, setDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [projectsInput, setProjectsInput] = useState('Customer Portal');

  // Tech Stacks
  const [techStacks, setTechStacks] = useState(['React', 'Tailwind', 'Bootstrap']);

  // Props Schema
  const [propsList, setPropsList] = useState([
    { name: 'variant', type: "'primary' | 'secondary'", default: "'primary'", description: 'Visual style variant.' },
    { name: 'className', type: 'string', default: "''", description: 'Custom CSS classes.' },
    { name: 'children', type: 'ReactNode', default: 'undefined', description: 'Component label or content.' },
  ]);

  // Code Snippets
  const [codeReact, setCodeReact] = useState('');
  const [codeHtml, setCodeHtml] = useState('');
  const [codeBootstrap, setCodeBootstrap] = useState('');
  const [componentJsx, setComponentJsx] = useState('');

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Auto-generate starter code snippets when name changes
  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^A-Za-z0-9]/g, '');
    setName(val);

    if (val) {
      if (!codeReact || codeReact.includes('<') ) {
        setCodeReact(`<${val} variant="primary">${val} Action</${val}>`);
      }
      if (!codeHtml || codeHtml.includes('<div') ) {
        setCodeHtml(`<div class="inline-flex items-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800 shadow-xs">${val} Action</div>`);
      }
      if (!codeBootstrap || codeBootstrap.includes('<div') ) {
        setCodeBootstrap(`<div class="badge bg-primary p-2">${val} Action</div>`);
      }
      if (!componentJsx || componentJsx.includes('export default function')) {
        setComponentJsx(`'use client';

import React from 'react';

export default function ${val}({ variant = 'primary', className = '', children, ...props }) {
  return (
    <div
      className={\`inline-flex items-center px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800 shadow-xs \${className}\`}
      {...props}
    >
      {children || '${val} Component'}
    </div>
  );
}
`);
      }
    }
  };

  // Toggle Tech Stack
  const toggleTech = (tech) => {
    setTechStacks((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  // Add Prop Row
  const addPropRow = () => {
    setPropsList((prev) => [
      ...prev,
      { name: '', type: 'string', default: "''", description: '' },
    ]);
  };

  // Update Prop Row
  const updatePropRow = (index, field, value) => {
    setPropsList((prev) => {
      const copy = [...prev];
      copy[index][field] = value;
      return copy;
    });
  };

  // Remove Prop Row
  const removePropRow = (index) => {
    setPropsList((prev) => prev.filter((_, i) => i !== index));
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name.trim()) {
      setError('Please provide a component name.');
      return;
    }
    if (!/^[A-Z][A-Za-z0-9]*$/.test(name.trim())) {
      setError('Component name must start with an uppercase letter and use PascalCase (e.g. Tabs, Dropdown, Rating).');
      return;
    }

    setLoading(true);

    try {
      const tags = tagsInput
        ? tagsInput.split(',').map((t) => t.trim().toLowerCase()).filter(Boolean)
        : [name.toLowerCase(), category, 'ui'];

      const projectsUsedIn = projectsInput
        ? projectsInput.split(',').map((p) => p.trim()).filter(Boolean)
        : ['Customer Portal'];

      const validProps = propsList.filter((p) => p.name.trim());

      const payload = {
        name: name.trim(),
        category,
        status,
        description: description.trim() || `Reusable ${name.trim()} component for modern web interfaces.`,
        tags,
        tech: techStacks,
        projectsUsedIn,
        usageNotes: [
          `Import directly from @/components/library/${name.trim()}`,
          'Ensure accessible labels and keyboard focus states are implemented',
        ],
        props: validProps,
        code: {
          react: codeReact || `<${name.trim()}>Action</${name.trim()}>`,
          htmlCss: codeHtml || `<div class="px-4 py-2 border rounded-xl">${name.trim()} Action</div>`,
          bootstrap: codeBootstrap || `<div class="badge bg-primary">${name.trim()} Action</div>`,
        },
        componentCode: componentJsx,
      };

      const res = await fetch('/api/components', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error || 'Failed to create component.');
      }

      setSuccess(`Component "${resData.name}" created successfully! Redirecting...`);

      setTimeout(() => {
        router.push(resData.path);
      }, 1200);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#1a5cdd] transition-colors">
          Portal Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-900">Create Component</span>
      </nav>

      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-2">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-50 text-[#1a5cdd]">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#1a5cdd]">
            Component Studio
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Create New Component
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          Scaffold a new reusable component into the SysCorp UI Kit without writing manual boilerplate. This automatically creates source files, connects live interactive previews, and registers catalog metadata.
        </p>
      </div>

      {/* Alerts */}
      {error && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs font-medium text-rose-800 flex items-center gap-2.5">
          <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-semibold text-emerald-800 flex items-center gap-2.5">
          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Card 1: Core Details */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Layers className="h-4 w-4 text-[#1a5cdd]" />
            <span>1. Component Details</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Component Name */}
            <div>
              <label htmlFor="comp-name" className="text-xs font-bold text-slate-700 block mb-1.5">
                Component Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="comp-name"
                type="text"
                required
                value={name}
                onChange={handleNameChange}
                placeholder="e.g. Tabs, Dropdown, Rating, Toast"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100 font-mono"
              />
              <p className="text-[11px] text-slate-400 mt-1">Must be in PascalCase without spaces.</p>
            </div>

            {/* Category */}
            <div>
              <label htmlFor="comp-cat" className="text-xs font-bold text-slate-700 block mb-1.5">
                Category <span className="text-rose-500">*</span>
              </label>
              <select
                id="comp-cat"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
              >
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Status */}
            <div>
              <label htmlFor="comp-status" className="text-xs font-bold text-slate-700 block mb-1.5">
                Release Status
              </label>
              <select
                id="comp-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
              >
                <option value="new">New (Recently Added)</option>
                <option value="stable">Stable (Production Ready)</option>
                <option value="beta">Beta (Under Review)</option>
                <option value="in review">In Review</option>
              </select>
            </div>

            {/* Adopted Projects */}
            <div>
              <label htmlFor="comp-projects" className="text-xs font-bold text-slate-700 block mb-1.5">
                Adopted Projects (comma separated)
              </label>
              <input
                id="comp-projects"
                type="text"
                value={projectsInput}
                onChange={(e) => setProjectsInput(e.target.value)}
                placeholder="e.g. Customer Portal, Admin Console"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="comp-desc" className="text-xs font-bold text-slate-700 block mb-1.5">
              Description
            </label>
            <textarea
              id="comp-desc"
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explain the component purpose, behavior, and where it should be used..."
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100 leading-relaxed"
            />
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="comp-tags" className="text-xs font-bold text-slate-700 block mb-1.5">
              Tags (comma separated)
            </label>
            <input
              id="comp-tags"
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="e.g. navigation, tabs, panels, responsive"
              className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Tech Stacks Supported */}
          <div>
            <span className="text-xs font-bold text-slate-700 block mb-2">Supported Tech Stacks</span>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind', 'Bootstrap'].map((tech) => {
                const active = techStacks.includes(tech);
                return (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => toggleTech(tech)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer border ${
                      active
                        ? 'bg-blue-50 border-blue-200 text-[#1a5cdd]'
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    {active ? '✓ ' : '+ '}
                    {tech}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card 2: Props & Variants Schema */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-[#1a5cdd]" />
              <span>2. Props & Variants Table</span>
            </h2>
            <button
              type="button"
              onClick={addPropRow}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-[#1a5cdd] hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Prop</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-50 text-[11px] font-bold uppercase text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="px-3 py-2.5">Prop Name</th>
                  <th className="px-3 py-2.5">Type</th>
                  <th className="px-3 py-2.5">Default</th>
                  <th className="px-3 py-2.5">Description</th>
                  <th className="px-2 py-2.5 w-10 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {propsList.map((p, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-2">
                      <input
                        type="text"
                        value={p.name}
                        onChange={(e) => updatePropRow(idx, 'name', e.target.value)}
                        placeholder="e.g. size"
                        className="w-full rounded border border-slate-200 px-2 py-1 text-xs font-mono outline-none focus:border-[#1a5cdd]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={p.type}
                        onChange={(e) => updatePropRow(idx, 'type', e.target.value)}
                        placeholder="e.g. 'sm' | 'md' | 'lg'"
                        className="w-full rounded border border-slate-200 px-2 py-1 text-xs font-mono outline-none focus:border-[#1a5cdd]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={p.default}
                        onChange={(e) => updatePropRow(idx, 'default', e.target.value)}
                        placeholder="e.g. 'md'"
                        className="w-full rounded border border-slate-200 px-2 py-1 text-xs font-mono outline-none focus:border-[#1a5cdd]"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={p.description}
                        onChange={(e) => updatePropRow(idx, 'description', e.target.value)}
                        placeholder="Description of the prop"
                        className="w-full rounded border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#1a5cdd]"
                      />
                    </td>
                    <td className="p-2 text-center">
                      <button
                        type="button"
                        onClick={() => removePropRow(idx)}
                        className="rounded p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                        title="Remove prop"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Card 3: Code Snippets */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-5">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <FileCode className="h-4 w-4 text-[#1a5cdd]" />
            <span>3. Copy-to-Clipboard Code Snippets</span>
          </h2>

          <div className="space-y-4">
            {/* React Code */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                React (Tailwind) Usage Snippet
              </label>
              <textarea
                rows={2}
                value={codeReact}
                onChange={(e) => setCodeReact(e.target.value)}
                placeholder="<Tabs defaultIndex={0}>...</Tabs>"
                className="w-full rounded-xl border border-slate-300 bg-slate-900 text-slate-100 p-3 text-xs font-mono outline-none focus:border-[#1a5cdd]"
              />
            </div>

            {/* HTML / CSS */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                HTML + CSS Snippet
              </label>
              <textarea
                rows={2}
                value={codeHtml}
                onChange={(e) => setCodeHtml(e.target.value)}
                placeholder='<div class="tabs-container">...</div>'
                className="w-full rounded-xl border border-slate-300 bg-slate-900 text-slate-100 p-3 text-xs font-mono outline-none focus:border-[#1a5cdd]"
              />
            </div>

            {/* Bootstrap 5 */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Bootstrap 5 Snippet
              </label>
              <textarea
                rows={2}
                value={codeBootstrap}
                onChange={(e) => setCodeBootstrap(e.target.value)}
                placeholder='<ul class="nav nav-tabs">...</ul>'
                className="w-full rounded-xl border border-slate-300 bg-slate-900 text-slate-100 p-3 text-xs font-mono outline-none focus:border-[#1a5cdd]"
              />
            </div>
          </div>
        </div>

        {/* Card 4: Component Implementation (Optional) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileCode className="h-4 w-4 text-[#1a5cdd]" />
            <span>4. Component JSX File (`src/components/library/{name || 'Name'}/{name || 'Name'}.jsx`)</span>
          </h2>
          <p className="text-xs text-slate-500">
            Customize the component source code. A starter implementation has been generated for you:
          </p>
          <textarea
            rows={8}
            value={componentJsx}
            onChange={(e) => setComponentJsx(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-slate-900 text-emerald-300 p-3 text-xs font-mono outline-none focus:border-[#1a5cdd] leading-relaxed"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
          <Link
            href="/"
            className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1a5cdd] px-6 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#1449b2] transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <>
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                <span>Creating Component...</span>
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                <span>Create & Register Component</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

