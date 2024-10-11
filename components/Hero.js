"use client"
import { motion } from 'framer-motion'
import { FaUnity, FaCode } from 'react-icons/fa'
import { SiUnrealengine } from 'react-icons/si'
import { createContext } from 'react';
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4">Christopher Hayling</h1>
          <h2 className="text-3xl text-secondary mb-6">Videogame Developer</h2>
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <FaUnity className="text-4xl" />
            <SiUnrealengine className="text-4xl" />
            <FaCode className="text-4xl" />
          </div>
          <p className="max-w-xl mx-auto md:mx-0 text-lg mb-8">
            Passionate about creating immersive gaming experiences with Unity and Unreal Engine. 
            Skilled in C# and C++, bringing ideas to life through code and creativity.
          </p>
          <motion.a 
            href="#projects"
            className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
        </motion.div>
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden">
            <Image
              src="/images/hero-image.webp"
              alt="Christopher Hayling - Videogame Developer"
              layout="fill"
              objectFit="cover"
              className="rounded-full filter grayscale"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
