import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const cases = [
  {
    id: 1,
    treatment: 'Blanqueamiento Dental',
    doctor: 'Dr. Agustin Pinzon',
    desc: 'Eliminacion de manchas y pigmentos para una sonrisa mas blanca y brillante.',
    before: '/placeholder-before-1.jpg',
    after: '/placeholder-after-1.jpg',
  },
  {
    id: 2,
    treatment: 'Ortodoncia',
    doctor: 'Dr. Samuel Cedeno',
    desc: 'Brackets autoligados para cerrar espacios y alinear los dientes.',
    before: '/placeholder-before-2.jpg',
    after: '/placeholder-after-2.jpg',
  },
  {
    id: 3,
    treatment: 'Carillas de Porcelana',
    doctor: 'Dr. Pedro Quiros',
    desc: 'Carillas personalizadas con matices naturales para un color mas agradable.',
    before: '/placeholder-before-3.jpg',
    after: '/placeholder-after-3.jpg',
  },
  {
    id: 4,
    treatment: 'Limpieza Air Flow',
    doctor: ':Dental Group',
    desc: 'Eliminacion de manchas extrinsecas provocadas por alimentos y bebidas oscuras.',
    before: '/placeholder-before-4.jpg',
    after: '/placeholder-after-4.jpg',
  },
]

const filters = ['Todos', 'Blanqueamiento Dental', 'Ortodoncia', 'Carillas de Porcelana', 'Limpieza Air Flow']

export default function BeforeAfter() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? cases : cases.filter((c) => c.treatment === active)

  return (
    <section
      id="resultados"
      className="py-20 lg:py-28 bg-dark overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-red-light font-semibold text-sm tracking-wider uppercase">
            Resultados Reales
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Antes y <span className="text-red-light">Despues</span>
          </h2>
          <p className="text-white/60 text-lg">
            Casos reales de nuestros pacientes que confiaron en nosotros para
            transformar sus sonrisas.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f
                  ? 'bg-red-brand text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {filtered.map((c) => (
              <div
                key={c.id}
                className="bg-dark-light rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="grid grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gray-800 flex items-center justify-center">
                      <img
                        src={c.before}
                        alt={`Antes - ${c.treatment}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentElement.innerHTML = `
                            <div class="flex items-center justify-center h-full text-white/30 text-sm p-4 text-center">
                              Foto Antes<br/>(Placeholder)
                            </div>`
                        }}
                      />
                    </div>
                    <div className="absolute top-3 left-3 bg-dark/80 text-white text-xs px-3 py-1 rounded-full">
                      Antes
                    </div>
                  </div>
                  {/* After */}
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gray-800 flex items-center justify-center">
                      <img
                        src={c.after}
                        alt={`Despues - ${c.treatment}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentElement.innerHTML = `
                            <div class="flex items-center justify-center h-full text-white/30 text-sm p-4 text-center">
                              Foto Despues<br/>(Placeholder)
                            </div>`
                        }}
                      />
                    </div>
                    <div className="absolute top-3 right-3 bg-red-brand text-white text-xs px-3 py-1 rounded-full">
                      Despues
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold">{c.treatment}</h3>
                    <span className="text-red-light text-sm">{c.doctor}</span>
                  </div>
                  <p className="text-white/50 text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
