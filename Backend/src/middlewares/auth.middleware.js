const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
    const { token } = req.cookies;

    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token or expired" });
    }
}

module.exports = authMiddleware;
