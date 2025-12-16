import { Router } from "express";
import { subscribeNewsletter } from "./newsletter.controller.js";

const router = Router();
router.post("/", subscribeNewsletter);

export default router;
