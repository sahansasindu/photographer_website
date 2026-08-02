import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'

const packages = [
  {
    name: 'Essential',
    price: '$499',
    description: 'Perfect for personal portraits and small shoots',
    features: [
      '1-hour photo session',
      '1 location',
      '30 edited digital photos',
      'Online gallery access',
      'Print-ready resolution',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '$1,299',
    description: 'Ideal for engagements, events, and family sessions',
    features: [
      '3-hour photo session',
      'Up to 3 locations',
      '100 edited digital photos',
      'Online gallery access',
      'Print-ready resolution',
      '10 retouched images',
      'Same-day preview sneak peeks',
    ],
    popular: true,
  },
  {
    name: 'Luxe',
    price: '$2,999',
    description: 'Complete coverage for weddings and grand events',
    features: [
      'Full-day coverage (8 hours)',
      'Unlimited locations',
      '300+ edited digital photos',
      'Online gallery access',
      'Premium photo album',
      '30 retouched images',
      'Engagement session included',
      'Second photographer',
    ],
    popular: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-charcoal-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(198,165,90,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Investment
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-cream mb-6">
            Services & Pricing
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-cream/60 max-w-2xl mx-auto leading-relaxed">
            Each package is thoughtfully designed to deliver an exceptional experience 
            from first consultation to final gallery delivery.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative group ${pkg.popular ? 'md:-mt-4 md:mb-[-16px]' : ''}`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gold text-charcoal-dark text-xs font-bold tracking-wider uppercase px-6 py-1.5">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full p-8 lg:p-10 transition-all duration-500 ${
                  pkg.popular
                    ? 'bg-charcoal-light border-2 border-gold shadow-2xl shadow-gold/10'
                    : 'bg-charcoal-light/50 border border-warm-gray/20 hover:border-gold/50 group-hover:shadow-xl group-hover:shadow-gold/5'
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="font-heading text-2xl text-cream mb-2">{pkg.name}</h3>
                  <p className="text-cream/50 text-sm mb-6">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-heading text-4xl lg:text-5xl text-gold">{pkg.price}</span>
                  </div>
                </div>

                <div className="w-full h-px bg-warm-gray/20 mb-8" />

                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <HiCheck className="text-gold mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-cream/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3.5 text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gold text-charcoal-dark hover:bg-gold-light'
                      : 'border border-gold/60 text-gold hover:bg-gold hover:text-charcoal-dark'
                  }`}
                >
                  Book This Package
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-cream/40 text-sm mt-12"
        >
          Need something custom? <a href="#contact" className="text-gold hover:text-gold-light transition-colors duration-300 underline underline-offset-4">Let's talk</a> about a tailored package for your vision.
        </motion.p>
      </div>
    </section>
  )
}
