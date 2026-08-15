import { motion } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

const serviceLinks = [
  { name: 'Wedding Photography', href: '#services' },
  { name: 'Portrait Sessions', href: '#services' },
  { name: 'Event Coverage', href: '#services' },
  { name: 'Nature & Landscape', href: '#services' },
]

const socials = [
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com' },
  { icon: FaPinterestP, label: 'Pinterest', href: 'https://pinterest.com' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-dark border-t border-warm-gray/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-gold/50 shadow-md flex items-center justify-center bg-black">
                <img
                  src="/logo.png"
                  alt="Dinethra Visuals"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl text-cream tracking-wider font-semibold leading-none">
                  Dinethra
                </span>
                <span className="text-[10px] text-gold tracking-[0.25em] uppercase font-medium mt-1">
                  Visuals
                </span>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed mb-6">
              Premium photography that captures the beauty, emotion, and authenticity of life's most precious moments.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center border border-warm-gray/20 text-cream/50 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/50 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg text-cream mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/50 text-sm hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter / Studio Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg text-cream mb-6">Studio Hours</h4>
            <ul className="space-y-3 text-cream/50 text-sm">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-cream/70">9:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-cream/70">10:00 AM – 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-cream/70">By Appointment</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-warm-gray/10">
              <p className="text-cream/40 text-xs tracking-wider uppercase mb-2">Email Us</p>
              <a
                href="mailto:hello@lumierestudios.com"
                className="text-gold text-sm hover:text-gold-light transition-colors duration-300"
              >
                hello@lumierestudios.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-gray/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/30 text-sm flex items-center gap-1">
              © {currentYear} Dinethra Visuals. Crafted with <HiHeart className="text-gold text-sm" /> All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-cream/30 text-xs hover:text-gold transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-cream/30 text-xs hover:text-gold transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
