const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  phone: Number,
  // Not too sure if we need these
  group: Number,
  customer_num: Number,
});

module.exports = mongoose.model("Customer", customerSchema);
