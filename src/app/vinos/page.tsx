import React from 'react'

export default function VinosPage() {
  const categorias = [
    {
      id: 'malbec',
      nombre: 'Malbec',
      emoji: '🍷',
      descripcion: 'El rey indiscutido de los vinos mendocinos. Intenso, robusto y con una personalidad única que refleja el terroir de la región.',
      caracteristicas: [
        'Color rojo profundo con reflejos violáceos',
        'Aromas intensos a frutas rojas y especias',
        'Taninos suaves y equilibrados',
        'Final largo y persistente'
      ],
      temperatura: '16-18°C',
      maridaje: 'Carnes rojas, asados, quesos maduros'
    },
    {
      id: 'cabernet-sauvignon',
      nombre: 'Cabernet Sauvignon',
      emoji: '🍾',
      descripcion: 'Elegante y estructurado, este varietal se adapta perfectamente al clima mendocino, produciendo vinos de gran complejidad y carácter.',
      caracteristicas: [
        'Color rojo rubí intenso',
        'Aromas a cassis, pimiento verde y eucalipto',
        'Estructura tánica firme pero elegante',
        'Gran potencial de guarda'
      ],
      temperatura: '17-19°C',
      maridaje: 'Cordero, carne de caza, quesos duros'
    },
    {
      id: 'chardonnay',
      nombre: 'Chardonnay',
      emoji: '🥂',
      descripcion: 'Fresco y aromático, nuestros Chardonnay expresan la frescura de las alturas mendocinas con notas cítricas y florales.',
      caracteristicas: [
        'Color amarillo dorado brillante',
        'Aromas cítricos y florales',
        'Acidez equilibrada y refrescante',
        'Final limpio y persistente'
      ],
      temperatura: '8-10°C',
      maridaje: 'Pescados, mariscos, ensaladas'
    },
    {
      id: 'syrah',
      nombre: 'Syrah',
      emoji: '🍇',
      descripcion: 'Potente y especiado, el Syrah mendocino combina fruta madura con notas herbáceas y especiadas características de la región.',
      caracteristicas: [
        'Color rojo violáceo intenso',
        'Aromas especiados y ahumados',
        'Cuerpo medio a alto',
        'Taninos presentes pero sedosos'
      ],
      temperatura: '16-18°C',
      maridaje: 'Carnes especiadas, caza menor, quesos'
    },
    {
      id: 'bonarda',
      nombre: 'Bonarda',
      emoji: '🍷',
      descripcion: 'Una joya argentina poco conocida pero extraordinaria. Frutal, fresco y con una acidez vibrante que lo hace muy versátil.',
      caracteristicas: [
        'Color rojo cereza brillante',
        'Aromas frutales intensos',
        'Acidez vibrante y refrescante',
        'Taninos suaves y amigables'
      ],
      temperatura: '14-16°C',
      maridaje: 'Pasta, pizza, carnes blancas'
    },
    {
      id: 'torrontes',
      nombre: 'Torrontés',
      emoji: '🌸',
      descripcion: 'El varietal blanco argentino por excelencia. Aromático, floral y con una frescura que cautiva desde el primer sorbo.',
      caracteristicas: [
        'Color amarillo pálido con reflejos verdosos',
        'Aromas florales y cítricos intensos',
        'Paladar fresco y vibrante',
        'Final aromático y persistente'
      ],
      temperatura: '6-8°C',
      maridaje: 'Aperitivos, comida asiática, postres'
    }
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-wine-700 to-malbec-800 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Nuestros Vinos
            </h1>
            <p className="text-xl md:text-2xl text-wine-100 leading-relaxed">
              Descubre la diversidad y riqueza de los varietales mendocinos en nuestra cuidada selección
            </p>
          </div>
        </div>
      </section>

      {/* Wine Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12">
              {categorias.map((categoria, index) => (
                <div 
                  key={categoria.id}
                  id={categoria.id}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-4">
                      <span className="text-6xl mr-4">{categoria.emoji}</span>
                      <h2 className="text-4xl font-serif font-bold text-malbec-800">
                        {categoria.nombre}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-malbec-700 mb-6 leading-relaxed">
                      {categoria.descripcion}
                    </p>

                    {/* Características */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-malbec-800 mb-3">
                        Características
                      </h3>
                      <ul className="space-y-2">
                        {categoria.caracteristicas.map((caracteristica, i) => (
                          <li key={i} className="flex items-start text-malbec-600">
                            <span className="text-wine-500 mr-2">•</span>
                            {caracteristica}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Info adicional */}
                    <div className="grid md:grid-cols-2 gap-4 bg-cream-100 p-6 rounded-lg border border-cream-300">
                      <div>
                        <h4 className="font-semibold text-malbec-800 mb-1">
                          Temperatura de Servicio
                        </h4>
                        <p className="text-malbec-600">{categoria.temperatura}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-malbec-800 mb-1">
                          Maridaje Recomendado
                        </h4>
                        <p className="text-malbec-600">{categoria.maridaje}</p>
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div 
                    className={`bg-gradient-to-br ${
                      index % 3 === 0 ? 'from-malbec-100 to-malbec-200' :
                      index % 3 === 1 ? 'from-wine-100 to-wine-200' :
                      'from-burgundy-100 to-burgundy-200'
                    } rounded-lg p-12 text-center ${
                      index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                    }`}
                  >
                    <div className="text-9xl opacity-40">
                      {categoria.emoji}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-malbec-800 mt-4">
                      {categoria.nombre}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-malbec-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            ¿Te interesa algún varietal en particular?
          </h2>
          <p className="text-xl text-malbec-200 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de sommelier está listo para asesorarte y ayudarte a encontrar 
            el vino perfecto para cada ocasión.
          </p>
          <a 
            href="/contacto"
            className="bg-wine-600 hover:bg-wine-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Consultar con Sommelier
          </a>
        </div>
      </section>
    </div>
  )
}
