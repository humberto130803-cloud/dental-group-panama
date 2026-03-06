import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Sucursales', href: '#sucursales' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img src="/logo.jpg" alt=":Dental Group" className="h-12 w-12 rounded-full object-cover" />
          <span
            className={`font-[var(--font-heading)] text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-red-brand' : 'text-white'
            }`}
          >
            :Dental Group
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-red-brand ${
                scrolled ? 'text-dark' : 'text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+5072613949"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? 'text-dark' : 'text-white'
            }`}
          >
            <FiPhone className="text-red-brand" />
            261-3949
          </a>
          <a
            href="https://wa.me/message/G6P6F5HZG5OAJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-brand hover:bg-red-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-brand/30"
          >
            Agenda tu Cita
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden text-2xl transition-colors ${
            scrolled ? 'text-dark' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-dark font-medium text-base hover:text-red-brand transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-gray-200" />
              <a
                href="https://wa.me/message/G6P6F5HZG5OAJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-brand text-white text-center px-6 py-3 rounded-full font-semibold"
              >
                Agenda tu Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
