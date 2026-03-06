import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiPhone, FiNavigation } from 'react-icons/fi'

const locations = [
  {
    name: 'San Fernando',
    address: 'Plaza Comercial San Fernando, Piso 1, Local 35, Via Espana',
    phone: '261-3949',
    hours: 'Lun-Vie: 8am-6pm | Sab: 8am-1pm',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d-79.52!3d8.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDc5wrAzMScwMC4wIlc!5e0!3m2!1ses!2spa!4v1',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Clayton Mall',
    address: 'Clayton Mall, Piso 1, Local 24, Clayton',
    phone: '261-3949',
    hours: 'Lun-Vie: 8am-6pm | Sab: 8am-1pm',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d-79.56!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDc5wrAzMycwMC4wIlc!5e0!3m2!1ses!2spa!4v1',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Costa Verde',
    address: 'Terrazas de Costa Verde, La Chorrera',
    phone: '261-3949',
    hours: 'Lun-Vie: 8am-6pm | Sab: 8am-1pm',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d-79.78!3d8.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDc5wrA0NicwMC4wIlc!5e0!3m2!1ses!2spa!4v1',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
  },
]

export default function Locations() {
  const [selected, setSelected] = useState(0)

  return (
    <section id="sucursales" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-red-brand font-semibold text-sm tracking-wider uppercase">
            Nuestras Sucursales
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-4">
            Cerca de <span className="text-red-brand">ti</span>
          </h2>
          <p className="text-gray-warm text-lg">
            Tres ubicaciones estrategicas en Panama para tu comodidad.
          </p>
        </motion.div>

        {/* Location Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {locations.map((loc, i) => (
            <button
              key={loc.name}
              onClick={() => setSelected(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                selected === i
                  ? 'bg-red-brand text-white shadow-lg shadow-red-brand/30'
                  : 'bg-red-50 text-dark hover:bg-red-100'
              }`}
            >
              <FiMapPin />
              {loc.name}
            </button>
          ))}
        </div>

        {/* Selected Location */}
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Info Card */}
          <div className="bg-cream rounded-2xl p-8">
            <div className="relative h-48 rounded-xl overflow-hidden mb-6">
              <img
                src={locations[selected].image}
                alt={locations[selected].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-white font-[var(--font-heading)] text-2xl font-bold">
                {locations[selected].name}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-red-brand text-lg mt-1 flex-shrink-0" />
                <p className="text-dark">{locations[selected].address}</p>
              </div>
              <div className="flex items-start gap-3">
                <FiClock className="text-red-brand text-lg mt-1 flex-shrink-0" />
                <p className="text-dark">{locations[selected].hours}</p>
              </div>
              <div className="flex items-start gap-3">
                <FiPhone className="text-red-brand text-lg mt-1 flex-shrink-0" />
                <a href={`tel:+507${locations[selected].phone.replace('-', '')}`} className="text-dark hover:text-red-brand transition-colors">
                  {locations[selected].phone}
                </a>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/message/G6P6F5HZG5OAJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-brand text-white text-center py-3 rounded-full font-semibold hover:bg-red-dark transition-colors"
              >
                Agenda tu Cita
              </a>
              <a
                href={`https://www.google.com/maps/search/:Dental+Group+${locations[selected].name}+Panama`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border-2 border-red-brand text-red-brand font-semibold hover:bg-red-brand hover:text-white transition-all"
              >
                <FiNavigation className="text-sm" />
                Ir
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[400px] lg:h-auto bg-gray-100">
            <iframe
              src={locations[selected].mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa ${locations[selected].name}`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
