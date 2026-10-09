'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  MoonUIButton as Button,
  MoonUICard as Card,
  MoonUICardHeader as CardHeader,
  MoonUICardContent as CardContent,
  MoonUICardTitle as CardTitle,
  MoonUICardDescription as CardDescription,
  MoonUIBadge as Badge,
  MoonUIAccordion as Accordion,
  MoonUIAccordionContent as AccordionContent,
  MoonUIAccordionItem as AccordionItem,
  MoonUIAccordionTrigger as AccordionTrigger,
} from '@moontra/moonui'
import { 
  ArrowRight, Check, Star, Zap, Shield, Globe, 
  Sparkles, Users, Trophy, Rocket, Heart
} from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Lightning Fast",
    description: "Optimized for performance with minimal bundle size"
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Type Safe",
    description: "Built with TypeScript for better developer experience"
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Accessible",
    description: "WCAG compliant components for everyone"
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Beautiful",
    description: "Carefully crafted with attention to detail"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Community",
    description: "Join thousands of developers building with MoonUI"
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    title: "Production Ready",
    description: "Battle-tested in real-world applications"
  }
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer",
    company: "TechCorp",
    image: "https://i.pravatar.cc/150?img=1",
    content: "MoonUI has transformed how we build interfaces. The components are beautiful and easy to customize."
  },
  {
    name: "Alex Rivera",
    role: "Product Designer",
    company: "DesignStudio",
    image: "https://i.pravatar.cc/150?img=2",
    content: "The attention to detail in MoonUI components is incredible. Our design system is now consistent across all products."
  },
  {
    name: "Jordan Smith",
    role: "Tech Lead",
    company: "StartupXYZ",
    image: "https://i.pravatar.cc/150?img=3",
    content: "We shipped our MVP 3x faster thanks to MoonUI. The developer experience is unmatched."
  }
]

const faqs = [
  {
    question: "What is MoonUI?",
    answer: "MoonUI is a modern React component library built on top of Radix UI and Tailwind CSS, providing beautiful, accessible, and customizable components."
  },
  {
    question: "Is MoonUI free to use?",
    answer: "Yes! MoonUI offers a generous free tier with 50+ components. Pro features are available for advanced use cases."
  },
  {
    question: "Can I use MoonUI with Next.js?",
    answer: "Absolutely! MoonUI is optimized for Next.js and supports both App Router and Pages Router."
  },
  {
    question: "How do I customize the components?",
    answer: "MoonUI components are highly customizable through Tailwind classes, CSS variables, and component variants."
  },
  {
    question: "Do you provide support?",
    answer: "Yes, we offer community support for free users and priority support for Pro subscribers."
  }
]

export default function LandingPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-radial opacity-30" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4" variant="secondary">
              <Sparkles className="mr-1 h-3 w-3" />
              New: Advanced Charts Released
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-up">
              Build Stunning React Apps
              <span className="text-primary block mt-2">With MoonUI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-200">
              A modern component library that helps you ship faster. 
              Beautiful, accessible, and fully customizable.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-up animation-delay-400">
              <a href="https://moonui.dev/docs/installation" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://moonui.dev/components" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  View Components
                </Button>
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>10k+ developers</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                <span>Open source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to build modern apps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              MoonUI provides all the building blocks you need to create beautiful, accessible interfaces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by developers worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See what others are saying about MoonUI
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="mb-4">{testimonial.content}</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently asked questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about MoonUI
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="bg-gradient-to-br from-primary to-primary/80 dark:from-primary/90 dark:to-primary/70 text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to build something amazing?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join thousands of developers using MoonUI to build beautiful applications faster.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://moonui.dev/docs/installation" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 bg-white text-primary hover:bg-white/90">
                    <Rocket className="h-4 w-4" />
                    Get Started Free
                  </Button>
                </a>
                <a href="https://moonui.dev/docs" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/40">
                    View Documentation
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  )
}
