import Link from 'next/link'
import React from 'react'
import { FiPlusCircle, FiHome } from 'react-icons/fi'

function Navbar() {
  return (
    <nav className="flex gap-6 justify-between items-center cursor-pointer">
      <Link className="flex items-center gap-1" href={'/'}>
        <FiHome /> <sapn>Home</sapn>
      </Link>
      <Link className="flex items-center gap-1" href={'/create'}>
        <FiPlusCircle /> <sapn>Create</sapn>
      </Link>
    </nav>
  )
}

export default Navbar
