const { body, validationResult } = require("express-validator");

const respondWithValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Get the first error message for consistency with tests
        const firstError = errors.array()[0];
        return res.status(400).json({
            message: firstError.msg,
            errors: errors.array(), // Keep the full errors array for debugging
        });
    }
    next();
};

const registerUser = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
        .isString()
        .withMessage("Username must be a string")
        .isLength({ min: 3, max: 20 })
        .withMessage("Username must be between 3 and 20 characters")
        .matches(/^[a-zA-Z0-9_]+$/)
        .withMessage(
            "Username can only contain letters, numbers, and underscores"
        ),

    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),

    respondWithValidationErrors,
];

const loginUser = [
    body("username").trim().notEmpty().withMessage("Username is required"),
    body("password").notEmpty().withMessage("Password is required"),

    respondWithValidationErrors,
];

module.exports = {
    registerUser,
    loginUser,
};
