/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

export default function Card({
  title,
  subtitle,
  image,
  badge,
  footer,
  hoverable = true,
  className = '',
  children,
  ...props
}) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white text-slate-900 shadow-xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 overflow-hidden transition-all duration-200 ${
        hoverable ? 'hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700' : ''
      } ${className}`}
      {...props}
    >
      {image && (
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img src={image} alt={title || 'Card banner'} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="p-5 space-y-3">
        {(title || badge) && (
          <div className="flex items-start justify-between gap-3">
            <div>
              {title && <h3 className="text-lg font-semibold tracking-tight">{title}</h3>}
              {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{subtitle}</p>}
            </div>
            {badge && (
              <span className="shrink-0 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                {badge}
              </span>
            )}
          </div>
        )}

        {children && <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{children}</div>}

        {footer && <div className="pt-3 border-t border-slate-100 dark:border-slate-800">{footer}</div>}
      </div>
    </div>
  );
}

