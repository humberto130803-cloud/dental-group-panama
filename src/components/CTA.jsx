import { motion } from 'framer-motion'
import { FiCalendar, FiPhone } from 'react-icons/fi'

export default function CTA() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1920&q=80"
          alt="Sonrisa perfecta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-red-brand/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Tu sonrisa perfecta esta a una cita de distancia
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Agenda tu evaluacion gratuita hoy y descubre como podemos transformar
            tu sonrisa. Mas de 45,000 pacientes ya confian en nosotros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/message/G6P6F5HZG5OAJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-brand px-8 py-4 rounded-full text-lg font-bold hover:bg-red-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <FiCalendar />
              Agenda tu Cita Gratis
            </a>
            <a
              href="tel:+5076989-0222"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-red-brand transition-all duration-300"
            >
              <FiPhone />
              Llamar Ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
