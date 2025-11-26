# Guía de Estilo – CicloBeef Studio

## 1. Identidad Visual

**Nombre de marca:** CicloBeef Studio  
**Tagline:** Arte de alta gama, historia y sociedad  
**Misión:** Democratizar el acceso al arte histórico con piezas que conecten visualmente pasado y presente.  
**Visión:** Convertirse en la referencia global de arte impreso de inspiración histórica con enfoque social.  
**Valores:**  
- Elegancia  
- Investigación rigurosa  
- Impacto cultural  
- Exclusividad

---

## 2. Paleta de Colores

| Uso | Color | HEX |
|-----|-------|------|
| Primario | Negro profundo | `#1A1A1A` |
| Secundario | Bronce clásico | `#BFA56D` |
| Fondo claro | Blanco puro | `#FFFFFF` |
| Acento | Rojo oscuro | `#8B0000` |
| Neutros | Gris claro | `#F5F5F5`, `#777777` |

---

## 3. Tipografía

- **Titulares:** `Playfair Display`, serif  
  Tamaño base: `2.5rem`, Peso: `700`  
- **Texto general:** `Inter`, sans-serif  
  Tamaño base: `1rem`, Peso: `400`  
- **Citas o destacados:** *Itálica*, color `#8B0000`  

---

## 4. Botones y Enlaces

**.btn-primary**  
- Fondo: `#BFA56D`, Texto: `#FFFFFF`  
- Padding: `12px 24px`  
- Radio: `4px`  
- Hover: fondo `#8B0000`  

**Enlaces**  
- Color por defecto: `#BFA56D`  
- Hover: `#8B0000`  
- Sin subrayado

---

## 5. Layout General

**Header:**  
- Fondo: `#1A1A1A`, Logo en blanco  
**Footer:**  
- Fondo: `#1A1A1A`, Texto: `#F5F5F5`  
**Contenedor:**  
- `.container { max-width: 1100px; padding: 1rem; }`

---

## 6. Estilo de Imágenes

- Formato: WebP o PNG  
- Ancho máximo: `1200px` en desktop  
- Estilo visual: alta resolución, iluminación contrastada, tonos sobrios  
- Márgenes: `80px` vertical en desktop, `40px` en móvil  

---

## 7. Espaciado

- Línea base: `1.6`
- `h1`: margen superior `60px` desktop / `40px` móvil  
- Párrafos: márgenes `24px` arriba y abajo  

---

## 8. Versionado del Proyecto

- `v0.1.0`: Estructura base  
- `v0.2.0`: Landing institucional  
- `v0.3.0`: Branding corporativo + documentación  
- `v0.4.0`: Backend FastAPI  
- `v0.5.0`: Frontend dinámico React

---

## 9. Flujo de Trabajo GitFlow

- `main`: producción estable  
- `develop`: integración de features  
- `feature/design-v3`: rama de branding actual  
- `release/0.3.0`: rama de estabilización antes del despliegue  
- Tags: `v0.3.0` (desencadena despliegue)

---
