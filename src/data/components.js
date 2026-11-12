export const componentsData = [
  {
    id: 'primary-button',
    name: 'Primary Button',
    category: 'buttons',
    description: 'Versatile action button supporting primary, secondary, outline, and danger variants with loading states and size scales.',
    tags: ['button', 'action', 'cta', 'interactive', 'pill', 'loading'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'stable',
    dateAdded: '2026-11-01',
    projectsUsedIn: ['Customer Portal', 'Admin Console', 'Marketing Landing', 'Betting Hub'],
    usageNotes: [
      'Reserve the primary button style for the main call to action on the screen.',
      'Always provide visible focus styles and accessible button text or aria-labels.',
      'Use loading state during asynchronous form submissions to prevent duplicate triggers.',
    ],
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'danger'", default: "'primary'", description: 'Color theme and visual hierarchy.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Padding, font size, and border radius scale.' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Displays an animated spinner and disables user interaction.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Renders the button inactive with 50% opacity.' },
      { name: 'icon', type: 'ReactComponent', default: 'null', description: 'Optional Lucide icon to display beside the button text.' },
      { name: 'iconPosition', type: "'left' | 'right'", default: "'left'", description: 'Placement of the icon relative to the label.' },
    ],
    code: {
      react: `import PrimaryButton from '@/components/library/PrimaryButton';

export default function Example() {
  return (
    <div className="flex gap-3">
      <PrimaryButton variant="primary">Get Started</PrimaryButton>
      <PrimaryButton variant="outline">Learn More</PrimaryButton>
      <PrimaryButton variant="primary" loading>Saving...</PrimaryButton>
    </div>
  );
}`,
      htmlCss: `<button class="inline-flex items-center justify-center px-4 py-2 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  Get Started
</button>`,
      bootstrap: `<!-- Bootstrap 5 Primary Button with Spinner -->
<button type="button" class="btn btn-primary rounded-pill px-4 py-2 fw-semibold shadow-sm">
  Get Started
</button>

<button type="button" class="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold">
  Learn More
</button>

<button class="btn btn-primary rounded-pill px-4 py-2" type="button" disabled>
  <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
  Loading...
</button>`,
    },
  },
  {
    id: 'input-field',
    name: 'Input Field',
    category: 'forms',
    description: 'Validated text input with support for start/end icons, clear labels, helper hints, and accessible error alerts.',
    tags: ['input', 'text', 'form', 'validation', 'error', 'label'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'stable',
    dateAdded: '2026-11-02',
    projectsUsedIn: ['Auth Flow', 'Profile Settings', 'Checkout Page', 'CRM Dashboard'],
    usageNotes: [
      'Every input MUST have an associated visible label or aria-label.',
      'Use the error prop to display red alert styling and wire aria-invalid for screen readers.',
      'Place helperText beneath the input for context or formatting hints.',
    ],
    props: [
      { name: 'label', type: 'string', default: 'undefined', description: 'Visible text label rendered above the input.' },
      { name: 'helperText', type: 'string', default: 'undefined', description: 'Contextual guidance shown below the input.' },
      { name: 'error', type: 'string', default: 'undefined', description: 'Validation error text that triggers red alert state.' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Shows an asterisk and sets HTML required attribute.' },
      { name: 'startIcon', type: 'ReactComponent', default: 'null', description: 'Icon embedded on the left side of the input.' },
      { name: 'endIcon', type: 'ReactComponent', default: 'null', description: 'Icon embedded on the right side of the input.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables user input and applies muted background.' },
    ],
    code: {
      react: `import InputField from '@/components/library/InputField';

export default function Example() {
  return (
    <InputField
      label="Work email"
      type="email"
      placeholder="you@company.com"
      helperText="We will send session calendar invites directly."
      required
    />
  );
}`,
      htmlCss: `<div class="flex flex-col gap-1.5 w-full text-left">
  <label for="work-email" class="text-sm font-medium text-slate-700">Work email <span class="text-rose-500">*</span></label>
  <input id="work-email" type="email" placeholder="you@company.com" required
    class="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600" />
  <p class="text-xs text-slate-500">We will send session calendar invites directly.</p>
</div>`,
      bootstrap: `<!-- Bootstrap 5 Floating or Standard Form Control -->
<div class="mb-3 text-start">
  <label for="bootstrapEmail" class="form-label fw-semibold text-secondary small">Work email <span class="text-danger">*</span></label>
  <input type="email" class="form-control rounded-3 py-2" id="bootstrapEmail" placeholder="you@company.com" required>
  <div class="form-text text-muted">We will send session calendar invites directly.</div>
</div>`,
    },
  },
  {
    id: 'navbar',
    name: 'Navbar',
    category: 'navigation',
    description: 'Header navigation bar with brand logo, desktop link list, action CTA, and mobile hamburger drawer.',
    tags: ['nav', 'header', 'menu', 'responsive', 'drawer'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'stable',
    dateAdded: '2026-11-03',
    projectsUsedIn: ['Marketing Site', 'Customer Portal', 'Documentation Hub'],
    usageNotes: [
      'Sticky header should have an accessible skip-to-content link for keyboard users.',
      'Hamburger button must toggle aria-expanded to reflect drawer visibility.',
    ],
    props: [
      { name: 'brandName', type: 'string', default: "'DevPortal'", description: 'Brand title displayed in the header.' },
      { name: 'links', type: 'Array<{ label, href }>', default: '[...]', description: 'List of navigation links.' },
      { name: 'ctaText', type: 'string', default: "'Get Started'", description: 'Label for the right-hand primary CTA button.' },
      { name: 'onCtaClick', type: 'function', default: 'undefined', description: 'Callback executed when the CTA button is clicked.' },
    ],
    code: {
      react: `import Navbar from '@/components/library/Navbar';

export default function Example() {
  return (
    <Navbar
      brandName="SysCorp"
      links={[
        { label: 'Products', href: '#products' },
        { label: 'Pricing', href: '#pricing' },
      ]}
      ctaText="Request Demo"
    />
  );
}`,
      htmlCss: `<header class="w-full bg-white border-b border-slate-200">
  <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
    <a href="#" class="font-bold text-lg text-slate-900">DevPortal</a>
    <nav class="hidden md:flex gap-6">
      <a href="#" class="text-sm font-medium text-slate-600 hover:text-indigo-600">Products</a>
      <a href="#" class="text-sm font-medium text-slate-600 hover:text-indigo-600">Pricing</a>
    </nav>
    <button class="bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-medium">Get Started</button>
  </div>
</header>`,
      bootstrap: `<!-- Bootstrap 5 Responsive Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-3">
  <div class="container-fluid px-4">
    <a class="navbar-brand fw-bold text-primary" href="#">DevPortal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" href="#">Products</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
      </ul>
      <button class="btn btn-primary rounded-pill px-4" type="button">Get Started</button>
    </div>
  </div>
</nav>`,
    },
  },
  {
    id: 'card',
    name: 'Card',
    category: 'cards',
    description: 'Flexible content card container with media header, category badge, typography body, and custom footer.',
    tags: ['card', 'surface', 'container', 'preview', 'tile'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'stable',
    dateAdded: '2026-11-04',
    projectsUsedIn: ['Catalog Grid', 'Dashboard Widgets', 'Blog', 'E-Commerce'],
    usageNotes: [
      'Maintain consistent card heights in grids using flex-col and justify-between.',
      'Supports optional image banner with automatic aspect-ratio.',
    ],
    props: [
      { name: 'title', type: 'string', default: 'undefined', description: 'Primary heading text.' },
      { name: 'subtitle', type: 'string', default: 'undefined', description: 'Secondary descriptive subtext.' },
      { name: 'image', type: 'string (URL)', default: 'undefined', description: 'Banner image displayed at the top of the card.' },
      { name: 'badge', type: 'string', default: 'undefined', description: 'Status or category pill in top corner.' },
      { name: 'hoverable', type: 'boolean', default: 'true', description: 'Enables slight elevation lift on hover.' },
      { name: 'footer', type: 'ReactNode', default: 'undefined', description: 'Footer content rendered below a divider.' },
    ],
    code: {
      react: `import Card from '@/components/library/Card';
import PrimaryButton from '@/components/library/PrimaryButton';

export default function Example() {
  return (
    <Card
      title="Cloud Server Migration"
      subtitle="Infrastructure & DevOps"
      badge="Enterprise"
      footer={<PrimaryButton size="sm">Review Architecture</PrimaryButton>}
    >
      Accelerate your migration with automated Kubernetes clusters and zero-downtime cutover.
    </Card>
  );
}`,
      htmlCss: `<div class="rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md">
  <div class="flex items-start justify-between gap-3 mb-2">
    <h3 class="text-lg font-semibold">Cloud Migration</h3>
    <span class="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">Enterprise</span>
  </div>
  <p class="text-sm text-slate-600">Accelerate your migration with automated Kubernetes clusters.</p>
</div>`,
      bootstrap: `<!-- Bootstrap 5 Card Component -->
<div class="card border-0 shadow-sm rounded-4 overflow-hidden">
  <div class="card-body p-4">
    <div class="d-flex justify-content-between align-items-start mb-2">
      <h5 class="card-title fw-bold mb-0">Cloud Migration</h5>
      <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">Enterprise</span>
    </div>
    <p class="card-text text-muted small">Accelerate your migration with automated Kubernetes clusters.</p>
    <button class="btn btn-sm btn-primary rounded-pill px-3 mt-3">Review Architecture</button>
  </div>
</div>`,
    },
  },
  {
    id: 'modal',
    name: 'Modal',
    category: 'modals',
    description: 'Accessible modal overlay dialog with backdrop blur, keyboard focus trapping, Escape dismissal, and custom action footers.',
    tags: ['modal', 'dialog', 'popup', 'overlay', 'focus-trap', 'accessibility'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'stable',
    dateAdded: '2026-11-05',
    projectsUsedIn: ['Confirmations', 'Data Edit Modals', 'Lead Forms', 'Media Lightbox'],
    usageNotes: [
      'Locks document body scroll while open to prevent background scrolling.',
      'Closes automatically on Escape key and returns focus to the trigger button.',
    ],
    props: [
      { name: 'open', type: 'boolean', default: 'false', description: 'Controls modal open/close state.' },
      { name: 'onClose', type: 'function', default: 'undefined', description: 'Callback invoked when user requests closure.' },
      { name: 'title', type: 'string', default: "'Modal Title'", description: 'Header title text with aria-label association.' },
      { name: 'description', type: 'string', default: 'undefined', description: 'Optional subtitle explaining the modal action.' },
      { name: 'footer', type: 'ReactNode', default: 'undefined', description: 'Action button row aligned to the bottom right.' },
      { name: 'maxWidth', type: 'string', default: "'max-w-md'", description: 'Tailwind max-width class constraint.' },
    ],
    code: {
      react: `import { useState } from 'react';
import Modal from '@/components/library/Modal';
import PrimaryButton from '@/components/library/PrimaryButton';

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setOpen(true)}>Open Modal</PrimaryButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm Deletion"
        footer={
          <>
            <PrimaryButton variant="outline" size="sm" onClick={() => setOpen(false)}>Cancel</PrimaryButton>
            <PrimaryButton variant="danger" size="sm" onClick={() => setOpen(false)}>Delete</PrimaryButton>
          </>
        }
      >
        Are you sure you want to permanently delete this project record?
      </Modal>
    </>
  );
}`,
      htmlCss: `<div role="dialog" aria-modal="true" class="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4">
  <div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
    <div class="flex items-center justify-between pb-3 border-b border-slate-100">
      <h3 class="text-lg font-bold">Confirm Deletion</h3>
    </div>
    <div class="py-4 text-sm text-slate-600">Are you sure you want to delete this record?</div>
  </div>
</div>`,
      bootstrap: `<!-- Bootstrap 5 Modal Markup -->
<div class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0,0,0,0.5);">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content rounded-4 border-0 shadow">
      <div class="modal-header border-0 pb-0">
        <h5 class="modal-title fw-bold">Confirm Action</h5>
        <button type="button" class="btn-close" aria-label="Close"></button>
      </div>
      <div class="modal-body text-muted small py-3">
        Are you sure you want to proceed with this update?
      </div>
      <div class="modal-footer border-0 pt-0">
        <button type="button" class="btn btn-sm btn-light rounded-pill px-3">Cancel</button>
        <button type="button" class="btn btn-sm btn-primary rounded-pill px-3">Confirm</button>
      </div>
    </div>
  </div>
</div>`,
    },
  },
  {
    id: 'alert',
    name: 'Alert',
    category: 'alerts',
    description: 'System feedback banners across 4 semantic states (info, success, warning, danger) with optional dismiss action.',
    tags: ['alert', 'notification', 'feedback', 'banner', 'status'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'stable',
    dateAdded: '2026-11-06',
    projectsUsedIn: ['Form Submissions', 'System Notices', 'Error Banners', 'Toast Containers'],
    usageNotes: [
      'Use role="alert" for dynamic notifications so assistive technology announces updates.',
      'Ensure high contrast between text and background across light and dark modes.',
    ],
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", description: 'Visual semantic alert styling.' },
      { name: 'title', type: 'string', default: 'undefined', description: 'Bold headline summarizing the status.' },
      { name: 'dismissible', type: 'boolean', default: 'false', description: 'Displays an X button to hide the alert.' },
      { name: 'onDismiss', type: 'function', default: 'undefined', description: 'Callback executed when the user dismisses the alert.' },
    ],
    code: {
      react: `import Alert from '@/components/library/Alert';

export default function Example() {
  return (
    <div className="space-y-3">
      <Alert variant="success" title="Deployment Successful" dismissible>
        Production build v2.4.0 is live across all edge regions.
      </Alert>
      <Alert variant="danger" title="Authentication Error">
        Your API session token has expired. Please log in again.
      </Alert>
    </div>
  );
}`,
      htmlCss: `<div role="alert" class="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 shadow-xs">
  <div>
    <h4 class="font-semibold text-sm">Deployment Successful</h4>
    <p class="opacity-90">Production build is live.</p>
  </div>
</div>`,
      bootstrap: `<!-- Bootstrap 5 Alert Component -->
<div class="alert alert-success alert-dismissible fade show rounded-4 border-0 shadow-sm" role="alert">
  <strong>Deployment Successful!</strong> Production build is live across all edge regions.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

<div class="alert alert-danger rounded-4 border-0 shadow-sm" role="alert">
  <strong>Error:</strong> Your API session token has expired.
</div>`,
    },
  },
  {
    id: 'data-table',
    name: 'Data Table',
    category: 'tables',
    description: 'Clean data table featuring sortable column headers, client-side keyword filtering, zebra row striping, and empty state handling.',
    tags: ['table', 'grid', 'data', 'sort', 'filter', 'rows'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'stable',
    dateAdded: '2026-11-07',
    projectsUsedIn: ['Admin Portals', 'Financial Reports', 'User Management', 'Audit Logs'],
    usageNotes: [
      'Provide column.sortable = true to enable ascending/descending header clicks.',
      'Wrapper includes responsive horizontal scrolling to prevent mobile viewport breaks.',
    ],
    props: [
      { name: 'columns', type: 'Array<{ key, label, sortable, render }>', default: '[...]', description: 'Schema defining table headers and accessors.' },
      { name: 'data', type: 'Array<Object>', default: '[...]', description: 'List of record objects matching column keys.' },
      { name: 'striped', type: 'boolean', default: 'true', description: 'Alternating row background colors.' },
      { name: 'searchable', type: 'boolean', default: 'true', description: 'Renders a search input to filter records live.' },
    ],
    code: {
      react: `import DataTable from '@/components/library/DataTable';

const columns = [
  { key: 'id', label: 'User ID', sortable: true },
  { key: 'name', label: 'Full Name', sortable: true },
  { key: 'status', label: 'Account Status' },
];

const data = [
  { id: '001', name: 'Sophia Hayes', status: 'Active' },
  { id: '002', name: 'Liam Vance', status: 'Active' },
];

export default function Example() {
  return <DataTable columns={columns} data={data} striped searchable />;
}`,
      htmlCss: `<div class="overflow-x-auto rounded-xl border border-slate-200 bg-white">
  <table class="w-full text-left text-sm">
    <thead class="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
      <tr><th class="px-4 py-3">ID</th><th class="px-4 py-3">Name</th></tr>
    </thead>
    <tbody class="divide-y divide-slate-100">
      <tr><td class="px-4 py-3">001</td><td class="px-4 py-3">Sophia Hayes</td></tr>
    </tbody>
  </table>
</div>`,
      bootstrap: `<!-- Bootstrap 5 Table Component -->
<div class="table-responsive rounded-4 shadow-sm border bg-white">
  <table class="table table-hover table-striped mb-0 align-middle">
    <thead class="table-light">
      <tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Status</th></tr>
    </thead>
    <tbody>
      <tr><td>USR-01</td><td>Sophia Hayes</td><td><span class="badge bg-success">Active</span></td></tr>
      <tr><td>USR-02</td><td>Liam Vance</td><td><span class="badge bg-success">Active</span></td></tr>
    </tbody>
  </table>
</div>`,
    },
  },
  {
    id: 'image-gallery',
    name: 'Image Gallery',
    category: 'gallery',
    description: 'Interactive media showcase with featured hero preview, thumbnail strip selection, and previous/next slide navigation.',
    tags: ['gallery', 'carousel', 'media', 'photos', 'lightbox', 'slider'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'stable',
    dateAdded: '2026-11-08',
    projectsUsedIn: ['Product Showcases', 'Portfolio', 'Property Listings', 'Case Studies'],
    usageNotes: [
      'All image items should provide descriptive alt text for accessibility.',
      'Supports click-to-select on thumbnails with animated highlight border.',
    ],
    props: [
      { name: 'images', type: 'Array<{ src, alt, caption }>', default: '[...]', description: 'Array of image objects.' },
      { name: 'className', type: 'string', default: "''", description: 'Custom CSS container overrides.' },
    ],
    code: {
      react: `import ImageGallery from '@/components/library/ImageGallery';

const items = [
  { src: '/photos/peak.jpg', alt: 'Mountain Peak', caption: 'Sunrise over Alps' },
  { src: '/photos/coast.jpg', alt: 'Ocean Coast', caption: 'Pacific waves' },
];

export default function Example() {
  return <ImageGallery images={items} />;
}`,
      htmlCss: `<div class="w-full max-w-2xl mx-auto space-y-3">
  <div class="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 shadow-md">
    <img src="/photo.jpg" alt="Gallery preview" class="h-full w-full object-cover" />
  </div>
</div>`,
      bootstrap: `<!-- Bootstrap 5 Carousel Component -->
<div id="carouselExample" class="carousel slide rounded-4 overflow-hidden shadow-sm" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" class="d-block w-100" alt="Coast">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>`,
    },
  },
  {
    id: 'contact-form',
    name: 'Contact Form',
    category: 'forms',
    description: 'Composite form layout with validated name, email, subject, and message fields, integrated with loading and success alert states.',
    tags: ['form', 'contact', 'email', 'feedback', 'inputs', 'composite'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'stable',
    dateAdded: '2026-11-09',
    projectsUsedIn: ['Contact Us Page', 'Support Portal', 'Inquiry Modals', 'Feedback Loop'],
    usageNotes: [
      'Executes client-side validation before triggering the onSubmit handler.',
      'Renders success alert upon completion and clears input state.',
    ],
    props: [
      { name: 'onSubmit', type: 'function(formData)', default: 'undefined', description: 'Async callback triggered on submission.' },
      { name: 'title', type: 'string', default: "'Send us a message'", description: 'Form header title.' },
      { name: 'subtitle', type: 'string', default: "'We typically respond within 24 hours.'", description: 'Subtext displayed beneath the title.' },
    ],
    code: {
      react: `import ContactForm from '@/components/library/ContactForm';

export default function Example() {
  const handleSend = async (data) => {
    console.log('Sending message:', data);
  };

  return <ContactForm onSubmit={handleSend} />;
}`,
      htmlCss: `<form class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs max-w-lg space-y-4">
  <h3 class="text-xl font-bold">Contact Us</h3>
  <input type="email" placeholder="you@company.com" class="w-full rounded-lg border border-slate-300 p-2 text-sm" />
  <button type="submit" class="w-full bg-indigo-600 text-white rounded-lg py-2">Submit</button>
</form>`,
      bootstrap: `<!-- Bootstrap 5 Contact Form Card -->
<div class="card border-0 shadow-sm rounded-4 p-4 max-w-lg mx-auto">
  <h4 class="fw-bold mb-3">Send us a message</h4>
  <form>
    <div class="mb-3">
      <label class="form-label small text-muted">Full Name</label>
      <input type="text" class="form-control rounded-3" placeholder="Jane Doe">
    </div>
    <div class="mb-3">
      <label class="form-label small text-muted">Work Email</label>
      <input type="email" class="form-control rounded-3" placeholder="jane@company.com">
    </div>
    <div class="mb-3">
      <label class="form-label small text-muted">Message</label>
      <textarea class="form-control rounded-3" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-primary w-100 rounded-pill py-2">Send Message</button>
  </form>
</div>`,
    },
  },
  {
    id: 'footer',
    name: 'Footer',
    category: 'layout',
    description: 'Comprehensive page footer component with company branding, multi-column link directories, copyright notice, and social links.',
    tags: ['footer', 'layout', 'links', 'directory', 'branding'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'stable',
    dateAdded: '2026-11-10',
    projectsUsedIn: ['Marketing Website', 'Docs Portal', 'Web App Shell'],
    usageNotes: [
      'Place at the base of your application layout within the main document flow.',
      'Supports custom link columns and dynamic current-year copyright calculation.',
    ],
    props: [
      { name: 'brandName', type: 'string', default: "'DevPortal'", description: 'Company or product title displayed in brand column.' },
      { name: 'tagline', type: 'string', default: "'Modern UI components...'", description: 'Short brand mission description.' },
      { name: 'columns', type: 'Array<{ title, links }>', default: '[...]', description: 'Directory columns with label and href lists.' },
    ],
    code: {
      react: `import Footer from '@/components/library/Footer';

export default function Example() {
  return (
    <Footer
      brandName="SysCorp"
      tagline="Engineering next-generation web architectures."
    />
  );
}`,
      htmlCss: `<footer class="w-full border-t border-slate-200 bg-white py-12">
  <div class="mx-auto max-w-7xl px-6 flex justify-between">
    <div><h4 class="font-bold">DevPortal</h4></div>
    <div class="text-sm text-slate-500">© 2026 DevPortal. All rights reserved.</div>
  </div>
</footer>`,
      bootstrap: `<!-- Bootstrap 5 Footer -->
<footer class="bg-white border-top py-5 text-muted small">
  <div class="container-fluid px-4">
    <div class="row">
      <div class="col-md-4 mb-3">
        <h5 class="fw-bold text-dark">DevPortal</h5>
        <p>Modern UI components crafted for scalability.</p>
      </div>
      <div class="col-md-2 mb-3">
        <h6 class="fw-bold text-dark">Components</h6>
        <ul class="list-unstyled">
          <li><a href="#" class="text-decoration-none text-muted">Buttons</a></li>
          <li><a href="#" class="text-decoration-none text-muted">Forms</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>`,
    },
  },
  {
    id: 'odds-card',
    name: 'Odds Card',
    category: 'game-betting',
    description: 'Live betting card with real-time match details, pulsing live indicator, current score, and clickable odds buttons.',
    tags: ['betting', 'odds', 'gaming', 'sportsbook', 'live', 'score'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'new',
    dateAdded: '2026-11-12',
    projectsUsedIn: ['Sportsbook App', 'Live Betting Portal', 'Gaming Dashboard'],
    usageNotes: [
      'Shows pulsing red live badge when isLive is true.',
      'Odds buttons toggle active state and report selection through onSelectOdds.',
    ],
    props: [
      { name: 'match', type: 'string', default: "'Manchester City vs Real Madrid'", description: 'Match fixture or game title.' },
      { name: 'league', type: 'string', default: "'UEFA Champions League'", description: 'Competition or tournament banner.' },
      { name: 'isLive', type: 'boolean', default: 'true', description: 'Displays live badge with minute counter.' },
      { name: 'score', type: 'string', default: "'2 - 1'", description: 'Current match scoreline.' },
      { name: 'odds', type: 'Array<{ label, value }>', default: '[...]', description: 'Market outcomes and current decimal odds.' },
      { name: 'onSelectOdds', type: 'function(odd)', default: 'undefined', description: 'Callback executed when an outcome is picked.' },
    ],
    code: {
      react: `import OddsCard from '@/components/library/OddsCard';

export default function Example() {
  return (
    <OddsCard
      match="Arsenal vs Liverpool"
      league="Premier League"
      score="1 - 0"
      onSelectOdds={(odd) => console.log('Selected:', odd)}
    />
  );
}`,
      htmlCss: `<div class="rounded-2xl border border-slate-200 bg-white p-5 max-w-md shadow-xs">
  <div class="flex justify-between text-xs mb-2">
    <span>Premier League</span>
    <span class="text-rose-600 font-bold">● LIVE 64'</span>
  </div>
  <h4 class="font-bold text-base mb-3">Arsenal vs Liverpool</h4>
  <div class="grid grid-cols-3 gap-2">
    <button class="rounded-xl border border-slate-200 p-2 text-center">1.85</button>
  </div>
</div>`,
      bootstrap: `<!-- Bootstrap 5 Sports Odds Card -->
<div class="card border-0 shadow-sm rounded-4 p-3 max-w-md">
  <div class="d-flex justify-content-between small text-muted mb-2">
    <span>Premier League</span>
    <span class="badge bg-danger-subtle text-danger">LIVE 64'</span>
  </div>
  <h6 class="fw-bold">Arsenal vs Liverpool</h6>
  <div class="row g-2 mt-2">
    <div class="col-4"><button class="btn btn-outline-secondary w-100 rounded-3 py-2 small fw-bold">1.85</button></div>
    <div class="col-4"><button class="btn btn-outline-secondary w-100 rounded-3 py-2 small fw-bold">3.60</button></div>
    <div class="col-4"><button class="btn btn-outline-secondary w-100 rounded-3 py-2 small fw-bold">4.20</button></div>
  </div>
</div>`,
    },
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'buttons',
    description: 'Reusable Badge component designed for modern web applications.',
    tags: ['badge', 'buttons', 'ui'],
    tech: ['React', 'Tailwind', 'Bootstrap'],
    status: 'new',
    dateAdded: '2026-11-12',
    projectsUsedIn: ['Internal App'],
    usageNotes: [
      'Import directly from @/components/library/Badge',
      'Ensure accessible labeling when using custom children',
    ],
    props: [
      { name: 'className', type: 'string', default: "''", description: 'Additional CSS classes.' },
      { name: 'children', type: 'ReactNode', default: 'undefined', description: 'Component content.' },
    ],
    code: {
      react: `<Badge>Badge Action</Badge>`,
      htmlCss: `<div class="inline-flex items-center px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold">Badge Action</div>`,
      bootstrap: `<div class="badge bg-primary p-2">Badge Action</div>`,
    },
  },
];
