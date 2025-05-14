'use client';

import { useState, useRef } from 'react';
import {
    RepairType,
    RepairLocation,
    repairTypeLabels,
    repairLocationLabels,
} from './components/types';

// Import Components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ProcessSection from './components/ProcessSection';
import LocationSection from './components/LocationSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ExclusiveOffer from './components/ExclusiveOffer';

export default function Page() {
    // State für aktuelle Reparaturdetails
    const [currentRepairType, setCurrentRepairType] = useState<RepairType>('small');
    const [currentRepairLocation, setCurrentRepairLocation] = useState<RepairLocation>('canopy');
    const [currentEstimatedPrice, setCurrentEstimatedPrice] = useState(40);

    // Refs für das Kontaktformular
    const contactFormRef = useRef<HTMLElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    // Handler für die Aktualisierung der Reparaturdetails vom Calculator
    const handleRepairDetailsUpdate = (
        repairType: RepairType,
        repairLocation: RepairLocation,
        estimatedPrice: number,
    ) => {
        setCurrentRepairType(repairType);
        setCurrentRepairLocation(repairLocation);
        setCurrentEstimatedPrice(estimatedPrice);
    };

    // Füllt das Kontaktformular mit den aktuellen Reparaturdetails und scrollt dorthin
    const fillContactForm = () => {
        if (messageRef.current) {
            messageRef.current.value = `Liebe Manuela, Ich habe eine Reparaturanfrage für folgenden Schaden:
- Art des Schadens: ${repairTypeLabels[currentRepairType]}
- Position des Schadens: ${repairLocationLabels[currentRepairLocation]}
- Geschätzter Preis: ${currentEstimatedPrice}€

Weitere Details zum Schaden:`;
        }

        // Scrollen zum Kontaktformular
        if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="font-sans text-gray-900 bg-white" data-oid="s7b8p_0">
            <Navigation data-oid="xyid_lk" />
            <HeroSection data-oid="sz59qcd" />
            <BenefitsSection data-oid="39x3mni" />
            <ProcessSection
                fillContactForm={fillContactForm}
                onRepairDetailsUpdate={handleRepairDetailsUpdate}
                data-oid="13681tp"
            />

            <div className="max-w-7xl mx-auto px-6 py-8" data-oid="7v5iv_a">
                <ExclusiveOffer data-oid="cd5ehdu" />
            </div>

            <LocationSection data-oid="xb9c.fe" />
            <AboutSection data-oid="63c546z" />
            <ServicesSection data-oid="2a5fov_" />
            <FaqSection data-oid="5yv71pd" />
            <ContactSection
                contactFormRef={contactFormRef}
                messageRef={messageRef}
                data-oid="onc5:h9"
            />

            <Footer data-oid="fyurqbx" />
        </div>
    );
}
