"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
    {
        title: 'FPS Test',
        description: 'Unity physics prototype — first-person mechanics, projectile physics and item interactions.',
        link: 'https://christopher-hayling.itch.io/fps-test',
        linkLabel: 'itch.io',
        tags: ['Unity', 'C#', 'Physics'],
        image: '/images/games/fps-test.jpg',
    },
    {
        title: 'GloboBallon',
        description: 'Flappy Bird-inspired balloon game with a painterly flat vector art style. Navigate through a moody forest.',
        link: 'https://chr1st0ph3r9.github.io/GloboBallon/',
        linkLabel: 'Play',
        tags: ['Unity', 'C#', 'Web'],
        image: '/images/games/globoballon.jpg',
    },
    {
        title: 'DriftCity',
        description: 'Endless runner car racing game with a clean flat top-down perspective. Dodge obstacles and go as far as you can.',
        link: 'https://chr1st0ph3r9.github.io/DriftCity',
        linkLabel: 'Play',
        tags: ['Web', 'JavaScript', 'Endless Runner'],
        image: '/images/games/driftcity.jpg',
    },
    {
        title: 'Codex Glauks',
        description: 'Action-adventure with an asymmetric camera system. Inspired by The Legend of Zelda: Link\'s Awakening.',
        link: null,
        linkLabel: 'Coming Soon',
        tags: ['Unity', 'C#', 'Action-Adventure'],
        image: null,
    },
    {
        title: 'Oficina Pesadilla',
        description: '48h game jam entry — collect pages, deliver to the printer, fight off monsters with a mouse-aimed sword.',
        link: null,
        linkLabel: 'Game Jam',
        tags: ['Unity', 'C#', 'Game Jam'],
        image: null,
    },
]

function ProjectCard({ project, index }) {
    return (
        <motion.div
            className="group relative rounded-2xl overflow-hidden bg-surface cursor-pointer"
            style={{ aspectRatio: '4/3' }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
        >
            {/* Background image or placeholder */}
            {project.image ? (
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-surface-2 via-surface to-black">
                    {/* Subtle grid pattern for placeholder */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }} />
                    {/* Coral accent dot */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="w-24 h-24 rounded-full border-2 border-coral" />
                    </div>
                </div>
            )}

            {/* Always-on dark gradient from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

            {/* Rest state: just title at bottom */}
            <div className="absolute inset-x-0 bottom-0 p-5 transition-opacity duration-200 group-hover:opacity-0">
                <h3 className="font-display font-bold text-lg text-white">{project.title}</h3>
            </div>

            {/* Hover panel: slides up from bottom */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-black/80 backdrop-blur-sm p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className="text-[11px] px-2.5 py-0.5 rounded-full border border-white/15 text-white/60"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white mb-1.5">{project.title}</h3>

                {/* Description */}
                <p className="text-xs text-white/50 leading-relaxed mb-3 line-clamp-2">{project.description}</p>

                {/* Link */}
                {project.link ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-coral text-xs font-semibold hover:underline"
                        onClick={e => e.stopPropagation()}
                    >
                        {project.linkLabel}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                ) : (
                    <span className="text-xs text-white/25">{project.linkLabel}</span>
                )}
            </div>
        </motion.div>
    )
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    className="mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-coral font-mono text-xs tracking-[0.2em] uppercase mb-3">Work</p>
                    <h2 className="font-display font-bold text-4xl md:text-5xl">Projects</h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
