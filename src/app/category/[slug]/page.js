import React, { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Layers, ArrowLeft } from 'lucide-react';
import { categories } from '@/data/categories';
import { componentsData } from '@/data/components';
import ComponentCard from '@/components/portal/ComponentCard';

// Generate static params for all categories
export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

function CategorySkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded"></div>
      <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900 space-y-4">
        <div className="h-6 w-24 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
        <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded"></div>
        <div className="h-4 w-96 bg-slate-200 dark:bg-slate-800 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64 rounded-2xl bg-slate-100 dark:bg-slate-800/50"></div>
        <div className="h-64 rounded-2xl bg-slate-100 dark:bg-slate-800/50"></div>
      </div>
    </div>
  );
}

async function CategoryContent({ params }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryComponents = componentsData.filter((c) => c.category === slug);

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#1a5cdd] transition-colors">
          Portal Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-900">{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-3">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#1a5cdd]">
            {categoryComponents.length} {categoryComponents.length === 1 ? 'Component' : 'Components'}
          </span>
          <span className="text-xs text-slate-400">Category Catalog</span>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {category.name}
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Components Grid */}
      {categoryComponents.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-800">
          <Layers className="h-10 w-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
            No components yet in this category
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Check back soon or scaffold a new component following the README instructions.
          </p>
          <div className="mt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to all categories</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryComponents.map((comp) => (
            <ComponentCard key={comp.id} component={comp} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CategoryPage({ params }) {
  return (
    <Suspense fallback={<CategorySkeleton />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

