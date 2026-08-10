import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Check, Truck, Wrench, ShieldCheck, IndianRupee, Users, Headphones, Package, Clock, Phone, MessageCircle, Cog, MapPinned, Award } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import RfqForm from '@/components/RfqForm';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import { CATEGORIES, BRANDS, INDUSTRIES, IMAGES, CONTACT, LOGO } from '@/data/site';

const trust = [
    { icon: MapPinned, label: 'PAN India Supply' },
    { icon: Truck, label: 'Express Delivery' },
    { icon: Wrench, label: 'Expert Technical Team' },
    { icon: Award, label: '100% Customer Satisfaction' },
];

const why = [
    { icon: Package, t: 'Wide Range of Spare Parts', d: 'Filters, elements, valves, kits, sensors and airend components for all major screw compressor platforms.' },
    { icon: Cog, t: 'Technical Expertise', d: 'Engineers who identify the right part number from your model, serial and running hours.' },
    { icon: Truck, t: 'Fast Delivery Across India', d: 'Ready stock dispatched same day; express courier to plants in every industrial belt.' },
    { icon: Headphones, t: 'Industrial Support', d: 'Phone and WhatsApp support for breakdowns, service scheduling and part verification.' },
    { icon: ShieldCheck, t: 'Reliable Service Team', d: 'Trained field technicians for preventive maintenance, overhauling and installation jobs.' },
    { icon: Users, t: 'Customer-Focused Approach', d: 'Transparent quotations, honest lead times and long-term AMC partnerships.' },
];

const guides = [
    ['Compressor Oil Change Intervals', 'How ambient temperature, load factor and oil grade decide your true drain interval.'],
    ['Separator Element Replacement', 'Reading differential pressure and carry-over symptoms before failure occurs.'],
    ['Troubleshooting High Discharge Temperature', 'Cooler fouling, oil level, thermostat valve and fan checks in the right order.'],
];

const Section = ({ id, children, className = '' }) => (
    <section id={id} className={`px-5 py-20 sm:py-24 ${className}`}>{children}</section>
);

const Title = ({ children, sub, light }) => (
    <div className="mb-12 max-w-3xl">
        <div className="mb-4 h-1 w-16 bg-[#D4A017]" />
        <h2 className={`font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-[2.75rem] ${light ? 'text-white' : 'text-[#0B1F4D]'}`}>{children}</h2>
        {sub && <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-[#0B1F4D]/65'}`}>{sub}</p>}
    </div>
);

export default function HomePage() {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Nimbus Equipments | Industrial Air Compressor Spare Parts & Service Solutions</title>
                <meta name="description" content="Nimbus Equipments supplies industrial air compressor spare parts, service kits, compressor oil, AMC, installation and repair services across India. Compatible with Atlas Copco, ELGi, Ingersoll Rand, Chicago Pneumatic and Kaeser." />
            </Helmet>
            <SiteHeader />

            {/* HERO */}
            <section className="relative min-h-[100dvh] overflow-hidden">
                <img src={IMAGES.hero} alt="Industrial screw air compressor room" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F4D] via-[#0B1F4D]/92 to-[#123D8D]/70" />
                <div className="relative mx-auto grid max-w-[90rem] items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
                    <Reveal>
                        <div className="flex items-center gap-3">
                            <img src={LOGO} alt="Nimbus Equipments logo" className="h-14 w-14 rounded-sm object-contain" />
                            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">Nimbus Equipments</span>
                        </div>
                        <h1 className="font-display mt-6 text-4xl font-bold uppercase leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                            Industrial Compressor <span className="text-[#D4A017]">Spare Parts & Solutions</span>
                        </h1>
                        <p className="font-display mt-5 text-xl uppercase tracking-wide text-white/90 sm:text-2xl">Reliable Parts. Expert Support. Maximum Uptime.</p>
                        <p className="mt-3 max-w-xl text-white/70">Your trusted supplier & service partner for compatible brands.</p>
                        <ul className="mt-8 grid max-w-xl grid-cols-2 gap-3">
                            {['Genuine Quality', 'Fast Delivery', 'Technical Support', 'Competitive Pricing'].map((t) => (
                                <li key={t} className="flex items-center gap-2 text-sm text-white/85">
                                    <Check className="h-4 w-4 shrink-0 text-[#D4A017]" strokeWidth={2.5} />{t}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link to="/contact#rfq" className="gold-btn font-display rounded-sm px-7 py-4 text-sm font-bold uppercase tracking-wide">Request Quote</Link>
                            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="font-display flex items-center gap-2 rounded-sm border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#D4A017] hover:text-[#D4A017]">
                                <MessageCircle className="h-4 w-4" strokeWidth={1.75} /> WhatsApp Inquiry
                            </a>
                            <a href={`tel:${CONTACT.phoneRaw}`} className="font-display flex items-center gap-2 rounded-sm border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#D4A017] hover:text-[#D4A017]">
                                <Phone className="h-4 w-4" strokeWidth={1.75} /> Call Now
                            </a>
                        </div>
                    </Reveal>
                    <Reveal delay={0.15}><RfqForm /></Reveal>
                </div>
            </section>

            {/* TRUST STRIP */}
            <div className="bg-[#123D8D]">
                <div className="mx-auto grid max-w-[90rem] gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
                    {trust.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-3">
                            <Icon className="h-8 w-8 shrink-0 text-[#D4A017]" strokeWidth={1.4} />
                            <span className="font-display text-lg font-semibold uppercase text-white">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* PRODUCTS */}
            <Section id="products" className="bg-[#F5F6F8]">
                <div className="mx-auto max-w-[90rem]">
                    <Title sub="Parts, kits, lubricants, accessories and complete on-site service scope for rotary screw and reciprocating compressors.">Complete Range of Compressor Parts & Solutions</Title>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {CATEGORIES.map((c, i) => (
                            <Reveal key={c.name} delay={(i % 3) * 0.06}>
                                <div className="group h-full rounded-sm border border-[#0B1F4D]/8 bg-white p-7 shadow-[0_10px_40px_-24px_rgba(11,31,77,.55)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4A017]/60 hover:shadow-[0_24px_50px_-24px_rgba(11,31,77,.55)]">
                                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-[#0B1F4D] text-[#D4A017] transition group-hover:bg-[#D4A017] group-hover:text-[#0B1F4D]">
                                        <Cog className="h-6 w-6" strokeWidth={1.4} />
                                    </div>
                                    <h3 className="font-display text-xl font-bold uppercase text-[#0B1F4D]">{c.name}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-[#0B1F4D]/65">{c.items.slice(0, 6).join(' · ')}{c.items.length > 6 ? ' and more' : ''}</p>
                                    <Link to="/products" className="font-display mt-5 inline-block text-sm font-bold uppercase text-[#123D8D] underline-offset-4 hover:text-[#D4A017] hover:underline">Explore range</Link>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <div className="mt-12"><Link to="/products" className="gold-btn font-display inline-block rounded-sm px-8 py-4 text-sm font-bold uppercase tracking-wide">View All Products</Link></div>
                </div>
            </Section>

            {/* BRANDS */}
            <Section id="brands">
                <div className="mx-auto max-w-[72rem]">
                    <Title sub="Compatible aftermarket and OEM-equivalent parts, matched to your model and serial number.">Spares Compatible With Leading Brands</Title>
                </div>
                <div className="relative mx-auto max-w-[90rem] overflow-hidden border-y border-[#0B1F4D]/10 py-8">
                    <div className="marquee-track gap-4">
                        {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
                            <div key={`${b}-${i}`} className="font-display flex min-w-[240px] items-center justify-center rounded-sm border border-[#0B1F4D]/10 bg-[#F5F6F8] px-10 py-6 text-xl font-bold uppercase tracking-wide text-[#0B1F4D]">{b}</div>
                        ))}
                    </div>
                </div>
                <div className="mx-auto mt-10 max-w-[72rem]"><Link to="/products#brands" className="gold-btn font-display inline-block rounded-sm px-8 py-4 text-sm font-bold uppercase tracking-wide">View All Brands</Link></div>
            </Section>

            {/* WHY CHOOSE US */}
            <Section className="bg-[#0B1F4D]">
                <div className="mx-auto max-w-[90rem]">
                    <Title light sub="A technical supply partner built around uptime — not just a parts catalogue.">Why Choose Nimbus Equipments?</Title>
                    <div className="grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                        {why.map(({ icon: Icon, t, d }) => (
                            <div key={t} className="bg-white p-8 transition hover:bg-[#F5F6F8]">
                                <Icon className="h-9 w-9 text-[#D4A017]" strokeWidth={1.3} />
                                <h3 className="font-display mt-5 text-xl font-bold uppercase text-[#0B1F4D]">{t}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-[#0B1F4D]/65">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* INDUSTRIES */}
            <Section id="industries">
                <div className="mx-auto max-w-[90rem]">
                    <Title sub="Compressed air is a utility — we keep it running across process, discrete and heavy industry.">Industries We Serve</Title>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {INDUSTRIES.map((ind, i) => (
                            <Reveal key={ind.name} delay={(i % 4) * 0.05}>
                                <div className={`group relative overflow-hidden rounded-sm ${i === 0 ? 'lg:col-span-2' : ''}`}>
                                    <img src={ind.img} alt={`${ind.name} industry`} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D] via-[#0B1F4D]/25 to-transparent" />
                                    <h3 className="font-display absolute bottom-5 left-5 text-xl font-bold uppercase text-white">{ind.name}</h3>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <div className="mt-12"><Link to="/contact" className="gold-btn font-display inline-block rounded-sm px-8 py-4 text-sm font-bold uppercase tracking-wide">View All Industries</Link></div>
                </div>
            </Section>

            {/* EMERGENCY BANNER */}
            <section className="relative overflow-hidden bg-[#0B1F4D]">
                <img src={IMAGES.engineer} alt="Engineer servicing an air compressor" className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover lg:block" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F4D] via-[#0B1F4D] to-[#0B1F4D]/30" />
                <div className="relative mx-auto max-w-[90rem] px-5 py-20">
                    <div className="max-w-2xl">
                        <img src={LOGO} alt="Nimbus Equipments logo" className="h-12 w-12 rounded-sm object-contain" />
                        <h2 className="font-display mt-5 text-3xl font-bold uppercase leading-tight text-white sm:text-5xl">Emergency Compressor <span className="text-[#D4A017]">Breakdown Support</span></h2>
                        <p className="mt-4 text-white/75">Fast spare parts assistance for urgent industrial requirements.</p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a href={`tel:${CONTACT.phoneRaw}`} className="gold-btn font-display flex items-center gap-2 rounded-sm px-7 py-4 text-sm font-bold uppercase"><Phone className="h-4 w-4" /> Call Now</a>
                            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="font-display flex items-center gap-2 rounded-sm border border-white/30 px-7 py-4 text-sm font-bold uppercase text-white transition hover:border-[#D4A017] hover:text-[#D4A017]"><MessageCircle className="h-4 w-4" /> WhatsApp Now</a>
                            <span className="font-display text-lg font-semibold text-white">{CONTACT.phone}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* COUNTERS */}
            <Section className="bg-[#F5F6F8]">
                <div className="mx-auto grid max-w-[90rem] gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { icon: Clock, v: 10, s: '+', l: 'Years of Experience' },
                        { icon: Users, v: 2000, s: '+', l: 'Happy Customers' },
                        { icon: Package, v: 5000, s: '+', l: 'Products Delivered' },
                        { icon: Headphones, v: 24, s: '/7', l: 'Technical Support' },
                    ].map(({ icon: Icon, v, s, l }) => (
                        <div key={l} className="border-t-2 border-[#D4A017] bg-white p-8">
                            <Icon className="h-8 w-8 text-[#D4A017]" strokeWidth={1.3} />
                            <div className="font-display mt-5 text-5xl font-bold text-[#0B1F4D]"><CountUp value={v} suffix={s} /></div>
                            <p className="font-display mt-2 text-sm font-semibold uppercase tracking-wide text-[#0B1F4D]/60">{l}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* TECHNICAL GUIDES */}
            <Section id="guides">
                <div className="mx-auto max-w-[72rem]">
                    <Title sub="Practical maintenance notes written by our service engineers.">Technical Guides</Title>
                    <div className="divide-y divide-[#0B1F4D]/10 border-y border-[#0B1F4D]/10">
                        {guides.map(([t, d], i) => (
                            <div key={t} className="flex flex-col gap-2 py-7 md:flex-row md:items-center md:gap-10">
                                <span className="font-display text-3xl font-bold text-[#D4A017]">{String(i + 1).padStart(2, '0')}</span>
                                <div>
                                    <h3 className="font-display text-xl font-bold uppercase text-[#0B1F4D]">{t}</h3>
                                    <p className="mt-1.5 text-sm text-[#0B1F4D]/65">{d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-[#123D8D]">
                <div className="mx-auto grid max-w-[90rem] items-center gap-12 lg:grid-cols-2">
                    <div>
                        <Title light sub="Share your compressor model and part requirement — we revert with pricing, availability and delivery time.">Request a Quotation</Title>
                        <div className="flex items-center gap-3 text-white">
                            <IndianRupee className="h-6 w-6 text-[#D4A017]" strokeWidth={1.4} />
                            <span className="font-display text-lg uppercase">Competitive industrial pricing</span>
                        </div>
                    </div>
                    <RfqForm extended title="Request Quote" />
                </div>
            </Section>

            <SiteFooter />
        </div>
    );
}
