# Bosque de Palabras — Spanish Word Forest Game

## Concept
A 3D isometric walk-to-collect Spanish vocabulary game inspired by [Lumber Valley Math](https://learnwithhasan.com/prototypes/lumber-valley-math/).

**Creative Mix Formula:** Walking collector genre + Spanish vocabulary = Bosque de Palabras

## Visual Style
- Orthographic camera (god-eye / isometric view)
- Low-poly terrain with soft pastel greens, beige, and gray patches
- Flat-shaded materials for that clean geometric look
- Pine trees (cone canopy + cylinder trunk), rocks (dodecahedrons), flowers
- Soft shadows + fog for depth
- Warm, cheerful color palette matching the reference

## Gameplay Loop
1. **Explore** — Walk around the forest with arrow keys (↑↓←→)
2. **Collect** — Find 4 trees with Spanish word badges, press SPACE near them to chop/collect
3. **Match** — Panel appears: match 4 Spanish words to their English translations
4. **Earn** — +25 coins per correct match, visual celebration
5. **Repeat** — 8 rounds with different vocabulary themes

## Vocabulary Rounds (8 × 4 words)
| Round | Theme    | Words                                      |
|-------|----------|--------------------------------------------|
| 1     | Nature   | árbol/tree, flor/flower, río/river, sol/sun |
| 2     | Animals  | gato/cat, perro/dog, pájaro/bird, pez/fish |
| 3     | Food     | manzana/apple, pan/bread, agua/water, leche/milk |
| 4     | Home     | casa/house, mesa/table, silla/chair, puerta/door |
| 5     | Colors   | rojo/red, azul/blue, verde/green, blanco/white |
| 6     | Family   | madre/mother, padre/father, hermano/brother, hermana/sister |
| 7     | Body     | mano/hand, cabeza/head, ojo/eye, boca/mouth |
| 8     | Clothes  | camisa/shirt, zapato/shoe, sombrero/hat, vestido/dress |

## Technical Stack
- **Three.js** (r169) via CDN for 3D rendering
- **OrthographicCamera** at isometric angle (position: 12, 12, 12)
- **HTML overlays** for word badges (positioned via 3D→2D projection), HUD, match panel
- **Flat shading + vertex colors** for low-poly terrain
- **PCFSoftShadowMap** for clean shadows
- **Fog** matching background color for depth fade

## Key Features
- Arrow key movement (camera-relative so "up" always feels like "up on screen")
- "SPACE to chop!" feedback when near a tree (like the reference "Timber!" prompt)
- Coin reward system (+25 per correct match)
- Particle effects on collection
- Tree sway animation
- Player character with bobbing walk animation
- Confetti celebration on round complete
- 8 progressive rounds → game complete screen

## Three.js References
- Docs: https://threejs.org/docs/
- Animation Keyframes Example: https://threejs.org/examples/#webgl_animation_keyframes
- Inspiration: https://learnwithhasan.com/prototypes/lumber-valley-math/

## File Location
`public/spanish-game/index.html` — Single HTML file, loaded via iframe from Next.js
