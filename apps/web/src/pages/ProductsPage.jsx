import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Package, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import { CATEGORIES, BRANDS, IMAGES } from '@/data/site';

export default function ProductsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cat, setCat] = useState('All');

    useEffect(() => {
    const loadProducts = async () => {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

       if (error) {
    console.error('SUPABASE ERROR:', error);
    alert('Supabase Error: ' + error.message);
    setItems([]);
} else {
    console.log('SUPABASE PRODUCTS:', data);
    setItems(data || []);
}

        setLoading(false);
    };

    loadProducts();
}, []);

    const filtered = cat === 'All' ? items : items.filter((p) => p.category === cat);

    return (
        <div className="bg-white">
            <Helmet>
                <title>Compressor Spare Parts & Service Products | Nimbus Equipments</title>
                <meta name="description" content="Browse air compressor spare parts, service kits, compressor oil, accessories, AMC, installation, repair and rental solutions from Nimbus Equipments, Delhi NCR." />
            </Helmet>
            <SiteHeader />
            <section className="relative">
                <img src={IMAGES.parts} alt="Air compressor spare parts" className="h-64 w-full object-cover sm:h-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F4D] to-[#0B1F4D]/60" />
                <div className="absolute inset-0 mx-auto flex max-w-[90rem] flex-col justify-center px-5">
                    <div className="mb-4 h-1 w-16 bg-[#D4A017]" />
                    <h1 className="font-display text-4xl font-bold uppercase text-white sm:text-5xl">Products & Solutions</h1>
                </div>
            </section>

            <section className="px-5 py-16">
                <div className="mx-auto max-w-[90rem]">
                    <div className="mb-10 flex flex-wrap gap-2">
                        {['All', ...CATEGORIES.map((c) => c.name)].map((c) => (
                            <button key={c} type="button" onClick={() => setCat(c)} className={`font-display rounded-sm border px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition ${cat === c ? 'border-[#D4A017] bg-[#0B1F4D] text-[#D4A017]' : 'border-[#0B1F4D]/15 text-[#0B1F4D] hover:border-[#D4A017]'}`}>{c}</button>
                        ))}
                    </div>

                    {loading ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[0, 1, 2, 3].map((i) => <div key={i} className="h-56 animate-pulse rounded-sm bg-[#F5F6F8]" />)}
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="rounded-sm border border-dashed border-[#0B1F4D]/20 p-14 text-center">
                            <Package className="mx-auto h-10 w-10 text-[#D4A017]" strokeWidth={1.3} />
                            <p className="font-display mt-4 text-xl font-bold uppercase text-[#0B1F4D]">No listed items in this category yet</p>
                            <p className="mt-2 text-sm text-[#0B1F4D]/60">We still supply the full range — send an enquiry with your part number.</p>
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {filtered.map((p) => (
                                <article key={p.id} className="group flex h-full flex-col rounded-sm border border-[#0B1F4D]/8 bg-white p-6 shadow-[0_10px_40px_-26px_rgba(11,31,77,.6)] transition hover:-translate-y-1.5 hover:border-[#D4A017]/60">
                                    {p.image_url ? (
                                        <img src={p.image_url} alt={p.name} className="mb-5 h-36 w-full rounded-sm object-cover" />
                                    ) : (
                                        <div className="mb-5 grid h-36 place-items-center rounded-sm bg-[#F5F6F8]"><Package className="h-9 w-9 text-[#123D8D]" strokeWidth={1.2} /></div>
                                    )}
                                    <span className="font-display text-[11px] font-bold uppercase tracking-widest text-[#D4A017]">{p.brand}</span>
                                    <h3 className="font-display mt-1 text-lg font-bold uppercase leading-snug text-[#0B1F4D]">{p.name}</h3>
                                    <p className="mt-1 text-xs text-[#0B1F4D]/55">Part No: {p.part_number || '-'}</p>
                                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#0B1F4D]/65">{p.description}</p>
                                    <div className="mt-4 flex items-center justify-between border-t border-[#0B1F4D]/10 pt-3 text-xs">
                                        <span className="font-semibold text-[#123D8D]">{p.stock_status}</span>
                                        <span className="text-[#0B1F4D]/55">{p.delivery_time}</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    <div id="brands" className="mt-20">
                        <div className="mb-4 h-1 w-16 bg-[#D4A017]" />
                        <h2 className="font-display text-3xl font-bold uppercase text-[#0B1F4D]">Compatible Brands</h2>
                        <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                            {BRANDS.map((b) => (
                                <div key={b} className="font-display rounded-sm border border-[#0B1F4D]/10 bg-[#F5F6F8] px-6 py-8 text-center text-lg font-bold uppercase text-[#0B1F4D]">{b}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <SiteFooter />
        </div>
    );
}
