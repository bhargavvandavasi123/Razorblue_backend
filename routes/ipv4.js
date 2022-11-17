const express = require("express");
const ipv4 = require("../models/ipv4");
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await ipv4.find().then((data) => data);
  res.send(data);
});

router.post("/", async (req, res) => {
  var address = req.body.address;
  ipv4.findOne({ $or: [{ address: address }] }).then((address) => {
    if (address) {
      res.json({
        message: "ipv4 address exist",
      });
    } else {
      res.json({
        message: "ipv4 address does not exist",
      });
    }
  });
});

module.exports = router;
