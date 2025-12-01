# 🎨 Componentes de Separadores

Componentes reutilizables para crear transiciones elegantes entre secciones.

## 🌊 WaveSeparator

Separador con forma de onda SVG profesional.

### Props:
- `fillColor` (string): Color de relleno (hex) - Default: "#f7f5f0"
- `height` (string): Altura del componente - Default: "h-20"
- `className` (string): Clases CSS adicionales - Default: ""
- `type` ('wave1' | 'wave2' | 'wave3'): Tipo de onda - Default: "wave1"

### Ejemplo de uso:
```tsx
import WaveSeparator from '@/components/WaveSeparator'

// Onda básica
<WaveSeparator />

// Onda personalizada
<WaveSeparator 
  fillColor="#ebd4b5" 
  height="h-32" 
  type="wave2" 
  className="my-4" 
/>
```

## ✨ ElegantDivider

Divisor elegante con patrón de fondo y línea central animada.

### Props:
- `className` (string): Clases CSS adicionales - Default: ""
- `patternColor` (string): Color del patrón de fondo - Default: "#7f1d1d"
- `lineColor` (string): Color de las líneas - Default: "#d4c1a4"
- `dotColor` (string): Color del punto central - Default: "#b23b33"
- `animated` (boolean): Activar animación pulse - Default: true

### Ejemplo de uso:
```tsx
import ElegantDivider from '@/components/ElegantDivider'

// Divisor básico
<ElegantDivider />

// Divisor personalizado
<ElegantDivider 
  patternColor="#8b5a3c" 
  lineColor="#f0ddc4" 
  animated={false}
  className="my-8" 
/>
```

## 🎯 SectionDivider

Componente versátil que combina diferentes tipos de separadores.

### Props:
- `type` ('wave' | 'elegant' | 'simple'): Tipo de separador - Default: 'wave'
- `color` (string): Color del separador - Default: 'cream'
- `height` ('sm' | 'md' | 'lg'): Tamaño del separador - Default: 'md'
- `className` (string): Clases CSS adicionales - Default: ""
- `animated` (boolean): Activar animaciones - Default: true

### Colores disponibles:
- `cream`: #f7f5f0
- `malbec`: #b23b33
- `wine`: #dc2626
- `white`: #ffffff

### Ejemplo de uso:
```tsx
import SectionDivider from '@/components/SectionDivider'

// Separador de onda básico
<SectionDivider />

// Separador elegante
<SectionDivider type="elegant" height="lg" />

// Separador simple
<SectionDivider 
  type="simple" 
  color="malbec" 
  height="sm" 
  animated={false} 
/>
```

## 🎨 Ejemplos de Combinaciones

```tsx
// Entre Hero y Features
<WaveSeparator fillColor="#f7f5f0" type="wave1" />

// Entre Features y About
<ElegantDivider />

// Antes del Footer
<SectionDivider type="wave" color="cream" height="lg" />

// Separador minimalista
<SectionDivider type="simple" height="sm" />
```

## 🎯 Casos de Uso

- **WaveSeparator**: Ideal para transiciones principales entre secciones importantes
- **ElegantDivider**: Perfecto para separar contenido relacionado con clase
- **SectionDivider**: Versátil para cualquier necesidad, especialmente útil para prototipos rápidos

## 🎨 Personalización

Todos los componentes están diseñados para ser fácilmente personalizables:
- Colores adaptativos a tu paleta
- Alturas responsivas
- Animaciones opcionales
- Clases CSS adicionales para estilos específicos