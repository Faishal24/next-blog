import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between mb-5'>
      <Link href={"/"}>
        <p className='text-lg font-bold'>ReadNest</p>
      </Link>
      <ul className='flex gap-4'>
        <Link href={"/"}>Home</Link>
        <Link href={"/blogs"}>Blogs</Link>
      </ul>
    </nav>
  )
}
