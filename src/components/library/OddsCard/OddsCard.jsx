'use client';

import React, { useState } from 'react';

export default function OddsCard({
  match = 'Manchester City vs Real Madrid',
  league = 'UEFA Champions League',
  isLive = true,
  liveMinute = '64\'',
  score = '2 - 1',
  odds = [
    { label: '1 (Home)', value: '1.85' },
    { label: 'X (Draw)', value: '3.60' },
    { label: '2 (Away)', value: '4.20' },
  ],
  onSelectOdds,
  className = '',
}) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (odd) => {
    setSelected(odd.label === selected ? null : odd.label);
    onSelectOdds?.(odd);
  };

  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900 max-w-md mx-auto space-y-4 ${className}`}>
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-500 dark:text-slate-400">{league}</span>
        {isLive && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-0.5 font-bold text-rose-600 dark:bg-rose-950/50 dark:text-rose-400">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-600 animate-pulse" />
            LIVE {liveMinute}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between text-slate-900 dark:text-white">
        <h4 className="font-bold text-base">{match}</h4>
        {isLive && <span className="font-mono text-lg font-extrabold tracking-wider">{score}</span>}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {odds.map((odd) => {
          const isSelected = selected === odd.label;
          return (
            <button
              key={odd.label}
              type="button"
              onClick={() => handleSelect(odd)}
              className={`flex flex-col items-center justify-center rounded-xl p-2.5 transition-all cursor-pointer border ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-xs dark:border-indigo-400 dark:bg-indigo-950/60 dark:text-indigo-200'
                  : 'border-slate-200 bg-slate-50/70 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200'
              }`}
            >
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{odd.label}</span>
              <span className="text-sm font-bold mt-0.5 font-mono">{odd.value}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

