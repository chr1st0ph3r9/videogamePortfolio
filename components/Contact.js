"use client"
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FaItchIo } from 'react-icons/fa'

const links = [
    { icon: <FaEnvelope />,  label: 'Email',    sub: 'christopherhayling9@gmail.com', href: 'mailto:christopherhayling9@gmail.com' },
    { icon: <FaGithub />,    label: 'GitHub',   sub: 'chr1st0ph3r9',                  href: 'https://github.com/chr1st0ph3r9' },
    { icon: <FaLinkedin />,  label: 'LinkedIn', sub: 'christopher19',                 href: 'https://www.linkedin.com/in/christopher19/' },
    { icon: <FaItchIo />,    label: 'itch.io',  sub: 'christopher-hayling',           href: 'https://christopher-hayling.itch.io/' },
]

export default function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 px-6 md:px-16 relative overflow-hidden">
            {/* Coral glow */}
            <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, rgba(255,107,91,0.07) 0%, transparent 65%)' }}
            />

            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-coral font-mono text-xs tracking-[0.2em] uppercase mb-4">Get in touch</p>
                    <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-none">
                        Have a project<br />
                        <span className="text-white/20">in mind?</span>
                    </h2>
                </motion.div>

                {/* Links grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {links.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col gap-3 bg-surface border border-white/5 rounded-2xl p-5 hover:border-coral/30 hover:bg-surface-2 transition-all duration-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            whileHover={{ y: -3 }}
                        >
                            <div className="text-coral text-2xl">{link.icon}</div>
                            <div>
                                <div className="font-display font-semibold text-white group-hover:text-coral transition-colors">{link.label}</div>
                                <div className="text-xs text-white/30 mt-0.5 truncate">{link.sub}</div>
                            </div>
                            {/* Arrow */}
                            <div className="mt-auto self-end text-white/20 group-hover:text-coral transition-colors">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/20 text-xs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <span>© {new Date().getFullYear()} Christopher Hayling</span>
                    <span className="font-mono">Videogame Developer</span>
                </motion.div>
            </div>
        </section>
    )
}
