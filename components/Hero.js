"use client"
import { motion } from 'framer-motion'
import { FaUnity, FaCode } from 'react-icons/fa'
import { SiUnrealengine } from 'react-icons/si'
import { createContext } from 'react';


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Christopher Hayling
        </motion.h1>
        <motion.h2 
          className="text-3xl text-secondary mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Videogame Developer
        </motion.h2>
        <motion.div 
          className="flex justify-center space-x-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaUnity className="text-4xl" />
          <SiUnrealengine className="text-4xl" />
          <FaCode className="text-4xl" />
        </motion.div>
        <motion.p 
          className="max-w-2xl mx-auto text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Passionate about creating immersive gaming experiences with Unity and Unreal Engine. 
          Skilled in C# and C++, bringing ideas to life through code and creativity.
        </motion.p>
        <motion.a 
          href="#projects"
          className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/80 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Projects
        </motion.a>
      </div>
    </section>
  )
}