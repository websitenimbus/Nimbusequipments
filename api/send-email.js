export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const {
        customer_name,
        phone,
        company_city,
        compressor_model,
        part_requirement
    } = req.body || {};

    if (!customer_name || !phone || !part_requirement) {
        return res.status(400).json({ error: { message: 'Please fill in all required fields.' } });
    }

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Nimbus Website <sales@nimbusequipments.in>',
                to: ['sales@nimbusequipments.in'],
                subject: `New RFQ: ${customer_name} - ${company_city || 'Direct Inquiry'}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 4px; overflow: hidden;">
                        <div style="background-color: #0B1F4D; padding: 20px; text-align: center; color: white;">
                            <h2 style="margin: 0; font-size: 20px; text-transform: uppercase;">Nimbus Equipments</h2>
                            <p style="margin: 5px 0 0; font-size: 13px; color: #D4A017;">New Website Quotation Request</p>
                        </div>
                        <div style="padding: 24px;">
                            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                                <tr style="background-color: #f9f9f9;">
                                    <td style="padding: 12px; font-weight: bold; width: 40%; border-bottom: 1px solid #eee;">Customer Name:</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #eee;">${customer_name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #eee;">Phone / WhatsApp:</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #0B1F4D; font-weight: bold;">${phone}</a></td>
                                </tr>
                                <tr style="background-color: #f9f9f9;">
                                    <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #eee;">Company & City:</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #eee;">${company_city || 'Not Provided'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #eee;">Compressor Model:</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #eee;">${compressor_model || 'Not Provided'}</td>
                                </tr>
                                <tr style="background-color: #f9f9f9;">
                                    <td style="padding: 12px; font-weight: bold; vertical-align: top; border-bottom: 1px solid #eee;">Part Requirement:</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${part_requirement}</td>
                                </tr>
                            </table>
                            <div style="margin-top: 20px; padding: 12px; background-color: #f5f6f8; font-size: 12px; color: #666; border-left: 3px solid #D4A017;">
                                This inquiry was submitted directly from the RFQ form on nimbusequipments.in
                            </div>
                        </div>
                    </div>
                `,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            return res.status(200).json({ success: true, id: data.id });
        } else {
            return res.status(400).json({ error: data });
        }
    } catch (err) {
        return res.status(500).json({ error: { message: err.message } });
    }
}
