import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: {
    name: string
    bio?: string
    image?: string
  }
  readingTime: string
  tags: string[]
  coverImage?: string
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content: contentHtml,
      date: data.date,
      author: data.author,
      readingTime: calculateReadingTime(content),
      tags: data.tags || [],
      coverImage: data.coverImage,
    }
  } catch {
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

\`\`\`bash
npm install @moontra/moonui
\`\`\`

## Setup

Import the components you need:

\`\`\`jsx
import { Button, Card } from '@moontra/moonui'
\`\`\`

## Your First Component

Let's create a simple card component:

\`\`\`jsx
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
\`\`\`

That's it! You're now ready to build with MoonUI.`
      },
      {
        filename: 'customizing-moonui-themes.md',
        content: `---
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

\`\`\`css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
}
\`\`\`

## Dark Mode

Enable dark mode with a simple class:

\`\`\`jsx
<html className="dark">
  {/* Your app */}
</html>
\`\`\`

## Custom Variants

Create custom component variants using CVA:

\`\`\`jsx
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
\`\`\``
      },
      {
        filename: 'building-accessible-components.md',
        content: `---
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

\`\`\`jsx
<Button aria-label="Save document">
  <SaveIcon />
</Button>
\`\`\`

## Focus Management

MoonUI handles focus management automatically:

\`\`\`jsx
<Dialog>
  {/* Focus is trapped within the dialog */}
</Dialog>
\`\`\`

## Color Contrast

All color combinations meet WCAG AA standards for contrast ratios.`
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

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}