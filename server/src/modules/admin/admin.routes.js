import express from "express";
import { loginAdmin } from "./admin.controller.js";
import protectAdmin from "../../middlewares/auth.middleware.js";
import { getAllContacts } from "./admin.contacts.js";

const router = express.Router();

router.post("/login", loginAdmin);

// protected
router.get("/contacts", protectAdmin, getAllContacts);

export default router;
