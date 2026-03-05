export interface IService {
    id: string;
    slug: string;
    title: string;
    shortDescription: string; // Para la tarjeta en la home
    tagline: string;
    heroDescription: string;
    problemStatement: string;
    solutions: {
        title: string;
        description: string;
        icon: string;
    }[];
    benefits: string[];
    idealFor: string[];
    deliverables: string[];
    pricing: {
        plan: string;
        price: string;
        description: string;
        features: string[];
        highlighted: boolean;
    }[];
    ctaText: string;
    whatsappNumber: string;
    whatsappMessage: string;
    image: string;
}

export const servicesData: IService[] = [
    {
        id: "01",
        slug: "desarrollo-web-nextjs",
        title: "Desarrollo Web con Next.js",
        shortDescription: "Arquitectura moderna, SSR, SEO optimizado y performance extrema para productos escalables.",
        tagline: "Velocidad Extrema. Conversiones Reales.",
        heroDescription: "Tu sitio web actual te está costando clientes. Los tiempos de carga lentos y las arquitecturas desactualizadas destruyen la confianza. Construimos plataformas ultrarrápidas con Next.js diseñadas para rankear en Google y convertir visitantes en compradores.",
        problemStatement: "¿Tu negocio sufre de rebote alto y conversiones bajas?",
        solutions: [
            {
                title: "Cargas Instantáneas",
                description: "Arquitectura Server-Side Rendering (SSR) que muestra el contenido en milisegundos.",
                icon: "⚡",
            },
            {
                title: "SEO Técnico Superior",
                description: "Estructura perfecta para que los motores de búsqueda adoren e indexen tu sitio rápidamente.",
                icon: "🔍",
            },
            {
                title: "Escalabilidad Total",
                description: "Prepárate para millones de visitas sin que los servidores colapsen.",
                icon: "📈",
            }
        ],
        benefits: [
            "Hasta 3x más velocidad de carga comprobada",
            "Aumento directo en el ratio de conversión (CRO)",
            "Score Lighthouse +95 garantizado",
            "Arquitectura moderna a prueba de futuro"
        ],
        idealFor: [
            "Empresas B2B buscando proyectar autoridad",
            "Startups que necesitan validar rápido y escalar",
            "Medios y blogs con alto tráfico simultáneo"
        ],
        deliverables: [
            "Plataforma completa en Next.js 14+",
            "Código fuente optimizado y documentado",
            "Integración básica de analíticas (GA4)",
            "Despliegue a producción (Vercel/AWS)"
        ],
        pricing: [
            {
                plan: "Starter",
                price: "$25,000 MXN",
                description: "Landing page corporativa de alto impacto para validar tu oferta.",
                features: ["Diseño Premium", "Hasta 5 secciones", "Formulario de contacto", "Optimizacón SEO básica"],
                highlighted: false
            },
            {
                plan: "Pro",
                price: "$55,000 MXN",
                description: "Sitio web completo, CMS integrado y arquitectura escalable.",
                features: ["Múltiples páginas", "CMS (Sanity/Strapi)", "Blog integrado", "Animaciones avanzadas GSAP"],
                highlighted: true
            },
            {
                plan: "Enterprise",
                price: "A Medida",
                description: "Sistemas web a gran escala, integraciones personalizadas y soporte continuo.",
                features: ["Arquitectura a medida", "Integración de APIs 3eros", "Autenticación de usuarios", "Soporte prioritario 24/7"],
                highlighted: false
            }
        ],
        ctaText: "Agendar Llamada Estratégica",
        whatsappNumber: "5212722974528",
        whatsappMessage: "Hola AXCAP, estoy interesado en el servicio de Desarrollo Web con Next.js. Quisiera agendar una consulta.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "02",
        slug: "aplicaciones-web",
        title: "Aplicaciones Web Personalizadas",
        shortDescription: "Sistemas a medida, dashboards interactivos y PWAs con tecnologías de punta.",
        tagline: "Sistemas Que Trabajan Por Ti.",
        heroDescription: "Procesos manuales, hojas de cálculo interminables y software genérico que no se adapta a tu operativa estancan tu rentabilidad. Desarrollamos software a medida, ágil y seguro que resuelve exactamente los problemas únicos de tu operación.",
        problemStatement: "¿El software estándar frena el crecimiento de tu empresa?",
        solutions: [
            {
                title: "Hecho a tu Medida",
                description: "Software que se adapta a tus procesos comerciales, no al revés.",
                icon: "🎯",
            },
            {
                title: "Control Total en Dashboards",
                description: "Visualiza tus métricas y operaciones en tiempo real desde cualquier lugar.",
                icon: "📊",
            },
            {
                title: "Seguridad Bancaria",
                description: "Protegemos tus datos y los de tus usuarios con los estándares más altos del mercado.",
                icon: "🔒",
            }
        ],
        benefits: [
            "Reducción de trabajo manual rutinario",
            "Centralización de la información corporativa",
            "Acceso multiplataforma (Responsive & PWA)",
            "Propiedad intelectual total sobre el código"
        ],
        idealFor: [
            "Empresas de logística y gestión de flotillas",
            "Fintechs y administradoras de fondos",
            "Clínicas y empresas de servicios con gestión de citas"
        ],
        deliverables: [
            "Dashboard administrativo a medida",
            "Autenticación segura multi-rol",
            "Base de datos optimizada",
            "API documentada para expansiones"
        ],
        pricing: [
            {
                plan: "MVP Starter",
                price: "$85,000 MXN",
                description: "Valida tu idea en el mercado con un Producto Mínimo Viable funcional.",
                features: ["Core de negocio funcional", "Panel de administración básico", "Login seguro", "Diseño UX centrado en usuario"],
                highlighted: false
            },
            {
                plan: "Business Pro",
                price: "$150,000 MXN",
                description: "Digitalización completa de un área operativa de tu empresa.",
                features: ["Módulos múltiples", "Roles y permisos avanzados", "Reportes exportables", "Notificaciones en tiempo real"],
                highlighted: true
            },
            {
                plan: "Enterprise",
                price: "A Medida",
                description: "Sistemas core transaccionales y de alta disponibilidad.",
                features: ["Arquitectura de microservicios", "Alta disponibilidad 99.9%", "Auditoría de seguridad", "Acuerdo de Nivel de Servicio (SLA)"],
                highlighted: false
            }
        ],
        ctaText: "Cotizar mi Aplicación",
        whatsappNumber: "5212722974528",
        whatsappMessage: "Hola AXCAP, necesito desarrollar una aplicación web personalizada. Quisiera contarles mi caso.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "03",
        slug: "ecommerce",
        title: "E-commerce de Alto Rendimiento",
        shortDescription: "Tiendas online de alto rendimiento enfocadas en conversión y experiencia de usuario.",
        tagline: "Vende Más. Carga Menos.",
        heroDescription: "Cada segundo que tarda en cargar tu tienda online, pierdes miles de pesos en ventas abandonadas. Desarrollamos e-commerce con arquitecturas headless modernas que cargan instantáneamente, retienen clientes y disparan tu facturación.",
        problemStatement: "¿Tus clientes abandonan el carrito porque tu tienda es lenta y frustrante?",
        solutions: [
            {
                title: "Fricción Cero",
                description: "Flujos de checkout optimizados matemáticamente para maximizar conversiones.",
                icon: "🛒",
            },
            {
                title: "Tecnología Headless",
                description: "Separamos el frontend del backend para velocidades inigualables (Shopify Plus + Next.js).",
                icon: "🚀",
            },
            {
                title: "Gestión Omnicanal",
                description: "Controla tu inventario, envíos y campañas desde un solo panel de control maestro.",
                icon: "📦",
            }
        ],
        benefits: [
            "Aumento en el ticket promedio de compra (AOV)",
            "Reducción directa de carritos abandonados",
            "Experiencia móvil que se siente como app nativa",
            "Escalabilidad para soportar Black Fridays sin caídas"
        ],
        idealFor: [
            "Marcas DTC (Direct to Consumer) escalando",
            "Distribuidores Mayoristas (B2B)",
            "Retailers tradicionales migrando al entorno digital"
        ],
        deliverables: [
            "Frontend personalizado en Next.js",
            "Integración de pasarelas de pago (Stripe, MercadoPago)",
            "Panel de administración de productos",
            "Optimización SEO para catálogos"
        ],
        pricing: [
            {
                plan: "Storefront",
                price: "$45,000 MXN",
                description: "Tienda rápida para catálogos pequeños y medianos buscando conversiones altas.",
                features: ["Diseño a medida no-plantilla", "Carrito optimizado", "Integración básica pasarelas", "Hasta 50 productos iniciales"],
                highlighted: false
            },
            {
                plan: "Headless Pro",
                price: "$95,000 MXN",
                description: "Arquitectura avanzada para marcas que toman el e-commerce en serio.",
                features: ["Integración Shopify Storefront API", "Búsqueda algorítmica ultra-rápida", "Múltiples divisas", "Animaciones de producto premium"],
                highlighted: true
            },
            {
                plan: "Marketplace / B2B",
                price: "A Medida",
                description: "Plataformas complejas de multi-vendedor o precios por volumen.",
                features: ["Estructuras de precios dinámicos", "Integración ERP (SAP, Oracle)", "Suscripciones recurrentes", "Roles de agentes comerciales"],
                highlighted: false
            }
        ],
        ctaText: "Aumentar mis Ventas Online",
        whatsappNumber: "5212722974528",
        whatsappMessage: "Hola AXCAP, mi objetivo es escalar mis ventas online. Quiero platicar sobre un E-commerce de Alto Rendimiento.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "04",
        slug: "diseno-ui-ux",
        title: "Diseño UI/UX Estratégico",
        shortDescription: "Interfaces vanguardistas, sistemas de diseño y experiencias cinemáticas.",
        tagline: "El Diseño Que Tu Negocio Merece.",
        heroDescription: "Una mala interfaz transmite inseguridad y amateurismo. Si tu producto técnico o corporativo parece desactualizado, estás perdiendo el respeto de tus clientes. Diseñamos experiencias visuales premium, cinemáticas y funcionales que posicionan a tu marca como el líder indiscutible del mercado.",
        problemStatement: "¿Tus usuarios no entienden tu producto o tu marca se ve genérica?",
        solutions: [
            {
                title: "Psicología Visual",
                description: "Diseño basado en principios cognitivos para guiar al usuario a la acción deseada.",
                icon: "🧠",
            },
            {
                title: "Sistemas de Diseño",
                description: "Consistencia absoluta en todos tus puntos de contacto digitales.",
                icon: "🎨",
            },
            {
                title: "Prototipado de Alta Fidelidad",
                description: "Visualiza la experiencia completa antes de escribir una sola línea de código.",
                icon: "✨",
            }
        ],
        benefits: [
            "Percepción de marca posicionada como Premium/Enterprise",
            "Disminución de fricción en curvas de aprendizaje",
            "Mayor retención de usuarios activos (LTV)",
            "Ahorro drástico en tiempos de desarrollo futuros"
        ],
        idealFor: [
            "Empresas SaaS que necesitan modernizar sus plataformas",
            "Corporativos buscando un refresh de marca digital",
            "Startups en fase pre-seed requiriendo impacto para inversores"
        ],
        deliverables: [
            "Archivos en Figma organizados y reutilizables",
            "UI Kit / Design System de componentes",
            "Prototipos interactivos navegables",
            "Documentación de handoff para desarrolladores"
        ],
        pricing: [
            {
                plan: "Refresh",
                price: "$20,000 MXN",
                description: "Rediseño completo de un sitio web o flujo clave existente.",
                features: ["Auditoría UX", "Wireframes", "UI de hasta 5 pantallas", "Guía de estilos básica"],
                highlighted: false
            },
            {
                plan: "Producto Completo",
                price: "$45,000 MXN",
                description: "Diseño UX/UI end-to-end para aplicaciones nuevas o existentes.",
                features: ["Investigación de usuarios", "Arquitectura de información", "Sistema de diseño completo", "Prototipo interactivo complejo"],
                highlighted: true
            },
            {
                plan: "Retainer Mensual",
                price: "$35,000 MXN / mes",
                description: "Tu departamento de diseño élite disponible bajo demanda.",
                features: ["Horas dedicadas de diseño", "Iteraciones continuas", "Atención prioritaria", "Evolución constante del producto"],
                highlighted: false
            }
        ],
        ctaText: "Transformar mi Marca Digital",
        whatsappNumber: "5212722974528",
        whatsappMessage: "Hola AXCAP, necesito rediseñar mi experiencia digital. Quiero agendar una llamada sobre Diseño UI/UX.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "05",
        slug: "automatizacion",
        title: "Automatización e Integraciones",
        shortDescription: "Integraciones B2B, APIs, y flujos de trabajo optimizados para reducir costos operativos.",
        tagline: "Reduce Costos. Elimina el Error Humano.",
        heroDescription: "Copiar y pegar datos entre diferentes plataformas no es trabajo de un director. Eliminamos cuellos de botella mediante flujos automatizados que conectan tus CRMs, ERPs, emails y facturación para que tu equipo se concentre en tareas de alto valor.",
        problemStatement: "¿Estás perdiendo horas valiosas en tareas administrativas repetitivas?",
        solutions: [
            {
                title: "Conexión Integral",
                description: "Hacemos que tus sistemas (HubSpot, Salesforce, SAP, Stripe) hablen entre sí.",
                icon: "🔗",
            },
            {
                title: "Cero Errores Manuales",
                description: "La computadora no se cansa ni se equivoca al transferir datos críticos.",
                icon: "🤖",
            },
            {
                title: "Eficiencia Operativa",
                description: "Cierra ventas y el sistema automáticamente genera la factura, el contrato y avisa a operaciones.",
                icon: "⏱️",
            }
        ],
        benefits: [
            "Ahorro de decenas de horas laborables a la semana",
            "Ciclos de facturación y cobro instantáneos",
            "Datos unificados para decisiones informadas en tiempo real",
            "Reducción directa de costos operativos (OpEx)"
        ],
        idealFor: [
            "Agencias y consultoras escaneando operaciones",
            "Áreas de ventas con altos volúmenes de leads",
            "Departamentos de finanzas buscando conciliación automática"
        ],
        deliverables: [
            "Diagrama de arquitectura de automatización",
            "Scripts de conexión y webhooks implementados",
            "Dashboard de monitoreo de flujos",
            "Soporte y mantenimiento de APIs"
        ],
        pricing: [
            {
                plan: "Zapier/Make Pro",
                price: "$18,000 MXN",
                description: "Configuración profesional de automatizaciones No-Code complejas.",
                features: ["Hasta 5 flujos automatizados", "Integración CRM-Email-Pagos", "Lógica condicional", "Pruebas de estrés"],
                highlighted: false
            },
            {
                plan: "Custom Integration",
                price: "$45,000 MXN",
                description: "Desarrollo de integraciones personalizadas para sistemas cerrados.",
                features: ["Desarrollo de scripts en Node.js/Python", "Consumo de SOAP/REST APIs complejas", "Sincronización bidireccional", "Manejo de reintentos y errores"],
                highlighted: true
            },
            {
                plan: "Infraestructura Cloud",
                price: "A Medida",
                description: "Pipelines de datos pesados y arquitecturas serverless a escala.",
                features: ["Arquitectura Serverless (AWS/GCP)", "Manejo de miles de eventos/seg", "Lagos de datos (Data Lakes)", "Seguridad y encriptación E2E"],
                highlighted: false
            }
        ],
        ctaText: "Automatizar Mis Procesos",
        whatsappNumber: "5212722974528",
        whatsappMessage: "Hola AXCAP, necesito dejar de hacer tareas manuales. Quiero cotizar Automatización e Integración para mi empresa.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "06",
        slug: "inteligencia-artificial",
        title: "Soluciones con Inteligencia Artificial",
        shortDescription: "Implementación de modelos de inteligencia artificial para potenciar su negocio.",
        tagline: "El Futuro Ya Está Aquí. Aprovéchalo.",
        heroDescription: "La revolución de la IA no es una moda, es una ventaja competitiva brutal. Ayudamos a empresas agresivas a implementar Inteligencia Artificial Generativa y Machine Learning para soporte hiper-personalizado a escala, análisis de datos predictivo y automatización de redacción y lectura de documentos.",
        problemStatement: "¿Tus competidores están operando más rápido que tú usando Inteligencia Artificial?",
        solutions: [
            {
                title: "Agentes Autónomos (IA)",
                description: "Atención al cliente y ventas 24/7 con bots que razonan y conocen tus manuales internos usando RAG.",
                icon: "💬",
            },
            {
                title: "Visión Computacional",
                description: "Análisis de imágenes y OCR avanzado para procesar miles de documentos en segundos.",
                icon: "👁️",
            },
            {
                title: "Insights Predictivos",
                description: "Sistemas estadísticos que analizan tu historial y predicen tendencias de inventario o ventas.",
                icon: "🔮",
            }
        ],
        benefits: [
            "Resolución automática del 80% de tickets de soporte nivel 1",
            "Respuestas en formato hiper-personalizado en segundos",
            "Extracción de datos estructurados desde PDFs y facturas desordenadas",
            "Diferenciador masivo contra tu competencia directa"
        ],
        idealFor: [
            "Empresas de E-commerce con alto volumen de soporte",
            "Despachos contables, legales y notarías (manejo documental)",
            "Sector médico y de diagnóstico"
        ],
        deliverables: [
            "Desarrollo e integración de API de OpenAI/Anthropic/Llama",
            "Sistema Base de Datos Vectorial (Pinecone, Qdrant)",
            "Interfaz de chat o panel de control integrado",
            "Tuning de prompts y arquitectura RAG segura"
        ],
        pricing: [
            {
                plan: "Agent Starter",
                price: "$35,000 MXN",
                description: "Un chatbot entrenado con los datos de tu empresa operando en WhatsApp o tu Web.",
                features: ["Integración con GPT-4o / Claude", "Sistema RAG documental básico", "Prompt Engineering inicial", "Widget Web integrado"],
                highlighted: false
            },
            {
                plan: "AI Business System",
                price: "$85,000 MXN",
                description: "Sistemas avanzados de IA que ejecutan acciones reales (reservas, cotizaciones).",
                features: ["Agent Function Calling", "Bases de datos vectoriales a escala", "Flujos automatizados de IA + Zapier", "Análisis de sentimientos"],
                highlighted: true
            },
            {
                plan: "ML Custom Models",
                price: "A Medida",
                description: "Entrenamiento de modelos fundacionales, Fine-Tuning y alojamiento propio.",
                features: ["Modelos Open Source (Llama, Mixtral)", "Privacidad Total (On-Premise/Private Cloud)", "Fine-Tuning con Data Proprietaria", "Redes Neuronales Especializadas"],
                highlighted: false
            }
        ],
        ctaText: "Implementar IA en Mi Negocio",
        whatsappNumber: "5212722974528",
        whatsappMessage: "Hola AXCAP, estoy listo para usar Inteligencia Artificial para ganar competitividad. Me gustaría agendar una llamada exploratoria.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    }
];
