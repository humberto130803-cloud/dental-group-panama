import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
  {
    q: 'Cuanto tiempo dura un tratamiento de ortodoncia?',
    a: 'El tiempo varia segun cada caso, generalmente entre 12 y 24 meses. En tu primera consulta, nuestros especialistas te daran un estimado preciso basado en tu situacion.',
  },
  {
    q: 'Es doloroso el blanqueamiento dental?',
    a: 'No. Nuestro blanqueamiento en consultorio es un procedimiento comodo y seguro. Algunos pacientes pueden sentir una leve sensibilidad temporal que desaparece rapidamente.',
  },
  {
    q: 'Que diferencia hay entre Invisalign y brackets?',
    a: 'Invisalign usa alineadores transparentes removibles, ideales para quienes buscan discrecion. Los brackets son fijos y pueden ser mas efectivos en casos complejos. En tu consulta evaluamos cual es mejor para ti.',
  },
  {
    q: 'Atienden ninos?',
    a: 'Si! Nuestro equipo de odontopediatria, los "Magos de la Sonrisa", esta especialmente entrenado para atender a los mas pequenos con amor, paciencia y tecnicas de manejo conductual.',
  },
  {
    q: 'Cuales son las formas de pago?',
    a: 'Aceptamos efectivo, tarjetas de credito y debito, cheques y ofrecemos planes de financiamiento para tratamientos mayores. Consultanos para mas detalles.',
  },
  {
    q: 'Necesito cita previa o puedo llegar directo?',
    a: 'Recomendamos agendar tu cita via WhatsApp o telefono para garantizar tu espacio. En caso de emergencias dentales, atendemos sin cita previa.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-red-brand font-semibold text-sm tracking-wider uppercase">
            Preguntas Frecuentes
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-dark mt-3">
            Resolvemos tus <span className="text-red-brand">dudas</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-dark pr-4">{faq.q}</span>
                <span className="flex-shrink-0 w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-brand">
                  {open === i ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-warm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
