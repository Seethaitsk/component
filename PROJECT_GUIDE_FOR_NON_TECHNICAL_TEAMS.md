# SysCorp UI Components Portal
## Non-Technical Guide & Project Handbook

---

## 1. Project Overview

The **SysCorp UI Components Portal** is a centralized digital showroom and workshop for our company's website parts. 

Think of it like a **digital box of LEGO bricks**. In the past, whenever our team built a new website or customer screen, developers had to recreate basic items like buttons, sign-in boxes, menus, and price tables from scratch. This wasted time and made different apps look mismatched. 

This portal solves that problem. It gives everyone—designers, project managers, clients, and programmers—a single place to browse, test, and grab ready-made building blocks that look consistent, load fast, and work on all devices.

---

## 2. Who Will Use It

| User Group | Why They Use This Portal | What Value They Get |
|---|---|---|
| **Clients & Stakeholders** | To see what their future website or app will look and feel like before it is finished. | Clear visibility and confidence without reading technical jargon. |
| **Product & Project Managers** | To plan new features, check project progress, and see which parts already exist. | Faster delivery times and accurate project roadmaps. |
| **Designers** | To make sure all brand colors, type sizes, and shapes stay consistent across all products. | No more mismatched shades of blue or inconsistent button shapes. |
| **Frontend Developers (Coders)** | To copy tested, bug-free building blocks into their current software projects. | Saves days of repetitive typing on every new project. |
| **Customer Support & Sales** | To demonstrate working prototypes to prospective customers in live sales meetings. | Professional, working presentations on desktop, tablet, and mobile. |

---

## 3. Main Features

- **Ready-Made Component Library**: 23 ready-to-use building blocks (buttons, menus, cards, and forms) tested for safety and speed.
- **Interactive Props Playground (Control Board)**: Change colors, labels, and sizes on-screen with simple switches and see the result instantly.
- **Responsive Screen Testing**: Test any component or page on simulated Computer, Laptop, Tablet, and Mobile phone screens with one click.
- **Light & Dark Mode Switcher**: Instantly switch any part between daytime clean white and nighttime dark themes.
- **Modular Page Sections**: Ready-made page slices like Welcome Banners, 4-Column Feature Grids, and Customer Review areas.
- **Complete Template Websites**: 4 full working demo websites (Cloud Platform, Creative Agency, System Monitoring, and Sports Gaming) you can interact with.
- **Built-in AI Agent Assistant**: An artificial intelligence helper that can create brand-new website parts just by describing them in plain words.
- **Design Brand Tokens (Style Rulebook)**: A shared list of our official corporate colors, corner curves, shadows, and text sizes.
- **Live Roadmap Tracker**: A visual status board showing which parts are finished, in review, or planned for next month.
- **Searchable Icon Catalog**: Over 70 official company symbols and icons with easy one-click copying.
- **Cloud Git Sync Button**: A single button that pulls in the latest updates pushed by programmers without needing technical tools.

---

## 4. Page-by-Page Screen Guide

### Page 1: Portal Home (`/`)
- **Purpose**: The front reception desk of our library.
- **What You See**:
  - A friendly welcome banner explaining the library.
  - Quick summary numbers showing total components (23), sections (7), full websites (4), and our 100% mobile readiness score.
  - A fast search bar to look up any part.
  - Category tiles (Buttons, Cards, Navigation, Forms, etc.) showing how many parts are inside each.
  - A "Recently Added" gallery showing the newest items created by the team.
  - Shortcut cards to our engineering tools (AI Agent, Roadmap, Design Tokens, and Icons).
- **What You Can Do**: Search for parts, browse categories, or jump into any advanced studio tool.

---

### Page 2: Component Categories (`/category/[slug]`)
- **Purpose**: A showroom shelf for a specific family of parts (for example, all "Buttons" or all "Forms").
- **What You See**:
  - A neat grid of cards showing every part in that group.
  - Live miniature previews showing how each button or form looks.
  - Status badges (e.g., "Active", "Popular", "Updated").
- **What You Can Do**: Click on any item to open its full testing screen.

---

### Page 3: Component Detail & Playground (`/component/[id]`)
- **Purpose**: The inspection and testing workbench for an individual building block.
- **What You See**:
  - **The Live Canvas**: The actual component running in your browser.
  - **Screen Size Controls**: Buttons to test how it looks on mobile phones, tablets, or wide computer monitors.
  - **Theme Controls**: Switch between daylight white and dark midnight themes.
  - **The Control Board (Interactive Playground)**: Simple drop-down menus and checkboxes that let you change button colors, labels, and icons live.
  - **Property Guide**: A simple table explaining what options can be changed.
  - **Usage Advice**: Plain-English tips on when to use this part and when to avoid it.
  - **Projects List**: Names of company projects currently using this exact part.
- **What You Can Do**: Test the part, customize how it looks, and copy it for your project.

---

### Page 4: Page Sections Library (`/sections`)
- **Purpose**: Larger assembled pieces of a page (like pre-built rooms of a house).
- **What You See**:
  - A gallery of pre-built page strips:
    1. *Enterprise Welcome Banner (Hero)*: Big headline, company numbers, and sign-up buttons.
    2. *4-Column Feature Grid*: Cards explaining product benefits with symbols.
    3. *Dark Call-to-Action Banner*: High-contrast announcement banner to encourage sign-ups.
    4. *3-Tier Pricing Matrix*: Transparent price cards (Starter, Pro, Enterprise) with checklists.
    5. *Frequently Asked Questions (FAQ)*: Clickable questions that drop down to reveal answers.
    6. *Performance & Stats Bar*: Trust-building statistics (e.g. 99.98% reliability).
    7. *Customer Testimonials Grid*: 5-star customer quote cards with client photos.
- **What You Can Do**: Filter by section type, test on mobile or desktop view, and copy the whole section in one second.

---

### Page 5: Template Websites & Boilerplates (`/templates`)
- **Purpose**: Complete full-page templates and fully functioning websites.
- **What You See**:
  - **Tab 1: Live Template Websites**: Complete multi-page interactive websites:
    - *SysCorp Cloud Platform*: A technology company site with an annual vs monthly discount price switcher, feature tabs, and a working demo request window.
    - *SysCorp Creative Studio*: A sleek dark-themed portfolio site with project filters and inquiry windows.
    - *SysCorp CloudOps Telemetry*: A system control room with live simulated server activity logs and health counters.
    - *Sports & Game Arena*: A live sports match center with real-time score boxes and a working interactive bet ticket calculator.
  - **Tab 2: Page Boilerplates**: Complete page foundations for quick copying.
  - **External Website Simulator**: A special box where you can type *any* public website address (like your company's live site) and test how it behaves inside phone, tablet, and laptop frames.
- **What You Can Do**: Launch the interactive simulator, test buttons and forms inside the simulated screen, or open the website full-screen in a fresh browser tab.

---

### Page 6: AI Agent Studio (`/agent`)
- **Purpose**: An artificial intelligence assistant that builds new web components on demand.
- **What You See**:
  - **Left Side (Chat Screen)**: A conversation window where you type requests in plain English. Example: *"Create a green WhatsApp chat button with an online dot."*
  - **Right Side (Live Workshop)**: The newly created component appears live immediately. You can click on it and test it right away.
  - **Accessibility Scorecard**: An automated health check scoring the component out of 100 on contrast and ease of use for visually impaired visitors.
  - **1-Click "Save to Library" Button**: Saves the new item directly into our official system with one click.
- **What You Can Do**: Chat with the AI, generate custom components, verify accessibility, and add new parts without knowing how to code.

---

### Page 7: Design Tokens (Style Rulebook) (`/tokens`)
- **Purpose**: The official digital brand handbook.
- **What You See**:
  - **Color Palette Cards**: Swatches of our official SysCorp Deep Blue, Dark Navy, Emerald Green, and Neutral Greys.
  - **Typography (Text Size) Scale**: Visual samples of headers, body text, and small notes.
  - **Corner Curves**: Examples of sharp, rounded, and pill-shaped edges.
  - **Elevation Shadows**: Soft shadows that make cards look like they are gently floating above the page.
- **What You Can Do**: Click any color or size to copy its exact name.

---

### Page 8: Roadmap Tracker (`/tracker`)
- **Purpose**: A live project board showing the status of every component.
- **What You See**:
  - Kanban columns: **Ready to Use**, **In Polish**, and **Planned Next**.
  - Component cards showing who is working on them and when they were last updated.
  - Overall progress meter showing how close our whole design system is to completion.
- **What You Can Do**: Check project health, see what is coming next, and plan upcoming product launches.

---

### Page 9: Icon Explorer (`/icons`)
- **Purpose**: A searchable visual dictionary of company icons.
- **What You See**:
  - Over 70 clean visual symbols (Search, Settings, Checkmarks, Arrows, Security Shields, User Avatars, etc.).
  - Sizing sliders to see how icons look at tiny, medium, or large sizes.
  - Color pickers to test icons in our brand colors.
- **What You Can Do**: Type keywords like "money", "user", or "alert" to find the right icon instantly.

---

### Page 10: Component Studio (`/new`)
- **Purpose**: A simple form for team members to register a new building block into the library.
- **What You See**: A form asking for the component's name, category, short description, and options.
- **What You Can Do**: Fill in the form and click "Publish". The portal automatically creates the required files behind the scenes.

---

### Page 11: Search & Filter Hub (`/search`)
- **Purpose**: A search engine across our entire design catalog.
- **What You See**: Fast search filters by keyword, technology, and category tags.
- **What You Can Do**: Find exact parts in under two seconds.

---

## 5. How It Works (Simple User Journeys)

### Journey 1: Finding and Using an Existing Part
```
1. Open Portal Home
       ↓
2. Type "Button" or "Pricing" in the Search Bar
       ↓
3. Click the component card to open the Detail Page
       ↓
4. Use the Control Board switches to test colors and sizes
       ↓
5. Click "Copy" → Paste directly into the product
```

---

### Journey 2: Asking the AI Agent to Create Something New
```
1. Click "AI Agent Studio" in the top menu
       ↓
2. Type what you want: "Create a WhatsApp chat button"
       ↓
3. The AI builds it and renders it in the live workshop (Right side)
       ↓
4. Check the automatic Accessibility Score (e.g. 98/100)
       ↓
5. Click "Save to Library"
       ↓
6. It is now permanently added to the portal for everyone to use!
```

---

### Journey 3: Reviewing a Complete Website Template
```
1. Click "Template Websites" in the navigation bar
       ↓
2. Choose a template (e.g. "SysCorp Cloud Platform")
       ↓
3. Click "Launch Interactive Simulator"
       ↓
4. Click the "Mobile" button to see how it looks on a smartphone
       ↓
5. Toggle the "Annual Billing" switch to see prices drop by 20%
       ↓
6. Click "Open in New Tab" to show it to a client full-screen
```

---

## 6. Technology Used (Plain English Guide)

| Tool / Technology | What It Is | Why We Use It |
|---|---|---|
| **Next.js** | A modern website engine built by Vercel. | Makes the portal load in milliseconds and creates fast, reliable pages. |
| **React** | A building-block system for interactive web screens. | Lets us create smart components that react instantly when clicked. |
| **Tailwind CSS** | A modern digital styling brush. | Keeps all colors, padding, and shapes clean, lightweight, and modern. |
| **Bootstrap 5** | A classic, widely-used web styling library. | Allows our team to support older company systems without rewriting them. |
| **Lucide Icons** | A collection of over 1,000 clean line symbols. | Gives our products professional, consistent icons. |
| **GitHub** | A secure cloud vault for storing our project history. | Keeps our work backed up safely and helps the whole team collaborate. |
| **Google Gemini AI** | Advanced artificial intelligence engine. | Powers our AI Agent Studio to generate new components from text prompts. |

---

## 7. Project Folder Guide

```
ui-components-portal/
├── src/
│   ├── app/                      ← Every page a visitor can open in their web browser
│   │   ├── page.js               ← The Homepage
│   │   ├── sections/             ← The Page Sections showroom
│   │   ├── templates/            ← The Full Website & Template showroom
│   │   ├── agent/                ← The AI Agent Studio
│   │   ├── tokens/               ← The Brand Design Tokens page
│   │   ├── tracker/              ← The Live Project Roadmap
│   │   ├── icons/                ← The Icon Explorer
│   │   ├── new/                  ← The Create-a-Component form
│   │   ├── search/               ← The Search engine page
│   │   └── preview/[siteId]/     ← The borderless live websites (runs full-screen)
│   ├── components/
│   │   ├── library/              ← The actual reusable building blocks (Buttons, Cards, Modals)
│   │   └── portal/               ← The shell around our portal (Header, Sidebar, Phone frames)
│   ├── data/                     ← The library's digital catalogs and menus
│   │   ├── components.js         ← Master catalog of all 23 components and their descriptions
│   │   ├── sectionsData.js       ← Master catalog of all 7 pre-assembled page sections
│   │   ├── templateWebsitesData.js ← Master catalog of the 4 complete template websites
│   │   └── categories.js         ← The 10 component departments
│   └── public/                   ← Logos, brand symbols, and image files
```

---

## 8. Current Status

### What is Finished (100% Ready)
- Master catalog of **23 atomic UI building blocks** across 10 distinct categories.
- **Interactive Control Board (Playground)** for every component with live preview adjustments.
- **7 Modular Page Sections** (Hero, Features, Pricing, CTA, FAQ, Stats, Testimonials).
- **4 Complete Interactive Template Websites** (SaaS Cloud, Creative Studio, CloudOps Telemetry, Sports & Game Arena).
- **Responsive Simulator** with Desktop, Laptop, Tablet, and Mobile phone frames.
- **In-Portal AI Agent Studio** with natural language component generation, A11y accessibility audit, and one-click saving.
- **Design Tokens Guide** for brand colors, typography scales, corner radii, and drop shadows.
- **Live Roadmap Tracker** showing component readiness and milestone delivery.
- **Icon Explorer** with 70+ scalable brand symbols.
- **Cloud Git Sync** connected to our GitHub repository (`https://github.com/Seethaitsk/component.git`).

### What is Currently Under Active Expansion
- Connecting extra industry-specific templates (such as Healthcare patient charts and E-Commerce checkout flows).
- Expanding the AI Agent's memory to remember custom company preferences across sessions.

---

## 9. Frequently Asked Questions

#### Q1: Do I need to know programming or coding to use this portal?
**No, absolutely not.** The entire portal was designed to be as simple to use as an online shopping website. You can browse, test, switch screen sizes, and interact with the AI assistant entirely with your mouse and keyboard.

#### Q2: Can clients see what a website looks like before we build it?
**Yes.** Open the **Template Websites** page and launch the interactive simulator. You can show clients a working website with buttons they can click, pricing options they can switch, and forms they can test on both phone and laptop screens.

#### Q3: What happens when the AI Agent generates a new component?
When you click **"Save to Library"**, the portal automatically creates the permanent files in the background and lists the new component in our official catalog. Anyone visiting the portal will immediately see and be able to use it.

#### Q4: What does "WCAG 2.1 AA Accessibility" mean?
It is the global international standard for making websites usable for everyone, including people who have visual impairments or color blindness, or who use keyboards instead of a mouse. Our components are pre-tested to meet these legal and quality standards.

#### Q5: Can these components be used with older systems?
**Yes.** Every single component and section includes copy-ready snippets for both modern **Tailwind CSS** and classic **Bootstrap 5**. Teams working on older applications can use these parts immediately without changing their systems.

#### Q6: How do we know if our local library is up to date with the latest code?
Look at the bottom of the left sidebar. There is a small status showing our current GitHub version number and a small **Sync button (two spinning arrows)**. Clicking it automatically updates your portal with the newest improvements pushed by the engineering team.

---

## 10. Glossary of Simple Meanings

- **Component**: A single reusable piece of a website (for example, a button, a search box, or a popup window).
- **UI (User Interface)**: Everything a person sees and clicks on when they visit a website or use an application.
- **Design Tokens**: The master rulebook for a company's visual brand (exact color codes, text sizes, corner shapes, and shadows).
- **Responsive Design**: The ability of a website to automatically reshape itself so it looks beautiful on mobile phones, tablets, and wide monitors.
- **Hero Section**: The large, bold headline area at the very top of a website that introduces what a company does.
- **Accessibility (A11y)**: Building websites so they are easy to read and navigate for everyone, including people using screen readers.
- **Git**: A digital cloud vault and filing system used to record every improvement made to a computer project.
- **Modal**: A temporary window that pops up on top of a web page to ask a question or confirm an action.
- **Template**: A pre-assembled, complete layout of a page or website that can be adapted quickly for a new project.
- **AI Agent**: An automated digital assistant that understands plain-English instructions and carries out complex tasks like writing code or checking design safety.

---

*Document prepared by Technical Writing & Systems Architecture Team.*  
*SysCorp UI Components Portal · Version 2.4 · November 2026*
