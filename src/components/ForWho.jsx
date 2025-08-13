import { motion } from 'framer-motion'
import { Users, Shield, ChefHat, UserCheck } from 'lucide-react'

const ForWho = () => {
  const roles = [
    {
      icon: Users,
      title: 'Clientes',
      color: 'from-lime-500 to-green-500',
      benefits: [
        'Menú interactivo con imágenes y descripciones',
        'Pedidos sin esperas ni confusiones',
        'Seguimiento en tiempo real del estado'
      ]
    },
    {
      icon: Shield,
      title: 'Administración',
      color: 'from-orange-500 to-amber-500',
      benefits: [
        'Dashboard completo con métricas y reportes',
        'Gestión de menús y precios centralizada',
        'Control de inventario y análisis de ventas'
      ]
    },
    {
      icon: ChefHat,
      title: 'Cocina',
      color: 'from-red-500 to-orange-600',
      benefits: [
        'Órdenes organizadas por prioridad y tiempo',
        'Notificaciones automáticas de nuevos pedidos',
        'Sistema de confirmación de platos listos'
      ]
    },
    {
      icon: UserCheck,
      title: 'Meseros',
      color: 'from-amber-500 to-yellow-500',
      benefits: [
        'Lista de mesas y estados actualizados',
        'Comunicación directa con cocina',
        'Gestión eficiente de entrega y facturación'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Diseñado para <span className="text-gradient">todos</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            PlatoAgíl mejora la experiencia de cada persona involucrada en tu restaurante, desde los clientes hasta el equipo de trabajo.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {roles.map((role, index) => {
            const IconComponent = role.icon
            return (
              <motion.div
                key={role.title}
                variants={itemVariants}
                className="card group"
                whileHover={{ scale: 1.03, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${role.color} p-4 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-center mb-6 group-hover:text-orange-400 transition-colors duration-300">
                  {role.title}
                </h3>

                {/* Benefits */}
                <ul className="space-y-4">
                  {role.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: benefitIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${role.color} mt-2 flex-shrink-0`} />
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover effect */}
                <div className={`h-1 bg-gradient-to-r ${role.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full mt-6`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-semibold mb-4">
              Una solución <span className="text-gradient">integral</span>
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Cada rol tiene su interfaz optimizada, pero todos trabajan conectados para ofrecer la mejor experiencia posible.
            </p>
            <motion.button
              onClick={() => document.querySelector('#mini-demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Cómo Funciona
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ForWho