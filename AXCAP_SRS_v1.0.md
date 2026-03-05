**AXCAP**

**Especificación de Requerimientos de Software**

Sitio Web Corporativo – Agencia Digital Premium

Versión 1.0  |  2026

*"Construimos productos digitales de alto impacto con ingeniería de clase mundial."*

# **1\. Introducción**

## **1.1 Propósito del Documento**

Este documento constituye la Especificación de Requerimientos de Software (ERS) para el desarrollo del sitio web corporativo de AXCAP, una agencia de desarrollo digital premium. Define de forma exhaustiva los requerimientos funcionales, no funcionales, de diseño y tecnológicos que deben cumplirse para la construcción del producto.

El documento está dirigido al equipo de desarrollo, diseñadores UX/UI, stakeholders del proyecto y cualquier parte interesada en el alcance y especificaciones técnicas del sitio.

## **1.2 Alcance del Proyecto**

El proyecto consiste en el diseño y desarrollo completo del sitio web institucional de AXCAP. El sitio tiene como objetivo principal posicionar a la agencia como referente premium en desarrollo de productos digitales, comunicando su propuesta de valor a través de una experiencia visual inmersiva y tecnológicamente avanzada.

## **1.3 Información General del Proyecto**

| Proyecto | Sitio Web Corporativo AXCAP |
| :---- | :---- |
| **Versión ERS** | 1.0 |
| **Tipo de proyecto** | Sitio web institucional / Agencia digital |
| **Cliente** | AXCAP |
| **Clasificación** | Confidencial |
| **Fecha de elaboración** | 2026 |

## **1.4 Definiciones y Acrónimos**

A continuación se presentan los términos clave utilizados a lo largo de este documento:

* ERS: Especificación de Requerimientos de Software

* RF: Requerimiento Funcional

* RNF: Requerimiento No Funcional

* UX: User Experience (Experiencia de Usuario)

* UI: User Interface (Interfaz de Usuario)

* CTA: Call to Action (Llamada a la Acción)

* GSAP: GreenSock Animation Platform

* SSR: Server-Side Rendering

* SEO: Search Engine Optimization

* DXA: Document Exchange Architecture (unidades tipográficas)

# **2\. Descripción General del Producto**

## **2.1 Posicionamiento de Marca**

AXCAP debe percibirse como una agencia de alto nivel técnico y estratégico, especializada en el desarrollo de productos digitales modernos. El sitio debe comunicar de forma inequívoca la siguiente propuesta de valor:

***"Construimos experiencias digitales de alto impacto con ingeniería de clase mundial."***

Los pilares de posicionamiento son:

* Agencia premium con enfoque tecnológico avanzado

* Especialistas en arquitectura moderna y rendimiento (Next.js, IA)

* Experiencia visual impactante de nivel Silicon Valley

* Soluciones digitales escalables y rentables, no solo páginas web

## **2.2 Usuarios Objetivo**

El sitio está orientado a los siguientes perfiles de usuario:

* Empresarios y emprendedores que buscan desarrollar productos digitales

* Directores de marketing y tecnología (CMO, CTO) de empresas en crecimiento

* Startups en fase de lanzamiento o escalamiento

* Empresas establecidas que buscan modernizar su presencia digital

## **2.3 Restricciones y Supuestos**

El proyecto opera bajo las siguientes restricciones:

* El sitio debe ser completamente responsivo para dispositivos móviles, tablets y escritorio

* El rendimiento en dispositivos de gama media debe mantenerse funcional, con degradación elegante de efectos 3D

* Las animaciones no deben comprometer la accesibilidad básica del sitio

* El proyecto utilizará únicamente tecnologías open-source o con licencias comerciales definidas

# **3\. Requerimientos de Diseño Visual**

## **3.1 Sistema de Color**

El sistema cromático del sitio debe adherirse estrictamente a la siguiente paleta:

| Color | Código HEX | Uso |
| :---- | :---- | :---- |
| Negro profundo | **\#0B0B0F** | Fondo principal, fondos de secciones |
| Rojo vibrante | **\#FF1E1E / \#E10600** | Acentos, CTAs, elementos interactivos |
| Rojo oscuro | **\#8B0000 (gradiente)** | Degradados, fondos de sección CTA |
| Gris grafito | **\#555555** | Texto secundario, descripciones |
| Blanco puro | **\#FFFFFF** | Texto principal sobre fondos oscuros |

## **3.2 Tipografía**

El proyecto debe utilizar tipografías bold sans-serif de estilo moderno. Las opciones preferidas son Geist, Inter o Satoshi. Las reglas tipográficas son:

* Títulos principales (H1): 72-96px, weight 800-900, mayúsculas o capitalización fuerte

* Subtítulos (H2): 36-48px, weight 700

* Cuerpo de texto: 16-18px, weight 400-500, color gris grafito

* Labels y etiquetas: 12-14px, tracking amplio (letter-spacing: 0.1em)

* El interlineado debe ser generoso para transmitir lujo y espacio: line-height mínimo 1.6

## **3.3 Estilo Visual General**

El sitio debe adherirse a los siguientes principios estéticos:

* Futurismo premium: sensación de tecnología avanzada, precisión e innovación

* Minimalismo de alto valor: abundante espacio negativo, sin ruido visual

* Cinematismo: las transiciones y animaciones deben sentirse como producción cinematográfica

* Consistencia: todos los elementos deben mantener coherencia cromática y tipográfica

# **4\. Requerimientos Funcionales**

## **4.1 Estructura del Sitio – Secciones Requeridas**

### **RF-01: Hero Section**

La sección principal del sitio debe cumplir los siguientes criterios:

* Fondo negro con sistema de partículas 3D en tonos rojos flotando mediante Three.js o Spline

* Modelo 3D flotante: esfera roja con wireframe animado

* Headline principal: 'Construimos experiencias digitales de alto impacto'

* Subheadline que explique brevemente la propuesta de valor de AXCAP

* Dos botones CTA: 'Ver portafolio' y 'Agendar consulta'

* Animación tipo text-reveal con efecto stagger en cada línea del headline (GSAP)

* Indicador de scroll animado en la parte inferior

* La sección debe ocupar el 100% del viewport (height: 100vh)

### **RF-02: Sección de Servicios**

La sección de servicios debe presentar las siguientes 6 áreas de práctica en formato de cards interactivas:

1. Desarrollo Web con Next.js

2. Aplicaciones Web Personalizadas

3. E-commerce de Alto Rendimiento

4. Diseño UI/UX Estratégico

5. Automatización e Integraciones

6. Soluciones con Inteligencia Artificial

Especificaciones de cada card:

* Ícono 3D minimalista representativo del servicio

* Título y descripción breve del servicio

* Efecto hover con iluminación roja dinámica (border-glow o light effect)

* Microanimaciones de entrada con GSAP al hacer scroll hacia la sección

* Efecto de transformación 3D perspectiva en hover (rotateX, rotateY)

### **RF-03: Proceso de Trabajo**

Esta sección debe presentar el flujo de trabajo de AXCAP en formato de timeline horizontal animado con las siguientes 6 fases:

7. Discovery: Análisis inicial, investigación de mercado y definición de objetivos

8. Estrategia: Planificación técnica, arquitectura de información y roadmap

9. Diseño: Wireframes, prototipos y sistema de diseño visual

10. Desarrollo: Implementación técnica con el stack tecnológico seleccionado

11. Optimización: Testing, performance, SEO y ajustes pre-lanzamiento

12. Lanzamiento: Despliegue, monitoreo y soporte post-lanzamiento

El progreso del timeline debe activarse mediante scroll (ScrollTrigger de GSAP), con cada fase revelándose secuencialmente.

### **RF-04: Portafolio**

La sección de portafolio debe cumplir los siguientes criterios:

* Grid premium con mockups flotantes de proyectos realizados

* Efecto hover con overlay rojo semitransparente sobre cada proyecto

* Animación tipo reveal al entrar en el viewport

* Transición suave al abrir el detalle de cada proyecto

* Cada proyecto debe mostrar: nombre, categoría, tecnologías usadas y thumbnail

* El diseño debe transmitir nivel de agencia global top

### **RF-05: Stack Tecnológico**

Sección que exhiba las tecnologías utilizadas por AXCAP. Los logos deben mostrarse en estilo monocromático (rojo/blanco) sobre fondo oscuro. El stack requerido incluye:

* Next.js, React, Node.js, Supabase, GSAP, Three.js, Vercel

* Animación de entrada escalonada de cada logo

* Posibilidad de hover que revele el nombre completo de la tecnología

### **RF-06: Testimonios**

Slider de testimonios con las siguientes características:

* Efecto depth (profundidad) entre las tarjetas activas e inactivas

* Tarjetas con estética glassmorphism oscuro: fondo semitransparente negro con borde rojo suave

* Cada testimonio debe incluir: nombre del cliente, empresa/cargo, foto (opcional) y texto

* Controles de navegación accesibles: flechas y puntos indicadores

### **RF-07: Sección CTA Final**

Sección de llamada a la acción al final del sitio con las siguientes características:

* Fondo: degradado de rojo oscuro a negro profundo

* Mensaje principal: '¿Listo para escalar tu negocio digital?'

* Un botón de CTA animado de gran tamaño, con efecto hover pulsante o glow

* El botón debe abrir un formulario de contacto o redirigir a la sección de agendamiento

### **RF-08: Footer**

El footer debe incluir los siguientes elementos:

* Logo AXCAP en versión minimalista

* Columnas: navegación rápida, servicios, contacto

* Íconos de redes sociales (LinkedIn, Instagram, Twitter/X, GitHub)

* Email de contacto

* Copyright con año dinámico

* Declaración legal: política de privacidad y términos (enlace)

### **RF-09: Formulario de Contacto / Agendamiento**

El sitio debe incluir un mecanismo de contacto con:

* Campos: nombre, empresa, email, servicio de interés, descripción del proyecto

* Validación en cliente (tiempo real) y en servidor

* Confirmación visual de envío exitoso

* Integración con servicio de email (Resend, SendGrid o similar)

* Protección anti-spam (honeypot o captcha)

# **5\. Requerimientos No Funcionales**

## **5.1 Performance (RNF-01)**

El sitio debe cumplir con los siguientes umbrales de rendimiento medidos con Google Lighthouse y Core Web Vitals:

| Métrica | Valor objetivo | Herramienta de medición |
| :---- | :---- | :---- |
| Lighthouse Performance Score | **\>= 90 / 100** | Google Lighthouse |
| Largest Contentful Paint (LCP) | **\< 2.5 segundos** | Core Web Vitals |
| First Input Delay (FID) | **\< 100 ms** | Core Web Vitals |
| Cumulative Layout Shift (CLS) | **\< 0.1** | Core Web Vitals |
| Time to First Byte (TTFB) | **\< 600 ms** | WebPageTest |
| Total Bundle Size (JS) | **\< 300 KB gzipped** | Webpack Analyzer |

## **5.2 SEO (RNF-02)**

El sitio debe implementar las siguientes optimizaciones de SEO:

* Meta tags completos: title, description, Open Graph, Twitter Cards

* Structured data con JSON-LD (Organization, WebSite, Service)

* Sitemap XML generado automáticamente

* Archivo robots.txt configurado correctamente

* URLs semánticas y limpias

* Imágenes con atributo alt descriptivo

* Headings con jerarquía correcta (H1 único por página)

* Velocidad de carga optimizada (factor de ranking Google)

## **5.3 Responsividad y Compatibilidad (RNF-03)**

El sitio debe ser completamente funcional en los siguientes breakpoints:

* Mobile S: 320px

* Mobile M/L: 375px – 425px

* Tablet: 768px

* Laptop: 1024px – 1440px

* Desktop 4K: 2560px+

Los efectos 3D complejos deben degradar elegantemente en dispositivos de bajo rendimiento, priorizando la funcionalidad sobre el efecto visual.

Compatibilidad requerida con navegadores: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+.

## **5.4 Accesibilidad (RNF-04)**

El sitio debe alcanzar nivel AA según las pautas WCAG 2.1:

* Contraste de color mínimo 4.5:1 para texto normal

* Navegación completa por teclado

* Atributos ARIA en elementos interactivos

* Respeto al prefers-reduced-motion para animaciones

* Textos alternativos en imágenes y elementos gráficos

## **5.5 Seguridad (RNF-05)**

* HTTPS obligatorio con certificado SSL válido

* Cabeceras de seguridad: CSP, X-Frame-Options, X-Content-Type-Options

* Sanitización de inputs en el formulario de contacto

* Protección contra XSS y CSRF en endpoints API

* Variables de entorno para credenciales (nunca expuestas en cliente)

## **5.6 Mantenibilidad (RNF-06)**

* Código TypeScript con tipado estricto (strict: true)

* Arquitectura modular basada en componentes reutilizables

* Documentación inline con JSDoc en funciones críticas

* Configuración de ESLint y Prettier para consistencia de código

* Estructura de carpetas clara siguiendo convenciones de Next.js App Router

# **6\. Stack Tecnológico**

## **6.1 Tecnologías Core**

| Tecnología | Versión | Propósito |
| :---- | :---- | :---- |
| **Next.js** | 14+ (App Router) | Framework principal, SSR, routing, API routes |
| **TypeScript** | 5.x | Tipado estático, mantenibilidad, DX |
| **Tailwind CSS** | 3.x | Utilidades CSS, responsive design, dark mode |
| **GSAP** | 3.x \+ ScrollTrigger | Animaciones avanzadas y scroll-driven storytelling |
| **Three.js / Spline** | r160+ | Gráficos 3D, partículas, modelos interactivos |
| **Supabase** | 2.x | Backend: base de datos, autenticación (si aplica) |
| **Node.js** | 20 LTS | Runtime del servidor, API routes |
| **Vercel** | Latest | Hosting, deploy, edge functions, CDN global |

## **6.2 Herramientas de Desarrollo**

* Control de versiones: Git \+ GitHub / GitLab

* Gestor de paquetes: pnpm (recomendado) o npm

* Linting: ESLint con configuración Next.js \+ TypeScript

* Formateo: Prettier

* Testing: Vitest / Jest para unit tests, Playwright para E2E

* CI/CD: GitHub Actions \+ Vercel Preview Deployments

# **7\. Arquitectura del Proyecto**

## **7.1 Estructura de Carpetas (Next.js App Router)**

axcap-website/├── app/│   ├── layout.tsx           \# Root layout con metadata global│   ├── page.tsx             \# Homepage (landing page)│   ├── globals.css          \# Estilos globales \+ variables CSS│   └── api/│       └── contact/route.ts \# Endpoint formulario de contacto├── components/│   ├── sections/            \# Secciones de la landing page│   │   ├── Hero.tsx│   │   ├── Services.tsx│   │   ├── Process.tsx│   │   ├── Portfolio.tsx│   │   ├── TechStack.tsx│   │   ├── Testimonials.tsx│   │   └── CTA.tsx│   ├── ui/                  \# Componentes UI reutilizables│   └── layout/              \# Header, Footer, Navigation├── lib/│   ├── animations.ts        \# Configuraciones GSAP reutilizables│   └── utils.ts             \# Helpers generales├── hooks/                   \# Custom React hooks├── types/                   \# Tipos TypeScript globales└── public/                  \# Assets estáticos

## **7.2 Patrones de Arquitectura**

* Component-Driven Development: cada sección es un componente autónomo

* Server Components por defecto: datos fetched en servidor para mejor SEO y performance

* Client Components únicamente para: animaciones, estados interactivos, Three.js

* Separación clara entre lógica de animación y lógica de negocio

* Custom hooks para lógica reutilizable de GSAP y scroll

# **8\. Especificaciones de Animaciones**

## **8.1 Principios de Animación**

Todas las animaciones deben seguir estos principios para mantener la coherencia visual premium del sitio:

* Duración base: 0.6s – 1.2s para animaciones de entrada

* Easing recomendado: power2.inOut, power3.out para movimientos naturales

* Stagger entre elementos secuenciales: 0.1s – 0.2s

* Las animaciones de scroll deben iniciar cuando el elemento entra al 20% del viewport

* Respeto absoluto a prefers-reduced-motion: desactivar todas las animaciones no esenciales

## **8.2 Animaciones por Sección**

Hero Section: text-reveal con clip-path o translateY \+ opacity, stagger entre líneas del headline, partículas 3D con velocidad de flotación aleatoria entre 0.3 y 0.8 unidades.

Servicios: cards con entrada fadeUp escalonada, efecto 3D-tilt en hover usando rotateX/rotateY de 10-15 grados.

Timeline del Proceso: barra de progreso que avanza con scroll, cada nodo de fase se activa al alcanzar su posición.

Portafolio: reveal con máscara (clip-path) desde abajo, overlay rojo en hover con transición opacity.

Tech Stack: logos con entrada escalonada tipo fade-scale, loop suave de desplazamiento horizontal (marquee)

# **9\. SEO y Metadata**

## **9.1 Configuración de Metadata (Next.js)**

El archivo app/layout.tsx debe configurar el objeto metadata de Next.js con los siguientes campos obligatorios:

* title: 'AXCAP | Agencia de Desarrollo Digital Premium'

* description: Descripción SEO-optimizada de 150-160 caracteres

* keywords: desarrollo web, Next.js, agencia digital, e-commerce, diseño UI/UX

* openGraph: imagen 1200x630px, title, description, URL canónica

* twitter: card type summary\_large\_image, handle @axcap

* robots: index, follow

* canonical: URL canónica del sitio

## **9.2 Structured Data**

Implementar los siguientes esquemas JSON-LD:

* Organization: nombre, logo, URL, redes sociales, contacto

* WebSite: nombre, URL, potentialAction (SearchAction si aplica)

* Service: por cada servicio principal del portafolio

# **10\. Integraciones y Servicios Externos**

El sitio requiere las siguientes integraciones con servicios externos:

| Servicio | Propósito | Alternativas |
| :---- | :---- | :---- |
| **Resend / SendGrid** | Envío de emails del formulario de contacto | Nodemailer \+ SMTP |
| **Google Analytics 4** | Analítica web, comportamiento de usuarios | Plausible, Fathom |
| **Vercel Analytics** | Core Web Vitals en producción | Nativo de Vercel |
| **Calendly / Cal.com** | Agendamiento de consultas | TidyCal, SavvyCal |
| **Cloudinary / Vercel Blob** | Gestión y optimización de imágenes | Next.js Image built-in |

# **11\. Plan de Fases de Desarrollo**

## **Fase 1 – Setup y Arquitectura Base**

Duración estimada: 3–5 días

* Inicialización del proyecto Next.js con TypeScript y Tailwind

* Configuración de ESLint, Prettier, Git hooks

* Definición del sistema de diseño: tokens de color, tipografía, espaciado

* Estructura de componentes base y layout principal

* Deploy inicial en Vercel con dominio de staging

## **Fase 2 – Hero y Animaciones Core**

Duración estimada: 5–7 días

* Implementación del hero section con Three.js (partículas \+ esfera)

* Configuración de GSAP y ScrollTrigger

* Animaciones de texto (text-reveal, stagger)

* Scroll indicator animado

## **Fase 3 – Secciones de Contenido**

Duración estimada: 7–10 días

* Desarrollo de sección de Servicios con cards 3D

* Timeline del proceso de trabajo

* Sección de Stack Tecnológico

* Sección de Testimonios con slider

## **Fase 4 – Portafolio y CTA**

Duración estimada: 4–6 días

* Grid de portafolio con mockups y animaciones

* Páginas de detalle de proyecto (si aplica)

* Sección CTA final y formulario de contacto

* Footer completo

## **Fase 5 – Optimización y Launch**

Duración estimada: 3–5 días

* Auditoría completa de Lighthouse y Core Web Vitals

* Optimización de imágenes y assets

* Testing cross-browser y responsive

* Configuración de analytics y monitoreo

* Deploy a producción con dominio final

# **12\. Criterios de Aceptación**

El proyecto se considerará completado exitosamente cuando se verifiquen todos los siguientes criterios:

13. Lighthouse Performance Score \>= 90 en modo desktop y \>= 75 en mobile

14. Todas las secciones definidas (RF-01 a RF-09) implementadas y funcionales

15. Animaciones GSAP y Three.js operando a 60fps en hardware de gama media

16. Diseño responsivo validado en los breakpoints especificados (RF, sección 5.3)

17. Formulario de contacto envía emails correctamente y tiene validación

18. Meta tags y structured data correctamente implementados

19. Compatibilidad verificada en Chrome, Firefox, Safari y Edge

20. Sitio desplegado en Vercel con dominio personalizado y HTTPS

21. Código en repositorio con historial de commits limpio y documentado

22. Revisión y aprobación final por parte del equipo AXCAP

# **13\. Historial de Versiones**

| Versión | Fecha | Descripción | Autor |
| :---- | :---- | :---- | :---- |
| 1.0 | 2026 | Versión inicial del documento – alcance completo del sitio AXCAP | Equipo AXCAP |

