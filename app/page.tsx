'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const heroText =
        'Wir reparieren Ihren Kite schnell, zuverlässig und professionell. Unsere erfahrene Segelmacherin sorgt dafür, dass Ihr Equipment wieder wie neu ist.';

    return (
        <div className="font-sans text-gray-900 bg-white" data-oid="cc4onyx">
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-4 px-6"
                data-oid="rh0o.p5"
            >
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="3oo7q0e"
                >
                    <div className="text-xl font-bold tracking-tight" data-oid="c52ecmg">
                        KITEREPAIR
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-none"
                        onClick={toggleMobileMenu}
                        aria-label="Menu öffnen"
                        data-oid="g1:3d7d"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="2grk6h6"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid="j50nf7."
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                    data-oid="p_wer:v"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-sm" data-oid="137bl:9">
                        <a
                            href="#hero"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="i51yswt"
                        >
                            HOME
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-gray-300 transition-colors"
                            data-oid=":6.diew"
                        >
                            BENEFITS
                        </a>
                        <a
                            href="#process"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="r62dii7"
                        >
                            PROCESS
                        </a>
                        <a
                            href="#location"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="iv5h1pg"
                        >
                            LOCATION
                        </a>
                        <a
                            href="#about"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="pi7ec7r"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#services"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="p3:9kut"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-gray-300 transition-colors"
                            data-oid=":tee7r4"
                        >
                            FAQ
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 bg-black mt-4 py-4 px-6 border-t border-gray-800`}
                    data-oid="h4p_p:g"
                >
                    <div className="flex flex-col space-y-4" data-oid="mjrf9lb">
                        <a
                            href="#hero"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="ih0en34"
                        >
                            HOME
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="gmjj9:z"
                        >
                            BENEFITS
                        </a>
                        <a
                            href="#process"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="s9cntcn"
                        >
                            PROCESS
                        </a>
                        <a
                            href="#location"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="pl03ai5"
                        >
                            LOCATION
                        </a>
                        <a
                            href="#about"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="8095w_z"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#services"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="vq7orjv"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-gray-300 transition-colors"
                            onClick={toggleMobileMenu}
                            data-oid="-.m1.l2"
                        >
                            FAQ
                        </a>
                    </div>
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section
                id="hero"
                className="pt-24 relative h-screen flex flex-col justify-center"
                data-oid=":xp7zhd"
            >
                <div
                    className="relative z-10 max-w-7xl text-center h-full p-0 m-0 flex flex-col items-center justify-center"
                    data-oid="4c0-kpr"
                >
                    <div
                        className="flex-grow flex relative top-auto right-auto bottom-auto left-auto w-full rounded-none m-0 flex-col items-center justify-end "
                        data-oid="gtp.7.f"
                    >
                        <h1
                            className="sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 uppercase text-[60px]"
                            data-oid="bl4iqd-"
                        >
                            Professionelle <br className="hidden sm:block" data-oid="wu8o..i" />
                            <span
                                className="block sm:inline uppercase font-bold text-[60px]"
                                data-oid="05l48x6"
                            >
                                Kite Reparatur
                            </span>
                        </h1>
                        <p
                            className="hidden sm:block text-lg sm:text-xl max-w-2xl mx-auto mb-6 md:mb-10 px-4 sm:px-0"
                            data-oid="uuzci4y"
                        >
                            {heroText}
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors sm:w-auto max-w-xs rounded-[20px] m-[14px] w-[fit-content]"
                            data-oid="-yapj4t"
                        >
                            ANGEBOT STELLEN
                        </a>
                    </div>
                    <div
                        className="block sm:hidden w-full text-white p-4 mt-auto pr-[16px] pl-[16px] border-[#00000000] bg-[#00000084]"
                        data-oid="818i.y2"
                    >
                        <p className="text-sm" data-oid="3is5w0q">
                            {heroText}
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 z-0" data-oid="p-oepin">
                    <div
                        className="w-full h-full bg-[url('https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-80 flex justify-center"
                        data-oid="tjpsj1o"
                    ></div>
                </div>
            </section>

            {/* 2. Benefits Section */}
            <section id="benefits" className="bg-black text-white py-24" data-oid="g87tqh2">
                <div className="max-w-7xl mx-auto px-6" data-oid="v9gz08i">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="juq27-a">
                        UNSERE VORTEILE
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                        data-oid="n:cmtqs"
                    >
                        <div className="text-center" data-oid="hrodtaz">
                            <div className="mb-6 flex justify-center" data-oid="-sdy7sv">
                                <img
                                    src="/images/benefits/repair.png"
                                    alt="Reparatur Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="jnb3zt-"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="opje7b_">
                                Reparatur aller Hersteller
                            </h3>
                            <p className="text-gray-400" data-oid="i1p0a:9">
                                Wir reparieren Kites aller Marken und Modelle mit höchster
                                Präzision.
                            </p>
                        </div>
                        <div className="text-center" data-oid="z:d207c">
                            <div className="mb-6 flex justify-center" data-oid="5ja_83n">
                                <img
                                    src="/images/benefits/shipping.png"
                                    alt="Versand Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="9t7u-2l"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="tqu_wl0">
                                Einsenden oder Abgeben
                            </h3>
                            <p className="text-gray-400" data-oid="ygjylmw">
                                Senden Sie Ihren Kite ein oder geben Sie ihn direkt bei uns vor Ort
                                ab.
                            </p>
                        </div>
                        <div className="text-center" data-oid=":d9t6oa">
                            <div className="mb-6 flex justify-center" data-oid="ado81ro">
                                <img
                                    src="/images/benefits/clock.png"
                                    alt="Uhr Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="l8s5z07"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="2f76nvx">
                                Angebot innerhalb 24h
                            </h3>
                            <p className="text-gray-400" data-oid="dfm3ykx">
                                Schnelle Bearbeitung und transparente Preise innerhalb eines Tages.
                            </p>
                        </div>
                        <div className="text-center" data-oid="cd0gfjm">
                            <div className="mb-6 flex justify-center" data-oid="037wn85">
                                <img
                                    src="/images/benefits/calendar.png"
                                    alt="Kalender Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="a_q_5yf"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="n7dcrps">
                                Reparatur in 5 Werktagen
                            </h3>
                            <p className="text-gray-400" data-oid="nxx.:tm">
                                Schnelle Bearbeitung, damit Sie schnell wieder aufs Wasser können.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Process Section */}
            <section id="process" className="py-24 bg-white" data-oid="ry:dy8-">
                <div className="max-w-7xl mx-auto px-6" data-oid="w-u9wl6">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="60rqkoq">
                        UNSER PROZESS
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="idolhxa"
                    >
                        {/* Card 1 */}
                        <div
                            className="bg-white border-2 border-gray-200 rounded-lg"
                            data-oid="4pu37ug"
                        >
                            <div className="bg-black text-white p-4 text-center" data-oid="sq_083l">
                                <span className="text-2xl font-bold" data-oid="4:lxsuo">
                                    1
                                </span>
                            </div>
                            <div className="p-6" data-oid="8_2nksu">
                                <h3 className="text-xl font-medium mb-3" data-oid="sbktz0l">
                                    Anfrage stellen
                                </h3>
                                <p className="text-gray-600" data-oid=":pnxibo">
                                    Kontaktieren Sie uns über das Formular oder telefonisch und
                                    beschreiben Sie den Schaden.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="bg-white border-2 border-gray-200 rounded-lg"
                            data-oid="ldn70m."
                        >
                            <div className="bg-black text-white p-4 text-center" data-oid="ayfh7m.">
                                <span className="text-2xl font-bold" data-oid="1p39lse">
                                    2
                                </span>
                            </div>
                            <div className="p-6" data-oid="_-c_8mc">
                                <h3 className="text-xl font-medium mb-3" data-oid="3oaj2i0">
                                    Angebot erhalten
                                </h3>
                                <p className="text-gray-600" data-oid="fsfn11-">
                                    Innerhalb von 24 Stunden erhalten Sie ein unverbindliches
                                    Angebot von uns.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="bg-white border-2 border-gray-200 rounded-lg"
                            data-oid=":rj1s74"
                        >
                            <div className="bg-black text-white p-4 text-center" data-oid="bg1dy8h">
                                <span className="text-2xl font-bold" data-oid=":uayigo">
                                    3
                                </span>
                            </div>
                            <div className="p-6" data-oid="5u.3n-6">
                                <h3 className="text-xl font-medium mb-3" data-oid="qlqud2p">
                                    Reparatur
                                </h3>
                                <p className="text-gray-600" data-oid="dfrlq0y">
                                    Nach Ihrer Zustimmung reparieren wir Ihren Kite mit höchster
                                    Sorgfalt.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div
                            className="bg-white border-2 border-gray-200 rounded-lg"
                            data-oid="n4rjfgw"
                        >
                            <div className="bg-black text-white p-4 text-center" data-oid="7-p8gyt">
                                <span className="text-2xl font-bold" data-oid="7nqrd.3">
                                    4
                                </span>
                            </div>
                            <div className="p-6" data-oid="w:jfrxh">
                                <h3 className="text-xl font-medium mb-3" data-oid="5kdwdea">
                                    Rückgabe
                                </h3>
                                <p className="text-gray-600" data-oid="xej1mco">
                                    Ihr reparierter Kite wird versandt oder kann vor Ort abgeholt
                                    werden.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Location Section */}
            <section id="location" className="py-24 bg-gray-100" data-oid="az-jwzj">
                <div className="max-w-7xl mx-auto px-6" data-oid=":73c.p7">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="_vgmo8m">
                        STANDORT
                    </h2>
                    <div className="aspect-w-16 aspect-h-9 h-[400px] w-full" data-oid="s99shv6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.1234567890123!2d11.1234!3d54.4321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI1JzU1LjYiTiAxMcKwMDcnMjQuMiJF!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                            data-oid="1h5fyey"
                        ></iframe>
                    </div>
                    <div className="mt-8 text-center" data-oid="a9eo:md">
                        <p className="text-xl" data-oid="5nm8o:9">
                            Osterstraße 47, 23769 Fehmarn
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. About Section */}
            <section id="about" className="py-24 bg-white" data-oid="nn_ic90">
                <div className="max-w-7xl mx-auto px-6" data-oid=".ft7q9c">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="54fzt20">
                        UNSERE SEGELMACHERIN
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        data-oid="508ug3j"
                    >
                        <div data-oid="cmenffj">
                            <div
                                className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden w-3/4 mx-auto"
                                data-oid="y5o.6xn"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                                    alt="Segelmacherin"
                                    className="object-cover w-full h-full"
                                    data-oid="5hkv:6f"
                                />
                            </div>
                        </div>
                        <div data-oid="9r0v8qb">
                            <h3 className="text-2xl font-medium mb-4" data-oid="b.gt4.r">
                                Anna Schmidt
                            </h3>
                            <p className="text-gray-600 mb-6" data-oid="kx5dtyg">
                                Mit über 15 Jahren Erfahrung als Segelmacherin hat Anna ein
                                besonderes Gespür für die Reparatur von Kites entwickelt. Ihre
                                Präzision und ihr Fachwissen machen sie zur Expertin auf ihrem
                                Gebiet.
                            </p>
                            <div className="grid grid-cols-3 gap-4" data-oid="zunhv-u">
                                <img
                                    src="https://images.unsplash.com/photo-1559288972-9c5cd1f8e0f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 1"
                                    className="w-full h-32 object-cover"
                                    data-oid="1df:_0y"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 2"
                                    className="w-full h-32 object-cover"
                                    data-oid="no1g8oa"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 3"
                                    className="w-full h-32 object-cover"
                                    data-oid=".c6ynz4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Additional Services Section */}
            <section id="services" className="py-24 bg-black text-white" data-oid="tyh14y7">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="2btg55v">
                    <h2 className="text-4xl font-light mb-8" data-oid=":q_eph1">
                        WEITERE SERVICES
                    </h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto" data-oid="gh8x6ub">
                        Neben Kitereparaturen bieten wir auch Services für Twintips, Bars und
                        Surfboards an.
                    </p>
                    <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                        data-oid="9wtyzvs"
                    >
                        MEHR ERFAHREN
                    </a>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section id="faq" className="py-24 bg-white" data-oid="0dx13ir">
                <div className="max-w-3xl mx-auto px-6" data-oid="8v4n9dr">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="zuone35">
                        HÄUFIG GESTELLTE FRAGEN
                    </h2>

                    <div className="space-y-4" data-oid="25bwpcx">
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
                            <div key={index} className="border border-gray-200" data-oid="d-ow33e">
                                <button
                                    className="flex justify-between items-center w-full px-6 py-4 text-left font-medium"
                                    onClick={() => toggleAccordion(index)}
                                    data-oid="k10bg8o"
                                >
                                    <span data-oid="trehjeu">{faq.question}</span>
                                    <span data-oid="sxqk7.l">
                                        {activeAccordion === index ? '−' : '+'}
                                    </span>
                                </button>
                                {activeAccordion === index && (
                                    <div className="px-6 py-4 bg-gray-50" data-oid="h.69qo.">
                                        <p className="text-gray-600" data-oid="r7qo:je">
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
            <section id="contact" className="py-24 bg-gray-100" data-oid="zy_:.r-">
                <div className="max-w-3xl mx-auto px-6" data-oid="v8:ouw3">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="pb0gard">
                        REPARATURANFRAGE
                    </h2>
                    <form className="space-y-6" data-oid="iy9a9d:">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="t.olqfo">
                            <div data-oid="lsxvzz5">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="yq7rfxt"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="mrmiy9x"
                                />
                            </div>
                            <div data-oid="59i8c7f">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="0p0xjwb"
                                >
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="w5zwew2"
                                />
                            </div>
                        </div>
                        <div data-oid=".ai2:ea">
                            <label
                                htmlFor="kite"
                                className="block mb-2 text-sm font-medium"
                                data-oid="6y2sits"
                            >
                                Kite Modell
                            </label>
                            <input
                                type="text"
                                id="kite"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="c-d5:ah"
                            />
                        </div>
                        <div data-oid="1vf3o:i">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium"
                                data-oid=":s5b6nx"
                            >
                                Beschreibung des Schadens
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="ni-2mw1"
                            ></textarea>
                        </div>
                        <div className="text-center" data-oid="f4md5_p">
                            <button
                                type="submit"
                                className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                                data-oid="z_j:e0y"
                            >
                                ANFRAGE SENDEN
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12" data-oid="bwh8gk9">
                <div className="max-w-7xl mx-auto px-6" data-oid="c.x1t-n">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10" data-oid="oh3ggzp">
                        <div data-oid="93te.n7">
                            <h3 className="text-xl font-medium mb-4" data-oid="0-s2e:f">
                                KITEREPAIR
                            </h3>
                            <p className="text-gray-400" data-oid="n1q7ms0">
                                Professionelle Reparatur für Ihren Kite.
                            </p>
                        </div>
                        <div data-oid="gxvai:3">
                            <h3 className="text-xl font-medium mb-4" data-oid="qp..h79">
                                KONTAKT
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="4:5z1--">
                                Osterstraße 47
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="h7c27u6">
                                23769 Fehmarn
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="imowlei">
                                Tel: +49 123 456789
                            </p>
                            <p className="text-gray-400" data-oid="p92mwi2">
                                E-Mail: info@kiterepair.de
                            </p>
                        </div>
                        <div data-oid="fm8628:">
                            <h3 className="text-xl font-medium mb-4" data-oid="zflcbb8">
                                ÖFFNUNGSZEITEN
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="mb3pk:8">
                                Mo-Fr: 9:00 - 17:00 Uhr
                            </p>
                            <p className="text-gray-400 mb-6" data-oid="h:2:5mz">
                                Sa: Nach Vereinbarung
                            </p>
                            <a
                                href="#contact"
                                className="inline-block border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
                                data-oid="dytsw_v"
                            >
                                REPARATUR ANFRAGEN
                            </a>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm"
                        data-oid="n312a6z"
                    >
                        © {new Date().getFullYear()} KITEREPAIR. Alle Rechte vorbehalten.
                    </div>
                </div>
            </footer>
        </div>
    );
}
