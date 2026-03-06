import { motion } from 'framer-motion'
import { FiInstagram } from 'react-icons/fi'

const doctors = [
  {
    name: 'Dr. Samuel Cedeño G.',
    specialty: 'Ortodoncia e Invisalign',
    education: 'Especialidad en Ortodoncia - Universidad Latinoamericana (México)',
    image: '/team-samuel.jpg',
  },
  {
    name: 'Dr. Agustín Pinzón',
    specialty: 'Odontología Estética',
    education: 'Especialista en rehabilitación y estética dental',
    image: '/team-agustin.jpg',
  },
  {
    name: 'Dr. Pedro Quirós',
    specialty: 'Cosmética Dental',
    education: 'Universidad de Zacatecas (México) - Rehabilitación oral e implantes',
    image: '/team-pedro.jpg',
  },
  {
    name: 'Dr. Enzo Cano',
    specialty: 'Cirugía Maxilofacial',
    education: 'Fellow en cirugía ortognática y distracción craneofacial',
    image: '/team-enzo.jpg',
  },
  {
    name: 'Dr. José Manuel Quiroz',
    specialty: 'Odontopediatría',
    education: 'Especialidad Pediátrica - Pontificia Javeriana (2006)',
    image: '/team-jose.jpg',
  },
  {
    name: 'Dra. Aurora Domínguez',
    specialty: 'Odontopediatría',
    education: 'Maestría - Universidad El Bosque (Colombia)',
    image: '/team-aurora.jpg',
  },
  {
    name: 'Dra. Mónica Shedden',
    specialty: 'Periodoncia',
    education: 'Maestría UNAM (México) - Presidenta Asociación Dental de Panamá',
    image: '/team-monica.jpg',
  },
  {
    name: 'Dr. Moisés Lukoviecky',
    specialty: 'Endodoncia',
    education: 'Post-grado Endodoncia - Universidad Santo Tomás (Bogotá)',
    image: '/team-moises.jpg',
  },
]

export default function Team() {
  return (
    <section id="equipo" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-red-brand font-semibold text-sm tracking-wider uppercase">
            Nuestro Equipo
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-4">
            Especialistas de{' '}
            <span className="text-red-brand">confianza</span>
          </h2>
          <p className="text-gray-warm text-lg">
            Un equipo multidisciplinario con formación internacional, dedicado a
            brindarte la mejor atención.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group text-center"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-red-50 to-red-100 flex flex-col items-center justify-center p-4 rounded-2xl">
                        <div class="w-20 h-20 bg-red-brand/20 rounded-full flex items-center justify-center mb-3">
                          <svg class="w-10 h-10 text-red-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                          </svg>
                        </div>
                        <span class="text-red-brand/60 text-xs font-medium">Foto del Doctor</span>
                      </div>`
                  }}
                />
              </div>
              <h3 className="font-[var(--font-heading)] text-lg font-bold text-dark">
                {doc.name}
              </h3>
              <p className="text-red-brand font-medium text-sm mt-1">{doc.specialty}</p>
              <p className="text-gray-warm text-xs mt-2 leading-relaxed">{doc.education}</p>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://www.instagram.com/dentalgrouppanama/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-brand font-semibold hover:text-red-dark transition-colors"
          >
            <FiInstagram className="text-xl" />
            Síguenos en Instagram — @dentalgrouppanama
          </a>
        </motion.div>
      </div>
    </section>
  )
}
