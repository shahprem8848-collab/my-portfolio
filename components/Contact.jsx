'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', message: '' })
  }

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

  const contacts = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@example.com',
      link: 'mailto:hello@example.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/yourprofile',
      link: 'https://github.com',
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@yourhandle',
      link: 'https://twitter.com',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have a question or project in mind? I'd love to hear from you. Reach out and let's collaborate!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Let's Connect</h3>
              <div className="space-y-6">
                {contacts.map((contact, idx) => (
                  <motion.a
                    key={idx}
                    href={contact.link}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-3xl flex-shrink-0">{contact.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {contact.label}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-4">
                  Follow Me
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: '🔗', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
                    { icon: '💼', label: 'LinkedIn', color: 'hover:text-blue-600' },
                    { icon: '🐦', label: 'Twitter', color: 'hover:text-blue-400' },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      className={`w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-lg transition-all ${social.color}`}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg text-green-700 dark:text-green-300 text-sm font-medium text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
