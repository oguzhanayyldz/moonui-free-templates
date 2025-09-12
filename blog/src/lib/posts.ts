import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content?: string
  author: string
  tags: string[]
  coverImage: string
  readTime: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Process content with remark
    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()
    
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content: contentHtml,
      author: data.author,
      tags: data.tags || [],
      coverImage: data.coverImage || '/images/placeholder.jpg',
      readTime: data.readTime || '5 min read'
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  // Create posts directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    
    // Create sample posts
    const samplePosts = [
      {
        filename: 'getting-started-with-moonui.md',
        content: `---
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

\`\`\`bash
npm install @moontra/moonui
\`\`\`

Or if you prefer yarn:

\`\`\`bash
yarn add @moontra/moonui
\`\`\`

## Setting Up Your Project

Once installed, you'll need to import the MoonUI styles in your main CSS file:

\`\`\`css
@import '@moontra/moonui/styles';
\`\`\`

## Using Your First Component

Let's start with a simple Button component:

\`\`\`jsx
import { Button } from '@moontra/moonui';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Hello MoonUI!')}>
      Click me
    </Button>
  );
}
\`\`\`

## Component Variants

MoonUI components come with multiple variants to suit different use cases:

- **Primary**: For main actions
- **Secondary**: For secondary actions
- **Outline**: For less prominent actions
- **Ghost**: For minimal styling
- **Destructive**: For dangerous actions

## Theming

MoonUI supports both light and dark themes out of the box. You can toggle between themes using the ThemeProvider:

\`\`\`jsx
import { ThemeProvider } from '@moontra/moonui';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      {/* Your app content */}
    </ThemeProvider>
  );
}
\`\`\`

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

Happy building with MoonUI!`
      },
      {
        filename: 'building-accessible-components.md',
        content: `---
title: 'Building Accessible React Components'
date: '2024-01-10'
excerpt: 'Accessibility should never be an afterthought. Learn best practices for building inclusive React components that everyone can use.'
author: 'Michael Rodriguez'
tags: ['Accessibility', 'React', 'Best Practices']
coverImage: '/images/blog/accessibility.jpg'
readTime: '8 min read'
---

# Building Accessible React Components

Web accessibility is not just about compliance—it's about ensuring everyone can use your application effectively. In this comprehensive guide, we'll explore how to build truly accessible React components.

## Why Accessibility Matters

Before diving into the technical details, let's understand why accessibility is crucial:

1. **Inclusivity**: Over 1 billion people worldwide have disabilities
2. **Legal Requirements**: Many countries require accessible websites
3. **Better UX**: Accessible design benefits everyone
4. **SEO Benefits**: Accessible sites rank better in search engines

## Core Accessibility Principles

### 1. Keyboard Navigation

Every interactive element should be keyboard accessible:

\`\`\`jsx
function AccessibleButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(e);
        }
      }}
      tabIndex={0}
      role="button"
    >
      {children}
    </button>
  );
}
\`\`\`

### 2. ARIA Labels and Descriptions

Provide context for screen readers:

\`\`\`jsx
<input
  type="email"
  aria-label="Email address"
  aria-describedby="email-error"
  aria-invalid={hasError}
/>
{hasError && (
  <span id="email-error" role="alert">
    Please enter a valid email address
  </span>
)}
\`\`\`

### 3. Focus Management

Manage focus properly in dynamic interfaces:

\`\`\`jsx
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);
  
  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
}
\`\`\`

## Common Patterns

### Accessible Forms

\`\`\`jsx
function AccessibleForm() {
  return (
    <form>
      <fieldset>
        <legend>Personal Information</legend>
        
        <label htmlFor="name">
          Name (required)
          <input
            id="name"
            type="text"
            required
            aria-required="true"
          />
        </label>
        
        <label htmlFor="email">
          Email (required)
          <input
            id="email"
            type="email"
            required
            aria-required="true"
          />
        </label>
      </fieldset>
    </form>
  );
}
\`\`\`

### Skip Links

Help keyboard users navigate efficiently:

\`\`\`jsx
function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
    >
      Skip to main content
    </a>
  );
}
\`\`\`

## Testing Accessibility

### Automated Testing

Use tools like:
- axe DevTools
- Lighthouse
- jest-axe for unit tests

### Manual Testing

1. Navigate using only keyboard
2. Test with screen readers (NVDA, JAWS, VoiceOver)
3. Check color contrast ratios
4. Verify focus indicators

## MoonUI's Accessibility Features

MoonUI components come with built-in accessibility:

### Automatic ARIA Attributes

\`\`\`jsx
<Dialog>
  {/* Automatically includes role="dialog", aria-modal, etc. */}
</Dialog>
\`\`\`

### Focus Management

MoonUI handles focus management automatically:

\`\`\`jsx
<Dialog>
  {/* Focus is trapped within the dialog */}
</Dialog>
\`\`\`

### Color Contrast

All color combinations meet WCAG AA standards for contrast ratios.`
      },
      {
        filename: 'modern-css-techniques.md',
        content: `---
title: 'Modern CSS Techniques for React Apps'
date: '2024-01-05'
excerpt: 'Explore modern CSS techniques including CSS-in-JS, CSS Modules, and Tailwind CSS to style your React applications effectively.'
author: 'Emily Zhang'
tags: ['CSS', 'React', 'Styling', 'Tailwind']
coverImage: '/images/blog/css-techniques.jpg'
readTime: '7 min read'
---

# Modern CSS Techniques for React Apps

Styling React applications has evolved significantly over the years. Today, developers have multiple powerful options for managing styles. Let's explore the most popular and effective approaches.

## CSS-in-JS

CSS-in-JS libraries allow you to write CSS directly in your JavaScript files:

### Styled Components

\`\`\`jsx
import styled from 'styled-components';

const Button = styled.button\`
  background: \${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  
  &:hover {
    opacity: 0.9;
  }
\`;

function App() {
  return <Button primary>Click me</Button>;
}
\`\`\`

### Emotion

\`\`\`jsx
import { css } from '@emotion/react';

const buttonStyle = css\`
  background-color: hotpink;
  &:hover {
    background-color: darkpink;
  }
\`;

function Button() {
  return <button css={buttonStyle}>Emotion Button</button>;
}
\`\`\`

## CSS Modules

CSS Modules provide local scope for CSS:

\`\`\`css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
}

.primary {
  background-color: green;
}
\`\`\`

\`\`\`jsx
import styles from './Button.module.css';

function Button({ primary, children }) {
  return (
    <button className={\`\${styles.button} \${primary ? styles.primary : ''}\`}>
      {children}
    </button>
  );
}
\`\`\`

## Tailwind CSS

Tailwind CSS is a utility-first CSS framework that's gained massive popularity:

### Basic Usage

\`\`\`jsx
function Card() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold mb-4">Card Title</h2>
      <p className="text-gray-600">Card content goes here.</p>
    </div>
  );
}
\`\`\`

## Conclusion

There's no one-size-fits-all solution for styling React apps. The best approach depends on your project's needs.

Happy styling!`
      }
    ]

    samplePosts.forEach(post => {
      fs.writeFileSync(
        path.join(postsDirectory, post.filename),
        post.content
      )
    })
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const post = await getPostBySlug(slug)
        return post!
      })
  )

  return allPostsData
    .filter(post => post !== null)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
}