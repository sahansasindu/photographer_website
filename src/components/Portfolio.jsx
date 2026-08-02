import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from './Lightbox'

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Nature']

const photos = [
  { id: 1, category: 'Weddings', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Wedding couple at sunset', aspect: 'tall' },
  { id: 2, category: 'Portraits', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80', alt: 'Portrait in natural light', aspect: 'wide' },
  { id: 3, category: 'Nature', src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80', alt: 'Misty mountain landscape', aspect: 'wide' },
  { id: 4, category: 'Events', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Corporate event photography', aspect: 'normal' },
  { id: 5, category: 'Weddings', src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', alt: 'Wedding rings detail', aspect: 'normal' },
  { id: 6, category: 'Portraits', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', alt: 'Professional headshot', aspect: 'tall' },
  { id: 7, category: 'Nature', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', alt: 'Forest canopy light', aspect: 'normal' },
  { id: 8, category: 'Events', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', alt: 'Event celebration lights', aspect: 'tall' },
  { id: 9, category: 'Weddings', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', alt: 'Wedding ceremony outdoors', aspect: 'wide' },
  { id: 10, category: 'Portraits', src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&q=80', alt: 'Fashion portrait', aspect: 'normal' },
  { id: 11, category: 'Nature', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', alt: 'Golden hour valley', aspect: 'tall' },
  { id: 12, category: 'Events', src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80', alt: 'Concert photography', aspect: 'normal' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxPhoto, setLightboxPhoto] = useState(null)

  const filteredPhotos =
    activeCategory === 'All'
      ? photos
      : photos.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-charcoal-dark">
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
            Our Work
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-cream mb-6">
            Portfolio
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-charcoal-dark'
                  : 'border border-warm-gray/30 text-cream/70 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="masonry-grid"
          key={activeCategory}
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.8 }}
                className="group cursor-pointer overflow-hidden relative"
                onClick={() => setLightboxPhoto(photo)}
              >
                <div className={`overflow-hidden ${
                  photo.aspect === 'tall' ? 'aspect-[3/4]' : 
                  photo.aspect === 'wide' ? 'aspect-[4/3]' : 'aspect-square'
                }`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">{photo.category}</p>
                    <p className="text-cream text-sm font-light">{photo.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        photo={lightboxPhoto}
        photos={filteredPhotos}
        onClose={() => setLightboxPhoto(null)}
        onNavigate={setLightboxPhoto}
      />
    </section>
  )
}
