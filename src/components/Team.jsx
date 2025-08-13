import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react'

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const teamMembers = [
    {
      name: 'Brayan Stiven Oliveros',
      role: 'Product / Full-stack',
      description: 'Arquitecto principal y líder del producto',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      gradient: 'from-orange-500 to-amber-500',
      skills: ['React', 'Node.js', 'Product Strategy']
    },
    {
      name: 'Juan David Tabares',
      role: 'Frontend',
      description: 'Especialista en experiencia de usuario',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      gradient: 'from-lime-500 to-green-500',
      skills: ['React', 'UI/UX', 'TypeScript']
    },
    {
      name: 'José Arango',
      role: 'Backend',
      description: 'Experto en sistemas y bases de datos',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      gradient: 'from-red-500 to-orange-500',
      skills: ['Python', 'PostgreSQL', 'API Design']
    },
    {
      name: 'Felipe',
      role: 'DevOps / QA',
      description: 'Infraestructura y aseguramiento de calidad',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      gradient: 'from-amber-500 to-yellow-500',
      skills: ['Docker', 'AWS', 'Testing']
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

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

  const TeamCard = ({ member, index }) => {
    return (
      <motion.div
        variants={itemVariants}
        className="card group text-center flex-shrink-0 w-full md:w-auto"
        whileHover={{ scale: 1.03, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Profile Image */}
        <div className="relative mb-6">
          <div className={`w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-r ${member.gradient}`}>
            <img
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              className="w-full h-full rounded-full object-cover border-2 border-slate-800"
              loading="lazy"
            />
          </div>
          
          {/* Floating badge */}
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white text-xs font-semibold group-hover:scale-110 transition-transform duration-300`}>
            {member.role.split(' ')[0]}
          </div>
        </div>

        {/* Name and Role */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300">
          {member.name}
        </h3>
        <p className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
          {member.role}
        </p>

        {/* Description */}
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          {member.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {member.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600 group-hover:border-orange-500/50 transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-3">
          <motion.button
            className={`w-8 h-8 rounded-full bg-gradient-to-r ${member.gradient} p-2 opacity-70 hover:opacity-100 transition-opacity duration-300`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <Github className="h-4 w-4 text-white" />
          </motion.button>
          <motion.button
            className={`w-8 h-8 rounded-full bg-gradient-to-r ${member.gradient} p-2 opacity-70 hover:opacity-100 transition-opacity duration-300`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4 text-white" />
          </motion.button>
          <motion.button
            className={`w-8 h-8 rounded-full bg-gradient-to-r ${member.gradient} p-2 opacity-70 hover:opacity-100 transition-opacity duration-300`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Email"
          >
            <Mail className="h-4 w-4 text-white" />
          </motion.button>
        </div>

        {/* Hover effect line */}
        <div className={`h-1 bg-gradient-to-r ${member.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full mt-6`} />
      </motion.div>
    )
  }

  return (
    <section id="team" className="py-20 bg-slate-800/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nuestro <span className="text-gradient">equipo</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conoce a los desarrolladores apasionados que hacen posible PlatoAgíl, combinando experiencia técnica con visión innovadora.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </motion.div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-300 ease-in-out"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {teamMembers.map((member, index) => (
                  <div key={member.name} className="w-full flex-shrink-0 px-4">
                    <TeamCard member={member} index={index} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-orange-500/80 hover:bg-orange-500 text-white p-2 rounded-full transition-colors duration-200"
              aria-label="Anterior miembro"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-orange-500/80 hover:bg-orange-500 text-white p-2 rounded-full transition-colors duration-200"
              aria-label="Siguiente miembro"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index 
                    ? 'bg-orange-500' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Ir al miembro ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-gradient mb-2">4+</div>
              <p className="text-slate-300">Años de Experiencia</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <p className="text-slate-300">Dedicación al Proyecto</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <p className="text-slate-300">Soporte Técnico</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team