'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="font-sans text-gray-900 bg-white" data-oid="5o_uk-y">
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-4 px-6"
                data-oid="tegecgr"
            >
                <div
                    className="max-w-7xl mx-auto flex justify-between items-center"
                    data-oid="5gum5v-"
                >
                    <div className="flex space-x-6 text-sm" data-oid=":y_9wwc">
                        <a
                            href="#hero"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="2rdu_f8"
                        >
                            HOME
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="lbt3nir"
                        >
                            BENEFITS
                        </a>
                        <a
                            href="#process"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="0un811j"
                        >
                            PROCESS
                        </a>
                        <a
                            href="#location"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="srl.0rx"
                        >
                            LOCATION
                        </a>
                        <a
                            href="#about"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="d9z3j5o"
                        >
                            ABOUT
                        </a>
                        <a
                            href="#services"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="dnvtzas"
                        >
                            SERVICES
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-gray-300 transition-colors"
                            data-oid="7seibvl"
                        >
                            FAQ
                        </a>
                    </div>
                    <div className="text-xl font-bold tracking-tight" data-oid="0j83l5q">
                        KITEREPAIR
                    </div>
                </div>
            </nav>

            {/* 1. Hero Section */}
            <section
                id="hero"
                className="pt-24 relative h-screen flex items-center"
                data-oid="zam:vrs"
            >
                <div className="absolute inset-0 z-0" data-oid="bwvj1xy">
                    <div
                        className="w-full h-full bg-[url('https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-80"
                        data-oid="u7dmrua"
                    ></div>
                </div>
                <div
                    className="relative z-10 max-w-7xl mx-auto px-6 text-center"
                    data-oid="km9j:t4"
                >
                    <h1
                        className="text-5xl md:text-7xl font-light mb-6 leading-tight"
                        data-oid="zg2qlsm"
                    >
                        Professionelle <br data-oid="kw4o2l." />
                        <span className="font-bold" data-oid="5k8rb31">
                            Kite Reparatur
                        </span>
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto mb-10" data-oid=":a2gjc1">
                        Wir reparieren Ihren Kite schnell, zuverlässig und professionell. Unsere
                        erfahrene Segelmacherin sorgt dafür, dass Ihr Equipment wieder wie neu ist.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                        data-oid="rkkmo:p"
                    >
                        ANGEBOT STELLEN
                    </a>
                </div>
            </section>

            {/* 2. Benefits Section */}
            <section id="benefits" className="bg-black text-white py-24" data-oid="zedlk_p">
                <div className="max-w-7xl mx-auto px-6" data-oid="l0gbo5s">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="r-dqwi1">
                        UNSERE VORTEILE
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                        data-oid="wdg_joz"
                    >
                        <div className="text-center" data-oid=".nxxv6c">
                            <div className="mb-6 flex justify-center" data-oid="xp2x_fq">
                                <img
                                    src="/images/benefits/repair.png"
                                    alt="Reparatur Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="m84wfg_"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="uhjvo_9">
                                Reparatur aller Hersteller
                            </h3>
                            <p className="text-gray-400" data-oid=".0ksf:f">
                                Wir reparieren Kites aller Marken und Modelle mit höchster
                                Präzision.
                            </p>
                        </div>
                        <div className="text-center" data-oid="7.590cc">
                            <div className="mb-6 flex justify-center" data-oid="wp:b1_1">
                                <img
                                    src="/images/benefits/shipping.png"
                                    alt="Versand Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="iz6m1qx"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="3huf6t5">
                                Einsenden oder Abgeben
                            </h3>
                            <p className="text-gray-400" data-oid="iqpm:vr">
                                Senden Sie Ihren Kite ein oder geben Sie ihn direkt bei uns vor Ort
                                ab.
                            </p>
                        </div>
                        <div className="text-center" data-oid="k2drz-e">
                            <div className="mb-6 flex justify-center" data-oid="t5a7iyw">
                                <img
                                    src="/images/benefits/clock.png"
                                    alt="Uhr Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="thibcfl"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="6.yze-l">
                                Angebot innerhalb 24h
                            </h3>
                            <p className="text-gray-400" data-oid="-hr-a.4">
                                Schnelle Bearbeitung und transparente Preise innerhalb eines Tages.
                            </p>
                        </div>
                        <div className="text-center" data-oid="1fvadon">
                            <div className="mb-6 flex justify-center" data-oid="j98w954">
                                <img
                                    src="/images/benefits/calendar.png"
                                    alt="Kalender Icon"
                                    className="w-20 h-20 object-contain"
                                    data-oid="melz8-r"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-3" data-oid="-nayw7y">
                                Reparatur in 5 Werktagen
                            </h3>
                            <p className="text-gray-400" data-oid="6-sbo22">
                                Schnelle Bearbeitung, damit Sie schnell wieder aufs Wasser können.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Process Section */}
            {/* 3. Process Section */}
            <section id="process" className="py-24 bg-white" data-oid="4tt8ry7">
                <div className="max-w-7xl mx-auto px-6" data-oid="7qff0c.">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="tk4comx">
                        UNSER PROZESS
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        data-oid="z9n3xnm"
                    >
                        {/* Card 1 */}
                        <div
                            className="bg-white border-2 border-gray-200 rounded-lg"
                            data-oid="9blivfx"
                        >
                            <div className="bg-black text-white p-4 text-center" data-oid="471bbpb">
                                <span className="text-2xl font-bold" data-oid=":xz64qd">
                                    1
                                </span>
                            </div>
                            <div className="p-6" data-oid="new-card-body-1">
                                <h3 className="text-xl font-medium mb-3" data-oid="k.5j-xy">
                                    Anfrage stellen
                                </h3>
                                <p className="text-gray-600" data-oid=".734tsy">
                                    Kontaktieren Sie uns über das Formular oder telefonisch und
                                    beschreiben Sie den Schaden.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="bg-white border-2 border-gray-200 rounded-lg"
                            data-oid="f7lhb:2"
                        >
                            <div className="bg-black text-white p-4 text-center" data-oid="11h6esn">
                                <span className="text-2xl font-bold" data-oid="8wp31yo">
                                    2
                                </span>
                            </div>
                            <div className="p-6" data-oid="new-card-body-2">
                                <h3 className="text-xl font-medium mb-3" data-oid="83fir.g">
                                    Angebot erhalten
                                </h3>
                                <p className="text-gray-600" data-oid="e1y25i5">
                                    Innerhalb von 24 Stunden erhalten Sie ein unverbindliches
                                    Angebot von uns.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="bg-white border-2 border-gray-200 rounded-lg"
                            data-oid="-5wsh4u"
                        >
                            <div className="bg-black text-white p-4 text-center" data-oid="m0rp5j.">
                                <span className="text-2xl font-bold" data-oid="f6zl1rt">
                                    3
                                </span>
                            </div>
                            <div className="p-6" data-oid="new-card-body-3">
                                <h3 className="text-xl font-medium mb-3" data-oid="wf9_y79">
                                    Reparatur
                                </h3>
                                <p className="text-gray-600" data-oid="h13cr9a">
                                    Nach Ihrer Zustimmung reparieren wir Ihren Kite mit höchster
                                    Sorgfalt.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div
                            className="bg-white border-2 border-gray-200 rounded-lg"
                            data-oid=":74xd-j"
                        >
                            <div className="bg-black text-white p-4 text-center" data-oid="9i1vwui">
                                <span className="text-2xl font-bold" data-oid="owj:_.v">
                                    4
                                </span>
                            </div>
                            <div className="p-6" data-oid="new-card-body-4">
                                <h3 className="text-xl font-medium mb-3" data-oid="78a3b3x">
                                    Rückgabe
                                </h3>
                                <p className="text-gray-600" data-oid="b9:3api">
                                    Ihr reparierter Kite wird versandt oder kann vor Ort abgeholt
                                    werden.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Location Section */}
            <section id="location" className="py-24 bg-gray-100" data-oid="_bzjpu_">
                <div className="max-w-7xl mx-auto px-6" data-oid="9l2.pz9">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="xq1ap7i">
                        STANDORT
                    </h2>
                    <div className="aspect-w-16 aspect-h-9 h-[400px] w-full" data-oid="e2kw5o4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.1234567890123!2d11.1234!3d54.4321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI1JzU1LjYiTiAxMcKwMDcnMjQuMiJF!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                            data-oid="ufipigs"
                        ></iframe>
                    </div>
                    <div className="mt-8 text-center" data-oid="s-mz117">
                        <p className="text-xl" data-oid="4cur910">
                            Osterstraße 47, 23769 Fehmarn
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. About Section */}
            <section id="about" className="py-24 bg-white" data-oid="jj_oid7">
                <div className="max-w-7xl mx-auto px-6" data-oid="cwp5eww">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="0nfyoq9">
                        UNSERE SEGELMACHERIN
                    </h2>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        data-oid="zr98le2"
                    >
                        <div data-oid="6:gixmj">
                            <div
                                className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden w-3/4 mx-auto"
                                data-oid="we58g9e"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                                    alt="Segelmacherin"
                                    className="object-cover w-full h-full"
                                    data-oid="rviwba3"
                                />
                            </div>
                        </div>
                        <div data-oid=".1ovz.m">
                            <h3 className="text-2xl font-medium mb-4" data-oid="wvxk7vi">
                                Anna Schmidt
                            </h3>
                            <p className="text-gray-600 mb-6" data-oid=".x9vj-q">
                                Mit über 15 Jahren Erfahrung als Segelmacherin hat Anna ein
                                besonderes Gespür für die Reparatur von Kites entwickelt. Ihre
                                Präzision und ihr Fachwissen machen sie zur Expertin auf ihrem
                                Gebiet.
                            </p>
                            <div className="grid grid-cols-3 gap-4" data-oid="b3ncfvk">
                                <img
                                    src="https://images.unsplash.com/photo-1559288972-9c5cd1f8e0f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 1"
                                    className="w-full h-32 object-cover"
                                    data-oid="n8a8get"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 2"
                                    className="w-full h-32 object-cover"
                                    data-oid="ksadf88"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1565160837879-e2c5cdb98e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                                    alt="Arbeit 3"
                                    className="w-full h-32 object-cover"
                                    data-oid="tspoeb4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Additional Services Section */}
            <section id="services" className="py-24 bg-black text-white" data-oid="6fqe9mv">
                <div className="max-w-7xl mx-auto px-6 text-center" data-oid="fuzrs3e">
                    <h2 className="text-4xl font-light mb-8" data-oid="-u9sdye">
                        WEITERE SERVICES
                    </h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto" data-oid=":59zwqs">
                        Neben Kitereparaturen bieten wir auch Services für Twintips, Bars und
                        Surfboards an.
                    </p>
                    <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors"
                        data-oid="-1mls.a"
                    >
                        MEHR ERFAHREN
                    </a>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section id="faq" className="py-24 bg-white" data-oid="srt4pd_">
                <div className="max-w-3xl mx-auto px-6" data-oid="u4v36gn">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="8:x22b2">
                        HÄUFIG GESTELLTE FRAGEN
                    </h2>

                    <div className="space-y-4" data-oid="2720eh6">
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
                            <div key={index} className="border border-gray-200" data-oid="1bao4a5">
                                <button
                                    className="flex justify-between items-center w-full px-6 py-4 text-left font-medium"
                                    onClick={() => toggleAccordion(index)}
                                    data-oid="r_7v:.9"
                                >
                                    <span data-oid="totlug0">{faq.question}</span>
                                    <span data-oid="4.2vpve">
                                        {activeAccordion === index ? '−' : '+'}
                                    </span>
                                </button>
                                {activeAccordion === index && (
                                    <div className="px-6 py-4 bg-gray-50" data-oid="jcg9eo:">
                                        <p className="text-gray-600" data-oid="iv5dibu">
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
            <section id="contact" className="py-24 bg-gray-100" data-oid="qwicc-6">
                <div className="max-w-3xl mx-auto px-6" data-oid="cuv7mb3">
                    <h2 className="text-4xl font-light mb-16 text-center" data-oid="yspo6p5">
                        REPARATURANFRAGE
                    </h2>
                    <form className="space-y-6" data-oid="4ttt8yj">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="rko2xyy">
                            <div data-oid="x:fdfib">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid=".j9k6ah"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="rtkkw::"
                                />
                            </div>
                            <div data-oid="syqofi7">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium"
                                    data-oid="0f4npd6"
                                >
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                    data-oid="w7_a67r"
                                />
                            </div>
                        </div>
                        <div data-oid="igoi6_:">
                            <label
                                htmlFor="kite"
                                className="block mb-2 text-sm font-medium"
                                data-oid="24g3gl1"
                            >
                                Kite Modell
                            </label>
                            <input
                                type="text"
                                id="kite"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="hf67-rb"
                            />
                        </div>
                        <div data-oid="zzued34">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium"
                                data-oid="btcd54w"
                            >
                                Beschreibung des Schadens
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="5cxh.:j"
                            ></textarea>
                        </div>
                        <div className="text-center" data-oid="z7raqe8">
                            <button
                                type="submit"
                                className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                                data-oid="43nbda9"
                            >
                                ANFRAGE SENDEN
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12" data-oid="mt0nite">
                <div className="max-w-7xl mx-auto px-6" data-oid="yw46qn4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10" data-oid="sv17gde">
                        <div data-oid="7tj1vjj">
                            <h3 className="text-xl font-medium mb-4" data-oid="k63rnb-">
                                KITEREPAIR
                            </h3>
                            <p className="text-gray-400" data-oid="2rauu1r">
                                Professionelle Reparatur für Ihren Kite.
                            </p>
                        </div>
                        <div data-oid="9enqgu0">
                            <h3 className="text-xl font-medium mb-4" data-oid="m2qcqkd">
                                KONTAKT
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="lyt_s6g">
                                Osterstraße 47
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="w93gc0j">
                                23769 Fehmarn
                            </p>
                            <p className="text-gray-400 mb-2" data-oid="7ul7p.n">
                                Tel: +49 123 456789
                            </p>
                            <p className="text-gray-400" data-oid="_cp2k9t">
                                E-Mail: info@kiterepair.de
                            </p>
                        </div>
                        <div data-oid="hj.t1gb">
                            <h3 className="text-xl font-medium mb-4" data-oid="0uiv67x">
                                ÖFFNUNGSZEITEN
                            </h3>
                            <p className="text-gray-400 mb-2" data-oid="-9w2l9i">
                                Mo-Fr: 9:00 - 17:00 Uhr
                            </p>
                            <p className="text-gray-400 mb-6" data-oid="ytfs21d">
                                Sa: Nach Vereinbarung
                            </p>
                            <a
                                href="#contact"
                                className="inline-block border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
                                data-oid="d-v0awm"
                            >
                                REPARATUR ANFRAGEN
                            </a>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm"
                        data-oid="8cxlrsz"
                    >
                        © {new Date().getFullYear()} KITEREPAIR. Alle Rechte vorbehalten.
                    </div>
                </div>
            </footer>
        </div>
    );
}
