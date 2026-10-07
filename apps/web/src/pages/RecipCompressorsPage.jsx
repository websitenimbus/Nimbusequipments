import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Package, ShieldCheck, Download, ArrowUpRight, 
  CheckCircle2, ChevronDown, ChevronUp, FileText, Check, Cpu, Info
} from 'lucide-react';

import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import RfqForm from '@/components/RfqForm';

// Exact catalog path from public/catalogs/
const CATALOG_PDF_URL = '/catalogs/reciprocating-compressors.pdf';

const COMPRESSOR_MODELS = [
  {
    id: 'single-stage',
    tabLabel: 'SINGLE STAGE COMPRESSORS',
    badge: 'Light Industrial & Workshop Utility Range',
    title: 'Single Stage Air Compressor',
    powerRange: '1 HP – 3 HP',
    workingPressure: 'Up to 8.5 Bar (115 – 125 PSI)',
    designNote: 'Heavy-duty cast iron single stage reciprocating technology for workshops and garage utilities.',
    image: '/products/recip-single-stage.png',
    catalogUrl: CATALOG_PDF_URL,
    specsBadges: {
      power: '1.0 – 3.0 HP (0.75 – 2.2 kW)',
      pressure: '8.0 – 8.5 Bar (115 – 125 PSI)',
      airflow: '3.5 – 10 CFM (FAD)',
      tank: '45L – 160L Receivers',
      speed: '850 – 900 RPM',
      drive: 'Belt-Driven Low-RPM'
    },
    tableData: [
      { model: 'NRS-01', hp: '1.0 HP / 0.75 kW', cfm: '3.5', pressure: '8 Bar (115 PSI)', tank: '45 Ltr', rpm: '900 RPM' },
      { model: 'NRS-02', hp: '2.0 HP / 1.5 kW', cfm: '7', pressure: '8 Bar (115 PSI)', tank: '100 Ltr', rpm: '850 RPM' },
      { model: 'NRS-03', hp: '3.0 HP / 2.2 kW', cfm: '10', pressure: '8.5 Bar (125 PSI)', tank: '160 Ltr', rpm: '850 RPM' }
    ],
    keyFeatures: [
      'Heavy-Duty Cast Iron Cylinder Block: Superior wear resistance, efficient heat dissipation, and extended pump life.',
      'Low-RPM Belt-Driven Design: Smooth, balanced operation with reduced thermal stress and lower vibration.',
      'Efficient Splash Lubrication: Continuous, reliable oil distribution to crankshaft and bearings for reduced friction.',
      '100% Copper-Wound Electric Motor: High starting torque, continuous thermal endurance, and low power loss.',
      'Deep-Finned Air-Cooled System: Multi-fin cylinder and fly-wheel fan design for fast heat removal and cooler discharge air.'
    ],
    applications: [
      'Automotive Care: Two-wheeler service centers, car repair garages, and tyre inflation bays.',
      'Woodworking & Furniture: Operation of pneumatic nailers, pinners, staplers, and finishing tools.',
      'Surface Finishing: Touch-up spray painting, wood polishing, and light lacquer coating.',
      'Workshop Utility: Air blow guns, pneumatic screwdrivers, parts cleaning, and light assembly lines.'
    ],
    disclaimer: 'Due to continuous product development, specifications, dimensions, and weights are subject to change without prior notice.'
  },
  {
    id: 'two-stage',
    tabLabel: 'TWO-STAGE INDUSTRIAL COMPRESSORS',
    badge: 'Continuous Duty Manufacturing Range',
    title: 'Two-Stage Air Compressors',
    powerRange: '3 HP – 15 HP',
    workingPressure: 'Up to 12 Bar (175 PSI)',
    designNote: 'Engineered for continuous industrial duty, high compression efficiency with intercooler pipes and heavy cast iron crankshaft.',
    image: '/products/recip-two-stage.png',
    catalogUrl: CATALOG_PDF_URL,
    specsBadges: {
      power: '3.0 – 15.0 HP (2.2 – 11.0 kW)',
      pressure: 'Up to 12 Bar (175 PSI)',
      airflow: '9 – 52 CFM (FAD)',
      tank: '160L – 500L Receivers',
      speed: '700 – 850 RPM',
      drive: 'Dual Belt Heavy Duty'
    },
    tableData: [
      { model: 'NRT-03', hp: '3.0 HP / 2.2 kW', cfm: '9', pressure: '12 Bar (175 PSI)', tank: '160 / 220 Ltr', rpm: '850 RPM' },
      { model: 'NRT-05', hp: '5.0 HP / 3.7 kW', cfm: '16', pressure: '12 Bar (175 PSI)', tank: '220 / 250 Ltr', rpm: '850 RPM' },
      { model: 'NRT-07', hp: '7.5 HP / 5.5 kW', cfm: '24', pressure: '12 Bar (175 PSI)', tank: '250 / 300 Ltr', rpm: '750 RPM' },
      { model: 'NRT-10', hp: '10.0 HP / 7.5 kW', cfm: '35', pressure: '12 Bar (175 PSI)', tank: '300 / 500 Ltr', rpm: '720 RPM' },
      { model: 'NRT-15', hp: '15.0 HP / 11.0 kW', cfm: '52', pressure: '12 Bar (175 PSI)', tank: '500 Ltr', rpm: '700 RPM' }
    ],
    keyFeatures: [
      'Graded Cast Iron Construction: Heavy-duty cylinder blocks and deep-finned crankcase provide maximum wear resistance, structural rigidity, and long service life.',
      'Low-RPM Belt-Driven Engineering: Conservatively rated pump speeds (700 – 900 RPM) drastically reduce friction, mechanical vibration, and thermal stress.',
      '100% Copper-Wound Industrial Motor: High-torque 4-pole (1440 RPM) motor designed for reliable starts, continuous thermal endurance, and lower power consumption.',
      'High-Efficiency Inter-Cooler & Deep-Fin Cooling: Aerodynamic flywheel fan combined with multi-stage finned cooling tubes ensures rapid heat dissipation and lower discharge temperatures.',
      'Precision-Balanced Crankshaft Assembly: Dynamically balanced crankshaft with heavy-duty anti-friction bearings minimizes vibration and protects internal moving parts under pressure.',
      'Advanced Splash Lubrication System: Continuous oil mist delivery to connecting rods, wrist pins, and bearings guarantees trouble-free continuous operation.',
      'Stainless Steel Reed Valve Plates: Precision ground, heat-treated valve design ensures high volumetric efficiency, smooth airflow, and extended leak-free life.',
      'Comprehensive Operational Safety: Equipped with certified pressure relief valves, an unloader pressure switch for smooth starting, and a fully enclosed steel belt guard.'
    ],
    applications: [
      'Automotive & Workshops: Heavy commercial vehicle service stations, tyre retreading plants, and hydraulic lift operations.',
      'General Engineering & Fabrication: Heavy pneumatic tooling, plasma/laser cutting assist, and sandblasting.',
      'Manufacturing Facilities: Packaging machines, textile looms, printing presses, and CNC machine pneumatic clamping.',
      'Process Units: Plastic processing, rubber moulding, and automated assembly fixtures.'
    ],
    disclaimer: 'Due to continuous product development, specifications, dimensions, and weights are subject to change without prior notice.'
  },
  {
    id: 'high-pressure',
    tabLabel: 'MULTI-STAGE HIGH PRESSURE',
    badge: 'PET Bottling & Heavy Engineering Duty',
    title: 'Multi-Stage High Pressure Air Compressor',
    powerRange: '10 HP – 40 HP',
    workingPressure: '30 Bar – 40 Bar (435 – 580 PSI)',
    designNote: 'Heavy casted multi-stage design engineered for PET blowing & high-pressure testing applications.',
    image: '/products/recip-high-pressure.png',
    catalogUrl: CATALOG_PDF_URL,
    specsBadges: {
      power: '10.0 – 40.0 HP (7.5 – 30.0 kW)',
      pressure: '30 – 40 Bar (435 – 580 PSI)',
      airflow: '25 – 115 CFM (FAD)',
      tank: '300L – 500L / Base Mounted',
      speed: '700 – 850 RPM',
      drive: 'Multi-Groove Pulley Drive'
    },
    noteBanner: 'High-pressure vertical air storage vessels 300L, 500L, 1000L available separately with hydrostatic test certificates.',
    tableData: [
      { model: 'NHP-100', hp: '10.0 HP / 7.5 kW', cfm: '25', pressure: '30 Bar (435 PSI)', tank: '300 / 500 Ltr', rpm: '850 RPM' },
      { model: 'NHP-150', hp: '15.0 HP / 11.0 kW', cfm: '38', pressure: '30 Bar (435 PSI)', tank: '500 / Base Mounted', rpm: '850 RPM' },
      { model: 'NHP-200', hp: '20.0 HP / 15.0 kW', cfm: '52', pressure: '40 Bar (580 PSI)', tank: 'Base Mounted (Separate Tank)', rpm: '750 RPM' },
      { model: 'NHP-250', hp: '25.0 HP / 18.5 kW', cfm: '70', pressure: '40 Bar (580 PSI)', tank: 'Base Mounted (Separate Tank)', rpm: '720 RPM' },
      { model: 'NHP-300', hp: '30.0 HP / 22.0 kW', cfm: '85', pressure: '40 Bar (580 PSI)', tank: 'Base Mounted (Separate Tank)', rpm: '700 RPM' },
      { model: 'NHP-400', hp: '40.0 HP / 30.0 kW', cfm: '115', pressure: '40 Bar (580 PSI)', tank: 'Base Mounted (Separate Tank)', rpm: '700 RPM' }
    ],
    keyFeatures: [
      'Multi-Stage Compression (Up to 40 Bar): Distributes high compression loads across multiple stages to minimize thermal stress and deliver sustained peak pressure for PET and testing applications.',
      'Heavy-Duty Cast Iron Construction: High-tensile cylinder block, reinforced heads, and rigid crankcase built to withstand continuous high-pressure duty without mechanical fatigue.',
      'Finned Inter-Coolers on Every Stage: High-efficiency copper cooling tubes between compression stages rapidly lower air temperature and improve volumetric efficiency.',
      'Ultra-Low Operating Speed (680 – 850 RPM): Slower pump speed significantly reduces cylinder wear, extends piston ring life, and minimizes oil carryover.',
      'High-Grade Stainless Steel Disc Valves: Precision-engineered, heat-treated valve discs designed for positive sealing and zero leakage under extreme pressure cycles.',
      'Independent Stage Safety Protection: Every compression stage is equipped with a dedicated pressure relief valve for fail-safe industrial operation.'
    ],
    applications: [
      'PET Blow Moulding: Specialized compressed air supply for PET bottle manufacturing plants.',
      'Hydro & Pneumatic Testing: High-pressure testing of valves, pipes, cylinders, and boilers.',
      'Defense & Marine Operations: High-pressure engine starting, breathing air cylinders, and specialized industrial test benches.'
    ],
    disclaimer: 'Due to continuous product development, specifications, dimensions, and weights are subject to change without prior notice.'
  }
];

export default function RecipCompressorsPage() {
  const [activeTab, setActiveTab] = useState(COMPRESSOR_MODELS[0].id);
  const [tableOpen, setTableOpen] = useState(true);

  const currentModel = COMPRESSOR_MODELS.find((m) => m.id === activeTab) || COMPRESSOR_MODELS[0];

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

      {/* Hero Header Section */}
      <section className="bg-[#0B1F4D] text-white py-14 border-b-4 border-[#D4A017]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-[#D4A017] uppercase tracking-widest mb-4">
              <Package className="h-3.5 w-3.5" />
              Heavy Machinery Division
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
              Reciprocating Air Compressors
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
              Precision-machined cast iron reciprocating compressors engineered for workshops, industrial manufacturing, and high-pressure PET blow moulding plants.
            </p>
          </div>

          {/* Model Switcher Tabs */}
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

      {/* Main Content Showcase */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Top Title & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-[#0B1F4D]">
                Technical Machine Showcase
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Engineering specifications, performance parameters and standard model comparison.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center gap-4">
              {/* Direct PDF Download Link */}
              <a 
                href={currentModel.catalogUrl}
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

          {/* Detailed Product Card */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Product Photo */}
              <div className="lg:col-span-5 bg-slate-50 rounded-lg p-6 flex items-center justify-center border border-slate-100 min-h-[300px]">
                <img 
                  src={currentModel.image} 
                  alt={currentModel.title} 
                  className="max-h-72 w-full object-contain rounded drop-shadow-md transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* Specs Highlights */}
              <div className="lg:col-span-7">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4A017]">
                  {currentModel.badge}
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold uppercase text-[#0B1F4D]">
                  {currentModel.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {currentModel.designNote}
                </p>

                {/* 4 Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                  <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Power Range</div>
                    <div className="text-xs font-bold text-[#0B1F4D] mt-1">{currentModel.powerRange}</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Working Pressure</div>
                    <div className="text-xs font-bold text-[#0B1F4D] mt-1">{currentModel.workingPressure}</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Discharge Flow</div>
                    <div className="text-xs font-bold text-[#0B1F4D] mt-1">{currentModel.specsBadges.airflow}</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded p-3 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Speed (RPM)</div>
                    <div className="text-xs font-bold text-[#0B1F4D] mt-1">{currentModel.specsBadges.speed}</div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span><strong>Receiver Tank:</strong> {currentModel.specsBadges.tank}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span><strong>Drive System:</strong> {currentModel.specsBadges.drive}</span>
                  </div>
                </div>
              </div>
            </div>

            {currentModel.noteBanner && (
              <div className="mt-8 p-4 bg-amber-50 border-l-4 border-[#D4A017] rounded-r text-xs text-amber-900 flex items-start gap-2.5">
                <Info className="h-4 w-4 text-[#D4A017] shrink-0 mt-0.5" />
                <span><strong>Note:</strong> {currentModel.noteBanner}</span>
              </div>
            )}

            {/* Key Features & Applications */}
            <div className="mt-10 pt-8 border-t border-slate-200 grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B1F4D] mb-4 flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[#D4A017]" /> Key Engineering Features
                </h4>
                <ul className="space-y-3">
                  {currentModel.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B1F4D] mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#D4A017]" /> Typical Applications
                </h4>
                <ul className="space-y-3">
                  {currentModel.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#D4A017] mt-1.5 shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setTableOpen(!tableOpen)}
                className="w-full flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-200 rounded transition text-left"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="h-4 w-4 text-[#0B1F4D]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F4D]">
                    {currentModel.title} — Technical Specifications & Models
                  </span>
                </div>
                {tableOpen ? <ChevronUp className="h-4 w-4 text-[#0B1F4D]" /> : <ChevronDown className="h-4 w-4 text-[#0B1F4D]" />}
              </button>

              {tableOpen && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-200">
                    <thead className="bg-[#0B1F4D] text-white uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Model</th>
                        <th className="py-3 px-4">Motor Power (HP / kW)</th>
                        <th className="py-3 px-4">FAD (CFM)</th>
                        <th className="py-3 px-4">Working Pressure</th>
                        <th className="py-3 px-4">Receiver Tank (Ltr)*</th>
                        <th className="py-3 px-4">Pump Speed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                      {currentModel.tableData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition">
                          <td className="py-3 px-4 font-bold text-[#0B1F4D]">{row.model}</td>
                          <td className="py-3 px-4 font-medium">{row.hp}</td>
                          <td className="py-3 px-4 font-bold text-emerald-700">{row.cfm} CFM</td>
                          <td className="py-3 px-4">{row.pressure}</td>
                          <td className="py-3 px-4">{row.tank}</td>
                          <td className="py-3 px-4 text-slate-600 font-medium">{row.rpm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                  <p className="mt-3 text-[11px] text-slate-500 italic">
                    *{currentModel.disclaimer}
                  </p>
                </div>
              )}
            </div>
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

          {/* Lead Quote Form */}
          <div id="rfq-section" className="mt-16 max-w-3xl mx-auto scroll-mt-24">
            <RfqForm title="Request Reciprocating Compressor Quote & Sizing" />
          </div>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
