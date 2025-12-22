import Contact from "./contact.model.js";
import asyncHandler from "../../middlewares/async.middleware.js";
import ApiResponse from "../../utils/apiResponse.js";

export const createContact = asyncHandler(async (req, res) => {
  const { name, email, company, message, selectedPlan } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error("Missing required fields");
  }

  const allowedPlans = ["starter", "ecommerce", "premium"];

  const plan = allowedPlans.includes(selectedPlan?.toLowerCase())
    ? selectedPlan.toLowerCase()
    : "not_selected";

  const contact = await Contact.create({
    name,
    email,
    company,
    message,
    selectedPlan: plan,
  });

  res.status(201).json(new ApiResponse(true, "Message received", contact));
});

export const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });

  res.status(200).json(new ApiResponse(true, "Contacts fetched", contacts));
});

export const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deleted = await Contact.findByIdAndDelete(id);

  if (!deleted) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json(new ApiResponse(true, "Contact deleted", { id }));
});
