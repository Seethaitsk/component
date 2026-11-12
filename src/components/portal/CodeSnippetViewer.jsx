'use client';

import React, { useState } from 'react';
import { Copy, Check, Code2 } from 'lucide-react';

const tabs = [
  { id: 'react', label: 'React' },
  { id: 'htmlCss', label: 'HTML + CSS' },
  { id: 'bootstrap', label: 'Bootstrap 5' },
];

export default function CodeSnippetViewer({ code = {} }) {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);

  const activeCode = code[activeTab] || '// No code snippet provided.';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 text-white shadow-xl overflow-hidden">
      {/* Header Tabs */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2.5">
        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy snippet to clipboard"
          className="flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Snippet Pre Block */}
      <div className="relative">
        <pre className="overflow-x-auto p-5 text-xs font-mono leading-relaxed text-indigo-100 selection:bg-indigo-600/40">
          <code>{activeCode}</code>
        </pre>
      </div>
    </div>
  );
}

