export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  tagline: string;
  aboutShort: string;
  location: string;
  email: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  availableForHire: boolean;
  avatar: string;
}

export const siteConfig: SiteConfig = {
  name: "Agustín", // Puedes colocar tu nombre y apellido completo aquí
  title: "Agustín | Desarrollador Web Full Stack & Portfolio",
  role: "Desarrollador Web & Estudiante de Sistemas",
  tagline: "Creo páginas web modernas, rápidas y optimizadas para hacer crecer negocios y proyectos.",
  aboutShort: "Desarrollador enfocado en soluciones web modernas, de alto rendimiento y diseño cuidado. Combino una sólida base técnica y académica con proyectos de impacto real.",
  location: "Rosario, Argentina (Disponible remoto para todo el mundo)",
  email: "contacto@agustin.dev", // Cambia por tu email real
  whatsapp: "+5493410000000", // Cambia por tu número de WhatsApp
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  availableForHire: true,
  avatar: "/images/perfil.jpg",
};
