const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const customer = new Customer({
    phone: req.body.phone,
    group: req.body.group,
    customer_num: req.body.customer_num,
  });
  try {
    const savedCustomer = await customer.save();
    res.json(savedCustomer);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
