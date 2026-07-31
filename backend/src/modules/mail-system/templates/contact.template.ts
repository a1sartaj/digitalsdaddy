interface ContactTemplateOptions {
    fullName: string;
    email: string;
    phone?: string;
    service?: string;
    message: string;
}

const contactTemplate = ({
    fullName,
    email,
    phone,
    service,
    message,
}: ContactTemplateOptions): string => {
    return `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
            
            <div style="background: #1f2937; color: #ffffff; padding: 20px;">
                <h2 style="margin: 0;">📩 New Contact Form Submission</h2>
            </div>

            <div style="padding: 20px;">

                <table style="width: 100%; border-collapse: collapse;">

                    <tr>
                        <td style="padding:10px;border:1px solid #ddd;"><strong>Name</strong></td>
                        <td style="padding:10px;border:1px solid #ddd;">${fullName}</td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border:1px solid #ddd;"><strong>Email</strong></td>
                        <td style="padding:10px;border:1px solid #ddd;">${email}</td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border:1px solid #ddd;"><strong>Phone</strong></td>
                        <td style="padding:10px;border:1px solid #ddd;">${phone || "-"}</td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border:1px solid #ddd;"><strong>Category</strong></td>
                        <td style="padding:10px;border:1px solid #ddd;">${service || "-"}</td>
                    </tr>

                </table>

                <div style="margin-top: 24px;">
                    <h3 style="margin-bottom: 10px;">Message</h3>

                    <div style="background:#f8f8f8;padding:16px;border-radius:6px;border:1px solid #e5e5e5;">
                        ${message.replace(/\n/g, "<br>")}
                    </div>
                </div>

            </div>

            <div style="padding:15px;background:#f5f5f5;color:#666;font-size:13px;text-align:center;">
                This email was generated from your website contact form.
            </div>

        </div>
    `;
};

export default contactTemplate;