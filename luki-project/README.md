# Luki — Prototipo web

Prototipo funcional de la landing page de Luki, construido con React + TypeScript + Tailwind CSS. Incluye la pantalla de carga, header flotante, hero con teléfono, el scroll-story del producto, secciones de producto/método, nosotros/fundadores/colegios, la biblioteca de aprendizaje con filtros y guías hipotecarias, el CTA final y el footer.

Junto a este proyecto se entrega también **`luki-prototipo.html`**, una versión de un solo archivo (HTML + CSS + JS, sin dependencias) con el mismo diseño y las mismas animaciones, para que puedas abrirla directamente en el navegador sin instalar nada.

---

## 1. Cómo ejecutar el proyecto

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev
```

Esto levanta un servidor local (Vite) e imprime una URL tipo `http://localhost:5173`. Ábrela en el navegador.

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

> Nota: en este entorno de generación del prototipo no había acceso a internet, por lo que `npm install` no se ejecutó aquí. Al correrlo en tu máquina debería instalar todo sin problemas (son dependencias estándar: react, vite, tailwind).

---

## 2. Cómo reemplazar las imágenes y textos

Todo el contenido reemplazable vive en **`src/data/`**, para que puedas actualizarlo sin tocar los componentes:

| Archivo | Qué controla |
|---|---|
| `src/data/nav.ts` | Ítems del menú principal |
| `src/data/founders.ts` | Fundadores: nombre, rol, bio, LinkedIn, foto |
| `src/data/articles.ts` | Artículos y videos de la biblioteca de aprendizaje, y los filtros/tabs |
| `src/data/mortgageGuides.ts` | Filas de la tabla de guías hipotecarias (tasas, plazos, bancos) |
| `src/data/phoneScenes.ts` | Textos de las 5 escenas del scroll-story |
| `src/data/method.ts` | Los 4 pasos del Método Luki |

**Logo:** el símbolo de 4 cuadrados se recreó como SVG/CSS en `src/components/LogoMark.tsx` (tal como pedía el brief), así que escala perfecto y no depende de un archivo de imagen. Si quieres usar el PNG original en vez del recreado, reemplaza el contenido de ese componente por un `<img src="/logo-mark.svg" />` apuntando a un archivo que coloques en `/public`.

**Fotos de fundadores:** hoy se muestran como iniciales sobre un fondo de color (placeholder elegante). Para poner una foto real, agrega la imagen a `/public/founders/` y completa el campo `photoUrl` en `src/data/founders.ts`.

**Ilustraciones de "Nosotros" / colegios:** actualmente son un placeholder con degradado y etiqueta "Ilustración pendiente" (`AboutSection.tsx`). Reemplázalo por una imagen o ilustración real cuando esté disponible.

**Videos de YouTube:** `src/components/VideoCard.tsx` y `ContentModal.tsx` están listos para recibir un `youtubeId` / URL de embed real; hoy el modal muestra un mensaje de "contenido demostrativo" porque no hay videos reales cargados.

---

## 3. Lógica del scroll (resumen)

- **Reveal on scroll:** el hook `useReveal` (en `src/hooks/useReveal.ts`) usa un `IntersectionObserver` para agregar la clase `in` a cualquier elemento con clase `reveal` cuando entra en pantalla, activando su animación de aparición. Se usa en casi todas las secciones.
- **Scroll-story del teléfono:** `ScrollStory.tsx` + el hook `useActiveScene` observan 5 bloques de texto (uno por escena). Cuando un bloque cruza el 55% del viewport, se marca como activo y el componente cambia el contenido del teléfono (`PhoneScreens.tsx`) con un crossfade. El teléfono se mantiene fijo (`position: sticky`) mientras el texto se desplaza al lado.
- **Método Luki:** `LukiMethod.tsx` anima los 4 pasos en cascada (con un pequeño delay entre cada uno) la primera vez que la sección entra en pantalla.
- Todo el movimiento respeta `prefers-reduced-motion`: si el usuario lo activa, las transiciones se desactivan globalmente (ver `index.css`).

---

## 4. Pendientes que necesitan contenido real

- Fotografías o ilustraciones reales para "Nosotros" y la sección de colegios.
- Roles, biografías y fotos reales de los 3 fundadores.
- Artículos y videos reales de la biblioteca de aprendizaje, con fuentes oficiales citadas (CMF, Banco Central, SERNAC, Superintendencia de Pensiones, etc.). Todo lo actual está marcado como "Contenido demostrativo".
- Datos reales de la tabla de guías hipotecarias (bancos, tasas, plazos, requisitos, seguros), con fecha de actualización y enlace a la fuente oficial de cada banco.
- Videos de YouTube reales conectados a `VideoCard` / `ContentModal`.
- Logo definitivo en alta resolución si se quiere reemplazar la versión SVG recreada.
- Enlaces reales de descarga de la app (App Store / Google Play) en los botones "Descarga la app".
- Enlaces a redes sociales, FAQ y política de privacidad/términos (hoy son placeholders `#`).

---

## 5. Sugerencias para una segunda iteración

1. **Micro-interacciones en el header:** indicador animado (subrayado o "pill" deslizante) que siga al link activo en vez de solo cambiar de color.
2. **Video real en el hero:** reemplazar el mockup estático por una grabación corta de la app real una vez exista.
3. **Personalización del scroll-story:** hoy cambia por sección; se podría sincronizar más finamente con el progreso de scroll (0–100%) usando `scroll-timeline` / CSS scroll-driven animations cuando el soporte de navegadores lo permita, reduciendo la dependencia de JS.
4. **A/B test del titular:** probar "Tu plata, pero más clara" contra alternativas más directas como "Ordena tu plata, sin dramas" para medir cuál convierte mejor en el hero.
5. **Modo oscuro** opcional, manteniendo la paleta verde pero invirtiendo los fondos, para uso nocturno.
6. **Analítica de aprendizaje:** trackear qué categorías de contenido genera más clics, para priorizar qué artículos reales escribir primero.
7. **Guías hipotecarias dinámicas:** conectar la tabla a una base de datos/API real en vez de datos estáticos, con badge de "actualizado hace X días".
8. **Accesibilidad:** hacer una pasada de auditoría con lector de pantalla real y verificar contraste AA en todos los estados de hover/focus.

---

## 6. Estructura del proyecto

```
src/
  components/       Todos los componentes de la página (ver lista abajo)
  data/             Archivos de datos editables (ver tabla arriba)
  hooks/            useReveal, useActiveScene (lógica de scroll reutilizable)
  index.css         Estilos globales + tokens de diseño (colores, tipografía)
  App.tsx           Ensambla todas las secciones
  main.tsx          Punto de entrada de React

Componentes: LoadingScreen, LogoMark, Header, MobileMenu, Hero, PhoneMockup,
PhoneScreens, ScrollStory, ProductSection, LukiMethod, AboutSection,
SchoolsSection, FoundersSection, LearningHub, ArticleCard, VideoCard,
ContentModal, MortgageGuideCard, FinalCTA, Footer.
```

Los tokens de diseño (colores, radios, tipografía) están centralizados como variables CSS en `index.css` y también expuestos en `tailwind.config.ts` por si prefieres usar utilidades de Tailwind (`bg-deep`, `text-forest`, `font-mono`, etc.) en nuevos componentes.
