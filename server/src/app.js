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
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/admin", adminRoutes);

app.use(errorHandler);

export default app;
