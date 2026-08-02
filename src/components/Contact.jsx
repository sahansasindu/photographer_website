import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa'

const contactInfo = [
  { icon: HiPhone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: HiMail, label: 'Email', value: 'hello@lumierestudios.com', href: 'mailto:hello@lumierestudios.com' },
  { icon: HiLocationMarker, label: 'Studio', value: '123 Art District, New York, NY 10001', href: '#' },
]

const socials = [
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com' },
  { icon: FaPinterestP, label: 'Pinterest', href: 'https://pinterest.com' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-charcoal-dark">
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
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-cream mb-6">
            Contact Us
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-cream/60 max-w-2xl mx-auto leading-relaxed">
            Ready to create something beautiful? Let's discuss your vision and bring it to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-cream/70 text-sm tracking-wider uppercase mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full bg-transparent border-b ${
                    errors.name ? 'border-red-400' : 'border-warm-gray/30 focus:border-gold'
                  } text-cream py-3 px-1 outline-none transition-colors duration-300 placeholder:text-cream/20`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-cream/70 text-sm tracking-wider uppercase mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full bg-transparent border-b ${
                    errors.email ? 'border-red-400' : 'border-warm-gray/30 focus:border-gold'
                  } text-cream py-3 px-1 outline-none transition-colors duration-300 placeholder:text-cream/20`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-cream/70 text-sm tracking-wider uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`w-full bg-transparent border-b ${
                    errors.message ? 'border-red-400' : 'border-warm-gray/30 focus:border-gold'
                  } text-cream py-3 px-1 outline-none transition-colors duration-300 resize-none placeholder:text-cream/20`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gold text-charcoal-dark font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors duration-300"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-gold text-sm text-center"
                >
                  Thank you! We'll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right side: Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30 group-hover:bg-gold/10 transition-colors duration-300">
                    <info.icon className="text-gold text-xl" />
                  </div>
                  <div>
                    <p className="text-cream/50 text-xs tracking-wider uppercase mb-1">{info.label}</p>
                    <p className="text-cream group-hover:text-gold transition-colors duration-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-cream/50 text-xs tracking-wider uppercase mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 flex items-center justify-center border border-warm-gray/30 text-cream/70 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Embedded Map */}
            <div className="relative overflow-hidden h-[250px] border border-warm-gray/20">
              <iframe
                title="Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(80%) contrast(1.1) brightness(0.8)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map overlay for styling */}
              <div className="absolute inset-0 border border-gold/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
