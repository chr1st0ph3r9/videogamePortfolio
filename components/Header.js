"use client"
import { motion } from 'framer-motion'
import { FaGamepad } from 'react-icons/fa'
import { createContext } from 'react';

export default function Header() {
  return (
    <motion.header 
      className="w-full bg-background/80 backdrop-blur-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
        >
          <FaGamepad className="text-2xl text-primary" />
          <span className="text-xl font-bold">Christopher Hayling</span>
        </motion.div>
        <ul className="flex space-x-6">
          {['Projects', 'About', 'Contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
