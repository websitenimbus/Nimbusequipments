import React, { useState } from 'react';
import { Download, CheckCircle, ShieldCheck, Wrench, ChevronDown, ChevronUp, FileText, ArrowUpRight } from 'lucide-react';
import { RECIP_COMPRESSORS } from '@/data/recipCompressors';
import RfqForm from '@/components/RfqForm';

export default function RecipCompressorsPage() {
  const [activeTab, setActiveTab] = useState(RECIP_COMPRESSORS[0].id);
  const [showModelTable, setShowModelTable] = useState(false);
  const selected = RECIP_COMPRESSORS.find((c) => c.id === activeTab) || RECIP_COMPRESSORS[0];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Section Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B1F4D]/5 border border-[#0B1F4D]/15 rounded-full text-xs font-semibold text-[#0B1F4D] uppercase tracking-widest mb-3">
            <span className="h-2 w-2 rounded-full bg-[#D4A017]" />
            Industrial Equipment Division
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#0B1F4D]">
            Reciprocating Air Compressors
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Heavy-duty cast iron reciprocating technology engineered for garages, engineering fabrication, and high-pressure industrial production.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {RECIP_COMPRESSORS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setShowModelTable(false);
              }}
              className={`px-5 py-3 rounded text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-[#0B1F4D] text-[#D4A017] shadow-md border-b-2 border-[#D4A017]'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Hero Product Card */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            
            {/* Left: Product Image Box */}
            <div className="lg:col-span-5 p-8 lg:p-12 bg-slate-50/60 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square bg-white rounded-lg p-6 border border-slate-200/80 shadow-sm flex items-center justify-center">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="max-h-64 sm:max-h-72 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Factory Tested • Ready to Ship
              </div>
            </div>

            {/* Right: Key Info & Metric Stats */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                  {selected.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#0B1F4D] mt-1">
                  {selected.title}
                </h2>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {selected.description}
                </p>

                {/* 4 Clean Metric Cards (Replaces Clumsy Table) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
                  {selected.stats.map((stat, i) => (
                    <div key={i} className="bg-slate-50 rounded border border-slate-200 p-3.5 text-center">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {stat.label}
                      </div>
                      <div className="text-base sm:text-lg font-extrabold text-[#0B1F4D] mt-1">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-[#D4A017] font-semibold mt-0.5">
                        {stat.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-100">
                <a
                  href={selected.catalogUrl}
                  download
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0B1F4D] text-white hover:bg-[#123D8D] px-6 py-3.5 rounded text-xs font-bold uppercase tracking-wider shadow transition"
                >
                  <Download className="h-4 w-4 text-[#D4A017]" />
                  Download Official Catalog (PDF)
                </a>

                <a
                  href="#rfq-section"
                  className="inline-flex items-center justify-center gap-2 bg-[#D4A017] text-[#0B1F4D] hover:bg-[#E5B22E] px-6 py-3.5 rounded text-xs font-bold uppercase tracking-wider shadow transition"
                >
                  Request Factory Quote
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

            </div>

          </div>

          {/* Model Breakdown Toggle (Clean Accordion) */}
          <div className="border-t border-slate-200 bg-slate-50/50">
            <button
              onClick={() => setShowModelTable(!showModelTable)}
              className="w-full py-3.5 px-6 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0B1F4D] transition"
            >
              <span className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#D4A017]" />
                {showModelTable ? 'Hide Individual Model Breakdown' : 'View Individual Model Breakdown (HP, CFM, Tank Sizes)'}
              </span>
              {showModelTable ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {showModelTable && (
              <div className="p-6 bg-white border-t border-slate-200 overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#0B1F4D] text-white text-[11px] uppercase tracking-wider">
                      <th className="p-3 border border-slate-300">Model</th>
                      <th className="p-3 border border-slate-300">Motor Power</th>
                      <th className="p-3 border border-slate-300">FAD Delivery</th>
                      <th className="p-3 border border-slate-300">Working Pressure</th>
                      <th className="p-3 border border-slate-300">Receiver Tank</th>
                      <th className="p-3 border border-slate-300">Pump RPM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selected.models.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 border border-slate-200 font-bold text-[#0B1F4D]">{row.model}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.motorPower}</td>
                        <td className="p-3 border border-slate-200 font-semibold text-slate-900">{row.fad}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.pressure}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.tank}</td>
                        <td className="p-3 border border-slate-200 text-slate-600">{row.rpm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Engineering Highlights & Applications Grid */}
          <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-10 bg-white border-t border-slate-200">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F4D] flex items-center gap-2 mb-4">
                <ShieldCheck className="h-4 w-4 text-[#D4A017]" />
                Key Engineering Advantages
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {selected.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F4D] flex items-center gap-2 mb-4">
                <Wrench className="h-4 w-4 text-[#D4A017]" />
                Standard Industrial Applications
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {selected.applications.map((a, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4D] mt-2 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Lead Capture RFQ Form at bottom */}
        <div id="rfq-section" className="max-w-3xl mx-auto scroll-mt-24">
          <RfqForm title={`Get Factory Pricing for ${selected.title}`} />
        </div>

      </div>
    </div>
  );
}
