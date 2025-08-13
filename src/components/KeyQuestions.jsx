import { motion } from 'framer-motion'
import { HelpCircle, Clock, MapPin, Target, CheckCircle, Users } from 'lucide-react'

const KeyQuestions = () => {
  const questions = [
    {
      icon: Target,
      question: '¿Qué es PlatoAgíl?',
      answer: 'Una plataforma integral que digitaliza completamente la operación de tu restaurante.',
      color: 'from-orange-500 to-amber-600'
    },
    {
      icon: Users,
      question: '¿Para quiénes?',
      answer: 'Restaurantes que buscan mejorar eficiencia y experiencia del cliente.',
      color: 'from-lime-500 to-green-500'
    },
    {
      icon: CheckCircle,
      question: '¿Cómo funciona?',
      answer: 'Los clientes escanean QR, ordenan digitalmente y el equipo gestiona todo en tiempo real.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: MapPin,
      question: '¿Dónde se usa?',
      answer: 'En cualquier tipo de restaurante: casual, fine dining, cafeterías y food courts.',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Clock,
      question: '¿Cuándo implementar?',
      answer: 'Desde el primer día de operación o como upgrade a sistemas tradicionales.',
      color: 'from-lime-600 to-green-600'
    },
    {
      icon: HelpCircle,
      question: '¿Por qué PlatoAgíl?',
      answer: 'Reduce errores, acelera servicio y aumenta satisfacción del cliente.',
      color: 'from-red-600 to-red-700'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="how-it-works" className="py-20 bg-slate-800/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Preguntas <span className="text-gradient">clave</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Todo lo que necesitas saber sobre PlatoAgíl en respuestas claras y concisas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {questions.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                {/* Question */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {item.question}
                </h3>

                {/* Answer */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.answer}
                </p>

                {/* Hover effect */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
                      <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-lime-500/10 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-semibold mb-4">
              ¿Tienes más <span className="text-gradient">preguntas</span>?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Nuestro equipo está listo para resolver todas tus dudas y ayudarte a implementar PlatoAgíl en tu restaurante.
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar Equipo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KeyQuestions