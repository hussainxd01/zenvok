import express from "express";
import { loginAdmin } from "./admin.controller.js";
import { getAllContacts } from "../contact/contact.controller.js";
import protectAdmin from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", loginAdmin);

// protected
router.get("/contacts", protectAdmin, getAllContacts);

export default router;
