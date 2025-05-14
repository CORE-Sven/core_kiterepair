'use client';

import { useState, useEffect } from 'react';
import {
    RepairType,
    RepairLocation,
    repairTypeLabels,
    repairLocationLabels,
    calculatePrice,
} from './types';

interface PriceCalculatorProps {
    isOpen: boolean;
    fillContactForm: () => void;
    onRepairDetailsChange?: (
        repairType: RepairType,
        repairLocation: RepairLocation,
        estimatedPrice: number,
    ) => void;
}

export default function PriceCalculator({
    isOpen,
    fillContactForm,
    onRepairDetailsChange,
}: PriceCalculatorProps) {
    const [repairType, setRepairType] = useState<RepairType>('small');
    const [repairLocation, setRepairLocation] = useState<RepairLocation>('canopy');
    const [estimatedPrice, setEstimatedPrice] = useState(40);

    // Preisberechnung basierend auf Reparaturtyp und Position
    useEffect(() => {
        const price = calculatePrice(repairType, repairLocation);
        setEstimatedPrice(price);

        if (onRepairDetailsChange) {
            onRepairDetailsChange(repairType, repairLocation, price);
        }
    }, [repairType, repairLocation, onRepairDetailsChange]);

    // Nur anzeigen, wenn isOpen true ist
    if (!isOpen) return null;

    return (
        <div
            className="transition-all duration-500 ease-in-out overflow-hidden max-h-[2000px] opacity-100"
            data-oid="yyul11e"
        >
            <div
                className="p-6 border border-gray-200 rounded-lg shadow-md bg-white"
                data-oid="dhhw81w"
            >
                <div data-oid="_c6.7-k">
                    <h4 className="text-2xl font-medium mb-3" data-oid="rr4-s3f">
                        Interaktiver Preiskalkulator
                    </h4>
                    <p className="text-sm text-gray-500 mb-4" data-oid="kgw0rdm">
                        Berechnen Sie Ihren individuellen Preis. Diese Berechnung dient nur zur
                        groben Orientierung. Die tatsächlichen Kosten können nach genauer
                        Begutachtung variieren.
                    </p>

                    <div className="space-y-6" data-oid="5prt6t.">
                        <div
                            className="space-y-4 border border-gray-200 rounded-lg p-4 bg-gray-50"
                            data-oid="68ivx7e"
                        >
                            <div data-oid="2-l:jl7">
                                <label
                                    className="block text-sm font-medium mb-2"
                                    data-oid="whj6bf1"
                                >
                                    Art des Schadens:
                                </label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={repairType}
                                    onChange={(e) => setRepairType(e.target.value as RepairType)}
                                    data-oid="cjb3lfu"
                                >
                                    {Object.entries(repairTypeLabels).map(([value, label]) => (
                                        <option key={value} value={value} data-oid="ggote44">
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div data-oid="j_-b_q_">
                                <label
                                    className="block text-sm font-medium mb-2"
                                    data-oid="3mr:c4a"
                                >
                                    Position des Schadens:
                                </label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={repairLocation}
                                    onChange={(e) =>
                                        setRepairLocation(e.target.value as RepairLocation)
                                    }
                                    data-oid="mcgh89m"
                                >
                                    {Object.entries(repairLocationLabels).map(([value, label]) => (
                                        <option key={value} value={value} data-oid="nxc430o">
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div
                                className="bg-black text-white p-4 rounded-md text-center"
                                data-oid="mynq63r"
                            >
                                <p className="text-sm mb-1" data-oid="l7r7_-l">
                                    Geschätzter Preis:
                                </p>
                                <p className="text-2xl font-bold" data-oid="n1iei:h">
                                    {estimatedPrice}€
                                </p>
                            </div>

                            <div className="mt-4 text-center" data-oid="j0snle5">
                                <button
                                    onClick={fillContactForm}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                    data-oid="duh.fc_"
                                >
                                    <span className="font-medium" data-oid="4o8h7zz">
                                        Anfrage mit diesen Daten stellen
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="x5f81ny"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                            data-oid="f3sudtw"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Preistabelle als Referenz */}
                        <div className="mt-4" data-oid="rp9:gjj">
                            <h5 className="font-medium text-sm mb-2" data-oid="m40w1xz">
                                Basispreise zur Orientierung:
                            </h5>
                            <div className="grid grid-cols-2 gap-2 text-sm" data-oid="eulo4fn">
                                <div className="font-medium" data-oid="ssc90bo">
                                    Kleiner Riss (bis 5cm)
                                </div>
                                <div className="text-right" data-oid="wn_hwsh">
                                    ab 40€
                                </div>

                                <div className="font-medium" data-oid="7ho.q64">
                                    Mittlerer Riss (5-15cm)
                                </div>
                                <div className="text-right" data-oid="r4zj0b1">
                                    ab 60€
                                </div>

                                <div className="font-medium" data-oid="bh97gw2">
                                    Großer Riss (über 15cm)
                                </div>
                                <div className="text-right" data-oid="deft:gn">
                                    ab 80€
                                </div>

                                <div className="font-medium" data-oid=".gyw.wc">
                                    Strut-Reparatur
                                </div>
                                <div className="text-right" data-oid="2zwyjjr">
                                    ab 50€
                                </div>

                                <div className="font-medium" data-oid="p_qmi:4">
                                    Leading Edge Reparatur
                                </div>
                                <div className="text-right" data-oid="9mza1x9">
                                    ab 70€
                                </div>

                                <div className="font-medium" data-oid="4b62.7-">
                                    Ventil-Austausch
                                </div>
                                <div className="text-right" data-oid="-u-h4ht">
                                    ab 35€
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-3 rounded-md text-sm" data-oid="h7:r.ae">
                            <p className="font-medium mb-1" data-oid="y2cjnrs">
                                Hinweis:
                            </p>
                            <p className="text-gray-600" data-oid="psml_:6">
                                Die endgültigen Kosten werden nach einer genauen Begutachtung Ihres
                                Kites oder Wings festgelegt. Besonders kritische Stellen wie Nähte
                                oder Verstärkungen können den Preis beeinflussen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
