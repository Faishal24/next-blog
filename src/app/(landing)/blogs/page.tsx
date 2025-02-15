import blogPosts from '@/assets/constant/posts'
import BlogCard from '@/components/BlogCard'
import React from 'react'

export default function BlogPage() {
  return (
    <div className="space-y-4 mt-8">
        <h2 className='text-4xl font-bold'>Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
    </div>
  )
}
