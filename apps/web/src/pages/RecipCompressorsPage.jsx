import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Package, ShieldCheck, Download, ArrowUpRight, 
  CheckCircle2, Gauge, Zap, Wrench, ChevronDown 
} from 'lucide-react';

import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import RfqForm from '@/components/RfqForm';

const COMPRESSOR_MODELS = [
  {
    id: 'single-stage',
    tabLabel: 'SINGLE STAGE COMPRESSORS',
    badge: 'Light Industrial & Garage Utility Range',
    title: 'Single Stage Air Compressor',
    description: 'Heavy-duty cast iron reciprocating air compressor built for garages, surface coating, woodworking, and pneumatic workshop utilities with low-RPM quiet operation.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    specs: {
      power: '1.0 – 3.0 HP (0.75 – 2.2 kW)',
      pressure: '8.5 Bar (115 – 125 PSI)',
      airflow: '3.5 – 10.0 CFM (Single Stage)',
      tank: '45L – 160L Tested Vessel',
      lubrication: 'Splash Lubricated Cast Iron Sump',
      drive: 'V-Belt Driven with Heavy Safety Guard'
    },
    tableData: [
      { model: 'NE-SS-10', hp: '1.0 HP', stage: 'Single', cfm: '3.5 CFM', bar: '8.5 Bar', tank: '45 Ltrs', drive: '0.75 kW / 1-Ph' },
      { model: 'NE-SS-20', hp: '2.0 HP', stage: 'Single', cfm: '7.0 CFM', bar: '8.5 Bar', tank: '100 Ltrs', drive: '1.5 kW / 3-Ph' },
      { model: 'NE-SS-30', hp: '3.0 HP', stage: 'Single', cfm: '10.0 CFM', bar: '8.5 Bar', tank: '160 Ltrs', drive: '2.2 kW / 3-Ph' },
    ]
  },
  {
    id: 'two-stage',
    tabLabel: 'TWO-STAGE INDUSTRIAL COMPRESSORS',
    badge: 'Continuous Duty Manufacturing Range',
    title: 'Two-Stage Industrial Air Compressor',
    description: 'Engineered for continuous industrial duty, high compression efficiency with intercooler pipes, oversized finned cylinders, and heavy cast iron crankshaft.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    specs: {
      power: '3.0 – 15.0 HP (2.2 – 11.0 kW)',
      pressure: '12.0 Bar (175 PSI)',
      airflow: '9.8 – 48.0 CFM (Two Stage)',
      tank: '200L – 500L IS:2825 Vessel',
      lubrication: 'Deep Fin Heavy Duty Splash Sump',
      drive: 'Industrial Heavy-Duty Dual V-Belt'
    },
    tableData: [
      { model: 'NE-TS-03', hp: '3.0 HP', stage: 'Two Stage', cfm: '9.8 CFM', bar: '12.0 Bar', tank: '200 Ltrs', drive: '2.2 kW / 3-Ph' },
      { model: 'NE-TS-05', hp: '5.0 HP', stage: 'Two Stage', cfm: '16.5 CFM', bar: '12.0 Bar', tank: '250 Ltrs', drive: '3.7 kW / 3-Ph' },
      { model: 'NE-TS-75', hp: '7.5 HP', stage: 'Two Stage', cfm: '26.0 CFM', bar: '12.0 Bar', tank: '300 Ltrs', drive: '5.5 kW / 3-Ph' },
      { model: 'NE-TS-100', hp: '10.0 HP', stage: 'Two Stage', cfm: '35.5 CFM', bar: '12.0 Bar', tank: '500 Ltrs', drive: '7.5 kW / 3-Ph' },
      { model: 'NE-TS-150', hp: '15.0 HP', stage: 'Two Stage', cfm: '48.0 CFM', bar: '12.0 Bar', tank: '500 Ltrs', drive: '11.0 kW / 3-Ph' }
    ]
  },
  {
    id: 'high-pressure',
    tabLabel: 'MULTI-STAGE HIGH PRESSURE',
    badge: 'PET Bottling & Heavy Engineering Duty',
    title: 'Multi-Stage High Pressure Air Compressor',
    description: 'Specialized 2-stage and 3-stage high pressure compressor systems designed for PET stretch blow molding, hydro testing, valve leak testing, and substation switchgear breakers.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    specs: {
      power: '7.5 – 30.0 HP (5.5 – 22.0 kW)',
      pressure: '30.0 – 40.0 Bar (435 – 580 PSI)',
      airflow: '18.0 – 75.0 CFM High Flow',
      tank: 'Base Skid Mounted / 500L HP Vessel',
      lubrication: 'Forced / Heavy Splash Lubricated',
      drive: 'Multi-Groove Heavy V-Belt Pulley'
    },
    tableData: [
      { model: 'NE-HP-75', hp: '7.5 HP', stage: '3-Stage', cfm: '18.0 CFM', bar: '35 Bar', tank: 'Skid / 300L', drive: '5.5 kW / 3-Ph' },
      { model: 'NE-HP-150', hp: '15.0 HP', stage: '3-Stage', cfm: '38.0 CFM', bar: '40 Bar', tank: 'Skid / 500L', drive: '11.0 kW / 3-Ph' },
      { model: 'NE-HP-250', hp: '25.0 HP', stage: '3-Stage', cfm: '62.0 CFM', bar: '40 Bar', tank: 'Skid Mounted', drive: '18.5 kW / 3-Ph' },
      { model: 'NE-HP-300', hp: '30.0 HP', stage: '3-Stage', cfm: '75.0 CFM', bar: '40 Bar', tank: 'Skid Mounted', drive: '22.0 kW / 3-Ph' }
    ]
  }
];

export default function RecipCompressorsPage() {
  const [activeTab, setActiveTab] = useState(COMPRESSOR_MODELS[0].id);
  const currentModel = COMPRESSOR_MODELS.find((m) => m.id === activeTab) || COMPRESSOR_MODELS[0];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <Helmet>
        <title>Reciprocating Air Compressors | Single, Two-Stage & High Pressure | Nimbus Equipments</title>
        <meta 
          name="description" 
          content="Heavy-duty cast iron reciprocating air compressors manufactured and supplied by Nimbus Equipments. Single stage, two-stage 12 Bar, and multi-stage 40 Bar high pressure models." 
        />
      </Helmet>

      <SiteHeader />

      {/* Header Section (Same Uniform Navy Blue & Gold Theme as Accessories/Services) */}
      <section className="bg-[#0B1F4D] text-white py-14 border-b-4 border-[#D4A017]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#D4A017] uppercase tracking-widest mb-4">
              <Package className="h-3.5 w-3.5" />
              Industrial Equipment Division
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
              Reciprocating Air Compressors
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
              Heavy-duty cast iron reciprocating technology engineered for garages, engineering fabrication, PET bottle blowing, and high-pressure industrial plant utilities.
            </p>
          </div>

          {/* Clickable Filter Buttons (Exact same position & style as other pages) */}
          <div className="mt-8 flex flex-wrap gap-2">
            {COMPRESSOR_MODELS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition ${
                  activeTab === item.id
                    ? 'bg-[#D4A017] text-[#0B1F4D] shadow font-extrabold'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {item.tabLabel}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#0B1F4D]">
                Technical Machine Showcase
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Explore engineering specifications, operational capacity, and standard model configurations.
              </p>
            </div>
            <a 
              href="#rfq-section" 
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1F4D] hover:text-[#D4A017] transition"
            >
              Request Custom Machine Quote <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Active Model Detailed Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Product Photo */}
              <div className="lg:col-span-5 bg-slate-50 rounded-lg p-6 flex items-center justify-center border border-slate-100">
                <img 
                  src={currentModel.image} 
                  alt={currentModel.title} 
                  className="max-h-72 w-full object-contain rounded drop-shadow-md"
                />
              </div>

              {/* Specs & Description */}
              <div className="lg:col-span-7">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4A017]">
                  {currentModel.badge}
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold uppercase text-[#0B1F4D]">
                  {currentModel.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {currentModel.description}
                </p>

                {/* 4 Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                  <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Power Range</div>
                    <div className="text-xs font-bold text-[#0B1F4D] mt-1">{currentModel.specs.power.split('(')[0]}</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Max Pressure</div>
                    <div className="text-xs font-bold text-[#0B1F4D] mt-1">{currentModel.specs.pressure.split('(')[0]}</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Discharge Flow</div>
                    <div className="text-xs font-bold text-[#0B1F4D] mt-1">{currentModel.specs.airflow.split('(')[0]}</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Air Vessel</div>
                    <div className="text-xs font-bold text-[#0B1F4D] mt-1">{currentModel.specs.tank.split(' ')[0]}</div>
                  </div>
                </div>

                {/* Additional Highlights */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span><strong>Lubrication:</strong> {currentModel.specs.lubrication}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span><strong>Drive Type:</strong> {currentModel.specs.drive}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Model Comparison Table */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B1F4D] mb-4">
                Standard {currentModel.title} Models & Technical Data
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200">
                  <thead className="bg-[#0B1F4D] text-white uppercase text-[11px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Model Code</th>
                      <th className="py-3 px-4">Motor Power</th>
                      <th className="py-3 px-4">Stages</th>
                      <th className="py-3 px-4">FAD Airflow</th>
                      <th className="py-3 px-4">Max Pressure</th>
                      <th className="py-3 px-4">Tank Capacity</th>
                      <th className="py-3 px-4">Electrical Supply</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    {currentModel.tableData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition">
                        <td className="py-3 px-4 font-bold text-[#0B1F4D]">{row.model}</td>
                        <td className="py-3 px-4">{row.hp}</td>
                        <td className="py-3 px-4">{row.stage}</td>
                        <td className="py-3 px-4 font-semibold text-emerald-700">{row.cfm}</td>
                        <td className="py-3 px-4">{row.bar}</td>
                        <td className="py-3 px-4">{row.tank}</td>
                        <td className="py-3 px-4 text-slate-500">{row.drive}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Industrial Trust Badges */}
          <div className="mt-14 bg-white rounded-lg border border-slate-200 p-8 grid sm:grid-cols-3 gap-6 shadow-sm">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-[#D4A017] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Heavy Cast Iron Crankcase</h4>
                <p className="text-xs text-slate-500 mt-1">High-tensile Grade 25 cast iron construction engineered for vibration-free 24/7 continuous duty.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Certified Pressure Vessels</h4>
                <p className="text-xs text-slate-500 mt-1">Manufactured strictly as per IS:2825 pressure safety codes with calibrated safety valves and drain cocks.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package className="h-6 w-6 text-[#123D8D] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold uppercase text-[#0B1F4D]">Complete Spares Availability</h4>
                <p className="text-xs text-slate-500 mt-1">Piston rings, valve plates, gaskets, connecting rods, and oil sumps readily stocked in Delhi NCR.</p>
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
