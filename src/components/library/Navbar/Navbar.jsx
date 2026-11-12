'use client';

import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton';

export default function Navbar({
  brandName = 'DevPortal',
  links = [
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Documentation', href: '#docs' },
    { label: 'Pricing', href: '#pricing' },
  ],
  ctaText = 'Get Started',
  onCtaClick,
  className = '',
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors ${className}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
          <span className="h-8 w-8 rounded-lg bg-indigo-600 text-white grid place-items-center font-extrabold text-sm shadow-xs">
            {brandName.slice(0, 2).toUpperCase()}
          </span>
          <span>{brandName}</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <PrimaryButton size="sm" onClick={onCtaClick}>
            {ctaText}
          </PrimaryButton>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3 bg-white dark:bg-slate-900">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <PrimaryButton className="w-full justify-center" onClick={() => { setMobileOpen(false); onCtaClick?.(); }}>
              {ctaText}
            </PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}

