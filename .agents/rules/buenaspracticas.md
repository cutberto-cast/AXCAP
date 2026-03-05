---
trigger: always_on
---

AXCAP
Reglas y Buenas Prácticas de Desarrollo
Sitio Web Corporativo – Guía de Estándares del Equipo
Versión 1.0  |  2026
Este documento establece las reglas que todo contribuidor del proyecto AXCAP debe conocer, respetar y aplicar.

1. Principios Fundamentales


Antes de entrar en reglas específicas, todo el equipo de AXCAP debe internalizar los siguientes principios que guían cada decisión técnica y de diseño en este proyecto.

01
El código es el producto
El sitio de AXCAP es nuestra carta de presentación. Cada línea de código refleja la calidad que ofrecemos a nuestros clientes. No se acepta código descuidado, atajos que generen deuda técnica, ni componentes sin tipado.


02
Performance primero
La performance no es opcional. Cada decisión técnica — desde importar una librería hasta renderizar un componente — debe considerar su impacto en LCP, FID y CLS. Si algo se puede hacer más ligero, se hace más ligero.


03
Consistencia sobre creatividad individual
Seguir los estándares del proyecto es más valioso que la expresión individual. El código debe verse como si lo hubiera escrito una sola persona. Esto aplica a nombres de variables, estructura de componentes, orden de imports y estilo de CSS.


04
Accesibilidad no es opcional
Cada componente interactivo debe ser navegable por teclado. Las animaciones deben respetar prefers-reduced-motion. Los colores deben pasar el contraste mínimo WCAG AA.


05
Documentar lo que no es obvio
No documentes qué hace el código — el código debe ser legible. Documenta por qué tomaste una decisión no obvia, workarounds de librerías o lógica de negocio compleja.

2. Estructura y Organización del Proyecto


2.1 Estructura de Carpetas
La estructura de carpetas es sagrada. No se crean carpetas nuevas sin consenso del equipo. Todo archivo nuevo debe ir en la ubicación correcta desde el primer día.

app/
  layout.tsx          ← Layout raíz. Solo metadata global y providers
  page.tsx            ← Homepage. Solo importa secciones, sin lógica
  globals.css         ← Variables CSS, reset, fuentes
  api/
    contact/route.ts  ← API Routes. Un folder por endpoint

components/
  sections/           ← Una sección = un archivo. PascalCase
  ui/                 ← Componentes atómicos reutilizables
  layout/             ← Header, Footer, Nav

hooks/                ← Custom hooks. Prefijo 'use'. ej: useScrollAnimation.ts
lib/                  ← Helpers, configs, clientes de servicios externos
  animations.ts       ← Configs GSAP reutilizables
  utils.ts            ← Funciones utilitarias puras
types/                ← Tipos TypeScript compartidos
public/               ← Solo assets estáticos. Optimizar antes de subir
2.2 Reglas de Nombrado
El nombrado inconsistente es uno de los mayores generadores de confusión en proyectos colaborativos. Seguir estas reglas sin excepciones:

Tipo de archivo/elemento
Convención
Ejemplo
Componentes React
PascalCase
HeroSection.tsx, ServiceCard.tsx
Custom Hooks
camelCase con prefijo use
useScrollTrigger.ts
Utilidades / helpers
camelCase
formatDate.ts, cn.ts
Constantes globales
SCREAMING_SNAKE_CASE
BRAND_COLORS, ANIMATION_DURATION
Variables y funciones
camelCase
scrollProgress, handleSubmit
Tipos e interfaces TS
PascalCase con prefijo I o T
IService, TAnimationConfig
Archivos de configuración
kebab-case
tailwind.config.ts
Clases CSS / Tailwind vars
kebab-case
--color-brand-red

3. Reglas de TypeScript


3.1 Configuración Obligatoria
El archivo tsconfig.json debe tener estas opciones activas sin excepción:

{
  "compilerOptions": {
    "strict": true,            // Nunca desactivar
    "noImplicitAny": true,      // Sin tipos implícitos
    "noUnusedLocals": true,     // Sin variables sin usar
    "noUnusedParameters": true, // Sin parámetros sin usar
    "exactOptionalPropertyTypes": true
  }
}
3.2 Reglas de Tipado

✓  Tipar explícitamente props de todos los componentes con interface
✓  Usar tipos de retorno explícitos en funciones asíncronas
✓  Preferir interface sobre type para objetos (excepto unions/intersections)
✓  Usar as const para arreglos y objetos literales inmutables

✗  Usar any — siempre existe una mejor alternativa (unknown, generic, tipo específico)
✗  Usar @ts-ignore — si el compilador protesta, el código tiene un problema real
✗  Castear con as para evadir errores en lugar de corregirlos
✗  Dejar props sin tipar en componentes React

3.3 Ejemplo: Tipado de Componente
// ✓ CORRECTO
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  // ...
}

// ✗ INCORRECTO — nunca esto
export function ServiceCard(props: any) { /* ... */ }
4. Reglas de Componentes React


4.1 Server vs Client Components
Esta es la regla más importante en Next.js App Router. Equivocarse aquí destruye la performance del sitio.

✓ Server Component (default)
✓ Client Component ('use client')
Secciones de contenido estático
Layouts, Headers, Footers
Fetch de datos SEO-críticos
Todo lo que no necesite interactividad
Componentes con useState / useEffect
Animaciones GSAP y Three.js
Event listeners (onClick, etc.)
Sliders, modales, formularios


Regla de oro: empezar siempre como Server Component. Solo agregar 'use client' cuando el componente lo requiera absolutamente. Extraer la parte interactiva a un componente hijo para minimizar el bundle del cliente.
4.2 Estructura Interna de un Componente
El orden interno de un componente debe seguir siempre esta estructura para mantener la consistencia y legibilidad:

'use client' // 1. Directiva (si aplica)

// 2. Imports externos (React, librerías)
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

// 3. Imports internos (componentes, hooks, utils, types)
import { cn } from '@/lib/utils'
import type { IServiceCardProps } from '@/types'

// 4. Constantes locales del módulo
const ANIMATION_DURATION = 0.6

// 5. Interfaz de props
interface Props { title: string; index: number }

// 6. Componente (function declaration, no arrow function para exports)
export function ServiceCard({ title, index }: Props) {
  // 7. Hooks (en orden: state, refs, context, custom hooks)
  const cardRef = useRef<HTMLDivElement>(null)

  // 8. Efectos
  useEffect(() => { /* GSAP init */ }, [])

  // 9. Handlers
  function handleMouseEnter() { /* ... */ }

  // 10. Render
  return <div ref={cardRef}>...</div>
}
4.3 Reglas Adicionales de Componentes
✓  Un componente = una responsabilidad. Si hace demasiado, dividirlo
✓  Props destructuradas en la firma del componente, nunca props.algo dentro
✓  Usar early return para estados de carga/error antes del render principal
✓  Memo y useCallback solo cuando haya evidencia de re-renders innecesarios
✗  Componentes mayores a 200 líneas sin justificación — probablemente necesitan ser divididos
✗  Lógica de negocio inline en el JSX — extraer a funciones o custom hooks
✗  useEffect con dependencias incompletas — usar el linter de React
5. Estilos y Tailwind CSS


5.1 Principios de Estilos
Tailwind CSS es la herramienta principal. No escribir CSS custom salvo que Tailwind no lo permita
Las clases de Tailwind se organizan en grupos lógicos: layout → spacing → typography → color → animation → responsive
Las variantes responsivas siguen mobile-first: sm:, md:, lg:, xl:, 2xl:
Usar la función cn() (clsx + tailwind-merge) para clases condicionales — nunca template literals

✓  cn('base-class', isActive && 'active-class', { 'error-class': hasError })
✗  `base-class ${isActive ? 'active-class' : ''}`  ← genera clases fantasma en Tailwind
5.2 Tokens de Diseño – Variables CSS
Los valores del sistema de diseño AXCAP deben vivir como variables CSS en globals.css. Nunca hardcodear colores, fuentes o tamaños directamente:

:root {
  --color-bg:        #0B0B0F;
  --color-brand-red: #E10600;
  --color-red-dark:  #8B0000;
  --color-text:      #FFFFFF;
  --color-muted:     #555555;
  --font-primary:    'Inter', 'Geist', sans-serif;
  --anim-fast:        0.3s;
  --anim-base:        0.6s;
  --anim-slow:        1.2s;
  --ease-smooth:      cubic-bezier(0.4, 0, 0.2, 1);
}
5.3 Reglas de Clases Tailwind
✓  Agrupar clases relacionadas: primero posición, luego tamaño, luego color
✓  Extraer clases repetidas a componentes o usar @apply en globals.css
✗  Clases arbitrarias como w-[347px] — indicio de que falta un token en el config
✗  Overrides !important — si se necesita, hay un problema de especificidad que resolver
6. Reglas de Animaciones (GSAP + Three.js)


6.1 Estructura de Animaciones GSAP
Todas las animaciones GSAP deben inicializarse dentro de useGSAP() de @gsap/react, o en useEffect con limpieza correcta. No inicializar GSAP fuera de hooks.

// ✓ CORRECTO — usando useGSAP con scope y cleanup automático
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger) // Registrar una sola vez, en el módulo

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.hero-title', {
      y: 60, opacity: 0, duration: 0.8,
      stagger: 0.15, ease: 'power3.out'
    })
  }, { scope: containerRef }) // scope: limita selectors al contenedor

  return <section ref={containerRef}>...</section>
}

✗  Usar document.querySelector dentro de useEffect para GSAP — usar refs o scope
✗  Crear ScrollTriggers sin agregarlos a una timeline o sin refresh() al desmontar
✗  Animar directamente estilos de Tailwind con GSAP — animar propiedades CSS directas
6.2 Configuraciones GSAP Estándar del Proyecto
Para mantener consistencia visual, usar estas configuraciones base definidas en lib/animations.ts:

// lib/animations.ts — Configuraciones estándar AXCAP

export const EASE = {
  smooth: 'power2.inOut',
  enter: 'power3.out',
  exit:  'power3.in',
  elastic: 'elastic.out(1, 0.5)',
}

export const DURATION = {
  fast:  0.3,
  base:  0.6,
  slow:  1.0,
  intro: 1.4,
}

export const STAGGER = {
  tight:  0.08,
  base:   0.15,
  loose:  0.25,
}

// Factory: animación de reveal estándar del proyecto
export function createRevealAnimation(targets: string, delay = 0) {
  return gsap.from(targets, {
    y: 50, opacity: 0,
    duration: DURATION.base,
    ease: EASE.enter,
    stagger: STAGGER.base,
    delay,
  })
}
6.3 Accesibilidad en Animaciones
Este punto es obligatorio y no negociable:

// Siempre verificar prefers-reduced-motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

if (!prefersReducedMotion) {
  // Animaciones completas
  gsap.from('.hero-title', { y: 60, opacity: 0, duration: 0.8 })
} else {
  // Versión sin movimiento — solo fade o sin animación
  gsap.from('.hero-title', { opacity: 0, duration: 0.3 })
}
6.4 Reglas de Three.js
Siempre limpiar la escena al desmontar: renderer.dispose(), geometry.dispose(), material.dispose()
Usar requestAnimationFrame con cancelAnimationFrame en el cleanup de useEffect
Limitar la complejidad de geometrías: máximo 50k polígonos en pantalla simultáneamente
Implementar detección de capacidad del dispositivo y degradar en gama baja
Las texturas deben cargarse con LoadingManager para manejar estados de carga
7. Reglas de Performance


7.1 Imágenes
Siempre usar el componente <Image> de Next.js — nunca etiquetas <img> nativas
Formatos: WebP para fotografías, SVG para íconos y logos, AVIF como alternativa moderna
Definir siempre width y height o usar fill con un contenedor posicionado
Imágenes above-the-fold: priority={true}. El resto: lazy loading por defecto
Comprimir imágenes antes de subir al repositorio: máximo 200KB por imagen

✓  <Image src='/hero.webp' alt='Hero AXCAP' width={1920} height={1080} priority />
✗  <img src='/hero.jpg' /> — sin optimización, sin lazy load, sin formato moderno