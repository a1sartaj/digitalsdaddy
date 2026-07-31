import express from "express";
import cors from "cors";
import helmet from "helmet";
// import compression from "compression";
import cookieParser from "cookie-parser";
import mailRoutes from './modules/mail-system/mail.routes.js'





const app = express();

// Security
app.use(helmet());

// Enable CORS
app.use(
    cors({
        origin: "*",
        credentials: true,
    }),
);

// Compress responses
// app.use(compression());

// Parse JSON & Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse Cookies
app.use(cookieParser());

// Health Check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Digital Daddy API is running 🚀",
    });
});

// Mail Routes
app.use("/api/v1/mail", mailRoutes)




export default app;
