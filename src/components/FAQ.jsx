import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])) // Primera pregunta abierta por defecto

  const faqs = [
    {
      question: "¿Qué necesito para implementar PlatoAgíl en mi restaurante?",
      answer: "Solo necesitas conexión a internet estable y un dispositivo (tablet, smartphone o computador) para gestionar las órdenes. Nosotros nos encargamos de configurar todo el sistema según tu menú y necesidades específicas."
    },
    {
      question: "¿Cuánto tiempo toma configurar el sistema?",
      answer: "La configuración inicial toma entre 2-4 horas dependiendo del tamaño de tu menú. Una vez configurado, tu equipo puede empezar a usar el sistema inmediatamente con una capacitación básica de 30 minutos."
    },
    {
      question: "¿Qué pasa si un cliente no tiene smartphone?",
      answer: "Los meseros pueden tomar pedidos manualmente a través de la misma plataforma en sus dispositivos. El sistema es flexible y funciona tanto para pedidos QR como para pedidos tradicionales tomados por el personal."
    },
    {
      question: "¿Se integra con mi sistema de punto de venta actual?",
      answer: "PlatoAgíl está diseñado para trabajar de forma independiente, pero puede exportar datos para sincronizar con la mayoría de sistemas POS populares. Durante la demo te mostramos las opciones de integración disponibles."
    },
    {
      question: "¿El sistema funciona sin conexión a internet?",
      answer: "El sistema requiere conexión a internet para funcionar en tiempo real. Sin embargo, tiene capacidad de almacenar pedidos temporalmente durante cortes breves de conexión y sincroniza automáticamente cuando regresa la señal."
    },
    {
      question: "¿Hay soporte técnico disponible?",
      answer: "Sí, ofrecemos soporte técnico durante horarios comerciales vía WhatsApp y email. También incluimos capacitación inicial para tu equipo y recursos de ayuda en línea para consultas rápidas."
    }
  ]

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="py-20 bg-slate-800/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Preguntas <span className="text-gradient">frecuentes</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre la implementación y uso de PlatoAgíl en restaurantes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.has(index)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden"
                >
                  <motion.button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-orange-400" />
                      ) : (
                        <Plus className="h-5 w-5 text-orange-400" />
                      )}
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-slate-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-300 mb-6">
            ¿No encuentras la respuesta que buscas?
          </p>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contactar al Equipo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ