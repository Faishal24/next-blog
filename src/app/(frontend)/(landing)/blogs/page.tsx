import blogPosts from '@/assets/constant/posts'
import BlogCard from '@/components/BlogCard'
import React from 'react'

export default async function BlogPage() {
  const posts = await blogPosts()

  return (
    <div className="space-y-4 mt-8">
        <h2 className='text-4xl font-bold'>Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.slice(0, 3).map((post: { title: string; description: string; date: string; image: { url: string; }; slug: string; }, index: React.Key | null | undefined) => (
            <BlogCard 
              key={index} 
              title={post.title} 
              description={post.description}
              date={post.date}
              image={post.image.url}
              slug={post.slug}  
            />
          ))}
        </div>
    </div>
  )
}
