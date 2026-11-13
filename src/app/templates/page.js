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
  Laptop,
  Tablet,
  Smartphone,
  X,
  Sparkles,
  Globe,
  RotateCcw,
  Zap,
} from 'lucide-react';
import { templatesData } from '@/data/templatesData';
import { templateWebsitesData } from '@/data/templateWebsitesData';
import { componentsData } from '@/data/components';

export default function TemplatesPage() {
  const [activeMainTab, setActiveMainTab] = useState('websites'); // 'websites' | 'pages'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Simulator state for Live Template Websites
  const [simulatorSite, setSimulatorSite] = useState(null); // templateWebsitesData object or custom url
  const [simulatorViewport, setSimulatorViewport] = useState('desktop'); // 'desktop' | 'laptop' | 'tablet' | 'mobile'
  const [iframeKey, setIframeKey] = useState(0);

  // External URL input
  const [customUrl, setCustomUrl] = useState('');

  // Page template modal state
  const [activePageTemplate, setActivePageTemplate] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Categories based on active main tab
  const categories = useMemo(() => {
    if (activeMainTab === 'websites') {
      const set = new Set(templateWebsitesData.map((t) => t.category));
      return ['All', ...Array.from(set)];
    } else {
      const set = new Set(templatesData.map((t) => t.category));
      return ['All', ...Array.from(set)];
    }
  }, [activeMainTab]);

  const filteredWebsites = useMemo(() => {
    return templateWebsitesData.filter((site) => {
      const matchesCategory =
        selectedCategory === 'All' || site.category === selectedCategory;
      const matchesSearch =
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const filteredPages = useMemo(() => {
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

  const launchCustomUrlSimulator = (e) => {
    e.preventDefault();
    if (!customUrl.trim()) return;
    let url = customUrl.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    setSimulatorSite({
      id: 'custom-preview',
      name: url.replace(/^https?:\/\//, ''),
      previewPath: url,
      isExternal: true,
    });
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-slate-50 p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-[#1a5cdd]">
              <Globe className="h-3.5 w-3.5" />
              <span>Full Website & Page Architecture</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Template Websites & Page Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore complete, live interactive template websites and production-ready page boilerplates built exclusively using SysCorp UI atomic components.
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

        {/* Tab Switcher: Live Template Websites vs Full Page Templates */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200/60">
          <div className="inline-flex p-1 bg-slate-200/60 rounded-2xl border border-slate-200">
            <button
              onClick={() => {
                setActiveMainTab('websites');
                setSelectedCategory('All');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeMainTab === 'websites'
                  ? 'bg-white text-[#1a5cdd] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="h-4 w-4" />
              <span>Live Template Websites</span>
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-blue-50 text-[#1a5cdd] text-[10px] font-mono">
                {templateWebsitesData.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveMainTab('pages');
                setSelectedCategory('All');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeMainTab === 'pages'
                  ? 'bg-white text-[#1a5cdd] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <AppWindow className="h-4 w-4" />
              <span>Page Boilerplates</span>
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-600 text-[10px] font-mono">
                {templatesData.length}
              </span>
            </button>
          </div>

          {/* Quick External Website Previewer Input */}
          <form onSubmit={launchCustomUrlSimulator} className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-72">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="Preview any URL (e.g. your-site.com)..."
                className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-[#1a5cdd] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors shadow-xs cursor-pointer shrink-0"
            >
              Simulate
            </button>
          </form>
        </div>

        {/* Filter Categories & Search */}
        <div className="pt-2 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
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

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          TAB 1: LIVE TEMPLATE WEBSITES
         ========================================================================= */}
      {activeMainTab === 'websites' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredWebsites.map((site) => (
              <div
                key={site.id}
                className="rounded-3xl border border-slate-200 bg-white shadow-xs hover:border-[#1a5cdd] hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
              >
                {/* Mini Website Preview Canvas */}
                <div className="h-56 bg-slate-900 p-4 relative overflow-hidden flex flex-col justify-between border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-500/20 text-[#5b8def] px-2.5 py-0.5 text-[10px] font-bold border border-blue-500/30">
                      {site.category}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      ● Live Multi-Screen
                    </span>
                  </div>

                  {/* Wireframe overlay */}
                  <div className="space-y-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="h-3 w-24 bg-slate-700 rounded-sm"></div>
                      <div className="flex gap-2">
                        <div className="h-2 w-8 bg-slate-800 rounded"></div>
                        <div className="h-2 w-8 bg-slate-800 rounded"></div>
                        <div className="h-2 w-12 bg-blue-600 rounded"></div>
                      </div>
                    </div>
                    <div className="py-2 space-y-1.5 text-center">
                      <div className="h-4 w-3/4 bg-slate-700 rounded mx-auto"></div>
                      <div className="h-2 w-1/2 bg-slate-800 rounded mx-auto"></div>
                    </div>
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-slate-400 font-mono">
                      {site.pages.length} Pages Included
                    </span>
                    <button
                      onClick={() => setSimulatorSite(site)}
                      className="flex items-center gap-1.5 rounded-xl bg-[#1a5cdd] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors shadow-xs cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>Launch Interactive Simulator</span>
                    </button>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#1a5cdd] transition-colors">
                      {site.name}
                    </h2>
                    <p className="text-xs font-semibold text-[#1a5cdd]">{site.tagline}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {site.description}
                    </p>
                  </div>

                  {/* Pages Included */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Sections & Screens
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {site.pages.map((p) => (
                        <span
                          key={p}
                          className="rounded-lg bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Constituent Components */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Components Used
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {site.componentsUsed.map((depId) => {
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

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSimulatorSite(site)}
                      className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <Monitor className="h-3.5 w-3.5 text-[#1a5cdd]" />
                      <span>Test Responsive</span>
                    </button>

                    <a
                      href={site.previewPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-bold text-[#1a5cdd] hover:underline"
                    >
                      <span>Open Live Site</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: FULL PAGE TEMPLATES
         ========================================================================= */}
      {activeMainTab === 'pages' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPages.map((template) => (
            <div
              key={template.id}
              className="rounded-3xl border border-slate-200 bg-white shadow-xs hover:border-[#1a5cdd] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="h-44 bg-slate-900 p-4 relative overflow-hidden flex flex-col justify-between border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-500/20 text-[#5b8def] px-2.5 py-0.5 text-[10px] font-bold border border-blue-500/30">
                    {template.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Next.js App Router</span>
                </div>

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
                    onClick={() => setActivePageTemplate(template)}
                    className="flex items-center gap-1.5 rounded-lg bg-[#1a5cdd] px-3 py-1 text-xs font-bold text-white shadow-xs hover:bg-[#1449b2] transition-colors cursor-pointer"
                  >
                    <Eye className="h-3 w-3" />
                    <span>View Boilerplate</span>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="text-base font-bold text-slate-900 group-hover:text-[#1a5cdd] transition-colors">
                    {template.name}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {template.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleCopy(template.id, template.code)}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    {copiedId === template.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setActivePageTemplate(template)}
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
      )}

      {/* =========================================================================
          RESPONSIVE LIVE WEBSITE SIMULATOR MODAL
         ========================================================================= */}
      {simulatorSite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="w-full max-w-7xl h-[94vh] bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden">
            {/* Simulator Browser Chrome Topbar */}
            <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-950 gap-3">
              {/* Left: Window Traffic Dots + Site Title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-amber-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white truncate max-w-[160px] sm:max-w-none">
                    {simulatorSite.name}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Live Session
                  </span>
                </div>
              </div>

              {/* Middle: Simulated Address Bar */}
              <div className="flex-1 max-w-md hidden md:flex items-center bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-mono text-slate-300">
                <Globe className="h-3.5 w-3.5 text-[#5b8def] mr-2 shrink-0" />
                <span className="truncate text-slate-400">
                  {simulatorSite.isExternal
                    ? simulatorSite.previewPath
                    : `https://syscorp.dev${simulatorSite.previewPath}`}
                </span>
                <button
                  onClick={() => setIframeKey((k) => k + 1)}
                  title="Reload preview"
                  className="ml-auto text-slate-400 hover:text-white"
                >
                  <RotateCcw className="h-3 w-3" />
                </button>
              </div>

              {/* Right: Viewport Controls & Actions */}
              <div className="flex items-center gap-2">
                {/* Viewport Toggles */}
                <div className="flex items-center bg-slate-900 rounded-xl border border-slate-800 p-1">
                  <button
                    onClick={() => setSimulatorViewport('desktop')}
                    title="Desktop 100%"
                    className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                      simulatorViewport === 'desktop'
                        ? 'bg-[#1a5cdd] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => setSimulatorViewport('laptop')}
                    title="Laptop 1024px"
                    className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                      simulatorViewport === 'laptop'
                        ? 'bg-[#1a5cdd] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Laptop className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => setSimulatorViewport('tablet')}
                    title="Tablet 768px"
                    className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                      simulatorViewport === 'tablet'
                        ? 'bg-[#1a5cdd] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Tablet className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => setSimulatorViewport('mobile')}
                    title="Mobile 375px"
                    className={`p-1.5 rounded-lg text-xs cursor-pointer ${
                      simulatorViewport === 'mobile'
                        ? 'bg-[#1a5cdd] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Open in Full Browser Window */}
                <a
                  href={simulatorSite.previewPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 text-xs font-semibold"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setSimulatorSite(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white cursor-pointer ml-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Simulator Iframe Canvas */}
            <div className="flex-1 bg-slate-950 p-2 sm:p-4 overflow-auto flex justify-center items-start">
              <div
                className={`h-full bg-white transition-all duration-300 overflow-hidden shadow-2xl ${
                  simulatorViewport === 'mobile'
                    ? 'w-[375px] rounded-[36px] border-8 border-slate-800 shadow-blue-500/10'
                    : simulatorViewport === 'tablet'
                    ? 'w-[768px] rounded-2xl border-4 border-slate-800'
                    : simulatorViewport === 'laptop'
                    ? 'w-[1024px] rounded-xl border-2 border-slate-800'
                    : 'w-full rounded-xl border border-slate-800'
                }`}
              >
                <iframe
                  key={iframeKey}
                  src={simulatorSite.previewPath}
                  title={simulatorSite.name}
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PAGE TEMPLATE BOILERPLATE MODAL
         ========================================================================= */}
      {activePageTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs">
          <div className="w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-[#1a5cdd]">
                  {activePageTemplate.category}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {activePageTemplate.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(activePageTemplate.id, activePageTemplate.code)}
                  className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                >
                  {copiedId === activePageTemplate.id ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Boilerplate</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setActivePageTemplate(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-200 hover:text-slate-900 cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-slate-900">
              <pre className="text-slate-200 text-xs font-mono overflow-x-auto leading-relaxed">
                <code>{activePageTemplate.code}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
