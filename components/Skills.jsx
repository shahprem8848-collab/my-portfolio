'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SkillBar = ({ name, percentage, icon }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className="mb-8"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
        </div>
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const skillsData = [
    { name: 'React & Next.js', percentage: 92, icon: '⚛️' },
    { name: 'Tailwind CSS', percentage: 88, icon: '🎨' },
    { name: 'JavaScript/ES6+', percentage: 90, icon: '📝' },
    { name: 'UI/UX Design', percentage: 85, icon: '✨' },
    { name: 'Web Performance', percentage: 87, icon: '⚡' },
    { name: 'Git & DevOps', percentage: 83, icon: '🔧' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I have developed a diverse set of technical skills through hands-on experience and continuous learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                <span className="w-1 h-8 bg-indigo-600"></span>
                Frontend Development
              </h3>
              <SkillBar name="React & Next.js" percentage={92} icon="⚛️" />
              <SkillBar name="Tailwind CSS" percentage={88} icon="🎨" />
              <SkillBar name="JavaScript/ES6+" percentage={90} icon="📝" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                <span className="w-1 h-8 bg-purple-600"></span>
                Additional Skills
              </h3>
              <SkillBar name="UI/UX Design" percentage={85} icon="✨" />
              <SkillBar name="Web Performance" percentage={87} icon="⚡" />
              <SkillBar name="Git & DevOps" percentage={83} icon="🔧" />
            </motion.div>
          </div>

          {/* Feature cards */}
          <motion.div className="grid md:grid-cols-3 gap-6 mt-16" variants={itemVariants}>
            {[
              { title: 'Clean Code', description: 'Well-organized, maintainable code that follows best practices' },
              { title: 'Responsive Design', description: 'Beautiful interfaces that work seamlessly on all devices' },
              { title: 'Performance', description: 'Optimized applications with fast load times and smooth interactions' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)' }}
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
