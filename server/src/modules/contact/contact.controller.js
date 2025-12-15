import Contact from "./contact.model.js";
import asyncHandler from "../../middlewares/async.middleware.js";
import ApiResponse from "../../utils/apiResponse.js";
import { sendContactEmail } from "../../utils/sendEmail.js";

export const createContact = asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body);

  // 🔔 send email
  await sendContactEmail(contact);

  res.status(201).json(new ApiResponse(true, "Message received", contact));
});
