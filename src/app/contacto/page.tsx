import React from 'react'

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-wine-700 to-burgundy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Contacto
            </h1>
            <p className="text-xl md:text-2xl text-wine-100 leading-relaxed">
              Estamos aquí para ayudarte a encontrar el vino perfecto para cada ocasión
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-malbec-800 mb-8">
                  Información de Contacto
                </h2>
                
                <div className="space-y-8">
                  {/* Dirección */}
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl text-malbec-600">📍</div>
                    <div>
                      <h3 className="text-xl font-semibold text-malbec-800 mb-2">
                        Nuestra Ubicación
                      </h3>
                      <p className="text-malbec-700">
                        Av. San Martín 1234<br />
                        M5500 Mendoza, Argentina
                      </p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl text-malbec-600">📞</div>
                    <div>
                      <h3 className="text-xl font-semibold text-malbec-800 mb-2">
                        Teléfono
                      </h3>
                      <p className="text-malbec-700">
                        +54 261 123-4567<br />
                        WhatsApp: +54 9 261 123-4567
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl text-malbec-600">✉️</div>
                    <div>
                      <h3 className="text-xl font-semibold text-malbec-800 mb-2">
                        Email
                      </h3>
                      <p className="text-malbec-700">
                        info@vinotecamendoza.com<br />
                        ventas@vinotecamendoza.com
                      </p>
                    </div>
                  </div>

                  {/* Horarios */}
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl text-malbec-600">🕒</div>
                    <div>
                      <h3 className="text-xl font-semibold text-malbec-800 mb-2">
                        Horarios de Atención
                      </h3>
                      <div className="text-malbec-700">
                        <p>Lunes a Viernes: 9:00 - 20:00</p>
                        <p>Sábados: 9:00 - 18:00</p>
                        <p>Domingos: 10:00 - 16:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-malbec-800 mb-4">
                    Síguenos en Redes Sociales
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-2xl text-malbec-600 hover:text-wine-600 transition-colors">
                      📘 Facebook
                    </a>
                    <a href="#" className="text-2xl text-malbec-600 hover:text-wine-600 transition-colors">
                      📸 Instagram
                    </a>
                    <a href="#" className="text-2xl text-malbec-600 hover:text-wine-600 transition-colors">
                      🐦 Twitter
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-cream-100 rounded-lg shadow-lg p-8 border border-cream-300">
                <h2 className="text-3xl font-serif font-bold text-malbec-800 mb-6">
                  Envíanos un Mensaje
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-malbec-800 mb-2">
                        Nombre *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-malbec-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malbec-500 focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-malbec-800 mb-2">
                        Apellido *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-malbec-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malbec-500 focus:border-transparent"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-malbec-800 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-malbec-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malbec-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-malbec-800 mb-2">
                      Teléfono
                    </label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 border border-malbec-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malbec-500 focus:border-transparent"
                      placeholder="+54 261 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-malbec-800 mb-2">
                      Tipo de Consulta
                    </label>
                    <select className="w-full px-4 py-3 border border-malbec-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malbec-500 focus:border-transparent">
                      <option value="">Selecciona una opción</option>
                      <option value="informacion">Información General</option>
                      <option value="asesoria">Asesoría de Vinos</option>
                      <option value="eventos">Vinos para Eventos</option>
                      <option value="reclamos">Reclamos</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-malbec-800 mb-2">
                      Mensaje *
                    </label>
                    <textarea 
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-malbec-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malbec-500 focus:border-transparent"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-malbec-700 hover:bg-malbec-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center text-malbec-800 mb-12">
              Nuestros Servicios
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-cream-50 rounded-lg p-8 shadow-md border border-cream-200">
                <div className="text-5xl mb-4">🍷</div>
                <h3 className="text-xl font-semibold text-malbec-800 mb-4">
                  Asesoría Personalizada
                </h3>
                <p className="text-malbec-600">
                  Nuestros sommeliers te ayudan a elegir el vino perfecto según tus gustos y ocasión.
                </p>
              </div>

              <div className="text-center bg-cream-50 rounded-lg p-8 shadow-md border border-cream-200">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-malbec-800 mb-4">
                  Vinos para Eventos
                </h3>
                <p className="text-malbec-600">
                  Selección especial de vinos para bodas, empresas y celebraciones con descuentos por volumen.
                </p>
              </div>

              <div className="text-center bg-cream-50 rounded-lg p-8 shadow-md border border-cream-200">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="text-xl font-semibold text-malbec-800 mb-4">
                  Delivery y Envíos
                </h3>
                <p className="text-malbec-600">
                  Entrega a domicilio en Mendoza y envíos a todo el país con el mejor packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-cream-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-malbec-800 mb-8">
              Cómo Llegar
            </h2>
            <div className="bg-cream-100 rounded-lg p-12 mb-8 border border-cream-300">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-lg text-malbec-700 mb-4">
                Estamos ubicados en el corazón de Mendoza, sobre la Av. San Martín, 
                a pocas cuadras del centro histórico de la ciudad.
              </p>
              <p className="text-malbec-600">
                <strong>Transporte Público:</strong> Líneas 10, 20 y 30<br />
                <strong>Estacionamiento:</strong> Disponible en la puerta
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
