'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Copy,
  Check,
  Sparkles,
  ChevronRight,
  SlidersHorizontal,
  Home,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Compass,
  Filter,
  Layers,
  Grid,
  Plus,
  PlusCircle,
  Trash2,
  Edit3,
  CheckCircle2,
  Download,
  Upload,
  Share2,
  RotateCcw,
  RefreshCw,
  Eye,
  EyeOff,
  Settings,
  Power,
  Send,
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
  HelpCircle,
  Bell,
  Zap,
  ShieldCheck,
  Lock,
  Unlock,
  Heart,
  Star,
  ThumbsUp,
  File,
  FileText,
  FileCode,
  Folder,
  FolderGit2,
  Image as ImageIcon,
  Images,
  Video,
  Music,
  Calendar,
  Clock,
  Globe,
  Smartphone,
  Tablet,
  Monitor,
  Laptop,
  Code2,
  Terminal,
  Cpu,
  Database,
  Server,
  Wifi,
  CreditCard,
  Wallet,
  ShoppingBag,
  Tag,
  Dice5,
} from 'lucide-react';

const iconCatalog = [
  // Navigation & UI
  { name: 'Home', icon: Home, category: 'Navigation', tags: ['main', 'dashboard', 'house'] },
  { name: 'Menu', icon: Menu, category: 'Navigation', tags: ['hamburger', 'drawer', 'sidebar'] },
  { name: 'X', icon: X, category: 'Navigation', tags: ['close', 'dismiss', 'cancel'] },
  { name: 'Search', icon: Search, category: 'Navigation', tags: ['find', 'lookup', 'magnifier'] },
  { name: 'ChevronRight', icon: ChevronRight, category: 'Navigation', tags: ['arrow', 'next', 'caret'] },
  { name: 'ChevronDown', icon: ChevronDown, category: 'Navigation', tags: ['arrow', 'expand', 'dropdown'] },
  { name: 'ChevronUp', icon: ChevronUp, category: 'Navigation', tags: ['arrow', 'collapse', 'up'] },
  { name: 'ChevronLeft', icon: ChevronLeft, category: 'Navigation', tags: ['arrow', 'back', 'prev'] },
  { name: 'ArrowRight', icon: ArrowRight, category: 'Navigation', tags: ['direction', 'forward', 'pointer'] },
  { name: 'ArrowLeft', icon: ArrowLeft, category: 'Navigation', tags: ['direction', 'backward', 'return'] },
  { name: 'ExternalLink', icon: ExternalLink, category: 'Navigation', tags: ['open', 'new tab', 'url'] },
  { name: 'Compass', icon: Compass, category: 'Navigation', tags: ['explore', 'guide', 'direction'] },
  { name: 'Filter', icon: Filter, category: 'Navigation', tags: ['sort', 'refine', 'funnel'] },
  { name: 'SlidersHorizontal', icon: SlidersHorizontal, category: 'Navigation', tags: ['adjust', 'controls', 'settings'] },
  { name: 'Layers', icon: Layers, category: 'Navigation', tags: ['stack', 'components', 'cards'] },
  { name: 'Grid', icon: Grid, category: 'Navigation', tags: ['layout', 'gallery', 'matrix'] },

  // Actions & Controls
  { name: 'Plus', icon: Plus, category: 'Actions', tags: ['add', 'new', 'create'] },
  { name: 'PlusCircle', icon: PlusCircle, category: 'Actions', tags: ['add', 'insert', 'pill'] },
  { name: 'Trash2', icon: Trash2, category: 'Actions', tags: ['delete', 'remove', 'bin'] },
  { name: 'Edit3', icon: Edit3, category: 'Actions', tags: ['modify', 'pencil', 'write'] },
  { name: 'Copy', icon: Copy, category: 'Actions', tags: ['clipboard', 'duplicate'] },
  { name: 'Check', icon: Check, category: 'Actions', tags: ['done', 'tick', 'success'] },
  { name: 'CheckCircle2', icon: CheckCircle2, category: 'Actions', tags: ['approved', 'complete'] },
  { name: 'Download', icon: Download, category: 'Actions', tags: ['save', 'export', 'disk'] },
  { name: 'Upload', icon: Upload, category: 'Actions', tags: ['import', 'send', 'file'] },
  { name: 'Share2', icon: Share2, category: 'Actions', tags: ['distribute', 'social', 'link'] },
  { name: 'RotateCcw', icon: RotateCcw, category: 'Actions', tags: ['reset', 'undo', 'refresh'] },
  { name: 'RefreshCw', icon: RefreshCw, category: 'Actions', tags: ['reload', 'sync', 'update'] },
  { name: 'Eye', icon: Eye, category: 'Actions', tags: ['view', 'visible', 'preview'] },
  { name: 'EyeOff', icon: EyeOff, category: 'Actions', tags: ['hide', 'invisible', 'mask'] },
  { name: 'Settings', icon: Settings, category: 'Actions', tags: ['gear', 'preferences', 'config'] },
  { name: 'Power', icon: Power, category: 'Actions', tags: ['shutdown', 'logout', 'toggle'] },
  { name: 'Send', icon: Send, category: 'Actions', tags: ['submit', 'message', 'paperplane'] },

  // Status & Feedback
  { name: 'AlertCircle', icon: AlertCircle, category: 'Feedback', tags: ['warning', 'error', 'danger'] },
  { name: 'AlertTriangle', icon: AlertTriangle, category: 'Feedback', tags: ['caution', 'hazard'] },
  { name: 'CheckCircle', icon: CheckCircle, category: 'Feedback', tags: ['verified', 'correct'] },
  { name: 'Info', icon: Info, category: 'Feedback', tags: ['details', 'help', 'tooltip'] },
  { name: 'HelpCircle', icon: HelpCircle, category: 'Feedback', tags: ['question', 'support', 'faq'] },
  { name: 'Bell', icon: Bell, category: 'Feedback', tags: ['notification', 'alert', 'chime'] },
  { name: 'Sparkles', icon: Sparkles, category: 'Feedback', tags: ['magic', 'new', 'ai'] },
  { name: 'Zap', icon: Zap, category: 'Feedback', tags: ['fast', 'electric', 'energy'] },
  { name: 'ShieldCheck', icon: ShieldCheck, category: 'Feedback', tags: ['security', 'safe', 'auth'] },
  { name: 'Lock', icon: Lock, category: 'Feedback', tags: ['private', 'secure', 'password'] },
  { name: 'Unlock', icon: Unlock, category: 'Feedback', tags: ['public', 'open'] },
  { name: 'Star', icon: Star, category: 'Feedback', tags: ['favorite', 'rating', 'bookmark'] },
  { name: 'Heart', icon: Heart, category: 'Feedback', tags: ['like', 'love', 'save'] },
  { name: 'ThumbsUp', icon: ThumbsUp, category: 'Feedback', tags: ['vote', 'agree', 'recommend'] },

  // Files & Media
  { name: 'File', icon: File, category: 'Media', tags: ['document', 'page', 'blank'] },
  { name: 'FileText', icon: FileText, category: 'Media', tags: ['article', 'content', 'doc'] },
  { name: 'FileCode', icon: FileCode, category: 'Media', tags: ['script', 'source', 'developer'] },
  { name: 'Folder', icon: Folder, category: 'Media', tags: ['directory', 'files', 'archive'] },
  { name: 'FolderGit2', icon: FolderGit2, category: 'Media', tags: ['repository', 'version', 'branch'] },
  { name: 'ImageIcon', icon: ImageIcon, category: 'Media', tags: ['photo', 'picture', 'graphic'] },
  { name: 'Images', icon: Images, category: 'Media', tags: ['gallery', 'photos', 'album'] },
  { name: 'Video', icon: Video, category: 'Media', tags: ['camera', 'film', 'movie'] },
  { name: 'Music', icon: Music, category: 'Media', tags: ['audio', 'sound', 'track'] },
  { name: 'Calendar', icon: Calendar, category: 'Media', tags: ['date', 'schedule', 'event'] },
  { name: 'Clock', icon: Clock, category: 'Media', tags: ['time', 'recent', 'history'] },
  { name: 'Globe', icon: Globe, category: 'Media', tags: ['web', 'internet', 'earth'] },

  // Devices & Tech
  { name: 'Smartphone', icon: Smartphone, category: 'Devices', tags: ['mobile', 'cell', 'phone'] },
  { name: 'Tablet', icon: Tablet, category: 'Devices', tags: ['ipad', 'touch', 'screen'] },
  { name: 'Monitor', icon: Monitor, category: 'Devices', tags: ['desktop', 'display', 'screen'] },
  { name: 'Laptop', icon: Laptop, category: 'Devices', tags: ['macbook', 'pc', 'notebook'] },
  { name: 'Code2', icon: Code2, category: 'Devices', tags: ['brackets', 'syntax', 'programming'] },
  { name: 'Terminal', icon: Terminal, category: 'Devices', tags: ['cli', 'bash', 'console'] },
  { name: 'Cpu', icon: Cpu, category: 'Devices', tags: ['hardware', 'processor', 'chip'] },
  { name: 'Database', icon: Database, category: 'Devices', tags: ['storage', 'sql', 'records'] },
  { name: 'Server', icon: Server, category: 'Devices', tags: ['backend', 'hosting', 'cloud'] },
  { name: 'Wifi', icon: Wifi, category: 'Devices', tags: ['network', 'wireless', 'connection'] },
  { name: 'CreditCard', icon: CreditCard, category: 'Devices', tags: ['payment', 'billing', 'card'] },
  { name: 'Wallet', icon: Wallet, category: 'Devices', tags: ['money', 'finance', 'crypto'] },
  { name: 'ShoppingBag', icon: ShoppingBag, category: 'Devices', tags: ['commerce', 'cart', 'store'] },
  { name: 'Tag', icon: Tag, category: 'Devices', tags: ['label', 'price', 'category'] },
  { name: 'Dice5', icon: Dice5, category: 'Devices', tags: ['gaming', 'odds', 'random'] },
];

export default function IconExplorerPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedIcon, setCopiedIcon] = useState('');
  const [iconSize, setIconSize] = useState('h-5 w-5');
  const [iconColor, setIconColor] = useState('text-[#1a5cdd]');

  const categories = ['All', 'Navigation', 'Actions', 'Feedback', 'Media', 'Devices'];

  const filteredIcons = useMemo(() => {
    return iconCatalog.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const q = search.toLowerCase();
      const matchesSearch =
        search === '' ||
        item.name.toLowerCase().includes(q) ||
        item.tags.some((t) => t.includes(q));
      return matchesCat && matchesSearch;
    });
  }, [search, selectedCategory]);

  const handleCopy = async (iconName) => {
    const snippet = `<${iconName} className="${iconSize} ${iconColor}" />`;
    try {
      await navigator.clipboard.writeText(snippet);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(''), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyImport = async (iconName, e) => {
    e.stopPropagation();
    const imp = `import { ${iconName} } from 'lucide-react';`;
    try {
      await navigator.clipboard.writeText(imp);
      setCopiedIcon(`${iconName}-imp`);
      setTimeout(() => setCopiedIcon(''), 2000);
    } catch {
      // fallback
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
        <span className="font-semibold text-slate-900">Icon Explorer</span>
      </nav>

      {/* Hero Header */}
      <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 p-8 sm:p-10 shadow-xs space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-3.5 py-1 text-xs font-bold text-[#1a5cdd]">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Lucide Icon Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          SysCorp Icon Explorer
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Search, preview, and copy production-ready Lucide icons used across SysCorp applications. Click any card to copy the JSX tag directly into your component.
        </p>

        {/* Toolbar: Category Pills & Size/Color Customizer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200/80">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1a5cdd] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Size & Color Modifiers */}
          <div className="flex items-center gap-3">
            {/* Size Selector */}
            <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shadow-xs">
              {[
                { label: '16px', val: 'h-4 w-4' },
                { label: '20px', val: 'h-5 w-5' },
                { label: '24px', val: 'h-6 w-6' },
                { label: '32px', val: 'h-8 w-8' },
              ].map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setIconSize(s.val)}
                  className={`px-2 py-1 text-[11px] font-bold rounded-lg transition-colors cursor-pointer ${
                    iconSize === s.val ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Color Selector */}
            <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shadow-xs">
              {[
                { title: 'Brand Blue', classVal: 'text-[#1a5cdd]', bg: 'bg-[#1a5cdd]' },
                { title: 'Slate Navy', classVal: 'text-slate-900', bg: 'bg-slate-900' },
                { title: 'Emerald', classVal: 'text-emerald-500', bg: 'bg-emerald-500' },
                { title: 'Amber', classVal: 'text-amber-500', bg: 'bg-amber-500' },
                { title: 'Rose', classVal: 'text-rose-500', bg: 'bg-rose-500' },
              ].map((c) => (
                <button
                  key={c.title}
                  type="button"
                  title={c.title}
                  onClick={() => setIconColor(c.classVal)}
                  className={`h-5 w-5 rounded-full ${c.bg} transition-transform cursor-pointer ${
                    iconColor === c.classVal ? 'ring-2 ring-offset-2 ring-slate-800 scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search ${iconCatalog.length} icons by name or tag (e.g. search, user, arrow)...`}
          className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-xs text-slate-800 placeholder:text-slate-400 shadow-xs outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
        {filteredIcons.map(({ name, icon: IconComponent, category }) => {
          const isCopied = copiedIcon === name;
          const isImportCopied = copiedIcon === `${name}-imp`;

          return (
            <div
              key={name}
              onClick={() => handleCopy(name)}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs hover:border-[#1a5cdd] hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-between text-center group min-h-[130px]"
            >
              {/* Icon Visual */}
              <div className="flex-1 flex items-center justify-center p-2">
                <IconComponent className={`${iconSize} ${iconColor} transition-transform group-hover:scale-110`} />
              </div>

              {/* Icon Label & Action Buttons */}
              <div className="w-full space-y-1.5 pt-1">
                <p className="text-xs font-bold text-slate-900 truncate" title={name}>
                  {name}
                </p>

                <div className="flex items-center justify-center gap-1">
                  <span className="text-[10px] text-slate-400 font-medium">
                    {category}
                  </span>
                </div>

                <div className="pt-1 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={(e) => handleCopyImport(name, e)}
                    title="Copy import statement"
                    className="text-[10px] bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-[#1a5cdd] px-1.5 py-0.5 rounded cursor-pointer"
                  >
                    {isImportCopied ? 'Imported!' : 'Import'}
                  </button>
                  <span className="text-[10px] text-[#1a5cdd] font-bold">
                    {isCopied ? 'Copied Tag!' : 'Copy Tag'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredIcons.length === 0 && (
        <div className="text-center py-12 rounded-2xl border border-dashed border-slate-200 bg-slate-50">
          <p className="text-sm text-slate-500">No icons match &quot;{search}&quot;</p>
        </div>
      )}
    </div>
  );
}
