import express from "express";
import cors from "cors";
import contactRoutes from "./modules/contact/contact.routes.js";
import newsletterRoutes from "./modules/newsletter/newsletter.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import adminRoutes from "./modules/admin/admin.routes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://zenvok.vercel.app",
  "https://zenvok-api.onrender.com",
  // change if you have custom domain
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (Postman, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/admin", adminRoutes);

app.use(errorHandler);

export default app;
