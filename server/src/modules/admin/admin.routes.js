import express from "express";
import { loginAdmin, getAllContacts } from "./admin.controller.js";
import protectAdmin from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", loginAdmin);

// protected
router.get("/contacts", protectAdmin, getAllContacts);

export default router;
