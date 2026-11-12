'use client';

import React from 'react';

export default function Badge({ className = '', children, ...props }) {
  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-800 shadow-xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 ${className}`}
      {...props}
    >
      {children || 'Badge Component'}
    </div>
  );
}
