import { formatDate } from '@/lib/utils'
import { 
  MoonUIBadge as Badge,
  MoonUIAvatar as Avatar,
  MoonUIAvatarImage as AvatarImage,
  MoonUIAvatarFallback as AvatarFallback,
  MoonUIButton as Button,
  MoonUISeparator as Separator,
} from '@moontra/moonui'
import { Calendar, Clock, Share2, Twitter, Facebook, Linkedin } from 'lucide-react'

interface Post {
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

export function BlogPost({ post }: { post: Post }) {
  return (
    <article className="py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>
            
            {/* Author & Meta */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.author.image} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Share buttons */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          <Separator className="mb-8" />

          {/* Cover Image */}
          {post.coverImage && (
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          {post.author.bio && (
            <>
              <Separator className="my-12" />
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="flex gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={post.author.image} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold mb-2">About {post.author.name}</div>
                    <p className="text-muted-foreground">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  )
}