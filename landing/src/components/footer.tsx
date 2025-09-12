import Link from 'next/link'
import { MoonUIButton as Button } from '@moontra/moonui'
import { Github, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              <li><a href="https://moonui.dev/docs" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Documentation</a></li>
              <li><a href="https://moonui.dev/components" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Components</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="https://moonui.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://moonui.dev/templates" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Templates</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="https://moonui.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Privacy</a></li>
              <li><a href="https://moonui.dev/terms" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 MoonUI. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/oguzhanayyldz/moonuikit" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com/moonui" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://youtube.com/@moonui" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}