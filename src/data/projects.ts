export interface RealProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  highlight?: string;
}

export const realProjects: RealProject[] = [
  {
    id: "visionguide",
    title: "VisionGuide",
    subtitle: "Dispositivo de Asistencia Visual & Web App",
    description: "Sistema wearable creado para asistir a personas con discapacidad visual. Mediante sensores ultrasónicos y una aplicación web en tiempo real, detecta obstáculos e informa qué objeto se encuentra, a qué distancia y en qué dirección. Presentado con éxito en la Expo-Bienal 2023.",
    tags: ["Arduino", "C++", "Sensores Ultrasónicos", "Web App", "Impresión 3D", "Accesibilidad"],
    liveUrl: "https://whimsical-gnome-48e4b6.netlify.app/",
    image: "/images/visionguide-web.png",
    highlight: "Presentado en Expo-Bienal 2023"
  },
  {
    id: "brumapage",
    title: "Brumapage",
    subtitle: "Catálogo Web Comercial de Productos",
    description: "Plataforma web comercial diseñada para la exhibición y presentación de productos con diseño limpio, maquetado adaptable y optimización para todos los dispositivos móviles.",
    tags: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "Netlify"],
    liveUrl: "https://bruuma.netlify.app/",
    githubUrl: "https://github.com/agusfussi/Brumapage",
    image: "/images/bruma-web.png",
    highlight: "Sitio Web en Vivo"
  },
  {
    id: "tiendanube",
    title: "Tienda Nube & E-Commerce",
    subtitle: "Canal Digital de Ventas",
    description: "Integración para tiendas virtuales y catálogos online, optimizando la exhibición de inventario y facilitando la experiencia de compra digital con diseño moderno y responsive.",
    tags: ["E-Commerce", "JavaScript", "HTML5", "CSS3", "APIs", "Web"],
    liveUrl: "https://agusfussi.github.io/tienda-nube/",
    githubUrl: "https://github.com/agusfussi/tienda-nube",
    image: "/images/tiendanube-web.png",
    highlight: "Sitio Web en Vivo"
  },
  {
    id: "gmp-sueldos",
    title: "Gestión de Vacaciones & Sueldos",
    subtitle: "Software de Escritorio para GMP Equipamientos",
    description: "Aplicación de escritorio personalizada desarrollada para automatizar el cálculo de liquidación de sueldos y la administración de vacaciones del personal en empresa familiar, con base de datos local y panel intuitivo.",
    tags: ["Tauri", "React", "TypeScript", "SQLite", "Desktop App"],
    highlight: "En producción interna"
  },
  {
    id: "sistema-alumnos",
    title: "Sistema de Alumnos",
    subtitle: "Software de Gestión Académica",
    description: "Sistema para administración de estudiantes y calificaciones desarrollado para el ámbito universitario en C# y .NET, con arquitectura orientada a objetos y persistencia estructurada.",
    tags: ["C#", ".NET", "Bases de Datos", "POO"],
    githubUrl: "https://github.com/agusfussi/Sistema-de-alumnos"
  }
];
