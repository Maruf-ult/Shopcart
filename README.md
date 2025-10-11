# 🛒 Shopcart — Modern E-Commerce Platform

Shopcart is a full-featured, modern e-commerce web application built using **Next.js 15**, **Sanity CMS**, and **Stripe**.  
It provides a fast, scalable, and visually appealing shopping experience with powerful features like product management, secure authentication, and seamless payments.

---

## 🚀 Tech Stack

### **Frontend Framework**
- **Next.js 15** — React-based framework for server-side rendering, routing, and performance optimization.
- **React 18** — Core UI library powering the entire front-end.
- **TypeScript 5** — Type-safe JavaScript for scalable and maintainable development.

---

## 🧩 Main Dependencies

### **UI & Styling**
- **Tailwind CSS 4** — Utility-first CSS framework for fast, responsive design.
- **Styled Components 6** — CSS-in-JS styling for component-level customization.
- **Lucide React** — Beautiful, consistent icon set for UI elements.
- **Radix UI** (`@radix-ui/react-*`) — Accessible, low-level UI primitives for dialogs, tooltips, checkboxes, and more.
- **tw-animate-css** — Smooth animation utilities for Tailwind transitions and effects.

---

### **State Management**
- **Zustand** — Lightweight and fast state management library with a simple API for global store management.

---

### **CMS & Content Management**
- **Sanity v4** — Headless CMS for managing product data, content, and images.
- **Next-Sanity** — Integration layer for querying and managing Sanity content in Next.js.
- **@sanity/image-url** — Utility for generating optimized and responsive image URLs from Sanity assets.

---

### **Authentication**
- **Clerk** (`@clerk/nextjs`) — Complete authentication and user management system providing sign-in, sign-up, and session handling.

---

### **Payments**
- **Stripe** — Secure payment gateway integration for checkout and order management.
- **@types/stripe** — TypeScript definitions for strong type safety during Stripe integration.

---

### **UX & Utility Libraries**
- **Embla Carousel React** — Lightweight carousel/slider component for product displays and promotions.
- **React Hot Toast** — Elegant, minimal toast notification system.
- **Day.js** — Modern, lightweight date utility library.
- **cmdk** — Command palette-style search interface for fast in-app navigation.
- **SWR** — React data fetching library with built-in caching and revalidation.
- **Class Variance Authority / clsx / tailwind-merge** — Utility libraries for managing conditional Tailwind classes and dynamic component variants.

---

## ⚙️ Development Tools
- **ESLint 9** — Code linting and formatting for consistent code quality.
- **TypeScript** — Type-safe development with advanced IntelliSense support.
- **Tailwind CSS + PostCSS** — Styling, preprocessing, and build optimization.
- **Sanity CLI** — Tools for schema extraction and type generation for Sanity data models.

---

## 🧠 Scripts

| Command | Description |
|----------|--------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production-ready app |
| `npm run start` | Run production build |
| `npm run lint` | Lint project for code issues |
| `npm run typegen` | Sync Sanity schema and types |

---

## 🛠️ Setup & Installation

To get started with Shopcart, follow these steps:

```bash
# Clone the repository
git clone https://github.com/your-username/shopcart.git

# Navigate into the project folder
cd shopcart

# Install dependencies
npm install

# Start the development server
npm run dev
