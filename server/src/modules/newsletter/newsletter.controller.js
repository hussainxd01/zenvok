import Newsletter from "./newsletter.model.js";
import asyncHandler from "../../middlewares/async.middleware.js";
import ApiResponse from "../../utils/apiResponse.js";

export const subscribeNewsletter = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json(new ApiResponse(false, "Email is required"));
  }

  const existing = await Newsletter.findOne({ email });
  if (existing) {
    return res.status(200).json(new ApiResponse(true, "Already subscribed"));
  }

  const subscriber = await Newsletter.create({ email });

  res
    .status(201)
    .json(new ApiResponse(true, "Subscribed successfully", subscriber));
});
