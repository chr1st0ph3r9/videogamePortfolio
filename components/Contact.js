"use client"
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { createContext } from 'react';

export default function Contact() {
  const contactMethods = [
    { name: 'Email', icon: <FaEnvelope />, link: 'mailto:christopherhayling9@gmail.com' },
    { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/chr1st0ph3r9' },
    { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/christopher19/' },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <motion.p 
            className="text-lg mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Interested in collaborating or have a project in mind? Feel free to reach out!
          </motion.p>
          <div className="flex justify-center space-x-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {method.icon}
                <span>{method.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}