import React from "react";
import blogPosts from "@/assets/constant/posts";
import Image from "next/image";

type BlogDetailProps = {
  params: {
    slug: string;
  };
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  //   const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  //   const data = await response.json();

  const blogPost = blogPosts.find((post) => post.slug === params.slug);
  if (!blogPost) {
    return <div>Not Found</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-xl font-bold">{blogPost.title}</h1>
      <div className="flex items-center justify-center">
      <Image src={blogPost.image} alt={blogPost.title} width={600} height={600} />
      </div>
      <p>{blogPost.description}</p>
      <p>{blogPost.date}</p>
    </div>
  );
}
