'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const words = ['Beautiful', 'Responsive', 'Fast', 'Interactive']
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      const nextText = isDeleting
        ? currentWord.substring(0, displayText.length - 1)
        : currentWord.substring(0, displayText.length + 1)
      timeout = setTimeout(() => setDisplayText(nextText), isDeleting ? 50 : 80)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div 
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm font-semibold px-4 py-1 rounded-full mb-6"
          variants={itemVariants}
        >
          Welcome to my portfolio
        </motion.span>

        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6"
          variants={itemVariants}
        >
          I Build{' '}
          <span className="relative inline-block">
            <span className="text-indigo-600 dark:text-indigo-400 min-w-[250px] inline-block text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </span>{' '}
          Experiences
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={itemVariants}
        >
          Full-stack developer crafting elegant digital solutions with cutting-edge technologies. 
          Turning ideas into reality through clean code and thoughtful design.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={itemVariants}
        >
          <motion.a 
            href="#projects" 
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a 
            href="#contact" 
            className="border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 dark:hover:bg-gray-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid grid-cols-3 gap-8 md:gap-12 text-center"
          variants={itemVariants}
        >
          <motion.div whileHover={{ y: -5 }}>
            <p className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">15+</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Projects Built</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }}>
            <p className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">8+</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Technologies</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }}>
            <p className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">100%</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Quality Focus</p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}