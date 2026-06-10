'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">MyBrand</h3>
            <p className="text-sm text-gray-400">
              Full-stack developer creating beautiful digital experiences with modern technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-indigo-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Tech Stack</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition">React</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Next.js</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Tailwind CSS</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Framer Motion</a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: '🐙', link: 'https://github.com' },
                { icon: '💼', link: 'https://linkedin.com' },
                { icon: '🐦', link: 'https://twitter.com' },
                { icon: '📧', link: 'mailto:hello@example.com' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition text-sm"
                  whileHover={{ y: -2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-800 pt-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>&copy; {currentYear} MyBrand. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-indigo-400 transition">Sitemap</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
