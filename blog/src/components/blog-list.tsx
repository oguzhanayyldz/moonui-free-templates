import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { 
  MoonUICard as Card,
  MoonUICardHeader as CardHeader,
  MoonUICardContent as CardContent,
  MoonUICardTitle as CardTitle,
  MoonUICardDescription as CardDescription,
  MoonUIBadge as Badge,
  MoonUIAvatar as Avatar,
  MoonUIAvatarImage as AvatarImage,
  MoonUIAvatarFallback as AvatarFallback,
} from '@moontra/moonui'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  author: {
    name: string
    image?: string
  }
  readingTime: string
  tags: string[]
  coverImage?: string
}

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                {post.coverImage && (
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.image} />
                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <div className="font-medium">{post.author.name}</div>
                        <div className="text-muted-foreground flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}