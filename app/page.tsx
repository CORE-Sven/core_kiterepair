'use client';

import { useState, useEffect, useRef } from 'react';

export default function Page() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [repairType, setRepairType] = useState<'small' | 'medium' | 'large' | 'valve'>('small');
    const [repairLocation, setRepairLocation] = useState<'canopy' | 'seam' | 'strut' | 'leading'>(
        'canopy',
    );
    const [estimatedPrice, setEstimatedPrice] = useState(40);
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
    const contactFormRef = useRef<HTMLElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Preisberechnung basierend auf Reparaturtyp und Position
    useEffect(() => {
        const basePrice = {
            small: 40, // Kleiner Riss
            medium: 60, // Mittlerer Riss
            large: 80, // Großer Riss
            valve: 35, // Ventil-Austausch
        };

        const locationMultiplier = {
            canopy: 1.0, // Standard für Tuch
            seam: 1.2, // Naht (komplexer)
            strut: 1.25, // Strut
            leading: 1.5, // Leading Edge (am komplexesten)
        };

        let price = basePrice[repairType] * locationMultiplier[repairLocation];
        setEstimatedPrice(Math.round(price));
    }, [repairType, repairLocation]);

    const getRepairTypeText = () => {
        const types = {
            small: 'Kleiner Riss (bis 5cm)',
            medium: 'Mittlerer Riss (5-15cm)',
            large: 'Großer Riss (über 15cm)',
            valve: 'Ventil-Austausch',
        };
        return types[repairType];
    };

    const getRepairLocationText = () => {
        const locations = {
            canopy: 'Tuch (Standard)',
            seam: 'Naht',
            strut: 'Strut',
            leading: 'Leading Edge',
        };
        return locations[repairLocation];
    };

    const fillContactForm = () => {
        // Vorausfüllen der Nachricht mit den Informationen aus dem Calculator
        if (messageRef.current) {
            messageRef.current.value = `Ich habe eine Reparaturanfrage für folgenden Schaden:
- Art des Schadens: ${getRepairTypeText()}
- Position des Schadens: ${getRepairLocationText()}
- Geschätzter Preis: ${estimatedPrice}€

Mein Kite Modell: [bitte eintragen]

Weitere Details zum Schaden:`;
        }

        // Scrollen zum Kontaktformular
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const heroText =
        'Dein Equipment ist beschädigt? Unsere professionelle Reparatur auf Fehmarn bringt Kites und Wings aller Marken und Hersteller* schnell zurück aufs Wasser. Mit über 30 Jahren Erfahrung und einem außergewöhnlich hohen Qualitätsanspruch stellt Manuela Abken sicher, dass dein Material wieder maximale Performance liefert.';

    return (
        <div className="font-sans text-gray-900 bg-white" data-oid="u3g6406">
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-4 px-6"
                data-oid="yvfe_k8"
            >
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="21weojm"
                >
                    <div className="text-xl font-bold tracking-tight" data-oid="ste59r0">
                        KITEREPAIR
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-none"
                        onClick={toggleMobileMenu}
                        aria-label="Menu öffnen"
                        data-oid="_hzfjb9"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="b_g39mu"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="knpg7n1"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                    data-oid="0zsjg-_"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-sm" data-oid="fxzdgbn">
                        <a
                            href="#benefits"
                            className="uppercase hover:text-gray-300 transition-colors"
                            data-oid="bfwwar8"
                        >
                            VORTEILE
                        </a>
                        <a
                            href="#process"
                            className="uppercase hover:text-gray-300 transition-colors"
                            data-oid="r9toacn"
                        >
                            Vorgehensweise
                        </a>
                        <a
                            href="#location"
                            className="uppercase hover:text-gray-300 transition-colors"
                            data-oid="z:jcafy"
                        >
                            LOCATION
                        </a>
                        <a
                            href="#about"
                            className="uppercase hover:text-gray-300 transition-colors"
                            data-oid=".w1tvkw"
                        >
                            Unsere Segelmacherin
                        </a>
                        <a
                            href="#services"
                            className="uppercase hover:text-gray-300 transition-colors"
                            data-oid="mr7w6fc"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#faq"
                            className="uppercase hover:text-gray-300 transition-colors"
                            data-oid="mzce0an"
                        >
                            FAQ
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 bg-black mt-4 py-4 px-6 border-t border-gray-800`}
                    data-oid="jgtq82z"
                >
                    <div className="flex flex-col space-y-4" data-oid="fbc9sx6">
                        <a
                            href="#benefits"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="b71o6.8"
                        >
                            VORTEILE
                        </a>
                        <a
                            href="#process"
                            className="uppercase hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="r3rg:kb"
                        >
                            Vorgehensweise
                        </a>
                        <a
                            href="#location"
                            className="uppercase hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="8684xkh"
                        >
                            LOCATION
                        </a>
                        <a
                            href="#about"
                            className="uppercase hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="ll6tkq6"
                        >
                            Unsere Segelmacherin
                        </a>
                        <a
                            href="#services"
                            className="uppercase hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="-l7p4__"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="z90ve31"
                        >
                            FAQ
                        </a>
                    </div>
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section
                id="hero"
                className="pt-24 pb-48 h-screen flex flex-col justify-center pb-[20px]"
                data-oid="-t3ghvi"
            >
                <div
                    className="relative z-10 max-w-7xl mx-auto text-center h-full p-0 flex flex-col items-center justify-center"
                    data-oid="bdhcajv"
                >
                    <div
                        className="flex-grow flex relative w-full max-w-4xl mx-auto rounded-none flex-col items-center justify-end"
                        data-oid="jz9_w-r"
                    >
                        <h1
                            className="text-2xl md:text-4xl font-bold mb-4 md:mb-4 uppercase text-white rounded-[2px]"
                            data-oid="hi7:.cj"
                        >
                            Professionelle <br className="hidden sm:block" data-oid="xr7-6lq" />
                            <span
                                className="text-4xl md:text-7xl block sm:inline uppercase font-bold"
                                data-oid="hr12hr8"
                            >
                                Kite & Wing Reparatur
                            </span>
                        </h1>
                        <p
                            className="hidden sm:block text-lg sm:text-xl max-w-2xl mx-auto mb-6 md:mb-10 px-4 sm:px-0 text-white"
                            data-oid="icoptz_"
                        >
                            {heroText}
                        </p>
                        <a
                            href="#contact"
                            className=" uppercase inline-block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                            data-oid="_lyre1d"
                        >
                            Reparaturanfrage stellen
                        </a>
                    </div>
                    <div
                        className="block sm:hidden w-full max-w-4xl mx-auto text-white p-4 mt-12 pr-[16px] pl-[16px] border-[#00000000] "
                        data-oid="m9k0l1n"
                    >
                        <p className="text-sm" data-oid="h.krovu">
                            {heroText}
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 z-0" data-oid="f3l.p-7">
                    <div
                        className="w-full h-full bg-cover bg-center flex justify-center bg-[url(/images/l-cw.jpeg)] text-card-foreground border-[#00000000] opacity-[100%]"
                        data-oid="nx:e2_."
                    ></div>
                </div>
            </section>

            {/* 2. Benefits Section */}
            <section id="benefits" className="bg-black pt-24 text-white py-24" data-oid="h84_ai.">
                <div className="max-w-7xl mx-auto px-6" data-oid="yqm:byh">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="buwctn_">
                        UNSERE VORTEILE
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                        data-oid="2dy2zk4"
                    >
                        <div className="text-center" data-oid="_v_9u8x">
                            <div className="mb-6 flex justify-center" data-oid=".sypnvs">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-sparkles-icon lucide-sparkles"
                                    data-oid="lsmosrz"
                                >
                                    <path
                                        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                                        data-oid="v5-c7k_"
                                    />

                                    <path d="M20 3v4" data-oid=":zrbzkw" />
                                    <path d="M22 5h-4" data-oid="pqmucyt" />
                                    <path d="M4 17v2" data-oid="s:.dh7g" />
                                    <path d="M5 18H3" data-oid="0j1y-vi" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-medium uppercase mb-3" data-oid="tvjy5iw">
                                Reparatur aller Hersteller*
                            </h3>
                            <p className="text-gray-400" data-oid="ay-589:">
                                Wir reparieren Kites & Wings aller Marken und Modelle mit höchster
                                Präzision.
                            </p>
                        </div>
                        <div className="text-center" data-oid="hegah4k">
                            <div className="mb-6 flex justify-center" data-oid="p9in-9e">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-package-check-icon lucide-package-check"
                                    data-oid="nazb-0y"
                                >
                                    <path d="m16 16 2 2 4-4" data-oid="1uy6rb8" />
                                    <path
                                        d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
                                        data-oid=".rw_x-t"
                                    />

                                    <path d="m7.5 4.27 9 5.15" data-oid="l7u9yis" />
                                    <polyline points="3.29 7 12 12 20.71 7" data-oid="4jmitao" />
                                    <line x1="12" x2="12" y1="22" y2="12" data-oid="kd-heg:" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-medium uppercase mb-3" data-oid="5sg00tm">
                                Einsenden oder Abgeben
                            </h3>
                            <p className="text-gray-400" data-oid="uj75n5q">
                                Senden Sie Ihren Kite ein oder geben Sie ihn direkt bei uns vor Ort
                                ab.
                            </p>
                        </div>
                        <div className="text-center" data-oid="5y6dp6x">
                            <div className="mb-6 flex justify-center" data-oid="fsxbwpn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-timer-icon lucide-timer"
                                    data-oid="5q-9ngr"
                                >
                                    <line x1="10" x2="14" y1="2" y2="2" data-oid="4dp3fk:" />
                                    <line x1="12" x2="15" y1="14" y2="11" data-oid="_qoy35-" />
                                    <circle cx="12" cy="14" r="8" data-oid="_1gychc" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-medium uppercase mb-3" data-oid="_7f2feh">
                                Angebot innerhalb 24 Stunden
                            </h3>
                            <p className="text-gray-400" data-oid="9._:ebx">
                                Unverbindliches Angebot mit klaren Preisen – garantiert innerhalb
                                eines Werktags.
                            </p>
                        </div>
                        <div className="text-center" data-oid="2hvn4o.">
                            <div className="mb-6 flex justify-center" data-oid="5v3-_-p">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="lucide lucide-calendar-clock-icon lucide-calendar-clock"
                                    data-oid="8fbyhzp"
                                >
                                    <path
                                        d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
                                        data-oid="cxhx7gu"
                                    />

                                    <path d="M16 2v4" data-oid="rilti9j" />
                                    <path d="M8 2v4" data-oid="fjueo:f" />
                                    <path d="M3 10h5" data-oid="d-b5brd" />
                                    <path d="M17.5 17.5 16 16.3V14" data-oid="fpxb1nx" />
                                    <circle cx="16" cy="16" r="6" data-oid="9k.a:fy" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-medium uppercase mb-3" data-oid="c26wtpx">
                                Reparatur in 5 Werktagen
                            </h3>
                            <p className="text-gray-400" data-oid="99lli6d">
                                Zügige Instandsetzung – damit Sie in nur fünf Werktagen wieder
                                startklar sind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Process Section */}
            <section id="process" className="py-24 bg-white" data-oid="rfghhsv">
                <div className="max-w-7xl mx-auto px-6" data-oid="9l5.gfm">
                    <h2
                        className="text-4xl md:text-6xl  mb-16  text-center uppercase font-bold"
                        data-oid="ytxq8k_"
                    >
                        Dein Weg zur schnellen Reparatur
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-[33%_67%] gap-6"
                        data-oid="5rdckb-"
                    >
                        {/*test timeline*/}
                        <div className="relative " data-oid="0wmwinx">
                            <ol
                                className="border-s border-gray-200 dark:border-gray-700"
                                data-oid="3-zoof:"
                            >
                                <li className="mb-10 ms-4" data-oid="r4s.cg4">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid="ewm-x6e"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="g:7jrug"
                                    >
                                        Schritt 1
                                    </time>
                                    <h3
                                        className="text-xl font-semibold text-gray-900 dark:text-white"
                                        data-oid="rq7wa-."
                                    >
                                        Reparaturanfrage stellen
                                    </h3>
                                    <p
                                        className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="nc2avbj"
                                    >
                                        Fülle unser Formular mit allen wichtigen Informationen aus -
                                        schnell und unverbindlich.
                                    </p>
                                </li>
                                <li className="mb-10 ms-4" data-oid="c-fkq.h">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid="0fmgc0m"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="hoqx..c"
                                    >
                                        Schritt 2
                                    </time>
                                    <h3
                                        className="text-xl font-semibold text-gray-900 dark:text-white"
                                        data-oid="s90d53t"
                                    >
                                        Einsenden oder Vorbeibringen
                                    </h3>
                                    <p
                                        className="text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="ybibj.a"
                                    >
                                        Sende uns deinen Kite oder Wing per Post oder bring ihn
                                        direkt an unseren Homespot auf Fehmarn. Egal ob
                                        <strong data-oid="z6sf05u">
                                            {' '}
                                            Duotone, North, Cabrinha
                                        </strong>{' '}
                                        - wir reparieren alle Marken *.
                                    </p>
                                </li>
                                <li className="mb-10 ms-4" data-oid="rlup65-">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid="_ajz7t:"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="_1n1rkk"
                                    >
                                        Schritt 3
                                    </time>
                                    <h3
                                        className="text-xl font-semibold text-gray-900 dark:text-white"
                                        data-oid="zl0wxnl"
                                    >
                                        Angebot erhalten
                                    </h3>
                                    <p
                                        className="text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="w1s3m2i"
                                    >
                                        Innerhalb von <strong data-oid="syb.kkl">24 Stunden</strong>
                                        erhältst du eine Einschätzung und ein Angebot.
                                    </p>
                                </li>
                                <li className=" ms-4" data-oid="348czny">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid="z2p.se2"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="7p5pdah"
                                    >
                                        Schritt 4
                                    </time>
                                    <h3
                                        className="text-xl  font-semibold text-gray-900 dark:text-white"
                                        data-oid=".ii3vh1"
                                    >
                                        Reparatur und Rückgabe
                                    </h3>
                                    <p
                                        className="text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="ey4t651"
                                    >
                                        Dein Kite oder Wing ist – sofern alle Ersatzteile vorliegen
                                        – innerhalb von 5 Werktagen repariert und ready to ride!
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <div
                            className="mt-8 pt-8   text-xs text-black    max-w-4xl mx-auto pl-4 py-2 bg-[#00000000] border-[#00000000] border-0"
                            data-oid="scbrrx3"
                        >
                            <img
                                src="/images/CORE_demo_gear.jpeg"
                                alt="Unser Standort auf Fehmarn"
                                className="w-full aspect-[16/9] object-cover mb-2 pb-2"
                                data-oid="q6ctj3b"
                                key="olk-zn67"
                            />

                            <p className="text-left mt-6" data-oid="i3r0y8t" key="olk-BVsp">
                                * Sollten zur Reparatur deines Kites oder Wings Ersatzteile
                                (Ventile, Bladder, o.ä.) anderer Marken notwendig sein, erfolgt die
                                Bestellung und Bezahlung selbiger durch dich. Damit behältst du die
                                volle Kontrolle über Qualität, Preis und Lieferzeit deiner
                                Ersatzteile.
                            </p>
                            <p className="text-left mt-2" data-oid="gqzkb3h" key="olk-3DBD">
                                Sobald alle benötigten Teile bei uns vorliegen, ist die Reparatur in
                                der Regel innerhalb von fünf Arbeitstagen abgeschlossen. Risse oder
                                sonstige Schäden, die ohne markenspezifische Ersatzteile auskommen,
                                reparieren wir natürlich unmittelbar.
                            </p>

                            <p
                                className="text-left font-semibold m-0"
                                data-oid=":c:jwy6"
                                key="olk-WB-6"
                            >
                                Bitte beachte, dass wir darüber hinaus keine keine Garantie- oder
                                Kulanzabwicklung für Fremdmarken (außer CORE) übernehmen können.
                            </p>
                        </div>
                        {/* Card 1 */}
                        <div
                            className="bg-white overflow-hidden rounded-none border-[#00000000] border-0"
                            data-oid="jc8wiyj"
                        >
                            <div className="relative mb-8" data-oid="cbbfip.">
                                <picture data-oid="4bt7m:h">
                                    {/* Mobile Bild (5:4) */}

                                    <source
                                        media="(max-width: 768px)"
                                        srcSet="/images/CORE_demo_gear.jpeg"
                                        className="w-full aspect-[5/4] object-cover"
                                        data-oid="4qyqszq"
                                        key="olk-v3lx"
                                    />

                                    {/* Desktop Bild (16:9) */}
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-auto" data-oid="ng2uqdl">
                        <div className="text-center" data-oid=".s:tyk:">
                            <button
                                onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
                                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black m-12 w-[184px]"
                                data-oid="8pjdimg"
                            >
                                <span className="mr-2 font-medium" data-oid="1ky5.3-">
                                    Preiskalkulator
                                </span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${isCalculatorOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="13g0gf9"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                        data-oid="0bt3yba"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Ausklappbarer Preiskalkulator */}
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${isCalculatorOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                            data-oid="9ddmn6j"
                        >
                            <div
                                className="p-6 border border-gray-200 rounded-lg shadow-md bg-white"
                                data-oid="txkldfk"
                            >
                                <div data-oid="8vdzq0c">
                                    <h4 className="text-2xl font-medium mb-3" data-oid="ad7v9t-">
                                        Interaktiver Preiskalkulator
                                    </h4>
                                    <p className="text-sm text-gray-500 mb-4" data-oid="9so5fx8">
                                        Berechnen Sie Ihren individuellen Preis. Diese Berechnung
                                        dient nur zur groben Orientierung. Die tatsächlichen Kosten
                                        können nach genauer Begutachtung variieren.
                                    </p>
                                    {/* Interaktiver Kalkulator */}
                                    <div className="space-y-6" data-oid="l0cwcmh">
                                        <div
                                            className="space-y-4 border border-gray-200 rounded-lg p-4 bg-gray-50"
                                            data-oid="vl1kxly"
                                        >
                                            <div data-oid="uoc1yae">
                                                <label
                                                    className="block text-sm font-medium mb-2"
                                                    data-oid="jn9.hlq"
                                                >
                                                    Art des Schadens:
                                                </label>
                                                <select
                                                    className="w-full p-2 border border-gray-300 rounded"
                                                    value={repairType}
                                                    onChange={(e) =>
                                                        setRepairType(
                                                            e.target.value as
                                                                | 'small'
                                                                | 'medium'
                                                                | 'large'
                                                                | 'valve',
                                                        )
                                                    }
                                                    data-oid="dd:yps:"
                                                >
                                                    <option value="small" data-oid="p3flvmy">
                                                        Kleiner Riss (bis 5cm)
                                                    </option>
                                                    <option value="medium" data-oid="zunx7mk">
                                                        Mittlerer Riss (5-15cm)
                                                    </option>
                                                    <option value="large" data-oid="99n4pqa">
                                                        Großer Riss (über 15cm)
                                                    </option>
                                                    <option value="valve" data-oid="lw.pyqi">
                                                        Ventil-Austausch
                                                    </option>
                                                </select>
                                            </div>

                                            <div data-oid="2z.8iud">
                                                <label
                                                    className="block text-sm font-medium mb-2"
                                                    data-oid="ilqo9y6"
                                                >
                                                    Position des Schadens:
                                                </label>
                                                <select
                                                    className="w-full p-2 border border-gray-300 rounded"
                                                    value={repairLocation}
                                                    onChange={(e) =>
                                                        setRepairLocation(
                                                            e.target.value as
                                                                | 'canopy'
                                                                | 'seam'
                                                                | 'strut'
                                                                | 'leading',
                                                        )
                                                    }
                                                    data-oid="my5xd-f"
                                                >
                                                    <option value="canopy" data-oid="mn.pahk">
                                                        Tuch (Standard)
                                                    </option>
                                                    <option value="seam" data-oid="can7zdq">
                                                        Naht
                                                    </option>
                                                    <option value="strut" data-oid=":six9dn">
                                                        Strut
                                                    </option>
                                                    <option value="leading" data-oid="c.p737x">
                                                        Leading Edge
                                                    </option>
                                                </select>
                                            </div>

                                            <div
                                                className="bg-black text-white p-4 rounded-md text-center"
                                                data-oid="74a.3pw"
                                            >
                                                <p className="text-sm mb-1" data-oid="qcjd87e">
                                                    Geschätzter Preis:
                                                </p>
                                                <p
                                                    className="text-2xl font-bold"
                                                    data-oid="yctt7k0"
                                                >
                                                    {estimatedPrice}€
                                                </p>
                                            </div>

                                            <div className="mt-4 text-center" data-oid="_oz.rr8">
                                                <button
                                                    onClick={fillContactForm}
                                                    className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                                    data-oid="16u0ink"
                                                >
                                                    <span
                                                        className="font-medium"
                                                        data-oid="nusx94n"
                                                    >
                                                        Anfrage mit diesen Daten stellen
                                                    </span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 ml-2"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        data-oid="kx3qcbn"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                                            data-oid=".g5aigl"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Preistabelle als Referenz */}
                                        <div className="mt-4" data-oid="h5twra3">
                                            <h5
                                                className="font-medium text-sm mb-2"
                                                data-oid="bwmdff5"
                                            >
                                                Basispreise zur Orientierung:
                                            </h5>
                                            <div
                                                className="grid grid-cols-2 gap-2 text-sm"
                                                data-oid="13pedq1"
                                            >
                                                <div className="font-medium" data-oid="derjrd2">
                                                    Kleiner Riss (bis 5cm)
                                                </div>
                                                <div className="text-right" data-oid=".u1uac3">
                                                    ab 40€
                                                </div>

                                                <div className="font-medium" data-oid="62soefe">
                                                    Mittlerer Riss (5-15cm)
                                                </div>
                                                <div className="text-right" data-oid="9w1hm.1">
                                                    ab 60€
                                                </div>

                                                <div className="font-medium" data-oid="m8pp_oz">
                                                    Großer Riss (über 15cm)
                                                </div>
                                                <div className="text-right" data-oid="i4kgcf.">
                                                    ab 80€
                                                </div>

                                                <div className="font-medium" data-oid="36.5bjh">
                                                    Strut-Reparatur
                                                </div>
                                                <div className="text-right" data-oid="car-64d">
                                                    ab 50€
                                                </div>

                                                <div className="font-medium" data-oid="j7v2x1k">
                                                    Leading Edge Reparatur
                                                </div>
                                                <div className="text-right" data-oid="8szyi18">
                                                    ab 70€
                                                </div>

                                                <div className="font-medium" data-oid="51x:hl.">
                                                    Ventil-Austausch
                                                </div>
                                                <div className="text-right" data-oid="lbu6.qm">
                                                    ab 35€
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="bg-gray-100 p-3 rounded-md text-sm"
                                            data-oid="0tr8az6"
                                        >
                                            <p className="font-medium mb-1" data-oid="nq0q8k.">
                                                Hinweis:
                                            </p>
                                            <p className="text-gray-600" data-oid="3-9t39i">
                                                Die endgültigen Kosten werden nach einer genauen
                                                Begutachtung Ihres Kites oder Wings festgelegt.
                                                Besonders kritische Stellen wie Nähte oder
                                                Verstärkungen können den Preis beeinflussen.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="relative h-full overflow-hidden border-[#00000000] bg-[#000000] bg-[url(/images/JsfT.jpeg)] text-[#00000000]"
                            data-oid="qb99f-8"
                        >
                            {/* Hintergrundbild mit Overlay */}

                            <div
                                className="relative z-20 p-8 flex flex-col rounded-none bg-none h-[261px] w-full items-start"
                                data-oid="y1cxhk_"
                            >
                                {/* Dekorative Elemente */}

                                <div
                                    className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 transform -rotate-0 origin-top-right"
                                    data-oid="sa69w4e"
                                >
                                    EXKLUSIV
                                </div>
                                <div
                                    className="absolute top-12 left-0 w-16 h-16 rounded-full bg-yellow-500 opacity-10"
                                    data-oid="q9rntl4"
                                ></div>

                                <h3
                                    className="text-3xl font-bold mb-6 text-yellow-400 mt-6 drop-shadow-lg"
                                    data-oid="xab2b6h"
                                >
                                    FEHMARN EXKLUSIVE:{' '}
                                    <br className="md:hidden" data-oid="0z5yb8m" />
                                    <span className="text-white" data-oid="yrycf:7">
                                        ERSATZMATERIAL SICHERN
                                    </span>
                                </h3>
                                <div
                                    className="bg-opacity-40 p-4 rounded-lg backdrop-blur-sm bg-[#00000000]"
                                    data-oid="yvb2t4p"
                                >
                                    <p className="text-xl mb-4 text-white" data-oid="l2m778u">
                                        Gibst du deinen Kite oder Wing direkt bei uns auf Fehmarn
                                        ab, stellen wir dir für die Dauer der Reparatur aktuelles
                                        CORE Demomaterial zur Verfügung.
                                    </p>

                                    <p
                                        className="text-xl font-bold text-yellow-300"
                                        data-oid="fipjwp8"
                                    >
                                        So verpasst du keine Session!
                                    </p>
                                </div>

                                <div
                                    className="absolute bottom-4 right-4 opacity-40"
                                    data-oid="l6on3f-"
                                ></div>
                            </div>
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    backgroundImage: 'url(/images/l-cw.jpeg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: 'brightness(0.6) contrast(1.2)',
                                }}
                                data-oid="ta:nn9i"
                            ></div>

                            {/* Farbiges Overlay mit Gradient */}

                            {/* Inhalt */}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Location Section */}
            <section id="location" className="py-24 bg-gray-100" data-oid="o4h7jpk">
                <div className="max-w-7xl mx-auto px-6" data-oid=":_aw756">
                    <h2
                        className="text-4xl md:text-6xl  mb-16  text-center uppercase font-bold"
                        data-oid="qkiuuua"
                    >
                        STANDORT
                    </h2>
                    <div className="relative mb-8" data-oid="q8e3m8c">
                        <picture data-oid="nfdq0i_">
                            {/* Mobile Bild (5:4) */}
                            <source
                                media="(max-width: 768px)"
                                srcSet="/images/location-mobile.jpg"
                                className="w-full aspect-[5/4] object-cover"
                                data-oid="o2bvgde"
                            />

                            {/* Desktop Bild (16:9) */}
                            <img
                                src="/images/location-desktop.jpg"
                                alt="Unser Standort auf Fehmarn"
                                className="w-full aspect-[16/9] object-cover"
                                data-oid="v-6v4rj"
                            />
                        </picture>
                        {/* Overlay mit Adresse */}
                        <div
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                            data-oid="8htmild"
                        >
                            <div className="text-center text-white" data-oid="t54cjdr">
                                <h3
                                    className="text-2xl md:text-3xl font-bold mb-2"
                                    data-oid="nfl:-4a"
                                >
                                    Kiterepair Fehmarn
                                </h3>
                                <p className="text-lg md:text-xl" data-oid="1o.hhww">
                                    Osterstraße 45, 23769 Fehmarn
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="aspect-w-16 aspect-h-9 h-[600px] w-full relative group"
                        data-oid="q6_:t9y"
                    >
                        <div
                            className="absolute inset-0 z-20 bg-white/50 backdrop-blur-md p-8 transition-opacity duration-300 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none flex flex-col justify-center items-center text-center"
                            data-oid="5:bcxir"
                        >
                            <h3 className="text-3xl font-bold mb-4 text-black" data-oid="fmm_61s">
                                ZUHAUSE AUF FEHMARN
                            </h3>
                            <p className="text-gray-700 max-w-2xl mb-6" data-oid="2mx1ocu">
                                In unserem Homespot auf Fehmarn beantwortet unser Team all deine
                                Fragen und nimmt dein Kite oder Wing direkt entgegen. Darüber hinaus
                                findest du alle aktuellen CORE Produkte in unserer Ausstellung und
                                zum Test.
                            </p>
                            <span className="text-black font-bold" data-oid="2kmxko2">
                                CORE HOMESPOT
                            </span>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150152.98765431202!2d11.199571159623646!3d54.43779355215773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI2JzE2LjEiTiAxMcKwMTEnNTguNSJF!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                            className="w-full h-full border-0"
                            allowFullScreen={true}
                            loading="lazy"
                            title="Google Maps"
                            data-oid="idlwt-r"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* 5. About Section */}
            <section id="about" className="py-24 bg-white" data-oid="igy1y_u">
                <div className="max-w-7xl mx-auto px-6" data-oid="zg_hk2l">
                    <h2
                        className="text-4xl md:text-6xl  mb-16  text-center uppercase font-bold"
                        data-oid="lyrrjvt"
                    >
                        UNSERE SEGELMACHERIN
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 items-center gap-4"
                        data-oid="mt77vv-"
                    >
                        <div data-oid="x0mlr:y">
                            <div
                                className="aspect-w-1 aspect-h-1 overflow-hidden w-3/4 mx-auto rounded-none"
                                data-oid="fzc555z"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                                    alt="Segelmacherin"
                                    className="object-cover w-full h-full"
                                    data-oid="5bg.wbj"
                                />
                            </div>
                        </div>
                        <div data-oid="asjzx6_">
                            <h3 className="text-2xl font-medium mb-4" data-oid="fefk:6b">
                                MANUELA ABKEN - EINE DER BESTEN IHRES FACHS
                            </h3>
                            <p className="text-gray-600 mb-6" data-oid="oj2ghg1">
                                Unsere Segelmacherin Manuela Abken gehört zu den Besten ihres Fachs.
                                Seit drei Jahrzehnten repariert sie Kites und Wings aller Marken auf
                                höchstem Niveau. Unter dem Dach von CORE trifft meisterliches
                                Handwerk auf professionelle Infrastruktur.
                            </p>
                            <div className="grid grid-cols-2 gap-4" data-oid="o:pwsqf">
                                <div className="col-span-1 md:col-span-2" data-oid="kiu14kw">
                                    <span className="font-bold" data-oid="il1_wj8">
                                        Erfahrung & Qualität <br data-oid="j4lxwzn" />
                                    </span>
                                    Eine der besten Segelmacherinnen Deutschlands bringt deinen Kite
                                    oder Wing zurück in Topform.
                                </div>
                                <div className="col-span-1 md:col-span-2" data-oid="1_f0d8e">
                                    <span className="font-bold" data-oid="2.u5.1g">
                                        {' '}
                                        Demomaterial auf Fehmarn <br data-oid="-9lhehl" />{' '}
                                    </span>
                                    Während der Reparatur stellen wir dir aktuelles CORE Material
                                    zur Verfügung.
                                </div>
                                <div className="col-span-1 md:col-span-2" data-oid="6skyopy">
                                    <span className="font-bold" data-oid="054c.ut">
                                        {' '}
                                        Express-Service <br data-oid=".:ni2wg" />{' '}
                                    </span>
                                    Innerhalb von 24 Stunden erhältst du ein unverbindliches
                                    Angebot.
                                </div>
                                <div className="col-span-1 md:col-span-2" data-oid="qzh5-:9">
                                    <span className="font-bold" data-oid="990bewh">
                                        {' '}
                                        Schnelle Abwicklung
                                        <br data-oid="w_gdz_y" />{' '}
                                    </span>
                                    In der Regel ist dein Kite innerhalb von 5 Werktagen wieder
                                    einsatzbereit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Additional Services Section */}
            <section id="services" className="py-24 bg-black text-white" data-oid="x6th_y9">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="yonq2j-">
                    <h2 className="text-4xl font-light mb-8" data-oid="ihb:2.4">
                        WEITERE SERVICES
                    </h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto" data-oid="bjd:49o">
                        Neben Kitereparaturen bieten wir auch Services für Twintips, Bars und
                        Surfboards an.
                    </p>
                    <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                        data-oid="l-rlj7z"
                    >
                        MEHR ERFAHREN
                    </a>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section id="faq" className="py-24 bg-white" data-oid="jtwmvkf">
                <div className="max-w-3xl mx-auto px-6" data-oid="_d8w_vj">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="fbnmccb">
                        HÄUFIG GESTELLTE FRAGEN
                    </h2>

                    <div className="space-y-4" data-oid="efh9b1j">
                        {[
                            {
                                question: 'Wie lange dauert eine Reparatur?',
                                answer: 'In der Regel dauert eine Reparatur 5 Werktage nach Auftragsbestätigung. Bei komplexeren Reparaturen kann es etwas länger dauern, wir informieren Sie aber rechtzeitig darüber.',
                            },
                            {
                                question: 'Kann ich meinen Kite auch einsenden?',
                                answer: 'Ja, Sie können Ihren Kite per Post an uns senden. Bitte kontaktieren Sie uns vorher, damit wir Ihnen die genaue Vorgehensweise erklären können.',
                            },
                            {
                                question: 'Welche Zahlungsmethoden akzeptieren Sie?',
                                answer: 'Wir akzeptieren Barzahlung, Überweisung und PayPal. Die Zahlung erfolgt nach Fertigstellung der Reparatur vor der Rückgabe oder dem Versand.',
                            },
                            {
                                question: 'Reparieren Sie auch andere Marken als [Marke]?',
                                answer: 'Ja, wir reparieren Kites aller Hersteller und Marken. Unsere Segelmacherin hat Erfahrung mit allen gängigen Modellen und Materialien.',
                            },
                            {
                                question: 'Gibt es eine Garantie auf die Reparatur?',
                                answer: 'Ja, wir geben 6 Monate Garantie auf unsere Reparaturarbeiten. Diese gilt für Material- und Verarbeitungsfehler, nicht jedoch für normale Abnutzung oder erneute Beschädigung.',
                            },
                        ].map((faq, index) => (
                            <div key={index} className="border border-gray-200" data-oid="dvd6ub8">
                                <button
                                    className="flex justify-between items-center w-full px-6 py-4 text-left font-medium"
                                    onClick={() => toggleAccordion(index)}
                                    data-oid="0vov85:"
                                >
                                    <span data-oid="p5av8r8">{faq.question}</span>
                                    <span data-oid="-ebi_fx">
                                        {activeAccordion === index ? '−' : '+'}
                                    </span>
                                </button>
                                {activeAccordion === index && (
                                    <div className="px-6 py-4 bg-gray-50" data-oid="gjm.a9s">
                                        <p className="text-gray-600" data-oid="zq0h67a">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section
                id="contact"
                className="py-24 bg-gray-100"
                data-oid="-mbrh6_"
                ref={contactFormRef}
            >
                <div className="max-w-3xl mx-auto px-6" data-oid="9l5pnis">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="wp_66pw">
                        REPARATURANFRAGE
                    </h2>
                    <form className="space-y-6" data-oid="kaip8ov">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="vo-d-3_">
                            <div data-oid="z5i99j:">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="4.bb8xs"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="ke-3nt_"
                                />
                            </div>
                            <div data-oid="elt1r18">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="an249id"
                                >
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="midwk-1"
                                />
                            </div>
                        </div>
                        <div data-oid="-exw17a">
                            <label
                                htmlFor="kite"
                                className="block mb-2 text-sm font-medium"
                                data-oid="-a9ydof"
                            >
                                Kite Modell
                            </label>
                            <input
                                type="text"
                                id="kite"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="w955i1h"
                            />
                        </div>
                        <div data-oid="80czoti">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium"
                                data-oid=":igl.gp"
                            >
                                Beschreibung des Schadens
                            </label>
                            <textarea
                                id="message"
                                ref={messageRef}
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="ql7w3_7"
                            ></textarea>
                        </div>
                        <div className="text-center" data-oid="j4xgxb6">
                            <button
                                type="submit"
                                className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                                data-oid="qlqhp2z"
                            >
                                ANFRAGE SENDEN
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12" data-oid="2uk0dg6">
                <div className="max-w-7xl mx-auto px-6" data-oid="lbb_9oo">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10" data-oid="3kzrtz-">
                        <div data-oid="uw6gc9_">
                            <h3 className="text-xl font-medium mb-4" data-oid="o9hsl4r">
                                KITEREPAIR
                            </h3>
                            <p className="text-gray-400" data-oid="id0cwrl">
                                Professionelle Reparatur für Ihren Kite.
                            </p>
                        </div>
                        <div data-oid="isn4fyf">
                            <h3 className="text-xl font-medium mb-4" data-oid="2yvp7na">
                                KONTAKT
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="6qhc.oo">
                                Osterstraße 47
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="wtc9k.0">
                                23769 Fehmarn
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="mbkm7ir">
                                Tel: +49 123 456789
                            </p>
                            <p className="text-gray-400" data-oid="z-mexmd">
                                E-Mail: info@kiterepair.de
                            </p>
                        </div>
                        <div data-oid="-68fgzj">
                            <h3 className="text-xl font-medium mb-4" data-oid="4zp8c7a">
                                ÖFFNUNGSZEITEN
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="wt_evh0">
                                Mo-Fr: 9:00 - 17:00 Uhr
                            </p>
                            <p className="text-gray-400 mb-6" data-oid="r_ahgdt">
                                Sa: Nach Vereinbarung
                            </p>
                            <a
                                href="#contact"
                                className="inline-block border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
                                data-oid="r2t1rjr"
                            >
                                REPARATUR ANFRAGEN
                            </a>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm"
                        data-oid="3tghw54"
                    >
                        © {new Date().getFullYear()} KITEREPAIR. Alle Rechte vorbehalten.
                    </div>
                </div>
            </footer>
        </div>
    );
}
