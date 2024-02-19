const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ msg: "Unauthorized - No token provided" });
    }

    try {
        const decoded = jwt.verify(token, "MY_SECRET");
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ msg: "Unauthorized - Invalid token" });
    }
};
