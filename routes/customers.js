const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

// returns all the customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.json({ message: err });
  }
});

// submits a new customer
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
router.get('/:customerId', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.objectId);
    res.json(customer);
  } catch (err) {
    res.json({ message: err });
  }

});

// update specific customer
router.patch('/:customerId', async (req, res) => {
  try { // set part is the updated part, so updating customer number
    const updatedCustomer = await Customer.updateOne({_id: req.params.objectId},
        {$set: {customer_num: req.params.customer_num}}
        );
    res.json(updatedCustomer);

  } catch (err) {
    res.json({ message: err });
  }
});

// delete specific customer
router.delete('/:customerId', async (req, res) => {
  try {
    const removedCustomer = await Customer.remove({customer_num: req.params.customer_num});
    res.json(removedCustomer);
  }catch (err) {
    res.json({ message: err });
  }

});

module.exports = router;
