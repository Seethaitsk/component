'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Palette,
  Type,
  Layers,
  Box,
  Copy,
  Check,
  Sparkles,
  ChevronRight,
  ExternalLink,
  SlidersHorizontal,
  FolderGit2,
  CheckCircle2,
  Code2,
} from 'lucide-react';
import { projectTokens } from '@/data/projectTokens';

const colorPalettes = [
  {
    name: 'SysCorp Primary Brand Blues',
    description: 'Core brand colors used for primary buttons, active links, highlights, and icons.',
    colors: [
      { name: 'Brand 50', hex: '#ebf2ff', tw: 'bg-blue-50', text: 'text-slate-800', note: 'Background tint & pill highlights' },
      { name: 'Brand 100', hex: '#d6e4ff', tw: 'bg-blue-100', text: 'text-slate-800', note: 'Subtle borders & active cards' },
      { name: 'Brand 500', hex: '#2d6ef5', tw: 'bg-blue-500', text: 'text-white', note: 'Vibrant action accents' },
      { name: 'Brand 600 (Primary)', hex: '#1a5cdd', tw: 'bg-[#1a5cdd]', text: 'text-white', note: 'SysCorp primary brand highlight' },
      { name: 'Brand 700 (Hover)', hex: '#1449b2', tw: 'bg-[#1449b2]', text: 'text-white', note: 'Primary button hover state' },
      { name: 'Brand 900', hex: '#0f327e', tw: 'bg-[#0f327e]', text: 'text-white', note: 'Deep contrast surfaces' },
    ],
  },
  {
    name: 'SysCorp Dark Theme Tokens',
    description: 'Navy and midnight background tokens applied to the side panel and dark surfaces.',
    colors: [
      { name: 'Navy 950 (Side Panel)', hex: '#0d1220', tw: 'bg-[#0d1220]', text: 'text-white', note: 'Sidebar navigation panel' },
      { name: 'Navy 900 (Subtle Hover)', hex: '#151b2e', tw: 'bg-[#151b2e]', text: 'text-white', note: 'Sidebar link hover & cards' },
      { name: 'Navy 800 (Card Dark)', hex: '#1e263d', tw: 'bg-[#1e263d]', text: 'text-white', note: 'Elevated dark containers' },
      { name: 'Navy 700 (Border Dark)', hex: '#2a344f', tw: 'bg-[#2a344f]', text: 'text-white', note: 'Dividers & borders in dark mode' },
    ],
  },
  {
    name: 'Semantic Status Colors',
    description: 'System feedback colors for success alerts, warnings, destructive actions, and badges.',
    colors: [
      { name: 'Emerald 500 (Success)', hex: '#10b981', tw: 'bg-emerald-500', text: 'text-white', note: 'Completed status & badges' },
      { name: 'Emerald 50 (Tint)', hex: '#ecfdf5', tw: 'bg-emerald-50', text: 'text-slate-800', note: 'Success alert background' },
      { name: 'Amber 500 (Warning)', hex: '#f59e0b', tw: 'bg-amber-50', text: 'text-white', note: 'In review & alert warnings' },
      { name: 'Amber 50 (Tint)', hex: '#fffbeb', tw: 'bg-amber-50', text: 'text-slate-800', note: 'Warning banner background' },
      { name: 'Rose 500 (Danger)', hex: '#ef4444', tw: 'bg-rose-500', text: 'text-white', note: 'Destructive button & errors' },
      { name: 'Rose 50 (Tint)', hex: '#fef2f2', tw: 'bg-rose-50', text: 'text-slate-800', note: 'Error notification background' },
    ],
  },
  {
    name: 'Neutral Slate Scale',
    description: 'Backgrounds, text hierarchy, and border dividers across light theme pages.',
    colors: [
      { name: 'Slate 50', hex: '#f8fafc', tw: 'bg-slate-50', text: 'text-slate-800', note: 'Main portal page background' },
      { name: 'Slate 100', hex: '#f1f5f9', tw: 'bg-slate-100', text: 'text-slate-800', note: 'Card container & tag chips' },
      { name: 'Slate 200', hex: '#e2e8f0', tw: 'bg-slate-200', text: 'text-slate-800', note: 'Standard light border divider' },
      { name: 'Slate 400', hex: '#94a3b8', tw: 'bg-slate-400', text: 'text-slate-900', note: 'Subtext, captions & icons' },
      { name: 'Slate 600', hex: '#475569', tw: 'bg-slate-600', text: 'text-white', note: 'Body text and secondary labels' },
      { name: 'Slate 900', hex: '#0f172a', tw: 'bg-slate-900', text: 'text-white', note: 'Primary titles & dark text' },
    ],
  },
];

const typographyScale = [
  { level: 'Display 4XL', size: '36px / 2.25rem', weight: 'Font-Extrabold (800)', tw: 'text-4xl font-extrabold', sample: 'Engineering Reusable UI Components' },
  { level: 'Heading 3XL', size: '30px / 1.875rem', weight: 'Font-Bold (700)', tw: 'text-3xl font-bold', sample: 'Production Design Tokens' },
  { level: 'Heading 2XL', size: '24px / 1.5rem', weight: 'Font-Bold (700)', tw: 'text-2xl font-bold', sample: 'Interactive Component Library' },
  { level: 'Heading XL', size: '20px / 1.25rem', weight: 'Font-SemiBold (600)', tw: 'text-xl font-semibold', sample: 'Section Subheadings & Card Titles' },
  { level: 'Body Large', size: '16px / 1rem', weight: 'Font-Medium (500)', tw: 'text-base font-medium', sample: 'Standard body text and readable descriptions across web portals.' },
  { level: 'Body Small', size: '14px / 0.875rem', weight: 'Font-Regular (400)', tw: 'text-sm font-normal', sample: 'Secondary descriptions, table rows, and form input labels.' },
  { level: 'Caption', size: '12px / 0.75rem', weight: 'Font-Medium (500)', tw: 'text-xs font-medium', sample: 'Category badges, timestamps, helper text, and metadata chips.' },
  { level: 'Code / Mono', size: '11px / 0.6875rem', weight: 'Font-Mono (600)', tw: 'text-[11px] font-mono font-semibold', sample: '<PrimaryButton variant="primary">Submit</PrimaryButton>' },
];

const radiiTokens = [
  { name: 'rounded-md', value: '6px', tw: 'rounded-md', sample: 'Tags, badges, small buttons' },
  { name: 'rounded-lg', value: '8px', tw: 'rounded-lg', sample: 'Form inputs, dropdown items' },
  { name: 'rounded-xl', value: '12px', tw: 'rounded-xl', sample: 'Standard buttons, cards, menus' },
  { name: 'rounded-2xl', value: '16px', tw: 'rounded-2xl', sample: 'Hero sections, modals, panels' },
  { name: 'rounded-3xl', value: '24px', tw: 'rounded-3xl', sample: 'Marketing banners, large callouts' },
  { name: 'rounded-full', value: '9999px', tw: 'rounded-full', sample: 'Pill badges, avatars, search bar' },
];

const shadowTokens = [
  { name: 'shadow-xs', css: '0 1px 2px 0 rgb(0 0 0 / 0.05)', sample: 'Pill buttons, micro tags' },
  { name: 'shadow-sm', css: '0 1px 3px 0 rgb(0 0 0 / 0.1)', sample: 'Form inputs, small cards' },
  { name: 'shadow-md', css: '0 4px 6px -1px rgb(0 0 0 / 0.1)', sample: 'Dropdown menus, tooltips' },
  { name: 'shadow-lg', css: '0 10px 15px -3px rgb(0 0 0 / 0.1)', sample: 'Floating action banners, popovers' },
  { name: 'shadow-xl', css: '0 20px 25px -5px rgb(0 0 0 / 0.1)', sample: 'Modals, dialog overlays' },
];

export default function DesignTokensPage() {
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'colors' | 'typography' | 'radii' | 'shadows'
  const [selectedProjectId, setSelectedProjectId] = useState('customer-portal');
  const [copiedValue, setCopiedValue] = useState('');
  const [exportCodeTab, setExportCodeTab] = useState('tailwind'); // 'tailwind' | 'css'

  const selectedProject =
    projectTokens.find((p) => p.id === selectedProjectId) || projectTokens[0];

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedValue(id);
      setTimeout(() => setCopiedValue(''), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#1a5cdd] transition-colors">
          Portal Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-900">Design Tokens</span>
      </nav>

      {/* Hero Header */}
      <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 p-8 sm:p-10 shadow-xs space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-bold text-[#1a5cdd]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>SysCorp Multi-Brand Token Architecture v2.4</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Project-Wise & Global Design Tokens
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Centralized style variables with project-specific theme overrides. Switch between target projects below to inspect colors, corner geometry, typography, and live component previews.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            { id: 'projects', label: 'Project-Wise Themes (5)', icon: SlidersHorizontal },
            { id: 'colors', label: 'Global Color Palette', icon: Palette },
            { id: 'typography', label: 'Typography Scale', icon: Type },
            { id: 'radii', label: 'Border Radii', icon: Box },
            { id: 'shadows', label: 'Elevation & Shadows', icon: Layers },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer shadow-xs ${
                activeTab === id
                  ? 'bg-[#1a5cdd] text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* =========================================================================
          TAB 1: PROJECT-WISE TOKEN STUDIO
         ========================================================================= */}
      {activeTab === 'projects' && (
        <div className="space-y-8">
          {/* Project Switcher Bar */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Select Target Project</h2>
                <p className="text-xs text-slate-500">
                  Choose a project to inspect its customized brand theme, corner curves, and component styling.
                </p>
              </div>
              <span className="text-xs font-bold text-slate-400 font-mono">
                5 Projects Configured
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {projectTokens.map((proj) => {
                const isSelected = selectedProjectId === proj.id;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => setSelectedProjectId(proj.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 shadow-xs ${
                      isSelected
                        ? 'border-[#1a5cdd] bg-blue-50/60 ring-2 ring-blue-500/20'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="h-4 w-4 rounded-full border border-black/10 shadow-xs"
                        style={{ backgroundColor: proj.brand.primary }}
                      />
                      <span className="text-[10px] font-mono text-slate-400">
                        {proj.geometry.radiusPx}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 truncate">{proj.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{proj.category}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Project Card & Live Canvas */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xs overflow-hidden">
            {/* Project Header Bar */}
            <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: selectedProject.brand.primary }}
                  />
                  <h3 className="text-lg font-extrabold text-white tracking-tight">
                    {selectedProject.name}
                  </h3>
                  <span className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-0.5 text-[10px] font-bold text-slate-300">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Figma Link & Node Info */}
              <div className="flex items-center gap-2">
                <a
                  href={selectedProject.figmaFrame.frameUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 px-3.5 py-2 text-xs font-bold text-white border border-slate-700 transition-colors shadow-xs"
                >
                  <span className="h-2 w-2 rounded-full bg-[#1abcfe]"></span>
                  <span>Figma Frame: {selectedProject.figmaFrame.nodeId}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Live Component Preview Themed to this Project */}
            <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Live Component Rendering under {selectedProject.name} Tokens
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Observe how standard components inherit this project&apos;s primary color ({selectedProject.brand.primary}) and radius ({selectedProject.geometry.radiusPx}).
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Density: {selectedProject.geometry.density}
                </span>
              </div>

              {/* Themed Preview Canvas */}
              <div
                className="p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-around gap-6"
                style={{
                  backgroundColor: selectedProject.brand.cardSurface,
                  color: selectedProject.brand.cardSurface === '#ffffff' ? '#0f172a' : '#ffffff',
                }}
              >
                {/* 1. Themed Button */}
                <div className="space-y-1.5 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Primary Button</span>
                  <div>
                    <button
                      type="button"
                      className="px-5 py-2.5 text-xs font-bold shadow-md transition-all cursor-pointer"
                      style={{
                        backgroundColor: selectedProject.brand.primary,
                        color: selectedProject.brand.primaryText,
                        borderRadius: selectedProject.geometry.radiusPx,
                      }}
                    >
                      Action Button
                    </button>
                  </div>
                </div>

                {/* 2. Themed Badge */}
                <div className="space-y-1.5 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Status Pill Badge</span>
                  <div>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold"
                      style={{
                        backgroundColor: selectedProject.brand.primaryTint,
                        color: selectedProject.brand.primary,
                        borderRadius: '9999px',
                        border: `1px solid ${selectedProject.brand.primary}30`,
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: selectedProject.brand.primary }}
                      />
                      <span>Active Match State</span>
                    </span>
                  </div>
                </div>

                {/* 3. Themed Card Snippet */}
                <div
                  className="p-4 border shadow-xs max-w-xs space-y-2 text-left"
                  style={{
                    backgroundColor: selectedProject.brand.cardSurface,
                    borderColor: selectedProject.brand.border,
                    borderRadius: selectedProject.geometry.radiusPx,
                  }}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold">Project Card</span>
                    <span
                      className="text-[10px] font-mono font-bold"
                      style={{ color: selectedProject.brand.primary }}
                    >
                      {selectedProject.brand.primary}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Styled automatically using {selectedProject.name}&apos;s token definitions.
                  </p>
                </div>
              </div>
            </div>

            {/* Token Variables & Values Breakdown */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Brand Colors Swatches */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Palette className="h-4 w-4 text-[#1a5cdd]" />
                  <span>Project Color Overrides</span>
                </h4>

                <div className="space-y-2.5">
                  {[
                    { label: 'Primary Brand Color', val: selectedProject.brand.primary, desc: 'Buttons, highlights, active rings' },
                    { label: 'Primary Hover State', val: selectedProject.brand.primaryHover, desc: 'Hover & pressed action background' },
                    { label: 'Primary Background Tint', val: selectedProject.brand.primaryTint, desc: 'Light highlight surfaces & tags' },
                    { label: 'Dark Surface / Panel', val: selectedProject.brand.darkSurface, desc: 'Navigation and elevated dark containers' },
                    { label: 'Container Border Stroke', val: selectedProject.brand.border, desc: 'Dividers & container bounding lines' },
                  ].map((colorItem) => {
                    const isCopied = copiedValue === colorItem.val;
                    return (
                      <div
                        key={colorItem.label}
                        className="flex items-center justify-between p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="h-8 w-8 rounded-lg border border-black/10 shadow-xs shrink-0"
                            style={{ backgroundColor: colorItem.val }}
                          />
                          <div>
                            <p className="text-xs font-bold text-slate-900">{colorItem.label}</p>
                            <p className="text-[10px] text-slate-500">{colorItem.desc}</p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => copyToClipboard(colorItem.val, colorItem.val)}
                          className="flex items-center gap-1 text-xs font-mono font-bold text-slate-700 bg-white border border-slate-200 hover:border-[#1a5cdd] px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                        >
                          {isCopied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                          <span>{colorItem.val}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Geometry, Typography & Export Snippet */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Box className="h-4 w-4 text-[#1a5cdd]" />
                  <span>Geometry & Typography Specs</span>
                </h4>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Base Radius</span>
                    <p className="font-mono font-extrabold text-slate-900">{selectedProject.geometry.radius} ({selectedProject.geometry.radiusPx})</p>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Button Radius</span>
                    <p className="font-mono font-extrabold text-slate-900">{selectedProject.geometry.buttonRadius}</p>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Font Family</span>
                    <p className="font-bold text-slate-900 truncate">{selectedProject.typography.fontFamily.split(',')[0]}</p>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Density Standard</span>
                    <p className="font-semibold text-slate-700 truncate">{selectedProject.geometry.density.split(' ')[0]}</p>
                  </div>
                </div>

                {/* Export Code Box */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                      <button
                        onClick={() => setExportCodeTab('tailwind')}
                        className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                          exportCodeTab === 'tailwind' ? 'bg-[#1a5cdd] text-white' : 'text-slate-600'
                        }`}
                      >
                        tailwind.config.js
                      </button>
                      <button
                        onClick={() => setExportCodeTab('css')}
                        className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                          exportCodeTab === 'css' ? 'bg-[#1a5cdd] text-white' : 'text-slate-600'
                        }`}
                      >
                        theme.css
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        copyToClipboard(
                          exportCodeTab === 'tailwind'
                            ? selectedProject.tailwindConfig
                            : selectedProject.cssVariables,
                          'export-code'
                        )
                      }
                      className="flex items-center gap-1 text-xs font-bold text-[#1a5cdd] hover:underline cursor-pointer"
                    >
                      {copiedValue === 'export-code' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copiedValue === 'export-code' ? 'Copied Code!' : 'Copy Config'}</span>
                    </button>
                  </div>

                  <pre className="p-3.5 rounded-xl bg-slate-900 text-slate-200 text-[11px] font-mono overflow-auto border border-slate-800 max-h-48 leading-relaxed">
                    <code>
                      {exportCodeTab === 'tailwind'
                        ? selectedProject.tailwindConfig
                        : selectedProject.cssVariables}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: GLOBAL COLOR PALETTES
         ========================================================================= */}
      {activeTab === 'colors' && (
        <div className="space-y-8">
          {colorPalettes.map((palette) => (
            <div key={palette.name} className="space-y-3">
              <div>
                <h2 className="text-lg font-bold text-slate-900">{palette.name}</h2>
                <p className="text-xs text-slate-500">{palette.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {palette.colors.map((c) => {
                  const isCopied = copiedValue === c.hex;
                  return (
                    <div
                      key={c.name}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs space-y-3 hover:border-blue-200 transition-all"
                    >
                      <div
                        className={`h-16 w-full rounded-xl ${c.tw} border border-slate-200/50 flex items-center justify-center font-mono text-xs font-bold shadow-xs ${c.text}`}
                      >
                        {c.hex}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">{c.name}</span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(c.hex, c.hex)}
                            className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-[#1a5cdd] transition-colors cursor-pointer"
                          >
                            {isCopied ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-600" />
                                <span className="text-emerald-600 font-semibold">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy Hex</span>
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-500">{c.note}</p>
                        <div className="pt-1">
                          <code
                            onClick={() => copyToClipboard(c.tw, c.tw)}
                            title="Click to copy Tailwind class"
                            className="text-[10px] font-mono font-semibold bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-[#1a5cdd] px-2 py-0.5 rounded cursor-pointer transition-colors"
                          >
                            {c.tw}
                          </code>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* =========================================================================
          TAB 3: TYPOGRAPHY
         ========================================================================= */}
      {activeTab === 'typography' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Typeface & Scale</h2>
            <p className="text-xs text-slate-500">
              Headings use Plus Jakarta Sans; body and interface text use Inter.
            </p>
          </div>

          <div className="space-y-4">
            {typographyScale.map((t) => (
              <div
                key={t.level}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-2 hover:border-blue-200 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#1a5cdd] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {t.level}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{t.size}</span>
                    <span className="text-xs text-slate-400">· {t.weight}</span>
                  </div>
                  <code className="text-[11px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    {t.tw}
                  </code>
                </div>
                <div className={`${t.tw} text-slate-900 pt-1 leading-snug`}>
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: RADII
         ========================================================================= */}
      {activeTab === 'radii' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Corner Radii Scale</h2>
            <p className="text-xs text-slate-500">
              SysCorp uses rounded-xl (12px) for interactive elements and rounded-2xl (16px) for cards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {radiiTokens.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4"
              >
                <div className="h-24 w-full bg-blue-50 border-2 border-[#1a5cdd] flex items-center justify-center p-3">
                  <div className={`h-14 w-28 bg-[#1a5cdd] text-white flex items-center justify-center text-xs font-bold shadow-sm ${r.tw}`}>
                    {r.value}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-slate-900">{r.name}</span>
                    <span className="text-xs font-mono text-[#1a5cdd] font-semibold">{r.value}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">{r.sample}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 5: SHADOWS
         ========================================================================= */}
      {activeTab === 'shadows' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Elevation & Box Shadows</h2>
            <p className="text-xs text-slate-500">
              Subtle shadows create visual depth without cluttering the interface.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shadowTokens.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4"
              >
                <div className="h-28 w-full bg-slate-50 rounded-xl flex items-center justify-center p-4">
                  <div className={`h-16 w-36 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-xs font-bold text-slate-800 ${s.name}`}>
                    {s.name}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-slate-900">{s.name}</span>
                    <span className="text-[11px] text-slate-400">{s.sample}</span>
                  </div>
                  <code className="text-[10px] font-mono text-slate-500 block truncate mt-1">
                    {s.css}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
