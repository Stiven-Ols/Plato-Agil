import { motion } from 'framer-motion'
import { QrCode, Zap, Calendar, Users } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: QrCode,
      title: 'Menú QR',
      description: 'Escanea y ordena en segundos.',
      image: 'https://images.unsplash.com/photo-1606742501019-12d0e08b8ee1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Código QR en mesa de restaurante'
    },
    {
      icon: Zap,
      title: 'Pedidos al Instante',
      description: 'Directo a cocina, sin papel.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Cocina moderna de restaurante'
    },
    {
      icon: Calendar,
      title: 'Reservas',
      description: 'Agenda y confirma online.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Sistema de reservas en tablet'
    },
    {
      icon: Users,
      title: 'Roles',
      description: 'Admin, Meseros y Cocina.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Equipo de trabajo en restaurante'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="py-20 bg-slate-800/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Características que <span className="text-gradient">transforman</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Descubre cómo PlatoAgíl revoluciona la experiencia gastronómica con tecnología avanzada y fácil de usar.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="card group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-6 h-48">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect line */}
                <div className="h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full mt-4" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
                      <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">
              Todo integrado en una sola plataforma
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              No más sistemas separados. PlatoAgíl conecta cada parte de tu restaurante para una operación fluida y eficiente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features