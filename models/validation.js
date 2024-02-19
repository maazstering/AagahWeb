const { body, validationResult } = require("express-validator");

exports.validateSignup = [
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
    body("name").isLength({ min: 3 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

exports.validateLogin = [
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
