'use client';

import { RefObject } from 'react';

interface ContactSectionProps {
    contactFormRef: RefObject<HTMLElement>;
    messageRef: RefObject<HTMLTextAreaElement>;
}

export default function ContactSection({ contactFormRef, messageRef }: ContactSectionProps) {
    return (
        <section id="contact" className="py-24 bg-gray-100" ref={contactFormRef} data-oid="jn5i5f7">
            <div className="max-w-3xl mx-auto px-6" data-oid="javb72z">
                <h2 className="text-4xl font-light mb-16 text-center" data-oid="vc283u7">
                    REPARATURANFRAGE
                </h2>
                <form className="space-y-6" data-oid="oqk1v9x">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="st:t8.t">
                        <div data-oid="bm7uz._">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium"
                                data-oid="j2s6u1t"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="zbu_5.:"
                            />
                        </div>
                        <div data-oid="yk_1.z7">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium"
                                data-oid="yni0mbn"
                            >
                                E-Mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                                required
                                data-oid="s2k9btd"
                            />
                        </div>
                    </div>
                    <div data-oid="6olgbi1">
                        <label
                            htmlFor="kite"
                            className="block mb-2 text-sm font-medium"
                            data-oid="-i62o60"
                        >
                            Kite Modell
                        </label>
                        <input
                            type="text"
                            id="kite"
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                            data-oid=":bq6ei5"
                        />
                    </div>
                    <div data-oid="_qt-:b1">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium"
                            data-oid="oy:6ax:"
                        >
                            Beschreibung des Schadens
                        </label>
                        <textarea
                            id="message"
                            ref={messageRef}
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                            data-oid="x8guc:e"
                        ></textarea>
                    </div>
                    <div className="text-center" data-oid="6_:ph7-">
                        <button
                            type="submit"
                            className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                            data-oid="d4b80zl"
                        >
                            ANFRAGE SENDEN
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
