const mongoose = require("mongoose");

const ipv4Schema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ipv4", ipv4Schema);
