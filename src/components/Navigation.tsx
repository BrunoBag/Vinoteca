import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-cream-800/30 backdrop-blur-md z-50 border-b-5 border-rose-950">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif font-bold text-rose-950">
            VINOTECA MENDOZA
          </Link>
          <ul className="hidden md:flex space-x-8">
            <li className="text-rose-950 hover:text-cream-50 hover:scale-120 transition-all duration-300">
              <Link href="/" >
                INICIO
              </Link>
            </li>
            <li className="text-rose-950 hover:text-cream-50 hover:scale-120 transition-all duration-300">
              <Link href="/historia" className="text-rose-950 hover:text-cream-50 hover:scale-110 transition-all duration-300">
                HISTORIA
              </Link>
            </li>
            <li className="text-rose-950 hover:text-cream-50 hover:scale-120 transition-all duration-300">
              <Link href="/vinos" className="text-rose-950 hover:text-cream-50 hover:scale-110 transition-all duration-300">
                VINOS
              </Link>
            </li>
            <li className="text-rose-950 hover:text-cream-50 hover:scale-120 transition-all duration-300">
              <Link href="/marcas" className="text-rose-950 hover:text-cream-50 hover:scale-110 transition-all duration-300">
                MARCAS
              </Link>
            </li>
            <li className="text-rose-950 hover:text-cream-50 hover:scale-120 transition-all duration-300">
              <Link href="/contacto" className="text-rose-950 hover:text-cream-50 hover:scale-110 transition-all duration-300">
                CONTACTO
              </Link>
            </li>
          </ul>
          {/* Mobile menu button */}
          <button className="md:hidden text-rose-950">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
