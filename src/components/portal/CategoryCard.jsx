'use client';

import React from 'react';
import Link from 'next/link';
import {
  MousePointerClick,
  TextCursorInput,
  Compass,
  Layers,
  AppWindow,
  Table,
  AlertCircle,
  LayoutTemplate,
  Images,
  Dice5,
  ArrowRight,
} from 'lucide-react';
import { componentsData } from '@/data/components';

const iconMap = {
  MousePointerClick,
  TextCursorInput,
  Compass,
  Layers,
  AppWindow,
  Table,
  AlertCircle,
  LayoutTemplate,
  Images,
  Dice5,
};

export default function CategoryCard({ category }) {
  const Icon = iconMap[category.icon] || Layers;
  const count = componentsData.filter((c) => c.category === category.slug).length;

  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-tr ${category.color} text-white shadow-md transition-transform group-hover:scale-105`}>
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {count} {count === 1 ? 'component' : 'components'}
          </span>
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {category.name}
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
            {category.description}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
        <span>Explore category</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

