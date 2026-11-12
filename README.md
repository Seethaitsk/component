# UI Components Portal

An internal, modern component catalog built with Next.js (App Router) and Tailwind CSS that catalogs the reusable UI components our team uses across projects.

---

## Tech Stack
- **Next.js 16 (App Router)** + **React 19** (JavaScript ES6+, no backend required)
- **Tailwind CSS v4** for portal styling and primary component library
- **Bootstrap 5** support with dedicated code snippets and visual preview tabs
- **Lucide React** for modern iconography
- **Client-Side Metadata Architecture**: Local JSON/JS data in `src/data/`

---

## Quick Start

### 1. Installation
```bash
cd ui-components-portal
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## Portal Pages & Features

1. **Home (`/`)**:
   - Hero banner with quick search.
   - 10 Category Cards with dynamic component counts and interaction summaries.
   - Recently added components showcase.
   - High-level library metrics (total components, categories, tech stacks, accessibility rate).
2. **Category Page (`/category/[slug]`)**:
   - Filtered grid of component cards for each category.
   - Live interactive miniature previews and tech stack pills.
   - Breadcrumb navigation and empty states.
3. **Component Detail Page (`/component/[id]`)**:
   - **Interactive Live Preview**:
     - **Responsive Viewport Toggles**: Mobile (`375px`), Tablet (`768px`), and Desktop (`100%`).
     - **Light / Dark Switch**: Real-time canvas theme toggle.
     - **Tech Mode Switch**: Toggle between `React (Tailwind)` and `Bootstrap 5` live rendering.
     - **State Reset**: 1-click state reset button.
   - **Props & Variants Table**: Schema table listing prop names, types, defaults, and descriptions.
   - **Code Snippet Viewer**: 1-click copy-to-clipboard code snippets with tabs for:
     - `React` (Tailwind)
     - `HTML + CSS`
     - `Bootstrap 5`
   - **Usage Notes & Best Practices**: Guidelines on when and how to implement the component.
   - **Adopted in Projects**: Badges listing internal projects currently using the component.
   - **Related Components**: Quick navigation to peer components in the same category.
4. **Search & Filter (`/search`)**:
   - Multi-facet search by keyword, category dropdown, tech stack (React / Tailwind / Bootstrap 5), and tags.
   - Live result counts and filter reset.

---

## 10 Seeded Starter Components

| # | Component | Category | Folder Path |
|---|---|---|---|
| 1 | **Primary Button** | Buttons | `src/components/library/PrimaryButton/` |
| 2 | **Input Field** | Forms | `src/components/library/InputField/` |
| 3 | **Navbar** | Navigation | `src/components/library/Navbar/` |
| 4 | **Card** | Cards | `src/components/library/Card/` |
| 5 | **Modal** | Modals | `src/components/library/Modal/` |
| 6 | **Alert** | Alerts | `src/components/library/Alert/` |
| 7 | **Data Table** | Tables | `src/components/library/DataTable/` |
| 8 | **Image Gallery** | Gallery / Carousel | `src/components/library/ImageGallery/` |
| 9 | **Contact Form** | Forms | `src/components/library/ContactForm/` |
| 10 | **Footer** | Layout | `src/components/library/Footer/` |
| *Bonus* | **Odds Card** | Game / Betting UI | `src/components/library/OddsCard/` |

---

## How to Add a New Component

Adding a new component to the portal requires **only two steps**:

### Step 1: Create the Component Folder
Create a new folder in `src/components/library/<ComponentName>/`:
```
src/components/library/Badge/
  ├── Badge.jsx
  └── index.js
```

Example `Badge.jsx`:
```jsx
'use client';

export default function Badge({ variant = 'primary', children }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
      {children}
    </span>
  );
}
```

Example `index.js`:
```js
export { default } from './Badge';
```

### Step 2: Add Metadata Entry in `src/data/components.js`
Append a single metadata object to the `componentsData` array in `src/data/components.js`:

```javascript
{
  id: 'badge',
  name: 'Badge',
  category: 'buttons', // one of: buttons, forms, navigation, cards, modals, tables, alerts, layout, gallery, game-betting
  description: 'Small status indicator and categorization pill.',
  tags: ['badge', 'status', 'tag', 'pill'],
  tech: ['React', 'Tailwind', 'Bootstrap'],
  status: 'new',
  dateAdded: '2026-11-12',
  projectsUsedIn: ['Admin Console', 'Customer Portal'],
  usageNotes: [
    'Use for high-level status tags or count badges.',
    'Keep text concise (1-2 words).',
  ],
  props: [
    { name: 'variant', type: "'primary' | 'secondary'", default: "'primary'", description: 'Color scheme.' },
    { name: 'children', type: 'ReactNode', default: 'undefined', description: 'Badge content text.' },
  ],
  code: {
    react: `<Badge variant="primary">New Feature</Badge>`,
    htmlCss: `<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">New Feature</span>`,
    bootstrap: `<span class="badge bg-primary rounded-pill">New Feature</span>`,
  },
}
```

*(Optional)*: If you want the live interactive canvas on the detail page to render your custom React component, add a 3-line case to `src/components/library/ComponentRenderer.jsx`.

---

## Directory Structure

```
ui-components-portal/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout with PortalShell
│   │   ├── page.js                # Home page (search, categories, recently added)
│   │   ├── globals.css            # Tailwind CSS v4 styling & scrollbars
│   │   ├── category/
│   │   │   └── [slug]/
│   │   │       └── page.js        # Category component grid page
│   │   ├── component/
│   │   │   └── [id]/
│   │   │       └── page.js        # Component detail page with preview & snippets
│   │   └── search/
│   │       └── page.js            # Multi-facet search & filter page
│   ├── components/
│   │   ├── library/               # The actual reusable component packages
│   │   │   ├── PrimaryButton/
│   │   │   ├── InputField/
│   │   │   ├── Navbar/
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   ├── Alert/
│   │   │   ├── DataTable/
│   │   │   ├── ImageGallery/
│   │   │   ├── ContactForm/
│   │   │   ├── Footer/
│   │   │   ├── OddsCard/
│   │   │   └── ComponentRenderer.jsx # Live component renderer map
│   │   └── portal/                # Portal shell, preview controls, tables, sidebar
│   │       ├── Header.jsx
│   │       ├── Sidebar.jsx
│   │       ├── ComponentCard.jsx
│   │       ├── ComponentPreview.jsx
│   │       ├── CodeSnippetViewer.jsx
│   │       ├── PropsTable.jsx
│   │       ├── CategoryCard.jsx
│   │       └── PortalShell.jsx
│   └── data/
│       ├── categories.js          # The 10 category definitions
│       └── components.js          # Component metadata, props, & code snippets
├── package.json
└── README.md
```
