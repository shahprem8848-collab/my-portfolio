export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-1 rounded-full mb-6">Welcome to my portfolio</span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          I Build <span className="text-indigo-600">Beautiful</span> Web Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          I am a web development intern passionate about building fast and responsive websites with Next.js and Tailwind CSS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">View My Work</a>
          <a href="#contact" className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition">Contact Me</a>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center text-center">
          <div><p className="text-3xl font-extrabold text-indigo-600">5+</p><p className="text-gray-500 text-sm mt-1">Projects Built</p></div>
          <div><p className="text-3xl font-extrabold text-indigo-600">3</p><p className="text-gray-500 text-sm mt-1">Technologies</p></div>
          <div><p className="text-3xl font-extrabold text-indigo-600">100%</p><p className="text-gray-500 text-sm mt-1">Dedication</p></div>
        </div>
      </div>
    </section>
  )
}