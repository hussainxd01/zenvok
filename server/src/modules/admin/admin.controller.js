import Admin from "./admin.model.js";
import asyncHandler from "../../middlewares/async.middleware.js";
import ApiResponse from "../../utils/apiResponse.js";
import { signToken } from "../../utils/jwt.js";

export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email }).select("+password");
  if (!admin || !(await admin.comparePassword(password))) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  const token = signToken(admin._id);

  res.status(200).json(new ApiResponse(true, "Login successful", { token }));
});
