# Nuxt 3 SaaS Boilerplate (Learning Project)

> ⚠️ **Not maintained / learning repo.**  
> This boilerplate was built as a *test product* to learn how to ship SaaS-style apps and to get hands-on experience with **Nuxt 3** + **Supabase** (and payments).  
> Some functionality may be incomplete or broken, and dependencies/config may be outdated.

A Nuxt 3 starter kit with common SaaS building blocks: auth, subscriptions, landing sections, and a simple blog — designed to be easy to customize and quick to deploy.

- 📎 Demo: https://nuxt3-saas-boilerplate.vercel.app/  
- 📄 Docs: https://nuxtsaas-docs.vercel.app/

---

## Tech Stack

- **Nuxt 3** — SSR, file-based routing, layouts, auto-imports
- **Tailwind CSS** — utility-first styling
- **shadcn-vue** — UI components/icons
- **Stripe** — subscription payments
- **Supabase** — auth, database, storage, realtime
- `<script setup>` syntax
- SEO-focused structure
- Validation with **Zod**, forms with **vee-validate**

---

## What’s Included

- User authentication + user creation
- Stripe subscriptions (plans supported)
- Landing page blocks/sections ready to reuse
- Basic blog system
- Ready layouts/pages: auth, dashboard, middleware-protected routes

---

## Important Note (Read This)

This repository is **not maintained** and was created primarily for learning and experimentation.

- Expect rough edges (broken flows, outdated configs, missing env vars)
- Use it as reference / starter ideas, not as a production-ready template
- PRs/issues might not be reviewed

---

## Initial Setup (Services)

Before running locally you’ll need:

- **Supabase**: create a project and configure Auth + DB
- **Stripe**: create products/prices for subscriptions

Then create a `.env` from `.env.example` and fill in required values.

---

## Install

```bash
npm install
