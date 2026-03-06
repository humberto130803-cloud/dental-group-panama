import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const services = [
  {
    title: 'Ortodoncia',
    desc: 'Brackets autoligados, de zafiro y convencionales para alinear tu sonrisa con la mejor tecnologia.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80',
    price: 'Desde B/.2,280',
  },
  {
    title: 'Invisalign',
    desc: 'Alineadores transparentes y removibles. Corrige tu sonrisa sin que nadie lo note.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    price: 'Desde B/.5,200',
  },
  {
    title: 'Blanqueamiento Dental',
    desc: 'Sesiones en consultorio con tecnologia Air Flow. Resultados visibles desde la primera cita.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
    price: 'Desde B/.180',
  },
  {
    title: 'Carillas de Porcelana',
    desc: 'Carillas personalizadas con matices naturales para una sonrisa de pelicula. Resultados permanentes.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80',
    price: 'Consultar',
  },
  {
    title: 'Implantes Dentales',
    desc: 'Recupera tus piezas dentales con implantes de titanio de alta calidad y durabilidad garantizada.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    price: 'Desde B/.1,000',
  },
  {
    title: 'Odontopediatria',
    desc: 'Los "Magos de la Sonrisa" cuidan la salud bucal de los mas pequenos con amor y paciencia.',
    image: 'https://images.unsplash.com/photo-1514149739-832f5de5cce9?auto=format&fit=crop&w=600&q=80',
    price: 'Desde B/.40',
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-20 lg:py-28 bg-cream overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-red-brand font-semibold text-sm tracking-wider uppercase">
            Nuestros Servicios
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-4">
            Tratamientos para cada{' '}
            <span className="text-red-brand">sonrisa</span>
          </h2>
          <p className="text-gray-warm text-lg">
            Ofrecemos una gama completa de servicios dentales con los mas altos
            estandares de calidad y tecnologia.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                <div className="absolute bottom-3 right-3 bg-red-brand text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {service.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-warm text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <a
                  href="https://wa.me/message/G6P6F5HZG5OAJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-brand font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Consultar
                  <FiArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional services note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-warm mt-12 text-sm"
        >
          Tambien ofrecemos: Cirugia Maxilofacial, Endodoncia, Periodoncia, Limpieza Air Flow,
          Coronas y Puentes Dentales, Ortopedia Maxilar y mas.
        </motion.p>
      </div>
    </section>
  )
}
