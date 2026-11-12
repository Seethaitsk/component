'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Code2 } from 'lucide-react';
import ComponentRenderer from '@/components/library/ComponentRenderer';

export default function ComponentCard({ component }) {
  return (
    <Link
      href={`/component/${component.id}`}
      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
    >
      <div className="space-y-4">
        {/* Header: Name, Category, Arrow */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-full">
              {component.category}
            </span>
            <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {component.name}
            </h3>
          </div>
          <span className="rounded-full p-1 text-slate-400 group-hover:text-indigo-600 transition-colors">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        {/* Live Preview Miniature Box */}
        <div className="relative aspect-video w-full rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 overflow-hidden flex items-center justify-center p-2 pointer-events-none select-none">
          <div className="scale-75 origin-center w-full max-w-full">
            <ComponentRenderer componentId={component.id} previewMode="react" />
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {component.description}
        </p>
      </div>

      {/* Footer: Tech Pills & Projects */}
      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {component.tech.map((t) => (
            <span
              key={t}
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                t === 'Bootstrap'
                  ? 'bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300'
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <span className="text-[11px] text-slate-400">
          Used in {component.projectsUsedIn.length} projects
        </span>
      </div>
    </Link>
  );
}

