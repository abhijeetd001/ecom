const verifyPermission = (roles) => (req, res, next) => {
    console.log("🚀 ==>>> file: verify.permission.middlewares.js:2 ==>>> verifyPermission ==>>> req:", req.body)
    if (roles.includes(req.body.user_role)) {
        next(); // Allow the request to proceed
    } else {
        // If the user does not have the required role, send an error response
        return res.status(403).json({ message: "You are not allowed to perform this action" });
    }
};

// Export the verifyPermission function using module.exports
module.exports = verifyPermission;