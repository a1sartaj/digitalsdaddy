import { Request, Response } from "express";
import mailServices from "./mail.services.js";
import contactTemplate from "./templates/contact.template.js";

const sendMail = async (req: Request, res: Response) => {
    try {
        const {
            fullName,
            email,
            phone,
            service,
            message,
        } = req.body;

        // Send Mail
        await mailServices.sendMail({
            subject: "Digitalsdaddy.in New enquery",
            html: contactTemplate({
                fullName,
                email,
                phone,
                service,
                message,
            }),
            replyTo: email,
        });

        return res.status(200).json({
            success: true,
            message: "Mail sent successfully.",
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to send mail.",
        });
    }
};

export default {
    sendMail,
};