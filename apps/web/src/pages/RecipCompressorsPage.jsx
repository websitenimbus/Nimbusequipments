import React from 'react';
import { Helmet } from 'react-helmet';
import { Package, ShieldCheck, Download, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import RfqForm from '@/components/RfqForm';

const CATALOG_PDF_URL = '/catalogs/reciprocating-compressors.pdf';

const COMPRESSOR_PRODUCTS = [
  {
    id: 'single-stage-air-compressor',
    name: 'Single Stage Air Compressor',
    category: 'Reciprocating Compressors',
    brand: 'Nimbus Equipments',
    power: '1.0 HP – 3.0 HP',
    pressure: 'Up to 8.5 Bar (115 – 125 PSI)',
    image: '/products/recip-single-stage.png',
    stockStatus: 'In Stock',
    overview: 'Heavy-duty cast iron reciprocating air compressor built for garages, surface coating, woodworking, and pneumatic workshop utilities with low-RPM quiet operation.'
  },
  {
    id: 'two-stage-air-compressor',
    name: 'Two-Stage Industrial Air Compressor',
    category: 'Reciprocating Compressors',
    brand: 'Nimbus Equipments',
    power: '3.0 HP – 15.0 HP',
    pressure: 'Up to 12 Bar (175 PSI)',
    image: '/products/recip-two-stage.png',
    stockStatus: 'In Stock',
    overview: 'Engineered for continuous industrial manufacturing duty with copper intercooler pipes, oversized finned cylinders, and heavy cast iron crankshaft.'
  },
  {
    id: 'high-pressure-air-compressor',
    name: 'Multi-Stage High Pressure Air Compressor',
    category: 'Reciprocating Compressors',
    brand: 'Nimbus Equipments',
    power: '10.0 HP – 40.0 HP',
    pressure: '30 Bar – 40 Bar (435 – 580 PSI)',
    image: '/products/recip-high-pressure.png',
    stockStatus: 'Available on Order',
    overview: 'Heavy casted multi-stage design engineered for PET stretch bottle blowing, hydro testing, and specialized high-pressure plant applications.'
  }
];

export default function RecipCompressorsPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <Helmet>
        <title>Reciprocating Air Compressors | Single Stage, Two-Stage & High Pressure | Nimbus Equipments</title>
        <meta 
          name="description" 
          content="Heavy-duty reciprocating air compressors by Nimbus Equipments. Single stage 8.5 Bar, two-stage 12 Bar, and multi-stage 40 Bar PET high-pressure compressor models." 
        />
      </Helmet>

      <SiteHeader />

      {/* Upgraded Industrial Banner Header with Subtle Background Overlay */}
      <section className="relative overflow-hidden bg-[#0B1F4D] text-white py-16 sm:py-20 border-b-4 border-[#D4A017]">
        {/* Background Banner Image with Opacity & Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/products/recip-two-stage.png"
            alt="Industrial Compressor Background"
            className="h-full w-full object-cover object-right-bottom opacity-15 filter blur-[0.5px]"
          />
          {/* Dark Navy Blue Gradient Overlay taaki text 100% clear dikhe */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F4D] via-[#0B1F4D]/90 to-transparent" />
        </div>

        {/* Content Container (Left Side Clear Text) */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs rounded-full text-xs font-semibold text-[#D4A017] uppercase tracking-widest mb-4 border border-white/10">
              <Package className="h-3.5 w-3.5" />
              Heavy Machinery Division
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white drop-shadow-xs">
              Reciprocating Air Compressors
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-2xl">
              Precision-machined cast iron reciprocating technology engineered for automotive garages, industrial fabrication, PET blow moulding, and continuous plant utilities.
            </p>
          </div>
        </div>
      </section>

      {/* Product Listing Section */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#0B1F4D]">
                Available Machinery Range
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Explore models, power ratings, and technical specifications.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center gap-4">
              <a 
                href={CATALOG_PDF_URL}
                download="Nimbus-Reciprocating-Compressors-Catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0B1F4D] text-white rounded text-xs font-bold uppercase hover:bg-[#123D8D] transition shadow-sm border border-[#D4A017]/40"
              >
                <Download className="h-4 w-4 text-[#D4A017]" /> Download Catalog (PDF)
              </a>
              <a 
                href="#rfq-section" 
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1F4D] hover:text-[#D4A017] transition"
              >
                Request Quote <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Standard 3-Column Product Grid (Matches Accessories / Parts experience) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMPRESSOR_PRODUCTS.map((p) => (
              <Link key={p.id} to={`/products/${p.id}`} className="group block h-full">
                <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#D4A017]/80 hover:shadow-lg">
                  
                  {/* Image Box */}
                  <div className="mb-5 h-52 w-full overflow-hidden rounded bg-slate-50 flex items-center justify-center p-3">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      loading="lazy" 
                      className="max-h-full max-w-full object-contain transition duration-200 group-hover:scale-105" 
                    />
                  </div>

                  {/* Brand & Title */}
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4A017]">
                    {p.brand}
                  </span>
                  <h3 className="mt-1 text-lg font-bold uppercase leading-snug text-[#0B1F4D]">
                    {p.name}
                  </h3>

                  {/* Technical Meta Pills */}
                  <div className="mt-2.5 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                    <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      ⚡ {p.power}
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      ⚙️ {p.pressure}
                    </span>
                  </div>

                  {/* Overview Snippet */}
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {p.overview}
                  </p>

                  {/* Bottom Action Footer */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                      {p.stockStatus}
                    </span>
                    <span className="font-bold uppercase text-[#0B1F4D] group-hover:text-[#D4A017] transition flex items-center gap-1">
                      Details →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Plant Reliability Features */}
          <div className="mt-14 bg-white rounded-lg border border-slate-200 p-8 grid sm:grid-cols-3 gap-6 shadow-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-[#D4A017] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Graded Cast Iron Pump</h4>
                <p className="text-xs text-slate-500 mt-1">High-tensile Grade 25 cast iron cylinder and crankcase built for continuous industrial duty.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">100% Copper Motor</h4>
                <p className="text-xs text-slate-500 mt-1">Industrial 4-pole electric motor providing maximum starting torque and thermal durability.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package className="h-6 w-6 text-[#123D8D] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Spare Parts Support</h4>
                <p className="text-xs text-slate-500 mt-1">Complete replacement valves, piston rings, gaskets, and overhaul kits stocked in Delhi NCR.</p>
              </div>
            </div>
          </div>

          {/* RFQ Form */}
          <div id="rfq-section" className="mt-16 max-w-3xl mx-auto scroll-mt-24">
            <RfqForm title="Request Reciprocating Compressor Quote & Sizing" />
          </div>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
