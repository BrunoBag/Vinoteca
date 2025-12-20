'use client'

import React, { useEffect, useState } from 'react'
import WaveSeparator from '@/components/WaveSeparator'
import ElegantDivider from '@/components/ElegantDivider'

export default function HistoriaPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.3

  return (
    <div className="min-h-screen bg-cream-50 bg-vine-pattern relative">
      {/* Hero Section */}
      <section className="relative text-white relative min-h-[50vh] bg-gradient-to-br from-malbec-800/70 to-wine-900/70 text-white flex items-center bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/assets/foto-historia-portada.jpg')"}}>
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

      <WaveSeparator fillColor="#4d0218" height="h-15" type="wave1" direction='down'/>

      {/* Historia Content */}
      <section className="py-30   bg-background overflow-hidden bg-vine-pattern">
        <div className="">
          <div className="container mx-auto">
            
            {/* Timeline Item 1 */}
            <div className="container-fluid mx-auto px-4 mb-20 grid lg:grid-cols-1  gap-12 ">
              <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-block">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-malbec-800 mb-4 relative">
                    Los Comienzos
                    <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></span>
                  </h2>
                  <span className="text-2xl md:text-3xl text-black/80 font-light italic">
                    1990
                  </span>
                </div>
              </div>
              <div className={`font-serif space-y-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="relative pl-6 border-l-2 border-black/30">
                  <p className="text-lg md:text-xl text-black/90 leading-relaxed font-light">
                    Todo comenzó con una pequeña bodega familiar en Maipú, donde{' '}
                    <span className="text-black font-medium">Don Carlos Rodríguez</span>{' '}
                    inició su pasión por los vinos mendocinos. Con apenas unas hectáreas de viñedos, 
                    comenzó a producir vinos artesanales que pronto ganaron reconocimiento local.
                  </p>
                </div>
            
                <div className="bg-amber-950/60 backdrop-blur-sm p-4 rounded-lg border border-amber-300/20 shadow-xl">
                  <p className="text-amber-100/80 leading-relaxed italic text-base md:text-lg">
                    La filosofía era simple: respetar la tierra, cuidar cada vid y crear vinos 
                    que expresaran la verdadera esencia del terroir mendocino.
                  </p>
                </div>

              </div>

              <div className="text-8xl py-10 relative mb opacity-75">
                <img src="/assets/foto-comienzos.jpg" className="w-full h-[50vh] object-cover rounded-lg" alt="Fecha" />
              </div>
            </div>

            
            <ElegantDivider />

            {/* Timeline Item 2 */}
            <div className="container-fluid mb-16 grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-malbec-800 mb-4 relative">
                  Reconocimiento (2000-2010)
                </h2>
                <p className="text-lg md:text-xl text-black/90 leading-relaxed font-light font-serif py-10">
                  Durante esta década, nuestros vinos comenzaron a ganar premios nacionales e internacionales. 
                  La expansión nos llevó a trabajar con las mejores bodegas de Luján de Cuyo y Valle de Uco, 
                  creando una red de productores comprometidos con la calidad.
                </p>
                <p className="text-lg md:text-xl text-black/90 leading-relaxed font-light font-serif">
                  Fue en esta época que establecimos nuestros estándares de selección que 
                  mantenemos hasta hoy: solo los mejores vinos llegan a nuestras estanterías.
                </p>
              </div>
              <div className="md:order-1 p8 bg-wine-100  text-center w-full">
                <img src="/assets/foto-reconocimiento.jpg" className="w-full h-[42vh] object-cover rounded-lg" alt="" />
              </div>
            </div>
            <br />
            <br />
            {/* Timeline Item 3 */}
            <div className="mb-16 grid md:grid-cols-2 gap-12 items-center py-15">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-malbec-800 mb-4 relative">
                  Expansión (2010-2020)
                </h2>
                <p className="text-lg md:text-xl text-black/90 leading-relaxed font-light font-serif py-10">
                  La nueva generación de la familia tomó las riendas del negocio, incorporando 
                  tecnología moderna mientras respetaba las tradiciones ancestrales. 
                  Comenzamos a exportar nuestros vinos selectos a diferentes países.
                </p>
                <p className="text-lg md:text-xl text-black/90 leading-relaxed font-light font-serif">
                  Nuestra vinoteca se convirtió en un referente en Mendoza, atrayendo tanto 
                  a locales como a turistas internacionales en busca de vinos auténticos.
                </p>
              </div>
              <div className="bg-burgundy-100 text-center">
                <img src="/assets/foto-internacional.jpg" className="w-full h-[42vh] object-cover rounded-lg" alt="" />
              </div>
            </div>
            {/* Present Day */}
            <div className="bg-amber-950/70 rounded-xl p-12 text-center border border-cream-300">
              <h2 className="text-3xl font-serif font-bold text-cream-200 mb-6">
                Hoy en Día
              </h2>
              <p className="text-lg text-cream-200 mb-6 max-w-3xl mx-auto">
                Con más de 30 años de experiencia, seguimos siendo una empresa familiar comprometida 
                con la excelencia. Trabajamos con más de 50 bodegas selectas de toda la región, 
                ofreciendo una curación única de los mejores vinos mendocinos.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cream-200">50+</div>
                  <p className="text-cream-200">Bodegas Asociadas</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cream-200">500+</div>
                  <p className="text-cream-200">Etiquetas Diferentes</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cream-200">30+</div>
                  <p className="text-cream-200">Años de Experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
