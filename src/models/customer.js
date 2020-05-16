const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  // Not sure if the types are what we want
  //_id: mongoose.Types.ObjectId,
  phone: { type: Number, required: true },
  group: { type: Number, required: true },
  customer_num: { type: Number, required: true },
  time_stamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Customer", customerSchema);
