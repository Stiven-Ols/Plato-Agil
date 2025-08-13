import { useState } from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Monitor, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const MiniDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const demoData = [
    {
      icon: Smartphone,
      title: 'Flujo del Cliente',
      subtitle: 'Experiencia sin fricciones',
      steps: [
        'Escanea código QR en la mesa',
        'Explora menú con fotos y descripciones',
        'Realiza pedido con un toque',
        'Recibe confirmación y tiempo estimado',
        'Disfruta de su comida'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      alt: 'Cliente usando smartphone en restaurante',
      gradient: 'from-lime-500 to-green-500'
    },
    {
      icon: Monitor,
      title: 'Operación Interna',
      subtitle: 'Gestión centralizada',
      steps: [
        'Recepción automática del pedido',
        'Notificación inmediata a cocina',
        'Seguimiento de tiempos de preparación',
        'Confirmación de entrega por mesero',
        'Análisis de métricas en tiempo real'
      ],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      alt: 'Dashboard de gestión de restaurante',
      gradient: 'from-orange-500 to-amber-500'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demoData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demoData.length) % demoData.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const DemoCard = ({ demo, index }) => {
    const IconComponent = demo.icon
    return (
      <motion.div
        variants={itemVariants}
        className="card group flex-shrink-0 w-full"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-xl mb-6 h-64">
          <img
            src={demo.image}
            alt={demo.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          
          {/* Icon Overlay */}
          <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-r ${demo.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="h-8 w-8 text-white" />
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-1">
              {demo.title}
            </h3>
            <p className="text-slate-200 text-sm">
              {demo.subtitle}
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {demo.steps.map((step, stepIndex) => (
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: stepIndex * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 group/step"
            >
              {/* Step Number */}
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${demo.gradient} flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 group-hover/step:scale-110 transition-transform duration-200`}>
                {stepIndex + 1}
              </div>
              
              {/* Step Text */}
              <p className="text-slate-300 group-hover/step:text-white transition-colors duration-200">
                {step}
              </p>
              
              {/* Arrow */}
              {stepIndex < demo.steps.length - 1 && (
                <ArrowRight className="h-4 w-4 text-slate-500 opacity-0 group-hover/step:opacity-100 transition-opacity duration-200" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Gradient Line */}
        <div className={`h-1 bg-gradient-to-r ${demo.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full mt-6`} />
      </motion.div>
    )
  }

  return (
    <section id="mini-demo" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Mira cómo <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Desde la perspectiva del cliente hasta la operación interna, descubre el flujo completo de PlatoAgíl.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:grid lg:grid-cols-2 gap-12"
        >
          {demoData.map((demo, index) => (
            <DemoCard key={demo.title} demo={demo} index={index} />
          ))}
        </motion.div>

        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-300 ease-in-out"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {demoData.map((demo, index) => (
                  <div key={demo.title} className="w-full flex-shrink-0 px-4">
                    <DemoCard demo={demo} index={index} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-orange-500/80 hover:bg-orange-500 text-white p-3 rounded-full transition-colors duration-200 z-10"
              aria-label="Demo anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-orange-500/80 hover:bg-orange-500 text-white p-3 rounded-full transition-colors duration-200 z-10"
              aria-label="Siguiente demo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {demoData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index 
                    ? 'bg-orange-500' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Ir al demo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary group text-lg px-8 py-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar Demo Completa
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default MiniDemo