---
title: "Building Accessible Components"
excerpt: "Best practices for accessibility with MoonUI components"
date: "2025-01-25"
author:
  name: "Jordan Smith"
  bio: "Accessibility advocate and frontend engineer"
  image: "https://i.pravatar.cc/150?img=3"
tags: ["accessibility", "a11y", "best-practices"]
coverImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200"
---

# Building Accessible Components

MoonUI is built with accessibility in mind. All components follow WCAG guidelines and include proper ARIA attributes.

## Keyboard Navigation

All interactive components support keyboard navigation:

- Tab: Navigate between elements
- Enter/Space: Activate buttons
- Arrow keys: Navigate menus and lists
- Escape: Close modals and popovers

## Screen Reader Support

Components include proper ARIA labels:

```jsx
<Button aria-label="Save document">
  <SaveIcon />
</Button>
```

## Focus Management

MoonUI handles focus management automatically:

```jsx
<Dialog>
  {/* Focus is trapped within the dialog */}
</Dialog>
```

## Color Contrast

All color combinations meet WCAG AA standards for contrast ratios.