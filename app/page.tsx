'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [repairType, setRepairType] = useState('small');
    const [repairLocation, setRepairLocation] = useState('canopy');
    const [estimatedPrice, setEstimatedPrice] = useState(40);
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    const toggleAccordion = (index) => {
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

    const heroText =
        'Dein Equipment ist beschädigt? Unsere professionelle Reparatur auf Fehmarn bringt Kites und Wings aller Marken und Hersteller* schnell zurück aufs Wasser. Mit über 30 Jahren Erfahrung und einem außergewöhnlich hohen Qualitätsanspruch stellt Manuela Abken sicher, dass dein Material wieder maximale Performance liefert.';

    return (
        <div className="font-sans text-gray-900 bg-white" data-oid="yy5_vbg">
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-4 px-6"
                data-oid="-l0_yj."
            >
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="l8f6rsx"
                >
                    <div className="text-xl font-bold tracking-tight" data-oid="kwnrwlp">
                        KITEREPAIR
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-none"
                        onClick={toggleMobileMenu}
                        aria-label="Menu öffnen"
                        data-oid="ao5t7_z"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="w0-wtid"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="7z_g6hc"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                    data-oid="p_ry4v4"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-sm" data-oid="nwkbsvu">
                        <a
                            href="#hero"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="fy_97p2"
                        >
                            HOME
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="b8zabj5"
                        >
                            BENEFITS
                        </a>
                        <a
                            href="#process"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="y8w_uzt"
                        >
                            PROCESS
                        </a>
                        <a
                            href="#location"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="x5am939"
                        >
                            LOCATION
                        </a>
                        <a
                            href="#about"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="ddgsqxx"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#services"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="_oilype"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="c23l4m7"
                        >
                            FAQ
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 bg-black mt-4 py-4 px-6 border-t border-gray-800`}
                    data-oid="osxi_-6"
                >
                    <div className="flex flex-col space-y-4" data-oid="a16u---">
                        <a
                            href="#hero"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="9e.zczv"
                        >
                            HOME
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="az-tzhd"
                        >
                            BENEFITS
                        </a>
                        <a
                            href="#process"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="1blhoic"
                        >
                            PROCESS
                        </a>
                        <a
                            href="#location"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="ronh1gu"
                        >
                            LOCATION
                        </a>
                        <a
                            href="#about"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="i1cz6q9"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#services"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="1_03fud"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="8rf9rz4"
                        >
                            FAQ
                        </a>
                    </div>
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section
                id="hero"
                className="pt-24  h-screen flex flex-col justify-center pb-[20px]"
                data-oid="78_827:"
            >
                <div
                    className="relative z-10 max-w-7xl mx-auto text-center h-full p-0 flex flex-col items-center justify-center"
                    data-oid="znr0tlf"
                >
                    <div
                        className="flex-grow flex relative w-full max-w-4xl mx-auto rounded-none flex-col items-center justify-end"
                        data-oid="u7eft3p"
                    >
                        <h1
                            className="text-2xl md:text-4xl font-bold mb-4 md:mb-4 uppercase text-white rounded-[2px]"
                            data-oid="qj3j9_7"
                        >
                            Professionelle <br className="hidden sm:block" data-oid=".fn.du8" />
                            <span
                                className="text-4xl md:text-7xl block sm:inline uppercase font-bold"
                                data-oid="1deo3dp"
                            >
                                Kite & Wing Reparatur
                            </span>
                        </h1>
                        <p
                            className="hidden sm:block text-lg sm:text-xl max-w-2xl mx-auto mb-6 md:mb-10 px-4 sm:px-0 text-white"
                            data-oid="2zsev-3"
                        >
                            {heroText}
                        </p>
                        <a
                            href="#contact"
                            className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                            data-oid="ookw5yo"
                        >
                            Reperaturanfrage stellen
                        </a>
                    </div>
                    <div
                        className="block sm:hidden w-full max-w-4xl mx-auto text-white p-4 mt-auto pr-[16px] pl-[16px] border-[#00000000] bg-[#00000084]"
                        data-oid="2:fexk_"
                    >
                        <p className="text-sm" data-oid="1nt8psd">
                            {heroText}
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 z-0" data-oid="ynjmr:2">
                    <div
                        className="w-full h-full bg-cover bg-center flex justify-center bg-[url(/images/l-cw.jpeg)] text-card-foreground border-[#00000000] opacity-[100%]"
                        data-oid="-5unkwf"
                    ></div>
                </div>
            </section>

            {/* 2. Benefits Section */}
            <section id="benefits" className="bg-black text-white py-24" data-oid="u7_1lmn">
                <div className="max-w-7xl mx-auto px-6" data-oid="-xg4v3:">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="lle.sin">
                        UNSERE VORTEILE
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                        data-oid="w5_z-9b"
                    >
                        <div className="text-center" data-oid="g6oks46">
                            <div className="mb-6 flex justify-center" data-oid="2b5:cfz">
                                <img
                                    src="/images/benefits/repair.png"
                                    alt="Reparatur Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="4h6h6_3"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="byuafs_">
                                Reparatur aller Hersteller
                            </h3>
                            <p className="text-gray-400" data-oid="3sogj8f">
                                Wir reparieren Kites aller Marken und Modelle mit höchster
                                Präzision.
                            </p>
                        </div>
                        <div className="text-center" data-oid="ljlpb05">
                            <div className="mb-6 flex justify-center" data-oid="w_1ll90">
                                <img
                                    src="/images/benefits/shipping.png"
                                    alt="Versand Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="x.y:vkh"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="v55y5n:">
                                Einsenden oder Abgeben
                            </h3>
                            <p className="text-gray-400" data-oid="mh8mas8">
                                Senden Sie Ihren Kite ein oder geben Sie ihn direkt bei uns vor Ort
                                ab.
                            </p>
                        </div>
                        <div className="text-center" data-oid="kplhsei">
                            <div className="mb-6 flex justify-center" data-oid=".9jwsfd">
                                <img
                                    src="/images/benefits/clock.png"
                                    alt="Uhr Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="0e0jvh-"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="dfugn:m">
                                Angebot innerhalb 24h
                            </h3>
                            <p className="text-gray-400" data-oid="3xmz3z7">
                                Schnelle Bearbeitung und transparente Preise innerhalb eines Tages.
                            </p>
                        </div>
                        <div className="text-center" data-oid="7yygkf_">
                            <div className="mb-6 flex justify-center" data-oid="7.7bpuo">
                                <img
                                    src="/images/benefits/calendar.png"
                                    alt="Kalender Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="1uki_:p"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid=":5:xexv">
                                Reparatur in 5 Werktagen
                            </h3>
                            <p className="text-gray-400" data-oid="pp5ji19">
                                Schnelle Bearbeitung, damit Sie schnell wieder aufs Wasser können.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Process Section */}
            <section id="process" className="py-24 bg-white" data-oid="jp5zkqv">
                <div className="max-w-7xl mx-auto px-6" data-oid="hhf1v.h">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid=":uvbhhg">
                        UNSER PROZESS
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-[33%_67%] gap-6"
                        data-oid="-:tbfjk"
                    >
                        {/*test timeline*/}
                        <div className="relative " data-oid="y4y3.0b">
                            <ol
                                className="border-s border-gray-200 dark:border-gray-700"
                                data-oid="zj2fyi_"
                            >
                                <li className="mb-10 ms-4" data-oid="v-9hnjo">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid="-7.-tky"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="f201mt8"
                                    >
                                        Schritt 1
                                    </time>
                                    <h3
                                        className="text-xl font-semibold text-gray-900 dark:text-white"
                                        data-oid="__q4lbg"
                                    >
                                        Reparaturanfrage stellen
                                    </h3>
                                    <p
                                        className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="9w49_l:"
                                    >
                                        Fülle unser Formular mit allen wichtigen Informationen aus -
                                        schnell und unverbindlich.
                                    </p>
                                </li>
                                <li className="mb-10 ms-4" data-oid="jsrg279">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid="wc_0dw7"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="lu1q4.b"
                                    >
                                        Schritt 2
                                    </time>
                                    <h3
                                        className="text-xl font-semibold text-gray-900 dark:text-white"
                                        data-oid="_7:ajxh"
                                    >
                                        Einsenden oder Vorbeibringen
                                    </h3>
                                    <p
                                        className="text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="tm.02y1"
                                    >
                                        Sende uns deinen Kite oder Wing per Post oder bring ihn
                                        direkt an unseren Homespot auf Fehmarn. Egal ob
                                        <strong data-oid="p_hfnj0">
                                            {' '}
                                            Duotone, North, Cabrinha
                                        </strong>{' '}
                                        - wir reparieren alle Marken'.
                                    </p>
                                </li>
                                <li className="mb-10 ms-4" data-oid="rbsa0_0">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid="7xmvhm4"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="rwi-vfx"
                                    >
                                        Schritt 3
                                    </time>
                                    <h3
                                        className="text-xl font-semibold text-gray-900 dark:text-white"
                                        data-oid="gx6nodo"
                                    >
                                        Angebot erhalten
                                    </h3>
                                    <p
                                        className="text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="_heawzt"
                                    >
                                        Innerhalb von <strong data-oid="2z0eejx">24h</strong>{' '}
                                        erhältst du eine Einschätzung und ein Angebot.
                                    </p>
                                </li>
                                <li className=" ms-4" data-oid="bk8oufl">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid="c-.kl36"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="co8pxj1"
                                    >
                                        Schritt 4
                                    </time>
                                    <h3
                                        className="text-xl  font-semibold text-gray-900 dark:text-white"
                                        data-oid="kbkb4r4"
                                    >
                                        Reparatur und Rückgabe
                                    </h3>
                                    <p
                                        className="text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="ptgg:ye"
                                    >
                                        Dein Kite oder Wing ist - sofern alle Ersatzteile vorliegen
                                        n - innerhalb von 5 Werktagen repariert und ready to ride!
                                    </p>
                                </li>
                            </ol>
                        </div>

                        {/* Card 1 */}
                        <div
                            className="bg-white overflow-hidden rounded-none border-[#00000000] border-0"
                            data-oid="iped0:_"
                        >
                            <div className="relative mb-8" data-oid="yc8j-wf">
                                <picture data-oid="ynx1-x2">
                                    {/* Mobile Bild (5:4) */}
                                    <source
                                        media="(max-width: 768px)"
                                        srcSet="/images/CORE_demo_gear.jpeg"
                                        className="w-full aspect-[5/4] object-cover"
                                        data-oid="3c4tv6n"
                                    />

                                    {/* Desktop Bild (16:9) */}
                                    <img
                                        src="/images/CORE_demo_gear.jpeg"
                                        alt="Unser Standort auf Fehmarn"
                                        className="w-full aspect-[16/9] object-cover"
                                        data-oid="q:qse2u"
                                    />
                                </picture>
                            </div>
                            <div
                                className="relative h-full overflow-hidden border-[#00000000] bg-[#000000] bg-[url(/images/JsfT.jpeg)] text-[#00000000]"
                                data-oid="p4srmor"
                            >
                                {/* Hintergrundbild mit Overlay */}

                                <div
                                    className="relative z-20 p-8 flex flex-col rounded-none bg-none h-[261px]"
                                    data-oid="e8kdbzc"
                                >
                                    {/* Dekorative Elemente */}

                                    <div
                                        className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 transform -rotate-0 origin-top-right"
                                        data-oid="efjb:u:"
                                    >
                                        EXKLUSIV
                                    </div>
                                    <div
                                        className="absolute top-12 left-0 w-16 h-16 rounded-full bg-yellow-500 opacity-10"
                                        data-oid="a8fvo64"
                                    ></div>

                                    <h3
                                        className="text-3xl font-bold mb-6 text-yellow-400 mt-6 drop-shadow-lg"
                                        data-oid="sbt.l3o"
                                    >
                                        FEHMARN EXKLUSIVE:{' '}
                                        <br className="md:hidden" data-oid="q.0u08x" />
                                        <span className="text-white" data-oid="d:1wqs4">
                                            ERSATZMATERIAL SICHERN
                                        </span>
                                    </h3>
                                    <div
                                        className="bg-opacity-40 p-4 rounded-lg backdrop-blur-sm bg-[#00000000]"
                                        data-oid="qppbsuh"
                                    >
                                        <p className="text-xl mb-4 text-white" data-oid="yf902.t">
                                            Gibst du deinen Kite oder Wing direkt bei uns auf
                                            Fehmarn ab, stellen wir dir für die Dauer der Reparatur
                                            aktuelles CORE Demomaterial zur Verfügung.
                                        </p>

                                        <p
                                            className="text-xl font-bold text-yellow-300"
                                            data-oid=".9ic6z9"
                                        >
                                            So verpasst du keine Session!
                                        </p>
                                    </div>

                                    <div
                                        className="absolute bottom-4 right-4 opacity-40"
                                        data-oid="g_tkdz6"
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
                                    data-oid="aki5q3l"
                                ></div>

                                {/* Farbiges Overlay mit Gradient */}

                                {/* Inhalt */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 max-w-4xl mx-auto" data-oid="9l-tlyn">
                        <div className="text-center m-16" data-oid="ms_g:eq">
                            <button
                                onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
                                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                data-oid="zru4:2o"
                            >
                                <span className="mr-2 font-medium" data-oid="ktu0:l0">
                                    Preiskalkulator
                                </span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${isCalculatorOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="60risvk"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                        data-oid="hyik6sg"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Ausklappbarer Preiskalkulator */}
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${isCalculatorOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                            data-oid="-q-zm8a"
                        >
                            <div
                                className="p-6 border border-gray-200 rounded-lg shadow-md bg-white"
                                data-oid="3f03ai0"
                            >
                                <div data-oid="ei.lg2q">
                                    <h4 className="text-2xl font-medium mb-3" data-oid="ld_4--:">
                                        Interaktiver Preiskalkulator
                                    </h4>
                                    <p className="text-sm text-gray-500 mb-4" data-oid="8.6ze2i">
                                        Berechnen Sie Ihren individuellen Preis. Diese Berechnung
                                        dient nur zur groben Orientierung. Die tatsächlichen Kosten
                                        können nach genauer Begutachtung variieren.
                                    </p>
                                    {/* Interaktiver Kalkulator */}
                                    <div className="space-y-6" data-oid="428zqgm">
                                        <div
                                            className="space-y-4 border border-gray-200 rounded-lg p-4 bg-gray-50"
                                            data-oid="vcmbdlb"
                                        >
                                            <div data-oid="7569un-">
                                                <label
                                                    className="block text-sm font-medium mb-2"
                                                    data-oid="bd.k2qs"
                                                >
                                                    Art des Schadens:
                                                </label>
                                                <select
                                                    className="w-full p-2 border border-gray-300 rounded"
                                                    value={repairType}
                                                    onChange={(e) => setRepairType(e.target.value)}
                                                    data-oid="5i1uj-a"
                                                >
                                                    <option value="small" data-oid="ou86mz7">
                                                        Kleiner Riss (bis 5cm)
                                                    </option>
                                                    <option value="medium" data-oid="vooii8y">
                                                        Mittlerer Riss (5-15cm)
                                                    </option>
                                                    <option value="large" data-oid="f7ox6kq">
                                                        Großer Riss (über 15cm)
                                                    </option>
                                                    <option value="valve" data-oid="ng99-jr">
                                                        Ventil-Austausch
                                                    </option>
                                                </select>
                                            </div>

                                            <div data-oid="l:azgy:">
                                                <label
                                                    className="block text-sm font-medium mb-2"
                                                    data-oid="9323rnv"
                                                >
                                                    Position des Schadens:
                                                </label>
                                                <select
                                                    className="w-full p-2 border border-gray-300 rounded"
                                                    value={repairLocation}
                                                    onChange={(e) =>
                                                        setRepairLocation(e.target.value)
                                                    }
                                                    data-oid="lsbli11"
                                                >
                                                    <option value="canopy" data-oid="xya_4xp">
                                                        Tuch (Standard)
                                                    </option>
                                                    <option value="seam" data-oid="g5wx5m_">
                                                        Naht
                                                    </option>
                                                    <option value="strut" data-oid="l8msoht">
                                                        Strut
                                                    </option>
                                                    <option value="leading" data-oid="51q1l6l">
                                                        Leading Edge
                                                    </option>
                                                </select>
                                            </div>

                                            <div
                                                className="bg-black text-white p-4 rounded-md text-center"
                                                data-oid="e52.17-"
                                            >
                                                <p className="text-sm mb-1" data-oid="b47-xq3">
                                                    Geschätzter Preis:
                                                </p>
                                                <p
                                                    className="text-2xl font-bold"
                                                    data-oid="qtp.kba"
                                                >
                                                    {estimatedPrice}€
                                                </p>
                                            </div>
                                        </div>

                                        {/* Preistabelle als Referenz */}
                                        <div className="mt-4" data-oid="1a:qyrw">
                                            <h5
                                                className="font-medium text-sm mb-2"
                                                data-oid="w7m7hdy"
                                            >
                                                Basispreise zur Orientierung:
                                            </h5>
                                            <div
                                                className="grid grid-cols-2 gap-2 text-sm"
                                                data-oid="bz6w-d0"
                                            >
                                                <div className="font-medium" data-oid="t5-uu0:">
                                                    Kleiner Riss (bis 5cm)
                                                </div>
                                                <div className="text-right" data-oid="9neu9e:">
                                                    ab 40€
                                                </div>

                                                <div className="font-medium" data-oid="2ja8ydj">
                                                    Mittlerer Riss (5-15cm)
                                                </div>
                                                <div className="text-right" data-oid="k6f:z_.">
                                                    ab 60€
                                                </div>

                                                <div className="font-medium" data-oid="m20ozo5">
                                                    Großer Riss (über 15cm)
                                                </div>
                                                <div className="text-right" data-oid="iqy8_j:">
                                                    ab 80€
                                                </div>

                                                <div className="font-medium" data-oid="tfxyvhd">
                                                    Strut-Reparatur
                                                </div>
                                                <div className="text-right" data-oid="1ww7t.2">
                                                    ab 50€
                                                </div>

                                                <div className="font-medium" data-oid="xombkyg">
                                                    Leading Edge Reparatur
                                                </div>
                                                <div className="text-right" data-oid="7:a2nau">
                                                    ab 70€
                                                </div>

                                                <div className="font-medium" data-oid="da9upmq">
                                                    Ventil-Austausch
                                                </div>
                                                <div className="text-right" data-oid="4q0j4w7">
                                                    ab 35€
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="bg-gray-100 p-3 rounded-md text-sm"
                                            data-oid="6eclf9g"
                                        >
                                            <p className="font-medium mb-1" data-oid="xsk1258">
                                                Hinweis:
                                            </p>
                                            <p className="text-gray-600" data-oid="adkjmpm">
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
                    </div>
                </div>
            </section>

            {/* 4. Location Section */}
            <section id="location" className="py-24 bg-gray-100" data-oid="fk_k19d">
                <div className="max-w-7xl mx-auto px-6" data-oid="pwghfur">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid=".ygjoek">
                        STANDORT
                    </h2>
                    <div className="relative mb-8" data-oid="e336:7g">
                        <picture data-oid=".vbktjj">
                            {/* Mobile Bild (5:4) */}
                            <source
                                media="(max-width: 768px)"
                                srcSet="/images/location-mobile.jpg"
                                className="w-full aspect-[5/4] object-cover"
                                data-oid="8s.cqxy"
                            />

                            {/* Desktop Bild (16:9) */}
                            <img
                                src="/images/location-desktop.jpg"
                                alt="Unser Standort auf Fehmarn"
                                className="w-full aspect-[16/9] object-cover"
                                data-oid="rss93-p"
                            />
                        </picture>
                        {/* Overlay mit Adresse */}
                        <div
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                            data-oid="4lw9r.x"
                        >
                            <div className="text-center text-white" data-oid="wm6.s23">
                                <h3
                                    className="text-2xl md:text-3xl font-bold mb-2"
                                    data-oid="1xhcj1j"
                                >
                                    Kiterepair Fehmarn
                                </h3>
                                <p className="text-lg md:text-xl" data-oid="-y105ep">
                                    Osterstraße 45, 23769 Fehmarn
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-w-16 aspect-h-9 h-[400px] w-full" data-oid="wep_gtg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150152.98765431202!2d11.199571159623646!3d54.43779355215773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI2JzE2LjEiTiAxMcKwMTEnNTguNSJF!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                            className="w-full h-full border-0"
                            allowFullScreen={true}
                            loading="lazy"
                            title="Google Maps"
                            data-oid="i-0kt:8"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* 5. About Section */}
            <section id="about" className="py-24 bg-white" data-oid="m3cgtnv">
                <div className="max-w-7xl mx-auto px-6" data-oid="sgnwv1v">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="vyvj:a-">
                        UNSERE SEGELMACHERIN
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 items-center gap-4"
                        data-oid="infvq.y"
                    >
                        <div data-oid="0xslsir">
                            <div
                                className="aspect-w-1 aspect-h-1 overflow-hidden w-3/4 mx-auto rounded-none"
                                data-oid="pbufnx6"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                                    alt="Segelmacherin"
                                    className="object-cover w-full h-full"
                                    data-oid="2c7gm5t"
                                />
                            </div>
                        </div>
                        <div data-oid="jcx72sn">
                            <h3 className="text-2xl font-medium mb-4" data-oid="6-ren7-">
                                Anna Schmidt
                            </h3>
                            <p className="text-gray-600 mb-6" data-oid="xeyw29m">
                                Mit über 15 Jahren Erfahrung als Segelmacherin hat Anna ein
                                besonderes Gespür für die Reparatur von Kites entwickelt. Ihre
                                Präzision und ihr Fachwissen machen sie zur Expertin auf ihrem
                                Gebiet.
                            </p>
                            <div className="grid grid-cols-3 gap-4" data-oid="c7:byw-">
                                <img
                                    src="https://images.unsplash.com/photo-1559288972-9c5cd1f8e0f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 1"
                                    className="w-full h-32 object-cover"
                                    data-oid="6_..x7."
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 2"
                                    className="w-full h-32 object-cover"
                                    data-oid="1w4v.:7"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 3"
                                    className="w-full h-32 object-cover"
                                    data-oid="mg9j_ai"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Additional Services Section */}
            <section id="services" className="py-24 bg-black text-white" data-oid="fypoocv">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid=".5ny6_-">
                    <h2 className="text-4xl font-light mb-8" data-oid="cl_18pt">
                        WEITERE SERVICES
                    </h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto" data-oid="0q8bz-w">
                        Neben Kitereparaturen bieten wir auch Services für Twintips, Bars und
                        Surfboards an.
                    </p>
                    <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                        data-oid="3km5054"
                    >
                        MEHR ERFAHREN
                    </a>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section id="faq" className="py-24 bg-white" data-oid="p2t9_yd">
                <div className="max-w-3xl mx-auto px-6" data-oid="xg:g688">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid=".24pi2q">
                        HÄUFIG GESTELLTE FRAGEN
                    </h2>

                    <div className="space-y-4" data-oid="2kz4hhl">
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
                            <div key={index} className="border border-gray-200" data-oid="06ob0w9">
                                <button
                                    className="flex justify-between items-center w-full px-6 py-4 text-left font-medium"
                                    onClick={() => toggleAccordion(index)}
                                    data-oid="1f9awc:"
                                >
                                    <span data-oid="r11dchh">{faq.question}</span>
                                    <span data-oid="es83:i0">
                                        {activeAccordion === index ? '−' : '+'}
                                    </span>
                                </button>
                                {activeAccordion === index && (
                                    <div className="px-6 py-4 bg-gray-50" data-oid=":kmg941">
                                        <p className="text-gray-600" data-oid="32ph9xj">
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
            <section id="contact" className="py-24 bg-gray-100" data-oid="xdlvg97">
                <div className="max-w-3xl mx-auto px-6" data-oid="7khsx16">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="g_rl3wy">
                        REPARATURANFRAGE
                    </h2>
                    <form className="space-y-6" data-oid="ublno61">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="2nqy6y_">
                            <div data-oid="n-rmb6d">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="lavcm9."
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="yl6jyg5"
                                />
                            </div>
                            <div data-oid="e5d:8-3">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="g.8o2m2"
                                >
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="k.m35yn"
                                />
                            </div>
                        </div>
                        <div data-oid="g.5zz70">
                            <label
                                htmlFor="kite"
                                className="block mb-2 text-sm font-medium"
                                data-oid="q2ww-d3"
                            >
                                Kite Modell
                            </label>
                            <input
                                type="text"
                                id="kite"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="0pr2gsr"
                            />
                        </div>
                        <div data-oid="apiwg4:">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium"
                                data-oid="pe3v8c8"
                            >
                                Beschreibung des Schadens
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid=".p61s7c"
                            ></textarea>
                        </div>
                        <div className="text-center" data-oid=".z-f:oh">
                            <button
                                type="submit"
                                className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                                data-oid="_3ojtl."
                            >
                                ANFRAGE SENDEN
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12" data-oid="2baq:xx">
                <div className="max-w-7xl mx-auto px-6" data-oid="v.i4dh8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10" data-oid="g4ctnbn">
                        <div data-oid="qps6.nm">
                            <h3 className="text-xl font-medium mb-4" data-oid="q1b_w_o">
                                KITEREPAIR
                            </h3>
                            <p className="text-gray-400" data-oid="vt98zes">
                                Professionelle Reparatur für Ihren Kite.
                            </p>
                        </div>
                        <div data-oid="nvgqym2">
                            <h3 className="text-xl font-medium mb-4" data-oid=":rw7:01">
                                KONTAKT
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="5f2wbhi">
                                Osterstraße 47
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="bgl_y1s">
                                23769 Fehmarn
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="z0yrx-v">
                                Tel: +49 123 456789
                            </p>
                            <p className="text-gray-400" data-oid="x785zcm">
                                E-Mail: info@kiterepair.de
                            </p>
                        </div>
                        <div data-oid="iv61gfe">
                            <h3 className="text-xl font-medium mb-4" data-oid="3td8wg:">
                                ÖFFNUNGSZEITEN
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="-o7epsn">
                                Mo-Fr: 9:00 - 17:00 Uhr
                            </p>
                            <p className="text-gray-400 mb-6" data-oid="s4-6f8m">
                                Sa: Nach Vereinbarung
                            </p>
                            <a
                                href="#contact"
                                className="inline-block border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
                                data-oid="ns.g24b"
                            >
                                REPARATUR ANFRAGEN
                            </a>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm"
                        data-oid="f474zez"
                    >
                        © {new Date().getFullYear()} KITEREPAIR. Alle Rechte vorbehalten.
                    </div>
                </div>
            </footer>
        </div>
    );
}
