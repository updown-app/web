import { useState } from 'react'
import Button from './Button'
import { APP_URL } from '../constants/urls'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Vision', href: '#vision' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#334155] bg-[#0f172a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-tight text-[#F8FAFC]">
          UpDown
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#CBD5E1] transition-colors hover:text-[#F8FAFC]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button as="a" href={APP_URL}>
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#CBD5E1] hover:text-[#F8FAFC] focus:outline-none md:hidden"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[#334155] md:hidden">
          <div className="space-y-2 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-[#CBD5E1] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button as="a" href={APP_URL} className="w-full text-center">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
