# Luki — Segunda iteración (v2)

Este documento resume lo que cambió respecto a la primera versión. La arquitectura, el header flotante, el scroll-story con teléfono sticky, las secciones y el resto de la lógica **se mantuvieron intactos**; lo que cambió es la dirección de arte, los mockups, el copy y las fotografías.

## 1. Nueva paleta

Se reemplazó el verde como color principal por una paleta cálida naranjo/salmón/durazno. El verde se conservó únicamente como acento funcional (ingresos, metas completadas, estados positivos).

| Token | Valor | Uso |
|---|---|---|
| `--orange` | `#F47A3C` | Color principal, CTAs, degradados |
| `--orange-soft` | `#FF9A62` | Acentos, loading |
| `--salmon` | `#F58B7A` | Degradados, tarjetas |
| `--coral` | `#FF6F61` | Alertas, CTA final |
| `--peach` | `#FFC09F` | Fondos suaves, degradados |
| `--cream` / `--bg` | `#FFF6EE` / `#FFFDFC` | Fondos |
| `--ink` / `--ink-soft` | `#1D1917` / `#6D625D` | Textos |
| `--pos` | `#5D9B71` | Verde funcional: ingresos, metas cumplidas |

Actualizado en `src/index.css` (`:root`) y en `tailwind.config.ts`.

## 2. Animación de carga

Los 4 cuadrados ahora usan terracota, naranjo claro, salmón pastel y durazno claro (antes, 4 tonos de verde). El fondo pasó de un degradado verde/blanco a un degradado radial blanco cálido → durazno → salmón muy claro. Sigue sin ser negro, sigue respetando `prefers-reduced-motion`.

## 3. Mockups del teléfono reconstruidos

Se reconstruyeron completamente las pantallas del teléfono a partir del mockup real que enviaste (Inicio, Movimientos, Luki IA, Metas):

- Barra de estado iOS real (hora, señal, wifi, batería).
- Navegación inferior de 4 ítems (Inicio / Movimientos / Luki IA / Metas), con el ítem activo resaltado.
- **Inicio**: saludo, tarjeta de saldo con degradado naranjo→salmón, split ingresos/gastos, gasto del mes con barra, resumen semanal, movimientos recientes con íconos de comercio.
- **Movimientos**: buscador, filtros (Todos/Gastos/Ingresos), movimientos agrupados por fecha (Hoy/Ayer).
- **Luki IA**: "¿En qué te ayudo hoy?", tarjeta de recomendación con degradado durazno/salmón, botones "¿Cómo se calculó esto?" / "Ver mi plan", campo de pregunta.
- **Metas**: tarjetas de meta con foto de fondo, monto ahorrado/objetivo, barra de progreso, botón "Agregar nueva meta".

Todos los montos están en pesos chilenos y usan datos de ejemplo realistas. Componentes: `IosStatusBar.tsx`, `BottomNav.tsx`, `PhoneScreens.tsx`.

## 4. Fotografías reales + tratamiento Kodak

Se agregó el componente reutilizable **`AnalogPhoto`** (`src/components/AnalogPhoto.tsx`, clase CSS `.kodak-photo`), que aplica a cualquier imagen:

- Overlay cálido (gradiente naranjo/terracota con `mix-blend-mode: overlay`).
- Grano de película vía SVG (`feTurbulence`) en un pseudo-elemento.
- Viñeteado suave.
- Leyenda tipo "verano, 198X" opcional.
- Variante "polaroid" (`.kodak-frame`) con marco blanco y rotación sutil (-2°/2°) para composiciones editoriales.

Se usa en: la narrativa del scroll (etapas de foto), la sección Nosotros/Colegios, el banner de Bienestar financiero, la sección de Metas y las tarjetas de la biblioteca de Aprendizaje. Cuando no se ha conseguido una foto real para un lugar específico, `AnalogPhoto` recibe un `gradient` en vez de un `src`, para que el lugar se vea terminado mientras se reemplaza.

## 5. Narrativa del scroll (6 etapas)

`src/data/phoneScenes.ts` ahora define 6 etapas (antes 5), alternando fotografía y producto:

1. **Incertidumbre** (foto) → 2. **Claridad** (pantalla Inicio) → 3. **Acompañamiento** (pantalla Luki IA) → 4. **Hábitos** (pantalla Metas) → 5. **Posibilidades** (foto) → 6. **Tranquilidad** (foto).

`ScrollStory.tsx` decide qué "capa" mostrar (foto o teléfono) según la etapa activa, usando el mismo hook `useActiveScene` de la v1.

## 6. Nueva sección de Metas

`GoalsSection.tsx` (sección `#metas`, entre Producto y Nosotros) es una vitrina de 6 metas con foto real (o degradado temporal), monto ahorrado/objetivo, barra de progreso y "próximo paso" sugerido. Datos en `src/data/goals.ts`.

## 7. Textos aspiracionales

Se actualizaron: Hero ("Tu plata puede llevarte más lejos."), Producto, la etapa de IA y de Hábitos del scroll, la nueva sección de Metas, el nuevo banner de Bienestar financiero, Nosotros ("Queremos que entender la plata deje de ser un privilegio.") y el CTA final ("Empieza por una meta. Luki te ayuda con el camino."), siguiendo el brief punto por punto.

## 8. Recursos visuales temporales utilizados

4 fotografías reales de Unsplash (licencia libre, sin atribución obligatoria), reutilizadas en varios lugares para cubrir el prototipo con el tiempo disponible:

| Foto | Fuente | Usada en |
|---|---|---|
| Joven escribiendo/revisando papeles en una mesa | Unsplash — ergonofis | Etapa "Incertidumbre", Nosotros, artículo "Presupuesto", artículo "Estrés financiero" |
| Amigos viendo un atardecer de viaje | Unsplash — Yoav Aziz | Etapa "Posibilidades", meta "Viaje a Europa", banner Bienestar, artículo "Ahorro" |
| Persona moviendo cajas en un living (mudanza) | Unsplash — Vitaly Gariev | Etapa "Tranquilidad", meta "Primer departamento", artículo "Tarjetas", artículo "Hipotecario" |
| Estudiantes alrededor de un laptop | Unsplash — Vitaly Gariev | Sección Colegios, meta "Curso de especialización" |

Todas están servidas directamente desde `images.unsplash.com` (sin descargar binarios), con `loading="lazy"`, `width`/`height` explícitos y `alt` descriptivo. Las metas "Fondo de emergencia", "Computador nuevo" y "Bicicleta", y el artículo "Créditos", usan un degradado cálido en vez de foto (no se alcanzó a curar una imagen distinta para cada una).

## 9. Fotografías que hay que reemplazar después

- Las 4 fotos de stock listadas arriba deben reemplazarse por fotografía propia de Luki (o un banco de imágenes curado a propósito), evitando la repetición actual entre secciones.
- Faltan fotos para: fondo de emergencia, computador, bicicleta, pareja proyectando futuro, persona sola tomando café, talleres en colegios (más de una imagen), fundadores (hoy son iniciales sobre un degradado).
- Todas las fotos nuevas deben pasar por el componente `AnalogPhoto` para mantener el tratamiento Kodak consistente.

## 10. Comparación breve v1 → v2

| | v1 | v2 |
|---|---|---|
| Color principal | Verde | Naranjo/salmón, verde solo como acento funcional |
| Tono del copy | Funcional ("controla tus gastos") | Aspiracional ("tu plata puede llevarte más lejos") |
| Pantallas del teléfono | Genéricas, sin barra de estado ni nav inferior | Alta fidelidad, basadas en el mockup real, con status bar y bottom nav |
| Imágenes | Solo ilustraciones/placeholders con degradado | Fotografías reales con tratamiento Kodak + placeholders donde falta foto |
| Narrativa del scroll | 5 escenas, solo producto | 6 etapas, alterna foto y producto (incertidumbre → tranquilidad) |
| Sección de Metas | No existía como sección propia | Nueva sección dedicada con 6 metas |
| Arquitectura / animaciones / header / responsive | — | Sin cambios: se mantuvo todo lo que ya funcionaba |
