'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, Filter, X, RotateCcw, Layers } from 'lucide-react';
import { componentsData } from '@/data/components';
import { categories } from '@/data/categories';
import ComponentCard from '@/components/portal/ComponentCard';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'all';
  const initialTech = searchParams.get('tech') || 'all';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTech, setSelectedTech] = useState(initialTech);
  const [selectedTag, setSelectedTag] = useState('all');

  // Collect all unique tags across all components
  const allTags = useMemo(() => {
    const set = new Set();
    componentsData.forEach((c) => c.tags?.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filteredComponents = useMemo(() => {
    return componentsData.filter((c) => {
      // 1. Text Query
      if (query.trim()) {
        const q = query.toLowerCase();
        const matchesName = c.name.toLowerCase().includes(q);
        const matchesDesc = c.description.toLowerCase().includes(q);
        const matchesCat = c.category.toLowerCase().includes(q);
        const matchesTags = c.tags?.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesCat && !matchesTags) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'all' && c.category !== selectedCategory) {
        return false;
      }

      // 3. Tech Stack Filter
      if (selectedTech !== 'all' && !c.tech.includes(selectedTech)) {
        return false;
      }

      // 4. Tag Filter
      if (selectedTag !== 'all' && !c.tags.includes(selectedTag)) {
        return false;
      }

      return true;
    });
  }, [query, selectedCategory, selectedTech, selectedTag]);

  const handleReset = () => {
    setQuery('');
    setSelectedCategory('all');
    setSelectedTech('all');
    setSelectedTag('all');
  };

  const hasActiveFilters = query.trim() || selectedCategory !== 'all' || selectedTech !== 'all' || selectedTag !== 'all';

  return (
    <div className="space-y-8">
      {/* Search Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Component Search & Filter
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Explore all {componentsData.length} reusable components filtered by keyword, interaction category, tech stack, or tags.
        </p>
      </div>

      {/* Filter Controls Box */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 shadow-xs space-y-4">
        {/* Main Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by component name, purpose, or tag..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-indigo-500"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Dropdowns & Pills Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          {/* Category Select */}
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 block">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none focus:border-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <option value="all">All Categories ({categories.length})</option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tech Select */}
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 block">
              Tech Stack
            </label>
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none focus:border-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <option value="all">All Tech Stacks</option>
              <option value="React">React (Tailwind)</option>
              <option value="Bootstrap">Bootstrap 5</option>
              <option value="Tailwind">Tailwind CSS</option>
            </select>
          </div>

          {/* Tag Select */}
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 block">
              Specific Tag
            </label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none focus:border-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <option value="all">All Tags ({allTags.length})</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  #{tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Bar & Reset */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="flex flex-wrap items-center gap-1.5 text-slate-500">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Active filters:</span>
              {query && <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">&ldquo;{query}&rdquo;</span>}
              {selectedCategory !== 'all' && (
                <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 px-2 py-0.5 rounded font-semibold">
                  Category: {selectedCategory}
                </span>
              )}
              {selectedTech !== 'all' && (
                <span className="bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300 px-2 py-0.5 rounded font-semibold">
                  Tech: {selectedTech}
                </span>
              )}
              {selectedTag !== 'all' && (
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono">
                  #{selectedTag}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1 font-semibold text-rose-600 hover:text-rose-700 cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset all</span>
            </button>
          </div>
        )}
      </div>

      {/* Results Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Showing <span className="text-indigo-600 font-bold">{filteredComponents.length}</span> matching components
          </p>
        </div>

        {filteredComponents.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
            <Layers className="h-10 w-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-white">
              No components matched your search
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or clearing your tech stack and category filters.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredComponents.map((comp) => (
              <ComponentCard key={comp.id} component={comp} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-slate-400">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}

