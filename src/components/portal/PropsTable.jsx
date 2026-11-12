'use client';

import React from 'react';

export default function PropsTable({ props = [] }) {
  if (!props || props.length === 0) {
    return <p className="text-xs text-slate-400 italic">No specific props defined for this component.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900">
      <table className="w-full text-left text-xs">
        <thead className="border-b border-slate-200 bg-slate-50/80 uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-400 font-semibold">
          <tr>
            <th scope="col" className="px-4 py-3">Prop</th>
            <th scope="col" className="px-4 py-3">Type</th>
            <th scope="col" className="px-4 py-3">Default</th>
            <th scope="col" className="px-4 py-3">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {props.map((p) => (
            <tr key={p.name} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
              <td className="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">
                {p.name}
              </td>
              <td className="px-4 py-3 font-mono text-slate-600 dark:text-slate-300">
                <span className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">{p.type}</span>
              </td>
              <td className="px-4 py-3 font-mono text-slate-500 dark:text-slate-400">
                {p.default}
              </td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                {p.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

