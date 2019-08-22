const jwt = require("jsonwebtoken");

function isAuthorized(req, res, next) {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Access denied");
    try {
        const decoded = jwt.verify(token, "euidjijknoknp;");
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send("invalid token");
    }
}

exports.isAuthorized = isAuthorized;
