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
} from 'lucide-react';

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
      { name: 'Amber 500 (Warning)', hex: '#f59e0b', tw: 'bg-amber-500', text: 'text-white', note: 'In review & alert warnings' },
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
  const [activeTab, setActiveTab] = useState('colors');
  const [copiedValue, setCopiedValue] = useState('');

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
    <div className="space-y-10">
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
          <span>SysCorp Design System v2.0</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Design Tokens & Theme Guide
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Standardized visual variables for colors, typography scales, elevation shadows, and border radii used across SysCorp applications.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            { id: 'colors', label: 'Color Palette', icon: Palette },
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

      {/* Tab 1: Colors */}
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
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs space-y-3 hover:border-blue-300 transition-all group"
                    >
                      {/* Swatch */}
                      <div
                        className={`h-20 w-full rounded-xl border border-black/5 shadow-xs flex items-end p-2.5 ${c.tw}`}
                      >
                        <span className={`text-[11px] font-bold font-mono px-2 py-0.5 rounded-md bg-black/20 backdrop-blur-xs ${c.text}`}>
                          {c.hex}
                        </span>
                      </div>

                      {/* Info & Copy Buttons */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900">{c.name}</span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(c.hex, c.hex)}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1a5cdd] hover:underline cursor-pointer"
                          >
                            {isCopied ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-600" />
                                <span className="text-emerald-600">Copied!</span>
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

      {/* Tab 2: Typography */}
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

      {/* Tab 3: Radii */}
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

      {/* Tab 4: Shadows */}
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

