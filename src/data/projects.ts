export interface ProjectItem {
  id: string;
  title: string;
  category: 'Comercial' | 'Aplicación Web' | 'E-commerce' | 'Facultad / Académico';
  summary: string;
  description: string;
  tags: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  metrics?: string[];
  gradient: string;
  mockupType: 'browser' | 'mobile' | 'code' | 'hardware';
}

export const projectsData: ProjectItem[] = [
  {
    id: "landing-comercial",
    title: "Sitio Web Corporativo & Landing Page de Alto Rendimiento",
    category: "Comercial",
    summary: "Plataforma web comercial diseñada para captación de clientes con diseño responsivo y velocidad de carga ultrarrápida.",
    description: "Desarrollo integral desde la arquitectura de información, diseño UI/UX y maquetación responsiva hasta la optimización de SEO local e internacional. Implementa carga diferida de recursos, formulario de contacto conectado y puntuación de 99/100 en Google Lighthouse.",
    tags: ["Astro", "Tailwind CSS", "TypeScript", "SEO", "Responsive Design"],
    featured: true,
    liveUrl: "https://ejemplo.com",
    githubUrl: "https://github.com/",
    metrics: ["99/100 en PageSpeed", "Carga en < 0.8s", "Diseño Adaptable 100%"],
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    mockupType: "browser"
  },
  {
    id: "visionguide-asistencia-visual",
    title: "VisionGuide: Dispositivo de Asistencia para Personas con Discapacidad Visual",
    category: "Facultad / Académico",
    summary: "Dispositivo electrónico wearable con sensores ultrasónicos y microcontrolador para detección de obstáculos a distancia.",
    description: "Proyecto tecnológico integrador desarrollado en la Casa Salesiana San José. Diseñado para otorgar mayor autonomía y seguridad a personas no videntes mediante alertas sonoras y hápticas según la cercanía de obstáculos en tiempo real. Incluye programación en C++ sobre Arduino, diseño y montaje de circuitos y carcasa ergonómica impresa en 3D.",
    tags: ["Arduino / C++", "Sensores Ultrasónicos", "Modelado & Impresión 3D", "Hardware & Firmware", "Accesibilidad"],
    featured: true,
    image: "/images/visionguide-equipo.jpg",
    githubUrl: "https://github.com/",
    metrics: ["Proyecto Integrador", "Detección a 4m", "Prototipo 100% Funcional"],
    gradient: "from-cyan-600/20 via-teal-600/10 to-transparent",
    mockupType: "hardware"
  },
  {
    id: "ecommerce-catalogo",
    title: "Tienda Online & Catálogo Digital con Cierre por WhatsApp",
    category: "E-commerce",
    summary: "E-commerce con carrito de compras, filtros dinámicos en tiempo real y checkout directo a WhatsApp y pasarela de pago.",
    description: "Solución para emprendimientos y comercios que necesitan exhibir su inventario y cerrar ventas directas. Permite búsqueda instantánea por categorías y precios, gestión de stock y experiencia de usuario fluida sin recargas de página.",
    tags: ["JavaScript / React", "Tailwind CSS", "LocalStorage", "WhatsApp API", "Stripe"],
    featured: true,
    liveUrl: "https://ejemplo-tienda.com",
    githubUrl: "https://github.com/",
    metrics: ["Checkout en 2 pasos", "Filtros en tiempo real", "Integración WhatsApp"],
    gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
    mockupType: "browser"
  },
  {
    id: "sistema-gestion-academico",
    title: "Sistema de Gestión y Registro Universitario",
    category: "Facultad / Académico",
    summary: "Aplicación desarrollada para materias de Programación y Bases de Datos, integrando autenticación, CRUD y reportería.",
    description: "Proyecto que resuelve el flujo de inscripción de estudiantes, carga de calificaciones y generación de reportes analíticos. Implementa arquitectura en capas, validación de reglas de negocio en el backend y base de datos relacional normalizada.",
    tags: ["Node.js", "Express", "PostgreSQL", "React", "JWT Auth", "Docker"],
    featured: false,
    githubUrl: "https://github.com/",
    metrics: ["Arquitectura en Capas", "Testing Unitario", "Base Relacional"],
    gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    mockupType: "code"
  },
  {
    id: "dashboard-analytics",
    title: "Panel de Control & Dashboard Administrativo de Métricas",
    category: "Aplicación Web",
    summary: "Panel moderno con visualización de métricas en tiempo real, gráficos interactivos y control de accesos por roles.",
    description: "Plataforma administrativa orientada a negocios para monitorizar indicadores clave de rendimiento (KPIs), usuarios activos y transacciones. Diseñada bajo principios de diseño de interfaz ergonómico y modo oscuro nativo.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts", "REST API"],
    featured: false,
    liveUrl: "https://ejemplo-dashboard.com",
    githubUrl: "https://github.com/",
    metrics: ["Gráficos interactivos", "Roles & Permisos", "Modo Oscuro"],
    gradient: "from-purple-600/20 via-pink-600/10 to-transparent",
    mockupType: "browser"
  }
];
