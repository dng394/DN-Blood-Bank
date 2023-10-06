const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    try {
        // Use .split() if invalid token error keeps appearing
        // const authorizationHeader = req.header("Authorization");
        // const token = authorizationHeader.split(" ")[1];
        const token = req.header("authorization").replace("Bearer ", "");
        const decryptedData = jwt.verify(token, process.env.jwt_secret);
        req.body.userId = decryptedData.userId;
        next();
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};
