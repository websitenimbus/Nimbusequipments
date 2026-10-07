import React, { useState } from 'react';
import { Download, CheckCircle, ShieldCheck, Wrench } from 'lucide-react';
import { RECIP_COMPRESSORS } from '@/data/recipCompressors';
import RfqForm from '@/components/RfqForm';

export default function RecipCompressorsPage() {
  const [activeTab, setActiveTab] = useState(RECIP_COMPRESSORS[0].id);
  const selected = RECIP_COMPRESSORS.find((c) => c.id === activeTab) || RECIP_COMPRESSORS[0];

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D4A017] bg-[#0B1F4D] px-3 py-1 rounded-sm">
            Industrial Equipment
          </span>
          <h1 className="mt-3 text-3xl font-extrabold uppercase text-[#0B1F4D] sm:text-4xl">
            Reciprocating Piston Air Compressors
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Engineered with deep-finned cast iron cylinders, balanced crankshafts, and 100% copper motors for heavy-duty industrial service.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {RECIP_COMPRESSORS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-5 py-3 rounded-sm text-sm font-bold uppercase transition ${
                activeTab === item.id
                  ? 'bg-[#0B1F4D] text-[#D4A017] shadow-lg border-b-2 border-[#D4A017]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-sm shadow-md border border-slate-200 overflow-hidden mb-12">
          <div className="p-6 sm:p-8 border-b border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold uppercase text-[#0B1F4D]">{selected.title}</h2>
                <p className="text-sm text-slate-500 mt-1">
                  Power: <span className="font-semibold text-slate-800">{selected.powerRange}</span> | Working Pressure: <span className="font-semibold text-slate-800">{selected.workingPressure}</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selected.catalogUrl}
                  download
                  className="inline-flex items-center gap-2 bg-[#0B1F4D] text-white hover:bg-[#123D8D] px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wide transition shadow"
                >
                  <Download className="h-4 w-4 text-[#D4A017]" /> Download Specs PDF
                </a>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-4">{selected.description}</p>
          </div>

          {/* Model Specification Table */}
          <div className="overflow-x-auto p-6 sm:p-8">
            <h3 className="text-base font-bold uppercase text-[#0B1F4D] mb-4">Technical Specifications Table</h3>
            <table className="w-full text-left text-sm border-collapse border border-slate-200">
              <thead>
                <tr className="bg-[#0B1F4D] text-white text-xs uppercase font-semibold">
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
                    <td className="p-3 border border-slate-200 font-semibold text-slate-800">{row.fad}</td>
                    <td className="p-3 border border-slate-200 text-slate-700">{row.pressure}</td>
                    <td className="p-3 border border-slate-200 text-slate-700">{row.tank}</td>
                    <td className="p-3 border border-slate-200 text-slate-600">{row.rpm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-400 mt-2 italic">
              * Due to continuous product development, specifications and dimensions are subject to change without prior notice.
            </p>
          </div>

          {/* Features & Applications */}
          <div className="grid md:grid-cols-2 gap-8 p-6 sm:p-8 bg-slate-50 border-t border-slate-200">
            <div>
              <h4 className="text-sm font-bold uppercase text-[#0B1F4D] flex items-center gap-2 mb-3">
                <ShieldCheck className="h-4 w-4 text-[#D4A017]" /> Key Engineering Features
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {selected.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase text-[#0B1F4D] flex items-center gap-2 mb-3">
                <Wrench className="h-4 w-4 text-[#D4A017]" /> Typical Applications
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {selected.applications.map((a, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0B1F4D] mt-1.5 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Lead Capture RFQ Form at bottom */}
        <div className="max-w-3xl mx-auto">
          <RfqForm title={`Request Instant Quote - ${selected.title}`} />
        </div>

      </div>
    </div>
  );
}
