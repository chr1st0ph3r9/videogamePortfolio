"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['Projects', 'About', 'Contact']

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
            }`}
        >
            <nav className="max-w-6xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-display font-bold text-lg tracking-tight hover:text-coral transition-colors">
                    CH<span className="text-coral">.</span>
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map(item => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-background/95 backdrop-blur-md border-b border-white/5 px-6 pb-6"
                    >
                        <ul className="flex flex-col gap-4 pt-4">
                            {navLinks.map(item => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-lg font-display font-semibold hover:text-coral transition-colors"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
