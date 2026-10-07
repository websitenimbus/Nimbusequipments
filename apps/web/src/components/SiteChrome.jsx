import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Menu, X, MapPin, Clock, Linkedin, Facebook, Twitter, ChevronDown } from 'lucide-react';
import { LOGO, CONTACT } from '@/data/site';

export function SiteHeader() {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            {/* Top Contact Bar */}
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

            {/* Main Navigation Bar */}
            <div className="border-b border-[#0B1F4D]/10 bg-white shadow-[0_2px_18px_-10px_rgba(11,31,77,.5)]">
                <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-5 py-3">
                    
                    {/* Brand Logo */}
                    <Link to="/" className="flex items-center gap-3.5">
                        <img src={LOGO} alt="Nimbus Equipments logo" className="h-12 w-12 sm:h-14 sm:w-14 rounded-sm object-contain" />
                        <span className="leading-tight">
                            <span className="font-display block text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#0B1F4D]">Nimbus Equipments</span>
                            <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#123D8D]/80">Compressor Parts & Service</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden items-center gap-6 lg:flex">
                        <NavLink to="/" className={({ isActive }) => `font-display text-[15px] font-semibold uppercase tracking-wide transition-colors ${isActive ? 'text-[#D4A017]' : 'text-[#0B1F4D] hover:text-[#123D8D]'}`}>
                            Home
                        </NavLink>

                        {/* Products Dropdown (Desktop) */}
                        <div className="relative group">
                            <button
                                type="button"
                                className="font-display flex items-center gap-1 text-[15px] font-semibold uppercase tracking-wide text-[#0B1F4D] hover:text-[#123D8D] py-2"
                            >
                                <span>Products</span>
                                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                            </button>

                            {/* Dropdown Menu Box */}
                            <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white rounded-sm shadow-xl border border-slate-200 p-3 z-50">
                                {/* Section 1: Machinery */}
                                <div className="mb-2">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017] px-2.5 py-1">
                                        Equipments & Machinery
                                    </div>
                                    <Link
                                        to="/products/reciprocating-compressors"
                                        className="block px-2.5 py-2 text-sm text-slate-800 hover:bg-slate-50 hover:text-[#0B1F4D] rounded-sm font-medium transition-colors"
                                    >
                                        Reciprocating Compressors
                                    </Link>
                                </div>

                                <div className="border-t border-slate-100 my-1"></div>

                                {/* Section 2: Spares */}
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#0B1F4D]/70 px-2.5 py-1">
                                        Parts & Consumables
                                    </div>
                                    <Link
                                        to="/products"
                                        className="block px-2.5 py-2 text-sm text-slate-800 hover:bg-slate-50 hover:text-[#0B1F4D] rounded-sm font-medium transition-colors"
                                    >
                                        All Spares & Maintenance Kits
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <NavLink to="/products#brands" className="font-display text-[15px] font-semibold uppercase tracking-wide text-[#0B1F4D] hover:text-[#123D8D] transition-colors">
                            Brands
                        </NavLink>
                        <a href="/#industries" className="font-display text-[15px] font-semibold uppercase tracking-wide text-[#0B1F4D] hover:text-[#123D8D] transition-colors">
                            Industries
                        </a>
                        <a href="/#guides" className="font-display text-[15px] font-semibold uppercase tracking-wide text-[#0B1F4D] hover:text-[#123D8D] transition-colors">
                            Technical Guides
                        </a>
                        <NavLink to="/contact" className={({ isActive }) => `font-display text-[15px] font-semibold uppercase tracking-wide transition-colors ${isActive ? 'text-[#D4A017]' : 'text-[#0B1F4D] hover:text-[#123D8D]'}`}>
                            Contact Us
                        </NavLink>
                    </nav>

                    {/* Right Action Buttons */}
                    <div className="flex items-center gap-2">
                        <Link to="/contact#rfq" className="gold-btn font-display hidden rounded-sm px-5 py-3 text-sm font-bold uppercase tracking-wide sm:inline-block">Request Quote</Link>
                        <button type="button" aria-label="Menu" onClick={() => setOpen(!open)} className="rounded-sm border border-[#0B1F4D]/20 p-2.5 text-[#0B1F4D] lg:hidden">
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                {open && (
                    <nav className="border-t border-[#0B1F4D]/10 bg-white px-5 py-3 lg:hidden space-y-1">
                        <Link to="/" onClick={() => setOpen(false)} className="font-display block py-2 text-base font-semibold uppercase text-[#0B1F4D]">
                            Home
                        </Link>
                        
                        {/* Mobile Products Accordion */}
                        <div>
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="font-display flex w-full items-center justify-between py-2 text-base font-semibold uppercase text-[#0B1F4D]"
                            >
                                <span>Products</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {dropdownOpen && (
                                <div className="pl-4 pb-2 pt-1 space-y-2 border-l-2 border-[#D4A017] ml-2">
                                    <Link
                                        to="/products/reciprocating-compressors"
                                        onClick={() => setOpen(false)}
                                        className="block text-sm font-medium text-slate-800 hover:text-[#0B1F4D]"
                                    >
                                        Reciprocating Air Compressors
                                    </Link>
                                    <Link
                                        to="/products"
                                        onClick={() => setOpen(false)}
                                        className="block text-sm font-medium text-slate-800 hover:text-[#0B1F4D]"
                                    >
                                        Spares & Service Kits
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link to="/products#brands" onClick={() => setOpen(false)} className="font-display block py-2 text-base font-semibold uppercase text-[#0B1F4D]">
                            Brands
                        </Link>
                        <a href="/#industries" onClick={() => setOpen(false)} className="font-display block py-2 text-base font-semibold uppercase text-[#0B1F4D]">
                            Industries
                        </a>
                        <a href="/#guides" onClick={() => setOpen(false)} className="font-display block py-2 text-base font-semibold uppercase text-[#0B1F4D]">
                            Technical Guides
                        </a>
                        <Link to="/contact" onClick={() => setOpen(false)} className="font-display block py-2 text-base font-semibold uppercase text-[#0B1F4D]">
                            Contact Us
                        </Link>
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
                    <div className="flex items-center gap-3.5">
                        <img src={LOGO} alt="Nimbus Equipments logo" className="h-12 w-12 sm:h-14 sm:w-14 rounded-sm object-contain" />
                        <span className="leading-tight">
                            <span className="font-display block text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">Nimbus Equipments</span>
                            <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017]">Compressor Parts & Service</span>
                        </span>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed">Supplier and service partner for industrial air compressor machinery, spare parts, service kits, and maintenance solutions across India.</p>
                    <div className="mt-5 flex gap-3">
                        {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                            <span key={i} className="grid h-9 w-9 place-items-center rounded-sm border border-white/15 text-[#D4A017]"><Icon className="h-4 w-4" strokeWidth={1.75} /></span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-display mb-4 text-lg font-bold uppercase text-[#D4A017]">Products</h3>
                    <ul className="space-y-2.5 text-sm">
                        <li><Link to="/products/reciprocating-compressors" className="hover:text-[#D4A017] font-semibold text-white">Reciprocating Air Compressors</Link></li>
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
