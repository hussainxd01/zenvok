import jwt from "jsonwebtoken";
import Admin from "../modules/admin/admin.model.js";

const protectAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default protectAdmin;
