'use client'

import { 
  MoonUIButton as Button,
  MoonUICard as Card,
  MoonUICardHeader as CardHeader,
  MoonUICardContent as CardContent,
  MoonUICardTitle as CardTitle,
  MoonUICardDescription as CardDescription,
  MoonUICardFooter as CardFooter,
  MoonUIBadge as Badge,
  MoonUITabs as Tabs,
  MoonUITabsList as TabsList,
  MoonUITabsTrigger as TabsTrigger,
  MoonUITabsContent as TabsContent,
  MoonUIAlert as Alert,
  MoonUIAlertTitle as AlertTitle,
  MoonUIAlertDescription as AlertDescription,
  MoonUIAvatar as Avatar,
  MoonUIAvatarImage as AvatarImage,
  MoonUIAvatarFallback as AvatarFallback,
  MoonUIProgress as Progress,
  MoonUISlider as Slider,
  MoonUISwitch as Switch,
  MoonUIInput as Input,
  MoonUILabel as Label,
  MoonUIDialog as Dialog,
  MoonUIDialogContent as DialogContent,
  MoonUIDialogDescription as DialogDescription,
  MoonUIDialogHeader as DialogHeader,
  MoonUIDialogTitle as DialogTitle,
  MoonUIDialogTrigger as DialogTrigger,
  MoonUITooltip as Tooltip,
  MoonUITooltipContent as TooltipContent,
  MoonUITooltipProvider as TooltipProvider,
  MoonUITooltipTrigger as TooltipTrigger,
  MoonUIAccordion as Accordion,
  MoonUIAccordionContent as AccordionContent,
  MoonUIAccordionItem as AccordionItem,
  MoonUIAccordionTrigger as AccordionTrigger
} from '@moontra/moonui'
import { 
  ChevronRight, 
  Star, 
  Zap, 
  Shield, 
  Palette,
  Code2,
  Sparkles,
  ArrowRight,
  Check,
  Moon,
  Sun
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

// Theme Toggle Component
function ThemeModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Moon className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeDemo, setActiveDemo] = useState('button')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <TooltipProvider>
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50 dark:from-purple-950/20 dark:via-transparent dark:to-blue-950/20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:bg-purple-600" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:bg-yellow-600" />
        <div className="absolute -bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 dark:bg-pink-600" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b bg-background/60 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-lg opacity-50" />
              <Moon className="relative h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">MoonUI</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Code2 className="h-4 w-4 mr-2" />
              Documentation
            </Button>
            <Button variant="ghost" size="icon">
              <Star className="h-4 w-4" />
            </Button>
            <ThemeModeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-24">
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center space-y-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-900 dark:text-purple-100">
                v2.0 - Now with 200+ Components
              </span>
            </div>

            {/* Main Title with Animation */}
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="block text-foreground">Build Modern Apps</span>
              <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300%">
                With Premium Components
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive React component library built on Radix UI and Tailwind CSS. 
              Ship faster with beautiful, accessible, and customizable components.
            </p>

            {/* CTA Buttons with Icons */}
            <div className="flex gap-4 justify-center flex-wrap pt-4">
              <a href="https://moonui.dev/docs" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <Zap className="w-5 h-5" />
                  Start Building
                </Button>
              </a>
              <a href="https://moonui.dev/components" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 hover:scale-105 transition-all">
                  <Code2 className="w-5 h-5" />
                  Browse Components
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 pt-8 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold">4.9/5</span> rating
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="font-semibold">TypeScript</span> ready
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Palette className="w-4 h-4 text-purple-500" />
                <span className="font-semibold">Dark mode</span> built-in
              </div>
            </div>
          </div>
        </div>

        {/* Live Component Showcase */}
        <Card className="mt-24 max-w-6xl mx-auto border-2 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <Badge className="w-fit mx-auto mb-4" variant="outline">
              <Sparkles className="w-3 h-3 mr-1" />
              Interactive Playground
            </Badge>
            <CardTitle className="text-3xl">See Components in Action</CardTitle>
            <CardDescription className="text-lg">
              Try out MoonUI components live - click, type, and interact
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Component Categories */}
            <div className="flex gap-2 mb-8 flex-wrap justify-center">
              <Button 
                variant={activeDemo === 'button' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveDemo('button')}
              >
                Buttons
              </Button>
              <Button 
                variant={activeDemo === 'card' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveDemo('card')}
              >
                Cards
              </Button>
              <Button 
                variant={activeDemo === 'form' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveDemo('form')}
              >
                Forms
              </Button>
              <Button 
                variant={activeDemo === 'feedback' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setActiveDemo('feedback')}
              >
                Feedback
              </Button>
            </div>

            {/* Demo Content */}
            <div className="bg-muted/30 rounded-lg p-8 min-h-[300px]">
              {activeDemo === 'button' && (
                <div className="space-y-6">
                  <div className="flex gap-3 flex-wrap justify-center">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                  <div className="flex gap-3 flex-wrap justify-center">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                  <div className="flex gap-3 flex-wrap justify-center">
                    <Button disabled>Disabled</Button>
                    <Button className="gap-2">
                      <Star className="w-4 h-4" /> With Icon
                    </Button>
                    <Button className="gap-2">
                      Loading <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {activeDemo === 'card' && (
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Standard Card</CardTitle>
                      <CardDescription>A basic card component</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Cards are perfect for organizing content into digestible sections.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm">Learn More</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Premium</Badge>
                      <CardTitle>Enhanced Card</CardTitle>
                      <CardDescription>With custom styling</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        Fully customizable
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeDemo === 'form' && (
                <div className="max-w-md mx-auto space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" placeholder="Tell us about yourself" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="newsletter" />
                    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                  </div>
                  <Button className="w-full">Submit</Button>
                </div>
              )}

              {activeDemo === 'feedback' && (
                <div className="space-y-4 max-w-2xl mx-auto">
                  <Alert>
                    <Sparkles className="h-4 w-4" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                      Your changes have been saved successfully.
                    </AlertDescription>
                  </Alert>
                  <Alert className="border-yellow-200 dark:border-yellow-800">
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>
                      Please review your settings before continuing.
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2">
                    <Label>Upload Progress</Label>
                    <Progress value={75} className="w-full" />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Beautiful Design</CardTitle>
              <CardDescription>
                Carefully crafted components that look great out of the box
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Accessible</CardTitle>
              <CardDescription>
                Built on Radix UI primitives with full keyboard and screen reader support
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Developer Friendly</CardTitle>
              <CardDescription>
                Copy and paste components directly into your project
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Code Example */}
        <Card className="mt-20 bg-gray-900 text-white">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{
`# Install MoonUI CLI
npm install -g @moontra/moonui-cli

# Add components to your project
moonui add button card dialog

# Start building!
npm run dev`
              }</code>
            </pre>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">200+</div>
              <p className="text-muted-foreground">Components</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <p className="text-muted-foreground">Downloads</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <p className="text-muted-foreground">TypeScript</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-primary flex items-center justify-center gap-1">
                5 <Star className="w-6 h-6 fill-current" />
              </div>
              <p className="text-muted-foreground">GitHub Stars</p>
            </CardContent>
          </Card>
        </div>


        {/* Footer */}
        <div className="mt-20 pt-8 border-t">
          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              Built with <span className="text-red-500">❤️</span> by the MoonUI Team
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <a href="https://moonui.dev/docs">
                <Button variant="link">Documentation</Button>
              </a>
              <a href="https://moonui.dev/components">
                <Button variant="link">Components</Button>
              </a>
              <a href="https://github.com/oguzhanayyldz/moonuikit">
                <Button variant="link">GitHub</Button>
              </a>
              <a href="https://discord.gg/moonui">
                <Button variant="link">Discord</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </TooltipProvider>
  )
}
