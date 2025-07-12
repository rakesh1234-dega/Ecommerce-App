import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Not Authorized, Login Again" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Only check the email, not the password
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ success: false, message: "Not Authorized, Invalid Admin" });
    }

    // Attach admin info to request if needed later
    req.admin = decoded;
    next();

  } catch (error) {
    console.log("JWT Error:", error.message);
    return res.status(401).json({ success: false, message: "Token is invalid or expired" });
  }
};

export default adminAuth;
