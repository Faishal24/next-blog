import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}

export default function BlogCard({ title, description, date, image, slug }: BlogCardProps) {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className="bg-slate-800 shadow-md rounded-lg overflow-hidden h-full">
        <Image src={image} alt={title} width={500} height={500} />
        <div className="p-4">
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="text-gray-500 text-sm mt-2">{description}</p>
          <p className="text-gray-400 text-xs mt-3">{date}</p>
        </div>
      </div>
    </Link>
  );
}
