'use client';

import React from 'react';

export default function Badge({
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const variants = {
    primary: 'bg-blue-50 text-[#1a5cdd] border-blue-200',
    secondary: 'bg-slate-100 text-slate-700 border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    danger: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children || 'Active Badge'}
    </span>
  );
}
