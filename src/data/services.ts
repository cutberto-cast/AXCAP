export interface IService {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
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
        slug: "paginas-web-negocios",
        title: "Páginas Web Profesionales",
        shortDescription: "Tu carta de presentación en internet. Vende más, da confianza y supérate frente a tu competencia local.",
        tagline: "Un Negocio Sin Web, Es Un Negocio Invisible.",
        heroDescription: "Hoy en día, si un cliente busca tu servicio en Google o redes sociales y no encuentra una página web profesional, se irá con la competencia. Una página de Facebook ya no es suficiente. Diseñamos páginas web que transmiten confianza, muestran tu catálogo de servicios y atraen a nuevos clientes todos los días en piloto automático.",
        problemStatement: "¿Tus clientes dudan de la seriedad de tu negocio al buscarte en internet?",
        solutions: [
            {
                title: "Diseño que Da Confianza",
                description: "Una imagen impecable y moderna que refleja la calidad real de tu trabajo o productos.",
                icon: "👔",
            },
            {
                title: "Atracción de Clientes 24/7",
                description: "Tu web funciona como un vendedor incansable, mostrando tu información a quien te busque de madrugada.",
                icon: "🧲",
            },
            {
                title: "Contacto por WhatsApp Dirigido",
                description: "Botones para que quien visite tu web te mande un mensaje directo a tu celular para cerrar la venta.",
                icon: "📲",
            }
        ],
        benefits: [
            "Aumento en reservas, cotizaciones o visitas a tu local",
            "Tus clientes te percibirán más caro y profesional",
            "Muestras tus fotos, horarios y opiniones en un solo lugar",
            "Diferenciación inmediata sobre todos los competidores de tu sector"
        ],
        idealFor: [
            "Consultorios, despachos, y firmas (Abogados, Contadores, Clínicas)",
            "Negocios Locales (Talleres, Spa, Constructoras)",
            "Empresarios independientes vendiendo servicios B2B"
        ],
        deliverables: [
            "Página web enfocada en generar ventas y cotizaciones",
            "Alojamiento en internet rápido y seguro",
            "Correos corporativos (ej. ventas@tunegocio.com)",
            "Botón flotante de WhatsApp"
        ],
        pricing: [
            {
                plan: "Presencia Inicial",
                price: "Desde $5,000 MXN",
                description: "Una página web aterrizada y directa: Misión, Servicios Reales y Formulario de Contacto rápido.",
                features: ["Página Todo en Uno (One Page)", "Diseño Adaptable a Celular", "Integración de WhatsApp", "Entrega en 10 días"],
                highlighted: false
            },
            {
                plan: "Profesional Completo",
                price: "$14,500 MXN",
                description: "Múltiples páginas, ideal para empresas buscando detallar todos sus servicios y mostrar casos de éxito.",
                features: ["Páginas por cada área que prestas", "Galería de Trabajos/Proyectos", "Formularios de cotización avanzados", "Dominio .com gratis por 1 año"],
                highlighted: true
            },
            {
                plan: "Sistema Personalizado",
                price: "A Cotizar",
                description: "Para clínicas o empresas que requieren agendar citas automatizadas o procesar cobros en la web directamente.",
                features: ["Sistema de Citas Online", "Pasarela de Cobros (Stripe/MercadoPago)", "Soporte Técnico Mensual"],
                highlighted: false
            }
        ],
        ctaText: "Cotizar mi Página Web",
        whatsappNumber: "5212722974528",
        whatsappMessage: "Hola AXCAP, un cliente más se me fue por no tener buena presencia. Quisiera cotizar una Página Web Profesional y dejar de perder ventas.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "02",
        slug: "menus-digitales-sistemas",
        title: "Menús Digitales y Sistemas de Venta",
        shortDescription: "Toma el control. Catálogo online para que tus clientes pidan fácil, y un panel para administrar precios y stock.",
        tagline: "Domina tus Precios, Menús y Entregas.",
        heroDescription: "Los PDFs en WhatsApp son incómodos de leer y pesados. Los sistemas de delivery (UberEats, DiDi) te quitan el 30% en comisiones. Te entregamos un sistema propio: Tus clientes ven un Menú Dinámico atractivo donde hacen su pedido que llega a tu WhatsApp, y tú entras a un panel para cambiar precios en un tap, esconder lo que ya se agotó y ver métricas.",
        problemStatement: "¿Cansado de mandar fotos pesadas y perder tiempo al teléfono levantando órdenes?",
        solutions: [
            {
                title: "Catálogo Online (Tienda)",
                description: "Un link (misushi.com) donde la gente navega por categorías y pide de forma independiente.",
                icon: "🍔",
            },
            {
                title: "Auto-Administrable por Ti",
                description: "Sube productos, apaga lo que ya no hay y sube precios desde tu celular sin llamarle a nadie.",
                icon: "📱",
            },
            {
                title: "Pedidos Directo al Celular",
                description: "El cliente selecciona, y el sistema te escupe un WhatsApp con: 'Pedido #51: 2 Pizzas, Dirección X, Total $200'.",
                icon: "💬",
            }
        ],
        benefits: [
            "Evitas cobros altos pagando 0% de comisiones por venta a apps",
            "Ahorra horas en atención al cliente, la plataforma levanta el pedido",
            "Tu menú siempre está al día, nunca más 'ya no tenemos de eso'",
            "Manejas tu stock en tiempo real y analizas qué productos se venden más"
        ],
        idealFor: [
            "Restaurantes, Pizzerías y Dark Kitchens",
            "Tiendas de abarrotes, Fruterías, Panaderías",
            "Bares, Cafeterías y Cervecerías con Entregas locales"
        ],
        deliverables: [
            "Sitio de Venta (Menú / Tienda) con tu Marca",
            "Panel de Administración con Usuario y Contraseña",
            "Diseñado para que la comida se vea irresistible",
            "Capacitación en uso del Panel"
        ],
        pricing: [
            {
                plan: "Menú Starter",
                price: "$8,500 MXN",
                description: "Lo que necesitas para lanzar. Catálogo en línea con los precios y sin comisiones extras.",
                features: ["Catálogo Online para Clientes", "Flujo de pedido por WhatsApp", "Diseño limpio y llamativo", "Hasta 50 artículos iniciales"],
                highlighted: false
            },
            {
                plan: "Sistema Pro",
                price: "$18,000 MXN",
                description: "Tomando el control total. Incluye el panel administrativo de tu tienda.",
                features: ["Todo el Starter", "Panel Administrativo Protegido", "Autogestor de Inventarios / Precios", "Creación de Promociones y Categorías"],
                highlighted: true
            },
            {
                plan: "Multisucursal Online",
                price: "A Medida",
                description: "Si tienes 3 restaurantes y ocupas control central de inventarios o cobros complejos con tarjeta.",
                features: ["Gestión por Sucursal", "Pasarela de Cobros Tarjeta", "Cálculos Automáticos de Envío", "Tickets o Facturación Autónoma"],
                highlighted: false
            }
        ],
        ctaText: "Agendar Demo de Sistema",
        whatsappNumber: "5212722974528",
        whatsappMessage: "Hola AXCAP, quiero dejar de pagar comisiones de apps. Quisiera ver la demo del sistema de Menú Digital y Tienda Online.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop"
    }
];

