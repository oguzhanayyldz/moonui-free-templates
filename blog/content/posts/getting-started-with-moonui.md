---
title: "Getting Started with MoonUI"
excerpt: "Learn how to install and use MoonUI in your React projects"
date: "2025-01-15"
author:
  name: "Sarah Chen"
  bio: "Frontend developer and MoonUI core team member"
  image: "https://i.pravatar.cc/150?img=1"
tags: ["tutorial", "getting-started", "react"]
coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200"
---

# Getting Started with MoonUI

MoonUI is a modern React component library that helps you build beautiful interfaces faster. In this tutorial, we'll walk through the installation process and create your first component.

## Installation

First, install MoonUI in your project:

```bash
npm install @moontra/moonui
```

## Setup

Import the components you need:

```jsx
import { Button, Card } from '@moontra/moonui'
```

## Your First Component

Let's create a simple card component:

```jsx
function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to MoonUI</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Start building amazing interfaces!</p>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

That's it! You're now ready to build with MoonUI.