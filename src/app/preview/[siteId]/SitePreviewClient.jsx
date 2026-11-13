'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  Layers,
  Sparkles,
  Shield,
  Zap,
  Terminal,
  Activity,
  Server,
  Globe,
  X,
  Play,
  RotateCcw,
} from 'lucide-react';

/* =========================================================================
   1. SAAS CLOUD PLATFORM WEBSITE
   ========================================================================= */
function SaasCloudWebsite() {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [demoRequested, setDemoRequested] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#1a5cdd] selection:text-white">
      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 font-extrabold text-lg text-slate-900 tracking-tight">
              <span className="h-7 w-7 rounded-lg bg-[#1a5cdd] text-white flex items-center justify-center font-bold text-sm">
                S
              </span>
              <span>SysCorp<span className="text-[#1a5cdd]">Cloud</span></span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
              <a href="#features" className="hover:text-[#1a5cdd] transition-colors">Features</a>
              <a href="#pricing" className="hover:text-[#1a5cdd] transition-colors">Pricing</a>
              <a href="#metrics" className="hover:text-[#1a5cdd] transition-colors">Architecture</a>
              <a href="#faq" className="hover:text-[#1a5cdd] transition-colors">FAQ</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setContactModalOpen(true)}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={() => setContactModalOpen(true)}
              className="rounded-xl bg-[#1a5cdd] px-4 py-2 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors shadow-xs cursor-pointer"
            >
              Request Access
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-[#1a5cdd]">
            <span className="h-2 w-2 rounded-full bg-[#1a5cdd] animate-pulse"></span>
            SysCorp Cloud 3.0 is Now Generally Available
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            The Multi-Cloud Platform for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a5cdd] to-blue-500">
              High-Velocity Engineering
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Provision serverless microservices, automate edge deployments, and guarantee 99.98% platform reliability across distributed regions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setContactModalOpen(true)}
              className="rounded-xl bg-[#1a5cdd] px-6 py-3 text-sm font-bold text-white hover:bg-[#1449b2] transition-all shadow-md shadow-blue-500/20 cursor-pointer"
            >
              Start Free 14-Day Trial
            </button>
            <a
              href="#pricing"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              View Pricing Plans
            </a>
          </div>

          {/* Micro Logos */}
          <div className="pt-12 text-center space-y-3 border-t border-slate-100 max-w-3xl mx-auto">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Trusted by cloud teams at enterprise scale
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 text-xs font-bold text-slate-600">
              <span>FINOVA TECH</span>
              <span>OMNICLOUD</span>
              <span>APEX SYSTEMS</span>
              <span>NEXUSPAY</span>
              <span>DATAFLOW AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1a5cdd] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Platform Capabilities
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Engineered for Mission-Critical Workloads
          </h2>
          <p className="text-sm text-slate-600">Zero cold starts, automatic multi-zone failover, and sub-millisecond edge cache.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#1a5cdd] hover:shadow-md transition-all space-y-4">
            <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#1a5cdd] flex items-center justify-center font-bold">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Edge Compute Fabric</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Execute serverless workloads at 200+ edge points of presence with instant cold-start mitigation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#1a5cdd] hover:shadow-md transition-all space-y-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Zero-Trust Isolation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every micro-container is sandboxed with automatic mTLS encryption, SOC2 Type II, and ISO 27001 compliance.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-[#1a5cdd] hover:shadow-md transition-all space-y-4">
            <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Real-Time Telemetry</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Live distributed tracing, OpenTelemetry ingestion, and automated Slack/PagerDuty alerts.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section with Interactive Billing Cycle Toggle */}
      <section id="pricing" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1a5cdd] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Transparent Pricing
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Predictable Cloud Costing
            </h2>
            <p className="text-sm text-slate-600">Choose the capacity that matches your traffic. Upgrade or downgrade anytime.</p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-colors ${
                  billingCycle === 'monthly' ? 'bg-[#1a5cdd] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-colors flex items-center gap-1.5 ${
                  billingCycle === 'annual' ? 'bg-[#1a5cdd] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Annual Billing</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Starter</h3>
                <p className="text-xs text-slate-500">For early-stage MVPs and side projects.</p>
                <div className="text-3xl font-extrabold text-slate-900 font-mono">
                  ${billingCycle === 'annual' ? '23' : '29'}
                  <span className="text-xs font-normal text-slate-500"> /mo</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-2.5 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2">✓ 5 Serverless micro-services</li>
                  <li className="flex items-center gap-2">✓ 100 GB Edge egress traffic</li>
                  <li className="flex items-center gap-2">✓ Community Discord support</li>
                </ul>
              </div>
              <button
                onClick={() => setContactModalOpen(true)}
                className="w-full rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Pro */}
            <div className="rounded-2xl border-2 border-[#1a5cdd] bg-white p-7 shadow-xl flex flex-col justify-between space-y-6 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1a5cdd] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                Most Popular
              </span>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Growth Scale</h3>
                <p className="text-xs text-slate-500">For engineering teams deploying to production.</p>
                <div className="text-3xl font-extrabold text-slate-900 font-mono">
                  ${billingCycle === 'annual' ? '63' : '79'}
                  <span className="text-xs font-normal text-slate-500"> /mo</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-2.5 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2 font-semibold text-slate-900">✓ Unlimited Serverless services</li>
                  <li className="flex items-center gap-2 font-semibold text-slate-900">✓ 1 TB Edge egress traffic</li>
                  <li className="flex items-center gap-2 font-semibold text-slate-900">✓ Automated Git branch preview URLs</li>
                  <li className="flex items-center gap-2 font-semibold text-slate-900">✓ 99.98% Uptime SLA commitment</li>
                </ul>
              </div>
              <button
                onClick={() => setContactModalOpen(true)}
                className="w-full rounded-xl bg-[#1a5cdd] py-2.5 text-xs font-bold text-white hover:bg-[#1449b2] shadow-md shadow-blue-500/20 cursor-pointer"
              >
                Start Free Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Dedicated</h3>
                <p className="text-xs text-slate-500">Private VPC, custom SLAs, and SOC2 attestation.</p>
                <div className="text-3xl font-extrabold text-slate-900 font-mono">
                  ${billingCycle === 'annual' ? '159' : '199'}
                  <span className="text-xs font-normal text-slate-500"> /mo</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-2.5 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2">✓ Multi-region dedicated VPC</li>
                  <li className="flex items-center gap-2">✓ 24/7 Phone & Slack architect hotline</li>
                  <li className="flex items-center gap-2">✓ Custom data residency compliance</li>
                </ul>
              </div>
              <button
                onClick={() => setContactModalOpen(true)}
                className="w-full rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 cursor-pointer"
              >
                Talk to Enterprise Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-bold text-slate-800 text-sm">SysCorp Cloud Technologies</p>
            <p>© 2026 SysCorp Inc. Built with SysCorp UI Component System.</p>
          </div>
          <div className="flex gap-6 font-semibold">
            <a href="#" className="hover:text-[#1a5cdd]">Privacy Policy</a>
            <a href="#" className="hover:text-[#1a5cdd]">Service Terms</a>
            <a href="#" className="hover:text-[#1a5cdd]">API Docs</a>
            <a href="#" className="hover:text-[#1a5cdd]">Status (99.98%)</a>
          </div>
        </div>
      </footer>

      {/* Interactive Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-slate-900">Request Platform Access</h3>
              <button
                onClick={() => {
                  setContactModalOpen(false);
                  setDemoRequested(false);
                }}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {demoRequested ? (
              <div className="text-center py-6 space-y-3">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-base font-bold text-slate-900">Access Request Received!</h4>
                <p className="text-xs text-slate-600">
                  Our cloud solutions engineer will email your team credentials within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setContactModalOpen(false);
                    setDemoRequested(false);
                  }}
                  className="rounded-xl bg-[#1a5cdd] px-6 py-2 text-xs font-bold text-white hover:bg-[#1449b2]"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDemoRequested(true);
                }}
                className="space-y-3"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs outline-none focus:border-[#1a5cdd]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Expected Monthly Requests</label>
                  <select className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs outline-none focus:border-[#1a5cdd]">
                    <option>&lt; 1 Million</option>
                    <option>1M - 10M Requests</option>
                    <option>10M - 100M Requests</option>
                    <option>100M+ Requests (Enterprise)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#1a5cdd] py-2.5 text-xs font-bold text-white hover:bg-[#1449b2] shadow-xs cursor-pointer"
                >
                  Confirm & Provision Sandbox
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   2. AGENCY CREATIVE STUDIO WEBSITE
   ========================================================================= */
function AgencyStudioWebsite() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: 'NovaPay Global Banking', category: 'Fintech', desc: 'Next-gen cross-border treasury portal with real-time settlement.', stat: '$4.2B Volume' },
    { id: 2, title: 'Synapse Diagnostic AI', category: 'Healthcare', desc: 'Clinical oncology imaging workstation with sub-millimeter annotation.', stat: '99.4% Precision' },
    { id: 3, title: 'HyperScale Edge Engine', category: 'AI Platform', desc: 'Distributed LLM inference coordinator with edge speculative decoding.', stat: '24ms TTFT' },
    { id: 4, title: 'Kinetix Velocity Commerce', category: 'E-Commerce', desc: 'Headless multi-storefront architecture serving 80,000 requests/sec.', stat: '42% Higher Conv' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0d14] text-white font-sans selection:bg-[#1a5cdd] selection:text-white">
      {/* Top Bar */}
      <header className="border-b border-slate-800/80 px-6 sm:px-12 py-5 flex items-center justify-between">
        <div className="font-extrabold text-xl tracking-tight">
          SYSCORP <span className="text-[#5b8def]">STUDIO</span>
        </div>
        <div className="flex items-center gap-6 text-xs font-bold text-slate-400">
          <a href="#work" className="hover:text-white">Selected Work</a>
          <a href="#services" className="hover:text-white">Capabilities</a>
          <button className="rounded-full bg-white text-slate-900 px-4 py-2 text-xs font-extrabold hover:bg-slate-200 transition-colors">
            Start a Project
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-6 sm:px-12 max-w-6xl mx-auto space-y-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#5b8def] bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
          Digital Product Engineering
        </span>
        <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl">
          We engineer high-conviction digital products for industry pioneers.
        </h1>
        <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
          From early venture architecture to enterprise design systems, we build resilient web software with obsessively refined aesthetics.
        </p>
      </section>

      {/* Projects Filter */}
      <section id="work" className="px-6 sm:px-12 max-w-6xl mx-auto pb-24 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-xl font-bold">Selected Case Studies</h2>
          <div className="flex items-center gap-2">
            {['All', 'Fintech', 'Healthcare', 'AI Platform', 'E-Commerce'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === cat ? 'bg-[#1a5cdd] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className="group rounded-3xl border border-slate-800 bg-[#0f1422] p-8 space-y-4 hover:border-[#1a5cdd] transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5b8def] bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                  {p.category}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400">{p.stat}</span>
              </div>
              <h3 className="text-2xl font-extrabold group-hover:text-[#5b8def] transition-colors">{p.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              <div className="pt-4 flex items-center gap-2 text-xs font-bold text-[#5b8def]">
                <span>View Full Architecture</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-[#0f1422] border border-slate-700 rounded-3xl p-8 space-y-4 text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase text-[#5b8def]">{selectedProject.category}</span>
              <button onClick={() => setSelectedProject(null)} className="p-1 text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.desc}</p>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <p className="text-[11px] text-slate-400">Impact Metric</p>
              <p className="text-xl font-bold font-mono text-emerald-400">{selectedProject.stat}</p>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="w-full rounded-xl bg-[#1a5cdd] py-2.5 text-xs font-bold text-white hover:bg-[#1449b2]"
            >
              Done Reading
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   3. CLOUDOPS TELEMETRY SUITE
   ========================================================================= */
function OpsTelemetryWebsite() {
  const [logs, setLogs] = useState([
    '[12:04:12] [INFO] cluster-manager: Node eu-central-1b joined pool',
    '[12:04:15] [OK] healthcheck: Edge egress healthy across 14 PoPs',
    '[12:04:22] [DEPLOY] build-webhook: Artifact #8619fa8 deployed cleanly',
  ]);

  const [activeIncident, setActiveIncident] = useState(false);

  const addLog = () => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [
      `[${time}] [TRIGGER] Automated telemetry scan completed - latency 38ms`,
      ...prev.slice(0, 5),
    ]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-mono text-xs flex">
      {/* Mini Sidebar */}
      <aside className="w-56 bg-slate-900 border-r border-slate-800 p-4 space-y-6 shrink-0 hidden md:block">
        <div className="font-extrabold text-sm text-white tracking-wider flex items-center gap-2">
          <Server className="h-4 w-4 text-[#5b8def]" />
          <span>OPS_CONSOLE</span>
        </div>
        <nav className="space-y-1 text-xs">
          <div className="bg-[#1a5cdd] text-white px-3 py-2 rounded-lg font-bold">Clusters (Live)</div>
          <div className="text-slate-400 px-3 py-2 hover:bg-slate-800 rounded-lg cursor-pointer">Deployments</div>
          <div className="text-slate-400 px-3 py-2 hover:bg-slate-800 rounded-lg cursor-pointer">OpenTelemetry</div>
          <div className="text-slate-400 px-3 py-2 hover:bg-slate-800 rounded-lg cursor-pointer">Audit Logs</div>
        </nav>
      </aside>

      {/* Main Stream */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-lg font-bold text-white">Cluster Telemetry & Node Orchestration</h1>
            <p className="text-[11px] text-slate-400 font-sans">Global Region Pool: AWS + GCP Edge Nodes</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={addLog}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white cursor-pointer font-sans text-xs font-semibold"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Poll Now</span>
            </button>
            <button
              onClick={() => setActiveIncident(!activeIncident)}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold cursor-pointer ${
                activeIncident ? 'bg-amber-500 text-slate-950' : 'bg-emerald-600 text-white'
              }`}
            >
              {activeIncident ? '⚠ Incident Mode Active' : '● System Healthy'}
            </button>
          </div>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-slate-400 text-[10px]">Active Nodes</span>
            <p className="text-xl font-bold text-white">64 / 64</p>
            <span className="text-emerald-400 text-[10px]">100% capacity</span>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-slate-400 text-[10px]">p99 API Latency</span>
            <p className="text-xl font-bold text-[#5b8def]">38 ms</p>
            <span className="text-emerald-400 text-[10px]">↓ 4ms improvement</span>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-slate-400 text-[10px]">Active Pod Replicas</span>
            <p className="text-xl font-bold text-white">284</p>
            <span className="text-slate-400 text-[10px]">Elastic autoscaling</span>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1">
            <span className="text-slate-400 text-[10px]">Cluster Health</span>
            <p className="text-xl font-bold text-emerald-400">99.98%</p>
            <span className="text-slate-400 text-[10px]">Zero drops recorded</span>
          </div>
        </div>

        {/* Streaming Terminal */}
        <div className="bg-black rounded-2xl border border-slate-800 p-5 space-y-3">
          <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-slate-900 pb-2">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-[#5b8def]" />
              <span>LIVE_TAIL --cluster=production-edge</span>
            </div>
            <span className="text-emerald-400 text-[10px]">LIVE CONNECTED</span>
          </div>
          <div className="space-y-1.5 text-slate-300 font-mono text-[11px]">
            {logs.map((line, idx) => (
              <div key={idx} className="leading-relaxed hover:bg-slate-900/60 px-1 rounded">
                {line}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

/* =========================================================================
   4. SPORTS & GAME ARENA WEBSITE
   ========================================================================= */
function GamingArenaWebsite() {
  const [selectedBet, setSelectedBet] = useState({ match: 'Arsenal vs Real Madrid', pick: 'Arsenal to Win', odds: 2.15 });
  const [stake, setStake] = useState(25);

  return (
    <div className="min-h-screen bg-[#0d1220] text-slate-200 font-sans text-xs flex flex-col md:flex-row">
      <div className="flex-1 p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="font-extrabold text-lg text-white">
            SPORTS<span className="text-[#1a5cdd]">ARENA</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-bold font-mono">
              Balance: $1,420.50
            </span>
          </div>
        </div>

        {/* Matches */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">Live & Upcoming Matches</h2>

          <div className="bg-[#151b2e] rounded-2xl p-4 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-amber-400 font-bold">● LIVE 68&apos; · Champions League</span>
              <span>Emirates Stadium</span>
            </div>
            <div className="text-base font-extrabold text-white">Arsenal 2 - 1 Real Madrid</div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setSelectedBet({ match: 'Arsenal vs Real Madrid', pick: 'Arsenal', odds: 1.85 })}
                className="p-2 rounded-xl bg-[#0d1220] hover:bg-[#1a5cdd] hover:text-white border border-slate-800 transition-colors"
              >
                1 (Arsenal): 1.85
              </button>
              <button
                onClick={() => setSelectedBet({ match: 'Arsenal vs Real Madrid', pick: 'Draw', odds: 3.40 })}
                className="p-2 rounded-xl bg-[#0d1220] hover:bg-[#1a5cdd] hover:text-white border border-slate-800 transition-colors"
              >
                X (Draw): 3.40
              </button>
              <button
                onClick={() => setSelectedBet({ match: 'Arsenal vs Real Madrid', pick: 'Real Madrid', odds: 4.10 })}
                className="p-2 rounded-xl bg-[#0d1220] hover:bg-[#1a5cdd] hover:text-white border border-slate-800 transition-colors"
              >
                2 (Real Madrid): 4.10
              </button>
            </div>
          </div>

          <div className="bg-[#151b2e] rounded-2xl p-4 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Tomorrow 20:00 · Premier League</span>
              <span>Etihad Stadium</span>
            </div>
            <div className="text-base font-extrabold text-white">Manchester City vs Liverpool</div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setSelectedBet({ match: 'Man City vs Liverpool', pick: 'Man City', odds: 1.95 })}
                className="p-2 rounded-xl bg-[#0d1220] hover:bg-[#1a5cdd] hover:text-white border border-slate-800 transition-colors"
              >
                1 (Man City): 1.95
              </button>
              <button
                onClick={() => setSelectedBet({ match: 'Man City vs Liverpool', pick: 'Draw', odds: 3.50 })}
                className="p-2 rounded-xl bg-[#0d1220] hover:bg-[#1a5cdd] hover:text-white border border-slate-800 transition-colors"
              >
                X (Draw): 3.50
              </button>
              <button
                onClick={() => setSelectedBet({ match: 'Man City vs Liverpool', pick: 'Liverpool', odds: 3.80 })}
                className="p-2 rounded-xl bg-[#0d1220] hover:bg-[#1a5cdd] hover:text-white border border-slate-800 transition-colors"
              >
                2 (Liverpool): 3.80
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Bet Slip Sidebar */}
      <div className="w-full md:w-80 bg-[#151b2e] border-t md:border-t-0 md:border-l border-slate-800 p-6 space-y-4 shrink-0">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="font-bold text-white text-sm">Bet Slip</span>
          <span className="text-[10px] font-mono text-[#5b8def] bg-blue-500/10 px-2 py-0.5 rounded">1 Selection</span>
        </div>

        <div className="p-3 rounded-xl bg-[#0d1220] border border-slate-800 space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-xs">{selectedBet.pick}</span>
            <span className="font-mono font-bold text-[#5b8def]">{selectedBet.odds}</span>
          </div>
          <p className="text-[11px] text-slate-400">{selectedBet.match}</p>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] text-slate-400 font-semibold">Stake Amount ($)</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={stake}
              onChange={(e) => setStake(Math.max(1, Number(e.target.value)))}
              className="w-full bg-[#0d1220] border border-slate-700 rounded-xl px-3 py-2 font-mono text-white text-xs"
            />
          </div>
          <div className="flex gap-2">
            {[10, 25, 50, 100].map((val) => (
              <button
                key={val}
                onClick={() => setStake(val)}
                className="flex-1 py-1 rounded-lg bg-[#0d1220] border border-slate-800 text-[10px] text-slate-300 hover:text-white hover:border-slate-600"
              >
                +${val}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
          <span className="text-slate-400">Potential Return:</span>
          <span className="font-mono text-base font-extrabold text-emerald-400">
            ${(stake * selectedBet.odds).toFixed(2)}
          </span>
        </div>

        <button
          onClick={() => alert(`Bet placed successfully on ${selectedBet.pick}! Return: $${(stake * selectedBet.odds).toFixed(2)}`)}
          className="w-full rounded-xl bg-[#1a5cdd] py-3 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors shadow-md cursor-pointer"
        >
          Place Bet (${stake})
        </button>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN ROUTE CONTROLLER
   ========================================================================= */
export default function SitePreviewClient({ siteId }) {
  if (siteId === 'saas-cloud') {
    return <SaasCloudWebsite />;
  }
  if (siteId === 'agency-studio') {
    return <AgencyStudioWebsite />;
  }
  if (siteId === 'ops-telemetry') {
    return <OpsTelemetryWebsite />;
  }
  if (siteId === 'gaming-arena') {
    return <GamingArenaWebsite />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 text-slate-800">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Template Website Not Found</h1>
        <p className="text-xs text-slate-500">The requested template website ID &quot;{siteId}&quot; does not exist.</p>
        <Link href="/templates" className="inline-block rounded-xl bg-[#1a5cdd] text-white px-4 py-2 text-xs font-bold">
          Return to Templates
        </Link>
      </div>
    </div>
  );
}

