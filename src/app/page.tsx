import Link from "next/link";
import WaveSeparator from "@/components/WaveSeparator";
import ElegantDivider from "@/components/ElegantDivider";
import SectionDivider from "@/components/SectionDivider";


const featuredWines = [
  {
    title: "Malbec",
    description: "El orgullo de Mendoza. Intenso, robusto y con notas frutales que conquistan el paladar.",
    image: "/assets/foto-malbec.jpg",
    link: "/vinos#malbec",
    linkText: "Ver Malbecs →"
  },
  {
    title: "Cabernet Sauvignon",
    description: "Elegante y estructurado, con taninos suaves y un final prolongado que perdura en el tiempo.",
    image: "/assets/foto-cabernet.jpg",
    link: "/vinos#cabernet",
    linkText: "Ver Cabernets →"
  },
  {
    title: "Chardonnay",
    description: "Fresco y aromático, con notas cítricas y florales que reflejan el terroir mendocino.",
    image: "/assets/foto-chardonnay.jpg",
    link: "/vinos#chardonnay",
    linkText: "Ver Chardonnays →"
  }
];

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
      <section className="py-20 bg-background bg-vine-pattern">
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
            {featuredWines.map((wine, index) => (
              <div key={index} className="text-center bg-cream-50 rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow border border-cream-200">
                <div className="text-6xl mb-4">
                  <img src={wine.image} alt={wine.title} className="w-full h-70 object-cover rounded-md" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-malbec-800 mb-4">{wine.title}</h3>
                <p className="text-malbec-600 mb-6">
                  {wine.description}
                </p>
                <Link 
                  href={wine.link} 
                  className="text-wine-600 hover:text-wine-700 font-semibold"
                >
                  {wine.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ElegantDivider />



      {/* About Section */}
      <section className="py-20 bg-cream-100 bg-vine-pattern">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold  text-malbec-800 mb-6">
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
              <div className="text-9xl opacity-80">
                <img src="/assets/foto-tradición.jpg" alt="Tradición" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
