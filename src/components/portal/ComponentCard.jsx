'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import ComponentRenderer from '@/components/library/ComponentRenderer';

export default function ComponentCard({ component }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/component/${component.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#1a5cdd]/50 hover:shadow-md"
    >
      <div className="space-y-4">
        {/* Header: Name, Category, Arrow */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#1a5cdd] bg-blue-50 px-2.5 py-0.5 rounded-full">
              {component.category}
            </span>
            <h3 className="mt-2 text-base font-bold text-slate-900 group-hover:text-[#1a5cdd] transition-colors">
              <Link
                href={`/component/${component.id}`}
                onClick={(e) => e.stopPropagation()}
                className="hover:underline focus:outline-none"
              >
                {component.name}
              </Link>
            </h3>
          </div>
          <Link
            href={`/component/${component.id}`}
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${component.name}`}
            className="rounded-full p-1 text-slate-400 group-hover:text-[#1a5cdd] transition-colors"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Live Preview Miniature Box */}
        <div className="relative aspect-video w-full rounded-xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center p-3 select-none">
          <div className="w-full flex items-center justify-center">
            <ComponentRenderer
              componentId={component.id}
              isThumbnail={true}
              previewMode="react"
            />
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
          {component.figma && (
            <span
              className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
              title={`Figma Node ${component.figma.nodeId}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0d99ff]"></span>
              <span>Figma</span>
            </span>
          )}
        </div>

        <span className="text-[11px] text-slate-400">
          Used in {component.projectsUsedIn.length} projects
        </span>
      </div>
    </div>
  );
}
