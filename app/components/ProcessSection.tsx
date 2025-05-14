'use client';

import { useState } from 'react';
import PriceCalculator from './PriceCalculator';
import { RepairType, RepairLocation } from './types';

interface ProcessSectionProps {
    fillContactForm: () => void;
    onRepairDetailsUpdate?: (
        repairType: RepairType,
        repairLocation: RepairLocation,
        estimatedPrice: number,
    ) => void;
}

export default function ProcessSection({
    fillContactForm,
    onRepairDetailsUpdate,
}: ProcessSectionProps) {
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    return (
        <section id="process" className="py-24 bg-white" data-oid="z52f48b">
            <div className="max-w-7xl mx-auto px-6" data-oid="7byvnhz">
                <h2
                    className="text-4xl md:text-6xl mb-16 text-center uppercase font-bold"
                    data-oid="xu_hrhl"
                >
                    Dein Weg zur schnellen Reparatur
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-[33%_67%] gap-6" data-oid="lpyu6.d">
                    {/*test timeline*/}
                    <div className="relative" data-oid="c5z94.w">
                        <ol
                            className="border-s border-gray-200 dark:border-gray-700"
                            data-oid="-t9-1vp"
                        >
                            <li className="mb-10 ms-4" data-oid="n98wntx">
                                <div
                                    className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                    data-oid="bh2rwe1"
                                ></div>
                                <time
                                    className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-oid="0hp0x8i"
                                >
                                    Schritt 1
                                </time>
                                <h3
                                    className="text-xl font-semibold text-gray-900 dark:text-white"
                                    data-oid="2-q6ca0"
                                >
                                    Reparaturanfrage stellen
                                </h3>
                                <p
                                    className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                                    data-oid="s4l4.ym"
                                >
                                    Fülle unser Formular mit allen wichtigen Informationen aus -
                                    schnell und unverbindlich.
                                </p>
                            </li>
                            <li className="mb-10 ms-4" data-oid="l5.wc7o">
                                <div
                                    className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                    data-oid="83xcfi:"
                                ></div>
                                <time
                                    className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-oid="oudcbrm"
                                >
                                    Schritt 2
                                </time>
                                <h3
                                    className="text-xl font-semibold text-gray-900 dark:text-white"
                                    data-oid=":w108u3"
                                >
                                    Einsenden oder Vorbeibringen
                                </h3>
                                <p
                                    className="text-base font-normal text-gray-500 dark:text-gray-400"
                                    data-oid="jeonne4"
                                >
                                    Sende uns deinen Kite oder Wing per Post oder bring ihn direkt
                                    an unseren Homespot auf Fehmarn. Egal ob
                                    <strong data-oid="xk0z:.2"> Duotone, North, Cabrinha</strong> -
                                    wir reparieren alle Marken *.
                                </p>
                            </li>
                            <li className="mb-10 ms-4" data-oid="w2vxflc">
                                <div
                                    className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                    data-oid="ffidmsj"
                                ></div>
                                <time
                                    className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-oid="t:bq4la"
                                >
                                    Schritt 3
                                </time>
                                <h3
                                    className="text-xl font-semibold text-gray-900 dark:text-white"
                                    data-oid="4w6lkdr"
                                >
                                    Angebot erhalten
                                </h3>
                                <p
                                    className="text-base font-normal text-gray-500 dark:text-gray-400"
                                    data-oid="gu7upxu"
                                >
                                    Innerhalb von <strong data-oid="_b1kdma">24 Stunden</strong>
                                    erhältst du eine Einschätzung und ein Angebot.
                                </p>
                            </li>
                            <li className="ms-4" data-oid="8u57-_c">
                                <div
                                    className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                                    data-oid="uj.dnra"
                                ></div>
                                <time
                                    className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                                    data-oid="lr5fqm4"
                                >
                                    Schritt 4
                                </time>
                                <h3
                                    className="text-xl font-semibold text-gray-900 dark:text-white"
                                    data-oid="hsny_z6"
                                >
                                    Reparatur und Rückgabe
                                </h3>
                                <p
                                    className="text-base font-normal text-gray-500 dark:text-gray-400"
                                    data-oid="vov1fi3"
                                >
                                    Dein Kite oder Wing ist – sofern alle Ersatzteile vorliegen –
                                    innerhalb von 5 Werktagen repariert und ready to ride!
                                </p>
                            </li>
                        </ol>
                    </div>
                    <div
                        className="mt-8 pt-8 text-xs text-black max-w-4xl mx-auto pl-4 py-2 bg-[#00000000] border-[#00000000] border-0"
                        data-oid="0l8bt63"
                    >
                        <img
                            src="/images/CORE_demo_gear.jpeg"
                            alt="Unser Standort auf Fehmarn"
                            className="w-full aspect-[16/9] object-cover mb-2 pb-2"
                            key="olk-zn67"
                            data-oid="braa-iu"
                        />

                        <p className="text-left mt-6" key="olk-BVsp" data-oid="23r4xxg">
                            * Sollten zur Reparatur deines Kites oder Wings Ersatzteile (Ventile,
                            Bladder, o.ä.) anderer Marken notwendig sein, erfolgt die Bestellung und
                            Bezahlung selbiger durch dich. Damit behältst du die volle Kontrolle
                            über Qualität, Preis und Lieferzeit deiner Ersatzteile.
                        </p>
                        <p className="text-left mt-2" key="olk-3DBD" data-oid="7:_2-hw">
                            Sobald alle benötigten Teile bei uns vorliegen, ist die Reparatur in der
                            Regel innerhalb von fünf Arbeitstagen abgeschlossen. Risse oder sonstige
                            Schäden, die ohne markenspezifische Ersatzteile auskommen, reparieren
                            wir natürlich unmittelbar.
                        </p>

                        <p
                            className="text-left font-semibold m-0"
                            key="olk-WB-6"
                            data-oid=":3_if9c"
                        >
                            Bitte beachte, dass wir darüber hinaus keine keine Garantie- oder
                            Kulanzabwicklung für Fremdmarken (außer CORE) übernehmen können.
                        </p>
                    </div>
                    {/* Card 1 */}
                    <div
                        className="bg-white overflow-hidden rounded-none border-[#00000000] border-0"
                        data-oid="ootb_:j"
                    >
                        <div className="relative mb-8" data-oid="pgperf8">
                            <picture data-oid="jkqe27e">
                                {/* Mobile Bild (5:4) */}
                                <source
                                    media="(max-width: 768px)"
                                    srcSet="/images/CORE_demo_gear.jpeg"
                                    className="w-full aspect-[5/4] object-cover"
                                    key="olk-v3lx"
                                    data-oid="nqg_one"
                                />

                                {/* Desktop Bild (16:9) */}
                            </picture>
                        </div>
                    </div>
                </div>
                <div className="mx-auto" data-oid="7slwrbc">
                    <div className="text-center" data-oid="w24w59j">
                        <button
                            onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
                            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black m-12 w-[184px]"
                            data-oid="86q6bwn"
                        >
                            <span className="mr-2 font-medium" data-oid="58bp0nh">
                                Preiskalkulator
                            </span>
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${isCalculatorOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                data-oid="ui6voes"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                    data-oid="78isl-p"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Ausklappbarer Preiskalkulator */}
                    <PriceCalculator
                        isOpen={isCalculatorOpen}
                        fillContactForm={fillContactForm}
                        onRepairDetailsChange={onRepairDetailsUpdate}
                        data-oid="gf25ry7"
                    />
                </div>
            </div>
        </section>
    );
}
