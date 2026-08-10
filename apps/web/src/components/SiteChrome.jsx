import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Menu, X, MapPin, Clock, Linkedin, Facebook, Twitter } from 'lucide-react';
import { LOGO, CONTACT } from '@/data/site';

const NAV = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/products#brands', label: 'Brands' },
    { to: '/#industries', label: 'Industries' },
    { to: '/#guides', label: 'Technical Guides' },
    { to: '/contact#rfq', label: 'RFQ' },
    { to: '/contact', label: 'Contact Us' },
];

export function SiteHeader() {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50">
            <div className="bg-[#0B1F4D] text-white/85 text-[13px]">
                <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 py-2">
                    <div className="flex items-center gap-5">
                        <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 hover:text-[#D4A017]">
                            <Phone className="h-3.5 w-3.5" strokeWidth={1.75} /> {CONTACT.phone}
                        </a>
                        <a href={`mailto:${CONTACT.email}`} className="hidden items-center gap-2 hover:text-[#D4A017] sm:flex">
                            <Mail className="h-3.5 w-3.5" strokeWidth={1.75} /> {CONTACT.email}
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-[#D4A017]"><MessageCircle className="h-4 w-4" strokeWidth={1.75} /></a>
                        <a href={`tel:${CONTACT.phoneRaw}`} aria-label="Call" className="hover:text-[#D4A017]"><Phone className="h-4 w-4" strokeWidth={1.75} /></a>
                        <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="hover:text-[#D4A017]"><Mail className="h-4 w-4" strokeWidth={1.75} /></a>
                    </div>
                </div>
            </div>
            <div className="border-b border-[#0B1F4D]/10 bg-white shadow-[0_2px_18px_-10px_rgba(11,31,77,.5)]">
                <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-5 py-3">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={LOGO} alt="Nimbus Equipments logo" className="h-12 w-12 rounded-sm object-contain" />
                        <span className="leading-tight">
                            <span className="font-display block text-xl font-bold uppercase tracking-wide text-[#0B1F4D]">Nimbus Equipments</span>
                            <span className="block text-[11px] uppercase tracking-[0.18em] text-[#123D8D]/70">Compressor Parts & Service</span>
                        </span>
                    </Link>
                    <nav className="hidden items-center gap-6 lg:flex">
                        {NAV.map((n) => (
                            <NavLink key={n.label} to={n.to} className={({ isActive }) => `font-display text-[15px] font-semibold uppercase tracking-wide transition-colors ${isActive ? 'text-[#D4A017]' : 'text-[#0B1F4D] hover:text-[#123D8D]'}`}>
                                {n.label}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <Link to="/contact#rfq" className="gold-btn font-display hidden rounded-sm px-5 py-3 text-sm font-bold uppercase tracking-wide sm:inline-block">Request Quote</Link>
                        <button type="button" aria-label="Menu" onClick={() => setOpen(!open)} className="rounded-sm border border-[#0B1F4D]/20 p-2.5 text-[#0B1F4D] lg:hidden">
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
                {open && (
                    <nav className="border-t border-[#0B1F4D]/10 bg-white px-5 py-3 lg:hidden">
                        {NAV.map((n) => (
                            <Link key={n.label} to={n.to} onClick={() => setOpen(false)} className="font-display block py-2.5 text-base font-semibold uppercase text-[#0B1F4D]">{n.label}</Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}

export function SiteFooter() {
    return (
        <footer className="bg-[#0B1F4D] text-white/75">
            <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="flex items-center gap-3">
                        <img src={LOGO} alt="Nimbus Equipments logo" className="h-14 w-14 rounded-sm object-contain" />
                        <span className="font-display text-xl font-bold uppercase text-white">Nimbus Equipments</span>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed">Supplier and service partner for industrial air compressor spare parts, service kits, lubricants and maintenance solutions across India.</p>
                    <div className="mt-5 flex gap-3">
                        {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                            <span key={i} className="grid h-9 w-9 place-items-center rounded-sm border border-white/15 text-[#D4A017]"><Icon className="h-4 w-4" strokeWidth={1.75} /></span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-display mb-4 text-lg font-bold uppercase text-[#D4A017]">Products</h3>
                    <ul className="space-y-2.5 text-sm">
                        {['Compressor Spare Parts', 'Service Kit', 'Compressor Oil', 'Accessories', 'Piping & Fittings'].map((t) => (
                            <li key={t}><Link to="/products" className="hover:text-[#D4A017]">{t}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-display mb-4 text-lg font-bold uppercase text-[#D4A017]">Support</h3>
                    <ul className="space-y-2.5 text-sm">
                        {[['Maintenance Service', '/products'], ['AMC Contract', '/products'], ['Repair Job', '/products'], ['Request a Quote', '/contact#rfq'], ['Contact Us', '/contact']].map(([t, to]) => (
                            <li key={t}><Link to={to} className="hover:text-[#D4A017]">{t}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-display mb-4 text-lg font-bold uppercase text-[#D4A017]">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-[#D4A017]" strokeWidth={1.75} /><a href={`tel:${CONTACT.phoneRaw}`}>{CONTACT.phone}</a></li>
                        <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-[#D4A017]" strokeWidth={1.75} /><a href={`mailto:${CONTACT.email}`} className="break-all">{CONTACT.email}</a></li>
                        <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[#D4A017]" strokeWidth={1.75} />{CONTACT.location}</li>
                        <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 text-[#D4A017]" strokeWidth={1.75} />{CONTACT.hours}</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/55">
                © {new Date().getFullYear()} Nimbus Equipments. All rights reserved.
            </div>
        </footer>
    );
}
