import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Package, ShieldCheck, CheckCircle2, ArrowUpRight, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import RfqForm from '@/components/RfqForm';
import productsData from '@/data/products.json';

export default function PipingPage() {
    const [items] = useState(
        (productsData || []).filter(
            (p) => p.category?.trim().toUpperCase() === 'COMPRESSED AIR PIPING & FITTINGS'
        )
    );

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <Helmet>
                <title>Aluminium & PPRC Compressed Air Piping Systems | Nimbus Equipments</title>
                <meta
                    name="description"
                    content="Leak-proof modular aluminium and PPRC compressed air pipeline solutions and fittings across India by Nimbus Equipments."
                />
            </Helmet>

            <SiteHeader />

            {/* Hero Header */}
            <section className="bg-[#0B1F4D] text-white py-14 border-b-4 border-[#D4A017]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#D4A017] uppercase tracking-widest mb-4">
                            <PenTool className="h-3.5 w-3.5" />
                            Industrial Air Distribution Solutions
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
                            Compressed Air Piping Systems
                        </h1>
                        <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
                            Zero-leakage modular aluminium and fusion-welded PPRC pipeline networks engineered to eliminate pressure drop, prevent rust scale, and cut plant energy losses.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-4xl">
                        <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                            <div className="text-[11px] uppercase tracking-wider text-[#D4A017] font-bold">Pipe Sizes</div>
                            <div className="text-sm font-semibold text-white mt-0.5">20mm to 110mm OD</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                            <div className="text-[11px] uppercase tracking-wider text-[#D4A017] font-bold">Working Pressure</div>
                            <div className="text-sm font-semibold text-white mt-0.5">Up to 15.0 Bar</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                            <div className="text-[11px] uppercase tracking-wider text-[#D4A017] font-bold">Energy Savings</div>
                            <div className="text-sm font-semibold text-white mt-0.5">Up to 30% Low Drop</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded p-3 text-center">
                            <div className="text-[11px] uppercase tracking-wider text-[#D4A017] font-bold">Installation</div>
                            <div className="text-sm font-semibold text-white mt-0.5">Rapid Quick-Fit Joints</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Range */}
            <section className="py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#0B1F4D]">
                                Piping Systems & Fittings Catalog
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                Complete selection of anodised aluminium pipes, PPRC air pipes, fittings, brackets, and quick couplers.
                            </p>
                        </div>
                        <a href="#rfq-section" className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1F4D] hover:text-[#D4A017] transition">
                            Get Pipeline Sizing Quote <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map((p) => (
                            <Link key={p.id} to={`/products/${p.id}`} className="group block h-full">
                                <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#D4A017]/80 hover:shadow-lg">
                                    {p.image_url ? (
                                        <div className="mb-5 h-48 w-full overflow-hidden rounded bg-slate-50 flex items-center justify-center p-2">
                                            <img src={p.image_url} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain transition duration-200 group-hover:scale-105" />
                                        </div>
                                    ) : (
                                        <div className="mb-5 grid h-48 place-items-center rounded bg-slate-50">
                                            <Package className="h-10 w-10 text-[#123D8D]" strokeWidth={1.2} />
                                        </div>
                                    )}
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4A017]">
                                        {p.brand || 'Nimbus Equipments'}
                                    </span>
                                    <h3 className="mt-1 text-lg font-bold uppercase leading-snug text-[#0B1F4D]">
                                        {p.name}
                                    </h3>
                                    <p className="mt-2.5 flex-1 text-xs leading-relaxed text-slate-600 line-clamp-3">
                                        {p.description?.replace(/^#{1,6}\s*/gm, '').replace(/\*\*/g, '').replace(/\*/g, '').trim()}
                                    </p>
                                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                                        <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                                            {p.stock_status || 'Ready Supply'}
                                        </span>
                                        <span className="font-bold uppercase text-[#0B1F4D] group-hover:text-[#D4A017] transition flex items-center gap-1">
                                            Details →
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-14 bg-white rounded-lg border border-slate-200 p-8 grid sm:grid-cols-3 gap-6 shadow-sm">
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="h-6 w-6 text-[#D4A017] shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">100% Corrosion Resistant</h4>
                                <p className="text-xs text-slate-500 mt-1">Unlike MS/GI pipes, smooth aluminium bore prevents internal scaling and valve jamming.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Ultra-Low Pressure Drop</h4>
                                <p className="text-xs text-slate-500 mt-1">Calibrated inner surfaces ensure peak airflow delivery with minimal friction losses.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <PenTool className="h-6 w-6 text-[#123D8D] shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Turnkey Plant Erection</h4>
                                <p className="text-xs text-slate-500 mt-1">Complete layout sizing, supply, and on-site fitting team available pan-India.</p>
                            </div>
                        </div>
                    </div>

                    <div id="rfq-section" className="mt-16 max-w-3xl mx-auto scroll-mt-24">
                        <RfqForm title="Request Turnkey Piping Layout & Quote" />
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
