'use client';

import React from 'react';

export default function Avatar({
  initials = 'SC',
  status = 'online',
  className = '',
  children,
  ...props
}) {
  const statusColors = {
    online: 'bg-emerald-500',
    busy: 'bg-rose-500',
    offline: 'bg-slate-400',
  };

  return (
    <div
      className={`relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#1a5cdd] to-indigo-600 font-bold text-white shadow-sm ring-2 ring-white select-none ${className}`}
      {...props}
    >
      {children || initials}
      {status && (
        <span
          className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full ${statusColors[status] || 'bg-emerald-500'} ring-2 ring-white`}
          title={`Status: ${status}`}
        />
      )}
    </div>
  );
}
