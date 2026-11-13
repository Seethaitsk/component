'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Kanban,
  CheckCircle2,
  Clock,
  AlertCircle,
  PlusCircle,
  ChevronRight,
  Search,
  Filter,
  User,
  FolderGit2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

const roadmapData = [
  // Built / Live in Portal
  { name: 'Button', id: 'primary-button', category: 'buttons', folder: 'ui', owner: '@team-lead', status: 'done', description: 'Primary, secondary, outline, and loading action buttons.', date: '2026-11-08', adopted: 4 },
  { name: 'Badge', id: 'badge', category: 'buttons', folder: 'ui', owner: '@member-1', status: 'done', description: 'Status pill indicators across five semantic color themes.', date: '2026-11-12', adopted: 2 },
  { name: 'Avatar', id: 'avatar', category: 'cards', folder: 'ui', owner: '@member-2', status: 'done', description: 'User profile icon with initials fallback and presence dot.', date: '2026-11-12', adopted: 1 },
  { name: 'Input', id: 'input-field', category: 'forms', folder: 'ui', owner: '@member-1', status: 'done', description: 'Form input field with label, validation states, and helper text.', date: '2026-11-08', adopted: 5 },
  { name: 'Modal', id: 'modal', category: 'modals', folder: 'ui', owner: '@member-2', status: 'done', description: 'Accessible modal dialog overlay with backdrop and Escape dismiss.', date: '2026-11-09', adopted: 3 },
  { name: 'Card', id: 'card', category: 'cards', folder: 'ui', owner: '@member-2', status: 'done', description: 'Content surface card with image header, badges, and footer.', date: '2026-11-08', adopted: 4 },
  { name: 'Alert', id: 'alert', category: 'alerts', folder: 'ui', owner: '@member-1', status: 'done', description: 'System notification banner with success, warning, and error styles.', date: '2026-11-08', adopted: 5 },
  { name: 'Navbar', id: 'navbar', category: 'navigation', folder: 'layout', owner: '@member-3', status: 'done', description: 'Responsive sticky navigation bar with SysCorp brand logo and CTAs.', date: '2026-11-08', adopted: 6 },
  { name: 'Footer', id: 'footer', category: 'layout', folder: 'layout', owner: '@member-3', status: 'done', description: 'Multi-column corporate footer with links, copyright, and socials.', date: '2026-11-10', adopted: 4 },
  { name: 'DataTable', id: 'data-table', category: 'tables', folder: 'ui', owner: '@member-3', status: 'done', description: 'Interactive table with sorting, pagination, and status pills.', date: '2026-11-08', adopted: 2 },
  { name: 'ImageGallery', id: 'image-gallery', category: 'gallery', folder: 'ui', owner: '@member-2', status: 'done', description: 'Responsive media grid with modal lightbox and tags.', date: '2026-11-09', adopted: 2 },
  { name: 'ContactForm', id: 'contact-form', category: 'forms', folder: 'sections', owner: '@member-1', status: 'done', description: 'Composite validated contact form with async submit handler.', date: '2026-11-09', adopted: 4 },
  { name: 'OddsCard', id: 'odds-card', category: 'game-betting', folder: 'ui', owner: '@member-2', status: 'done', description: 'Live odds betting selector card with real-time slip calculations.', date: '2026-11-10', adopted: 2 },

  // In Review / Active Testing
  { name: 'Tabs', id: 'tabs', category: 'navigation', folder: 'ui', owner: '@member-1', status: 'in review', description: 'Segmented view switcher for toggling between dashboard panels.', date: '2026-11-13', adopted: 0 },
  { name: 'Toast', id: 'toast', category: 'alerts', folder: 'ui', owner: '@member-2', status: 'in review', description: 'Floating non-blocking snackbar notification banner.', date: '2026-11-13', adopted: 0 },
  { name: 'SectionHeading', id: 'section-heading', category: 'layout', folder: 'ui', owner: '@team-lead', status: 'in review', description: 'Two-tone section header: dark lead title and muted tail.', date: '2026-11-13', adopted: 1 },

  // In Progress
  { name: 'Accordion', id: 'accordion', category: 'cards', folder: 'ui', owner: '@member-3', status: 'in progress', description: 'Collapsible FAQ and disclosure content sections with chevron animation.', date: '2026-11-13', adopted: 0 },
  { name: 'Rating', id: 'rating', category: 'forms', folder: 'ui', owner: '@member-1', status: 'in progress', description: 'Interactive star scoring selector for customer reviews.', date: '2026-11-13', adopted: 0 },

  // Planned / Backlog (from COMPONENTS.md)
  { name: 'Dropdown Menu', id: 'dropdown-menu', category: 'navigation', folder: 'ui', owner: '@member-2', status: 'todo', description: 'Accessible popover menu with keyboard navigation and sub-menus.', date: 'Q4 2026', adopted: 0 },
  { name: 'Date Range Picker', id: 'date-picker', category: 'forms', folder: 'ui', owner: '@unassigned', status: 'todo', description: 'Calendar month selector with dual range selection for filters.', date: 'Q4 2026', adopted: 0 },
  { name: 'Breadcrumbs', id: 'breadcrumbs', category: 'navigation', folder: 'layout', owner: '@unassigned', status: 'todo', description: 'Hierarchical navigation trail with auto-collapsing segments.', date: 'Q4 2026', adopted: 0 },
  { name: 'WhatsApp Button', id: 'whatsapp-button', category: 'buttons', folder: 'ui', owner: '@member-2', status: 'todo', description: 'Floating quick-support contact trigger with pulse animation.', date: 'Q4 2026', adopted: 0 },
  { name: 'Services Dropdown', id: 'services-dropdown', category: 'navigation', folder: 'layout', owner: '@member-3', status: 'todo', description: 'Mega-menu drawer with icon descriptions and category links.', date: 'Q4 2026', adopted: 0 },
];

export default function TrackerPage() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('all');

  const filteredItems = useMemo(() => {
    return roadmapData.filter((item) => {
      const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
      const matchesFolder = selectedFolder === 'all' || item.folder === selectedFolder;
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.owner.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesFolder && matchesSearch;
    });
  }, [selectedStatus, selectedFolder, searchQuery]);

  const stats = useMemo(() => {
    return {
      total: roadmapData.length,
      done: roadmapData.filter((i) => i.status === 'done').length,
      inReview: roadmapData.filter((i) => i.status === 'in review').length,
      inProgress: roadmapData.filter((i) => i.status === 'in progress').length,
      todo: roadmapData.filter((i) => i.status === 'todo').length,
    };
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'done':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
            <span>Done</span>
          </span>
        );
      case 'in review':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-xs font-bold text-amber-700">
            <Clock className="h-3 w-3 text-amber-500" />
            <span>In Review</span>
          </span>
        );
      case 'in progress':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs font-bold text-[#1a5cdd]">
            <Clock className="h-3 w-3 text-[#1a5cdd]" />
            <span>In Progress</span>
          </span>
        );
      case 'todo':
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-xs font-bold text-slate-600">
            <AlertCircle className="h-3 w-3 text-slate-400" />
            <span>Planned</span>
          </span>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-[#1a5cdd] transition-colors">
          Portal Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-semibold text-slate-900">Component Roadmap</span>
      </nav>

      {/* Hero Header */}
      <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 p-8 sm:p-10 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-bold text-[#1a5cdd]">
            <Kanban className="h-3.5 w-3.5" />
            <span>Synced with COMPONENTS.md</span>
          </div>

          <Link
            href="/new"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#1a5cdd] px-3.5 py-2 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors shadow-xs"
          >
            <PlusCircle className="h-3.5 w-3.5" />
            <span>Create New Component</span>
          </Link>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Component Tracker & Roadmap
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Track who is building what, review release progress, and discover upcoming components across the SysCorp UI kit repository.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t border-slate-200/80">
          <div className="bg-white/80 rounded-2xl p-3 border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase text-slate-500">Total Tracked</span>
            <p className="text-2xl font-extrabold font-mono text-slate-900">{stats.total}</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-3 border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase text-emerald-600">Production Ready</span>
            <p className="text-2xl font-extrabold font-mono text-emerald-600">{stats.done}</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-3 border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase text-amber-600">In Review</span>
            <p className="text-2xl font-extrabold font-mono text-amber-600">{stats.inReview}</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-3 border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase text-[#1a5cdd]">In Progress</span>
            <p className="text-2xl font-extrabold font-mono text-[#1a5cdd]">{stats.inProgress}</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-3 border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase text-slate-400">Backlog (Todo)</span>
            <p className="text-2xl font-extrabold font-mono text-slate-500">{stats.todo}</p>
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Status Filters */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {[
            { id: 'all', label: `All (${roadmapData.length})` },
            { id: 'done', label: `Done (${stats.done})` },
            { id: 'in review', label: `Review (${stats.inReview})` },
            { id: 'in progress', label: `Building (${stats.inProgress})` },
            { id: 'todo', label: `Todo (${stats.todo})` },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedStatus(tab.id)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                selectedStatus === tab.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search component, owner..."
            className="w-full rounded-2xl border border-slate-300 bg-white py-2 pl-9 pr-4 text-xs text-slate-800 placeholder:text-slate-400 shadow-xs outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Roadmap List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => {
          const isLiveInPortal = item.status === 'done';

          return (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3 hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
                    <span className="text-[10px] font-mono font-semibold uppercase bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                      {item.folder}
                    </span>
                  </div>
                  {getStatusBadge(item.status)}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-slate-400" />
                    <span className="font-medium text-slate-700">{item.owner}</span>
                  </span>
                  {item.adopted > 0 && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                      <FolderGit2 className="h-3 w-3" />
                      <span>{item.adopted} apps</span>
                    </span>
                  )}
                </div>

                {isLiveInPortal ? (
                  <Link
                    href={`/component/${item.id}`}
                    className="inline-flex items-center gap-1 font-bold text-[#1a5cdd] hover:underline"
                  >
                    <span>View Docs</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <Link
                    href="/new"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-[#1a5cdd] hover:underline"
                  >
                    <span>Contribute</span>
                    <PlusCircle className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 rounded-2xl border border-dashed border-slate-200 bg-slate-50">
          <p className="text-sm text-slate-500">No components match your search criteria.</p>
        </div>
      )}
    </div>
  );
}
