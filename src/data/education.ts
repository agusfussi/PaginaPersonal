export interface EducationItem {
  id: string;
  type: 'university' | 'highschool' | 'certification';
  title: string;
  institution: string;
  period: string;
  status: 'En curso' | 'Completado' | 'Graduado';
  description: string;
  highlights: string[];
  skills: string[];
  image?: string;
  link?: string;
}

export const educationData: EducationItem[] = [
  {
    id: "facultad",
    type: "university",
    title: "Carrera de Grado en Sistemas / Informática / Programación",
    institution: "Universidad Nacional / Facultad de Ingeniería",
    period: "2025 - Presente",
    status: "En curso",
    description: "Formación académica rigurosa en ciencias de la computación, arquitectura de software, algoritmos avanzados, estructuras de datos, diseño de bases de datos relacionales y metodologías ágiles de ingeniería.",
    highlights: [
      "Base sólida en análisis algorítmico, resolución de problemas complejos y paradigmas de programación.",
      "Desarrollo de proyectos colaborativos aplicando Git, control de versiones y estándares de la industria.",
      "Comprensión profunda de cómo interactúan el software, las redes y la infraestructura tecnológica."
    ],
    skills: ["Algoritmos & Estructuras de Datos", "Bases de Datos Relacionales", "Arquitectura de Software", "POO & Paradigmas", "Git & GitHub"]
  },
  {
    id: "secundaria",
    type: "highschool",
    title: "Educación Secundaria Técnica - Promoción 2024",
    institution: "Casa Salesiana San José (Rosario)",
    period: "2019 - 2024",
    status: "Graduado",
    description: "Culminación de estudios secundarios y técnicos en una de las instituciones más tradicionales y exigentes de Rosario. Distinguido con el honor de ser Escolta de la Bandera Nacional Argentina por destacado rendimiento académico.",
    highlights: [
      "Distinción como Escolta de la Bandera Nacional Argentina en el acto de colación de graduación.",
      "Desarrollo del proyecto integrador 'VisionGuide': dispositivo electrónico de asistencia para personas con discapacidad visual.",
      "Formación integral en pensamiento lógico, electrónica aplicada, programación de microcontroladores y trabajo en equipo."
    ],
    skills: ["Mérito Académico", "Electrónica & Sensores", "Programación Arduino / C++", "Modelado & Impresión 3D", "Lógica Matemática"],
    image: "/images/egresados-escolta.jpg"
  },
  {
    id: "cursos",
    type: "certification",
    title: "Especialización en Desarrollo Web Frontend & Full Stack",
    institution: "Formación Autodidacta Continua & Certificaciones Online",
    period: "2023 - Actualidad",
    status: "Completado",
    description: "Aprendizaje constante de las tecnologías modernas del ecosistema web para construir interfaces ultrarrápidas, accesibles y orientadas a resultados comerciales.",
    highlights: [
      "Dominio de frameworks modernos: Astro, React, TypeScript y Tailwind CSS.",
      "Desarrollo de APIs RESTful seguras, autenticación de usuarios y despliegue continuo en la nube.",
      "Optimización de Core Web Vitals, SEO técnico y accesibilidad web (a11y)."
    ],
    skills: ["Astro", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "SEO & Performance"]
  }
];
