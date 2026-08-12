import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Loader2, ArrowLeft, MessageCircle, Phone, Package } from 'lucide-react';

import { supabase } from '@/lib/supabaseClient';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';

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
        setProduct(data);
      }

      setLoading(false);
    };

    loadProduct();
  }, [id]);

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
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0B1F4D] px-6 py-3 font-semibold text-white hover:bg-[#162d62]"
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

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          {product.name} | Nimbus Equipments
        </title>

        <meta
          name="description"
          content={`${product.name} from Nimbus Equipments. Contact us for price, availability and compressor compatibility.`}
        />
      </Helmet>

      <SiteHeader />

      {/* Breadcrumb */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-[90rem] px-5 py-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0B1F4D] hover:text-[#D4A017]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <main className="mx-auto max-w-[90rem] px-5 py-12">
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Product Image */}
          <div className="flex min-h-[420px] items-center justify-center rounded-2xl border bg-gray-50 p-8">

            {product.image_url ? (
              <img
                src={product.image_url}
                alt={product.name}
                className="max-h-[480px] w-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-400">
                <Package className="h-24 w-24" />
                <p className="mt-3">Product Image</p>
              </div>
            )}

          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">

            {product.category && (
              <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#D4A017]">
                {product.category}
              </div>
            )}

            <h1 className="text-3xl font-bold leading-tight text-[#0B1F4D] md:text-4xl">
              {product.name}
            </h1>

            {product.brand && (
              <p className="mt-4 text-lg text-gray-600">
                Brand: <strong>{product.brand}</strong>
              </p>
            )}

            {product.part_number && (
              <p className="mt-2 text-gray-600">
                Part Number: <strong>{product.part_number}</strong>
              </p>
            )}

            {product.description && (
              <div className="mt-6">
                <h2 className="mb-2 text-xl font-bold text-[#0B1F4D]">
                  Product Description
                </h2>

                <div className="whitespace-pre-line leading-7 text-gray-600">
                    {product.description}
                </div>
              </div>
            )}

            {/* Enquiry Box */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">

              <h2 className="text-xl font-bold text-[#0B1F4D]">
                Need Price & Availability?
              </h2>

              <p className="mt-2 text-gray-600">
                Contact Nimbus Equipments for current price, stock
                availability and compatibility information.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">

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
