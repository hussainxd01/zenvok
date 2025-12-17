import Contact from "./contact.model.js";
import asyncHandler from "../../middlewares/async.middleware.js";
import ApiResponse from "../../utils/apiResponse.js";

export const createContact = asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body);

  res.status(201).json(new ApiResponse(true, "Message received", contact));
});
