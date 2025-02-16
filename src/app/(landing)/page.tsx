import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.jpg";
import { FaGithub, FaInstagram } from "react-icons/fa";
import BlogCard from "@/components/BlogCard";
import blogPosts from "@/assets/constant/posts";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      <section className="space-y-8 mt-8 ">
        <Image className="w-32 rounded-full" src={Logo} alt="Logo" width={500} height={500} />
        <h1 className="text-6xl font-bold max-w-2xl">Software Engineer</h1>
        <p className="text-slate-400 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quidem quod, obcaecati eaque explicabo ullam quaerat animi rem nam beatae porro
          consectetur excepturi impedit minima architecto ea. Asperiores, sint? Iure?
        </p>

        <div className="flex gap-6 *:w-6 fill-slate-500 text-3xl">
          <Link href="https://github.com/Faishal24/">
            <FaGithub />
          </Link>
          <Link href="https://www.instagram.com/milanta169">
            <FaInstagram />
          </Link>
        </div>
      </section>

      <section className="space-y-4 mt-8">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogPosts.slice(0, 3).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>
    </main>
  );
}
