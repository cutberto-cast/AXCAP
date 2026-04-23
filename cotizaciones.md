## **Documento de Especificación de Requerimientos**

### **Sistema de Cotización Guiada para Agencia Web**

**Versión:** 1.0  
 **Fecha:** Abril 2026  
 **Proyecto:** Formulario "Ayúdame a Elegir"

---

### **1\. Introducción**

#### **1.1 Propósito**

Este documento define la especificación completa del sistema de cotización guiada para proyectos web, incluyendo todos los flujos posibles, combinaciones de respuestas y lógica de recomendación.

#### **1.2 Alcance**

El sistema no es un cotizador técnico exacto, sino un **asistente de decisión** que:

* Califica leads  
* Educa al cliente  
* Recomienda soluciones  
* Genera estimaciones de inversión  
* Captura información de contacto

---

### **2\. Arquitectura del Flujo**

#### **2.1 Estructura de Preguntas**

El sistema consta de **6 bloques secuenciales** con ramificaciones condicionales:

INICIO → Bloque 1 → Bloque 2 → Bloque 3 → Bloque 4 → Bloque 5 → Bloque 6 → RESULTADO  
---

### **3\. Especificación Detallada por Bloque**

#### **BLOQUE 1: Madurez del Negocio**

##### **Pregunta 1.1: Identidad Visual**

**Texto:** "¿Ya cuentas con identidad visual definida? (logo, colores, tipografía)"

**Opciones:**

* `A1` \- Sí, tengo todo definido  
* `B1` \- Tengo logo pero nada más  
* `C1` \- No tengo nada todavía

**Variables generadas:**

* `madurez_marca`: \[alta | media | baja\]  
* `requiere_branding`: \[no | parcial | completo\]

---

##### **Pregunta 1.2: Estado del Negocio**

**Texto:** "¿En qué etapa se encuentra tu negocio?"

**Opciones:**

* `A2` \- Ya estoy vendiendo/operando activamente  
* `B2` \- Estoy por lanzar en las próximas semanas  
* `C2` \- Apenas estoy iniciando (más de 1 mes)  
* `D2` \- Es solo una idea por ahora

**Variables generadas:**

* `urgencia`: \[alta | media | baja | exploración\]  
* `madurez_negocio`: \[operativo | prelanzamiento | startup | concepto\]

**Reglas condicionales:**

* Si `D2` → Mostrar mensaje: *"Perfecto. Te ayudaremos a sentar bases sólidas desde el inicio."*  
* Si `A2` \+ `C1` → Flag: `alerta_inconsistencia` (negocio activo sin marca)

---

#### **BLOQUE 2: Tipo de Proyecto**

##### **Pregunta 2.1: Objetivo Principal**

**Texto:** "¿Cuál es tu objetivo principal con el sitio web?"

**Opciones:**

* `A3` \- Mostrar mis servicios profesionales  
* `B3` \- Vender productos físicos  
* `C3` \- Vender productos digitales/servicios online  
* `D3` \- Mostrar mi portafolio/trabajos  
* `E3` \- Recibir reservas/citas  
* `F3` \- Generar leads/contactos  
* `G3` \- Informar sobre mi empresa/organización  
* `H3` \- Otro (campo abierto)

**Mapeo a tipos de proyecto:**

| Opción | tipo\_proyecto | Categoría |
| ----- | ----- | ----- |
| A3 | `sitio_servicios` | Informativo |
| B3 | `ecommerce_fisico` | Transaccional |
| C3 | `ecommerce_digital` | Transaccional |
| D3 | `portafolio` | Exhibición |
| E3 | `reservas` | Transaccional |
| F3 | `landing_leads` | Conversión |
| G3 | `institucional` | Corporativo |
| H3 | `personalizado` | Custom |

---

##### **Pregunta 2.2: Funcionalidades Específicas (Condicional)**

**Mostrar solo si:**

* `B3` o `C3` seleccionado (ecommerce)

**Texto:** "¿Necesitas alguna de estas funcionalidades?"

**Opciones (múltiple selección):**

* `A4` \- Gestión de inventario  
* `B4` \- Envíos con paqueterías  
* `C4` \- Múltiples métodos de pago  
* `D4` \- Membresías o suscripciones  
* `E4` \- Cupones y descuentos  
* `F4` \- Panel de afiliados  
* `G4` \- Ninguna de estas

**Variables generadas:**

* `complejidad_ecommerce`: \[básica | intermedia | avanzada\]  
  * Básica: 0-1 selecciones  
  * Intermedia: 2-3 selecciones  
  * Avanzada: 4+ selecciones

---

**Mostrar solo si:**

* `E3` seleccionado (reservas)

**Texto:** "¿Qué tipo de reservas necesitas gestionar?"

**Opciones:**

* `A5` \- Citas individuales (consultorio, salón de belleza)  
* `B5` \- Reservas de espacios/salas  
* `C5` \- Eventos o experiencias grupales  
* `D5` \- Alquiler de productos/equipos

**Mapeo:**

* `A5` → `sistema_citas_simple`  
* `B5` → `sistema_espacios`  
* `C5` → `sistema_eventos`  
* `D5` → `sistema_inventario_temporal`

---

#### **BLOQUE 3: Nivel de Personalización**

##### **Pregunta 3.1: Preferencia de Diseño**

**Texto:** "¿Qué tan importante es que el diseño sea 100% único y personalizado?"

**Opciones:**

* `A6` \- Muy importante, quiero algo totalmente original  
* `B6` \- Importante, pero puede partir de referencias  
* `C6` \- No es prioritario, prefiero rapidez y costo  
* `D6` \- No estoy seguro

**Variables generadas:**

* `nivel_diseño`: \[premium | personalizado | plantilla | indefinido\]

**Combinaciones con Bloque 1:**

| Identidad Visual | Respuesta 3.1 | Recomendación |
| ----- | ----- | ----- |
| A1 (tiene todo) | A6 o B6 | Diseño personalizado |
| A1 | C6 | Plantilla premium adaptada |
| C1 (sin marca) | A6 | Paquete completo (branding \+ web custom) |
| C1 | C6 | Paquete básico con marca simple |

---

##### **Pregunta 3.2: Referencias Visuales**

**Texto:** "¿Tienes ejemplos de sitios que te gusten?"

**Opciones:**

* `A7` \- Sí, tengo 2-3 referencias claras  
* `B7` \- Tengo ideas pero no ejemplos concretos  
* `C7` \- Confío en que me asesoren

**Variables generadas:**

* `claridad_vision`: \[alta | media | baja\]

---

#### **BLOQUE 4: Alcance y Complejidad**

##### **Pregunta 4.1: Volumen de Contenido**

**Texto (dinámico según tipo\_proyecto):**

**Si `sitio_servicios` o `institucional`:** "¿Cuántos servicios/secciones aproximadamente mostrarás?"

* `A8` \- 1-3 servicios  
* `B8` \- 4-8 servicios  
* `C8` \- 9-15 servicios  
* `D8` \- Más de 15

**Si `ecommerce_fisico` o `ecommerce_digital`:** "¿Cuántos productos planeas tener inicialmente?"

* `A9` \- Menos de 20 productos  
* `B9` \- 20-50 productos  
* `C9` \- 50-200 productos  
* `D9` \- Más de 200 productos

**Si `portafolio`:** "¿Cuántos proyectos/trabajos mostrarás?"

* `A10` \- Menos de 10 trabajos  
* `B10` \- 10-30 trabajos  
* `C10` \- Más de 30 trabajos

**Mapeo a complejidad:**

* Opciones A → `volumen`: bajo  
* Opciones B → `volumen`: medio  
* Opciones C → `volumen`: alto  
* Opciones D → `volumen`: muy\_alto

---

##### **Pregunta 4.2: Idiomas**

**Texto:** "¿El sitio necesita estar en varios idiomas?"

**Opciones:**

* `A11` \- Solo español  
* `B11` \- Español e inglés  
* `C11` \- 3 o más idiomas

**Variables generadas:**

* `multiidioma`: \[no | dual | múltiple\]  
* `complejidad_contenido`: \+0 | \+20% | \+40%

---

##### **Pregunta 4.3: Integraciones**

**Texto:** "¿Necesitas conectar tu sitio con otras herramientas?"

**Opciones (múltiple selección):**

* `A12` \- CRM (HubSpot, Salesforce, etc.)  
* `B12` \- Email marketing (Mailchimp, etc.)  
* `C12` \- WhatsApp Business  
* `D12` \- Redes sociales  
* `E12` \- Pasarelas de pago  
* `F12` \- ERP o sistema interno  
* `G12` \- Google Analytics/Facebook Pixel  
* `H12` \- Ninguna por ahora

**Variables generadas:**

* `integraciones_count`: número  
* `requiere_desarrollo_api`: boolean  
  * True si `A12` o `F12` seleccionado

---

#### **BLOQUE 5: Expectativas y Alineación**

##### **Pregunta 5.1: Presupuesto Referencial**

**Texto:** "¿Qué rango de inversión tienes contemplado?"

**Mensaje previo:** *"Esto nos ayuda a recomendarte la mejor opción según tu capacidad. No es un compromiso."*

**Opciones:**

* `A13` \- Menos de $15,000 MXN  
* `B13` \- $15,000 \- $35,000 MXN  
* `C13` \- $35,000 \- $70,000 MXN  
* `D13` \- $70,000 \- $150,000 MXN  
* `E13` \- Más de $150,000 MXN  
* `F13` \- Prefiero no especificar

**Variables generadas:**

* `presupuesto_rango`: \[muy\_bajo | bajo | medio | alto | premium | indefinido\]

---

##### **Pregunta 5.2: Tiempo Esperado**

**Texto:** "¿En cuánto tiempo necesitas el sitio?"

**Opciones:**

* `A14` \- Lo antes posible (menos de 2 semanas)  
* `B14` \- En 3-4 semanas  
* `C14` \- En 1-2 meses  
* `D14` \- Tengo flexibilidad (más de 2 meses)

**Variables generadas:**

* `urgencia_tiempo`: \[crítica | alta | normal | flexible\]

**Reglas de validación:**

* Si `A14` \+ `A6` (diseño custom) → Mostrar advertencia: *"Un diseño 100% personalizado requiere más tiempo. ¿Prefieres ajustar expectativas de diseño o de tiempo?"*  
  * Reajustar `nivel_diseño`  
  * Reajustar `urgencia_tiempo`

---

##### **Pregunta 5.3: Gestión de Contenido**

**Texto:** "¿Quién creará el contenido del sitio? (textos, fotos, videos)"

**Opciones:**

* `A15` \- Ya tengo todo el contenido listo  
* `B15` \- Tengo parte, necesito ayuda con el resto  
* `C15` \- Necesito que me ayuden con todo  
* `D15` \- No estoy seguro

**Variables generadas:**

* `servicio_contenido`: \[no | parcial | completo | indefinido\]  
* `costo_adicional_contenido`: \[0% | 15% | 35% | TBD\]

---

#### **BLOQUE 6: Captura de Lead**

##### **Formulario de Contacto**

**Texto introductorio:** *"¡Perfecto\! Basado en tus respuestas, tenemos una recomendación para ti. Déjanos tus datos para enviarte la propuesta personalizada."*

**Campos requeridos:**

* `nombre_completo` (text)  
* `email` (email, validación)  
* `telefono` (tel, validación México)  
* `nombre_negocio` (text)

**Campos opcionales:**

* `sitio_web_actual` (url)  
* `comentarios_adicionales` (textarea)

**Checkbox obligatorio:**

* Acepto el aviso de privacidad y términos de servicio

---

### **4\. Motor de Recomendación**

#### **4.1 Matriz de Decisión**

El sistema calcula una recomendación basada en **puntajes ponderados**:

SCORE\_TOTAL \= (tipo\_proyecto × 30%) \+   
              (nivel\_diseño × 25%) \+   
              (complejidad × 20%) \+   
              (alcance × 15%) \+   
              (madurez × 10%)

#### **4.2 Tipos de Solución Finales**

| Solución | Características | Rango de Inversión |
| ----- | ----- | ----- |
| **Landing Page Express** | 1 página, plantilla, contenido del cliente | $8,000 \- $15,000 |
| **Sitio Catálogo** | 5-8 páginas, diseño semi-personalizado | $15,000 \- $30,000 |
| **Sitio Corporativo** | 8-15 páginas, diseño personalizado, SEO básico | $30,000 \- $60,000 |
| **E-commerce Básico** | Hasta 50 productos, plantilla premium | $35,000 \- $55,000 |
| **E-commerce Avanzado** | \+50 productos, personalizado, integraciones | $60,000 \- $120,000 |
| **Portafolio Premium** | Diseño único, animaciones, optimizado | $25,000 \- $50,000 |
| **Sistema de Reservas** | Calendario, pagos, notificaciones | $40,000 \- $80,000 |
| **Solución Enterprise** | Multi-idioma, integraciones complejas, custom | $100,000+ |

---

#### **4.3 Reglas de Asignación**

##### **Regla 1: Landing Page Express**

SI:  
  tipo\_proyecto \= "landing\_leads"  
  Y volumen \= "bajo"  
  Y nivel\_diseño \= "plantilla"  
  Y multiidioma \= "no"  
  Y integraciones\_count \<= 2  
ENTONCES:  
  recomendar \= "Landing Page Express"  
  precio\_base \= $12,000

##### **Regla 2: Sitio Catálogo**

SI:  
  tipo\_proyecto IN \["sitio\_servicios", "institucional"\]  
  Y volumen \= "bajo" O "medio"  
  Y nivel\_diseño \= "personalizado"  
  Y complejidad\_ecommerce \= NULL  
ENTONCES:  
  recomendar \= "Sitio Catálogo"  
  precio\_base \= $22,000  
    
  AJUSTES:  
  \+ multiidioma \= "dual" → \+$8,000  
  \+ servicio\_contenido \= "completo" → \+$10,000

##### **Regla 3: E-commerce Básico**

SI:  
  tipo\_proyecto IN \["ecommerce\_fisico", "ecommerce\_digital"\]  
  Y volumen IN \["bajo", "medio"\]  
  Y complejidad\_ecommerce \= "básica"  
ENTONCES:  
  recomendar \= "E-commerce Básico"  
  precio\_base \= $42,000  
    
  AJUSTES:  
  \+ B4 (envíos) → \+$6,000  
  \+ D4 (membresías) → \+$12,000

##### **Regla 4: E-commerce Avanzado**

SI:  
  tipo\_proyecto IN \["ecommerce\_fisico", "ecommerce\_digital"\]  
  Y (volumen \= "alto" O "muy\_alto" O complejidad\_ecommerce \= "avanzada")  
ENTONCES:  
  recomendar \= "E-commerce Avanzado"  
  precio\_base \= $75,000  
    
  AJUSTES:  
  \+ F4 (afiliados) → \+$18,000  
  \+ A12 (CRM) → \+$12,000  
  \+ volumen \= "muy\_alto" → \+$20,000

##### **Regla 5: Validación de Presupuesto**

SI:  
  precio\_calculado \> presupuesto\_rango.max × 1.3  
ENTONCES:  
  mostrar\_advertencia \= True  
  mensaje \= "Tu proyecto tiene un alcance mayor al presupuesto indicado.   
             Te recomendamos empezar con una versión inicial más acotada."  
    
  OFRECER:  
  \- Versión MVP (funcionalidades core)  
  \- Plan por fases  
---

### **5\. Pantalla de Resultado**

#### **5.1 Estructura del Resultado**

┌─────────────────────────────────────────┐  
│   Tu Recomendación Personalizada        │  
└─────────────────────────────────────────┘

📊 RESUMEN DE TU PROYECTO

Tipo: \[nombre\_legible\_tipo\_proyecto\]  
Complejidad: \[Básica/Media/Alta\]  
Tiempo estimado: \[X semanas\]

────────────────────────────────

💡 RECOMENDACIÓN

Por lo que nos comentaste, tu proyecto encaja mejor con:

  \[NOMBRE\_SOLUCIÓN\]  
    
  Incluye:  
  • \[Característica 1\]  
  • \[Característica 2\]  
  • \[Característica 3\]  
    
────────────────────────────────

💰 INVERSIÓN ESTIMADA

Rango: $XX,XXX \- $XX,XXX MXN

Desglose:  
\- Diseño y desarrollo: $XX,XXX  
\- \[Servicio adicional 1\]: $X,XXX  
\- \[Servicio adicional 2\]: $X,XXX

────────────────────────────────

📅 PRÓXIMOS PASOS

1\. Revisaremos tu información  
2\. Te enviaremos una propuesta detallada en 24-48h  
3\. Agendaremos una videollamada para resolver dudas

\[BOTÓN: SOLICITAR PROPUESTA FORMAL\]

#### **5.2 Mensaje Según Alineación**

**Si presupuesto alineado:**

✅ Tu presupuesto está alineado con el alcance del proyecto.

**Si presupuesto bajo:**

⚠️ El alcance que buscas requiere una inversión mayor.   
   Te recomendamos iniciar con una versión MVP que incluya \[funcionalidades\_core\].  
   Inversión inicial: $XX,XXX

**Si presupuesto alto:**

💎 Con tu presupuesto podemos agregar:  
   • \[Mejora sugerida 1\]  
   • \[Mejora sugerida 2\]  
---

### **6\. Lógica de Almacenamiento**

#### **6.1 Objeto de Datos del Lead**

json  
{  
  "lead\_id": "uuid",  
  "timestamp": "2026-04-21T10:30:00Z",  
  "contacto": {  
    "nombre": "",  
    "email": "",  
    "telefono": "",  
    "negocio": "",  
    "sitio\_actual": ""  
  },  
  "respuestas": {  
    "bloque\_1": {  
      "identidad\_visual": "A1",  
      "estado\_negocio": "B2"  
    },  
    "bloque\_2": {  
      "objetivo": "B3",  
      "funcionalidades\_ecommerce": \["A4", "C4"\]  
    },  
    "bloque\_3": {  
      "preferencia\_diseno": "A6",  
      "referencias": "A7"  
    },  
    "bloque\_4": {  
      "volumen": "B9",  
      "idiomas": "A11",  
      "integraciones": \["C12", "E12", "G12"\]  
    },  
    "bloque\_5": {  
      "presupuesto": "C13",  
      "tiempo": "B14",  
      "contenido": "B15"  
    }  
  },  
  "variables\_calculadas": {  
    "tipo\_proyecto": "ecommerce\_fisico",  
    "nivel\_diseño": "premium",  
    "complejidad": "intermedia",  
    "volumen": "medio",  
    "madurez\_negocio": "prelanzamiento",  
    "urgencia": "alta"  
  },  
  "recomendacion": {  
    "solucion": "E-commerce Avanzado",  
    "precio\_min": 60000,  
    "precio\_max": 85000,  
    "tiempo\_semanas": 6,  
    "alertas": \["presupuesto\_ajustado"\],  
    "servicios\_adicionales": \[  
      "Creación parcial de contenido"  
    \]  
  },  
  "score\_calificacion": 87,  
  "prioridad": "alta"  
}  
---

### **7\. Casos Edge y Validaciones**

#### **7.1 Validaciones por Bloque**

**Bloque 2:**

* Si selecciona "Otro" → Campo obligatorio de texto (min 20 caracteres)

**Bloque 4:**

* Si `integraciones` incluye "ERP" → Activar flag `requiere_llamada_tecnica`

**Bloque 5:**

* Si `A14` (urgencia crítica) \+ precio\_calculado \> $50,000 → Mostrar mensaje: *"Proyectos de este alcance requieren al menos 4 semanas. ¿Podemos ajustar el calendario?"*

#### **7.2 Reglas de Descalificación Automática**

El sistema NO descalifica leads, pero marca con flags:

FLAG "fuera\_de\_alcance":  
  SI presupuesto \= "A13" Y precio\_calculado \> $40,000

FLAG "expectativas\_irreales":  
  SI urgencia \= "A14" Y complejidad \= "alta"

FLAG "requiere\_consultoria":  
  SI tipo\_proyecto \= "personalizado" Y claridad\_vision \= "baja"  
---

### **8\. Anexos**

#### **8.1 Tabla de Combinaciones Más Comunes**

| Perfil | Respuestas Típicas | Recomendación | Precio |
| ----- | ----- | ----- | ----- |
| Emprendedor inicial | C1, D2, A3, C6, A8, A11, A13 | Landing Page Express | $8-15K |
| Negocio local establecido | B1, A2, A3, B6, B8, A11, B13 | Sitio Catálogo | $20-35K |
| Tienda online pequeña | A1, B2, B3, C6, B9, A11, C13 | E-commerce Básico | $35-55K |
| Profesional creativo | A1, A2, D3, A6, B10, A11, B13 | Portafolio Premium | $25-45K |
| Empresa mediana | A1, A2, G3, B6, C8, B11, D13 | Sitio Corporativo Multi-idioma | $60-90K |

#### **8.2 Mensajes de Orientación**

**Para presupuestos muy bajos:**

"Entendemos que cada proyecto tiene su presupuesto.   
Te recomendamos empezar con \[solución\_básica\] y expandir después.  
Inversión inicial: $X,XXX que cubre lo esencial para empezar a operar."

**Para proyectos indefinidos:**

"Notamos que algunas decisiones aún están por definirse.  
Te recomendamos una sesión de consultoría estratégica (sin costo)   
para clarificar el alcance antes de cotizar."  
---

### **9\. Implementación Técnica (Recomendaciones)**

#### **9.1 Stack Sugerido**

* Frontend: React \+ TypeScript  
* Estado: Zustand o Context API  
* Validaciones: Zod  
* Backend: Node.js \+ Express  
* Base de datos: PostgreSQL o MongoDB  
* Email: SendGrid o Resend

#### **9.2 Estructura de Componentes**

\<QuoteWizard\>  
  \<ProgressBar /\>  
  \<QuestionBlock\>  
    \<QuestionText /\>  
    \<OptionsList /\>  
    \<Navigation /\>  
  \</QuestionBlock\>  
  \<ResultScreen /\>  
\</QuoteWizard\>  
---

### **10\. Métricas de Éxito**

* **Tasa de completado:** \> 60%  
* **Tiempo promedio:** 3-5 minutos  
* **Conversión a propuesta:** \> 40%  
* **Precisión de cotización:** ±15% del precio final

