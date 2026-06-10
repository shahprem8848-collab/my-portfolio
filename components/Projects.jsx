'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <motion.div
        className="relative group rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg dark:shadow-xl transition-all h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
      >
        {/* Project image/color background */}
        <div className={`h-48 md:h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <p className="text-white text-sm font-semibold mb-2">View Project</p>
              <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute top-4 right-4 flex gap-2 flex-wrap justify-end"
            animate={{ y: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0.7 }}
          >
            {project.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <motion.a
            href={project.link || '#'}
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            whileHover={{ x: 5 }}
          >
            Explore Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and deadline tracking.',
      gradient: 'from-purple-500 to-pink-500',
      tags: ['React', 'Firebase', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts, data visualization, and custom report generation.',
      gradient: 'from-green-500 to-emerald-500',
      tags: ['Next.js', 'Chart.js', 'Node.js'],
      link: '#',
    },
    {
      title: 'Social Media Feed',
      description: 'Dynamic social feed with infinite scroll, real-time notifications, user interactions, and media uploads.',
      gradient: 'from-orange-500 to-red-500',
      tags: ['React', 'Socket.io', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Weather Application',
      description: 'Beautiful weather app with location-based forecasts, weather alerts, and interactive maps integration.',
      gradient: 'from-indigo-500 to-blue-500',
      tags: ['Next.js', 'API Integration', 'Maps'],
      link: '#',
    },
    {
      title: 'Portfolio Template',
      description: 'Modern, customizable portfolio template with animations, dark mode, and responsive design.',
      gradient: 'from-teal-500 to-green-500',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      link: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore a selection of projects I've built, showcasing my expertise in modern web development.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>

          {/* View All Projects Button */}
          <motion.div className="text-center mt-16" variants={itemVariants}>
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
