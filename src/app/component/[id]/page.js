import React, { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Calendar, Tag, FolderGit2, CheckCircle, Info } from 'lucide-react';
import { componentsData } from '@/data/components';
import { categories } from '@/data/categories';
import ComponentPreview from '@/components/portal/ComponentPreview';
import PropsTable from '@/components/portal/PropsTable';
import CodeSnippetViewer from '@/components/portal/CodeSnippetViewer';
import ComponentCard from '@/components/portal/ComponentCard';

// Generate static params for all components
export function generateStaticParams() {
  return componentsData.map((comp) => ({
    id: comp.id,
  }));
}

function ComponentDetailSkeleton() {
  return (
    <div className="space-y-10 animate-pulse">
      <div className="h-4 w-40 bg-slate-200 dark:bg-slate-800 rounded"></div>
      <div className="space-y-3">
        <div className="h-6 w-32 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
        <div className="h-10 w-64 bg-slate-200 dark:bg-slate-800 rounded"></div>
        <div className="h-4 w-96 bg-slate-200 dark:bg-slate-800 rounded"></div>
      </div>
      <div className="h-80 rounded-2xl bg-slate-100 dark:bg-slate-800/60"></div>
    </div>
  );
}

async function ComponentDetailContent({ params }) {
  const { id } = await params;
  const component = componentsData.find((c) => c.id === id);

  if (!component) {
    notFound();
  }

  const category = categories.find((c) => c.slug === component.category);
  const relatedComponents = componentsData
    .filter((c) => c.category === component.category && c.id !== component.id)
    .slice(0, 2);

  return (
    <div className="space-y-10">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#1a5cdd] transition-colors">
          Portal Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        {category && (
          <>
            <Link href={`/category/${category.slug}`} className="hover:text-[#1a5cdd] transition-colors">
              {category.name}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
          </>
        )}
        <span className="font-semibold text-slate-900">{component.name}</span>
      </nav>

      {/* Header Info */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {category && (
            <Link
              href={`/category/${category.slug}`}
              className="text-xs font-bold uppercase tracking-wider text-[#1a5cdd] bg-blue-50 px-3 py-1 rounded-full"
            >
              {category.name}
            </Link>
          )}
          <span className="text-xs font-bold capitalize text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300 px-2.5 py-1 rounded-full">
            {component.status || 'stable'}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-400">
            <Calendar className="h-3.5 w-3.5" />
            <span>Added {component.dateAdded}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {component.name}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          {component.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <Tag className="h-3.5 w-3.5 text-slate-400 mr-1" />
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 px-2 py-0.5 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Section 1: Live Interactive Preview */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Live Preview</h2>
          <span className="text-xs text-slate-400">
            Interactive canvas with viewport & theme toggles
          </span>
        </div>
        <ComponentPreview componentId={component.id} componentName={component.name} />
      </section>

      {/* Section 2: Code Snippets (React, HTML+CSS, Bootstrap) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Installation & Code</h2>
          <span className="text-xs text-slate-400">
            Copy-paste snippets for React, HTML, and Bootstrap 5
          </span>
        </div>
        <CodeSnippetViewer code={component.code} />
      </section>

      {/* Section 3: Props & Variants Schema */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Props & Variants</h2>
        <PropsTable props={component.props} />
      </section>

      {/* Section 4: Usage Notes & Projects Used In */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Usage Guidelines */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
            <Info className="h-4 w-4" />
            <span>Best Practices & Usage Notes</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc pl-4">
            {component.usageNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>

        {/* Projects Used In */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
            <FolderGit2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span>Adopted in Projects ({component.projectsUsedIn.length})</span>
          </div>
          <p className="text-xs text-slate-500">
            This component has been adopted and tested in the following internal repositories:
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {component.projectsUsedIn.map((proj) => (
              <span
                key={proj}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <CheckCircle className="h-3 w-3 text-emerald-500" />
                <span>{proj}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: Related Components */}
      {relatedComponents.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            More in {category?.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {relatedComponents.map((rel) => (
              <ComponentCard key={rel.id} component={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default function ComponentDetailPage({ params }) {
  return (
    <Suspense fallback={<ComponentDetailSkeleton />}>
      <ComponentDetailContent params={params} />
    </Suspense>
  );
}

