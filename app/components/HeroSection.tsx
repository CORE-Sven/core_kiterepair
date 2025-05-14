'use client';

export default function HeroSection() {
  const heroText =
    'Dein Equipment ist beschädigt? Unsere professionelle Reparatur auf Fehmarn bringt Kites und Wings aller Marken und Hersteller* schnell zurück aufs Wasser. Mit über 30 Jahren Erfahrung und einem außergewöhnlich hohen Qualitätsanspruch stellt Manuela Abken sicher, dass dein Material wieder maximale Performance liefert.';

  return (
    <section
      id="hero"
      className="pt-24 pb-48 h-screen flex flex-col justify-center pb-[20px]"
    >
      <div className="relative z-10 max-w-7xl mx-auto text-center h-full p-0 flex flex-col items-center justify-center">
        <div className="flex-grow flex relative w-full max-w-4xl mx-auto rounded-none flex-col items-center justify-end">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-4 uppercase text-white rounded-[2px]">
            Professionelle <br className="hidden sm:block" />
            <span className="text-4xl md:text-7xl block sm:inline uppercase font-bold">
              Kite & Wing Reparatur
            </span>
          </h1>
          <p className="hidden sm:block text-lg sm:text-xl max-w-2xl mx-auto mb-6 md:mb-10 px-4 sm:px-0 text-white">
            {heroText}
          </p>
          <a
            href="#contact"
            className="uppercase inline-block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
          >
            Reparaturanfrage stellen
          </a>
        </div>
        <div className="block sm:hidden w-full max-w-4xl mx-auto text-white p-4 mt-12 pr-[16px] pl-[16px] border-[#00000000]">
          <p className="text-sm">{heroText}</p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center flex justify-center bg-[url(/images/l-cw.jpeg)] text-card-foreground border-[#00000000] opacity-[100%]"></div>
      </div>
    </section>
  );
} 