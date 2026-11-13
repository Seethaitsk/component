export const sectionsData = [
  {
    id: 'hero-enterprise',
    name: 'Enterprise Hero Section',
    category: 'Hero',
    description: 'High-impact landing hero with animated brand pill, dual-tone typography, CTA buttons, and key performance metric chips.',
    tags: ['hero', 'landing', 'headline', 'stats', 'cta'],
    code: `<section className="relative overflow-hidden bg-[#0d1220] text-white py-20 px-6 sm:px-12 rounded-3xl border border-slate-800">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 text-xs font-semibold text-[#5b8def]">
      <span className="h-2 w-2 rounded-full bg-[#1a5cdd] animate-pulse"></span>
      Next-Gen Software Partner
    </div>
    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
      Engineering Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b8def] to-blue-400">Digital Platforms</span>
    </h1>
    <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
      SysCorp engineers enterprise-grade web applications, resilient cloud architectures, and scalable UI systems designed for rapid growth.
    </p>
    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
      <button className="rounded-xl bg-[#1a5cdd] px-6 py-3 text-sm font-bold text-white hover:bg-[#1449b2] transition-colors shadow-lg shadow-blue-500/20 cursor-pointer">
        Request a Demo
      </button>
      <button className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer">
        Talk to an Engineer
      </button>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80">
      <div><p className="text-2xl font-bold font-mono text-[#5b8def]">150+</p><p className="text-xs text-slate-400">Projects Shipped</p></div>
      <div><p className="text-2xl font-bold font-mono text-emerald-400">99.9%</p><p className="text-xs text-slate-400">Uptime SLA</p></div>
      <div><p className="text-2xl font-bold font-mono text-amber-400">4.9/5</p><p className="text-xs text-slate-400">Client Rating</p></div>
      <div><p className="text-2xl font-bold font-mono text-white">25+</p><p className="text-xs text-slate-400">Enterprise Partners</p></div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'features-grid-4col',
    name: '4-Column Feature Cards Grid',
    category: 'Features',
    description: 'Clean responsive grid showcasing core platform services with hover lift effect and iconography.',
    tags: ['features', 'services', 'grid', 'cards'],
    code: `<section className="py-16 px-6 sm:px-12 bg-white rounded-3xl border border-slate-200">
  <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
    <span className="text-xs font-bold uppercase tracking-wider text-[#1a5cdd] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
      Core Disciplines
    </span>
    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Tailored Software Services</h2>
    <p className="text-sm text-slate-600">Built around performance, reliability, and modern user experience.</p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-4 hover:border-[#1a5cdd] hover:bg-white hover:shadow-lg transition-all group">
      <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#1a5cdd] flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
        &lt;/&gt;
      </div>
      <h3 className="text-base font-bold text-slate-900">Custom Web Software</h3>
      <p className="text-xs text-slate-600 leading-relaxed">High-performance Next.js and React frontends engineered for enterprise scale.</p>
    </div>
    <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-4 hover:border-[#1a5cdd] hover:bg-white hover:shadow-lg transition-all group">
      <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
        ☁
      </div>
      <h3 className="text-base font-bold text-slate-900">Cloud Architecture</h3>
      <p className="text-xs text-slate-600 leading-relaxed">Multi-region serverless workloads with automated CI/CD deployment pipelines.</p>
    </div>
    <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-4 hover:border-[#1a5cdd] hover:bg-white hover:shadow-lg transition-all group">
      <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
        ◈
      </div>
      <h3 className="text-base font-bold text-slate-900">UI/UX Systems</h3>
      <p className="text-xs text-slate-600 leading-relaxed">Accessible tokenized design systems ensuring brand consistency across portals.</p>
    </div>
    <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 space-y-4 hover:border-[#1a5cdd] hover:bg-white hover:shadow-lg transition-all group">
      <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
        ⚡
      </div>
      <h3 className="text-base font-bold text-slate-900">Performance & SEO</h3>
      <p className="text-xs text-slate-600 leading-relaxed">Sub-second LCP optimization and technical audits maximizing visibility.</p>
    </div>
  </div>
</section>`,
  },
  {
    id: 'stats-counter-banner',
    name: 'Performance & Metric Stats Banner',
    category: 'Stats',
    description: 'Four-metric corporate trust banner with progress indicators and micro-descriptions.',
    tags: ['stats', 'metrics', 'numbers', 'social-proof'],
    code: `<section className="py-12 px-6 sm:px-12 bg-gradient-to-r from-blue-900 via-[#0d1220] to-slate-900 text-white rounded-3xl border border-slate-800 shadow-md">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
    <div className="text-center px-4 space-y-1">
      <p className="text-3xl sm:text-4xl font-extrabold font-mono text-[#5b8def]">99.98%</p>
      <p className="text-sm font-semibold text-white">Platform Availability</p>
      <p className="text-xs text-slate-400">Guaranteed uptime with distributed failovers</p>
    </div>
    <div className="text-center px-4 pt-6 lg:pt-0 space-y-1">
      <p className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">&lt; 85ms</p>
      <p className="text-sm font-semibold text-white">Global Edge Latency</p>
      <p className="text-xs text-slate-400">Optimized across 200+ edge PoPs worldwide</p>
    </div>
    <div className="text-center px-4 pt-6 lg:pt-0 space-y-1">
      <p className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400">4.2M+</p>
      <p className="text-sm font-semibold text-white">Daily API Invocations</p>
      <p className="text-xs text-slate-400">Zero-downtime elastic scaling</p>
    </div>
    <div className="text-center px-4 pt-6 lg:pt-0 space-y-1">
      <p className="text-3xl sm:text-4xl font-extrabold font-mono text-purple-400">100%</p>
      <p className="text-sm font-semibold text-white">Automated CI/CD</p>
      <p className="text-xs text-slate-400">Git commit-to-production in 90 seconds</p>
    </div>
  </div>
</section>`,
  },
  {
    id: 'cta-banner-dark',
    name: 'Call to Action (CTA) Banner',
    category: 'CTA',
    description: 'High-contrast conversion banner with dual action buttons and dark navy gradient.',
    tags: ['cta', 'banner', 'conversion', 'action'],
    code: `<section className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#0d1220] to-[#151b2e] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
  <div className="max-w-xl space-y-3">
    <span className="text-xs font-bold uppercase tracking-wider text-[#5b8def]">Ready to scale?</span>
    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Accelerate Your Digital Roadmap</h2>
    <p className="text-sm text-slate-400 leading-relaxed">
      Join forward-thinking companies that rely on SysCorp to engineer resilient custom software and high-converting web interfaces.
    </p>
  </div>
  <div className="flex flex-wrap items-center gap-3 shrink-0">
    <button className="rounded-xl bg-[#1a5cdd] px-6 py-3 text-sm font-bold text-white hover:bg-[#1449b2] transition-colors shadow-md cursor-pointer">
      Request a Demo
    </button>
    <button className="rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer">
      Talk to an Engineer
    </button>
  </div>
</section>`,
  },
  {
    id: 'pricing-saas-3tier',
    name: '3-Tier SaaS Pricing Table',
    category: 'Pricing',
    description: 'Modern 3-column pricing matrix with monthly billing, popular tier highlight, and feature checklists.',
    tags: ['pricing', 'plans', 'tiers', 'saas'],
    code: `<section className="py-16 px-6 sm:px-12 bg-slate-50 rounded-3xl border border-slate-200">
  <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
    <span className="text-xs font-bold uppercase tracking-wider text-[#1a5cdd] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
      Simple Pricing
    </span>
    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Transparent Plans for Every Team</h2>
    <p className="text-sm text-slate-600">Predictable scaling with zero hidden charges or surprise surcharges.</p>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Starter</h3>
        <p className="text-xs text-slate-500">For early-stage startups building their MVP.</p>
        <div className="text-3xl font-extrabold text-slate-900 font-mono">$29 <span className="text-xs font-normal text-slate-500">/mo</span></div>
        <ul className="text-xs text-slate-600 space-y-2.5 pt-4 border-t border-slate-100">
          <li className="flex items-center gap-2 font-medium">✓ Up to 5 team members</li>
          <li className="flex items-center gap-2 font-medium">✓ 10 component exports / mo</li>
          <li className="flex items-center gap-2 font-medium">✓ Standard community support</li>
        </ul>
      </div>
      <button className="w-full rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer">
        Get Started
      </button>
    </div>
    <div className="rounded-2xl border-2 border-[#1a5cdd] bg-white p-7 shadow-xl flex flex-col justify-between space-y-6 relative">
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1a5cdd] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
        Most Popular
      </span>
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Professional</h3>
        <p className="text-xs text-slate-500">For growing engineering teams scaling products.</p>
        <div className="text-3xl font-extrabold text-slate-900 font-mono">$79 <span className="text-xs font-normal text-slate-500">/mo</span></div>
        <ul className="text-xs text-slate-600 space-y-2.5 pt-4 border-t border-slate-100">
          <li className="flex items-center gap-2 font-medium text-slate-900 font-semibold">✓ Unlimited team members</li>
          <li className="flex items-center gap-2 font-medium text-slate-900 font-semibold">✓ Unlimited component exports</li>
          <li className="flex items-center gap-2 font-medium text-slate-900 font-semibold">✓ Git sync & CI/CD webhooks</li>
          <li className="flex items-center gap-2 font-medium text-slate-900 font-semibold">✓ Priority SLA 24/7 support</li>
        </ul>
      </div>
      <button className="w-full rounded-xl bg-[#1a5cdd] py-2.5 text-xs font-bold text-white hover:bg-[#1449b2] transition-colors shadow-md shadow-blue-500/20 cursor-pointer">
        Start Free 14-Day Trial
      </button>
    </div>
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Enterprise</h3>
        <p className="text-xs text-slate-500">Dedicated architecture, audits, and custom tooling.</p>
        <div className="text-3xl font-extrabold text-slate-900 font-mono">$199 <span className="text-xs font-normal text-slate-500">/mo</span></div>
        <ul className="text-xs text-slate-600 space-y-2.5 pt-4 border-t border-slate-100">
          <li className="flex items-center gap-2 font-medium">✓ Custom component creation</li>
          <li className="flex items-center gap-2 font-medium">✓ Dedicated solutions architect</li>
          <li className="flex items-center gap-2 font-medium">✓ SOC2 & SSO integration</li>
        </ul>
      </div>
      <button className="w-full rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer">
        Contact Sales
      </button>
    </div>
  </div>
</section>`,
  },
  {
    id: 'faq-accordion-section',
    name: 'FAQ & Disclosure Section',
    category: 'FAQ',
    description: 'Two-column frequently asked questions accordion layout with expandable answers.',
    tags: ['faq', 'questions', 'accordion', 'support'],
    code: `<section className="py-16 px-6 sm:px-12 bg-white rounded-3xl border border-slate-200">
  <div className="max-w-3xl mx-auto space-y-8">
    <div className="text-center space-y-2">
      <span className="text-xs font-bold uppercase tracking-wider text-[#1a5cdd]">Got Questions?</span>
      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
    </div>
    <div className="space-y-3">
      <details className="rounded-2xl border border-slate-200 p-4 bg-slate-50/50 group" open>
        <summary className="font-bold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between">
          How do I import these components into my existing React app?
          <span className="text-[#1a5cdd] group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p className="text-xs text-slate-600 pt-3 leading-relaxed">
          Copy the component file directly from src/components/library/ into your repository, or use the one-click copy button on any component detail page.
        </p>
      </details>
      <details className="rounded-2xl border border-slate-200 p-4 bg-slate-50/50 group">
        <summary className="font-bold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between">
          Are these components compatible with Bootstrap 5 as well as Tailwind?
          <span className="text-[#1a5cdd] group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p className="text-xs text-slate-600 pt-3 leading-relaxed">
          Yes! Every component includes both React + Tailwind CSS code and pure Bootstrap 5 copy-paste HTML markup.
        </p>
      </details>
      <details className="rounded-2xl border border-slate-200 p-4 bg-slate-50/50 group">
        <summary className="font-bold text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between">
          How do git updates sync to the live portal?
          <span className="text-[#1a5cdd] group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p className="text-xs text-slate-600 pt-3 leading-relaxed">
          Use the in-app Git Sync button in the sidebar footer, or configure a GitHub Webhook pointing to /api/git to automatically pull on push.
        </p>
      </details>
    </div>
  </div>
</section>`,
  },
  {
    id: 'testimonials-grid-3col',
    name: 'Customer Testimonials & Social Proof',
    category: 'Testimonials',
    description: '3-card client review showcase with 5-star rating badges and author role attribution.',
    tags: ['testimonials', 'reviews', 'social-proof', 'ratings'],
    code: `<section className="py-16 px-6 sm:px-12 bg-slate-50 rounded-3xl border border-slate-200">
  <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
    <span className="text-xs font-bold uppercase tracking-wider text-[#1a5cdd] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
      Client Endorsements
    </span>
    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Trusted by Fast-Moving Teams</h2>
    <p className="text-sm text-slate-600">See how engineering leaders accelerate delivery with SysCorp UI.</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
      <div className="flex items-center text-amber-400 text-sm">★★★★★</div>
      <p className="text-xs text-slate-700 leading-relaxed italic">
        "Our team saved over 4 weeks of engineering time by copying SysCorp's battle-tested component layouts directly into our portal."
      </p>
      <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-[#1a5cdd] text-white flex items-center justify-center font-bold text-xs">AK</div>
        <div>
          <p className="text-xs font-bold text-slate-900">Alex Kumar</p>
          <p className="text-[11px] text-slate-500">VP Engineering, Finova</p>
        </div>
      </div>
    </div>
    <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
      <div className="flex items-center text-amber-400 text-sm">★★★★★</div>
      <p className="text-xs text-slate-700 leading-relaxed italic">
        "The dual Tailwind and Bootstrap 5 snippets made migrating our legacy dashboard to modern React seamless without breaking CSS."
      </p>
      <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">SL</div>
        <div>
          <p className="text-xs font-bold text-slate-900">Sarah Lin</p>
          <p className="text-[11px] text-slate-500">Lead Architect, OmniCloud</p>
        </div>
      </div>
    </div>
    <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
      <div className="flex items-center text-amber-400 text-sm">★★★★★</div>
      <p className="text-xs text-slate-700 leading-relaxed italic">
        "The Git Sync feature and Props Playground give our frontend team an unbeatable workflow for design consistency."
      </p>
      <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">MD</div>
        <div>
          <p className="text-xs font-bold text-slate-900">Marcus Davis</p>
          <p className="text-[11px] text-slate-500">Head of Product, ApexSys</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
  },
];
