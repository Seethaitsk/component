'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, Compass, Code2, Menu, X, Sparkles } from 'lucide-react';

export default function Header({ onMobileMenuToggle }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 transition-colors">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Mobile Toggle + Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMobileMenuToggle}
            aria-label="Toggle navigation sidebar"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/" className="flex items-center group py-1" aria-label="SysCorp Home">
            {/* SysCorp Logo (Light Mode) */}
            <Image
              src="/syscorp-logo-light.png"
              alt="SysCorp"
              width={158}
              height={36}
              priority
              style={{ width: 'auto', height: 'auto' }}
              className="h-8 sm:h-9 w-auto dark:hidden transition-transform group-hover:scale-[1.02]"
            />
            {/* SysCorp Logo (Dark Mode) */}
            <Image
              src="/syscorp-logo-dark.png"
              alt="SysCorp"
              width={158}
              height={36}
              priority
              style={{ width: 'auto', height: 'auto' }}
              className="h-8 sm:h-9 w-auto hidden dark:block transition-transform group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Center: Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md mx-4 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search components, props, tags (e.g. Button, modal, loading)..."
              className="w-full rounded-full border border-slate-200 bg-slate-50/80 py-2 pl-9 pr-4 text-xs text-slate-800 placeholder:text-slate-400 transition-all outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:ring-indigo-900/40"
            />
          </div>
        </form>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/search"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
          >
            <Search className="h-3.5 w-3.5 text-indigo-600" />
            <span className="hidden md:inline">Browse & Filter</span>
          </Link>
          <Link
            href="/search?tech=Bootstrap"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-violet-700 bg-violet-50 hover:bg-violet-100 dark:bg-violet-950/50 dark:text-violet-300 transition-colors"
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>Bootstrap 5</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

