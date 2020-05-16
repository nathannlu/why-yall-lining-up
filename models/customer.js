const mongoose = require("mongoose");
var passportLocalMongoose = require('passport-local-mongoose'); // may not be necessary

const customerSchema = mongoose.Schema({
  // Not sure if the types are what we want
  //_id: mongoose.Types.ObjectId,
  phone: { type: Number, required: true },
  group_num: { type: Number, required: true },
  customer_wait_num: { type: Number, required: true },
  time_stamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Customer", customerSchema);
