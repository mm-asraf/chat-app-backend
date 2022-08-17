const router = require("express").Router();
const User = require("../models/User.model");

router.post("/", async (req, res) => {
  try {
    const { name, email, password, picture } = req.body;
    console.log(req.body);
    const user = await User.create({ name, password, picture });
    return res.status(201).send(user);
  } catch (e) {
    let msg;
    if (e.code == 11000) {
      msg = "User already exists!";
    } else {
      msg = e.message;
    }
    console.log(e);
    return res.status(400).send(msg);
  }
});
