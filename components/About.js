"use client"
import { motion } from 'framer-motion'
import { FaUnity, FaCode } from 'react-icons/fa'
import { SiUnrealengine, SiCsharp, SiCplusplus } from 'react-icons/si'
import { createContext } from 'react';

export default function About() {
  const skills = [
    { name: 'Unity', icon: <FaUnity /> },
    { name: 'Unreal Engine', icon: <SiUnrealengine /> },
    { name: 'C#', icon: <SiCsharp /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Game Design', icon: <FaCode /> },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <motion.p 
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            I'm a 25-year-old videogame developer with a passion for creating immersive and engaging gaming experiences. 
            With expertise in both Unity Engine using C# and Unreal Engine using C++, I bring ideas to life through code and creativity.
          </motion.p>
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm constantly learning and exploring new technologies to enhance my game development skills. 
            My goal is to create memorable gaming experiences that push the boundaries of creativity and technology.
          </motion.p>
        </div>
      </div>
    </section>
  )
}