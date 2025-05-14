'use client';
import { useEffect, useRef } from 'react';

// Erweitern des Window-Objekts für TypeScript
declare global {
    interface Window {
        google: any;
        initMap: () => void;
    }
}

export default function LocationSection() {
    const mapRef = useRef<HTMLDivElement>(null);
    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

    useEffect(() => {
        // Map initialisieren, wenn die Komponente gemountet wird
        if (window.google && mapRef.current) {
            const location = { lat: 54.43779, lng: 11.19957 }; // Koordinaten anpassen
            const map = new window.google.maps.Map(mapRef.current, {
                zoom: 13,
                center: location,
                mapTypeId: 'roadmap',
                scrollwheel: false,
            });

            // Eigenen Marker hinzufügen mit den vorhandenen Marker-Bildern
            const markerIcon = {
                url: '/images/marker-icon.png',
                size: new window.google.maps.Size(25, 41),
                scaledSize: new window.google.maps.Size(25, 41),
                anchor: new window.google.maps.Point(12, 41), // Mitte unten des Icons
            };

            // Optional: Icon für hochauflösende Displays
            if (window.devicePixelRatio > 1.5) {
                markerIcon.url = '/images/marker-icon-2x.png';
            }

            // Schatten für den Marker
            const shadowIcon = {
                url: '/images/marker-shadow.png',
                size: new window.google.maps.Size(41, 41),
                scaledSize: new window.google.maps.Size(41, 41),
                anchor: new window.google.maps.Point(12, 41), // Ausrichtung mit dem Marker
            };

            // Marker mit Icon und Schatten erstellen
            new window.google.maps.Marker({
                position: location,
                map: map,
                icon: markerIcon,
                shadow: shadowIcon,
            });
        }
    }, []);

    // Initialisierung der Map-Funktion global verfügbar machen
    useEffect(() => {
        window.initMap = () => {
            // Google Maps API callback wird automatisch aufgerufen
            // Die tatsächliche Initialisierung erfolgt im ersten useEffect
        };
        return () => {
            // Aufräumen, wenn die Komponente unmountet wird
            window.initMap = () => {};
        };
    }, []);

    return (
        <section id="location" className="py-24 bg-gray-100" data-oid="4hub0my">
            <div className="max-w-7xl mx-auto px-6" data-oid="hac23nc">
                <h2
                    className="text-4xl md:text-6xl mb-16 text-center uppercase font-bold"
                    data-oid="l06bjo."
                >
                    STANDORT
                </h2>
                <div className="relative mb-8" data-oid="23sz7bq">
                    <picture data-oid="xkjhmak">
                        {/* Mobile Bild (5:4) */}
                        <source
                            media="(max-width: 768px)"
                            srcSet="/images/location-mobile.jpg"
                            className="w-full aspect-[5/4] object-cover"
                            data-oid="sv-vi5q"
                        />

                        {/* Desktop Bild (16:9) */}
                        <img
                            src="/images/location-desktop.jpg"
                            alt="Unser Standort auf Fehmarn"
                            className="w-full aspect-[16/9] object-cover"
                            data-oid="my0sz7u"
                        />
                    </picture>
                    {/* Overlay mit Adresse */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                        data-oid="5iykihs"
                    >
                        <div className="text-center text-white" data-oid="s2etjvw">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2" data-oid="xyp:sv:">
                                Kiterepair Fehmarn
                            </h3>
                            <p className="text-lg md:text-xl" data-oid="g18mn9t">
                                Osterstraße 45, 23769 Fehmarn
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="aspect-w-16 aspect-h-9 h-[600px] w-full relative group"
                    data-oid="9-qzjw4"
                >
                    <div
                        className="absolute inset-0 z-20 bg-white/50 backdrop-blur-md p-8 transition-opacity duration-300 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none flex flex-col justify-center items-center text-center"
                        data-oid=":crmg.3"
                    >
                        <h3 className="text-3xl font-bold mb-4 text-black" data-oid="xwd:eo0">
                            ZUHAUSE AUF FEHMARN
                        </h3>
                        <p className="text-gray-700 max-w-2xl mb-6" data-oid="rwgnczp">
                            In unserem Homespot auf Fehmarn beantwortet unser Team all deine Fragen
                            und nimmt dein Kite oder Wing direkt entgegen. Darüber hinaus findest du
                            alle aktuellen CORE Produkte in unserer Ausstellung und zum Test.
                        </p>
                        <span className="text-black font-bold" data-oid="iex3jow">
                            CORE HOMESPOT
                        </span>
                    </div>

                    {/* Google Maps API mit custom marker */}
                    <div ref={mapRef} className="w-full h-full" data-oid="l6-tbl5" />

                    {/* Google Maps API Script einbinden mit API-Key aus Umgebungsvariable */}
                    <script
                        async
                        src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`}
                        data-oid="x72obzd"
                    />
                </div>
            </div>
        </section>
    );
}
