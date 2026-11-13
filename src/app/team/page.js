'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  GitBranch,
  ExternalLink,
  Plus,
  CheckCircle2,
  Clock,
  Layers,
  ShieldCheck,
  Send,
  MessageSquare,
  FileCode,
  Sparkles,
  ArrowRight,
  Filter,
  Check,
  X,
  RefreshCw,
  FolderGit2,
} from 'lucide-react';
import {
  teamMembers,
  connectedIntegrations,
  initialComponentRequests,
  teamStandards,
} from '@/data/teamData';
import { componentsData } from '@/data/components';

export default function TeamHubPage() {
  const [activeTab, setActiveTab] = useState('directory'); // 'directory' | 'integrations' | 'requests' | 'standards'
  const [departmentFilter, setDepartmentFilter] = useState('All');

  // Interactive Component Request Queue state
  const [requests, setRequests] = useState(initialComponentRequests);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('forms');
  const [newPriority, setNewPriority] = useState('High');
  const [newDesc, setNewDesc] = useState('');
  const [newRequester, setNewRequester] = useState('Sarah Lin');
  const [submittedToast, setSubmittedToast] = useState('');

  const filteredMembers =
    departmentFilter === 'All'
      ? teamMembers
      : teamMembers.filter((m) => m.department === departmentFilter);

  const departments = ['All', 'Engineering', 'Design', 'QA & Compliance', 'DevOps'];

  const handleCreateRequest = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newReq = {
      id: `req-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      priority: newPriority,
      requestedBy: newRequester,
      targetDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'In Review',
      description: newDesc.trim() || 'Component requested via Team Hub.',
    };

    setRequests([newReq, ...requests]);
    setNewTitle('');
    setNewDesc('');
    setShowRequestModal(false);
    setSubmittedToast(`Component request "${newReq.title}" submitted to engineering review queue!`);
    setTimeout(() => setSubmittedToast(''), 4000);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-slate-50 p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-[#1a5cdd]">
              <Users className="h-3.5 w-3.5" />
              <span>Cross-Functional Collaboration</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Project Team Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The collaborative space connecting Frontend Engineers, Product Designers, QA Specialists, and third-party developer integrations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowRequestModal(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1a5cdd] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors shadow-xs cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Request Component</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Pill Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200/60">
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">
              {teamMembers.length}
            </div>
            <div className="text-xs text-slate-500">Core Contributors</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-[#1a5cdd]">
              {componentsData.length}
            </div>
            <div className="text-xs text-slate-500">Maintained Components</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-600">
              {connectedIntegrations.length} / {connectedIntegrations.length}
            </div>
            <div className="text-xs text-slate-500">Connected Services</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-amber-600">
              {requests.length}
            </div>
            <div className="text-xs text-slate-500">Active Requests</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="pt-2 flex items-center gap-2 overflow-x-auto scrollbar-none border-t border-slate-200/60">
          <button
            onClick={() => setActiveTab('directory')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'directory'
                ? 'bg-[#1a5cdd] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Users className="h-3.5 w-3.5" />
            <span>Team Directory & Ownership</span>
          </button>

          <button
            onClick={() => setActiveTab('integrations')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'integrations'
                ? 'bg-[#1a5cdd] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Third-Party Integrations</span>
            <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-700 text-[10px]">
              {connectedIntegrations.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('requests')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'requests'
                ? 'bg-[#1a5cdd] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Clock className="h-3.5 w-3.5" />
            <span>Component Request Board</span>
            <span className="px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800 text-[10px]">
              {requests.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('standards')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'standards'
                ? 'bg-[#1a5cdd] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Team Review Guidelines</span>
          </button>
        </div>
      </div>

      {/* Toast Notification if submitted */}
      {submittedToast && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-bold text-emerald-800 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>{submittedToast}</span>
          </div>
          <button onClick={() => setSubmittedToast('')} className="p-1 text-emerald-700 hover:text-emerald-950">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* =========================================================================
          TAB 1: TEAM DIRECTORY & COMPONENT OWNERSHIP
         ========================================================================= */}
      {activeTab === 'directory' && (
        <div className="space-y-6">
          {/* Department Filter */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setDepartmentFilter(dept)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    departmentFilter === dept
                      ? 'bg-[#1a5cdd] text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-400">Showing {filteredMembers.length} team members</p>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#1a5cdd] hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  {/* Avatar & Status Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-12 w-12 rounded-2xl ${member.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-sm`}
                      >
                        {member.avatar}
                      </div>
                      <div>
                        <h2 className="text-sm font-bold text-slate-900">{member.name}</h2>
                        <p className="text-xs text-slate-500 font-medium">{member.role}</p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold font-mono ${
                        member.status === 'online'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : member.status === 'in-review'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          member.status === 'online'
                            ? 'bg-emerald-500 animate-pulse'
                            : member.status === 'in-review'
                            ? 'bg-amber-500'
                            : 'bg-slate-400'
                        }`}
                      ></span>
                      {member.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>

                  {/* Maintained Components */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Maintained Components
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.assignedComponents.map((compId) => (
                        <Link
                          key={compId}
                          href={`/component/${compId}`}
                          className="inline-flex items-center gap-1 rounded-md bg-blue-50 hover:bg-blue-100 border border-blue-200/60 px-2 py-0.5 text-[10px] font-semibold text-[#1a5cdd] transition-colors"
                        >
                          <Layers className="h-2.5 w-2.5" />
                          <span>{compId}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Email */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{member.email}</span>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[#1a5cdd] font-sans font-bold hover:underline"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: THIRD-PARTY & CLOUD INTEGRATIONS
         ========================================================================= */}
      {activeTab === 'integrations' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {connectedIntegrations.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#1a5cdd] hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      {item.status}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-slate-900">{item.name}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700 truncate">
                    {item.target}
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{item.meta}</span>
                    {item.id === 'github' ? (
                      <a
                        href={item.target}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#1a5cdd] hover:underline"
                      >
                        <span>Open Repo</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-[#1a5cdd] font-bold cursor-pointer hover:underline">
                        Configure
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: COMPONENT REQUEST BOARD
         ========================================================================= */}
      {activeTab === 'requests' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Active Component Requests</h2>
              <p className="text-xs text-slate-500">Proposed by designers and product managers for upcoming sprint cycles.</p>
            </div>
            <button
              onClick={() => setShowRequestModal(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#1a5cdd] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors shadow-xs cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Submit Request</span>
            </button>
          </div>

          <div className="space-y-3">
            {requests.map((req) => (
              <div
                key={req.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded font-mono ${
                        req.priority === 'High'
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : req.priority === 'Medium'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {req.priority} Priority
                    </span>
                    <span className="text-xs font-semibold text-slate-400">· Category: {req.category}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{req.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{req.description}</p>
                </div>

                <div className="flex items-center gap-4 shrink-0 text-xs">
                  <div className="text-right">
                    <p className="font-semibold text-slate-700">{req.requestedBy}</p>
                    <p className="text-[11px] text-slate-400 font-mono">Target: {req.targetDate}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 font-bold text-xs ${
                      req.status === 'Approved'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : req.status === 'In Development'
                        ? 'bg-blue-50 text-[#1a5cdd] border border-blue-200'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {req.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 4: TEAM REVIEW GUIDELINES
         ========================================================================= */}
      {activeTab === 'standards' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamStandards.map((std, i) => (
              <div
                key={i}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-2 hover:border-[#1a5cdd] transition-all"
              >
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                  <h3 className="font-bold text-sm text-slate-900">{std.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">{std.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-slate-900">Want to generate a component with AI right now?</h3>
              <p className="text-xs text-slate-600">
                You can describe any component request in the AI Agent Studio and save it straight to the repository.
              </p>
            </div>
            <Link
              href="/agent"
              className="rounded-xl bg-[#1a5cdd] px-4 py-2 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors shrink-0 shadow-xs"
            >
              Launch AI Agent Studio →
            </Link>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: SUBMIT COMPONENT REQUEST
         ========================================================================= */}
      {showRequestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Submit Component Request</h3>
                <p className="text-xs text-slate-500">Propose a new building block for the engineering backlog.</p>
              </div>
              <button
                onClick={() => setShowRequestModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 text-slate-600 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreateRequest} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Component Title / Feature
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Multi-file Drag & Drop Uploader"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs outline-none focus:border-[#1a5cdd]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs outline-none focus:border-[#1a5cdd]"
                  >
                    <option value="forms">Forms & Inputs</option>
                    <option value="buttons">Buttons</option>
                    <option value="navigation">Navigation</option>
                    <option value="cards">Cards</option>
                    <option value="modals">Modals & Overlays</option>
                    <option value="tables">Data Tables</option>
                    <option value="alerts">Alerts & Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Priority</label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs outline-none focus:border-[#1a5cdd]"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Requested By (Team Member)
                </label>
                <select
                  value={newRequester}
                  onChange={(e) => setNewRequester(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs outline-none focus:border-[#1a5cdd]"
                >
                  {teamMembers.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name} ({m.role})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specifications & Use Case Notes
                </label>
                <textarea
                  rows={3}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Describe where this component is needed and any key props/interactions..."
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs outline-none focus:border-[#1a5cdd]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowRequestModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#1a5cdd] text-xs font-bold text-white hover:bg-[#1449b2] shadow-xs cursor-pointer"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
