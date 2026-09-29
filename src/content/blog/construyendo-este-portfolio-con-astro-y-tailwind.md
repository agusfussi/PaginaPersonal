---
title: "Cómo construí este portfolio con Astro y Tailwind CSS: rendimiento y arquitectura"
description: "Un vistazo bajo el capó de esta web: por qué elegí Astro en lugar de una SPA tradicional, cómo organizo los componentes y cómo logro métricas perfectas."
pubDate: 2026-03-25
category: "Tecnología & Arquitectura"
tags: ["Astro", "Tailwind CSS", "Arquitectura", "Performance", "Web Development"]
author: "Tu Nombre"
readTime: "4 min de lectura"
featured: false
---

A la hora de crear mi portfolio personal y blog, tenía un objetivo claro: **la experiencia de navegación debía ser instantánea, accesible y profesional.**

Muchas veces los desarrolladores caemos en la tentación de usar herramientas sobredimensionadas para un sitio de presentación. En este artículo te cuento por qué Astro fue la elección ideal.

## ¿Por qué Astro?

1. **Zero JavaScript por defecto (Arquitectura de Islas):** A diferencia de las Single Page Applications convencionales de React o Vue que envían megabytes de JavaScript al navegador, Astro compila a HTML estático ultraliviano y solo hidrata los componentes interactivos que realmente lo necesitan.
2. **Soporte nativo de Markdown y colecciones tipadas:** Administrar este blog es tan simple como crear archivos `.md` con tipado estricto mediante Zod, lo que previene errores en tiempo de compilación.
3. **SEO de primer nivel:** Los motores de búsqueda indexan el contenido sin necesidad de ejecutar JavaScript complejo.

## Estilo y diseño con Tailwind CSS

Utilicé Tailwind CSS con una paleta oscura moderna y minimalista:
- Contraste óptimo para lectura prolongada.
- Tipografía limpia con espaciado equilibrado.
- Componentes modulares y reutilizables para proyectos, trayectorias y publicaciones.

## Próximos pasos
El sitio seguirá evolucionando con más proyectos, nuevos artículos sobre mis avances en la facultad y guías prácticas sobre desarrollo web moderno.
