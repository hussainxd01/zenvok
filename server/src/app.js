import express from "express";
import cors from "cors";
import contactRoutes from "./modules/contact/contact.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.use(errorHandler);

export default app;
