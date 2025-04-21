'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [repairType, setRepairType] = useState('small');
    const [repairLocation, setRepairLocation] = useState('canopy');
    const [estimatedPrice, setEstimatedPrice] = useState(40);

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
        'Wir reparieren Ihren Kite schnell, zuverlässig und professionell. Unsere erfahrene Segelmacherin sorgt dafür, dass Ihr Equipment wieder wie neu ist.';

    return (
        <div className="font-sans text-gray-900 bg-white" data-oid="hd0z-zt">
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-4 px-6"
                data-oid="61mwkm_"
            >
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="wlot:i5"
                >
                    <div className="text-xl font-bold tracking-tight" data-oid="z1b6jpz">
                        KITEREPAIR
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-none"
                        onClick={toggleMobileMenu}
                        aria-label="Menu öffnen"
                        data-oid="bb1i11h"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="82kmhih"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="3wk3x9a"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                    data-oid="ijm3u34"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-sm" data-oid="d.ve.21">
                        <a
                            href="#hero"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="e3fyp1q"
                        >
                            HOME
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="84j7zvt"
                        >
                            BENEFITS
                        </a>
                        <a
                            href="#process"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="d4nf6-:"
                        >
                            PROCESS
                        </a>
                        <a
                            href="#location"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="czvg87n"
                        >
                            LOCATION
                        </a>
                        <a
                            href="#about"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="-yu:7e0"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#services"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="0jeucin"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="u0bpvlx"
                        >
                            FAQ
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 bg-black mt-4 py-4 px-6 border-t border-gray-800`}
                    data-oid="qghbx-8"
                >
                    <div className="flex flex-col space-y-4" data-oid="ddhmaoq">
                        <a
                            href="#hero"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="6nv3puy"
                        >
                            HOME
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="iyz_jnx"
                        >
                            BENEFITS
                        </a>
                        <a
                            href="#process"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="vqhq9z1"
                        >
                            PROCESS
                        </a>
                        <a
                            href="#location"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="p75_qg."
                        >
                            LOCATION
                        </a>
                        <a
                            href="#about"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid=".vvcm6l"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#services"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="n2kyhgs"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="ktewl48"
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
                data-oid="zop2emw"
            >
                <div
                    className="relative z-10 max-w-7xl mx-auto text-center h-full p-0 flex flex-col items-center justify-center"
                    data-oid="695k9hz"
                >
                    <div
                        className="flex-grow flex relative w-full max-w-4xl mx-auto rounded-none flex-col items-center justify-end"
                        data-oid="fnag9z5"
                    >
                        <h1
                            className="text-2xl md:text-4xl font-bold mb-4 md:mb-4 uppercase text-white rounded-[2px]"
                            data-oid="0syr4fw"
                        >
                            Professionelle <br className="hidden sm:block" data-oid="rvgpncv" />
                            <span
                                className="text-4xl md:text-7xl block sm:inline uppercase font-bold"
                                data-oid="gkoy75v"
                            >
                                Kite & Wing Reparatur
                            </span>
                        </h1>
                        <p
                            className="hidden sm:block text-lg sm:text-xl max-w-2xl mx-auto mb-6 md:mb-10 px-4 sm:px-0 text-white"
                            data-oid="pf6y_r9"
                        >
                            {heroText}
                        </p>
                        <a
                            href="#contact"
                            className="inline-block text-white uppercase px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors sm:w-auto max-w-xs rounded-[20px] m-[14px] w-[fit-content] bg-card text-black text-nowrap"
                            data-oid="wmlpek0"
                        >
                            Reperaturanfrage stellen
                        </a>
                    </div>
                    <div
                        className="block sm:hidden w-full max-w-4xl mx-auto text-white p-4 mt-auto pr-[16px] pl-[16px] border-[#00000000] bg-[#00000084]"
                        data-oid="bn.z7sz"
                    >
                        <p className="text-sm" data-oid="tw2qsqd">
                            {heroText}
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 z-0" data-oid="8h2:ytq">
                    <div
                        className="w-full h-full bg-cover bg-center flex justify-center bg-[url(/images/l-cw.jpeg)] text-card-foreground border-[#00000000] opacity-[100%]"
                        data-oid="pu--o24"
                    ></div>
                </div>
            </section>

            {/* 2. Benefits Section */}
            <section id="benefits" className="bg-black text-white py-24" data-oid="yqcbhd5">
                <div className="max-w-7xl mx-auto px-6" data-oid="6s0evo9">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="0qrx1z_">
                        UNSERE VORTEILE
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                        data-oid="ykvk.n8"
                    >
                        <div className="text-center" data-oid="j3kqy5v">
                            <div className="mb-6 flex justify-center" data-oid="seu4i9k">
                                <img
                                    src="/images/benefits/repair.png"
                                    alt="Reparatur Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="sgl76l."
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="_uq_h7o">
                                Reparatur aller Hersteller
                            </h3>
                            <p className="text-gray-400" data-oid="ybrz51p">
                                Wir reparieren Kites aller Marken und Modelle mit höchster
                                Präzision.
                            </p>
                        </div>
                        <div className="text-center" data-oid="ccf27bc">
                            <div className="mb-6 flex justify-center" data-oid="9.gm0_g">
                                <img
                                    src="/images/benefits/shipping.png"
                                    alt="Versand Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="zsa3d6z"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="bqv3.ke">
                                Einsenden oder Abgeben
                            </h3>
                            <p className="text-gray-400" data-oid="0iosl7s">
                                Senden Sie Ihren Kite ein oder geben Sie ihn direkt bei uns vor Ort
                                ab.
                            </p>
                        </div>
                        <div className="text-center" data-oid="86p3dxe">
                            <div className="mb-6 flex justify-center" data-oid="baz1u9x">
                                <img
                                    src="/images/benefits/clock.png"
                                    alt="Uhr Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="5_n79hc"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="ysc4ski">
                                Angebot innerhalb 24h
                            </h3>
                            <p className="text-gray-400" data-oid="gjpmw-l">
                                Schnelle Bearbeitung und transparente Preise innerhalb eines Tages.
                            </p>
                        </div>
                        <div className="text-center" data-oid="64d_-bp">
                            <div className="mb-6 flex justify-center" data-oid="bvck_62">
                                <img
                                    src="/images/benefits/calendar.png"
                                    alt="Kalender Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="257f_s_"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="-zj0-ko">
                                Reparatur in 5 Werktagen
                            </h3>
                            <p className="text-gray-400" data-oid="63f0g82">
                                Schnelle Bearbeitung, damit Sie schnell wieder aufs Wasser können.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Process Section */}
            <section id="process" className="py-24 bg-white" data-oid="20806qr">
                <div className="max-w-7xl mx-auto px-6" data-oid="0goi8bv">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="1tp5h.j">
                        UNSER PROZESS
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-[33%_67%] gap-6"
                        data-oid="yl41a70"
                    >
                        {/*test timeline*/}
                        <div className="relative " data-oid="9__a7p1">
                            <ol
                                className="border-s border-gray-200 dark:border-gray-700"
                                data-oid="5i_4ups"
                            >
                                <li className="mb-10 ms-4" data-oid="8yvryqa">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid="ngb1.kr"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="in-1d-:"
                                    >
                                        Schritt 1
                                    </time>
                                    <h3
                                        className="text-xl font-semibold text-gray-900 dark:text-white"
                                        data-oid="mum587i"
                                    >
                                        Reparaturanfrage stellen
                                    </h3>
                                    <p
                                        className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="pvotbih"
                                    >
                                        Fülle unser Formular mit allen wichtigen Informationen aus -
                                        schnell und unverbindlich.
                                    </p>
                                </li>
                                <li className="mb-10 ms-4" data-oid="t:s52-h">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid="byuou7-"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="_t4uxe."
                                    >
                                        Schritt 2
                                    </time>
                                    <h3
                                        className="text-xl font-semibold text-gray-900 dark:text-white"
                                        data-oid="xayt_1-"
                                    >
                                        Einsenden oder Vorbeibringen
                                    </h3>
                                    <p
                                        className="text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="zet4z07"
                                    >
                                        Sende uns deinen Kite oder Wing per Post oder bring ihn
                                        direkt an unseren Homespot auf Fehmarn. Egal ob
                                        <strong data-oid="tqszcmg">
                                            {' '}
                                            Duotone, North, Cabrinha
                                        </strong>{' '}
                                        - wir reparieren alle Marken'.
                                    </p>
                                </li>
                                <li className="mb-10 ms-4" data-oid="g.cko:r">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid=".9jm94_"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="8l3zhve"
                                    >
                                        Schritt 3
                                    </time>
                                    <h3
                                        className="text-xl font-semibold text-gray-900 dark:text-white"
                                        data-oid="p4mwhs2"
                                    >
                                        Angebot erhalten
                                    </h3>
                                    <p
                                        className="text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="hozq5t:"
                                    >
                                        Innerhalb von <strong data-oid="we472_w">24h</strong>{' '}
                                        erhältst du eine Einschätzung und ein Angebot.
                                    </p>
                                </li>
                                <li className=" ms-4" data-oid="nuc83u1">
                                    <div
                                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                        data-oid="6n1.sv1"
                                    ></div>
                                    <time
                                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                        data-oid="xi9it94"
                                    >
                                        Schritt 4
                                    </time>
                                    <h3
                                        className="text-xl  font-semibold text-gray-900 dark:text-white"
                                        data-oid="o_3k8kj"
                                    >
                                        Reparatur und Rückgabe
                                    </h3>
                                    <p
                                        className="text-base font-normal text-gray-500 dark:text-gray-400"
                                        data-oid="2j1.6vi"
                                    >
                                        Dein Kite oder Wing ist - sofern alle Ersatzteile vorliegen
                                        n - innerhalb von 5 Werktagen repariert und ready to ride!
                                    </p>
                                </li>
                            </ol>
                        </div>
                        {/* Card 1 */}
                        <div
                            className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden"
                            data-oid="m5r8r7t"
                        >
                            <div
                                className="relative bg-gradient-to-r from-black to-gray-900 text-white p-8 h-full"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(/images/l-cw.jpeg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                data-oid="aw24zgx"
                            >
                                <div
                                    className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 transform rotate-0 origin-top-right"
                                    data-oid="hw683ok"
                                >
                                    EXKLUSIV
                                </div>

                                <h3
                                    className="text-3xl font-bold mb-4 text-yellow-400"
                                    data-oid="j9u0x.d"
                                >
                                    FEHMARN EXKLUSIVE: ERSATZMATERIAL SICHERN
                                </h3>

                                <p className="text-xl mb-6 text-white" data-oid="7wk_39j">
                                    Gibst du deinen Kite oder Wing direkt bei uns auf Fehmarn ab,
                                    stellen wir dir für die Dauer der Reparatur aktuelles CORE
                                    Demomaterial zur Verfügung.
                                </p>

                                <p className="text-xl font-bold text-yellow-300" data-oid="yohz32-">
                                    So verpasst du keine Session!
                                </p>

                                <div className="mt-8 flex justify-start" data-oid="a39axi6">
                                    <a
                                        href="#contact"
                                        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                                        data-oid="rp3q.s."
                                    >
                                        JETZT TERMIN VEREINBAREN
                                    </a>
                                </div>

                                <div
                                    className="absolute bottom-4 right-4 opacity-30"
                                    data-oid="4fmx_th"
                                >
                                    <img
                                        src="/images/benefits/repair.png"
                                        alt="Core Logo"
                                        className="w-16 h-16 object-contain"
                                        data-oid="fdy4w0h"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-oid="nvq.ydr">
                        <div className="p-6" data-oid="g-d2:fo" key="olk-_6Bp">
                            <div
                                className="mt-6 border-t pt-6 border-gray-200 max-w-4xl"
                                data-oid="xpprn78"
                                key="olk-aUcO"
                            >
                                <h4 className="text-4xl l font-medium mb-3" data-oid="te0f-sd">
                                    Interaktiver Preiskalkulator
                                </h4>
                                <p className="text-sm text-gray-500 mb-4" data-oid="mf-hqbg">
                                    Berechnen Sie Ihren individuellen Preis. Diese Berechnung dient
                                    nur zur groben Orientierung. Die tatsächlichen Kosten können
                                    nach genauer Begutachtung variieren.
                                </p>
                                {/* Interaktiver Kalkulator */}
                                <div className="space-y-6" data-oid="4v9t7_c">
                                    <div
                                        className="space-y-4 border border-gray-200 rounded-lg p-4 "
                                        data-oid="q.9af4v"
                                    >
                                        <div data-oid="vgn4n.k">
                                            <label
                                                className="block text-sm font-medium mb-2"
                                                data-oid=".4vc5oz"
                                            >
                                                Art des Schadens:
                                            </label>
                                            <select
                                                className="w-full p-2 border border-gray-300 rounded"
                                                value={repairType}
                                                onChange={(e) => setRepairType(e.target.value)}
                                                data-oid="u887amy"
                                            >
                                                <option value="small" data-oid="r-wfr26">
                                                    Kleiner Riss (bis 5cm)
                                                </option>
                                                <option value="medium" data-oid="o3rl7x8">
                                                    Mittlerer Riss (5-15cm)
                                                </option>
                                                <option value="large" data-oid="viqwjid">
                                                    Großer Riss (über 15cm)
                                                </option>
                                                <option value="valve" data-oid="v7y33pg">
                                                    Ventil-Austausch
                                                </option>
                                            </select>
                                        </div>

                                        <div data-oid="53cv25q">
                                            <label
                                                className="block text-sm font-medium mb-2"
                                                data-oid="c55zdh9"
                                            >
                                                Position des Schadens:
                                            </label>
                                            <select
                                                className="w-full p-2 border border-gray-300 rounded"
                                                value={repairLocation}
                                                onChange={(e) => setRepairLocation(e.target.value)}
                                                data-oid="9y4hk3j"
                                            >
                                                <option value="canopy" data-oid="s019e2e">
                                                    Tuch (Standard)
                                                </option>
                                                <option value="seam" data-oid="ukx56me">
                                                    Naht
                                                </option>
                                                <option value="strut" data-oid="6-i7q0f">
                                                    Strut
                                                </option>
                                                <option value="leading" data-oid="r0y3.pu">
                                                    Leading Edge
                                                </option>
                                            </select>
                                        </div>

                                        <div
                                            className="bg-black text-white p-4 rounded-md text-center"
                                            data-oid="2qn6n4z"
                                        >
                                            <p className="text-sm mb-1" data-oid="4wu:2je">
                                                Geschätzter Preis:
                                            </p>
                                            <p className="text-2xl font-bold" data-oid="e852dr5">
                                                {estimatedPrice}€
                                            </p>
                                        </div>
                                    </div>

                                    {/* Preistabelle als Referenz */}
                                    <div className="mt-4" data-oid="t0_2fdn">
                                        <h5 className="font-medium text-sm mb-2" data-oid="f0j-tw7">
                                            Basispreise zur Orientierung:
                                        </h5>
                                        <div
                                            className="grid grid-cols-2 gap-2 text-sm"
                                            data-oid="3weg_sl"
                                        >
                                            <div className="font-medium" data-oid="dv0y0eh">
                                                Kleiner Riss (bis 5cm)
                                            </div>
                                            <div className="text-right" data-oid="9gz6m-5">
                                                ab 40€
                                            </div>

                                            <div className="font-medium" data-oid="ce491jh">
                                                Mittlerer Riss (5-15cm)
                                            </div>
                                            <div className="text-right" data-oid="a_541:p">
                                                ab 60€
                                            </div>

                                            <div className="font-medium" data-oid="o7zubsh">
                                                Großer Riss (über 15cm)
                                            </div>
                                            <div className="text-right" data-oid="mzcpcxk">
                                                ab 80€
                                            </div>

                                            <div className="font-medium" data-oid="guyvg8l">
                                                Strut-Reparatur
                                            </div>
                                            <div className="text-right" data-oid="d1__sfm">
                                                ab 50€
                                            </div>

                                            <div className="font-medium" data-oid="m67:.hf">
                                                Leading Edge Reparatur
                                            </div>
                                            <div className="text-right" data-oid=".-wh3jx">
                                                ab 70€
                                            </div>

                                            <div className="font-medium" data-oid="ljhcv8t">
                                                Ventil-Austausch
                                            </div>
                                            <div className="text-right" data-oid="h:0cr:v">
                                                ab 35€
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="bg-gray-100 p-3 rounded-md text-sm"
                                        data-oid="r355tev"
                                    >
                                        <p className="font-medium mb-1" data-oid="iumrf4f">
                                            Hinweis:
                                        </p>
                                        <p className="text-gray-600" data-oid="oj-pm61">
                                            Die endgültigen Kosten werden nach einer genauen
                                            Begutachtung Ihres Kites oder Wings festgelegt.
                                            Besonders kritische Stellen wie Nähte oder Verstärkungen
                                            können den Preis beeinflussen.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Location Section */}
            <section id="location" className="py-24 bg-gray-100" data-oid="cev:az7">
                <div className="max-w-7xl mx-auto px-6" data-oid="p5u:o9e">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="a0bpu4c">
                        STANDORT
                    </h2>
                    <div className="aspect-w-16 aspect-h-9 h-[400px] w-full" data-oid="zk75-c-">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.1234567890123!2d11.199571159623646!3d54.43779355215773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI2JzE2LjEiTiAxMcKwMTEnNTguNSJF!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                            className="w-full h-full border-0"
                            allowFullScreen={true}
                            loading="lazy"
                            title="Google Maps"
                            data-oid="0ym85qg"
                        ></iframe>
                    </div>
                    <div className="mt-8 text-center" data-oid="8a_b-v1">
                        <p className="text-xl" data-oid="9_gygsm">
                            Osterstraße 45, 23769 Fehmarn
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. About Section */}
            <section id="about" className="py-24 bg-white" data-oid="xwg_gf7">
                <div className="max-w-7xl mx-auto px-6" data-oid="d_topa-">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="gmddwh7">
                        UNSERE SEGELMACHERIN
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        data-oid=":z3-9zr"
                    >
                        <div data-oid="jlm_js9">
                            <div
                                className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden w-3/4 mx-auto"
                                data-oid="e57twvz"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                                    alt="Segelmacherin"
                                    className="object-cover w-full h-full"
                                    data-oid="caqckct"
                                />
                            </div>
                        </div>
                        <div data-oid="v.4zp41">
                            <h3 className="text-2xl font-medium mb-4" data-oid="o04lyuf">
                                Anna Schmidt
                            </h3>
                            <p className="text-gray-600 mb-6" data-oid="m58kpz0">
                                Mit über 15 Jahren Erfahrung als Segelmacherin hat Anna ein
                                besonderes Gespür für die Reparatur von Kites entwickelt. Ihre
                                Präzision und ihr Fachwissen machen sie zur Expertin auf ihrem
                                Gebiet.
                            </p>
                            <div className="grid grid-cols-3 gap-4" data-oid="16py4gk">
                                <img
                                    src="https://images.unsplash.com/photo-1559288972-9c5cd1f8e0f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 1"
                                    className="w-full h-32 object-cover"
                                    data-oid="qf7wg5x"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 2"
                                    className="w-full h-32 object-cover"
                                    data-oid="y72q0q8"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 3"
                                    className="w-full h-32 object-cover"
                                    data-oid="8e.617t"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Additional Services Section */}
            <section id="services" className="py-24 bg-black text-white" data-oid="jidlkul">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="qoneuu6">
                    <h2 className="text-4xl font-light mb-8" data-oid="pw6:rhn">
                        WEITERE SERVICES
                    </h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto" data-oid="xt_y.zz">
                        Neben Kitereparaturen bieten wir auch Services für Twintips, Bars und
                        Surfboards an.
                    </p>
                    <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                        data-oid="ylw15ln"
                    >
                        MEHR ERFAHREN
                    </a>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section id="faq" className="py-24 bg-white" data-oid="0qgedtx">
                <div className="max-w-3xl mx-auto px-6" data-oid="vk6_gcd">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="guedvu3">
                        HÄUFIG GESTELLTE FRAGEN
                    </h2>

                    <div className="space-y-4" data-oid="5wbq2ni">
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
                            <div key={index} className="border border-gray-200" data-oid="dizucw1">
                                <button
                                    className="flex justify-between items-center w-full px-6 py-4 text-left font-medium"
                                    onClick={() => toggleAccordion(index)}
                                    data-oid="w.gedzw"
                                >
                                    <span data-oid=":h9wen7">{faq.question}</span>
                                    <span data-oid="4dg8bh8">
                                        {activeAccordion === index ? '−' : '+'}
                                    </span>
                                </button>
                                {activeAccordion === index && (
                                    <div className="px-6 py-4 bg-gray-50" data-oid="x_.okqq">
                                        <p className="text-gray-600" data-oid="yluq:68">
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
            <section id="contact" className="py-24 bg-gray-100" data-oid="tci0_zj">
                <div className="max-w-3xl mx-auto px-6" data-oid="qghko48">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="eki363x">
                        REPARATURANFRAGE
                    </h2>
                    <form className="space-y-6" data-oid="olmeczb">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid=":gge_4u">
                            <div data-oid="mo:evsb">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="w_qtfoz"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="tqt5ogj"
                                />
                            </div>
                            <div data-oid="u.mr6e4">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="g4s5ef8"
                                >
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="9-x5oeh"
                                />
                            </div>
                        </div>
                        <div data-oid="-.av476">
                            <label
                                htmlFor="kite"
                                className="block mb-2 text-sm font-medium"
                                data-oid="j7wruae"
                            >
                                Kite Modell
                            </label>
                            <input
                                type="text"
                                id="kite"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="yozi8j."
                            />
                        </div>
                        <div data-oid="eeyjc25">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium"
                                data-oid="4zl8563"
                            >
                                Beschreibung des Schadens
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="ws7qe6d"
                            ></textarea>
                        </div>
                        <div className="text-center" data-oid="j9ia5op">
                            <button
                                type="submit"
                                className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                                data-oid="31t2zh-"
                            >
                                ANFRAGE SENDEN
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12" data-oid="ay4dy3a">
                <div className="max-w-7xl mx-auto px-6" data-oid="nn_wtph">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10" data-oid="ww.:p3s">
                        <div data-oid="7.7faoo">
                            <h3 className="text-xl font-medium mb-4" data-oid="1zcwc12">
                                KITEREPAIR
                            </h3>
                            <p className="text-gray-400" data-oid="5v-2g-1">
                                Professionelle Reparatur für Ihren Kite.
                            </p>
                        </div>
                        <div data-oid="82ygjov">
                            <h3 className="text-xl font-medium mb-4" data-oid="y98k3r6">
                                KONTAKT
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid=":r19.d:">
                                Osterstraße 47
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="o1j-o6h">
                                23769 Fehmarn
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="dug-d2a">
                                Tel: +49 123 456789
                            </p>
                            <p className="text-gray-400" data-oid="lxddni7">
                                E-Mail: info@kiterepair.de
                            </p>
                        </div>
                        <div data-oid="cb1gos7">
                            <h3 className="text-xl font-medium mb-4" data-oid="r3zvmf1">
                                ÖFFNUNGSZEITEN
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="mkrnbsw">
                                Mo-Fr: 9:00 - 17:00 Uhr
                            </p>
                            <p className="text-gray-400 mb-6" data-oid="5_s1u-t">
                                Sa: Nach Vereinbarung
                            </p>
                            <a
                                href="#contact"
                                className="inline-block border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
                                data-oid="8td0m4_"
                            >
                                REPARATUR ANFRAGEN
                            </a>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm"
                        data-oid="l_9z92l"
                    >
                        © {new Date().getFullYear()} KITEREPAIR. Alle Rechte vorbehalten.
                    </div>
                </div>
            </footer>
        </div>
    );
}
