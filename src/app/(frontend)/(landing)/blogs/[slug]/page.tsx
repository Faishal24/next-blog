import React from "react";
import blogPosts from "@/assets/constant/posts";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";

type BlogDetailProps = {
  params: {
    slug: string;
  };
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  const posts = await blogPosts();
  const blogPost = posts.find((post) => post.slug === params.slug);
  
  if (!blogPost) {
    return <div>Not Found</div>;
  }

  return (
    <div className="flex flex-col space-y-8 text-slate-400">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider text-slate-300">{blogPost.title}</h1>
        <p>{blogPost.date}</p>
      </div>
      <div className="flex items-center justify-center">
        <Image src={blogPost.image.url} alt={blogPost.title} width={600} height={600} />
      </div>
      {/* <p>{blogPost.content}</p> */}
      <RichText data={blogPost.content} />
    </div>
  );
}
