"use client"
import { motion } from 'framer-motion'
import { FaUnity, FaCode } from 'react-icons/fa'
import { SiUnrealengine, SiCsharp, SiCplusplus, SiBlender } from 'react-icons/si'
import Image from 'next/image'

const skills = [
    { name: 'Unity',         icon: <FaUnity /> },
    { name: 'Unreal Engine', icon: <SiUnrealengine /> },
    { name: 'C#',            icon: <SiCsharp /> },
    { name: 'C++',           icon: <SiCplusplus /> },
    { name: 'Game Design',   icon: <FaCode /> },
    { name: 'Blender',       icon: <SiBlender /> },
]

const stats = [
    { num: '5',   label: 'Games built' },
    { num: '2',   label: 'Game engines' },
    { num: '2+',  label: 'Years developing' },
    { num: '1',   label: 'Game jam' },
]

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    className="mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-coral font-mono text-xs tracking-[0.2em] uppercase mb-3">Background</p>
                    <h2 className="font-display font-bold text-4xl md:text-5xl">About Me</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left: photo + stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Photo */}
                        <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden mb-8 bg-surface">
                            <Image
                                src="/images/hero-image.webp"
                                alt="Christopher Hayling"
                                fill
                                className="object-cover grayscale contrast-110"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                            {/* Coral overlay tint */}
                            <div className="absolute inset-0 mix-blend-color opacity-10 bg-coral" />
                            {/* Bottom label */}
                            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="font-display font-bold text-white text-lg">Christopher Hayling</p>
                                <p className="text-coral text-xs font-mono tracking-widest uppercase">Videogame Developer</p>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map(s => (
                                <div key={s.label} className="bg-surface rounded-xl p-4 border border-white/5">
                                    <div className="font-display font-bold text-2xl text-coral mb-0.5">{s.num}</div>
                                    <div className="text-xs text-white/40 uppercase tracking-wider">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: bio + skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:pt-4"
                    >
                        <p className="text-white/70 text-base leading-relaxed mb-6">
                            I'm a videogame developer with a passion for creating immersive and engaging experiences.
                            With expertise in both <span className="text-white font-medium">Unity (C#)</span> and <span className="text-white font-medium">Unreal Engine (C++)</span>, I bring ideas to life through code and creativity.
                        </p>
                        <p className="text-white/50 text-base leading-relaxed mb-10">
                            I'm constantly exploring new technologies and techniques — from physics simulations and asymmetric camera systems to stylized art direction. My goal is to build games that feel memorable to play.
                        </p>

                        {/* Skills */}
                        <div>
                            <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Tools & Skills</p>
                            <div className="flex flex-wrap gap-2.5">
                                {skills.map(skill => (
                                    <motion.div
                                        key={skill.name}
                                        className="flex items-center gap-2 bg-surface border border-white/8 px-4 py-2 rounded-full text-sm text-white/70 hover:border-coral/40 hover:text-white transition-all duration-200 cursor-default"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <span className="text-coral">{skill.icon}</span>
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
