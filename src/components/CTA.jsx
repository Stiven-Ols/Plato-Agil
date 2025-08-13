import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react'

const CTA = () => {
  const [email, setEmail] = useState('')
  const [restaurant, setRestaurant] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!restaurant.trim()) {
      newErrors.restaurant = 'El nombre del restaurante es requerido'
    }
    
    if (!email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Ingresa un email válido'
    }
    
    if (phone && !/^\+?[\d\s\-\(\)]+$/.test(phone)) {
      newErrors.phone = 'Ingresa un teléfono válido'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
        setRestaurant('')
        setPhone('')
        setErrors({})
      }, 4000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Comienza la <span className="text-gradient">digitalización</span> de tu restaurante
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Agenda una demo personalizada sin compromiso. Te mostramos cómo PlatoAgíl se adapta a las necesidades específicas de tu restaurante.
            </p>
          </motion.div>

          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Comienza tu <span className="text-gradient">transformación digital</span>
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">Demo personalizada adaptada a tu menú</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">Configuración inicial sin costo</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">Capacitación incluida para tu equipo</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">Soporte técnico en español</span>
                    </div>
                  </div>

                  {/* Contact Options */}
                  <div className="space-y-3">
                    <motion.a
                      href="mailto:contacto@platoagil.com"
                      className="flex items-center space-x-3 text-slate-300 hover:text-orange-400 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <Mail className="h-5 w-5" />
                      <span>contacto@platoagil.com</span>
                    </motion.a>
                    <motion.a
                      href="tel:+573001234567"
                      className="flex items-center space-x-3 text-slate-300 hover:text-orange-400 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <Phone className="h-5 w-5" />
                      <span>+57 300 123 4567</span>
                    </motion.a>
                  </div>
                </div>

                {/* Right Form */}
                <div>
                  {!isSubmitted ? (
                    <motion.form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                    >
                      <div>
                        <label htmlFor="restaurant" className="block text-sm font-medium text-slate-300 mb-2">
                          Nombre del Restaurante *
                        </label>
                        <input
                          type="text"
                          id="restaurant"
                          value={restaurant}
                          onChange={(e) => {
                            setRestaurant(e.target.value)
                            if (errors.restaurant) {
                              setErrors(prev => ({...prev, restaurant: null}))
                            }
                          }}
                          className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                            errors.restaurant 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-slate-600 focus:ring-orange-500'
                          }`}
                          placeholder="Ej: Restaurante El Buen Sabor"
                          required
                        />
                        {errors.restaurant && (
                          <p className="text-red-400 text-xs mt-1">{errors.restaurant}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                          Email de Contacto *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                            if (errors.email) {
                              setErrors(prev => ({...prev, email: null}))
                            }
                          }}
                          className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                            errors.email 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-slate-600 focus:ring-orange-500'
                          }`}
                          placeholder="tu@email.com"
                          required
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                          Teléfono (Opcional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value)
                            if (errors.phone) {
                              setErrors(prev => ({...prev, phone: null}))
                            }
                          }}
                          className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
                            errors.phone 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-slate-600 focus:ring-orange-500'
                          }`}
                          placeholder="+57 300 123 4567"
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full btn-primary group justify-center text-lg py-4"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={!email || !restaurant}
                      >
                        Solicitar Demo Personalizada
                        <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </motion.button>

                      <p className="text-xs text-slate-400 text-center">
                        Te contactaremos en menos de 24 horas para agendar una demo adaptada a tu restaurante.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-2xl font-semibold text-orange-400 mb-2">
                        ¡Solicitud Enviada!
                      </h4>
                      <p className="text-slate-300">
                        Nos pondremos en contacto contigo en menos de 24 horas para coordinar tu demo personalizada.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12 text-center"
          >
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
              <div className="text-2xl font-bold text-gradient mb-2">15 min</div>
              <p className="text-slate-300 text-sm">Tiempo promedio de implementación</p>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
              <div className="text-2xl font-bold text-gradient mb-2">98%</div>
              <p className="text-slate-300 text-sm">Satisfacción de clientes</p>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
              <div className="text-2xl font-bold text-gradient mb-2">30%</div>
              <p className="text-slate-300 text-sm">Aumento promedio en eficiencia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA