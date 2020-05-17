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

// return specific customer, can be used to update or delete a customer
router.get('/:objectId', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.objectId);
    res.json(customer);
  } catch (err) {
    res.json({ message: err });
  }

});

// update specific customer
router.patch('/:objectId', async (req, res) => {
  try { // set part is the updated part, so updating customer number
    const updatedCustomer = await Customer.updateOne({_id: req.params.objectId},
        {$set: {customer_wait_num: req.body.customer_wait_num}}
        );
    res.json(updatedCustomer);

  } catch (err) {
    res.json({ message: err });
  }
});

// delete specific customer
router.delete('/:objectId', async (req, res) => {
  try {
    const removedCustomer = await Customer.remove({_id: req.params.objectId});
    res.json(removedCustomer);
  }catch (err) {
    res.json({ message: err });
  }

});

module.exports = router;
