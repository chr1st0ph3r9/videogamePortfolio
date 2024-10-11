"use client"
import { motion } from 'framer-motion'
import { FaGithub, FaItchIo } from 'react-icons/fa'
import { createContext } from 'react';
const projects = [
  {
    title: "FPS Test",
    description: "A first-person shooter test project showcasing game mechanics.",
    link: "https://christopher-hayling.itch.io/fps-test",
    icon: <FaItchIo />,
  },
  {
    title: "GloboBallon",
    description: "A clasic Flappy bird like balloon-based game.",
    link: "https://chr1st0ph3r9.github.io/GloboBallon/",
    icon: <FaGithub />,
  },
  {
    title: "DriftCity",
    description: "A classic endless runner type car racing game.",
    link: "https://chr1st0ph3r9.github.io/DriftCity",
    icon: <FaGithub />,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                >
                  {project.icon}
                  <span>View Project</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}