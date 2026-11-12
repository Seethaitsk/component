'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MousePointerClick,
  TextCursorInput,
  Compass,
  Layers,
  AppWindow,
  Table,
  AlertCircle,
  LayoutTemplate,
  Images,
  Dice5,
  Home,
  Search,
  Code2,
  X,
} from 'lucide-react';
import { categories } from '@/data/categories';
import { componentsData } from '@/data/components';

const iconMap = {
  MousePointerClick,
  TextCursorInput,
  Compass,
  Layers,
  AppWindow,
  Table,
  AlertCircle,
  LayoutTemplate,
  Images,
  Dice5,
};

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();

  const getCategoryCount = (slug) => {
    return componentsData.filter((c) => c.category === slug).length;
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-xs lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        aria-label="Component categories"
        className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 flex flex-col transition-transform duration-200 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0 ${
          open ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Mobile Header */}
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-100 dark:border-slate-800 lg:hidden shrink-0">
          <span className="font-bold text-slate-900 dark:text-white">Categories</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6 pb-12">
          {/* Main Navigation */}
          <div>
            <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Menu
            </p>
            <nav className="space-y-1">
              <Link
                href="/"
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
                  pathname === '/'
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-200'
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Portal Home</span>
              </Link>

              <Link
                href="/search"
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
                  pathname === '/search'
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-200'
                }`}
              >
                <Search className="h-4 w-4" />
                <span>Search & Filter</span>
              </Link>
            </nav>
          </div>

          {/* Categories List */}
          <div>
            <div className="flex items-center justify-between px-3 mb-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Categories
              </p>
              <span className="text-[10px] font-mono text-slate-400">{categories.length}</span>
            </div>

            <nav className="space-y-1" aria-label="Component Categories">
              {categories.map((cat) => {
                const Icon = iconMap[cat.icon] || Layers;
                const count = getCategoryCount(cat.slug);
                const isActive = pathname === `/category/${cat.slug}`;

                return (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    onClick={onClose}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                      <span className="truncate">{cat.name}</span>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Tech Stacks filter */}
          <div>
            <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Tech Stack
            </p>
            <div className="space-y-1">
              <Link
                href="/search?tech=React"
                onClick={onClose}
                className="flex items-center justify-between rounded-xl px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/60"
              >
                <span>React + Tailwind</span>
                <span className="text-[10px] font-mono text-indigo-600 font-bold">100%</span>
              </Link>
              <Link
                href="/search?tech=Bootstrap"
                onClick={onClose}
                className="flex items-center justify-between rounded-xl px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/60"
              >
                <div className="flex items-center gap-1.5">
                  <Code2 className="h-3.5 w-3.5 text-violet-600" />
                  <span>Bootstrap 5</span>
                </div>
                <span className="text-[10px] font-bold bg-violet-50 text-violet-700 px-1.5 py-0.5 rounded dark:bg-violet-950 dark:text-violet-300">
                  Ready
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="border-t border-slate-100 dark:border-slate-800 p-4 text-[11px] text-slate-400 shrink-0">
          <p className="font-semibold text-slate-600 dark:text-slate-300">Internal Library</p>
          <p className="mt-0.5">Updated: Nov 2026</p>
        </div>
      </aside>
    </>
  );
}
