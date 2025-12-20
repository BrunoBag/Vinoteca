import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WaveSeparator from "@/components/WaveSeparator";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Vinoteca Mendoza - Los Mejores Vinos de Argentina",
  description: "Descubre nuestra selección premium de vinos de Mendoza. Malbec, Cabernet Sauvignon, Chardonnay y más. Tradición y calidad en cada botella.",
  keywords: "vinos, mendoza, malbec, vinoteca, argentina, vinos premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-vine-pattern">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <WaveSeparator fillColor="#7a2e2a" height="h-4" type="wave1" />
        <Footer />
      </body>
    </html>
  );
}
