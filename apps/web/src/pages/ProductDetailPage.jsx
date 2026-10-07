import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  Package,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Wind,
  Droplet,
  ChevronDown,
  ChevronUp,
  TableProperties,
  Gauge
} from 'lucide-react';

import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import productsData from '@/data/products.json';

/* ---------------------------------------------------------
   FORMAT PRODUCT DESCRIPTION
   --------------------------------------------------------- */

function formatDescription(description) {
  if (!description) return [];

  let text = String(description)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim();

  text = text.replace(/^#{1,6}\s*/gm, '');

  const sectionNames = [
    'Product Overview',
    'Key Features',
    'Applications',
    'Technical Specifications',
    'Compatibility',
    'Why Choose Nimbus Equipments',
  ];

  sectionNames.forEach((section) => {
    const escaped = section.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    text = text.replace(
      new RegExp(`\\s*\\*{0,2}\\s*${escaped}\\s*\\*{0,2}\\s*`, 'gi'),
      `\n\n${section}\n`
    );
  });

  text = text
    .replace(/\s+\*\s+/g, '\n* ')
    .replace(/\s+-\s+/g, '\n- ')
    .replace(/\s+•\s+/g, '\n• ');

  text = text.replace(/\*\*/g, '');
  text = text.replace(/\n{3,}/g, '\n\n').trim();

  const lines = text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const sections = [];
  let currentSection = null;

  const isSectionHeading = (line) =>
    sectionNames.some(
      (section) => section.toLowerCase() === line.toLowerCase()
    );

  lines.forEach((line) => {
    if (isSectionHeading(line)) {
      currentSection = {
        title: sectionNames.find(
          (section) => section.toLowerCase() === line.toLowerCase()
        ),
        content: [],
        bullets: [],
      };

      sections.push(currentSection);
      return;
    }

    if (!currentSection) {
      currentSection = {
        title: 'Product Overview',
        content: [],
        bullets: [],
      };

      sections.push(currentSection);
    }

    if (
      line.startsWith('* ') ||
      line.startsWith('- ') ||
      line.startsWith('• ')
    ) {
      currentSection.bullets.push(
        line.replace(/^[-*•]\s*/, '').trim()
      );
    } else {
      currentSection.content.push(line);
    }
  });

  return sections;
}

/* ---------------------------------------------------------
   HELPER: PARSE SPECIFICATIONS TO TABLE
   --------------------------------------------------------- */
function parseSpecsToTable(bullets) {
  return bullets
    .map((b) => {
      if (!b.includes('|')) return null;
      const [modelPart, ...specParts] = b.split('|').map((s) => s.trim());
      const model = modelPart.includes(':') ? modelPart.split(':')[0].trim() : modelPart;
      const hp = modelPart.includes(':') ? modelPart.split(':')[1].trim() : '-';

      const specsObj = { model, hp };
      specParts.forEach((part) => {
        const lower = part.toLowerCase();
        if (lower.startsWith('fad:')) specsObj.fad = part.replace(/^fad:\s*/i, '');
        else if (lower.startsWith('working pressure:') || lower.startsWith('pressure:')) {
          specsObj.pressure = part.replace(/^(working pressure|pressure):\s*/i, '');
        } else if (lower.startsWith('receiver:') || lower.startsWith('tank:')) {
          specsObj.tank = part.replace(/^(receiver|tank):\s*/i, '');
        } else if (lower.startsWith('speed:') || lower.startsWith('rpm:')) {
          specsObj.speed = part.replace(/^(speed|rpm):\s*/i, '');
        }
      });
      return specsObj;
    })
    .filter(Boolean);
}

/* ---------------------------------------------------------
   PRODUCT DETAIL PAGE COMPONENT
   --------------------------------------------------------- */

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isTableOpen, setIsTableOpen] = useState(true);

  const product = (productsData || []).find((p) => String(p.id) === String(id));

  const getCategoryFallback = () => {
    const cat = (product?.category || '').toUpperCase();
    if (cat.includes('RECIPROCATING') || cat.includes('EQUIPMENT')) {
      return { path: '/products/reciprocating-compressors', label: 'Back to Reciprocating Compressors' };
    }
    if (cat.includes('ACCESSORIES')) {
      return { path: '/accessories', label: 'Back to Accessories' };
    }
    if (cat.includes('PIPING')) {
      return { path: '/piping-solutions', label: 'Back to Piping Solutions' };
    }
    if (
      cat.includes('MAINTENANCE') ||
      cat.includes('AMC') ||
      cat.includes('INSTALLATION') ||
      cat.includes('REPAIR')
    ) {
      return { path: '/services', label: 'Back to Services' };
    }
    return { path: '/parts', label: 'Back to Parts & Consumables' };
  };

  const handleBackNavigation = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(getCategoryFallback().path);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <SiteHeader />
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
          <Package className="mb-4 h-14 w-14 text-gray-400" />
          <h1 className="text-2xl font-bold text-[#0B1F4D]">Product Not Found</h1>
          <p className="mt-2 text-gray-600">The product you are looking for is unavailable.</p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0B1F4D] px-6 py-3 font-semibold text-white transition hover:bg-[#162d62]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const whatsappNumber = '919289425600';
  const whatsappMessage = encodeURIComponent(
    `Hello Nimbus Equipments, I am interested in this product:\n\n${product.name}\n\nPlease share price, availability and details.`
  );

  const descriptionSections = formatDescription(product.description);
  const fallbackInfo = getCategoryFallback();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{product.name} | Nimbus Equipments</title>
        <meta
          name="description"
          content={`${product.name} from Nimbus Equipments. Contact us for price, availability and compressor compatibility.`}
        />
      </Helmet>

      <SiteHeader />

      {/* Smart Back Navigation */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-5 py-4">
          <button
            type="button"
            onClick={handleBackNavigation}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0B1F4D] transition hover:text-[#D4A017] cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            {fallbackInfo.label}
          </button>
        </div>
      </div>

      {/* Product Main Container */}
      <main className="mx-auto max-w-[90rem] px-5 py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          
          {/* Main Product Image */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <div className="flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-[#F7F8FA] p-6 shadow-sm sm:min-h-[480px] sm:p-10">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="max-h-[500px] w-full object-contain transition duration-200 hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <Package className="h-24 w-24" />
                  <p className="mt-3 text-sm">Product Image</p>
                </div>
              )}
            </div>
          </div>

          {/* Product Meta & Details */}
          <div>
            {product.category && (
              <div className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#D4A017]">
                {product.category}
              </div>
            )}

            <h1 className="font-display text-3xl font-bold uppercase leading-tight text-[#0B1F4D] sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            {product.brand && (
              <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                <span>Brand:</span>
                <span className="font-semibold text-[#0B1F4D]">{product.brand}</span>
              </div>
            )}

            <div className="mt-2 text-sm text-gray-600">
              Part Number:{' '}
              <span className="font-semibold text-[#0B1F4D]">{product.part_number || '-'}</span>
            </div>

            {(product.stock_status || product.delivery_time) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {product.stock_status && (
                  <div className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
                    {product.stock_status}
                  </div>
                )}
                {product.delivery_time && (
                  <div className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-600">
                    Delivery: {product.delivery_time}
                  </div>
                )}
              </div>
            )}

            {/* Description Sections */}
            {descriptionSections.length > 0 && (
              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="mb-6">
                  <div className="mb-3 h-1 w-12 bg-[#D4A017]" />
                  <h2 className="font-display text-2xl font-bold uppercase text-[#0B1F4D]">
                    Product Description
                  </h2>
                </div>

                <div className="space-y-7">
                  {descriptionSections.map((section, index) => {
                    const isKeyFeatures = section.title === 'Key Features';
                    const isTechnicalSpecs = section.title === 'Technical Specifications';
                    const tableRows = isTechnicalSpecs ? parseSpecsToTable(section.bullets) : [];

                    return (
                      <section
                        key={`${section.title}-${index}`}
                        className="rounded-xl border border-gray-100 bg-white shadow-xs"
                      >
                        {/* Section Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">
                          <h3 className="font-display text-base font-bold uppercase tracking-wide text-[#0B1F4D]">
                            {section.title}
                          </h3>

                          {isTechnicalSpecs && tableRows.length > 0 && (
                            <button
                              type="button"
                              onClick={() => setIsTableOpen(!isTableOpen)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1F4D] hover:text-[#D4A017] transition cursor-pointer"
                            >
                              <TableProperties className="h-4 w-4 text-[#D4A017]" />
                              {isTableOpen ? (
                                <><span>Hide Table</span> <ChevronUp className="h-4 w-4" /></>
                              ) : (
                                <><span>View Table</span> <ChevronDown className="h-4 w-4" /></>
                              )}
                            </button>
                          )}
                        </div>

                        {/* Section Body */}
                        <div className="px-5 py-5 sm:px-6">
                          
                          {/* Standard Intro Paragraph */}
                          {section.content.length > 0 && (
                            <div className="space-y-3">
                              {section.content.map((paragraph, paragraphIndex) => (
                                <p
                                  key={paragraphIndex}
                                  className="text-sm leading-7 text-gray-600 sm:text-base"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}

                          {/* 1. KEY FEATURES (MODERN 2.5D METRIC CARDS WITH INDUSTRIAL BADGES) */}
                          {isKeyFeatures && section.bullets.length > 0 && (
                            <div className="grid gap-3.5 sm:grid-cols-2 mt-2">
                              {section.bullets.map((bullet, bIdx) => {
                                const parts = bullet.split(':');
                                const title = parts[0];
                                const desc = parts.slice(1).join(':');

                                // Contextual icon & badge styling
                                const lower = title.toLowerCase();
                                let IconComponent = Cpu;
                                let badgeBg = 'bg-amber-50 text-amber-700 border-amber-200';
                                let iconColor = 'text-[#D4A017]';
                                let tagText = 'ENGINEERED';

                                if (lower.includes('motor') || lower.includes('copper')) {
                                  IconComponent = Zap;
                                  badgeBg = 'bg-amber-100 text-amber-900 border-amber-300';
                                  iconColor = 'text-amber-600';
                                  tagText = '100% COPPER';
                                } else if (lower.includes('cylinder') || lower.includes('cast iron')) {
                                  IconComponent = ShieldCheck;
                                  badgeBg = 'bg-blue-50 text-blue-800 border-blue-200';
                                  iconColor = 'text-blue-600';
                                  tagText = 'CAST IRON';
                                } else if (lower.includes('cool') || lower.includes('fin')) {
                                  IconComponent = Wind;
                                  badgeBg = 'bg-sky-50 text-sky-800 border-sky-200';
                                  iconColor = 'text-sky-600';
                                  tagText = 'AIR COOLED';
                                } else if (lower.includes('lubricat') || lower.includes('oil')) {
                                  IconComponent = Droplet;
                                  badgeBg = 'bg-emerald-50 text-emerald-800 border-emerald-200';
                                  iconColor = 'text-emerald-600';
                                  tagText = 'LUBRICATED';
                                } else if (lower.includes('rpm') || lower.includes('speed') || lower.includes('belt')) {
                                  IconComponent = Gauge;
                                  badgeBg = 'bg-slate-100 text-slate-800 border-slate-300';
                                  iconColor = 'text-slate-700';
                                  tagText = 'LOW RPM';
                                }

                                return (
                                  <div
                                    key={bIdx}
                                    className="group relative rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition-all duration-200 hover:border-[#D4A017] hover:bg-white hover:shadow-sm flex flex-col justify-between"
                                  >
                                    <div>
                                      <div className="flex items-center justify-between gap-2 mb-2">
                                        <div className="flex items-center gap-2.5">
                                          <div className="rounded-lg bg-white p-2 border border-slate-200/80 shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                                            <IconComponent className={`h-4 w-4 ${iconColor}`} />
                                          </div>
                                          <h4 className="text-xs font-bold uppercase tracking-wide text-[#0B1F4D]">
                                            {title}
                                          </h4>
                                        </div>
                                        <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded border tracking-wider shrink-0 ${badgeBg}`}>
                                          {tagText}
                                        </span>
                                      </div>

                                      {desc && (
                                        <p className="mt-2 text-xs leading-relaxed text-slate-600">
                                          {desc.trim()}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* 2. TECHNICAL SPECIFICATIONS (RESPONSIVE COMPARISON TABLE) */}
                          {isTechnicalSpecs && (
                            tableRows.length > 0 ? (
                              isTableOpen && (
                                <div className="mt-2 overflow-x-auto rounded-lg border border-slate-200">
                                  <table className="w-full text-left text-xs">
                                    <thead className="bg-[#0B1F4D] text-white uppercase text-[11px] tracking-wider">
                                      <tr>
                                        <th className="py-3 px-3.5">Model</th>
                                        <th className="py-3 px-3.5">Power</th>
                                        <th className="py-3 px-3.5">Flow (FAD)</th>
                                        <th className="py-3 px-3.5">Working Pressure</th>
                                        <th className="py-3 px-3.5">Receiver</th>
                                        <th className="py-3 px-3.5">Speed</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                                      {tableRows.map((row, rIdx) => (
                                        <tr key={rIdx} className="hover:bg-slate-50 transition">
                                          <td className="py-3 px-3.5 font-bold text-[#0B1F4D]">{row.model}</td>
                                          <td className="py-3 px-3.5 font-medium">{row.hp}</td>
                                          <td className="py-3 px-3.5 font-bold text-emerald-700">{row.fad || '-'}</td>
                                          <td className="py-3 px-3.5">{row.pressure || '-'}</td>
                                          <td className="py-3 px-3.5">{row.tank || '-'}</td>
                                          <td className="py-3 px-3.5 text-slate-500">{row.speed || '-'}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              )
                            ) : (
                              <ul className="space-y-3">
                                {section.bullets.map((bullet, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-600">
                                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#D4A017]" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            )
                          )}

                          {/* 3. APPLICATIONS & OTHER SECTIONS */}
                          {!isKeyFeatures && !isTechnicalSpecs && section.bullets.length > 0 && (
                            <ul className={section.content.length > 0 ? 'mt-4 space-y-3' : 'space-y-3'}>
                              {section.bullets.map((bullet, bulletIndex) => (
                                <li
                                  key={bulletIndex}
                                  className="flex items-start gap-3 text-sm leading-6 text-gray-600 sm:text-base"
                                >
                                  <CheckCircle2
                                    className="mt-1 h-4 w-4 shrink-0 text-[#D4A017]"
                                    strokeWidth={2}
                                  />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                        </div>
                      </section>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Enquiry Box */}
            <div className="mt-10 rounded-2xl border border-[#D4A017]/30 bg-[#F8F9FB] p-6 sm:p-7">
              <div className="mb-5">
                <div className="mb-3 h-1 w-12 bg-[#D4A017]" />
                <h2 className="font-display text-xl font-bold uppercase text-[#0B1F4D]">
                  Need Price & Availability?
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Contact Nimbus Equipments for current price, stock availability and compressor compatibility.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Enquiry
                </a>

                <a
                  href="tel:+919289425600"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B1F4D] px-6 py-3 font-semibold text-white transition hover:bg-[#162d62]"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
