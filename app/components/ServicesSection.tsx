'use client';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-light mb-8">WEITERE SERVICES</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Neben Kitereparaturen bieten wir auch Services für Twintips, Bars und
          Surfboards an.
        </p>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
        >
          MEHR ERFAHREN
        </a>
      </div>
    </section>
  );
} 