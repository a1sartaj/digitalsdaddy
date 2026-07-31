import env from "../../config/env.js";
import transporter from "../../config/mail.js";



interface SendMailOptions {
    subject: string;
    html: string;
    replyTo?: string;
}

const sendMail = async ({
    subject,
    html,
    replyTo,
}: SendMailOptions) => {
    await transporter.sendMail({
        from: env.SMTP_USER,
        to: env.SMTP_USER,
        subject,
        html,
        replyTo,
    });
};

export default {
    sendMail,
};