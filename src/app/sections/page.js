'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  LayoutTemplate,
  Search,
  Copy,
  Check,
  Smartphone,
  Tablet,
  Monitor,
  Code2,
  Eye,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { sectionsData } from '@/data/sectionsData';

export default function SectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewportSizes, setViewportSizes] = useState({}); // { [sectionId]: 'desktop' | 'tablet' | 'mobile' }
  const [activeTabs, setActiveTabs] = useState({}); // { [sectionId]: 'preview' | 'code' }
  const [copiedId, setCopiedId] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(sectionsData.map((s) => s.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredSections = useMemo(() => {
    return sectionsData.filter((section) => {
      const matchesCategory =
        selectedCategory === 'All' || section.category === selectedCategory;
      const matchesSearch =
        section.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const setViewport = (id, size) => {
    setViewportSizes((prev) => ({ ...prev, [id]: size }));
  };

  const setTab = (id, tab) => {
    setActiveTabs((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-slate-50 p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-[#1a5cdd]">
              <LayoutTemplate className="h-3.5 w-3.5" />
              <span>Production Page Sections</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Reusable UI Sections Library
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Drop high-converting heroes, pricing matrices, feature grids, and trust banners directly into your Next.js and Tailwind projects with zero extra config.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1a5cdd] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors shadow-xs"
            >
              <span>Explore Full Templates</span>
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
              placeholder="Filter sections..."
              className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-10">
        {filteredSections.map((section) => {
          const viewport = viewportSizes[section.id] || 'desktop';
          const activeTab = activeTabs[section.id] || 'preview';

          return (
            <div
              key={section.id}
              id={section.id}
              className="rounded-3xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all hover:border-slate-300"
            >
              {/* Section Header Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-slate-50/70 px-6 py-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-blue-100/70 px-2.5 py-0.5 text-[10px] font-bold text-[#1a5cdd] border border-blue-200">
                      {section.category}
                    </span>
                    <h2 className="text-base font-bold text-slate-900">{section.name}</h2>
                  </div>
                  <p className="text-xs text-slate-500">{section.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  {/* Viewport Toggles (only in preview mode) */}
                  {activeTab === 'preview' && (
                    <div className="hidden sm:flex items-center bg-white rounded-xl border border-slate-200 p-1">
                      <button
                        onClick={() => setViewport(section.id, 'desktop')}
                        title="Desktop view (100%)"
                        className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                          viewport === 'desktop'
                            ? 'bg-[#1a5cdd] text-white'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        <Monitor className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setViewport(section.id, 'tablet')}
                        title="Tablet view (768px)"
                        className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                          viewport === 'tablet'
                            ? 'bg-[#1a5cdd] text-white'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        <Tablet className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => setViewport(section.id, 'mobile')}
                        title="Mobile view (375px)"
                        className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                          viewport === 'mobile'
                            ? 'bg-[#1a5cdd] text-white'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Mode switcher: Preview vs Code */}
                  <div className="flex items-center bg-white rounded-xl border border-slate-200 p-1">
                    <button
                      onClick={() => setTab(section.id, 'preview')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg cursor-pointer ${
                        activeTab === 'preview'
                          ? 'bg-[#1a5cdd] text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Eye className="h-3 w-3" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => setTab(section.id, 'code')}
                      className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg cursor-pointer ${
                        activeTab === 'code'
                          ? 'bg-[#1a5cdd] text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Code2 className="h-3 w-3" />
                      <span>JSX</span>
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(section.id, section.code)}
                    className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                  >
                    {copiedId === section.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy JSX</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Body: Live Preview or Code View */}
              <div className="p-4 sm:p-6 bg-slate-100/60 overflow-x-auto flex justify-center">
                {activeTab === 'preview' ? (
                  <div
                    className={`transition-all duration-300 w-full ${
                      viewport === 'mobile'
                        ? 'max-w-[375px] shadow-xl border border-slate-300 rounded-3xl overflow-hidden'
                        : viewport === 'tablet'
                        ? 'max-w-[768px] shadow-lg border border-slate-300 rounded-2xl overflow-hidden'
                        : 'max-w-full'
                    }`}
                  >
                    {/* Convert className to class for innerHTML display */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: section.code
                          .replaceAll('className=', 'class=')
                          .replaceAll('&lt;', '<')
                          .replaceAll('&gt;', '>'),
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full">
                    <pre className="p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto border border-slate-800 leading-relaxed max-h-[420px]">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Tags & Footer Info */}
              <div className="px-6 py-3 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-slate-400">Tags:</span>
                  {section.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-mono text-slate-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    React + Tailwind Ready
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

