import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const cases = [
  {
    id: 1,
    treatment: 'Brackets Autoligados',
    doctor: 'Dr. Samuel Cedeño',
    desc: 'Corrección de mordida y alineación dental con brackets autoligados de última generación.',
    before: '/before-brackets.png',
    after: '/after-brackets.png',
  },
  {
    id: 2,
    treatment: 'Ortopedia Maxilar',
    doctor: ':Dental Group',
    desc: 'Tratamiento temprano para corregir problemas de mordida y desarrollo de los maxilares en niños.',
    before: '/before-ortopedia.png',
    after: '/after-ortopedia.png',
  },
  {
    id: 3,
    treatment: 'Limpieza Air Flow',
    doctor: ':Dental Group',
    desc: 'Eliminación de manchas extrínsecas provocadas por café, té, vino y alimentos con colorantes.',
    before: '/before-airflow.png',
    after: '/after-airflow.png',
  },
  {
    id: 4,
    treatment: 'Blanqueamiento Dental',
    doctor: 'Dr. Agustín Pinzón',
    desc: 'Aclaramiento profesional en consultorio para una sonrisa más blanca y brillante.',
    before: '/before-blanqueamiento.png',
    after: '/after-blanqueamiento.png',
  },
]

const filters = ['Todos', 'Brackets Autoligados', 'Ortopedia Maxilar', 'Limpieza Air Flow', 'Blanqueamiento Dental']

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
            Antes y <span className="text-red-light">Después</span>
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
                        alt={`Después - ${c.treatment}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-3 right-3 bg-red-brand text-white text-xs px-3 py-1 rounded-full">
                      Después
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
