import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'

const reviews = [
  {
    name: 'María G.',
    rating: 5,
    text: 'Excelente atención desde la primera cita. El Dr. Samuel me explicó todo el proceso de ortodoncia con mucha paciencia. Estoy encantada con los resultados.',
    treatment: 'Ortodoncia',
    timeAgo: 'Hace 2 meses',
  },
  {
    name: 'Carlos R.',
    rating: 5,
    text: 'Me hice el blanqueamiento y quedé impresionado con los resultados inmediatos. El equipo es muy profesional y el ambiente es muy cómodo.',
    treatment: 'Blanqueamiento Dental',
    timeAgo: 'Hace 1 mes',
  },
  {
    name: 'Ana L.',
    rating: 5,
    text: 'Llevé a mi hija de 6 años y la Dra. Aurora fue increíble. Mi hija salió feliz y sin miedo. Los Magos de la Sonrisa hacen magia de verdad.',
    treatment: 'Odontopediatría',
    timeAgo: 'Hace 3 meses',
  },
  {
    name: 'Roberto M.',
    rating: 5,
    text: 'Las carillas de porcelana que me hizo el Dr. Quirós quedaron naturales y perfectas. Cambiaron mi vida por completo. 100% recomendado.',
    treatment: 'Carillas de Porcelana',
    timeAgo: 'Hace 2 semanas',
  },
  {
    name: 'Patricia V.',
    rating: 5,
    text: 'Tenía mucho miedo de la cirugía pero el Dr. Enzo Cano me dio total confianza. Todo salió perfecto. ¡Gracias Dental Group!',
    treatment: 'Cirugía Maxilofacial',
    timeAgo: 'Hace 4 meses',
  },
  {
    name: 'Luis F.',
    rating: 5,
    text: 'Invisalign fue la mejor decisión. Nadie nota que llevo alineadores y mi sonrisa está cambiando increíblemente. ¡Gracias Dr. Samuel!',
    treatment: 'Invisalign',
    timeAgo: 'Hace 1 mes',
  },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const prev = () => {
    setAutoPlay(false)
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  }
  const next = () => {
    setAutoPlay(false)
    setCurrent((c) => (c + 1) % reviews.length)
  }

  return (
    <section
      id="opiniones"
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
            Testimonios
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-4">
            Lo que dicen nuestros{' '}
            <span className="text-red-brand">pacientes</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <FcGoogle className="text-2xl" />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-warm text-sm">
              5.0 en Google Reviews
            </span>
          </div>
        </motion.div>

        {/* Review Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400 text-xl" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-dark text-lg sm:text-xl leading-relaxed mb-8 font-[var(--font-heading)] italic">
                "{reviews[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-brand rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {reviews[current].name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-dark">{reviews[current].name}</div>
                    <div className="text-gray-warm text-sm">{reviews[current].treatment}</div>
                  </div>
                </div>
                <span className="text-gray-warm text-sm hidden sm:block">{reviews[current].timeAgo}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-dark hover:bg-red-brand hover:text-white transition-colors"
              aria-label="Review anterior"
            >
              <FiChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoPlay(false); setCurrent(i) }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-red-brand w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-dark hover:bg-red-brand hover:text-white transition-colors"
              aria-label="Siguiente review"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
