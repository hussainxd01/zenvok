import { Router } from "express";
import {
  createContact,
  getAllContacts,
  deleteContact,
} from "./contact.controller.js";

import protectAdmin from "../../middlewares/auth.middleware.js";

const router = Router();

/* PUBLIC ROUTE — portfolio contact form */
router.post("/", createContact);

/* ADMIN ROUTES */
router.get("/", protectAdmin, getAllContacts);
router.delete("/:id", protectAdmin, deleteContact);

export default router;
