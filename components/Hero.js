"use client"
import { motion } from 'framer-motion'

function WireframeSphere() {
    return (
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="200" cy="200" r="178" stroke="white" strokeWidth="0.8" />
            {/* Latitude rings */}
            <ellipse cx="200" cy="200" rx="178" ry="55"  stroke="white" strokeWidth="0.8" />
            <ellipse cx="200" cy="200" rx="178" ry="108" stroke="white" strokeWidth="0.8" />
            <ellipse cx="200" cy="200" rx="178" ry="152" stroke="white" strokeWidth="0.8" />
            {/* Longitude rings */}
            <ellipse cx="200" cy="200" rx="55"  ry="178" stroke="white" strokeWidth="0.8" />
            <ellipse cx="200" cy="200" rx="108" ry="178" stroke="white" strokeWidth="0.8" />
            <ellipse cx="200" cy="200" rx="152" ry="178" stroke="white" strokeWidth="0.8" />
            {/* Axes */}
            <line x1="200" y1="22" x2="200" y2="378" stroke="white" strokeWidth="0.8" />
            <line x1="22"  y1="200" x2="378" y2="200" stroke="white" strokeWidth="0.8" />
        </svg>
    )
}

const stats = [
    { num: '6',      label: 'Games' },
    { num: '3',      label: 'Engines' },
    { num: 'C# C++', label: 'Languages' },
]

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-20 overflow-hidden">

            {/* Wireframe sphere — decorative, top-right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 md:w-[480px] md:h-[480px] opacity-[0.06] pointer-events-none select-none pr-0 md:-right-16">
                <WireframeSphere />
            </div>

            {/* Coral glow behind name */}
            <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,107,91,0.08) 0%, transparent 70%)' }}
            />

            <div className="relative max-w-5xl">
                {/* Eyebrow label */}
                <motion.p
                    className="text-coral font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-6 md:mb-8"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Videogame Developer
                </motion.p>

                {/* Name — huge display */}
                <motion.h1
                    className="font-display font-bold leading-[0.9] mb-8 md:mb-10"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="block text-[clamp(3rem,10vw,7rem)] text-white">Christopher</span>
                    <span className="block text-[clamp(3rem,10vw,7rem)] text-white/20">Hayling</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-white/50 text-base md:text-lg max-w-md mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    Crafting immersive experiences with Unity & Unreal Engine.
                    Turning ideas into playable worlds.
                </motion.p>

                {/* CTA */}
                <motion.a
                    href="#projects"
                    className="inline-flex items-center gap-3 bg-coral text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-coral-dark transition-colors duration-200"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    View Projects
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3L13 8L8 13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </motion.a>
            </div>

            {/* Stats — bottom */}
            <motion.div
                className="absolute bottom-10 left-6 md:left-16 flex gap-8 md:gap-14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
            >
                {stats.map(s => (
                    <div key={s.label}>
                        <div className="font-display font-bold text-xl md:text-2xl text-coral">{s.num}</div>
                        <div className="text-[10px] md:text-xs text-white/30 uppercase tracking-widest mt-0.5">{s.label}</div>
                    </div>
                ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 right-6 md:right-16 flex flex-col items-center gap-2 text-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                <span className="text-[10px] tracking-widest uppercase rotate-90 mb-4">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    )
}
