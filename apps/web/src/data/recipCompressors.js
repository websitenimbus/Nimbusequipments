export const RECIP_COMPRESSORS = [
  {
    id: 'single-stage',
    title: 'Single Stage Air Compressor',
    powerRange: '1.0 HP – 3.0 HP (0.75 – 2.2 kW)',
    workingPressure: 'Up to 8.5 Bar (115 – 125 PSI)',
    image: '/products/recip-single-stage.jpg',
    catalogUrl: '/catalogs/reciprocating-compressors.pdf',
    description: 'Designed for automotive care, surface finishing, and light workshop pneumatic utilities with low-RPM quiet operation.',
    features: [
      'Heavy-Duty Cast Iron Cylinder Block for superior heat dissipation',
      'Low-RPM Belt-Driven Design for lower vibration and thermal stability',
      'Efficient Splash Lubrication for continuous oil distribution',
      '100% Copper-Wound Electric Motor with high starting torque',
      'Deep-Finned Air-Cooled System for rapid heat removal'
    ],
    applications: [
      'Automotive Care (2-wheeler & car repair garages, tyre inflation)',
      'Woodworking & Furniture (pneumatic nailers, pinners, staplers)',
      'Surface Finishing (spray painting, wood polishing, light lacquer)',
      'Workshop Utility (air blow guns, parts cleaning, assembly)'
    ],
    models: [
      { model: 'NRS-01', motorPower: '1.0 HP / 0.75 kW', fad: '3.5 CFM', pressure: '8 Bar (115 PSI)', tank: '45 Ltr', rpm: '900 RPM' },
      { model: 'NRS-02', motorPower: '2.0 HP / 1.5 kW', fad: '7.0 CFM', pressure: '8 Bar (115 PSI)', tank: '100 Ltr', rpm: '850 RPM' },
      { model: 'NRS-03', motorPower: '3.0 HP / 2.2 kW', fad: '10.0 CFM', pressure: '8.5 Bar (125 PSI)', tank: '160 Ltr', rpm: '850 RPM' }
    ]
  },
  {
    id: 'two-stage',
    title: 'Two-Stage Industrial Air Compressor',
    powerRange: '3.0 HP – 15.0 HP (2.2 – 11.0 kW)',
    workingPressure: 'Up to 12 Bar (175 PSI)',
    image: '/products/recip-two-stage.jpg',
    catalogUrl: '/catalogs/reciprocating-compressors.pdf',
    description: 'Heavy-duty 12 Bar continuous industrial workhorse for fabrication, tyre retreading plants, and production machinery.',
    features: [
      'Graded Cast Iron Construction with deep-finned crankcase',
      'Low-RPM Belt-Driven Engineering (700 – 850 RPM) for minimal wear',
      '100% Copper-Wound Industrial Motor (1440 RPM 4-Pole)',
      'High-Efficiency Inter-Cooler & Deep-Fin Cooling tubes',
      'Precision-Balanced Crankshaft with heavy-duty anti-friction bearings',
      'Stainless Steel Reed Valve Plates for leak-free long life',
      'Comprehensive safety relief valves and unloader pressure switch'
    ],
    applications: [
      'Automotive & Workshops (commercial fleet stations, retreading)',
      'General Engineering & Fabrication (sandblasting, plasma/laser assist)',
      'Manufacturing Facilities (textile looms, printing, CNC clamping)',
      'Process Units (plastic processing, rubber moulding)'
    ],
    models: [
      { model: 'NRT-03', motorPower: '3.0 HP / 2.2 kW', fad: '9 CFM', pressure: '12 Bar (175 PSI)', tank: '160 / 220 Ltr', rpm: '850 RPM' },
      { model: 'NRT-05', motorPower: '5.0 HP / 3.7 kW', fad: '16 CFM', pressure: '12 Bar (175 PSI)', tank: '220 / 250 Ltr', rpm: '850 RPM' },
      { model: 'NRT-07', motorPower: '7.5 HP / 5.5 kW', fad: '24 CFM', pressure: '12 Bar (175 PSI)', tank: '250 / 300 Ltr', rpm: '750 RPM' },
      { model: 'NRT-10', motorPower: '10.0 HP / 7.5 kW', fad: '35 CFM', pressure: '12 Bar (175 PSI)', tank: '300 / 500 Ltr', rpm: '720 RPM' },
      { model: 'NRT-15', motorPower: '15.0 HP / 11.0 kW', fad: '52 CFM', pressure: '12 Bar (175 PSI)', tank: '500 Ltr', rpm: '700 RPM' }
    ]
  },
  {
    id: 'high-pressure',
    title: 'Multi-Stage High Pressure Air Compressor',
    powerRange: '10.0 HP – 40.0 HP (7.5 – 30.0 kW)',
    workingPressure: '30 Bar – 40 Bar (435 – 580 PSI)',
    image: '/products/recip-high-pressure.jpg',
    catalogUrl: '/catalogs/reciprocating-compressors.pdf',
    description: 'Specialized multi-stage compression engineered for PET blow moulding, hydro/pneumatic testing, and defense applications.',
    features: [
      'Multi-Stage Compression delivering sustained peak pressure up to 40 Bar',
      'High-Tensile Cast Iron Crankcase and reinforced cylinder heads',
      'Individual Finned Inter-Coolers on every compression stage',
      'Ultra-Low Operating Speed (680 – 850 RPM) for minimal oil carryover',
      'High-Grade Stainless Steel Disc Valves for extreme pressure cycles',
      'Independent pressure relief valves for stage protection'
    ],
    applications: [
      'PET Blow Moulding (bottle manufacturing plants)',
      'Hydro & Pneumatic Testing (valves, pipes, cylinders, boilers)',
      'Defense & Marine Operations (engine starting, breathing air)'
    ],
    models: [
      { model: 'NHP-100', motorPower: '10.0 HP / 7.5 kW', fad: '25 CFM', pressure: '30 Bar (435 PSI)', tank: '300 / 500 Ltr', rpm: '850 RPM' },
      { model: 'NHP-150', motorPower: '15.0 HP / 11.0 kW', fad: '38 CFM', pressure: '30 Bar (435 PSI)', tank: '500 / Base Mounted', rpm: '850 RPM' },
      { model: 'NHP-200', motorPower: '20.0 HP / 15.0 kW', fad: '52 CFM', pressure: '40 Bar (580 PSI)', tank: 'Base Mounted (Separate Tank)', rpm: '750 RPM' },
      { model: 'NHP-250', motorPower: '25.0 HP / 18.5 kW', fad: '70 CFM', pressure: '40 Bar (580 PSI)', tank: 'Base Mounted (Separate Tank)', rpm: '720 RPM' },
      { model: 'NHP-300', motorPower: '30.0 HP / 22.0 kW', fad: '85 CFM', pressure: '40 Bar (580 PSI)', tank: 'Base Mounted (Separate Tank)', rpm: '700 RPM' },
      { model: 'NHP-400', motorPower: '40.0 HP / 30.0 kW', fad: '115 CFM', pressure: '40 Bar (580 PSI)', tank: 'Base Mounted (Separate Tank)', rpm: '700 RPM' }
    ]
  }
];
