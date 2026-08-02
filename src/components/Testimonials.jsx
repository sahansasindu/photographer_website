import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael',
    role: 'Wedding Clients',
    text: 'Alexander captured our wedding day with such artistry and attention to detail. Every single photo tells a story. We couldn\'t have asked for a more talented photographer to document the most important day of our lives.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    id: 2,
    name: 'James Robertson',
    role: 'Corporate Event',
    text: 'Working with Lumière Studios was an absolute pleasure. The team was professional, unobtrusive, and delivered stunning photos that perfectly captured the energy of our annual gala. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Portrait Session',
    text: 'I was nervous about my portrait session, but Alexander made me feel so comfortable. The results were beyond anything I imagined — natural, elegant, and truly capturing my personality.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
  {
    id: 4,
    name: 'David & Ana',
    role: 'Engagement Shoot',
    text: 'From the first meeting to the final gallery delivery, everything was seamless. The engagement photos are like works of art — we\'ve had so many compliments. Can\'t wait for our wedding shoot!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  const t = testimonials[current]

  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 text-gold/5">
        <FaQuoteLeft size={200} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal-dark mb-6">
            Client Love
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        {/* Carousel */}
        <div className="relative min-h-[320px] flex items-center">
          {/* Nav Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 text-warm-gray hover:text-gold transition-colors duration-300 p-2 -ml-2 md:-ml-12"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft size={36} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 z-10 text-warm-gray hover:text-gold transition-colors duration-300 p-2 -mr-2 md:-mr-12"
            aria-label="Next testimonial"
          >
            <HiChevronRight size={36} />
          </button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full text-center px-8 md:px-16"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-gold/30 text-3xl mx-auto mb-6" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <HiStar
                    key={i}
                    className={`text-xl ${i < t.rating ? 'star-filled' : 'star-empty'}`}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-heading text-lg sm:text-xl md:text-2xl text-charcoal italic leading-relaxed mb-8">
                "{t.text}"
              </p>

              {/* Client info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                />
                <div className="text-left">
                  <p className="font-heading text-lg text-charcoal-dark">{t.name}</p>
                  <p className="text-warm-gray text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? 'bg-gold w-8'
                  : 'bg-warm-gray/30 hover:bg-gold/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
