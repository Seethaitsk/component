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

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    if (typeof window !== 'undefined') {
      localStorage.setItem('syscorp_gemini_key', key.trim());
    }
  };

  // Inspector tab: 'preview' | 'react' | 'bootstrap' | 'props' | 'audit'
  const [activeInspectorTab, setActiveInspectorTab] = useState('preview');

  // Conversation history
  const [messages, setMessages] = useState([
    {
      sender: 'agent',
      time: '12:00 PM',
      text: "Hello! I'm the SysCorp AI UI Component Agent. Tell me what component you need, or choose a starter template below. I will generate production-ready React (Tailwind) and Bootstrap 5 code, render a live interactive preview, and let you save it directly to your library with 1 click.",
    },
  ]);

  // Active generated component state
  const [generatedComponent, setGeneratedComponent] = useState({
    name: 'MetricKpiCard',
    category: 'cards',
    description: 'Enterprise KPI telemetry card with trend delta badge, sparkline placeholder, and dual-tone typography.',
    tags: ['metric', 'kpi', 'dashboard', 'analytics', 'trend'],
    explanation: 'Engineered for executive dashboards and DevOps telemetry consoles. Includes clear visual hierarchy, accessible contrast ratios, and color-coded delta indicators.',
    props: [
      { name: 'title', type: 'string', default: "'Platform Uptime'", description: 'Metric title or KPI name.' },
      { name: 'value', type: 'string', default: "'99.98%'", description: 'Primary numeric value.' },
      { name: 'delta', type: 'string', default: "'+0.14%'", description: 'Comparison change vs baseline.' },
      { name: 'isPositive', type: 'boolean', default: 'true', description: 'Sets trend color to emerald or rose.' },
    ],
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
        { item: 'Touch Target Guidelines', status: 'Pass', note: 'Adequate mobile padding.' },
      ],
      recommendations: ['Compatible with both light and dark themes.'],
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
              : `I've generated the ${data.result.name} component. It is accessible, tokenized, and includes React, Tailwind, and Bootstrap 5 code. Check the live preview on the right!`,
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

  const handleSaveToLibrary = async () => {
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
          status: 'new',
          projectsUsedIn: ['AI Generated'],
          props: generatedComponent.props || [],
          code: generatedComponent.code || {},
          componentCode: generatedComponent.componentCode || '',
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSaveSuccessMsg(`Component successfully saved as /component/${data.id}!`);
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
            Prompt, generate, test, and save production UI components directly into your local codebase.
          </p>
        </div>

        <div className="flex items-center gap-2">
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
            The built-in agent engine handles all core components out-of-the-box. If you want unrestricted natural language generation for any prompt, paste your Google AI Studio API key here:
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
              className="rounded-xl bg-[#1a5cdd] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#1449b2]"
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
                    text: 'Session reset. What component can I help you architect next?',
                  },
                ]);
              }}
              title="Reset conversation"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
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
                      : 'bg-slate-100 text-slate-800 border border-slate-200/80 rounded-bl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[10px] font-mono ${
                      msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-400'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold p-2">
                <Sparkles className="h-4 w-4 text-[#1a5cdd] animate-spin" />
                <span>AI Agent is architecting component...</span>
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
              placeholder="Describe your component (e.g. A gradient pricing card with monthly/annual discount toggle)..."
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
          {/* Sandbox Top Bar with Tabs & Save Action */}
          <div className="p-4 border-b border-slate-200 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-slate-900">
                {generatedComponent.name}
              </span>
              <span className="rounded-full bg-blue-100 text-[#1a5cdd] px-2.5 py-0.5 text-[10px] font-bold">
                {generatedComponent.category}
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
              </div>

              {/* 1-Click Save to Library Button */}
              <button
                onClick={handleSaveToLibrary}
                disabled={saving}
                className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
              >
                {saving ? (
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Save className="h-3.5 w-3.5 text-emerald-400" />
                )}
                <span>Save to Library</span>
              </button>
            </div>
          </div>

          {/* Success Banner if Saved */}
          {saveSuccessMsg && (
            <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-2 text-xs font-bold text-emerald-800 flex items-center justify-between">
              <span>{saveSuccessMsg}</span>
              <Link
                href={`/component/${generatedComponent.name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`}
                className="text-[#1a5cdd] underline hover:text-blue-800"
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
                  <span>Interactive Component Sandbox</span>
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
          </div>

          {/* Explanation Footer */}
          <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <p className="truncate max-w-lg">
              <span className="font-bold text-slate-800">Architect Notes: </span>
              {generatedComponent.explanation}
            </p>
            <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
              <span>Tokenized</span>
              <span>·</span>
              <span>WCAG AA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

