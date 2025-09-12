---
title: "Customizing MoonUI Themes"
excerpt: "Deep dive into theming and customization options in MoonUI"
date: "2025-01-20"
author:
  name: "Alex Rivera"
  bio: "UI/UX designer passionate about design systems"
  image: "https://i.pravatar.cc/150?img=2"
tags: ["theming", "customization", "design"]
coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200"
---

# Customizing MoonUI Themes

MoonUI provides powerful theming capabilities through CSS variables and Tailwind configuration. Let's explore how to customize your components.

## CSS Variables

MoonUI uses CSS variables for colors:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
}
```

## Dark Mode

Enable dark mode with a simple class:

```jsx
<html className="dark">
  {/* Your app */}
</html>
```

## Custom Variants

Create custom component variants using CVA:

```jsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        custom: "your-custom-classes"
      }
    }
  }
)
```