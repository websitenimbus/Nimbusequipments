import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Package, ShieldCheck, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import RfqForm from '@/components/RfqForm';
import productsData from '@/data/products.json';

const ACCESSORY_TABS = [
    { label: 'ALL ACCESSORIES', id: 'ALL' },
    { label: 'AIR DRYERS', id: 'DRYERS' },
    { label: 'RECEIVER TANKS', id: 'TANKS' },
    { label: 'FILTERS & SEPARATORS', id: 'FILTERS_SEPARATORS' },
    { label: 'DRAIN VALVES', id: 'DRAIN_VALVES' },
];

export default function AccessoriesPage() {
    const [activeTab, setActiveTab] = useState('ALL');

    // Sare accessories fetch karein
    const allAccessories = (productsData || []).filter(
        (p) => p.category?.trim().toUpperCase() === 'ACCESSORIES'
    );

    // Exact name matching based on image products
    const filtered = allAccessories.filter((p) => {
        if (activeTab === 'ALL') return true;

        const name = (p.name || '').toUpperCase();

        if (activeTab === 'DRYERS') {
            return name.includes('DRYER');
        }
        if (activeTab === 'TANKS') {
            return name.includes('TANK') || name.includes('RECEIVER');
        }
        if (activeTab === 'FILTERS_SEPARATORS') {
            return (
                name.includes('LINE FILTER') ||
                name.includes('FRL') ||
                name.includes('SEPARATOR')
            );
        }
        if (activeTab === 'DRAIN_VALVES') {
            return name.includes('DRAIN') || name.includes('VALVE');
        }

        return true;
    });

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <Helmet>
                <title>Compressed Air Accessories & Air Treatment | Nimbus Equipments</title>
                <meta
                    name="description"
                    content="Industrial air dryers, vertical air receivers, moisture separators, FRL units, line filters and auto drain valves by Nimbus Equipments."
                />
            </Helmet>

            <SiteHeader />

            {/* Industrial Hero Banner - Solid Left to Clear Image Right with Interactive Filter Tabs */}
            <section className="relative overflow-hidden bg-[#0B1F4D] text-white border-b-4 border-[#D4A017]">
                
                {/* Right Side Industrial Visual with Smooth Navy Fade */}
                <div className="absolute inset-y-0 right-0 w-full md:w-[65%] lg:w-[60%] z-0 pointer-events-none">
                    <img
                        src="/products/refrigerated-air-dryer.png"
                        alt="Air Treatment and Storage Systems"
                        className="h-full w-full object-cover object-right opacity-70 md:opacity-90"
                    />
                    {/* Left-to-Right Navy Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F4D] via-[#0B1F4D]/90 to-transparent md:via-[#0B1F4D]/65" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B1F4D] to-transparent" />
                </div>

                {/* Content Container (Left Side Clear Text & Interactive Tabs) */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
                    <div className="max-w-3xl">
                        
                        {/* Division Tag */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs rounded-full text-xs font-semibold text-[#D4A017] uppercase tracking-widest mb-4 border border-white/15">
                            <Layers className="h-3.5 w-3.5" />
                            Air Treatment & Storage Systems
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
                            Air Compressor <br />
                            <span className="text-[#D4A017]">Accessories</span>
                        </h1>

                        {/* Description */}
                        <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed font-normal max-w-2xl">
                            Moisture-free, clean and reliable compressed air utilities. Complete range of refrigerated air dryers, certified air receiver tanks, precision line filters, FRL units, and auto drain valves.
                        </p>

                        {/* Uniform Clickable Filter Buttons */}
                        <div className="mt-8 flex flex-wrap gap-2.5">
                            {ACCESSORY_TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition ${
                                        activeTab === tab.id
                                            ? 'bg-[#D4A017] text-[#0B1F4D] shadow'
                                            : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#0B1F4D]">
                                Available Accessories Range
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                High-durability equipment engineered to eliminate moisture, line scale, and pneumatic tool corrosion.
                            </p>
                        </div>
                        <a href="#rfq-section" className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1F4D] hover:text-[#D4A017] transition">
                            Request Custom Size Quote <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="rounded-sm border border-dashed border-[#0B1F4D]/20 p-14 text-center bg-white">
                            <Package className="mx-auto h-10 w-10 text-[#D4A017]" strokeWidth={1.3} />
                            <p className="mt-4 text-lg font-bold uppercase text-[#0B1F4D]">No items found in this section</p>
                            <p className="mt-1 text-sm text-slate-500">Contact us directly with your specific accessory requirement.</p>
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((p) => (
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
                                                {p.stock_status || 'In Stock'}
                                            </span>
                                            <span className="font-bold uppercase text-[#0B1F4D] group-hover:text-[#D4A017] transition flex items-center gap-1">
                                                Details →
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Industrial Advantages Banner */}
                    <div className="mt-14 bg-white rounded-lg border border-slate-200 p-8 grid sm:grid-cols-3 gap-6 shadow-sm">
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="h-6 w-6 text-[#D4A017] shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Tested Quality Vessels</h4>
                                <p className="text-xs text-slate-500 mt-1">Hydraulically pressure-tested air receiver tanks with safety relief valves & pressure gauges.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Zero Moisture Output</h4>
                                <p className="text-xs text-slate-500 mt-1">Refrigerated air dryers and auto drain valves ensure condensate-free pneumatic lines.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Package className="h-6 w-6 text-[#123D8D] shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Ready Dispatch</h4>
                                <p className="text-xs text-slate-500 mt-1">Direct factory dispatch across Delhi NCR and industrial hubs pan-India.</p>
                            </div>
                        </div>
                    </div>

                    <div id="rfq-section" className="mt-16 max-w-3xl mx-auto scroll-mt-24">
                        <RfqForm title="Request Pricing & Sizing for Accessories" />
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
