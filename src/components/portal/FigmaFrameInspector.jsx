'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  Copy,
  Check,
  Layers,
  Sparkles,
  Maximize2,
  Sliders,
  CheckCircle2,
  RefreshCw,
  Eye,
  FileCode,
} from 'lucide-react';

export default function FigmaFrameInspector({ component }) {
  const figma = component?.figma;
  const [activeTab, setActiveTab] = useState('canvas'); // 'canvas' | 'tokens' | 'metadata'
  const [copiedNode, setCopiedNode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!figma) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center text-xs text-slate-500">
        No Figma frame linked to this component yet.
      </div>
    );
  }

  const handleCopyNode = () => {
    navigator.clipboard.writeText(figma.nodeId);
    setCopiedNode(true);
    setTimeout(() => setCopiedNode(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(figma.frameUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white shadow-xs overflow-hidden">
      {/* Figma Header Bar */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Official Figma Multi-Color Logo Icon */}
          <div className="h-9 w-9 rounded-xl bg-slate-800/80 border border-slate-700/60 p-1.5 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 38 57" className="h-6 w-6">
              <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
              <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
              <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
              <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
              <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
            </svg>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                {figma.frameName}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{figma.status.toUpperCase()} · {figma.version}</span>
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Figma Frame Node ID: <code className="font-mono text-slate-300 font-semibold">{figma.nodeId}</code> · Designed by {figma.designer}
            </p>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyNode}
            className="flex items-center gap-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors cursor-pointer"
            title="Copy Figma Node ID"
          >
            {copiedNode ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copiedNode ? 'Node Copied' : 'Node ID'}</span>
          </button>

          <a
            href={figma.frameUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-[#0d99ff] hover:bg-[#007be5] px-3.5 py-1.5 text-xs font-bold text-white transition-colors shadow-xs cursor-pointer"
          >
            <span>Open in Figma</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Sub-header Navigation Tabs */}
      <div className="px-5 py-2.5 border-b border-slate-200 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('canvas')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === 'canvas'
                ? 'bg-[#1a5cdd] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Figma Canvas Specs</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tokens')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === 'tokens'
                ? 'bg-[#1a5cdd] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Design Tokens Parity ({figma.tokens?.length || 0})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('metadata')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === 'metadata'
                ? 'bg-[#1a5cdd] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileCode className="h-3.5 w-3.5" />
            <span>Sync Manifest & API</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-[11px]">
          <span>Verified {figma.lastVerified}</span>
          <span>·</span>
          <span className="text-emerald-600 font-bold">1:1 Design/Code Parity</span>
        </div>
      </div>

      {/* TAB 1: VISUAL FIGMA CANVAS SPECS */}
      {activeTab === 'canvas' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {/* Left Canvas (Simulated Figma Frame with measurement overlays) */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-[#2c2c2c] min-h-[360px] flex items-center justify-center relative overflow-hidden">
            {/* Figma dot grid background */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Figma Top Frame Tag */}
            <div className="absolute top-3 left-4 flex items-center gap-2 bg-[#1e1e1e]/90 text-white border border-slate-700/60 px-2.5 py-1 rounded-md text-[10px] font-mono shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0d99ff]"></span>
              <span>Frame: {figma.nodeId}</span>
              <span className="text-slate-400">({figma.specs?.width} × {figma.specs?.height})</span>
            </div>

            {/* Simulated Figma Selection Box with Dimension Bounding Handles */}
            <div className="relative group p-4 border-2 border-[#0d99ff] bg-[#1e1e1e]/80 rounded-2xl shadow-2xl transition-all">
              {/* 4 Corner Blue Handles */}
              <span className="absolute -top-1.5 -left-1.5 h-3 w-3 bg-white border-2 border-[#0d99ff] rounded-xs shadow-xs"></span>
              <span className="absolute -top-1.5 -right-1.5 h-3 w-3 bg-white border-2 border-[#0d99ff] rounded-xs shadow-xs"></span>
              <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-white border-2 border-[#0d99ff] rounded-xs shadow-xs"></span>
              <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-white border-2 border-[#0d99ff] rounded-xs shadow-xs"></span>

              {/* Floating Dimension Tag */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-[#0d99ff] text-white px-2 py-0.5 rounded text-[10px] font-mono font-bold shadow-xs whitespace-nowrap">
                {figma.specs?.width} × {figma.specs?.height}
              </div>

              {/* Real component rendering in white canvas container */}
              <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-md text-slate-800 max-w-sm flex flex-col items-center justify-center text-center">
                <div className="text-xs font-bold text-slate-900 mb-1">{component.name}</div>
                <div className="text-[11px] text-slate-500 mb-3">{component.description}</div>
                <div className="inline-flex items-center gap-1.5 rounded-xl bg-[#1a5cdd] px-4 py-2 text-xs font-bold text-white shadow-xs">
                  <span>Figma Verified Component</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Properties Panel (Mimics Figma Design Inspector) */}
          <div className="lg:col-span-4 p-5 bg-white space-y-4 text-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Figma Frame Properties
              </span>
              <span className="text-[10px] font-mono text-slate-400">Auto-Layout</span>
            </div>

            {/* Layout Specs */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-500">Dimensions:</span>
                <span className="font-mono font-bold text-slate-900">{figma.specs?.width} × {figma.specs?.height}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-500">Padding:</span>
                <span className="font-mono font-bold text-slate-900">{figma.specs?.padding}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-500">Corner Radius:</span>
                <span className="font-mono font-bold text-slate-900">{figma.specs?.radius}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="text-slate-500">Auto Layout:</span>
                <span className="font-mono text-[11px] font-semibold text-[#1a5cdd]">{figma.specs?.layout}</span>
              </div>
            </div>

            {/* Color & Token Links */}
            <div className="border-t border-slate-100 pt-3 space-y-2">
              <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                Layer Design Variables
              </span>
              <div className="space-y-1.5">
                {figma.tokens?.slice(0, 3).map((tok, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-medium text-slate-700">{tok.property}</span>
                    <span className="font-mono text-[10px] font-bold text-[#1a5cdd]">{tok.figmaToken}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Sync Check */}
            <div className="rounded-xl bg-blue-50/70 border border-blue-200/60 p-3 text-[11px] text-slate-600 space-y-1">
              <p className="font-bold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#1a5cdd]" />
                <span>Zero Drift Status</span>
              </p>
              <p>
                Code classes match Figma styles with 0 visual regressions detected.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DESIGN TOKENS PARITY TABLE */}
      {activeTab === 'tokens' && (
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Figma-to-Code Token Mapping Matrix
              </h3>
              <p className="text-xs text-slate-500">
                Every design variable in this Figma frame maps directly to a SysCorp Tailwind token.
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700 font-mono">
              100% Token Mapped
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[11px] font-bold uppercase text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">Component Layer</th>
                  <th className="px-4 py-3">Figma Design Token</th>
                  <th className="px-4 py-3">SysCorp Code Token</th>
                  <th className="px-4 py-3 text-right">Parity Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {figma.tokens?.map((tok, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      {tok.property}
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-purple-700 bg-purple-50/40">
                      {tok.figmaToken}
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-[#1a5cdd] bg-blue-50/40">
                      {tok.codeToken}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 font-mono">
                        <Check className="h-3 w-3" />
                        <span>Verified</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: SYNC MANIFEST & DEEP LINK API */}
      {activeTab === 'metadata' && (
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Figma Sync Manifest & Webhook Configuration
              </h3>
              <p className="text-xs text-slate-500">
                Configuration payload used by CI/CD pipelines to pull tokens from Figma REST API.
              </p>
            </div>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-[#1a5cdd] hover:text-[#1a5cdd] transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedLink ? 'URL Copied!' : 'Copy Frame URL'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono overflow-auto border border-slate-800 leading-relaxed">
            <code>{JSON.stringify(figma, null, 2)}</code>
          </pre>

          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <span>Terminal CLI command to re-sync tokens:</span>
            <code className="font-mono bg-white px-2 py-1 rounded border border-slate-200 text-slate-800 font-semibold">
              npm run figma:sync -- --node-id={figma.nodeId}
            </code>
          </div>
        </div>
      )}
    </div>
  );
}
