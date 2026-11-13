export const templatesData = [
  {
    id: 'saas-landing-page',
    name: 'SaaS Product Landing Page',
    category: 'Marketing',
    description: 'High-conversion SaaS landing page with sticky navigation, enterprise hero, feature grid, pricing matrix, customer reviews, and multi-column footer.',
    tags: ['landing', 'saas', 'marketing', 'conversion', 'homepage'],
    techStack: ['Next.js App Router', 'Tailwind CSS', 'Lucide Icons'],
    dependencies: ['navbar', 'button', 'badge', 'card', 'footer'],
    code: `import React from 'react';
import Link from 'next/link';

export default function SaaSPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-extrabold text-lg text-slate-900 tracking-tight">SysCorp<span className="text-[#1a5cdd]">.ai</span></span>
            <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
              <a href="#features" className="hover:text-[#1a5cdd]">Features</a>
              <a href="#pricing" className="hover:text-[#1a5cdd]">Pricing</a>
              <a href="#testimonials" className="hover:text-[#1a5cdd]">Customers</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2">Sign In</button>
            <button className="text-xs font-bold bg-[#1a5cdd] hover:bg-[#1449b2] text-white px-4 py-2 rounded-xl shadow-xs transition-colors">
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-semibold text-[#1a5cdd]">
          <span className="h-2 w-2 rounded-full bg-[#1a5cdd] animate-pulse"></span>
          Next-Gen UI Engineering
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Ship enterprise software <span className="text-[#1a5cdd]">3x faster</span> with modular UI
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Pre-built tokenized UI components, battle-tested full page templates, and instant copy-paste code snippets for React and Tailwind.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button className="rounded-xl bg-[#1a5cdd] px-6 py-3 text-sm font-bold text-white hover:bg-[#1449b2] shadow-md shadow-blue-500/20">
            Start Building
          </button>
          <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            View Live Demos
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="h-10 w-10 rounded-xl bg-blue-100 text-[#1a5cdd] flex items-center justify-center font-bold">⚡</div>
            <h3 className="font-bold text-slate-900">Sub-second Latency</h3>
            <p className="text-xs text-slate-600">Zero unnecessary re-renders. Every atomic piece is designed for peak browser performance.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">🛡</div>
            <h3 className="font-bold text-slate-900">WCAG 2.1 AA Compliant</h3>
            <p className="text-xs text-slate-600">Full keyboard navigation, screen reader ARIA labels, and calibrated contrast ratios.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">◈</div>
            <h3 className="font-bold text-slate-900">Design Token Driven</h3>
            <p className="text-xs text-slate-600">Seamlessly customize brand palettes, radii, and typography scales across all screens.</p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="border-t border-slate-200 py-10 px-6 max-w-6xl mx-auto text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© 2026 SysCorp Technologies. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Documentation</a>
        </div>
      </footer>
    </div>
  );
}`,
  },
  {
    id: 'executive-dashboard',
    name: 'Enterprise Analytics & Ops Dashboard',
    category: 'Dashboard',
    description: 'Data-dense SaaS dashboard with metric KPI cards, live revenue graph container, real-time activity table, and quick actions.',
    tags: ['dashboard', 'admin', 'metrics', 'tables', 'charts', 'analytics'],
    techStack: ['Next.js App Router', 'Tailwind CSS', 'Recharts or Chart.js'],
    dependencies: ['card', 'datatable', 'badge', 'button', 'sidebar'],
    code: `import React from 'react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Mini Sidebar */}
      <aside className="w-60 bg-[#0d1220] text-slate-300 p-4 hidden md:flex flex-col justify-between border-r border-slate-800">
        <div className="space-y-6">
          <div className="font-bold text-white text-base tracking-tight px-3">SysCorp <span className="text-[#5b8def]">Ops</span></div>
          <nav className="space-y-1 text-xs font-semibold">
            <a href="#" className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#1a5cdd] text-white">Overview</a>
            <a href="#" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-800">Deployments</a>
            <a href="#" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-800">API Logs</a>
            <a href="#" className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-800">Team & RBAC</a>
          </nav>
        </div>
        <div className="px-3 py-2 text-[11px] text-slate-500 border-t border-slate-800">v2.4.0 · Production</div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 space-y-6 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">System Performance Overview</h1>
            <p className="text-xs text-slate-500">Live telemetry across global server clusters</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
              Export CSV
            </button>
            <button className="rounded-xl bg-[#1a5cdd] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#1449b2] shadow-xs">
              + Deploy Service
            </button>
          </div>
        </div>

        {/* 4 KPI Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <p className="text-xs text-slate-500 font-medium">Monthly Active Users</p>
            <p className="text-2xl font-bold font-mono text-slate-900">42,890</p>
            <p className="text-[11px] text-emerald-600 font-semibold">↑ +14.2% vs last month</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <p className="text-xs text-slate-500 font-medium">Average Response Time</p>
            <p className="text-2xl font-bold font-mono text-slate-900">42ms</p>
            <p className="text-[11px] text-emerald-600 font-semibold">↓ -8ms optimization</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <p className="text-xs text-slate-500 font-medium">Platform Uptime</p>
            <p className="text-2xl font-bold font-mono text-[#1a5cdd]">99.98%</p>
            <p className="text-[11px] text-slate-500">Last incident: 142 days ago</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <p className="text-xs text-slate-500 font-medium">Active Microservices</p>
            <p className="text-2xl font-bold font-mono text-slate-900">18 / 18</p>
            <p className="text-[11px] text-emerald-600 font-semibold">✓ Healthy status</p>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900">Recent Service Deployments</h2>
            <span className="text-xs text-[#1a5cdd] font-semibold cursor-pointer">View All</span>
          </div>
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold uppercase text-slate-500 border-b border-slate-100">
              <tr>
                <th className="px-6 py-3">Service Name</th>
                <th className="px-6 py-3">Branch / Commit</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Deployed At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-3.5 font-bold text-slate-900">auth-service-edge</td>
                <td className="px-6 py-3.5 font-mono text-slate-500">main · 9c8b12f</td>
                <td className="px-6 py-3.5"><span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10px]">Active</span></td>
                <td className="px-6 py-3.5">2 mins ago</td>
              </tr>
              <tr>
                <td className="px-6 py-3.5 font-bold text-slate-900">billing-stripe-webhook</td>
                <td className="px-6 py-3.5 font-mono text-slate-500">main · e4410a7</td>
                <td className="px-6 py-3.5"><span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10px]">Active</span></td>
                <td className="px-6 py-3.5">18 mins ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}`,
  },
  {
    id: 'auth-split-portal',
    name: 'Split Branded Authentication Portal',
    category: 'Auth',
    description: 'Modern split-screen login/signup screen with branded gradient left canvas, Google SSO button, magic link toggle, and remember me checkboxes.',
    tags: ['auth', 'login', 'signup', 'form', 'split-screen'],
    techStack: ['Next.js App Router', 'Tailwind CSS', 'React Hook Form'],
    dependencies: ['input', 'button', 'badge'],
    code: `import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Branded Hero */}
      <div className="w-full md:w-1/2 bg-[#0d1220] text-white p-8 md:p-16 flex flex-col justify-between border-r border-slate-800">
        <div>
          <span className="text-xl font-extrabold tracking-tight">SysCorp <span className="text-[#5b8def]">Identity</span></span>
        </div>
        <div className="space-y-4 my-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-semibold text-[#5b8def]">
            Secure Enterprise SSO
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Single Sign-On for high velocity engineering.
          </h2>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Access internal design libraries, component registries, and multi-tenant cloud workspaces with bank-grade security.
          </p>
        </div>
        <div className="text-xs text-slate-500 font-mono">SOC-2 Type II Certified · SAML 2.0 Ready</div>
      </div>

      {/* Right Login Card */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Welcome back</h1>
            <p className="text-xs text-slate-500">Sign in to your SysCorp engineering account</p>
          </div>

          <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs">
            <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
            <span>Continue with Google</span>
          </button>

          <div className="relative text-center text-xs text-slate-400">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <span className="relative bg-white px-2">or with email</span>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-slate-700">Password</label>
                <a href="#" className="text-xs font-semibold text-[#1a5cdd] hover:underline">Forgot?</a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#1a5cdd] focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-[#1a5cdd] py-2.5 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors shadow-xs"
            >
              Sign In to SysCorp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: 'contact-support-hub',
    name: 'Customer Support & Helpdesk Hub',
    category: 'Support',
    description: 'Enterprise support ticketing portal with category picker, priority select, dynamic form, live system status, and knowledgebase search.',
    tags: ['support', 'contact', 'tickets', 'helpdesk', 'form'],
    techStack: ['Next.js App Router', 'Tailwind CSS'],
    dependencies: ['input', 'button', 'badge', 'card'],
    code: `import React from 'react';

export default function ContactSupportPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            All Systems Operational (99.98% Uptime)
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">How can our engineering team help?</h1>
          <p className="text-xs sm:text-sm text-slate-600">Submit a priority ticket or browse technical guides.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-center hover:border-[#1a5cdd] transition-all cursor-pointer">
            <div className="text-2xl">⚡</div>
            <h3 className="font-bold text-sm text-slate-900">Technical Support</h3>
            <p className="text-xs text-slate-500">API integration, webhook failures, and CLI debugging.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-center hover:border-[#1a5cdd] transition-all cursor-pointer">
            <div className="text-2xl">💳</div>
            <h3 className="font-bold text-sm text-slate-900">Billing & Licences</h3>
            <p className="text-xs text-slate-500">Invoices, enterprise seat tiers, and contract renewal.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-center hover:border-[#1a5cdd] transition-all cursor-pointer">
            <div className="text-2xl">🤝</div>
            <h3 className="font-bold text-sm text-slate-900">Architecture Consult</h3>
            <p className="text-xs text-slate-500">Custom design system tokens and component scoping.</p>
          </div>
        </div>

        {/* Ticket Submission Form */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900">Open a Priority Support Ticket</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs outline-none focus:border-[#1a5cdd]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email</label>
                <input type="email" placeholder="john@enterprise.com" className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs outline-none focus:border-[#1a5cdd]" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Issue Description</label>
              <textarea rows={4} placeholder="Describe the behavior, steps to reproduce, or requirements..." className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs outline-none focus:border-[#1a5cdd]" />
            </div>
            <button type="submit" className="rounded-xl bg-[#1a5cdd] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#1449b2] shadow-xs cursor-pointer">
              Send Priority Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}`,
  },
];

