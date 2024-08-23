# Nuxt 3 SAAS Boilerplate 

Easy to customize, SEO-friendly and production-ready Nuxt 3 boilerplate with all you need to build your SaaS or any other web app. Create & deliver your SaaS in a matter of days, not weeks!

[📎 See Demo](/) \
[📄 Documentation](/)

## Stack

- [Nuxt 3](https://nuxt.com/) - SSR, ESR, File-based routing, components auto importing, modules, layouts etc.

- [Tailwind CSS](https://tailwindcss.com) - The gold standard CSS utility framework

- [shadcn](https://www.shadcn-vue.com/) - elegant nuxt 3 components/icons using Tailwind.

- [Stripe](https://stripe.com) - for payments.

- [Supabase](https://supabase.com/) - for auth, storage, database and realtime needs.

- The `<script setup>` syntax.

- SEO Optimized.

- Data validation, incoming data validated with [Zod](https://zod.dev/), forms with [vee-validate](https://vee-validate.logaretm.com/v4/).

## Features

- Authentication & creation of users
- Payments via Stripe (subscriptions plans available)
- Ready-to-use blocks for easy landing page set up
- Ready-to-use blog system
- Ready layouts & template pages - auth, user's dashboard (with middlewares)


## Initial Setup
Below are some additional setup tasks that are not directly related to code:

- **Supabase:** Follow the instructions to set up Supabase, an essential part of this solution for Auth and DB management
- **Stripe:** Stripe is used for the payments. You will need to set up your Stripe account first & create products

- After setting up the services, create a .env file from the .env.example file with all required data


## Setup & Configuration

```bash
npm install
```

To configure the script use a search through contents of all files & set everything up using the comments inside
- Search for "_*:" - required actions in code
- Search for "_**:" - additional actions in code

For deployment you can use [Vercel](https://vercel.com/)

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

----


> Fully developed & designed by @artjhom \
> [![Twitter URL](https://img.shields.io/twitter/url.svg?label=Follow%20artjhom&style=social&url=https%3A%2F%2Ftwitter.com%2Fartjhom)](https://twitter.com/artjhom)
