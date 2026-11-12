'use client';

import React from 'react';

export default function Footer({
  brandName = 'DevPortal',
  tagline = 'Modern UI components crafted for scalability and precision.',
  year = 2026,
  columns = [
    {
      title: 'Components',
      links: [
        { label: 'Buttons', href: '#' },
        { label: 'Forms', href: '#' },
        { label: 'Navigation', href: '#' },
        { label: 'Data Tables', href: '#' },
      ],
    },
    {
      title: 'Ecosystem',
      links: [
        { label: 'Design System', href: '#' },
        { label: 'GitHub Repository', href: '#' },
        { label: 'Figma Assets', href: '#' },
        { label: 'Changelog', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Engineering Blog', href: '#' },
        { label: 'Architecture', href: '#' },
        { label: 'Security & SLA', href: '#' },
        { label: 'Careers', href: '#' },
      ],
    },
  ],
  className = '',
}) {
  return (
    <footer className={`w-full border-t border-slate-200 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
              <span className="h-7 w-7 rounded-md bg-indigo-600 text-white grid place-items-center font-extrabold text-xs">
                {brandName.slice(0, 2).toUpperCase()}
              </span>
              <span>{brandName}</span>
            </div>
            <p className="text-sm max-w-sm leading-relaxed">{tagline}</p>
            <p className="text-xs text-slate-400 dark:text-slate-500 pt-2">
              © {year} {brandName} Inc. All rights reserved.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                {col.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

