import Link from "next/link";
import WaveSeparator from "@/components/WaveSeparator";
import ElegantDivider from "@/components/ElegantDivider";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] bg-gradient-to-br from-malbec-800/70 to-wine-900/70 text-white flex items-center bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/assets/Portada.jpg')"}}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Vinoteca
              <span className="block text-cream-200">Mendoza</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cream-100 leading-relaxed drop-shadow-md">
              Descubre los mejores vinos de Mendoza en nuestra selecta colección de etiquetas premium.
              Tradición, calidad y pasión en cada botella.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/vinos" 
                className="bg-malbec-700 hover:bg-malbec-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center shadow-lg"
              >
                Explorar Vinos
              </Link>
              <Link 
                href="/historia" 
                className="border-2 border-cream-200 hover:bg-cream-200 hover:text-malbec-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center shadow-lg"
              >
                Nuestra Historia
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator fillColor="#4d0218" height="h-15" type="wave1" />

      {/* Featured Wines Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-malbec-800 mb-4">
              Nuestros Vinos Destacados
            </h2>
            <p className="text-lg text-malbec-600 max-w-2xl mx-auto">
              Una selección cuidadosa de los mejores vinos de Mendoza, cada uno con su carácter único y tradición.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Malbec */}
            <div className="text-center bg-cream-50 rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shado  border-malbec-800">
              <div className="text-6xl mb-4">
                <img src="/assets/foto-malbec.jpg" alt="Malbec" className="w-full h-70 object-cover rounded-md" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-malbec-800 mb-4">Malbec</h3>
              <p className="text-malbec-600 mb-6">
                El orgullo de Mendoza. Intenso, robusto y con notas frutales que conquistan el paladar.
              </p>
              <Link 
                href="/vinos#malbec" 
                className="text-wine-600 hover:text-wine-700 font-semibold"
              >
                Ver Malbecs →
              </Link>
            </div>

            {/* Cabernet Sauvignon */}
            <div className="text-center bg-cream-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-cream-200">
              <div className="text-6xl mb-4">
                <img src="/assets/foto-cabernet.jpg" alt="Cabernet Sauvignon" className="w-full h-70 object-cover rounded-md" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-malbec-800 mb-4">Cabernet Sauvignon</h3>
              <p className="text-malbec-600 mb-6">
                Elegante y estructurado, con taninos suaves y un final prolongado que perdura en el tiempo.
              </p>
              <Link 
                href="/vinos#cabernet" 
                className="text-wine-600 hover:text-wine-700 font-semibold"
              >
                Ver Cabernets →
              </Link>
            </div>

            {/* Chardonnay */}
            <div className="text-center bg-cream-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-cream-200">
              <div className="text-6xl mb-4">
                <img src="/assets/foto-chardonnay.jpg" alt="Chardonnay" className="w-full h-70 object-cover rounded-md" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-malbec-800 mb-4">Chardonnay</h3>
              <p className="text-malbec-600 mb-6">
                Fresco y aromático, con notas cítricas y florales que reflejan el terroir mendocino.
              </p>
              <Link 
                href="/vinos#chardonnay" 
                className="text-wine-600 hover:text-wine-700 font-semibold"
              >
                Ver Chardonnays →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ElegantDivider />

      <WaveSeparator fillColor="#4d0218" height="h-5" type="wave2" />

      {/* About Section */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-malbec-800 mb-6">
                Tradición y Excelencia
              </h2>
              <p className="text-lg text-malbec-700 mb-6">
                Desde hace décadas, nos dedicamos a seleccionar los mejores vinos de Mendoza, 
                trabajando directamente con bodegas familiares que comparten nuestra pasión por la excelencia.
              </p>
              <p className="text-lg text-malbec-700 mb-8">
                Cada botella en nuestra colección cuenta una historia única del terroir mendocino, 
                desde las alturas de Luján de Cuyo hasta los valles de Maipú.
              </p>
              <Link 
                href="/historia" 
                className="bg-malbec-700 hover:bg-malbec-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Conocer Más
              </Link>
            </div>
            <div className="text-center">
              <div className="text-9xl opacity-20">🏔️</div>
              <p className="text-malbec-600 mt-4">Los Andes de Mendoza</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
