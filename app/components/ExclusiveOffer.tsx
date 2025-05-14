'use client';

export default function ExclusiveOffer() {
    return (
        <div
            className="relative h-full overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white"
            data-oid="c6-ez-i"
        >
            {/* Moderner Container mit besserer Struktur */}
            <div
                className="relative z-20 p-8 flex flex-col h-full w-full items-start"
                data-oid="9phtewq"
            >
                {/* Elegantes Label */}
                <div
                    className="absolute top-0 right-0 bg-[#38caba] text-white font-medium py-1.5 px-4"
                    data-oid="b2kwtfc"
                >
                    EXKLUSIV
                </div>

                {/* Subtiler Designakzent */}
                <div
                    className="absolute top-16 left-4 w-24 h-24 rounded-full bg-[#38caba] opacity-10 blur-xl"
                    data-oid="k6sdlmn"
                ></div>

                <h3 className="text-3xl font-bold mb-2 mt-8 text-[#38caba]" data-oid="4h4mb.s">
                    Keine Session verpassen
                </h3>

                <p className="text-xl text-white/90 mb-6" data-oid="rma9:c:">
                    Mit dem neuesten CORE-Material während der Reparaturzeit
                </p>

                <div className="bg-black/30 p-5 backdrop-blur-sm max-w-2xl" data-oid="qas_o6t">
                    <p className="text-lg mb-4 text-white/90" data-oid="mlez8up">
                        Liefere deinen Kite oder Wing für die Reparatur bei uns auf Fehmarn ab und
                        wir stellen dir
                        <span className="font-semibold" data-oid="6_:5489">
                            {' '}
                            neuestes CORE Demomaterial{' '}
                        </span>
                        zur Verfügung – kostenlos für die Dauer der Reparatur.
                    </p>

                    <p className="text-lg font-bold text-[#38caba]" data-oid="0trshd4">
                        Erlebe unvergessliche Sessions ohne Unterbrechung.
                    </p>
                </div>
            </div>

            {/* Vollflächiges Hintergrundbild */}
            <div
                className="absolute inset-0 z-0 w-full h-full"
                style={{
                    backgroundImage: 'url(/images/kitesurfing-action.jpg)', // Platzhalter für ein Bild, das Spaß auf dem Wasser zeigt
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.5) contrast(1.1)',
                }}
                data-oid="o9nest4"
            ></div>

            {/* Subtiler Designakzent unten rechts */}
            <div
                className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-[#38caba] opacity-5 blur-xl"
                data-oid="q7v:pml"
            ></div>
        </div>
    );
}
