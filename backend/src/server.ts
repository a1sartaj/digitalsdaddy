import { env } from "node:process";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import transporter from "./config/mail.js";

const startServer = async () => {
    try {
        await connectDB();

        transporter.verify((error) => {
            if (error) {
                console.error("SMTP Error:", error);
            } else {
                console.log("SMTP Connected");
            }
        });

        app.listen(env.PORT, () => {
            console.log(`🚀 Server running on http://localhost:${env.PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1);
    }
};

startServer();