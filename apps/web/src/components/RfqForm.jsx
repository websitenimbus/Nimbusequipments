import React, { useState } from 'react';
import { Phone, CheckCircle2, Send } from 'lucide-react';
import { CONTACT } from '@/data/site';

const empty = {
    customer_name: '',
    phone: '',
    company_city: '',
    compressor_model: '',
    part_requirement: ''
};

export default function RfqForm({ title = 'REQUEST QUICK QUOTE' }) {
    const [form, setForm] = useState(empty);
    const [submitted, setSubmitted] = useState(false);

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const submit = (e) => {
        e.preventDefault();

        // 1. WhatsApp formatted message banana
        const msg = 
`*NEW INQUIRY - NIMBUS EQUIPMENTS*
---------------------------------
*Name:* ${form.customer_name}
*Phone:* ${form.phone}
*Company & City:* ${form.company_city || 'N/A'}
*Compressor Model:* ${form.compressor_model || 'N/A'}
*Requirement:* ${form.part_requirement}
---------------------------------
_Sent via nimbusequipments.in_`;

        // 2. WhatsApp URL create karna
        const whatsappNumber = CONTACT.phoneRaw?.replace(/[^0-9]/g, '') || '919876543210';
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

        // 3. WhatsApp chat open karna
        window.open(url, '_blank');

        // 4. UI state done karna
        setSubmitted(true);
        setForm(empty);
    };

    const field = 'w-full rounded-sm border border-[#0B1F4D]/15 bg-white px-3.5 py-3 text-sm text-[#0B1F4D] placeholder:text-[#0B1F4D]/45 outline-none transition focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/25';

    if (submitted) {
        return (
            <div className="rounded-sm border-t-4 border-[#D4A017] bg-white p-8 text-center shadow-2xl">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#D4A017]" strokeWidth={1.5} />
                <h3 className="font-display mt-4 text-2xl font-bold uppercase text-[#0B1F4D]">Inquiry Forwarded</h3>
                <p className="mt-2 text-sm text-[#0B1F4D]/70">Your requirement has been directed to our WhatsApp support team. For immediate breakdown assistance, call {CONTACT.phone}.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="font-display mt-5 text-sm font-bold uppercase text-[#123D8D] underline">Send another enquiry</button>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className="rounded-sm border-t-4 border-[#D4A017] bg-white p-6 shadow-2xl sm:p-7">
            <div className="mb-5 border-b border-[#0B1F4D]/10 pb-4">
                <h3 className="font-display text-2xl font-bold uppercase text-[#0B1F4D]">{title}</h3>
                <p className="mt-1 text-xs font-medium text-[#0B1F4D]/60">Share your requirement — get verified pricing & availability</p>
            </div>

            <div className="space-y-3.5">
                <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                        <label className="mb-1 block text-xs font-semibold uppercase text-[#0B1F4D]/75">Your Name *</label>
                        <input required value={form.customer_name} onChange={set('customer_name')} placeholder="e.g. Rajesh Kumar" className={field} />
                    </div>
                    <div>
                        <label className="mb-1 block text-xs font-semibold uppercase text-[#0B1F4D]/75">Phone / WhatsApp *</label>
                        <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="e.g. +91 98765 43210" className={field} />
                    </div>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                    <div>
                        <label className="mb-1 block text-xs font-semibold uppercase text-[#0B1F4D]/75">Company & City</label>
                        <input value={form.company_city} onChange={set('company_city')} placeholder="e.g. ABC Industries, Pune" className={field} />
                    </div>
                    <div>
                        <label className="mb-1 block text-xs font-semibold uppercase text-[#0B1F4D]/75">Compressor Make / Model</label>
                        <input value={form.compressor_model} onChange={set('compressor_model')} placeholder="e.g. Atlas Copco GA 37 / ELGi 45kW" className={field} />
                    </div>
                </div>

                <div>
                    <label className="mb-1 block text-xs font-semibold uppercase text-[#0B1F4D]/75">Part Number / Requirement Details *</label>
                    <textarea required value={form.part_requirement} onChange={set('part_requirement')} rows={3} placeholder="e.g. Air filter, Oil separator kit, or exact part numbers..." className={field} />
                </div>
            </div>

            <button type="submit" className="gold-btn font-display mt-5 flex w-full items-center justify-center gap-2 rounded-sm px-6 py-4 text-base font-bold uppercase tracking-wide shadow-md">
                <Send className="h-4 w-4" /> Request Quote via WhatsApp
            </button>

            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[#0B1F4D]/70">
                <Phone className="h-4 w-4 text-[#D4A017]" strokeWidth={1.75} /> Need instant support? Call
                <a href={`tel:${CONTACT.phoneRaw}`} className="font-semibold text-[#0B1F4D] hover:underline">{CONTACT.phone}</a>
            </p>
        </form>
    );
}
