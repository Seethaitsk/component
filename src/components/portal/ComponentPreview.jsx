'use client';

import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor, Sun, Moon, RotateCcw, Code2 } from 'lucide-react';
import ComponentRenderer from '@/components/library/ComponentRenderer';

const viewports = [
  { id: 'mobile', label: 'Mobile (375px)', icon: Smartphone, width: 'max-w-[375px]' },
  { id: 'tablet', label: 'Tablet (768px)', icon: Tablet, width: 'max-w-[768px]' },
  { id: 'desktop', label: 'Desktop (100%)', icon: Monitor, width: 'w-full' },
];

export default function ComponentPreview({ componentId, componentName }) {
  const [viewport, setViewport] = useState('desktop');
  const [isDark, setIsDark] = useState(false);
  const [previewTech, setPreviewTech] = useState('react'); // 'react' | 'bootstrap'
  const [key, setKey] = useState(0);

  const selectedViewport = viewports.find((v) => v.id === viewport) || viewports[2];

  const handleReset = () => {
    setKey((prev) => prev + 1);
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
                  ? 'bg-indigo-600 text-white shadow-xs'
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
                ? 'bg-violet-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>Bootstrap 5</span>
          </button>
        </div>

        {/* Right: Theme Toggle & Reset */}
        <div className="flex items-center gap-2">
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
        className={`w-full min-h-[320px] p-6 sm:p-10 flex items-center justify-center transition-colors overflow-x-auto ${
          isDark
            ? 'bg-slate-950 text-white dark'
            : 'bg-radial from-slate-100/80 to-slate-200/50 text-slate-900'
        }`}
      >
        <div
          key={key}
          className={`w-full transition-all duration-300 mx-auto ${selectedViewport.width}`}
        >
          <div className="rounded-xl border border-dashed border-slate-300/80 dark:border-slate-700/80 p-2 sm:p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xs">
            <ComponentRenderer
              componentId={componentId}
              previewMode={previewTech}
              dark={isDark}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

