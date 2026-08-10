import React, { useState } from 'react';
import { Phone, Loader2, CheckCircle2 } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { CATEGORIES, CONTACT, LOGO } from '@/data/site';

const empty = { customer_name: '', company: '', phone: '', email: '', product_type: '', part_required: '', quantity: '', city: '', urgency: 'Normal', message: '' };

export default function RfqForm({ extended = false, title = 'GET QUICK QUOTE' }) {
    const [form, setForm] = useState(empty);
    const [state, setState] = useState('idle');
    const [error, setError] = useState('');
    const parts = CATEGORIES.find((c) => c.name === form.product_type)?.items || [];
    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value, ...(k === 'product_type' ? { part_required: '' } : {}) }));

    const submit = async (e) => {
        e.preventDefault();
        setState('loading');
        setError('');
        try {
            await pb.collection('rfqs').create({ ...form, status: 'New' });
            setState('done');
            setForm(empty);
        } catch (err) {
            setError(err?.message || 'Could not send your request. Please call us instead.');
            setState('idle');
        }
    };

    const field = 'w-full rounded-sm border border-[#0B1F4D]/15 bg-white px-3.5 py-3 text-sm text-[#0B1F4D] outline-none transition focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/25';

    if (state === 'done') {
        return (
            <div className="rounded-sm border-t-4 border-[#D4A017] bg-white p-8 text-center shadow-2xl">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#D4A017]" strokeWidth={1.5} />
                <h3 className="font-display mt-4 text-2xl font-bold uppercase text-[#0B1F4D]">Request Received</h3>
                <p className="mt-2 text-sm text-[#0B1F4D]/70">Our technical team will revert with a quotation shortly. For urgent breakdowns call {CONTACT.phone}.</p>
                <button type="button" onClick={() => setState('idle')} className="font-display mt-5 text-sm font-bold uppercase text-[#123D8D] underline">Send another enquiry</button>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className="rounded-sm border-t-4 border-[#D4A017] bg-white p-6 shadow-2xl sm:p-7">
            <div className="mb-5 flex items-center gap-3">
                <img src={LOGO} alt="Nimbus Equipments logo" className="h-10 w-10 rounded-sm object-contain" />
                <h3 className="font-display text-2xl font-bold uppercase text-[#0B1F4D]">{title}</h3>
            </div>
            <div className={`grid gap-3 ${extended ? 'sm:grid-cols-2' : ''}`}>
                <input required value={form.customer_name} onChange={set('customer_name')} placeholder="Your Name" className={field} />
                <input value={form.company} onChange={set('company')} placeholder="Company Name" className={field} />
                <input required value={form.phone} onChange={set('phone')} placeholder="Phone Number" className={field} />
                {extended && <input value={form.email} onChange={set('email')} placeholder="Email Address" className={field} />}
                <select value={form.product_type} onChange={set('product_type')} className={field}>
                    <option value="">Select Product Type</option>
                    {CATEGORIES.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
                <select value={form.part_required} onChange={set('part_required')} disabled={!parts.length} className={`${field} disabled:opacity-60`}>
                    <option value="">{parts.length ? 'Part Required' : 'Select product type first'}</option>
                    {parts.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                {extended && <input value={form.quantity} onChange={set('quantity')} placeholder="Quantity" className={field} />}
                {extended && <input value={form.city} onChange={set('city')} placeholder="City" className={field} />}
                {extended && (
                    <select value={form.urgency} onChange={set('urgency')} className={field}>
                        {['Normal', 'Urgent', 'Emergency Breakdown'].map((u) => <option key={u} value={u}>{u}</option>)}
                    </select>
                )}
                {extended && <textarea value={form.message} onChange={set('message')} rows={3} placeholder="Requirement details" className={`${field} sm:col-span-2`} />}
            </div>
            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
            <button type="submit" disabled={state === 'loading'} className="gold-btn font-display mt-4 flex w-full items-center justify-center gap-2 rounded-sm px-6 py-4 text-base font-bold uppercase tracking-wide disabled:opacity-70">
                {state === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />} Get Quick Quote
            </button>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[#0B1F4D]/70">
                <Phone className="h-4 w-4 text-[#D4A017]" strokeWidth={1.75} /> Need help? Call / WhatsApp
                <a href={`tel:${CONTACT.phoneRaw}`} className="font-semibold text-[#0B1F4D]">{CONTACT.phone}</a>
            </p>
        </form>
    );
}
