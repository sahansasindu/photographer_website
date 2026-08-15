import { motion } from 'framer-motion'
import { HiCamera, HiStar, HiHeart } from 'react-icons/hi'

const stats = [
  { icon: HiCamera, value: '2,500+', label: 'Photos Delivered' },
  { icon: HiStar, value: '12+', label: 'Years Experience' },
  { icon: HiHeart, value: '350+', label: 'Happy Clients' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            The Artist
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal-dark mb-6">
            About Me
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80"
                alt="Professional photographer at work"
                loading="lazy"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
            </div>
            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-charcoal-dark text-cream p-6 shadow-2xl"
            >
              <p className="font-heading text-4xl text-gold mb-1">12+</p>
              <p className="text-cream/70 text-sm tracking-wider uppercase">Years of<br />Experience</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h3 className="font-heading text-2xl sm:text-3xl text-charcoal-dark mb-2">
              Sandamuthu Dinethra
            </h3>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-medium mb-6">
              Professional Photographer
            </p>

            <div className="space-y-4 text-warm-gray leading-relaxed mb-8">
              <p>
                With over a decade of experience behind the lens, I've dedicated my career to
                capturing the authentic beauty in every moment. From intimate weddings to grand
                celebrations, my approach blends documentary storytelling with fine art aesthetics.
              </p>
              <p>
                My journey began in the streets of Paris, where I fell in love with the interplay
                of light and shadow. Today, that passion drives every frame I capture — seeking
                the extraordinary in the ordinary, the timeless in the fleeting.
              </p>
              <p>
                I believe that great photography isn't just about technical perfection — it's about
                connection, emotion, and the ability to make you feel something when you look at
                an image years from now.
              </p>
            </div>

            {/* Signature */}
            <div className="mb-10">
              <p className="font-heading italic text-2xl text-charcoal-dark"> Sandamuthu Dinethra</p>
              <div className="w-24 h-px bg-gold mt-2" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="text-gold text-2xl mx-auto mb-2" />
                  <p className="font-heading text-2xl sm:text-3xl text-charcoal-dark">{stat.value}</p>
                  <p className="text-warm-gray text-xs tracking-wider uppercase mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
