import React from 'react'

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-malbec-700 to-wine-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Nuestra Historia
            </h1>
            <p className="text-xl md:text-2xl text-malbec-100 leading-relaxed">
              Una tradición familiar que comenzó hace más de tres décadas en el corazón de Mendoza
            </p>
          </div>
        </div>
      </section>

      {/* Historia Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Timeline Item 1 */}
            <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-4">🍇</div>
                <h2 className="text-3xl font-serif font-bold text-malbec-800 mb-4">
                  Los Comienzos (1990)
                </h2>
                <p className="text-lg text-malbec-700 mb-6">
                  Todo comenzó con una pequeña bodega familiar en Maipú, donde Don Carlos Rodríguez 
                  inició su pasión por los vinos mendocinos. Con apenas unas hectáreas de viñedos, 
                  comenzó a producir vinos artesanales que pronto ganaron reconocimiento local.
                </p>
                <p className="text-malbec-600">
                  La filosofía era simple: respetar la tierra, cuidar cada vid y crear vinos 
                  que expresaran la verdadera esencia del terroir mendocino.
                </p>
              </div>
              <div className="bg-malbec-100 rounded-lg p-8 text-center">
                <div className="text-8xl opacity-30">📅</div>
                <p className="text-malbec-800 font-semibold mt-4">1990 - Fundación</p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="text-6xl mb-4">🏆</div>
                <h2 className="text-3xl font-serif font-bold text-malbec-800 mb-4">
                  Reconocimiento (2000-2010)
                </h2>
                <p className="text-lg text-malbec-700 mb-6">
                  Durante esta década, nuestros vinos comenzaron a ganar premios nacionales e internacionales. 
                  La expansión nos llevó a trabajar con las mejores bodegas de Luján de Cuyo y Valle de Uco, 
                  creando una red de productores comprometidos con la calidad.
                </p>
                <p className="text-malbec-600">
                  Fue en esta época que establecimos nuestros estándares de selección que 
                  mantenemos hasta hoy: solo los mejores vinos llegan a nuestras estanterías.
                </p>
              </div>
              <div className="bg-wine-100 rounded-lg p-8 text-center md:order-1">
                <div className="text-8xl opacity-30">🥇</div>
                <p className="text-wine-800 font-semibold mt-4">Primeros Premios</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-4">🌍</div>
                <h2 className="text-3xl font-serif font-bold text-malbec-800 mb-4">
                  Expansión (2010-2020)
                </h2>
                <p className="text-lg text-malbec-700 mb-6">
                  La nueva generación de la familia tomó las riendas del negocio, incorporando 
                  tecnología moderna mientras respetaba las tradiciones ancestrales. 
                  Comenzamos a exportar nuestros vinos selectos a diferentes países.
                </p>
                <p className="text-malbec-600">
                  Nuestra vinoteca se convirtió en un referente en Mendoza, atrayendo tanto 
                  a locales como a turistas internacionales en busca de vinos auténticos.
                </p>
              </div>
              <div className="bg-burgundy-100 rounded-lg p-8 text-center">
                <div className="text-8xl opacity-30">✈️</div>
                <p className="text-burgundy-800 font-semibold mt-4">Proyección Internacional</p>
              </div>
            </div>

            {/* Present Day */}
            <div className="bg-cream-100 rounded-lg p-12 text-center border border-cream-300">
              <h2 className="text-3xl font-serif font-bold text-malbec-800 mb-6">
                Hoy en Día
              </h2>
              <p className="text-lg text-malbec-700 mb-6 max-w-3xl mx-auto">
                Con más de 30 años de experiencia, seguimos siendo una empresa familiar comprometida 
                con la excelencia. Trabajamos con más de 50 bodegas selectas de toda la región, 
                ofreciendo una curación única de los mejores vinos mendocinos.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-malbec-800">50+</div>
                  <p className="text-malbec-600">Bodegas Asociadas</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-malbec-800">500+</div>
                  <p className="text-malbec-600">Etiquetas Diferentes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-malbec-800">30+</div>
                  <p className="text-malbec-600">Años de Experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
