---
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

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  
  &:hover {
    opacity: 0.9;
  }
`;

function App() {
  return <Button primary>Click me</Button>;
}
```

### Emotion

```jsx
import { css } from '@emotion/react';

const buttonStyle = css`
  background-color: hotpink;
  &:hover {
    background-color: darkpink;
  }
`;

function Button() {
  return <button css={buttonStyle}>Emotion Button</button>;
}
```

## CSS Modules

CSS Modules provide local scope for CSS:

```css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
}

.primary {
  background-color: green;
}
```

```jsx
import styles from './Button.module.css';

function Button({ primary, children }) {
  return (
    <button className={`${styles.button} ${primary ? styles.primary : ''}`}>
      {children}
    </button>
  );
}
```

## Tailwind CSS

Tailwind CSS is a utility-first CSS framework that's gained massive popularity:

### Basic Usage

```jsx
function Card() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold mb-4">Card Title</h2>
      <p className="text-gray-600">Card content goes here.</p>
    </div>
  );
}
```

### With Component Variants

```jsx
function Button({ variant, size, children }) {
  const baseClasses = "font-semibold rounded-lg transition-colors";
  
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-gray-300 hover:bg-gray-50"
  };
  
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
}
```

## CSS Variables for Theming

CSS custom properties (variables) are perfect for theming:

```css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --spacing-unit: 8px;
}

.dark {
  --color-primary: #4dabf7;
  --color-secondary: #adb5bd;
}
```

```jsx
function ThemedButton() {
  return (
    <button
      style={{
        backgroundColor: 'var(--color-primary)',
        padding: 'calc(var(--spacing-unit) * 2)'
      }}
    >
      Themed Button
    </button>
  );
}
```

## Container Queries

The newest addition to CSS - container queries:

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

## Performance Considerations

### Critical CSS

Extract and inline critical CSS for faster initial renders:

```jsx
// Next.js example
import { getCssText } from '../stitches.config';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### CSS Optimization Tips

1. **Minimize CSS**: Use build tools to remove unused CSS
2. **Avoid deep nesting**: Keep specificity low
3. **Use CSS containment**: Improve rendering performance
4. **Leverage CSS Grid and Flexbox**: Reduce layout calculations

## MoonUI's Approach

MoonUI combines the best of these techniques:

- **Tailwind CSS** for utility classes
- **CSS Variables** for theming
- **CSS Modules** for component isolation
- **Optimized builds** with PurgeCSS

```jsx
import { Button } from '@moontra/moonui';

// MoonUI components use a combination of techniques
<Button
  variant="primary"  // Predefined variants
  size="lg"         // Size variants
  className="mt-4"  // Additional Tailwind classes
>
  MoonUI Button
</Button>
```

## Conclusion

There's no one-size-fits-all solution for styling React apps. The best approach depends on your project's needs:

- **CSS-in-JS**: Great for dynamic styles and component libraries
- **CSS Modules**: Perfect for traditional CSS with local scope
- **Tailwind CSS**: Excellent for rapid development and consistency
- **CSS Variables**: Essential for theming and dynamic properties

MoonUI leverages multiple techniques to provide a flexible, performant styling system that adapts to your needs.

Happy styling!