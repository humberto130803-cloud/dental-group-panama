import { motion } from 'framer-motion'
import { FiHeart, FiSmile, FiClock, FiCheckCircle } from 'react-icons/fi'

const features = [
  {
    icon: FiHeart,
    title: 'Atencion Personalizada',
    desc: 'Cada paciente es unico. Creamos planes de tratamiento adaptados a tus necesidades.',
  },
  {
    icon: FiSmile,
    title: 'Ambiente Relajante',
    desc: 'Un espacio pensado para tu comodidad, donde la visita al dentista es una experiencia agradable.',
  },
  {
    icon: FiClock,
    title: 'Horarios Flexibles',
    desc: 'Lunes a viernes 8am-6pm y sabados 8am-1pm. Nos adaptamos a tu agenda.',
  },
  {
    icon: FiCheckCircle,
    title: 'Tecnologia Avanzada',
    desc: 'Equipos de ultima generacion para diagnosticos precisos y tratamientos efectivos.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
                alt="Equipo dental profesional"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-red-brand text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <div className="text-3xl font-bold font-[var(--font-heading)]">15+</div>
              <div className="text-white/80 text-sm mt-1">Anos transformando sonrisas en Panama</div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-red-brand font-semibold text-sm tracking-wider uppercase">
              Sobre Nosotros
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-6 leading-tight">
              Una forma diferente de ver la{' '}
              <span className="text-red-brand">odontologia</span>
            </h2>
            <p className="text-gray-warm text-lg leading-relaxed mb-8">
              En :Dental Group, somos mas que una clinica dental. Somos un equipo de
              especialistas apasionados por crear sonrisas perfectas en un ambiente
              calido y profesional. Con tres sucursales en Panama, estamos cerca de
              ti para brindarte la mejor atencion.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <f.icon className="text-red-brand text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">{f.title}</h3>
                    <p className="text-gray-warm text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
