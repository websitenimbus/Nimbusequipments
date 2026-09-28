import React, { useState } from 'react';
import { Phone, Loader2, CheckCircle2, Send } from 'lucide-react';
import { CONTACT } from '@/data/site';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz6wuV0bRFEKBXp9o-RWvFCXowWqL1nNOvTMvVR1ryrJCmRMY692FHXyKr-Vyy7kkGe/exec';

const empty = {
    customer_name: '',
    phone: '',
    company_city: '',
    compressor_model: '',
    part_requirement: ''
};

export default function RfqForm({ title = 'REQUEST QUICK QUOTE' }) {
    const [form, setForm] = useState(empty);
    const [state, setState] = useState('idle');
    const [error, setError] = useState('');

    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        setState('loading');
        setError('');

        try {
            await fetch(GOOGLE_SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            setState('done');
            setForm(empty);
        } catch (err) {
            setError('Could not submit inquiry. Please call us directly.');
            setState('idle');
        }
    };

    const field = 'w-full rounded-sm border border-[#0B1F4D]/15 bg-white px-3.5 py-3 text-sm text-[#0B1F4D] placeholder:text-[#0B1F4D]/45 outline-none transition focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/25';

    if (state === 'done') {
        return (
            <div className="rounded-sm border-t-4 border-[#D4A017] bg-white p-8 text-center shadow-2xl">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#D4A017]" strokeWidth={1.5} />
                <h3 className="font-display mt-4 text-2xl font-bold uppercase text-[#0B1F4D]">Quotation Request Received</h3>
                <p className="mt-2 text-sm text-[#0B1F4D]/70">Our technical sales team will review your requirement and reach out shortly. For urgent breakdown inquiries, call {CONTACT.phone}.</p>
                <button type="button" onClick={() => setState('idle')} className="font-display mt-5 text-sm font-bold uppercase text-[#123D8D] underline">Send another enquiry</button>
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

            {error && <p className="mt-3 text-sm text-red-600 font-medium">{error}</p>}

            <button type="submit" disabled={state === 'loading'} className="gold-btn font-display mt-5 flex w-full items-center justify-center gap-2 rounded-sm px-6 py-4 text-base font-bold uppercase tracking-wide disabled:opacity-70 shadow-md">
                {state === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} Request Instant Quote
            </button>

            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[#0B1F4D]/70">
                <Phone className="h-4 w-4 text-[#D4A017]" strokeWidth={1.75} /> Need instant support? Call
                <a href={`tel:${CONTACT.phoneRaw}`} className="font-semibold text-[#0B1F4D] hover:underline">{CONTACT.phone}</a>
            </p>
        </form>
    );
}
