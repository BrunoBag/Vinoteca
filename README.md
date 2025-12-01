# 🍷 Vinoteca Mendoza

Un sitio web elegante y minimalista para una vinoteca especializada en vinos de Mendoza, Argentina. Desarrollado con Next.js 15, TypeScript y Tailwind CSS.

## ✨ Características

- **Diseño Minimalista**: Inspirado en el estilo de goBar, con colores elegantes en tonos malbec y vino tinto
- **Responsive**: Perfectamente adaptado para todos los dispositivos
- **SEO Optimizado**: Metadatos y estructura optimizada para motores de búsqueda
- **Rendimiento**: Construido con las mejores prácticas de Next.js 15
- **Tipografía Premium**: Combinación de Playfair Display (serif) e Inter (sans-serif)

## 📖 Páginas Principales

### 🏠 Inicio
- Hero section impactante con llamada a la acción
- Presentación de vinos destacados (Malbec, Cabernet Sauvignon, Chardonnay)
- Sección sobre la tradición y excelencia de la vinoteca

### 📚 Historia
- Timeline cronológico desde 1990 hasta la actualidad
- Hitos importantes de la vinoteca familiar
- Estadísticas y logros destacados

### 🍇 Vinos
Categorías completas de vinos con información detallada:
- **Malbec**: El orgullo de Mendoza
- **Cabernet Sauvignon**: Elegante y estructurado
- **Chardonnay**: Fresco y aromático
- **Syrah**: Potente y especiado
- **Bonarda**: Joya argentina poco conocida
- **Torrontés**: Varietal blanco argentino

### 🏷️ Marcas
Selección de las mejores bodegas asociadas:
- Catena Zapata, Luigi Bosca, Norton
- Alamos, Rutini Wines, Escorihuela Gascón
- Trapiche, El Enemigo, Dominio del Plata
- Y muchas más...

### 📞 Contacto
- Información completa de contacto
- Formulario de consulta interactivo
- Servicios ofrecidos (asesoría, eventos, delivery)
- Ubicación y horarios

## 🎨 Paleta de Colores

La aplicación utiliza una paleta de colores inspirada en los vinos mendocinos:

```css
malbec: {
  50: '#fdf4f3',
  100: '#fde8e6',
  // ... hasta 950: '#421512'
}

wine: {
  50: '#fdf2f2',
  100: '#fde3e3',
  // ... hasta 950: '#430a0a'
}

burgundy: {
  50: '#fef2f2',
  100: '#fee2e2',
  // ... hasta 950: '#450a0a'
}
```

## 🚀 Tecnologías Utilizadas

- **Next.js 15**: Framework React con App Router
- **TypeScript**: Tipado estático para mejor desarrollo
- **Tailwind CSS**: Framework CSS utilitario
- **Google Fonts**: Playfair Display e Inter
- **ESLint**: Linting y mejores prácticas

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm, yarn, pnpm o bun

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd vinoteca-mendoza
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abrir en el navegador**
Navega a [http://localhost:3000](http://localhost:3000)

## 📋 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
```

## 📁 Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página de inicio
│   ├── historia/        # Página de historia
│   ├── vinos/          # Página de categorías de vinos
│   ├── marcas/         # Página de marcas
│   └── contacto/       # Página de contacto
└── components/         # Componentes reutilizables
    ├── Navigation.tsx  # Navegación principal
    └── Footer.tsx      # Footer con información de contacto
```

## 🎯 Características del Diseño

### Minimalismo Elegante
- Espaciado generoso y tipografía legible
- Uso estratégico del color para destacar elementos importantes
- Imágenes y elementos visuales balanceados

### Experiencia de Usuario
- Navegación intuitiva y clara
- Información bien organizada y fácil de encontrar
- Llamadas a la acción claras y efectivas

### Responsive Design
- Adaptación perfecta a móviles, tablets y desktop
- Grid layouts flexibles
- Imágenes y texto optimizados para cada dispositivo

## 🌟 Funcionalidades Destacadas

- **Navegación Fixed**: Header transparente con blur effect
- **Scroll Suave**: Navegación fluida entre secciones
- **Hover Effects**: Interacciones elegantes en cards y botones
- **Gradientes Personalizados**: Fondos con degradados temáticos
- **Iconografía Emojis**: Uso estratégico de emojis para mayor personalidad

## 📞 Contacto y Soporte

Para consultas sobre este proyecto:
- Email: info@vinotecamendoza.com
- Ubicación: Av. San Martín 1234, Mendoza, Argentina
- Teléfono: +54 261 123-4567

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

Desarrollado con ❤️ para los amantes del buen vino mendocino 🍷
