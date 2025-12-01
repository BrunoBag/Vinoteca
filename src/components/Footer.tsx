import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-malbec-900 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Información de la vinoteca */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Vinoteca Mendoza</h3>
            <p className="text-malbec-200 mb-4">
              Descubre los mejores vinos de Mendoza en nuestra selecta colección de etiquetas premium.
            </p>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-malbec-200">
              <p>📍 Av. San Martín 1234, Mendoza</p>
              <p>📞 +54 261 123-4567</p>
              <p>✉️ info@vinotecamendoza.com</p>
              <p>🕒 Lun - Sáb: 9:00 - 20:00</p>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/historia" className="text-malbec-200 hover:text-white transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="/vinos" className="text-malbec-200 hover:text-white transition-colors">
                  Categorías de Vinos
                </Link>
              </li>
              <li>
                <Link href="/marcas" className="text-malbec-200 hover:text-white transition-colors">
                  Marcas que Trabajamos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-malbec-200 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-malbec-700 mt-8 pt-8 text-center">
          <p className="text-malbec-300">
            © 2024 Vinoteca Mendoza. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
