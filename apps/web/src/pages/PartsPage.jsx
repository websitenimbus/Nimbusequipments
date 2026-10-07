import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Package, Search, Settings, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import RfqForm from '@/components/RfqForm';
import productsData from '@/data/products.json';

const ALLOWED_CATS = ['COMPRESSOR SPARE PARTS', 'SERVICE KIT', 'COMPRESSOR OIL'];

export default function PartsPage() {
    const allParts = (productsData || []).filter((p) =>
        ALLOWED_CATS.includes(p.category?.trim().toUpperCase())
    );

    const [activeTab, setActiveTab] = useState('ALL');
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = allParts.filter((p) => {
        const catMatch =
            activeTab === 'ALL' ||
            p.category?.trim().toUpperCase() === activeTab;
        const searchMatch =
            !searchTerm ||
            p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.part_number?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.brand?.toLowerCase().includes(searchTerm.toLowerCase());
        return catMatch && searchMatch;
    });

    return (
        <div className="bg-[#F8FAFC] min-h-screen">
            <Helmet>
                <title>Compressor Spare Parts, Kits & Lubricants | Nimbus Equipments</title>
                <meta
                    name="description"
                    content="OEM and compatible compressor spare parts, air/oil filters, air-oil separators, service kits, and synthetic oils by Nimbus Equipments."
                />
            </Helmet>

            <SiteHeader />

            {/* Header */}
            <section className="bg-[#0B1F4D] text-white py-14 border-b-4 border-[#D4A017]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#D4A017] uppercase tracking-widest mb-4">
                            <Settings className="h-3.5 w-3.5" />
                            Aftermarket Parts & Consumables
                        </div>
                        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
                            Compressor Spares, Kits & Oils
                        </h1>
                        <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
                            Complete range of genuine and premium replacement parts for Atlas Copco, ELGi, Ingersoll Rand, Chicago Pneumatic, and Kaeser screw and reciprocating air compressors.
                        </p>
                    </div>

                    {/* Filter Tabs & Search */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                            {['ALL', 'COMPRESSOR SPARE PARTS', 'SERVICE KIT', 'COMPRESSOR OIL'].map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition ${
                                        activeTab === tab
                                            ? 'bg-[#D4A017] text-[#0B1F4D]'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                                >
                                    {tab === 'ALL' ? 'All Items' : tab}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search by name or part no..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 bg-white text-slate-800 rounded text-xs focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-14">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {filtered.length === 0 ? (
                        <div className="rounded-sm border border-dashed border-[#0B1F4D]/20 p-14 text-center bg-white">
                            <Package className="mx-auto h-10 w-10 text-[#D4A017]" strokeWidth={1.3} />
                            <p className="mt-4 text-lg font-bold uppercase text-[#0B1F4D]">No matching spare parts found</p>
                            <p className="mt-1 text-sm text-slate-500">Contact us directly with your compressor model or part number.</p>
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {filtered.map((p) => (
                                <Link key={p.id} to={`/products/${p.id}`} className="group block h-full">
                                    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#D4A017]/80 hover:shadow-lg">
                                        {p.image_url ? (
                                            <div className="mb-4 h-40 w-full overflow-hidden rounded bg-slate-50 flex items-center justify-center p-2">
                                                <img src={p.image_url} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain transition duration-200 group-hover:scale-105" />
                                            </div>
                                        ) : (
                                            <div className="mb-4 grid h-40 place-items-center rounded bg-slate-50">
                                                <Package className="h-10 w-10 text-[#123D8D]" strokeWidth={1.2} />
                                            </div>
                                        )}
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A017]">
                                            {p.brand || 'Nimbus Equipments'}
                                        </span>
                                        <h3 className="mt-1 text-sm font-bold uppercase leading-snug text-[#0B1F4D]">
                                            {p.name}
                                        </h3>
                                        <p className="mt-1 text-[11px] text-slate-400">
                                            Part No: {p.part_number || '-'}
                                        </p>
                                        <p className="mt-2 flex-1 text-xs text-slate-600 line-clamp-2">
                                            {p.description?.replace(/^#{1,6}\s*/gm, '').replace(/\*\*/g, '').replace(/\*/g, '').trim()}
                                        </p>
                                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                                            <span className="font-semibold text-slate-700">{p.stock_status || 'In Stock'}</span>
                                            <span className="font-bold text-[#0B1F4D] group-hover:text-[#D4A017]">View →</span>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}

                    <div id="rfq-section" className="mt-16 max-w-3xl mx-auto scroll-mt-24">
                        <RfqForm title="Enquire Spare Parts by Part Number" />
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
