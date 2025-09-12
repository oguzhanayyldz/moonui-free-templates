import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BlogList } from '@/components/blog-list'
import { getAllPosts } from '@/lib/blog'

export default async function HomePage() {
  const posts = await getAllPosts()

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="py-20 border-b">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                MoonUI Blog
              </h1>
              <p className="text-xl text-muted-foreground">
                Insights, tutorials, and updates from the MoonUI team. 
                Learn how to build better interfaces with our component library.
              </p>
            </div>
          </div>
        </section>
        <BlogList posts={posts} />
      </main>
      <Footer />
    </>
  )
}
