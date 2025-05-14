'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-medium mb-4">KITEREPAIR</h3>
            <p className="text-gray-400">
              Professionelle Reparatur für Ihren Kite.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">KONTAKT</h3>
            <p className="text-gray-400 mb-2">Osterstraße 47</p>
            <p className="text-gray-400 mb-2">23769 Fehmarn</p>
            <p className="text-gray-400 mb-2">Tel: +49 123 456789</p>
            <p className="text-gray-400">E-Mail: info@kiterepair.de</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">ÖFFNUNGSZEITEN</h3>
            <p className="text-gray-400 mb-2">Mo-Fr: 9:00 - 17:00 Uhr</p>
            <p className="text-gray-400 mb-6">Sa: Nach Vereinbarung</p>
            <a
              href="#contact"
              className="inline-block border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
            >
              REPARATUR ANFRAGEN
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} KITEREPAIR. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
} 