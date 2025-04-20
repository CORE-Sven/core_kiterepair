'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="font-sans text-gray-900 bg-white" data-oid="vp0pcl5">
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-4 px-6"
                data-oid="e3it7y7"
            >
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="k-8f828"
                >
                    <div className="flex space-x-6 text-sm" data-oid="4sm4un-">
                        <a
                            href="#hero"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="fu13dhe"
                        >
                            HOME
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="71_b5rk"
                        >
                            BENEFITS
                        </a>
                        <a
                            href="#process"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="yxrl9dq"
                        >
                            PROCESS
                        </a>
                        <a
                            href="#location"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="1ij254c"
                        >
                            LOCATION
                        </a>
                        <a
                            href="#about"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="widp51e"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#services"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="6mfqmuq"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="qcj_.me"
                        >
                            FAQ
                        </a>
                    </div>
                    <div className="text-xl font-bold tracking-tight" data-oid="c2wsy2p">
                        KITEREPAIR
                    </div>
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section
                id="hero"
                className="pt-24 relative h-screen flex items-center"
                data-oid="95ap5sr"
            >
                <div className="absolute inset-0 z-0" data-oid="94:m0d9">
                    <div
                        className="w-full h-full bg-[url('https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-80"
                        data-oid="o_btrch"
                    ></div>
                </div>
                <div
                    className="relative z-10 max-w-7xl mx-auto px-6 text-center"
                    data-oid="capki9q"
                >
                    <h1
                        className="text-5xl md:text-7xl font-light mb-6 leading-tight"
                        data-oid="6s281q5"
                    >
                        Professionelle <br data-oid="lidgbac" />
                        <span className="font-bold" data-oid="_me4-da">
                            Kite Reparatur
                        </span>
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto mb-10" data-oid="b6he26m">
                        Wir reparieren Ihren Kite schnell, zuverlässig und professionell. Unsere
                        erfahrene Segelmacherin sorgt dafür, dass Ihr Equipment wieder wie neu ist.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                        data-oid="3_o5wpl"
                    >
                        ANGEBOT STELLEN
                    </a>
                </div>
            </section>

            {/* 2. Benefits Section */}
            <section id="benefits" className="bg-black text-white py-24" data-oid="tdtbh75">
                <div className="max-w-7xl mx-auto px-6" data-oid=":41u7uz">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="wz25rhk">
                        UNSERE VORTEILE
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                        data-oid="zr-df1l"
                    >
                        <div className="text-center" data-oid="gko6nmm">
                            <div className="text-5xl mb-6" data-oid="gixi4tg">
                                🛠️
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="2ej2ow9">
                                Reparatur aller Hersteller
                            </h3>
                            <p className="text-gray-400" data-oid="-rk2o8z">
                                Wir reparieren Kites aller Marken und Modelle mit höchster
                                Präzision.
                            </p>
                        </div>
                        <div className="text-center" data-oid="x52fdin">
                            <div className="text-5xl mb-6" data-oid="t3f49.b">
                                📦
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="ni.vpc5">
                                Einsenden oder Abgeben
                            </h3>
                            <p className="text-gray-400" data-oid="j6zo9an">
                                Senden Sie Ihren Kite ein oder geben Sie ihn direkt bei uns vor Ort
                                ab.
                            </p>
                        </div>
                        <div className="text-center" data-oid="5vo3o-x">
                            <div className="text-5xl mb-6" data-oid="ideoks7">
                                ⏱️
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="1gox0_0">
                                Angebot innerhalb 24h
                            </h3>
                            <p className="text-gray-400" data-oid="t7ekvyq">
                                Schnelle Bearbeitung und transparente Preise innerhalb eines Tages.
                            </p>
                        </div>
                        <div className="text-center" data-oid="idg:2c.">
                            <div className="text-5xl mb-6" data-oid="se5w2_8">
                                📅
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="hqzzpu8">
                                Reparatur in 5 Werktagen
                            </h3>
                            <p className="text-gray-400" data-oid="e9jflvh">
                                Schnelle Bearbeitung, damit Sie schnell wieder aufs Wasser können.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Process Section */}
            <section id="process" className="py-24 bg-white" data-oid="_vh8rsp">
                <div className="max-w-7xl mx-auto px-6" data-oid="g28gs0x">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="7p:x9g-">
                        UNSER PROZESS
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                        data-oid="d6ir:j-"
                    >
                        <div className="relative" data-oid="ix-nby1">
                            <div
                                className="text-6xl font-bold text-gray-200 absolute -top-10 -left-4"
                                data-oid="hyk90ay"
                            >
                                1
                            </div>
                            <h3
                                className="text-xl font-medium mb-3 relative z-10"
                                data-oid="xwdoo:8"
                            >
                                Anfrage stellen
                            </h3>
                            <p className="text-gray-600" data-oid="7wdu.br">
                                Kontaktieren Sie uns über das Formular oder telefonisch und
                                beschreiben Sie den Schaden.
                            </p>
                        </div>
                        <div className="relative" data-oid="e18zm-_">
                            <div
                                className="text-6xl font-bold text-gray-200 absolute -top-10 -left-4"
                                data-oid="nm:0ca-"
                            >
                                2
                            </div>
                            <h3
                                className="text-xl font-medium mb-3 relative z-10"
                                data-oid="uo_7xdf"
                            >
                                Angebot erhalten
                            </h3>
                            <p className="text-gray-600" data-oid="cmz73nj">
                                Innerhalb von 24 Stunden erhalten Sie ein unverbindliches Angebot
                                von uns.
                            </p>
                        </div>
                        <div className="relative" data-oid="cfjxca3">
                            <div
                                className="text-6xl font-bold text-gray-200 absolute -top-10 -left-4"
                                data-oid="2i_zgvr"
                            >
                                3
                            </div>
                            <h3
                                className="text-xl font-medium mb-3 relative z-10"
                                data-oid="6ugb9sr"
                            >
                                Reparatur
                            </h3>
                            <p className="text-gray-600" data-oid="k-wq5a2">
                                Nach Ihrer Zustimmung reparieren wir Ihren Kite mit höchster
                                Sorgfalt.
                            </p>
                        </div>
                        <div className="relative" data-oid="0zv-2bp">
                            <div
                                className="text-6xl font-bold text-gray-200 absolute -top-10 -left-4"
                                data-oid="sbsz19-"
                            >
                                4
                            </div>
                            <h3
                                className="text-xl font-medium mb-3 relative z-10"
                                data-oid="qsoygcv"
                            >
                                Rückgabe
                            </h3>
                            <p className="text-gray-600" data-oid="86zfuky">
                                Ihr reparierter Kite wird versandt oder kann vor Ort abgeholt
                                werden.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Location Section */}
            <section id="location" className="py-24 bg-gray-100" data-oid="k8zokmu">
                <div className="max-w-7xl mx-auto px-6" data-oid="ovji45w">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="f:g7ncs">
                        STANDORT
                    </h2>
                    <div className="aspect-w-16 aspect-h-9 h-[400px] w-full" data-oid="icqhksl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.1234567890123!2d11.1234!3d54.4321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI1JzU1LjYiTiAxMcKwMDcnMjQuMiJF!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                            data-oid="qwd:b8."
                        ></iframe>
                    </div>
                    <div className="mt-8 text-center" data-oid="e5krfqr">
                        <p className="text-xl" data-oid="mumbtv3">
                            Osterstraße 47, 23769 Fehmarn
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. About Section */}
            <section id="about" className="py-24 bg-white" data-oid="osvbuac">
                <div className="max-w-7xl mx-auto px-6" data-oid="z0p1rms">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="8em1ap.">
                        UNSERE SEGELMACHERIN
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        data-oid="w2o1ibb"
                    >
                        <div data-oid="bi9mxt0">
                            <div
                                className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden w-3/4 mx-auto"
                                data-oid="kmikbwg"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                                    alt="Segelmacherin"
                                    className="object-cover w-full h-full"
                                    data-oid="buvaxo0"
                                />
                            </div>
                        </div>
                        <div data-oid="lir-kbx">
                            <h3 className="text-2xl font-medium mb-4" data-oid="p-j6y_d">
                                Anna Schmidt
                            </h3>
                            <p className="text-gray-600 mb-6" data-oid="ig_uy:y">
                                Mit über 15 Jahren Erfahrung als Segelmacherin hat Anna ein
                                besonderes Gespür für die Reparatur von Kites entwickelt. Ihre
                                Präzision und ihr Fachwissen machen sie zur Expertin auf ihrem
                                Gebiet.
                            </p>
                            <div className="grid grid-cols-3 gap-4" data-oid="qzaokui">
                                <img
                                    src="https://images.unsplash.com/photo-1559288972-9c5cd1f8e0f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 1"
                                    className="w-full h-32 object-cover"
                                    data-oid="lkplqal"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 2"
                                    className="w-full h-32 object-cover"
                                    data-oid="h3sromq"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 3"
                                    className="w-full h-32 object-cover"
                                    data-oid="ehgtrzk"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Additional Services Section */}
            <section id="services" className="py-24 bg-black text-white" data-oid="u-d3k9l">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="q2zehdr">
                    <h2 className="text-4xl font-light mb-8" data-oid="8lwtqka">
                        WEITERE SERVICES
                    </h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto" data-oid=":ivc7ib">
                        Neben Kitereparaturen bieten wir auch Services für Twintips, Bars und
                        Surfboards an.
                    </p>
                    <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                        data-oid="sfto_9-"
                    >
                        MEHR ERFAHREN
                    </a>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section id="faq" className="py-24 bg-white" data-oid="c-okxo9">
                <div className="max-w-3xl mx-auto px-6" data-oid="oy:v5n-">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="6r169b2">
                        HÄUFIG GESTELLTE FRAGEN
                    </h2>

                    <div className="space-y-4" data-oid="phcb4cn">
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
                            <div key={index} className="border border-gray-200" data-oid="y61:t:b">
                                <button
                                    className="flex justify-between items-center w-full px-6 py-4 text-left font-medium"
                                    onClick={() => toggleAccordion(index)}
                                    data-oid="hb3wg5j"
                                >
                                    <span data-oid="hxxob_v">{faq.question}</span>
                                    <span data-oid="iaw4apz">
                                        {activeAccordion === index ? '−' : '+'}
                                    </span>
                                </button>
                                {activeAccordion === index && (
                                    <div className="px-6 py-4 bg-gray-50" data-oid="gmt_wlw">
                                        <p className="text-gray-600" data-oid="wn526-w">
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
            <section id="contact" className="py-24 bg-gray-100" data-oid="s75j:69">
                <div className="max-w-3xl mx-auto px-6" data-oid="oyhz6:x">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="jsnqvnj">
                        REPARATURANFRAGE
                    </h2>
                    <form className="space-y-6" data-oid=":90n698">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="k1b0-y8">
                            <div data-oid="::g5uxc">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="qa:q0d2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="jy0-6k2"
                                />
                            </div>
                            <div data-oid="9:g3n2a">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="lt0xufo"
                                >
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="t9m52h2"
                                />
                            </div>
                        </div>
                        <div data-oid="w7.w-yk">
                            <label
                                htmlFor="kite"
                                className="block mb-2 text-sm font-medium"
                                data-oid="6d3.ipb"
                            >
                                Kite Modell
                            </label>
                            <input
                                type="text"
                                id="kite"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid=".lxomos"
                            />
                        </div>
                        <div data-oid="zndl98x">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium"
                                data-oid="trteor5"
                            >
                                Beschreibung des Schadens
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="opugs9y"
                            ></textarea>
                        </div>
                        <div className="text-center" data-oid="31jpo0a">
                            <button
                                type="submit"
                                className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                                data-oid="hfebde1"
                            >
                                ANFRAGE SENDEN
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12" data-oid="gxqay_p">
                <div className="max-w-7xl mx-auto px-6" data-oid="vy6c_ky">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10" data-oid="616e9k5">
                        <div data-oid="_0.pcta">
                            <h3 className="text-xl font-medium mb-4" data-oid="o43qrg1">
                                KITEREPAIR
                            </h3>
                            <p className="text-gray-400" data-oid=".qgo3ih">
                                Professionelle Reparatur für Ihren Kite.
                            </p>
                        </div>
                        <div data-oid="tcui4be">
                            <h3 className="text-xl font-medium mb-4" data-oid="8-5.aa4">
                                KONTAKT
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="g04zyld">
                                Osterstraße 47
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="vl5xog:">
                                23769 Fehmarn
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="p6gnnxp">
                                Tel: +49 123 456789
                            </p>
                            <p className="text-gray-400" data-oid="307kvnt">
                                E-Mail: info@kiterepair.de
                            </p>
                        </div>
                        <div data-oid="mnsoj2m">
                            <h3 className="text-xl font-medium mb-4" data-oid="fk3ari0">
                                ÖFFNUNGSZEITEN
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="r_.wtec">
                                Mo-Fr: 9:00 - 17:00 Uhr
                            </p>
                            <p className="text-gray-400 mb-6" data-oid="7an.07n">
                                Sa: Nach Vereinbarung
                            </p>
                            <a
                                href="#contact"
                                className="inline-block border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
                                data-oid="idyqmdn"
                            >
                                REPARATUR ANFRAGEN
                            </a>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm"
                        data-oid="n9:iphn"
                    >
                        © {new Date().getFullYear()} KITEREPAIR. Alle Rechte vorbehalten.
                    </div>
                </div>
            </footer>
        </div>
    );
}
