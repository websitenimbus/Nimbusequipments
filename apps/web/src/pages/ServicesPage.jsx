import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Wrench, ShieldCheck, CheckCircle2, PhoneCall, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import RfqForm from '@/components/RfqForm';
import productsData from '@/data/products.json';

const SERVICE_CATS = ['MAINTENANCE SERVICE', 'AMC CONTRACT', 'INSTALLATION', 'REPAIR JOB'];

export default function ServicesPage() {
    const serviceItems = (productsData || []).filter((p) =>
        SERVICE_CATS.includes(p.category?.trim().toUpperCase())
    );

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <Helmet>
                <title>Compressor AMC, Overhaul & Piping Installation Services | Nimbus Equipments</title>
                <meta
                    name="description"
                    content="Preventive maintenance, annual maintenance contracts (AMC), turnkey air piping installation, and airend overhaul repairs across India."
                />
            </Helmet>

            <SiteHeader />

            {/* Header */}
            <section className="bg-[#0B1F4D] text-white py-14 border-b-4 border-[#D4A017]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#D4A017] uppercase tracking-widest mb-4">
                            <Wrench className="h-3.5 w-3.5" />
                            Industrial Field Services & Technical Support
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
                            Maintenance, AMC & Turnkey Services
                        </h1>
                        <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
                            Comprehensive maintenance contracts, emergency breakdown support, screw airend overhauling, and certified plant piping installations executed by certified service technicians.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-4xl">
                        <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                            <div className="text-[11px] uppercase tracking-wider text-[#D4A017] font-bold">Service Range</div>
                            <div className="text-sm font-semibold text-white mt-0.5">AMC & On-Demand</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                            <div className="text-[11px] uppercase tracking-wider text-[#D4A017] font-bold">Response Time</div>
                            <div className="text-sm font-semibold text-white mt-0.5">Under 24 Hours NCR</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                            <div className="text-[11px] uppercase tracking-wider text-[#D4A017] font-bold">Airend Overhauls</div>
                            <div className="text-sm font-semibold text-white mt-0.5">Precision Micron Specs</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                            <div className="text-[11px] uppercase tracking-wider text-[#D4A017] font-bold">Turnkey Erection</div>
                            <div className="text-sm font-semibold text-white mt-0.5">Complete Machine Setup</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#0B1F4D]">
                            Service Verticals & Offerings
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            Browse specific maintenance services or book a plant audit below.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {serviceItems.map((p) => (
                            <Link key={p.id} to={`/products/${p.id}`} className="group block h-full">
                                <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#D4A017]/80 hover:shadow-lg">
                                    <div className="mb-4 h-36 w-full overflow-hidden rounded bg-slate-50 flex items-center justify-center p-2">
                                        {p.image_url ? (
                                            <img src={p.image_url} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain transition duration-200 group-hover:scale-105" />
                                        ) : (
                                            <Wrench className="h-10 w-10 text-[#123D8D]" strokeWidth={1.2} />
                                        )}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A017]">
                                        {p.category}
                                    </span>
                                    <h3 className="mt-1 text-sm font-bold uppercase leading-snug text-[#0B1F4D]">
                                        {p.name}
                                    </h3>
                                    <p className="mt-2 flex-1 text-xs text-slate-600 line-clamp-3">
                                        {p.description?.replace(/^#{1,6}\s*/gm, '').replace(/\*\*/g, '').replace(/\*/g, '').trim()}
                                    </p>
                                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                                        <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                            On-Site Support
                                        </span>
                                        <span className="font-bold text-[#0B1F4D] group-hover:text-[#D4A017]">Details →</span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Features Banner */}
                    <div className="mt-14 bg-white rounded-lg border border-slate-200 p-8 grid sm:grid-cols-3 gap-6 shadow-sm">
                        <div className="flex items-start gap-3">
                            <Clock className="h-6 w-6 text-[#D4A017] shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Scheduled Preventive Audits</h4>
                                <p className="text-xs text-slate-500 mt-1">Periodic pressure, vibration, temperature and oil condition monitoring to stop unexpected breakdowns.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Genuine Spares Assurance</h4>
                                <p className="text-xs text-slate-500 mt-1">Every servicing utilizes verified OEM filtration kits and high-grade screw compressor oils.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <PhoneCall className="h-6 w-6 text-[#123D8D] shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Immediate Service Dispatch</h4>
                                <p className="text-xs text-slate-500 mt-1">Dedicated mobile technicians equipped with diagnostic tools on standby across NCR.</p>
                            </div>
                        </div>
                    </div>

                    <div id="rfq-section" className="mt-16 max-w-3xl mx-auto scroll-mt-24">
                        <RfqForm title="Book Service Visit or AMC Consultation" />
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
