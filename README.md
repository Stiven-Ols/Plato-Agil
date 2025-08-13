# 🍽️ PlatoAgíl - Landing Page

Una landing page moderna y responsive para PlatoAgíl, la solución web integral para restaurantes con menús QR, pedidos directos y sistema de reservas.

## 🌐 Demo en Vivo

**[Ver PlatoAgíl en GitHub Pages](https://stiven-ols.github.io/Plato-Agil/)**

## 📋 Descripción del Proyecto

PlatoAgíl es una plataforma digital diseñada para revolucionar la experiencia gastronómica mediante la digitalización completa de la operación de restaurantes. Esta landing page presenta todas las características y beneficios del sistema.

## 🚀 Características

- **Diseño Moderno**: Estilo oscuro elegante con acentos en emerald y cyan
- **Totalmente Responsive**: Optimizado para móvil, tablet y desktop
- **Animaciones Suaves**: Implementado con Framer Motion y Lenis smooth scrolling
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Imágenes optimizadas y lazy loading
- **Accesibilidad**: Contraste AA, focus visible y aria labels

## 🛠️ Tech Stack

- **React** - Framework de interfaz
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Styling y utilidades
- **Framer Motion** - Animaciones y transiciones
- **Lenis** - Smooth scrolling
- **Lucide React** - Iconos modernos

## 📁 Estructura del Proyecto

```
platoagil/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navegación principal
│   │   ├── Hero.jsx           # Sección hero con CTAs
│   │   ├── Features.jsx       # Características del producto
│   │   ├── ForWho.jsx         # Para quiénes está diseñado
│   │   ├── KeyQuestions.jsx   # Preguntas clave sobre el producto
│   │   ├── MiniDemo.jsx       # Demo del flujo de trabajo
│   │   ├── Team.jsx           # Equipo de desarrollo
│   │   ├── CTA.jsx            # Call to action final
│   │   └── Footer.jsx         # Footer con enlaces
│   ├── App.jsx                # Componente principal
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── index.html                # HTML principal con meta tags
├── tailwind.config.js        # Configuración de Tailwind
└── package.json              # Dependencias y scripts
```

## 🎨 Secciones de la Landing

1. **Navbar**: Navegación con scroll suave y menú móvil
2. **Hero**: Título impactante, subtítulo y CTAs principales
3. **Características**: Cards con las 4 funcionalidades principales
4. **Para Quiénes**: Roles que se benefician (Clientes, Admin, Cocina, Meseros)
5. **Preguntas Clave**: 6 mini-cards con información esencial
6. **Mini Demo**: Flujo del cliente vs operación interna
7. **Equipo**: 4 miembros del equipo con avatars y skills
8. **CTA Final**: Formulario para solicitar demo
9. **Footer**: Información de contacto y enlaces

## 🚀 Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Lint del código
npm run lint
```

## 🌐 URLs de Imágenes

Todas las imágenes utilizan Unsplash con URLs optimizadas:
- Hero: Restaurante moderno con tecnología
- Features: QR codes, cocina, reservas, equipo
- Team: Avatars profesionales de personas
- Demo: Interfaces de usuario y dashboards

## 📱 Responsive Design

- **Móvil (≤640px)**: Una columna, menú hamburguesa
- **Tablet (641-1024px)**: Dos columnas adaptativas
- **Desktop (≥1024px)**: Hasta 4 columnas en grid

## ✨ Microinteracciones

- **Botones**: Hover con scale y sombras
- **Cards**: Lift effect y border glow
- **Iconos**: Rotaciones y transformaciones sutiles
- **Scroll**: Apariciones progresivas con Framer Motion

## 🎯 Criterios de Aceptación Cumplidos

- ✅ Branding 100% PlatoAgíl
- ✅ Sin planes o suscripciones visibles
- ✅ Totalmente responsive
- ✅ Imágenes libres con alt descriptivo
- ✅ Animaciones en botones y CTAs
- ✅ Transiciones on-scroll con Framer Motion
- ✅ Smooth scrolling con Lenis
- ✅ Cards dinámicas con hover effects
- ✅ Texto breve y bullets
- ✅ Sección de equipo con 4 miembros
- ✅ Meta tags de SEO
- ✅ Accesibilidad básica

## 🚀 Despliegue

Para desplegar en producción:

1. **Build del proyecto**:
   ```bash
   npm run build
   ```

2. **Subir carpeta `dist/` a tu hosting**
   - Netlify: Arrastra la carpeta dist
   - Vercel: Conecta el repo de GitHub
   - GitHub Pages: Configura el workflow

## 👥 Equipo

- **Brayan Stiven Oliveros** - Product / Full-stack
- **Juan David Tabares** - Frontend
- **José Arango** - Backend
- **Felipe** - DevOps / QA

## 📞 Contacto

- **Email**: contacto@platoagil.com
- **Teléfono**: +57 300 123 4567
- **Ubicación**: Medellín, Colombia

---

**PlatoAgíl** - Digitaliza tu restaurante con menos esperas, más precisión y mejor experiencia.