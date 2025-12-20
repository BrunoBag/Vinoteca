import React from 'react'

export default function MarcasPage() {
  const marcas = [
    {
      nombre: 'Catena Zapata',
      region: 'Luján de Cuyo',
      especialidad: 'Malbec Premium',
      descripcion: 'Una de las bodegas más prestigiosas de Argentina, pionera en la producción de Malbec de altura.',
      añoFundacion: 1902,
      destacado: 'Catena Zapata Malbec Argentino'
    },
    {
      nombre: 'Luigi Bosca',
      region: 'Maipú',
      especialidad: 'Varietales Clásicos',
      descripcion: 'Tradición familiar italiana en suelo mendocino, reconocida por sus vinos elegantes y equilibrados.',
      añoFundacion: 1901,
      destacado: 'Luigi Bosca DOC Malbec'
    },
    {
      nombre: 'Norton',
      region: 'Luján de Cuyo',
      especialidad: 'Malbec y Cabernet',
      descripcion: 'Una bodega con más de un siglo de historia, líder en innovación y calidad.',
      añoFundacion: 1895,
      destacado: 'Norton Reserva Malbec'
    },
    {
      nombre: 'Alamos',
      region: 'Valle de Uco',
      especialidad: 'Vinos de Altura',
      descripcion: 'Especializada en vinos producidos en viñedos de altura, con características únicas del terroir.',
      añoFundacion: 1999,
      destacado: 'Alamos Selección Malbec'
    },
    {
      nombre: 'Rutini Wines',
      region: 'Tupungato',
      especialidad: 'Ultra Premium',
      descripcion: 'Combina tradición italiana con innovación argentina, produciendo vinos de calidad excepcional.',
      añoFundacion: 1885,
      destacado: 'Rutini Antología Malbec'
    },
    {
      nombre: 'Escorihuela Gascón',
      region: 'Maipú',
      especialidad: 'Vinos Históricos',
      descripcion: 'Una de las bodegas más antiguas de Mendoza, famosa por su arquitectura y tradición vinícola.',
      añoFundacion: 1884,
      destacado: 'Pequeñas Producciones Malbec'
    },
    {
      nombre: 'Trapiche',
      region: 'Maipú',
      especialidad: 'Innovación Varietal',
      descripcion: 'Pionera en Argentina, reconocida mundialmente por su calidad e innovación constante.',
      añoFundacion: 1883,
      destacado: 'Trapiche Medalla Malbec'
    },
    {
      nombre: 'El Enemigo',
      region: 'Valle de Uco',
      especialidad: 'Vinos de Autor',
      descripcion: 'Proyecto vitivinícola del reconocido enólogo Alejandro Vigil, enfocado en vinos únicos.',
      añoFundacion: 2007,
      destacado: 'El Enemigo Malbec'
    },
    {
      nombre: 'Dominio del Plata',
      region: 'Luján de Cuyo',
      especialidad: 'Vinos Boutique',
      descripcion: 'Bodega familiar enfocada en la producción artesanal de vinos de alta gama.',
      añoFundacion: 1999,
      destacado: 'Crios de Susana Balbo'
    }
  ]

  return (
    <div className="min-h-screen bg-cream-50 bg-vine-pattern">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-burgundy-700 to-malbec-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Nuestras Marcas
            </h1>
            <p className="text-xl md:text-2xl text-burgundy-100 leading-relaxed">
              Trabajamos con las bodegas más prestigiosas de Mendoza, 
              seleccionando únicamente los mejores vinos para nuestros clientes
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-cream-100 bg-vine-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-malbec-800 mb-6">
              Partnerships de Excelencia
            </h2>
            <p className="text-lg text-malbec-700 leading-relaxed">
              Nuestras alianzas estratégicas con las mejores bodegas de Mendoza nos permiten 
              ofrecer una selección curada de vinos excepcionales. Cada marca representa 
              décadas de tradición, innovación y compromiso con la calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Marcas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marcas.map((marca, index) => (
                <div 
                  key={marca.nombre}
                  className="bg-cream-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-cream-300"
                >
                  {/* Header */}
                  <div className={`p-6 ${
                    index % 3 === 0 ? 'bg-gradient-to-r from-malbec-600 to-malbec-700' :
                    index % 3 === 1 ? 'bg-gradient-to-r from-wine-600 to-wine-700' :
                    'bg-gradient-to-r from-burgundy-600 to-burgundy-700'
                  } text-white`}>
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {marca.nombre}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-90">{marca.region}</span>
                      <span className="text-sm opacity-90">Est. {marca.añoFundacion}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-malbec-800 mb-1">
                        Especialidad
                      </h4>
                      <p className="text-wine-600 font-medium">
                        {marca.especialidad}
                      </p>
                    </div>

                    <p className="text-malbec-700 mb-6 leading-relaxed">
                      {marca.descripcion}
                    </p>

                    <div className="border-t border-malbec-200 pt-4">
                      <h4 className="font-semibold text-malbec-800 mb-2">
                        Vino Destacado
                      </h4>
                      <p className="text-wine-600 font-medium">
                        {marca.destacado}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 pb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-malbec-500">
                        📍 {marca.region}
                      </span>
                      <span className="text-sm text-malbec-500">
                        🍷 Disponible en tienda
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-malbec-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Nuestra Red de Bodegas
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-malbec-300 mb-2">50+</div>
                <p className="text-malbec-200">Bodegas Asociadas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-malbec-300 mb-2">500+</div>
                <p className="text-malbec-200">Etiquetas Diferentes</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-malbec-300 mb-2">15</div>
                <p className="text-malbec-200">Regiones Vitivinícolas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-malbec-300 mb-2">30+</div>
                <p className="text-malbec-200">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-cream-200 bg-vine-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🏆</div>
            <h2 className="text-3xl font-serif font-bold text-malbec-800 mb-6">
              Garantía de Calidad
            </h2>
            <p className="text-lg text-malbec-700 mb-8 leading-relaxed">
              Cada vino de nuestro catálogo ha pasado por un riguroso proceso de selección. 
              Trabajamos únicamente con bodegas que comparten nuestros valores de calidad, 
              tradición y respeto por el terroir mendocino.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-semibold text-malbec-800 mb-2">Selección Rigurosa</h3>
                <p className="text-malbec-600">Cada vino es evaluado por nuestro equipo de expertos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold text-malbec-800 mb-2">Relaciones Directas</h3>
                <p className="text-malbec-600">Trabajamos directamente con las bodegas productoras</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📦</div>
                <h3 className="font-semibold text-malbec-800 mb-2">Almacenamiento Óptimo</h3>
                <p className="text-malbec-600">Condiciones ideales de temperatura y humedad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
