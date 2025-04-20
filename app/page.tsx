'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="font-sans text-gray-900 bg-white" data-oid="pvlmrpm">
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-4 px-6"
                data-oid="km.pi0-"
            >
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="48v2yfg"
                >
                    <div className="flex space-x-6 text-sm" data-oid="ox::9sf">
                        <a
                            href="#hero"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="3ggndkk"
                        >
                            HOME
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="5jfxmtx"
                        >
                            BENEFITS
                        </a>
                        <a
                            href="#process"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="vb6._p0"
                        >
                            PROCESS
                        </a>
                        <a
                            href="#location"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="ax50c:o"
                        >
                            LOCATION
                        </a>
                        <a
                            href="#about"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="ju2f:ut"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#services"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="44r1:56"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="g0kke1c"
                        >
                            FAQ
                        </a>
                    </div>
                    <div className="text-xl font-bold tracking-tight" data-oid="au4l430">
                        KITEREPAIR
                    </div>
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section
                id="hero"
                className="pt-24 relative h-screen flex items-center"
                data-oid="6syc55m"
            >
                <div className="absolute inset-0 z-0" data-oid="-n3tjlt">
                    <div
                        className="w-full h-full bg-[url('https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-80"
                        data-oid="zv3usga"
                    ></div>
                </div>
                <div
                    className="relative z-10 max-w-7xl mx-auto px-6 text-center"
                    data-oid=":lkz9_v"
                >
                    <h1
                        className="text-5xl md:text-7xl font-light mb-6 leading-tight"
                        data-oid="yi0y279"
                    >
                        Professionelle <br data-oid="hv72__x" />
                        <span className="font-bold" data-oid="ro4kkx5">
                            Kite Reparatur
                        </span>
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto mb-10" data-oid="_-fhjub">
                        Wir reparieren Ihren Kite schnell, zuverlässig und professionell. Unsere
                        erfahrene Segelmacherin sorgt dafür, dass Ihr Equipment wieder wie neu ist.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                        data-oid="9p8iwgh"
                    >
                        ANGEBOT STELLEN
                    </a>
                </div>
            </section>

            {/* 2. Benefits Section */}
            <section id="benefits" className="bg-black text-white py-24" data-oid="pi0n635">
                <div className="max-w-7xl mx-auto px-6" data-oid="xebbal4">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="u-tk90e">
                        UNSERE VORTEILE
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                        data-oid="a20ksr7"
                    >
                        <div className="text-center" data-oid="tz5_fs1">
                            <div className="mb-6 flex justify-center" data-oid="k4fk50l">
                                <img
                                    src="/images/benefits/repair.png"
                                    alt="Reparatur Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="e2f3pq_"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="t5i5jjg">
                                Reparatur aller Hersteller
                            </h3>
                            <p className="text-gray-400" data-oid="b-e5hih">
                                Wir reparieren Kites aller Marken und Modelle mit höchster
                                Präzision.
                            </p>
                        </div>
                        <div className="text-center" data-oid="fg2e6os">
                            <div className="mb-6 flex justify-center" data-oid="w8d5npu">
                                <img
                                    src="/images/benefits/shipping.png"
                                    alt="Versand Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="3s8j456"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="od:e60x">
                                Einsenden oder Abgeben
                            </h3>
                            <p className="text-gray-400" data-oid="xrfi3ml">
                                Senden Sie Ihren Kite ein oder geben Sie ihn direkt bei uns vor Ort
                                ab.
                            </p>
                        </div>
                        <div className="text-center" data-oid="6a1nvsg">
                            <div className="mb-6 flex justify-center" data-oid=".n:frey">
                                <img
                                    src="/images/benefits/clock.png"
                                    alt="Uhr Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="9kape8t"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="eyr--lf">
                                Angebot innerhalb 24h
                            </h3>
                            <p className="text-gray-400" data-oid="hi:3a9e">
                                Schnelle Bearbeitung und transparente Preise innerhalb eines Tages.
                            </p>
                        </div>
                        <div className="text-center" data-oid="9kepf_c">
                            <div className="mb-6 flex justify-center" data-oid="r7yacgl">
                                <img
                                    src="/images/benefits/calendar.png"
                                    alt="Kalender Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="b5o8fd."
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="n5-6mip">
                                Reparatur in 5 Werktagen
                            </h3>
                            <p className="text-gray-400" data-oid="l_6.5:f">
                                Schnelle Bearbeitung, damit Sie schnell wieder aufs Wasser können.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Process Section */}
            <section id="process" className="py-24 bg-white" data-oid="4tt8ry7">
                <div className="max-w-7xl mx-auto px-6" data-oid="7qff0c.">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="tk4comx">
                        UNSER PROZESS
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                        data-oid="z9n3xnm"
                    >
                        <div className="relative" data-oid="9blivfx">
                            <div
                                className="text-6xl font-bold text-gray-200 absolute -top-10 -left-4"
                                data-oid="471bbpb"
                            >
                                1
                            </div>
                            <h3
                                className="text-xl font-medium mb-3 relative z-10"
                                data-oid="k.5j-xy"
                            >
                                Anfrage stellen
                            </h3>
                            <p className="text-gray-600" data-oid=".734tsy">
                                Kontaktieren Sie uns über das Formular oder telefonisch und
                                beschreiben Sie den Schaden.
                            </p>
                        </div>
                        <div className="relative" data-oid="f7lhb:2">
                            <div
                                className="text-6xl font-bold text-gray-200 absolute -top-10 -left-4"
                                data-oid="11h6esn"
                            >
                                2
                            </div>
                            <h3
                                className="text-xl font-medium mb-3 relative z-10"
                                data-oid="83fir.g"
                            >
                                Angebot erhalten
                            </h3>
                            <p className="text-gray-600" data-oid="e1y25i5">
                                Innerhalb von 24 Stunden erhalten Sie ein unverbindliches Angebot
                                von uns.
                            </p>
                        </div>
                        <div className="relative" data-oid="-5wsh4u">
                            <div
                                className="text-6xl font-bold text-gray-200 absolute -top-10 -left-4"
                                data-oid="m0rp5j."
                            >
                                3
                            </div>
                            <h3
                                className="text-xl font-medium mb-3 relative z-10"
                                data-oid="wf9_y79"
                            >
                                Reparatur
                            </h3>
                            <p className="text-gray-600" data-oid="h13cr9a">
                                Nach Ihrer Zustimmung reparieren wir Ihren Kite mit höchster
                                Sorgfalt.
                            </p>
                        </div>
                        <div className="relative" data-oid=":74xd-j">
                            <div
                                className="text-6xl font-bold text-gray-200 absolute -top-10 -left-4"
                                data-oid="9i1vwui"
                            >
                                4
                            </div>
                            <h3
                                className="text-xl font-medium mb-3 relative z-10"
                                data-oid="78a3b3x"
                            >
                                Rückgabe
                            </h3>
                            <p className="text-gray-600" data-oid="b9:3api">
                                Ihr reparierter Kite wird versandt oder kann vor Ort abgeholt
                                werden.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Location Section */}
            <section id="location" className="py-24 bg-gray-100" data-oid="e5i0wan">
                <div className="max-w-7xl mx-auto px-6" data-oid="hvefju5">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="jpcnrhr">
                        STANDORT
                    </h2>
                    <div className="aspect-w-16 aspect-h-9 h-[400px] w-full" data-oid="s1nrm.l">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.1234567890123!2d11.1234!3d54.4321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI1JzU1LjYiTiAxMcKwMDcnMjQuMiJF!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                            data-oid="t2xrfl0"
                        ></iframe>
                    </div>
                    <div className="mt-8 text-center" data-oid="f_11pf.">
                        <p className="text-xl" data-oid="vuwpw4n">
                            Osterstraße 47, 23769 Fehmarn
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. About Section */}
            <section id="about" className="py-24 bg-white" data-oid="9w0agy5">
                <div className="max-w-7xl mx-auto px-6" data-oid=":et6mk6">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="9.l0o:1">
                        UNSERE SEGELMACHERIN
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        data-oid="uzs-h5_"
                    >
                        <div data-oid="s.fr-2t">
                            <div
                                className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden w-3/4 mx-auto"
                                data-oid="kz_y81i"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                                    alt="Segelmacherin"
                                    className="object-cover w-full h-full"
                                    data-oid="e515c-9"
                                />
                            </div>
                        </div>
                        <div data-oid="woadg4.">
                            <h3 className="text-2xl font-medium mb-4" data-oid="thfctdf">
                                Anna Schmidt
                            </h3>
                            <p className="text-gray-600 mb-6" data-oid="._724rw">
                                Mit über 15 Jahren Erfahrung als Segelmacherin hat Anna ein
                                besonderes Gespür für die Reparatur von Kites entwickelt. Ihre
                                Präzision und ihr Fachwissen machen sie zur Expertin auf ihrem
                                Gebiet.
                            </p>
                            <div className="grid grid-cols-3 gap-4" data-oid="d22smyj">
                                <img
                                    src="https://images.unsplash.com/photo-1559288972-9c5cd1f8e0f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 1"
                                    className="w-full h-32 object-cover"
                                    data-oid="xh-jizp"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 2"
                                    className="w-full h-32 object-cover"
                                    data-oid="gbjbajk"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 3"
                                    className="w-full h-32 object-cover"
                                    data-oid="lq3vr-q"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Additional Services Section */}
            <section id="services" className="py-24 bg-black text-white" data-oid="onfys:i">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="y8v4zo-">
                    <h2 className="text-4xl font-light mb-8" data-oid="7f0lg0:">
                        WEITERE SERVICES
                    </h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto" data-oid="5k9p:bh">
                        Neben Kitereparaturen bieten wir auch Services für Twintips, Bars und
                        Surfboards an.
                    </p>
                    <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                        data-oid="zfs7i9y"
                    >
                        MEHR ERFAHREN
                    </a>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section id="faq" className="py-24 bg-white" data-oid="wxyn4ui">
                <div className="max-w-3xl mx-auto px-6" data-oid="02_ocki">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="t28mdri">
                        HÄUFIG GESTELLTE FRAGEN
                    </h2>

                    <div className="space-y-4" data-oid="o8dq:6-">
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
                            <div key={index} className="border border-gray-200" data-oid="w3al_jl">
                                <button
                                    className="flex justify-between items-center w-full px-6 py-4 text-left font-medium"
                                    onClick={() => toggleAccordion(index)}
                                    data-oid="jt1z75:"
                                >
                                    <span data-oid="do:zw5l">{faq.question}</span>
                                    <span data-oid="q_o7zmi">
                                        {activeAccordion === index ? '−' : '+'}
                                    </span>
                                </button>
                                {activeAccordion === index && (
                                    <div className="px-6 py-4 bg-gray-50" data-oid="w.z_:7w">
                                        <p className="text-gray-600" data-oid="7sgi40w">
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
            <section id="contact" className="py-24 bg-gray-100" data-oid="lck91w9">
                <div className="max-w-3xl mx-auto px-6" data-oid="ukxqzay">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="ts:-h7j">
                        REPARATURANFRAGE
                    </h2>
                    <form className="space-y-6" data-oid="ve.s7jb">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="iop:ib7">
                            <div data-oid="4pxruya">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="y.n_b-b"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="ezyubx_"
                                />
                            </div>
                            <div data-oid="weaf36b">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="1sb62bh"
                                >
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="imusyli"
                                />
                            </div>
                        </div>
                        <div data-oid="lvni771">
                            <label
                                htmlFor="kite"
                                className="block mb-2 text-sm font-medium"
                                data-oid="okyb5gl"
                            >
                                Kite Modell
                            </label>
                            <input
                                type="text"
                                id="kite"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="n17ccz3"
                            />
                        </div>
                        <div data-oid="rpzr4eh">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium"
                                data-oid="wo6.9l1"
                            >
                                Beschreibung des Schadens
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="a2qvwhw"
                            ></textarea>
                        </div>
                        <div className="text-center" data-oid="dw86pb.">
                            <button
                                type="submit"
                                className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                                data-oid="1a9k44a"
                            >
                                ANFRAGE SENDEN
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12" data-oid="w8-k_g-">
                <div className="max-w-7xl mx-auto px-6" data-oid="tt8w5s3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10" data-oid="usu4api">
                        <div data-oid="lz1xv96">
                            <h3 className="text-xl font-medium mb-4" data-oid="6rlqst.">
                                KITEREPAIR
                            </h3>
                            <p className="text-gray-400" data-oid="fcozi8o">
                                Professionelle Reparatur für Ihren Kite.
                            </p>
                        </div>
                        <div data-oid="2piw9og">
                            <h3 className="text-xl font-medium mb-4" data-oid="0_u-1_o">
                                KONTAKT
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="qgh9i:k">
                                Osterstraße 47
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="82sp7hp">
                                23769 Fehmarn
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="310mpx2">
                                Tel: +49 123 456789
                            </p>
                            <p className="text-gray-400" data-oid="gwkrh47">
                                E-Mail: info@kiterepair.de
                            </p>
                        </div>
                        <div data-oid="6w-8gxp">
                            <h3 className="text-xl font-medium mb-4" data-oid="gq-edqd">
                                ÖFFNUNGSZEITEN
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="8.9qk2z">
                                Mo-Fr: 9:00 - 17:00 Uhr
                            </p>
                            <p className="text-gray-400 mb-6" data-oid="o5vcnms">
                                Sa: Nach Vereinbarung
                            </p>
                            <a
                                href="#contact"
                                className="inline-block border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
                                data-oid="fzar1xm"
                            >
                                REPARATUR ANFRAGEN
                            </a>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm"
                        data-oid="ea7xa6r"
                    >
                        © {new Date().getFullYear()} KITEREPAIR. Alle Rechte vorbehalten.
                    </div>
                </div>
            </footer>
        </div>
    );
}
