import { motion } from 'framer-motion'
import { Utensils, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Características', href: '#features' },
      { name: 'Cómo Funciona', href: '#how-it-works' },
      { name: 'Demo', href: '#mini-demo' }
    ],
    company: [
      { name: 'Equipo', href: '#team' },
      { name: 'Contacto', href: '#contact' },
      { name: 'Soporte', href: '#contact' }
    ]
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900/80 border-t border-slate-700 py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-lg">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">PlatoAgíl</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate-300 mb-6 max-w-md leading-relaxed"
            >
              Digitaliza tu restaurante con menús QR, pedidos instantáneos y reservas, todo en una sola plataforma. Menos esperas, más precisión, mejor experiencia.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-sm">contacto@platoagil.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-sm">+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-sm">Medellín, Colombia</span>
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Built by */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Desarrollado con</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="text-red-400"
              >
                ❤️
              </motion.span>
              <span>por el equipo PlatoAgíl</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-slate-400 text-xs">
              <span className="bg-slate-800/50 px-2 py-1 rounded border border-slate-700">React</span>
              <span className="bg-slate-800/50 px-2 py-1 rounded border border-slate-700">Tailwind</span>
              <span className="bg-slate-800/50 px-2 py-1 rounded border border-slate-700">Framer Motion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer