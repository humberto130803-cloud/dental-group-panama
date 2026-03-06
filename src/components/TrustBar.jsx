import { motion } from 'framer-motion'
import { FiStar, FiAward, FiShield, FiUsers } from 'react-icons/fi'

const trustItems = [
  { icon: FiStar, text: 'Calificación 5 Estrellas en Google' },
  { icon: FiAward, text: 'Invisalign Provider Certificado' },
  { icon: FiShield, text: 'Tecnología Digital de Punta' },
  { icon: FiUsers, text: '+45,000 Pacientes Satisfechos' },
]

export default function TrustBar() {
  return (
    <section className="bg-red-brand py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 justify-center"
            >
              <item.icon className="text-white/90 text-xl flex-shrink-0" />
              <span className="text-white text-xs sm:text-sm font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
