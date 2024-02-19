const bcrypt = require("bcrypt");
const Users = require("../models/user");
const express = require("express");
const jwt = require("jsonwebtoken");
const { validateSignup, validateLogin } = require("../middleware/validation");

const router = express.Router();

router.post("/signup", validateSignup, async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await Users.findOne({ email });
        if (user) return res.json({ msg: "User already exists" });

        await Users.create({ ...req.body, password: await bcrypt.hash(password, 10) });

        return res.json({ msg: "User created" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

router.post("/login", validateLogin, async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email });
        if (!user) return res.json({ msg: "User not found" });

        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) return res.json({ msg: "Incorrect password" });

        const token = jwt.sign({
            email,
            createdAt: new Date(),
            userId: user._id,
        }, "MY_SECRET", { expiresIn: "1d" });

        res.json({
            msg: "Logged in",
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

module.exports = router;
