---
title: 'Getting Started with MoonUI'
date: '2024-01-15'
excerpt: 'Learn how to quickly build beautiful, accessible React applications with MoonUI - the modern component library for developers.'
author: 'Sarah Chen'
tags: ['MoonUI', 'React', 'Tutorial']
coverImage: '/images/blog/getting-started.jpg'
readTime: '5 min read'
---

# Getting Started with MoonUI

MoonUI is a comprehensive component library designed to help developers build beautiful, accessible React applications faster. In this guide, we'll walk through everything you need to know to get started.

## Installation

Getting started with MoonUI is simple. You can install it via npm:

```bash
npm install @moontra/moonui
```

Or if you prefer yarn:

```bash
yarn add @moontra/moonui
```

## Setting Up Your Project

Once installed, you'll need to import the MoonUI styles in your main CSS file:

```css
@import '@moontra/moonui/styles';
```

## Using Your First Component

Let's start with a simple Button component:

```jsx
import { Button } from '@moontra/moonui';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Hello MoonUI!')}>
      Click me
    </Button>
  );
}
```

## Component Variants

MoonUI components come with multiple variants to suit different use cases:

- **Primary**: For main actions
- **Secondary**: For secondary actions
- **Outline**: For less prominent actions
- **Ghost**: For minimal styling
- **Destructive**: For dangerous actions

## Theming

MoonUI supports both light and dark themes out of the box. You can toggle between themes using the ThemeProvider:

```jsx
import { ThemeProvider } from '@moontra/moonui';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## Accessibility

All MoonUI components are built with accessibility in mind:

- Full keyboard navigation support
- Screen reader friendly
- ARIA attributes included
- Focus management handled automatically

## Next Steps

Now that you have MoonUI set up, you can:

1. Explore the component library
2. Customize the theme to match your brand
3. Build your first application

Happy building with MoonUI!