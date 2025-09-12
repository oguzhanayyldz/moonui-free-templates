# MoonUI Blog Template

This is a [Next.js](https://nextjs.org/) project bootstrapped with [MoonUI CLI](https://moonui.dev).

## About This Template

A modern blog template built with MoonUI components. Features include:

- Blog homepage with post listing
- Individual blog post pages
- Markdown support with gray-matter and remark
- Author information and bio
- Tag system
- Reading time estimation
- Responsive design
- Dark mode support

## Adding Blog Posts

Create new markdown files in the `content/posts/` directory with the following frontmatter:

```yaml
---
title: "Your Post Title"
excerpt: "Brief description of your post"
date: "2025-01-15"
author:
  name: "Author Name"
  bio: "Author bio"
  image: "Author image URL"
tags: ["tag1", "tag2"]
coverImage: "Cover image URL"
---

Your post content here...
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about MoonUI, take a look at the following resources:

- [MoonUI Documentation](https://moonui.dev/docs)
- [MoonUI Components](https://moonui.dev/components)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).
