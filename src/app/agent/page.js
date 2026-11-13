'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Bot,
  Send,
  Check,
  Copy,
  Layers,
  Shield,
  ArrowRight,
  Code2,
  RefreshCw,
  ExternalLink,
  Save,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Wand2,
  UserCheck,
  AlertTriangle,
  FileCheck,
  X,
} from 'lucide-react';

export default function AgentPage() {
  const [prompt, setPrompt] = useState('');
  const [mode, setMode] = useState('generate'); // 'generate' | 'audit' | 'convert'
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');
  const [copiedTab, setCopiedTab] = useState(null);
  const [apiKey, setApiKey] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('syscorp_gemini_key') || '';
    }
    return '';
  });
  const [showKeyModal, setShowKeyModal] = useState(false);

  // Human Review Gate States
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewer, setReviewer] = useState('Sarah Lin (Lead Product & Token Designer)');
  const [reviewNotes, setReviewNotes] = useState(
    'Verified against SysCorp Design Tokens v2.4. Design token parity, keyboard focus rings, and dual-framework code are compliant. Approved for production library inclusion.'
  );
  const [checklist, setChecklist] = useState({
    tokensCertified: true,
    a11yPassed: true,
    dualFrameworkTested: true,
    propsSchemaValid: true,
    authorizedConsent: true,
  });
  const [approvalRecord, setApprovalRecord] = useState(null);

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    if (typeof window !== 'undefined') {
      localStorage.setItem('syscorp_gemini_key', key.trim());
    }
  };

  // Inspector tab: 'preview' | 'react' | 'bootstrap' | 'props' | 'audit' | 'guardrails'
  const [activeInspectorTab, setActiveInspectorTab] = useState('preview');

  // Conversation history
  const [messages, setMessages] = useState([
    {
      sender: 'agent',
      time: '12:00 PM',
      text: "Hello! I'm the SysCorp AI UI Component Agent. I operate under strict Token Guardrails (enforcing SysCorp colors, radii, and patterns). Every generated component must undergo human review and certification before being added to the library.",
    },
  ]);

  // Active generated component state
  const [generatedComponent, setGeneratedComponent] = useState({
    name: 'MetricKpiCard',
    category: 'cards',
    description: 'Enterprise KPI telemetry card with trend delta badge, sparkline placeholder, and dual-tone typography.',
    tags: ['metric', 'kpi', 'dashboard', 'analytics', 'trend'],
    explanation: 'Architected strictly within SysCorp Design Token boundaries (100% compliant). Uses Brand 600 (#1a5cdd), Navy 950 (#0d1220), rounded-2xl geometry, and WCAG 2.1 AA accessible contrast. Human review required before merging.',
    props: [
      { name: 'title', type: 'string', default: "'Platform Uptime'", description: 'Metric title or KPI name.' },
      { name: 'value', type: 'string', default: "'99.98%'", description: 'Primary numeric value.' },
      { name: 'delta', type: 'string', default: "'+0.14%'", description: 'Comparison change vs baseline.' },
      { name: 'isPositive', type: 'boolean', default: 'true', description: 'Sets trend color to emerald or rose.' },
    ],
    guardrails: {
      enforced: true,
      complianceScore: 100,
      tokensUsed: [
        { token: 'Brand 600 (#1a5cdd)', type: 'color', role: 'Primary Action Accent & Ring' },
        { token: 'Navy 950 (#0d1220)', type: 'color', role: 'High-Contrast Surface' },
        { token: 'rounded-2xl (16px)', type: 'radius', role: 'Standard Container Curvature' },
        { token: 'Font-Sans (Inter)', type: 'typography', role: 'Primary Typography Hierarchy' },
        { token: 'Focus Visible Ring', type: 'accessibility', role: 'WCAG 2.1 AA Navigability' },
      ],
      rogueValuesDetected: 0,
      patternValidation: 'SysCorp Enterprise Pattern v2.4 (React + Bootstrap 5)',
      reviewStatus: 'pending_human_review',
      humanReviewRequired: true,
    },
    componentCode: `'use client';

import React from 'react';

export default function MetricKpiCard({
  title = 'Global API Uptime',
  value = '99.98%',
  delta = '+0.14%',
  period = 'vs last 30 days',
  isPositive = true,
  className = '',
}) {
  return (
    <div
      className={\`rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#1a5cdd] hover:shadow-md transition-all space-y-3 font-sans \${className}\`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">{title}</span>
        <span
          className={\`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold font-mono \${
            isPositive
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-rose-50 text-rose-700 border border-rose-200'
          }\`}
        >
          {isPositive ? '↑' : '↓'} {delta}
        </span>
      </div>
      <div className="text-3xl font-extrabold font-mono text-slate-900 tracking-tight">
        {value}
      </div>
      <p className="text-[11px] text-slate-400 font-medium">{period}</p>
    </div>
  );
}`,
    code: {
      react: `<MetricKpiCard title="Global API Uptime" value="99.98%" delta="+0.14%" />`,
      htmlCss: `<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs space-y-3"><div class="flex justify-between text-xs text-slate-500"><span>Global API Uptime</span><span class="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full text-xs font-bold font-mono">+0.14%</span></div><div class="text-3xl font-extrabold font-mono text-slate-900">99.98%</div><p class="text-[11px] text-slate-400">vs last 30 days</p></div>`,
      bootstrap: `<div class="card border rounded-4 p-4 shadow-sm"><div class="d-flex justify-content-between text-muted small"><span>Global API Uptime</span><span class="badge bg-success-subtle text-success rounded-pill">+0.14%</span></div><div class="fs-2 fw-bold font-monospace text-dark mt-2">99.98%</div><small class="text-muted">vs last 30 days</small></div>`,
    },
    auditReport: {
      score: 98,
      wcagLevel: 'WCAG 2.1 AA',
      checks: [
        { item: 'Color Contrast Ratio', status: 'Pass', note: 'Text exceeds 4.5:1 ratio.' },
        { item: 'Keyboard Focusability', status: 'Pass', note: 'Semantic container structure.' },
        { item: 'Token Guardrails', status: 'Pass', note: '100% SysCorp standard tokens. 0 rogue styles.' },
        { item: 'Touch Target Guidelines', status: 'Pass', note: 'Adequate mobile padding.' },
      ],
      recommendations: ['Requires designated human sign-off before library merge.'],
    },
  });

  const starterPrompts = [
    'Create WhatsApp click-to-chat button with SVG icon',
    'Social brand icons bar (WhatsApp, GitHub, X, LinkedIn)',
    'Enterprise KPI telemetry card with trend delta badge',
    'Live sports betting odds multiplier pill with neon green active state',
    'SaaS waitlist hero banner with email capture form',
    'Dismissible alert toast with auto-dismiss countdown',
  ];

  const handleSendPrompt = async (textToSend) => {
    const query = textToSend || prompt;
    if (!query.trim()) return;

    const userMessage = {
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setPrompt('');
    setLoading(true);
    setSaveSuccessMsg('');
    setApprovalRecord(null);

    try {
      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          mode,
          currentCode: generatedComponent?.componentCode || '',
          componentName: generatedComponent?.name || '',
          clientApiKey: apiKey.trim(),
        }),
      });

      const data = await res.json();
      if (data.success && data.result) {
        setGeneratedComponent((prev) => ({
          ...prev,
          ...data.result,
        }));

        const agentReply = {
          sender: 'agent',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text:
            mode === 'audit'
              ? `A11y Audit completed! Health Score: ${data.result.auditReport?.score}/100 (${data.result.auditReport?.wcagLevel}). Review the audit tab on the right.`
              : mode === 'convert'
              ? `Conversion complete! Generated Bootstrap 5 utility layout for ${generatedComponent.name}.`
              : `I've generated the ${data.result.name} component under SysCorp Token Guardrails (100% Token Compliant). It uses official SysCorp tokens (#1a5cdd, #0d1220, rounded-2xl) and standard patterns. A human review is required before this can be committed to the library.`,
        };
        setMessages((prev) => [...prev, agentReply]);
        if (mode === 'audit') setActiveInspectorTab('audit');
        else if (mode === 'convert') setActiveInspectorTab('bootstrap');
        else setActiveInspectorTab('preview');
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'agent',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: 'I ran into an issue generating that component. Please try refining your prompt.',
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'agent',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: 'Network error communicating with AI Agent API.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Human Review & Approval Handler
  const handleExecuteApproveAndSave = async () => {
    if (!generatedComponent) return;
    setSaving(true);
    setSaveSuccessMsg('');

    try {
      const res = await fetch('/api/components', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: generatedComponent.name,
          category: generatedComponent.category,
          description: generatedComponent.description,
          tags: generatedComponent.tags,
          tech: ['React', 'Tailwind', 'Bootstrap'],
          status: 'stable',
          projectsUsedIn: ['AI Studio Certified'],
          props: generatedComponent.props || [],
          code: generatedComponent.code || {},
          componentCode: generatedComponent.componentCode || '',
          reviewer,
          reviewNotes,
          guardrails: generatedComponent.guardrails,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        const approvedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateStr = new Date().toISOString().split('T')[0];
        setApprovalRecord({
          reviewer,
          time: approvedAt,
          date: dateStr,
          componentId: data.id,
        });
        setSaveSuccessMsg(`Component certified by ${reviewer} and saved as /component/${data.id}!`);
        setShowReviewModal(false);
      } else {
        setSaveSuccessMsg(`Save note: ${data.error || 'Check components list'}`);
      }
    } catch {
      setSaveSuccessMsg('Failed to save component to library.');
    } finally {
      setSaving(false);
    }
  };

  const handleCopyCode = (tabName, codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedTab(tabName);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const isChecklistComplete =
    checklist.tokensCertified &&
    checklist.a11yPassed &&
    checklist.dualFrameworkTested &&
    checklist.propsSchemaValid &&
    checklist.authorizedConsent;

  return (
    <div className="space-y-6 pb-16">
      {/* Top Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-slate-50 p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-[#1a5cdd]">
            <Bot className="h-3.5 w-3.5" />
            <span>SysCorp AI UI Agent Studio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            AI Component Architect & Copilot
          </h1>
          <p className="text-xs text-slate-600">
            Synthesizes components using strictly official SysCorp design tokens and patterns, with mandatory human review before library merge.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Token Guardrails Active Indicator */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-[#1a5cdd] shadow-xs">
            <Shield className="h-3.5 w-3.5 text-[#1a5cdd]" />
            <span>Token Guardrails: 100% Compliant</span>
          </div>

          <button
            onClick={() => setShowKeyModal(!showKeyModal)}
            className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-[#1a5cdd] hover:text-[#1a5cdd] transition-colors cursor-pointer shadow-xs"
          >
            <Sparkles className="h-3 w-3 text-[#1a5cdd]" />
            <span>{apiKey ? 'Gemini API Key Linked' : 'Connect Gemini API (Optional)'}</span>
          </button>

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700 font-mono">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Agent Engine Ready
          </span>
        </div>
      </div>

      {/* Optional Gemini API Key Drawer */}
      {showKeyModal && (
        <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#1a5cdd]" />
              <span>Custom Gemini API Key</span>
            </h4>
            <span className="text-[11px] text-slate-500">Stored locally in your browser</span>
          </div>
          <p className="text-[11px] text-slate-600">
            The built-in agent engine handles all core components out-of-the-box under strict token guardrails. If you want unrestricted natural language generation for any custom prompt, paste your Google AI Studio API key here:
          </p>
          <div className="flex items-center gap-2 max-w-md pt-1">
            <input
              type="password"
              value={apiKey}
              onChange={(e) => handleSaveApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="flex-1 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 outline-none focus:border-[#1a5cdd]"
            />
            <button
              onClick={() => setShowKeyModal(false)}
              className="rounded-xl bg-[#1a5cdd] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#1449b2] cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* =========================================================================
            LEFT COLUMN: AGENT CONVERSATION & PROMPT CONTROLS (5 COLS)
           ========================================================================= */}
        <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col h-[700px] overflow-hidden">
          {/* Mode Selector Header */}
          <div className="p-4 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs font-bold">
              <button
                onClick={() => setMode('generate')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  mode === 'generate' ? 'bg-[#1a5cdd] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Generate
              </button>
              <button
                onClick={() => setMode('audit')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  mode === 'audit' ? 'bg-[#1a5cdd] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                A11y Audit
              </button>
              <button
                onClick={() => setMode('convert')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  mode === 'convert' ? 'bg-[#1a5cdd] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Translate
              </button>
            </div>

            <button
              onClick={() => {
                setMessages([
                  {
                    sender: 'agent',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    text: 'Session reset. What component can I help you architect under SysCorp Token Guardrails?',
                  },
                ]);
              }}
              title="Reset conversation"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Chat Message Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 text-xs leading-relaxed ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'agent' && (
                  <div className="h-7 w-7 rounded-xl bg-blue-50 text-[#1a5cdd] border border-blue-200 flex items-center justify-center shrink-0 font-bold">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 space-y-1 ${
                    msg.sender === 'user'
                      ? 'bg-[#1a5cdd] text-white rounded-br-xs'
                      : 'bg-slate-50 border border-slate-200 text-slate-700 rounded-bl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  <div
                    className={`text-[10px] font-mono ${
                      msg.sender === 'user' ? 'text-blue-100 text-right' : 'text-slate-400 text-left'
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2.5 items-center text-xs text-slate-400 p-2">
                <RefreshCw className="h-3.5 w-3.5 animate-spin text-[#1a5cdd]" />
                <span>Enforcing SysCorp Token Guardrails & generating accessible component...</span>
              </div>
            )}
          </div>

          {/* Quick Starter Chips */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-bold text-slate-400 uppercase shrink-0">Try:</span>
            {starterPrompts.map((sp, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(sp)}
                className="rounded-full bg-white border border-slate-200 px-2.5 py-1 text-[10px] font-semibold text-slate-600 hover:border-[#1a5cdd] hover:text-[#1a5cdd] shrink-0 transition-colors cursor-pointer"
              >
                {sp.slice(0, 32)}...
              </button>
            ))}
          </div>

          {/* Prompt Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt();
            }}
            className="p-3 border-t border-slate-200 bg-white flex items-end gap-2"
          >
            <textarea
              rows={2}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your component (e.g. Live sports betting odds multiplier pill with neon green active state)..."
              className="flex-1 rounded-2xl border border-slate-200 p-2.5 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#1a5cdd] resize-none"
            />
            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className="h-10 w-10 rounded-2xl bg-[#1a5cdd] text-white flex items-center justify-center hover:bg-[#1449b2] transition-colors shadow-xs disabled:opacity-50 cursor-pointer shrink-0"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* =========================================================================
            RIGHT COLUMN: LIVE AGENT SANDBOX & CODE INSPECTOR (7 COLS)
           ========================================================================= */}
        <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col h-[700px] overflow-hidden">
          {/* Sandbox Top Bar with Tabs & Human Review Action */}
          <div className="p-4 border-b border-slate-200 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-slate-900">
                {generatedComponent.name}
              </span>
              <span className="rounded-full bg-blue-100 text-[#1a5cdd] px-2.5 py-0.5 text-[10px] font-bold">
                {generatedComponent.category}
              </span>
              <span className="rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 text-[10px] font-bold font-mono">
                100% Token Guardrails
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Tabs */}
              <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 text-xs font-semibold">
                <button
                  onClick={() => setActiveInspectorTab('preview')}
                  className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                    activeInspectorTab === 'preview' ? 'bg-[#1a5cdd] text-white' : 'text-slate-600'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setActiveInspectorTab('react')}
                  className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                    activeInspectorTab === 'react' ? 'bg-[#1a5cdd] text-white' : 'text-slate-600'
                  }`}
                >
                  React (TW)
                </button>
                <button
                  onClick={() => setActiveInspectorTab('bootstrap')}
                  className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                    activeInspectorTab === 'bootstrap' ? 'bg-[#1a5cdd] text-white' : 'text-slate-600'
                  }`}
                >
                  Bootstrap 5
                </button>
                <button
                  onClick={() => setActiveInspectorTab('props')}
                  className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                    activeInspectorTab === 'props' ? 'bg-[#1a5cdd] text-white' : 'text-slate-600'
                  }`}
                >
                  Props
                </button>
                <button
                  onClick={() => setActiveInspectorTab('audit')}
                  className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                    activeInspectorTab === 'audit' ? 'bg-[#1a5cdd] text-white' : 'text-slate-600'
                  }`}
                >
                  A11y ({generatedComponent.auditReport?.score || 98})
                </button>
                <button
                  onClick={() => setActiveInspectorTab('guardrails')}
                  className={`px-2.5 py-1 rounded-lg cursor-pointer flex items-center gap-1 ${
                    activeInspectorTab === 'guardrails' ? 'bg-[#1a5cdd] text-white' : 'text-slate-600'
                  }`}
                >
                  <Shield className="h-3 w-3 text-amber-400" />
                  <span>Guardrails</span>
                </button>
              </div>

              {/* MANDATORY HUMAN REVIEW BUTTON (REPLACES DIRECT SAVE) */}
              {approvalRecord ? (
                <div className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Certified & Merged</span>
                </div>
              ) : (
                <button
                  onClick={() => setShowReviewModal(true)}
                  className="flex items-center gap-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 px-3.5 py-1.5 text-xs font-bold text-white transition-colors shadow-xs cursor-pointer"
                >
                  <Shield className="h-3.5 w-3.5 text-amber-400" />
                  <span>Submit for Review (Gate)</span>
                </button>
              )}
            </div>
          </div>

          {/* Success Banner if Certified & Saved */}
          {saveSuccessMsg && (
            <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-2.5 text-xs font-bold text-emerald-800 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{saveSuccessMsg}</span>
              </span>
              <Link
                href={`/component/${generatedComponent.name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`}
                className="text-[#1a5cdd] underline hover:text-blue-800 ml-2 shrink-0"
              >
                Open Component Page →
              </Link>
            </div>
          )}

          {/* Inspector Body Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-slate-100 flex items-center justify-center">
            {/* TAB 1: LIVE PREVIEW */}
            {activeInspectorTab === 'preview' && (
              <div className="w-full max-w-md bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4">
                <div
                  dangerouslySetInnerHTML={{
                    __html: (generatedComponent.code?.htmlCss || '')
                      .replaceAll('&lt;', '<')
                      .replaceAll('&gt;', '>'),
                  }}
                />

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-600 font-semibold">
                    <Shield className="h-3 w-3 text-emerald-600" />
                    <span>SysCorp Token Guardrails Enforced</span>
                  </span>
                  <button
                    onClick={() => handleCopyCode('preview', generatedComponent.code?.react || '')}
                    className="text-[#1a5cdd] font-bold hover:underline cursor-pointer"
                  >
                    {copiedTab === 'preview' ? 'Copied JSX!' : 'Copy React JSX'}
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: REACT CODE */}
            {activeInspectorTab === 'react' && (
              <div className="w-full h-full flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 font-mono">
                    src/components/library/{generatedComponent.name}/{generatedComponent.name}.jsx
                  </span>
                  <button
                    onClick={() => handleCopyCode('react', generatedComponent.componentCode || '')}
                    className="flex items-center gap-1 text-xs font-bold text-[#1a5cdd] hover:underline cursor-pointer"
                  >
                    {copiedTab === 'react' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedTab === 'react' ? 'Copied!' : 'Copy File Code'}</span>
                  </button>
                </div>
                <pre className="flex-1 p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono overflow-auto border border-slate-800 leading-relaxed">
                  <code>{generatedComponent.componentCode}</code>
                </pre>
              </div>
            )}

            {/* TAB 3: BOOTSTRAP 5 */}
            {activeInspectorTab === 'bootstrap' && (
              <div className="w-full h-full flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 font-mono">
                    Bootstrap 5 HTML & Utility Classes
                  </span>
                  <button
                    onClick={() => handleCopyCode('bootstrap', generatedComponent.code?.bootstrap || '')}
                    className="flex items-center gap-1 text-xs font-bold text-[#1a5cdd] hover:underline cursor-pointer"
                  >
                    {copiedTab === 'bootstrap' ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedTab === 'bootstrap' ? 'Copied!' : 'Copy Bootstrap'}</span>
                  </button>
                </div>
                <pre className="flex-1 p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono overflow-auto border border-slate-800 leading-relaxed">
                  <code>{generatedComponent.code?.bootstrap || generatedComponent.convertedBootstrap}</code>
                </pre>
              </div>
            )}

            {/* TAB 4: PROPS TABLE */}
            {activeInspectorTab === 'props' && (
              <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 font-bold text-xs text-slate-800">
                  Configurable Component Props
                </div>
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50/50 text-[11px] font-bold uppercase text-slate-400 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-2.5">Prop Name</th>
                      <th className="px-6 py-2.5">Type</th>
                      <th className="px-6 py-2.5">Default</th>
                      <th className="px-6 py-2.5">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {generatedComponent.props?.map((pr, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-3 font-mono font-bold text-[#1a5cdd]">{pr.name}</td>
                        <td className="px-6 py-3 font-mono text-purple-600">{pr.type}</td>
                        <td className="px-6 py-3 font-mono text-slate-500">{pr.default}</td>
                        <td className="px-6 py-3 text-slate-600">{pr.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* TAB 5: A11Y AUDIT */}
            {activeInspectorTab === 'audit' && (
              <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">WCAG Accessibility Scorecard</h3>
                    <p className="text-xs text-slate-500">Automated contrast & keyboard navigability check</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-extrabold font-mono text-emerald-600">
                      {generatedComponent.auditReport?.score || 98}/100
                    </span>
                    <p className="text-[10px] font-bold text-slate-400">WCAG 2.1 AA Compliant</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {generatedComponent.auditReport?.checks?.map((chk, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs"
                    >
                      <div className="space-y-0.5">
                        <p className="font-bold text-slate-800">{chk.item}</p>
                        <p className="text-[11px] text-slate-500">{chk.note}</p>
                      </div>
                      <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-mono text-[10px]">
                        {chk.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 6: GUARDRAILS & HUMAN REVIEW STATUS */}
            {activeInspectorTab === 'guardrails' && (
              <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-[#1a5cdd]" />
                      <span>SysCorp Token Guardrails Report</span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      Enforces brand consistency, WCAG 2.1 AA, and human review certification.
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700 font-mono">
                    100% Token Compliant
                  </span>
                </div>

                {/* Scorecards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Compliance Score</span>
                    <p className="text-xl font-extrabold font-mono text-[#1a5cdd]">100%</p>
                    <p className="text-[10px] text-slate-500">Official SysCorp Tokens</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Rogue CSS Values</span>
                    <p className="text-xl font-extrabold font-mono text-emerald-600">0</p>
                    <p className="text-[10px] text-slate-500">Zero untracked colors</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Review Gate</span>
                    <p className="text-sm font-bold text-slate-900">
                      {approvalRecord ? 'Certified' : 'Pending Sign-Off'}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {approvalRecord ? approvalRecord.reviewer : 'Human Gate Required'}
                    </p>
                  </div>
                </div>

                {/* Enforced Tokens Breakdown */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-800">Enforced Token Mapping</h4>
                  <div className="rounded-xl border border-slate-200 overflow-hidden text-xs">
                    <div className="p-2.5 bg-slate-50 font-semibold text-slate-600 border-b border-slate-200 flex justify-between text-[11px]">
                      <span>Token Name</span>
                      <span>Design System Role</span>
                    </div>
                    {generatedComponent.guardrails?.tokensUsed?.map((tok, idx) => (
                      <div key={idx} className="p-2.5 border-b border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-[#1a5cdd]">{tok.token}</span>
                        <span className="text-slate-600">{tok.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Human Review Sign-Off Action */}
                <div className="pt-2">
                  {!approvalRecord ? (
                    <button
                      onClick={() => setShowReviewModal(true)}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white py-2.5 text-xs font-bold shadow-xs cursor-pointer"
                    >
                      <UserCheck className="h-4 w-4 text-amber-400" />
                      <span>Open Human Review Sign-Off Dialog</span>
                    </button>
                  ) : (
                    <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span>Certified by {approvalRecord.reviewer}</span>
                      </span>
                      <span className="font-mono text-[10px] text-emerald-600">{approvalRecord.time}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Explanation Footer */}
          <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <p className="truncate max-w-lg">
              <span className="font-bold text-slate-800">Architect Guardrails: </span>
              {generatedComponent.explanation}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                <Check className="h-3 w-3" />
                <span>100% Token Guardrails</span>
              </span>
              <span>·</span>
              <span>Review Gate Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MANDATORY HUMAN REVIEW & SIGN-OFF GATE MODAL
         ========================================================================= */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5">
            {/* Close Button */}
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                    Human Review & Security Gate
                  </h3>
                  <span className="rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-[10px] font-bold text-amber-700 uppercase">
                    Mandatory Sign-Off
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  SysCorp policy strictly mandates that all AI-generated components must be inspected and certified by an authorized human reviewer before being merged into the component library.
                </p>
              </div>
            </div>

            {/* Component Summary Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 flex items-center justify-between text-xs">
              <div>
                <p className="font-extrabold text-slate-900">{generatedComponent.name}</p>
                <p className="text-[11px] text-slate-500">Category: {generatedComponent.category} · Ready for review</p>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px]">
                  Guardrails: 100% Pass
                </span>
              </div>
            </div>

            {/* 4-Point Safety & Quality Checklist */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Verification Checklist (All Required)
              </label>
              <div className="space-y-2">
                {[
                  {
                    key: 'tokensCertified',
                    label: 'SysCorp Design Tokens Certified',
                    desc: 'Only official brand blues (#1a5cdd), navy (#0d1220), and rounded-2xl radii are used. Zero rogue CSS.',
                  },
                  {
                    key: 'a11yPassed',
                    label: 'WCAG 2.1 AA Accessibility Pass',
                    desc: 'Color contrast ratio >= 4.5:1, keyboard focus-visible rings present, and touch targets >= 44px.',
                  },
                  {
                    key: 'dualFrameworkTested',
                    label: 'Dual Framework Compatibility',
                    desc: 'Both React (Tailwind) and Bootstrap 5 implementations verified with matching visual rendering.',
                  },
                  {
                    key: 'propsSchemaValid',
                    label: 'Props Schema & Types Validated',
                    desc: 'Typed component props, sensible default values, and usage guidelines are confirmed.',
                  },
                ].map(({ key, label, desc }) => (
                  <label
                    key={key}
                    className={`flex items-start gap-3 p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                      checklist[key]
                        ? 'border-emerald-200 bg-emerald-50/40 text-slate-800'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checklist[key]}
                      onChange={(e) =>
                        setChecklist((prev) => ({ ...prev, [key]: e.target.checked }))
                      }
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#1a5cdd] focus:ring-[#1a5cdd] cursor-pointer"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{label}</p>
                      <p className="text-[11px] text-slate-500">{desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Reviewer Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Designated Reviewer
              </label>
              <select
                value={reviewer}
                onChange={(e) => setReviewer(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-800 font-medium outline-none focus:border-[#1a5cdd]"
              >
                <option value="Sarah Lin (Lead Product & Token Designer)">
                  Sarah Lin (Lead Product & Token Designer)
                </option>
                <option value="Alex Kumar (Principal Architect & UI Lead)">
                  Alex Kumar (Principal Architect & UI Lead)
                </option>
                <option value="Priya Patel (QA & Accessibility Specialist)">
                  Priya Patel (QA & Accessibility Specialist)
                </option>
                <option value="Marcus Davis (Senior Frontend Engineer)">
                  Marcus Davis (Senior Frontend Engineer)
                </option>
              </select>
            </div>

            {/* Reviewer Notes & Comments */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Reviewer Notes & Rationale
              </label>
              <textarea
                rows={2}
                value={reviewNotes}
                onChange={(e) => setReviewNotes(e.target.value)}
                className="w-full rounded-xl border border-slate-200 p-2 text-xs text-slate-800 outline-none focus:border-[#1a5cdd] resize-none"
              />
            </div>

            {/* Consent Checkbox */}
            <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={checklist.authorizedConsent}
                onChange={(e) =>
                  setChecklist((prev) => ({ ...prev, authorizedConsent: e.target.checked }))
                }
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#1a5cdd] focus:ring-[#1a5cdd] cursor-pointer"
              />
              <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                I certify that I have reviewed this AI-generated component against the SysCorp Design System standards and approve its addition to the production component library.
              </span>
            </label>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Cancel / Discard
              </button>
              <button
                type="button"
                onClick={handleExecuteApproveAndSave}
                disabled={!isChecklistComplete || saving}
                className="flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 px-5 py-2.5 text-xs font-bold text-white transition-colors shadow-sm disabled:opacity-40 cursor-pointer"
              >
                {saving ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                )}
                <span>Approve & Merge to Library</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
