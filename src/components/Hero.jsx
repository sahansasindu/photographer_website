import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

export default function Hero() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.currentTime = 0
              videoRef.current.play().catch((err) => {
                console.log('Autoplay prevented or video loading:', err)
              })
            } else {
              videoRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-banner.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-gold mb-8"
          />

          {/* Studio name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gold text-sm sm:text-base tracking-[0.3em] uppercase font-medium mb-4"
          >
            Dinethra Visuals
          </motion.p>

          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6"
          >
            Capturing Moments,
            <br />
            <span className="italic text-gold-light">Creating Memories</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-cream/70 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-light"
          >
            Premium photography that tells your story through light, emotion, and artistry.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#portfolio"
              className="group px-8 py-4 bg-gold text-charcoal-dark text-sm font-semibold tracking-wider uppercase hover:bg-gold-light transition-all duration-300 text-center"
            >
              View Portfolio
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-cream/30 text-cream text-sm font-medium tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300 text-center"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/50 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <HiChevronDown className="text-gold text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}
