# ARRAFED — Professional Academic Support Website

A production-ready, genuine multi-page website built for **ARRAFED**, a specialized academic support, research guidance, data-analysis, and university coursework service.

Designed with a calm, credible, editorial, and academically informed aesthetic. Built strictly with semantic HTML5, modern Tailwind CSS, responsive progressive vanilla JavaScript, and Google Fonts (Poppins).

---

## 📁 Multi-Page Structure & Architecture

The site comprises 6 fully developed pages sharing a unified design system, typography hierarchy, accessibility features, and communication architecture:

1. **`index.html` (Home / Academic Journal Front)**
   - Atmospheric hero canvas with balanced negative space.
   - Verified experience ledger (700+ Master's dissertations, 700+ theses, 5,000+ BBA term papers, microbiology research, Excel/Power BI).
   - Factual trust bar with zero fake logos or fictitious guarantees.
   - Core disciplines overview and streamlined 3-step workflow preview.
   - Pricing teaser highlighting the ৳30 monthly package and ৳250 outside starting rate.

2. **`services.html` (Services Catalog & Scope)**
   - Left-side sticky contents rail on desktop; horizontal jump navigation on mobile.
   - Granular coverage: postgraduate dissertations, BBA term papers, microbiology research, Excel financial models, Power BI dashboards, SPSS statistical testing, and citation styles (APA 7th, Harvard, OSCOLA, IEEE).
   - "What to Send" checklist and scope clarification panels.
   - Varied WhatsApp CTAs for every major service group.

3. **`packages.html` (Packages & Transparent Pricing)**
   - Visually dominant typographic price display for the **৳30 monthly package**.
   - Clear scope notice: included services are free for the purchased month, with inclusions confirmed via WhatsApp prior to enrollment.
   - **Outside Assignment Pricing** editorial rows separated by 1px rules:
     - 1,000 words — ৳250
     - 2,000 words — ৳450
     - 3,000 words — ৳800
     - 4,000 words — ৳1,000
     - 5,000 words — ৳1,250
   - Dedicated international student row: *"For foreign clients: Inbox for price"*.
   - Comparison table and interactive quick price selector with formatted WhatsApp query generation.

4. **`about.html` (Verified Experience & Track Record)**
   - Factual narrative based strictly on documented delivery volume.
   - Ledger breakdown of 700+ dissertations, 700+ theses, and 5,000+ business assignments.
   - International study destinations (UK, Malta, Canada, Australia) without synthetic logo clouds.
   - Six core working principles: Clear Scope, Structure, Style, Direct Communication, Affordability, and Academic Responsibility.

5. **`process.html` (Step-by-Step Engagement Workflow)**
   - Alternating desktop timeline with a central progress line, collapsing seamlessly to single-column on mobile devices.
   - 6 clear chronological phases: Brief Preparation, WhatsApp Scope Discussion, Agreement, Execution, File Transmission, and Post-Delivery Review.
   - Privacy-minded guidance instructing users to redact sensitive student IDs or portal credentials.

6. **`contact.html` (Direct Contact & Brief Submission)**
   - Prominent WhatsApp banner linking to **01893291245**.
   - Comprehensive assignment brief submission form with semantic inputs, client-side validation, and instant formatted summary generation.
   - Direct transmission of brief details to WhatsApp with pre-filled parameters.
   - Accepted file format guidelines and direct email contact (`foharahman@gmail.com`).

---

## 🎨 Design System & Visual Identity

- **Color Palette**:
  - Deep Academic Navy: `#0A1628` (Primary text, dark panels, solid buttons)
  - Warm Off-White: `#F8F5F0` (Background canvas, high-readability substrate)
  - Editorial Muted Neutral: `#EFECE6` (Accent panels, table headers)
  - Refined Deep Teal: `#0D9488` (Primary action accent, status dots, subtle highlights)
  - Hairline Rule Borders: `rgba(10, 22, 40, 0.12)`
- **Typography**:
  - Strict single font family: **Poppins** (weights 300 Light, 400 Regular, 500 Medium, 600 Semi-Bold, 700 Bold).
  - Responsive clamp-based type scales (`type-display`, `type-h2`, `type-body`).
- **Layout Philosophy**:
  - **No generic card grids**: Content sits directly on the page separated by generous whitespace and subtle 1px hairline dividers.
  - **Sharp edges**: 0px border-radius on cards, panels, tables, and inputs.
  - **Pill buttons**: Rounded pill styling reserved solely for interactive call-to-action buttons.

---

## 🚀 Local Development & Build Pipeline

### Prerequisites
- Node.js 18+
- npm

### Development Server
```bash
npm run dev
```
Binds Vite to `http://localhost:3000` with instant preview.

### Compiling CSS
To compile or update the Tailwind CSS bundle:
```bash
npx @tailwindcss/cli -i assets/css/input.css -o assets/css/output.css
```

### Production Build
```bash
npm run build
```
Generates an optimized multi-page distribution in `dist/` including all 6 HTML entry points, minified assets, and responsive scripts.

---

## 🛡️ Quality Assurance & Ethics Checklist

- [x] **No Fake Promises**: Zero invented guarantees, fake pass percentages, or fabricated university logos.
- [x] **Exact Pricing Integrity**: The ৳30 monthly package and ৳250–৳1,250 word count rates are reproduced without alteration.
- [x] **Foreign Client Protocol**: Clearly designates "Inbox for price" without arbitrary currency conversions.
- [x] **Direct WhatsApp Integration**: Standardized WhatsApp links point to `https://wa.me/8801893291245` with contextual pre-filled messages across every page.
- [x] **Full Keyboard Accessibility**: All modal dialogs, drawers, and skip links feature keyboard focus management and screen-reader labels.
- [x] **Responsive Precision**: Tested and fluid across mobile (320px+), tablet, and desktop breakpoints.
