const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../model/userSchema");
require("../database/connection");

router.get("/test", (req, res) => {
  res.send("tjis is touter");
});

//user register
router.post("/user/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  try {
    if (!name || !email || !password || !cpassword) {
      return res.status(422).json({ error: "please fill all fields" });
    }

    if (password !== cpassword) {
      return res
        .status(422)
        .json({ error: "password and confirm password not be same" });
    }

    const userExist = await User.findOne({
      $or: [
        { email: email },
        { phone: phone },
        // Add more conditions here if needed
      ],
    });

    if (userExist) {
      return res.status(422).json({ error: "User Already exist" });
    }

    const user = new User({ name, email, phone, password });
    console.log(user._id);

    // generate token
    let expTime = "30 days";
    let payload = { id: user._id };
    let token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: expTime,
      audience: process.env.JWT_AUD,
    });

    let UserData = {
      user: {
        name: name,
        phone: phone,
        email: email,
      },
      token: token,
      expireTime: expTime,
    };
    await user.save();
    return res.status(201).json(UserData);
  } catch (error) {
    return res.status(400).json(error);
  }
});

// user login
router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(422).json({ error: "please fill all fields" });
    }
    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      return res.status(400).json({ error: "email not found" });
    }
    if (password !== userLogin.password) {
      return res.status(400).json({ error: "password wrong" });
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
        name: userLogin.name,
        phone: userLogin.phone,
        email: userLogin.email,
      },
      token: token,
      expireTime: expTime,
    };

    return res.status(201).json(UserData);
  } catch (error) {
    console.log("login form ", error);
  }
});

module.exports = router;
