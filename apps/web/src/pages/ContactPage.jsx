import React from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import RfqForm from '@/components/RfqForm';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import { CONTACT, LOGO } from '@/data/site';

export default function ContactPage() {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Contact & RFQ | Nimbus Equipments Compressor Parts</title>
                <meta name="description" content="Request a quotation for compressor spare parts, service kits and AMC. Call +91 9289425601 or email nimbusequipments@outlook.com. Delhi NCR, India." />
            </Helmet>
            <SiteHeader />
            <section id="rfq" className="bg-[#0B1F4D] px-5 py-20">
                <div className="mx-auto grid max-w-[90rem] items-start gap-12 lg:grid-cols-2">
                    <div>
                        <img src={LOGO} alt="Nimbus Equipments logo" className="h-16 w-16 rounded-sm object-contain" />
                        <div className="mb-4 mt-6 h-1 w-16 bg-[#D4A017]" />
                        <h1 className="font-display text-4xl font-bold uppercase text-white sm:text-5xl">Contact & <span className="text-[#D4A017]">Request Quote</span></h1>
                        <p className="mt-4 max-w-lg text-white/70">Send your compressor model, part number or service requirement. Our technical team responds with pricing, availability and delivery time.</p>
                        <ul className="mt-10 space-y-5 text-white/85">
                            <li className="flex gap-3"><Phone className="h-5 w-5 text-[#D4A017]" strokeWidth={1.6} /><a href={`tel:${CONTACT.phoneRaw}`}>{CONTACT.phone}</a></li>
                            <li className="flex gap-3"><Mail className="h-5 w-5 text-[#D4A017]" strokeWidth={1.6} /><a href={`mailto:${CONTACT.email}`} className="break-all">{CONTACT.email}</a></li>
                            <li className="flex gap-3"><MapPin className="h-5 w-5 text-[#D4A017]" strokeWidth={1.6} />{CONTACT.location}</li>
                            <li className="flex gap-3"><Clock className="h-5 w-5 text-[#D4A017]" strokeWidth={1.6} />{CONTACT.hours}</li>
                        </ul>
                    </div>
                    <RfqForm extended title="Request Quote" />
                </div>
            </section>
            <SiteFooter />
        </div>
    );
}
