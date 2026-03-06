import { FiPhone, FiMail, FiMapPin, FiInstagram, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const serviceLinks = [
  'Ortodoncia',
  'Invisalign',
  'Blanqueamiento Dental',
  'Carillas de Porcelana',
  'Implantes Dentales',
  'Odontopediatria',
  'Cirugia Maxilofacial',
  'Endodoncia',
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt=":Dental Group" className="h-12 w-12 rounded-full" />
              <span className="font-[var(--font-heading)] text-xl font-bold">:Dental Group</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              La Magia de la Sonrisa. Mas que una clinica dental, somos tu aliado
              en salud bucal con mas de 15 anos de experiencia en Panama.
            </p>
            <a
              href="https://www.instagram.com/dentalgrouppanama/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-red-light transition-colors text-sm"
            >
              <FiInstagram />
              @dentalgrouppanama
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#servicios" className="text-white/60 hover:text-red-light transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-white/60 hover:text-red-light transition-colors text-sm">Inicio</a></li>
              <li><a href="#nosotros" className="text-white/60 hover:text-red-light transition-colors text-sm">Nosotros</a></li>
              <li><a href="#resultados" className="text-white/60 hover:text-red-light transition-colors text-sm">Resultados</a></li>
              <li><a href="#equipo" className="text-white/60 hover:text-red-light transition-colors text-sm">Equipo Medico</a></li>
              <li><a href="#opiniones" className="text-white/60 hover:text-red-light transition-colors text-sm">Opiniones</a></li>
              <li><a href="#sucursales" className="text-white/60 hover:text-red-light transition-colors text-sm">Sucursales</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiPhone className="text-red-light mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+5072613949" className="text-white/60 hover:text-white transition-colors text-sm block">261-3949</a>
                  <a href="tel:+50769890222" className="text-white/60 hover:text-white transition-colors text-sm block">6989-0222</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="text-red-light mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/message/G6P6F5HZG5OAJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  WhatsApp Directo
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="text-red-light mt-1 flex-shrink-0" />
                <div className="text-white/60 text-sm">
                  <p>Lun-Vie: 8:00am - 6:00pm</p>
                  <p>Sabado: 8:00am - 1:00pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-red-light mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  San Fernando | Clayton Mall | Costa Verde
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} :Dental Group. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-sm">
            Desarrollado por{' '}
            <a
              href="https://axiomsais.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-light hover:text-white transition-colors"
            >
              Axiom Software &amp; AI Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
