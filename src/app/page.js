import React from 'react';
import Link from 'next/link';
import { Search, Sparkles, Code2, ArrowRight, Layers, CheckCircle2, PlusCircle } from 'lucide-react';
import { categories } from '@/data/categories';
import { componentsData } from '@/data/components';
import CategoryCard from '@/components/portal/CategoryCard';
import ComponentCard from '@/components/portal/ComponentCard';

export default function HomePage() {
  // Recently added components (sorted by dateAdded)
  const recentComponents = [...componentsData]
    .sort((a, b) => b.dateAdded.localeCompare(a.dateAdded))
    .slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-slate-50 p-8 sm:p-12 text-slate-900 shadow-sm border border-slate-200/80">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-semibold text-[#1a5cdd]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>SysCorp Engineering Library</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            Reusable UI Components{' '}
            <span className="text-[#1a5cdd] font-semibold">
              for Modern Teams
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Browse, preview, and copy production-tested components across React, Tailwind CSS, and Bootstrap 5 with responsive previews and accessible props tables.
          </p>

          {/* Quick Search & Create Component Action */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <form action="/search" method="GET" className="flex-1 min-w-[260px] max-w-lg">
              <div className="relative flex items-center">
                <Search className="absolute left-4 h-4 w-4 text-slate-400" />
                <input
                  type="search"
                  name="q"
                  placeholder="Find a component (e.g. Button, modal, table)..."
                  className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-24 text-sm text-slate-800 placeholder:text-slate-400 shadow-xs outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
                />
                <button
                  type="submit"
                  className="absolute right-2 rounded-xl bg-[#1a5cdd] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors cursor-pointer shadow-xs"
                >
                  Search
                </button>
              </div>
            </form>

            <Link
              href="/new"
              className="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-white px-4 py-3 text-xs font-bold text-[#1a5cdd] hover:bg-blue-50 transition-colors shadow-xs"
            >
              <PlusCircle className="h-4 w-4 text-[#1a5cdd]" />
              <span>Create Component</span>
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80 pt-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#1a5cdd]">
              {componentsData.length}
            </div>
            <div className="text-xs text-slate-500">Total Components</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#1a5cdd]">
              {categories.length}
            </div>
            <div className="text-xs text-slate-500">UI Categories</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#1a5cdd]">
              3
            </div>
            <div className="text-xs text-slate-500">Tech Stacks (React, TW, BS5)</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-600">
              100%
            </div>
            <div className="text-xs text-slate-500">Accessible & Responsive</div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Browse by Category
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Find components organized by interaction pattern and layout function.
            </p>
          </div>
          <Link
            href="/search"
            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <span>View all categories</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* Recently Added Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Recently Added Components
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Latest additions to our team UI repository ready for adoption.
            </p>
          </div>
          <Link
            href="/search"
            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <span>Browse entire catalog</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recentComponents.map((comp) => (
            <ComponentCard key={comp.id} component={comp} />
          ))}
        </div>
      </section>

      {/* Bootstrap 5 Callout Banner */}
      <section className="rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50 to-indigo-50 p-6 dark:border-violet-900 dark:bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 dark:text-violet-400 uppercase tracking-wider">
            <Code2 className="h-4 w-4" />
            <span>Bootstrap 5 Integration</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Need components for legacy or Bootstrap-based apps?
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
            Every component in our library includes copy-paste ready Bootstrap 5 HTML snippets and a dedicated preview tab.
          </p>
        </div>

        <Link
          href="/search?tech=Bootstrap"
          className="shrink-0 rounded-xl bg-violet-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-violet-700 shadow-md transition-colors"
        >
          Explore Bootstrap Components
        </Link>
      </section>
    </div>
  );
}
