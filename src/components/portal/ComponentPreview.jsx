'use client';

import React, { useState, useMemo } from 'react';
import {
  Smartphone,
  Tablet,
  Monitor,
  Sun,
  Moon,
  RotateCcw,
  Code2,
  SlidersHorizontal,
  Copy,
  Check,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import ComponentRenderer from '@/components/library/ComponentRenderer';

const viewports = [
  { id: 'mobile', label: 'Mobile (375px)', icon: Smartphone, width: 'max-w-[375px]' },
  { id: 'tablet', label: 'Tablet (768px)', icon: Tablet, width: 'max-w-[768px]' },
  { id: 'desktop', label: 'Desktop (100%)', icon: Monitor, width: 'w-full' },
];

export default function ComponentPreview({
  componentId,
  componentName,
  schemaProps = [],
}) {
  const [viewport, setViewport] = useState('desktop');
  const [isDark, setIsDark] = useState(false);
  const [previewTech, setPreviewTech] = useState('react'); // 'react' | 'bootstrap'
  const [key, setKey] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showPlayground, setShowPlayground] = useState(true);

  // Parse default values from schemaProps
  const defaultPropValues = useMemo(() => {
    const defaults = {};
    schemaProps.forEach((prop) => {
      const typeStr = prop.type || '';
      let def = prop.default;

      if (def !== undefined && def !== 'undefined') {
        if (typeof def === 'string' && def.startsWith("'") && def.endsWith("'")) {
          defaults[prop.name] = def.slice(1, -1);
        } else if (def === 'true') {
          defaults[prop.name] = true;
        } else if (def === 'false') {
          defaults[prop.name] = false;
        } else if (!isNaN(Number(def)) && def.trim() !== '') {
          defaults[prop.name] = Number(def);
        } else {
          defaults[prop.name] = def;
        }
      } else {
        // Infer default from type if no default given
        if (typeStr.includes("'")) {
          defaults[prop.name] = typeStr.split('|')[0].replace(/['\s\\]/g, '');
        } else if (typeStr === 'boolean') {
          defaults[prop.name] = false;
        } else if (typeStr === 'number') {
          defaults[prop.name] = 0;
        } else {
          defaults[prop.name] = prop.name === 'children' ? `${componentName} Action` : '';
        }
      }
    });
    return defaults;
  }, [schemaProps, componentName]);

  const [propValues, setPropValues] = useState(defaultPropValues);
  const [hasUserEdited, setHasUserEdited] = useState(false);

  const selectedViewport = viewports.find((v) => v.id === viewport) || viewports[2];

  const handleReset = () => {
    setKey((prev) => prev + 1);
    setPropValues(defaultPropValues);
    setHasUserEdited(false);
  };

  const handlePropChange = (name, value) => {
    setPropValues((prev) => ({ ...prev, [name]: value }));
    setHasUserEdited(true);
  };

  // Generate real-time JSX string from current props
  const liveJsxCode = useMemo(() => {
    const activePropsList = [];
    let childrenValue = null;

    Object.entries(propValues).forEach(([k, v]) => {
      if (k === 'children') {
        childrenValue = v;
        return;
      }
      if (v === undefined || v === '') return;
      if (typeof v === 'boolean') {
        if (v === true) activePropsList.push(`${k}`);
        else activePropsList.push(`${k}={false}`);
      } else if (typeof v === 'number') {
        activePropsList.push(`${k}={${v}}`);
      } else {
        activePropsList.push(`${k}="${v}"`);
      }
    });

    const propsStr = activePropsList.length > 0 ? ` ${activePropsList.join(' ')}` : '';
    if (childrenValue) {
      return `<${componentName}${propsStr}>${childrenValue}</${componentName}>`;
    }
    return `<${componentName}${propsStr} />`;
  }, [componentName, propValues]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(liveJsxCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 shadow-sm overflow-hidden transition-colors">
      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 bg-slate-50/70 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/40">
        {/* Left: Viewport Selectors */}
        <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
          {viewports.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setViewport(id)}
              aria-label={label}
              title={label}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                viewport === id
                  ? 'bg-[#1a5cdd] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
            </button>
          ))}
        </div>

        {/* Center: Tech Mode (React vs Bootstrap) */}
        <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <button
            type="button"
            onClick={() => setPreviewTech('react')}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
              previewTech === 'react'
                ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            React (Tailwind)
          </button>
          <button
            type="button"
            onClick={() => setPreviewTech('bootstrap')}
            className={`flex items-center gap-1 rounded-lg px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
              previewTech === 'bootstrap'
                ? 'bg-[#1a5cdd] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>Bootstrap 5</span>
          </button>
        </div>

        {/* Right: Theme Toggle, Reset, & Playground Toggle */}
        <div className="flex items-center gap-2">
          {schemaProps.length > 0 && previewTech === 'react' && (
            <button
              type="button"
              onClick={() => setShowPlayground(!showPlayground)}
              className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold cursor-pointer shadow-xs transition-colors ${
                showPlayground
                  ? 'bg-blue-50 border-blue-200 text-[#1a5cdd] dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-300'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Playground</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 cursor-pointer shadow-xs"
          >
            {isDark ? <Sun className="h-3.5 w-3.5 text-amber-500" /> : <Moon className="h-3.5 w-3.5 text-slate-500" />}
            <span className="text-[11px]">{isDark ? 'Dark' : 'Light'}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            title="Reset component state"
            aria-label="Reset component preview"
            className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 cursor-pointer shadow-xs"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Live Preview Canvas */}
      <div
        className={`w-full min-h-[300px] p-6 sm:p-10 flex items-center justify-center transition-colors overflow-x-auto ${
          isDark
            ? 'bg-slate-950 text-white dark'
            : 'bg-gradient-to-b from-slate-50/80 to-slate-100/60 text-slate-900'
        }`}
      >
        <div
          key={key}
          className={`w-full transition-all duration-300 mx-auto ${selectedViewport.width}`}
        >
          <div className="rounded-2xl border border-dashed border-slate-300/80 dark:border-slate-700/80 p-4 sm:p-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xs shadow-xs">
            <ComponentRenderer
              componentId={componentId}
              previewMode={previewTech}
              dark={isDark}
              dynamicProps={hasUserEdited ? propValues : null}
            />
          </div>
        </div>
      </div>

      {/* Interactive Props Playground Panel */}
      {showPlayground && schemaProps.length > 0 && previewTech === 'react' && (
        <div className="border-t border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-900/60 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-100 text-[#1a5cdd] dark:bg-blue-950/60 dark:text-blue-400">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Interactive Props Playground
              </h3>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-bold text-[#1a5cdd] border border-blue-200 dark:bg-blue-950 dark:border-blue-900">
                Live State
              </span>
            </div>

            <div className="flex items-center gap-2">
              {hasUserEdited && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline cursor-pointer"
                >
                  Reset to defaults
                </button>
              )}
            </div>
          </div>

          {/* Controls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schemaProps.map((prop) => {
              const typeStr = prop.type || '';
              const currentValue = propValues[prop.name];

              // Check if union / enum type e.g. "'primary' | 'secondary'"
              const isEnum = typeStr.includes("'");
              const enumOptions = isEnum
                ? typeStr.split('|').map((opt) => opt.replace(/['\s\\]/g, ''))
                : [];

              const isBoolean = typeStr === 'boolean';

              return (
                <div
                  key={prop.name}
                  className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                      {prop.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 truncate max-w-[120px]">
                      {prop.type}
                    </span>
                  </div>

                  {/* Enum Segmented / Select */}
                  {isEnum ? (
                    <select
                      value={currentValue || enumOptions[0]}
                      onChange={(e) => handlePropChange(prop.name, e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 outline-none focus:border-[#1a5cdd] focus:ring-1 focus:ring-blue-100"
                    >
                      {enumOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : isBoolean ? (
                    /* Boolean Toggle Switch */
                    <label className="flex items-center gap-2 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={Boolean(currentValue)}
                        onChange={(e) => handlePropChange(prop.name, e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-[#1a5cdd] focus:ring-[#1a5cdd]"
                      />
                      <span className="text-xs text-slate-600 dark:text-slate-400">
                        {currentValue ? 'Enabled (true)' : 'Disabled (false)'}
                      </span>
                    </label>
                  ) : (
                    /* Text / String Input */
                    <input
                      type="text"
                      value={currentValue ?? ''}
                      onChange={(e) => handlePropChange(prop.name, e.target.value)}
                      placeholder={prop.default ? String(prop.default) : `Enter ${prop.name}`}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 outline-none focus:border-[#1a5cdd] focus:ring-1 focus:ring-blue-100"
                    />
                  )}

                  {prop.description && (
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {prop.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Real-time Generated JSX Snippet */}
          <div className="rounded-xl border border-slate-800 bg-[#0d1220] p-3 text-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#5b8def] shrink-0">
                Live JSX:
              </span>
              <code className="text-xs font-mono text-emerald-400 truncate max-w-xl">
                {liveJsxCode}
              </code>
            </div>

            <button
              type="button"
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1a5cdd] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1449b2] transition-colors shrink-0 cursor-pointer shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-300" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Config</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
