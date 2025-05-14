'use client';

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-black pt-24 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-16 text-center">UNSERE VORTEILE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles-icon lucide-sparkles"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium uppercase mb-3">
              Reparatur aller Hersteller*
            </h3>
            <p className="text-gray-400">
              Wir reparieren Kites & Wings aller Marken und Modelle mit höchster
              Präzision.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-package-check-icon lucide-package-check"
              >
                <path d="m16 16 2 2 4-4" />
                <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                <path d="m7.5 4.27 9 5.15" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" x2="12" y1="22" y2="12" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium uppercase mb-3">
              Einsenden oder Abgeben
            </h3>
            <p className="text-gray-400">
              Senden Sie Ihren Kite ein oder geben Sie ihn direkt bei uns vor Ort
              ab.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-timer-icon lucide-timer"
              >
                <line x1="10" x2="14" y1="2" y2="2" />
                <line x1="12" x2="15" y1="14" y2="11" />
                <circle cx="12" cy="14" r="8" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium uppercase mb-3">
              Angebot innerhalb 24 Stunden
            </h3>
            <p className="text-gray-400">
              Unverbindliches Angebot mit klaren Preisen – garantiert innerhalb
              eines Werktags.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar-clock-icon lucide-calendar-clock"
              >
                <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h5" />
                <path d="M17.5 17.5 16 16.3V14" />
                <circle cx="16" cy="16" r="6" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium uppercase mb-3">
              Reparatur in 5 Werktagen
            </h3>
            <p className="text-gray-400">
              Zügige Instandsetzung – damit Sie in nur fünf Werktagen wieder
              startklar sind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 