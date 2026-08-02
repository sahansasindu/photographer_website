import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

export default function Lightbox({ photo, photos, onClose, onNavigate }) {
  const currentIndex = photo ? photos.findIndex((p) => p.id === photo.id) : -1

  const goNext = useCallback(() => {
    if (currentIndex < photos.length - 1) {
      onNavigate(photos[currentIndex + 1])
    }
  }, [currentIndex, photos, onNavigate])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(photos[currentIndex - 1])
    }
  }, [currentIndex, photos, onNavigate])

  useEffect(() => {
    const handleKey = (e) => {
      if (!photo) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [photo, onClose, goNext, goPrev])

  useEffect(() => {
    if (photo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [photo])

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-cream/70 hover:text-gold transition-colors duration-300 z-10"
            aria-label="Close lightbox"
          >
            <HiX size={32} />
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-cream/50 text-sm tracking-wider">
            {currentIndex + 1} / {photos.length}
          </div>

          {/* Previous button */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 md:left-8 text-cream/50 hover:text-gold transition-colors duration-300 z-10 p-2"
              aria-label="Previous photo"
            >
              <HiChevronLeft size={40} />
            </button>
          )}

          {/* Next button */}
          {currentIndex < photos.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 md:right-8 text-cream/50 hover:text-gold transition-colors duration-300 z-10 p-2"
              aria-label="Next photo"
            >
              <HiChevronRight size={40} />
            </button>
          )}

          {/* Image */}
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="max-w-[90vw] max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photo.src.replace('w=600', 'w=1200')}
              alt={photo.alt}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">{photo.category}</p>
              <p className="text-cream text-sm font-light">{photo.alt}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
