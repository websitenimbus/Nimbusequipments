import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Phone, Mail, MessageCircle, Menu, X, MapPin, Clock, 
  Linkedin, Facebook, Twitter, ChevronDown, Wrench, 
  Layers, Package, Settings, PenTool 
} from 'lucide-react';
import { LOGO, CONTACT } from '@/data/site';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  // Exact encoded URL paths for safe category filtering
  const pipingUrl = `/products?category=${encodeURIComponent('COMPRESSED AIR PIPING & FITTINGS')}`;
  const accessoriesUrl = `/products?category=${encodeURIComponent('ACCESSORIES')}`;
  const sparesUrl = `/products?category=${encodeURIComponent('COMPRESSOR SPARE PARTS')}`;
  const serviceKitUrl = `/products?category=${encodeURIComponent('SERVICE KIT')}`;
  const oilUrl = `/products?category=${encodeURIComponent('COMPRESSOR OIL')}`;
  const amcUrl = `/products?category=${encodeURIComponent('AMC CONTRACT')}`;
  const maintenanceUrl = `/products?category=${encodeURIComponent('MAINTENANCE SERVICE')}`;

  return (
    <header className="sticky top-0 z-50">
      {/* Top Contact Strip */}
      <div className="bg-[#0B1F4D] text-white/85 text-[13px]">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 py-2">
          <div className="flex items-center gap-5">
            <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 hover:text-[#D4A017] transition-colors">
              <Phone className="h-3.5 w-3.5" strokeWidth={1.75} /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hidden items-center gap-2 hover:text-[#D4A017] sm:flex transition-colors">
              <Mail className="h-3.5 w-3.5" strokeWidth={1.75} /> {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-[#D4A017] transition-colors">
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a href={`tel:${CONTACT.phoneRaw}`} aria-label="Call" className="hover:text-[#D4A017] transition-colors">
              <Phone className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="hover:text-[#D4A017] transition-colors">
              <Mail className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-[#0B1F4D]/10 bg-white shadow-[0_2px_18px_-10px_rgba(11,31,77,.5)]">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-5 py-3">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5">
            <img src={LOGO} alt="Nimbus Equipments logo" className="h-12 w-12 sm:h-14 sm:w-14 rounded-sm object-contain" />
            <span className="leading-tight">
              <span className="font-display block text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#0B1F4D]">Nimbus Equipments</span>
              <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#123D8D]/80">Compressors, Spares & Services</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden items-center gap-6 lg:flex">
            <NavLink to="/" className={({ isActive }) => `font-display text-[15px] font-semibold uppercase tracking-wide transition-colors ${isActive ? 'text-[#D4A017]' : 'text-[#0B1F4D] hover:text-[#123D8D]'}`}>
              Home
            </NavLink>

            {/* Products & Solutions Mega Menu */}
            <div className="relative group">
              <button
                type="button"
                className="font-display flex items-center gap-1.5 text-[15px] font-semibold uppercase tracking-wide text-[#0B1F4D] hover:text-[#123D8D] py-2 transition-colors"
              >
                <span>Products & Solutions</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* 5-Column Dropdown Panel */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:grid grid-cols-5 gap-4 w-[92vw] max-w-6xl bg-white rounded-md shadow-2xl border border-slate-200 p-6 z-50">
                
                {/* 1. Equipments & Machinery */}
                <div className="space-y-2 border-r border-slate-100 pr-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017] pb-1 border-b border-slate-100 flex items-center gap-1.5">
                    <Package className="h-3.5 w-3.5" /> 1. Equipments
                  </div>
                  <Link to="/products/reciprocating-compressors" className="block text-xs font-semibold text-slate-800 hover:text-[#0B1F4D] hover:bg-slate-50 p-2 rounded transition-colors">
                    Reciprocating Compressors
                  </Link>
                </div>

                {/* 2. Accessories */}
                <div className="space-y-2 border-r border-slate-100 pr-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017] pb-1 border-b border-slate-100 flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5" /> 2. Accessories
                  </div>
                  <Link to={accessoriesUrl} className="block text-xs font-semibold text-slate-800 hover:text-[#0B1F4D] hover:bg-slate-50 p-2 rounded transition-colors">
                    Air Dryers, Tanks & Accessories
                  </Link>
                </div>

                {/* 3. Compressed Air Piping (SINGLE DIRECT BUTTON - NO CONFUSION) */}
                <div className="space-y-2 border-r border-slate-100 pr-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017] pb-1 border-b border-slate-100 flex items-center gap-1.5">
                    <PenTool className="h-3.5 w-3.5" /> 3. Piping
                  </div>
                  <Link 
                    to={pipingUrl}
                    className="block text-xs font-semibold text-slate-800 hover:text-[#0B1F4D] hover:bg-slate-50 p-2 rounded transition-colors"
                  >
                    Compressed Air Piping & Fittings
                  </Link>
                  <p className="text-[11px] text-slate-400 px-2 leading-relaxed">
                    Includes Aluminium, PPRC Systems & Joint Fittings
                  </p>
                </div>

                {/* 4. Parts & Consumables */}
                <div className="space-y-2 border-r border-slate-100 pr-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017] pb-1 border-b border-slate-100 flex items-center gap-1.5">
                    <Settings className="h-3.5 w-3.5" /> 4. Parts & Consumables
                  </div>
                  <Link to={sparesUrl} className="block text-xs font-medium text-slate-700 hover:text-[#0B1F4D] hover:bg-slate-50 p-1.5 rounded transition-colors">
                    Compressor Spare Parts
                  </Link>
                  <Link to={serviceKitUrl} className="block text-xs font-medium text-slate-700 hover:text-[#0B1F4D] hover:bg-slate-50 p-1.5 rounded transition-colors">
                    Service Kits
                  </Link>
                  <Link to={oilUrl} className="block text-xs font-medium text-slate-700 hover:text-[#0B1F4D] hover:bg-slate-50 p-1.5 rounded transition-colors">
                    Compressor Oil
                  </Link>
                </div>

                {/* 5. Maintenance & Services */}
<div className="space-y-2">
  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4A017] pb-1 border-b border-slate-100 flex items-center gap-1.5">
    <Wrench className="h-3.5 w-3.5" /> 5. Services & Support
  </div>
  <Link 
    to={`/products?category=${encodeURIComponent('MAINTENANCE SERVICE')}`}
    className="block text-xs font-medium text-slate-700 hover:text-[#0B1F4D] hover:bg-slate-50 p-1.5 rounded transition-colors"
  >
    Maintenance Service
  </Link>
  <Link 
    to={`/products?category=${encodeURIComponent('AMC CONTRACT')}`}
    className="block text-xs font-medium text-slate-700 hover:text-[#0B1F4D] hover:bg-slate-50 p-1.5 rounded transition-colors"
  >
    AMC Contract
  </Link>
  <Link 
    to={`/products?category=${encodeURIComponent('INSTALLATION')}`}
    className="block text-xs font-medium text-slate-700 hover:text-[#0B1F4D] hover:bg-slate-50 p-1.5 rounded transition-colors"
  >
    Piping & Machine Installation
  </Link>
  <Link 
    to={`/products?category=${encodeURIComponent('REPAIR JOB')}`}
    className="block text-xs font-medium text-slate-700 hover:text-[#0B1F4D] hover:bg-slate-50 p-1.5 rounded transition-colors"
  >
    Overhauling & Repair Job
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

          {/* Request Quote Button */}
          <div className="flex items-center gap-2">
            <Link to="/contact#rfq" className="gold-btn font-display hidden rounded-sm px-5 py-3 text-sm font-bold uppercase tracking-wide sm:inline-block">
              Request Quote
            </Link>
            <button type="button" aria-label="Menu" onClick={() => setOpen(!open)} className="rounded-sm border border-[#0B1F4D]/20 p-2.5 text-[#0B1F4D] lg:hidden">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {open && (
          <nav className="border-t border-[#0B1F4D]/10 bg-white px-5 py-3 lg:hidden space-y-1">
            <Link to="/" onClick={() => setOpen(false)} className="font-display block py-2 text-base font-semibold uppercase text-[#0B1F4D]">
              Home
            </Link>
            
            {/* Mobile Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileDropdown(!mobileDropdown)}
                className="font-display flex w-full items-center justify-between py-2 text-base font-semibold uppercase text-[#0B1F4D]"
              >
                <span>Products & Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdown ? 'rotate-180' : ''}`} />
              </button>

              {mobileDropdown && (
                <div className="pl-3 pb-2 pt-1 space-y-3 border-l-2 border-[#D4A017] ml-2 text-sm">
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#D4A017]">1. Equipments</div>
                    <Link to="/products/reciprocating-compressors" onClick={() => setOpen(false)} className="block py-1 text-slate-800 font-medium">Reciprocating Compressors</Link>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#D4A017]">2. Accessories</div>
                    <Link to={accessoriesUrl} onClick={() => setOpen(false)} className="block py-1 text-slate-700">Accessories</Link>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#D4A017]">3. Piping</div>
                    <Link to={pipingUrl} onClick={() => setOpen(false)} className="block py-1 text-slate-700 font-medium">Compressed Air Piping & Fittings</Link>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#D4A017]">4. Parts & Consumables</div>
                    <Link to={sparesUrl} onClick={() => setOpen(false)} className="block py-1 text-slate-700">Compressor Spare Parts</Link>
                    <Link to={serviceKitUrl} onClick={() => setOpen(false)} className="block py-1 text-slate-700">Service Kit</Link>
                    <Link to={oilUrl} onClick={() => setOpen(false)} className="block py-1 text-slate-700">Compressor Oil</Link>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-[#D4A017]">5. Services</div>
                    <Link to={maintenanceUrl} onClick={() => setOpen(false)} className="block py-1 text-slate-700">Maintenance Service</Link>
                    <Link to={amcUrl} onClick={() => setOpen(false)} className="block py-1 text-slate-700">AMC Contract</Link>
                  </div>
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
  const pipingUrl = `/products?category=${encodeURIComponent('COMPRESSED AIR PIPING & FITTINGS')}`;
  const accessoriesUrl = `/products?category=${encodeURIComponent('ACCESSORIES')}`;
  const sparesUrl = `/products?category=${encodeURIComponent('COMPRESSOR SPARE PARTS')}`;
  const serviceKitUrl = `/products?category=${encodeURIComponent('SERVICE KIT')}`;
  const amcUrl = `/products?category=${encodeURIComponent('AMC CONTRACT')}`;
  const maintenanceUrl = `/products?category=${encodeURIComponent('MAINTENANCE SERVICE')}`;

  return (
    <footer className="bg-[#0B1F4D] text-white/75">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3.5">
            <img src={LOGO} alt="Nimbus Equipments logo" className="h-12 w-12 sm:h-14 sm:w-14 rounded-sm object-contain" />
            <span className="leading-tight">
              <span className="font-display block text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">Nimbus Equipments</span>
              <span className="block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A017]">Compressor Machinery & Spares</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Industrial supplier and turnkey engineering partner for compressed air machinery, aluminium piping, spare parts, and plant maintenance across India.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Facebook, Twitter].map((Icon, i) => (
              <span key={i} className="grid h-9 w-9 place-items-center rounded-sm border border-white/15 text-[#D4A017]"><Icon className="h-4 w-4" strokeWidth={1.75} /></span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display mb-4 text-lg font-bold uppercase text-[#D4A017]">Products & Equipments</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/products/reciprocating-compressors" className="hover:text-[#D4A017] text-white font-semibold">Reciprocating Air Compressors</Link></li>
            <li><Link to={accessoriesUrl} className="hover:text-[#D4A017]">Accessories & Air Dryers</Link></li>
            <li><Link to={pipingUrl} className="hover:text-[#D4A017]">Compressed Air Piping & Fittings</Link></li>
            <li><Link to={sparesUrl} className="hover:text-[#D4A017]">Compressor Spare Parts</Link></li>
            <li><Link to={serviceKitUrl} className="hover:text-[#D4A017]">Service Kits & Maintenance</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display mb-4 text-lg font-bold uppercase text-[#D4A017]">Services & Solutions</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to={amcUrl} className="hover:text-[#D4A017]">Comprehensive AMC Plans</Link></li>
            <li><Link to={maintenanceUrl} className="hover:text-[#D4A017]">Preventive Maintenance</Link></li>
            <li><Link to={pipingUrl} className="hover:text-[#D4A017]">Turnkey Piping Installation</Link></li>
            <li><Link to="/contact#rfq" className="hover:text-[#D4A017]">Request Machinery Quote</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display mb-4 text-lg font-bold uppercase text-[#D4A017]">Contact Us</h3>
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
