const jwt = require("jsonwebtoken");

// ✅ Controller for checking authentication (user/admin)
exports.checkAuth = (req, res) => {
  try {
    const { token, Admin_token } = req.cookies;

    //  No cookie found
    if (!token && !Admin_token) {
      return res.status(401).json({ error: "No token found" });
    }

    //  Verify whichever token exists
    let verified;
    if (token) {
      verified = jwt.verify(token, process.env.secretkey);
    } else if (Admin_token) {
      verified = jwt.verify(Admin_token, process.env.secretkey);
    }

    // 3️⃣ If verification fails
    if (!verified) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // 4️⃣ Send decoded user/admin data
    return res.status(200).json({ user: verified });
  } catch (error) {
    console.error("Auth check error:", error);
    return res
      .status(401)
      .json({ error: "Authentication failed", details: error.message });
  }
};
