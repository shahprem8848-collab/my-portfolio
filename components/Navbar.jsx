import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          MyBrand
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
          <li><Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Home</Link></li>
          <li><Link href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</Link></li>
          <li><Link href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {/* Dark/Light Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                /* Sun icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                /* Moon icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          )}

          {/* CTA Button */}
          <Link href="#contact" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition">
            Hire Me
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 flex flex-col gap-4 text-gray-700 dark:text-gray-300 font-medium border-t dark:border-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center gap-2 text-sm font-semibold"
            >
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          )}
        </div>
      )}
    </nav>
  )
}