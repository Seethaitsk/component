'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  AppWindow,
  Search,
  Copy,
  Check,
  Eye,
  Code2,
  ExternalLink,
  Layers,
  ArrowRight,
  Monitor,
  Tablet,
  Smartphone,
  X,
  Sparkles,
} from 'lucide-react';
import { templatesData } from '@/data/templatesData';
import { componentsData } from '@/data/components';

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePreview, setActivePreview] = useState(null); // template object when modal is open
  const [previewViewport, setPreviewViewport] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [previewTab, setPreviewTab] = useState('preview'); // 'preview' | 'code'
  const [copiedId, setCopiedId] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(templatesData.map((t) => t.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredTemplates = useMemo(() => {
    return templatesData.filter((template) => {
      const matchesCategory =
        selectedCategory === 'All' || template.category === selectedCategory;
      const matchesSearch =
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-slate-50 p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-[#1a5cdd]">
              <AppWindow className="h-3.5 w-3.5" />
              <span>Full Screen Templates</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Production Page Templates
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Complete pre-assembled page architectures (SaaS landing pages, analytics dashboards, split auth screens, and support hubs) composed using SysCorp atomic UI components.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/sections"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-4 py-2.5 text-xs font-bold text-[#1a5cdd] hover:bg-blue-50 transition-colors shadow-xs"
            >
              <span>Explore Modular Sections</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-t border-slate-200/60">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1a5cdd] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search templates..."
              className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="rounded-3xl border border-slate-200 bg-white shadow-xs hover:border-[#1a5cdd] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
          >
            {/* Visual Header / Micro Preview Mock */}
            <div className="h-44 bg-slate-900 p-4 relative overflow-hidden flex flex-col justify-between border-b border-slate-200">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-500/20 text-[#5b8def] px-2.5 py-0.5 text-[10px] font-bold border border-blue-500/30">
                  {template.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400">Next.js App Router</span>
              </div>

              {/* Schematic mini UI wireframe */}
              <div className="space-y-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="h-3 w-2/3 bg-slate-700 rounded-sm"></div>
                <div className="h-2 w-1/2 bg-slate-800 rounded-sm"></div>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="h-8 bg-slate-800 rounded-md border border-slate-700/60"></div>
                  <div className="h-8 bg-slate-800 rounded-md border border-slate-700/60"></div>
                  <div className="h-8 bg-slate-800 rounded-md border border-slate-700/60"></div>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <button
                  onClick={() => {
                    setActivePreview(template);
                    setPreviewTab('preview');
                  }}
                  className="flex items-center gap-1.5 rounded-lg bg-[#1a5cdd] px-3 py-1 text-xs font-bold text-white shadow-xs hover:bg-[#1449b2] transition-colors cursor-pointer"
                >
                  <Eye className="h-3 w-3" />
                  <span>Interactive Preview</span>
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-base font-bold text-slate-900 group-hover:text-[#1a5cdd] transition-colors">
                  {template.name}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {template.description}
                </p>
              </div>

              {/* Dependencies List */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Constituent Components
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {template.dependencies.map((depId) => {
                    const comp = componentsData.find((c) => c.id === depId);
                    return (
                      <Link
                        key={depId}
                        href={`/component/${depId}`}
                        className="inline-flex items-center gap-1 rounded-md bg-blue-50 hover:bg-blue-100 border border-blue-200/60 px-2 py-0.5 text-[10px] font-semibold text-[#1a5cdd] transition-colors"
                      >
                        <Layers className="h-2.5 w-2.5" />
                        <span>{comp?.name || depId}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleCopy(template.id, template.code)}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  {copiedId === template.id ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Boilerplate Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Page Code</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setActivePreview(template);
                    setPreviewTab('code');
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#1a5cdd] hover:underline cursor-pointer"
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>Inspect Code</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Preview Modal */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs">
          <div className="w-full max-w-6xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-[#1a5cdd]">
                  {activePreview.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {activePreview.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {/* Viewport switcher */}
                {previewTab === 'preview' && (
                  <div className="hidden sm:flex items-center bg-white rounded-xl border border-slate-200 p-1">
                    <button
                      onClick={() => setPreviewViewport('desktop')}
                      className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                        previewViewport === 'desktop'
                          ? 'bg-[#1a5cdd] text-white'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <Monitor className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setPreviewViewport('tablet')}
                      className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                        previewViewport === 'tablet'
                          ? 'bg-[#1a5cdd] text-white'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <Tablet className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setPreviewViewport('mobile')}
                      className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                        previewViewport === 'mobile'
                          ? 'bg-[#1a5cdd] text-white'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <Smartphone className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}

                {/* Tab switcher */}
                <div className="flex items-center bg-white rounded-xl border border-slate-200 p-1">
                  <button
                    onClick={() => setPreviewTab('preview')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg cursor-pointer ${
                      previewTab === 'preview'
                        ? 'bg-[#1a5cdd] text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setPreviewTab('code')}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg cursor-pointer ${
                      previewTab === 'code'
                        ? 'bg-[#1a5cdd] text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Code
                  </button>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(activePreview.id, activePreview.code)}
                  className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                >
                  {copiedId === activePreview.id ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Copy Code</span>
                    </>
                  )}
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setActivePreview(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-900 cursor-pointer ml-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100 flex justify-center">
              {previewTab === 'preview' ? (
                <div
                  className={`w-full bg-white transition-all duration-300 shadow-md ${
                    previewViewport === 'mobile'
                      ? 'max-w-[375px] rounded-3xl border border-slate-300 overflow-hidden'
                      : previewViewport === 'tablet'
                      ? 'max-w-[768px] rounded-2xl border border-slate-300 overflow-hidden'
                      : 'max-w-full rounded-2xl border border-slate-200'
                  }`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: activePreview.code
                        .replace(/import .*\n/g, '')
                        .replace(/export default function .*\(\) \{/g, '')
                        .replace(/return \(/g, '')
                        .replace(/\);\s*\}\s*$/g, '')
                        .replaceAll('className=', 'class=')
                        .replaceAll('&lt;', '<')
                        .replaceAll('&gt;', '>'),
                    }}
                  />
                </div>
              ) : (
                <div className="w-full">
                  <pre className="p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed max-h-[600px]">
                    <code>{activePreview.code}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
