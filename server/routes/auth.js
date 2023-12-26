// IMPORT MODULES
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// import files
const User = require("../model/userSchema");
require("../database/connection");

router.post("/user/register", async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const userExist = await User.findOne({
      $or: [{ email: email }, { phone: phone }],
    });

    if (userExist) {
      return res.status(422).json({ error: "User Already exist" });
    }

    const user = new User({ name, email, phone, password });
    await user.save();

    let expTime = "30 days";
    let payload = { id: user._id };
    let token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: expTime,
      audience: process.env.JWT_AUD,
    });

    let UserData = {
      user: {
        userId: user?._id,
        name: name,
        email: email,
        phone: phone,
      },
      token: token,
      expireTime: expTime,
    };
    return res.status(201).json(UserData);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      return res.status(400).json({ error: "User not found" });
    }
    if (password !== userLogin.password) {
      return res.status(400).json({ error: "Invalid Credential" });
    }
    // generate token
    let expTime = "30 days";
    console.log(userLogin._id);
    let payload = { id: userLogin._id };
    let token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: expTime,
      audience: process.env.JWT_AUD,
    });
    let UserData = {
      user: {
        userId: userLogin?._id,
        name: userLogin.name,
        phone: userLogin.phone,
        email: userLogin.email,
      },
      token: token,
      expireTime: expTime,
    };

    return res.status(201).json(UserData);
  } catch (error) {
    return res.status(401).json(error);
  }
});

module.exports = router;
