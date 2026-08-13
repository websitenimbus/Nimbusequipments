import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Loader2,
  ArrowLeft,
  MessageCircle,
  Phone,
  Package,
  CheckCircle2,
} from 'lucide-react';

import { supabase } from '@/lib/supabaseClient';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';

/* ---------------------------------------------------------
   FORMAT PRODUCT DESCRIPTION
   --------------------------------------------------------- */

function formatDescription(description) {
  if (!description) return [];

  let text = String(description)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim();

  /*
   * Remove markdown heading symbols such as:
   * ## Safety Relief Valves
   */
  text = text.replace(/^#{1,6}\s*/gm, '');

  /*
   * Make our known section headings appear on their
   * own lines, even when Supabase has stored everything
   * together.
   */
  const sectionNames = [
    'Product Overview',
    'Key Features',
    'Applications',
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

  /*
   * Convert markdown bullet markers into separate lines.
   * Handles:
   * * item
   * - item
   * • item
   */
  text = text
    .replace(/\s+\*\s+/g, '\n* ')
    .replace(/\s+-\s+/g, '\n- ')
    .replace(/\s+•\s+/g, '\n• ');

  /*
   * Remove remaining markdown bold markers.
   */
  text = text.replace(/\*\*/g, '');

  /*
   * Clean excessive blank lines.
   */
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

    /*
     * If there is text before the first recognized heading,
     * keep it as a general section.
     */
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
   PRODUCT DETAIL PAGE
   --------------------------------------------------------- */

export default function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      const { data, error } = await supabase
        .from('Products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('PRODUCT ERROR:', error);
        setProduct(null);
      } else {
        console.log('PRODUCT:', data);
        setProduct(data);
      }

      setLoading(false);
    };

    loadProduct();
  }, [id]);

  /* -------------------------------------------------------
     LOADING
     ------------------------------------------------------- */

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <SiteHeader />

        <div className="flex min-h-[60vh] items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-[#D4A017]" />
        </div>

        <SiteFooter />
      </div>
    );
  }

  /* -------------------------------------------------------
     PRODUCT NOT FOUND
     ------------------------------------------------------- */

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <SiteHeader />

        <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
          <Package className="mb-4 h-14 w-14 text-gray-400" />

          <h1 className="text-2xl font-bold text-[#0B1F4D]">
            Product Not Found
          </h1>

          <p className="mt-2 text-gray-600">
            The product you are looking for is unavailable.
          </p>

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

  /* -------------------------------------------------------
     WHATSAPP
     ------------------------------------------------------- */

  const whatsappNumber = '919289425600';

  const whatsappMessage = encodeURIComponent(
    `Hello Nimbus Equipments, I am interested in this product:\n\n${product.name}\n\nPlease share price, availability and details.`
  );

  /* -------------------------------------------------------
     DESCRIPTION SECTIONS
     ------------------------------------------------------- */

  const descriptionSections = formatDescription(product.description);

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

      {/* ---------------------------------------------------
          BREADCRUMB
      --------------------------------------------------- */}

      <div className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-5 py-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0B1F4D] transition hover:text-[#D4A017]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* ---------------------------------------------------
          PRODUCT MAIN AREA
      --------------------------------------------------- */}

      <main className="mx-auto max-w-[90rem] px-5 py-10 sm:py-14">

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

          {/* ------------------------------------------------
              PRODUCT IMAGE
          ------------------------------------------------ */}

          <div className="lg:sticky lg:top-6 lg:self-start">
            <div className="flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-[#F7F8FA] p-6 shadow-sm sm:min-h-[480px] sm:p-10">

              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="max-h-[500px] w-full object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <Package className="h-24 w-24" />

                  <p className="mt-3 text-sm">
                    Product Image
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* ------------------------------------------------
              PRODUCT INFORMATION
          ------------------------------------------------ */}

          <div>

            {/* Category */}

            {product.category && (
              <div className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#D4A017]">
                {product.category}
              </div>
            )}

            {/* Product Name */}

            <h1 className="font-display text-3xl font-bold uppercase leading-tight text-[#0B1F4D] sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            {/* Brand */}

            {product.brand && (
              <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                <span>Brand:</span>

                <span className="font-semibold text-[#0B1F4D]">
                  {product.brand}
                </span>
              </div>
            )}

            {/* Part Number */}

            <div className="mt-2 text-sm text-gray-600">
              Part Number:{' '}
              <span className="font-semibold text-[#0B1F4D]">
                {product.part_number || '-'}
              </span>
            </div>

            {/* Stock / Delivery */}

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

            {/* ------------------------------------------------
                DESCRIPTION
            ------------------------------------------------ */}

            {descriptionSections.length > 0 && (
              <div className="mt-8 border-t border-gray-200 pt-8">

                <div className="mb-6">
                  <div className="mb-3 h-1 w-12 bg-[#D4A017]" />

                  <h2 className="font-display text-2xl font-bold uppercase text-[#0B1F4D]">
                    Product Description
                  </h2>
                </div>

                <div className="space-y-7">

                  {descriptionSections.map((section, index) => (
                    <section
                      key={`${section.title}-${index}`}
                      className="rounded-xl border border-gray-100 bg-white"
                    >

                      {/* Section Heading */}

                      <div className="border-b border-gray-100 px-5 py-4 sm:px-6">
                        <h3 className="font-display text-base font-bold uppercase tracking-wide text-[#0B1F4D]">
                          {section.title}
                        </h3>
                      </div>

                      {/* Section Content */}

                      <div className="px-5 py-5 sm:px-6">

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

                        {/* Bullet Points */}

                        {section.bullets.length > 0 && (
                          <ul
                            className={
                              section.content.length > 0
                                ? 'mt-4 space-y-3'
                                : 'space-y-3'
                            }
                          >
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
                  ))}

                </div>
              </div>
            )}

            {/* ------------------------------------------------
                ENQUIRY BOX
            ------------------------------------------------ */}

            <div className="mt-10 rounded-2xl border border-[#D4A017]/30 bg-[#F8F9FB] p-6 sm:p-7">

              <div className="mb-5">
                <div className="mb-3 h-1 w-12 bg-[#D4A017]" />

                <h2 className="font-display text-xl font-bold uppercase text-[#0B1F4D]">
                  Need Price & Availability?
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Contact Nimbus Equipments for current price,
                  stock availability and compressor compatibility.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                {/* WhatsApp */}

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" />

                  WhatsApp Enquiry
                </a>

                {/* Phone */}

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
