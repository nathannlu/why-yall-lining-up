const Customer = require('../models/customer.js')
const accountSid = 'ACd5f60303dea5661be27b5e9055caa537';
const authToken = '45bb9497e3cc84e25e757f6623a55cee';
const client = require('twilio')(accountSid, authToken);

const notifyUsers = () => {
	Customer.find().then(customers => {
		customers.forEach(customer => {
			const currentDate = new Date();
			const changeInTime = (currentDate - customer.time_stamp)
					
			if(millisToMinutes(changeInTime) > 15) {
				// Send message with twilio
				client.messages
					.create({body: 'Hi there!', from: '+12057408085', to: '+17785130738'})
					.then(message => console.log(message.sid));


				// Delete id off database
				Customer.findByIdAndDelete(customer.id, (err) => {
					if (err) console.log(err)
				});
			}
		})
	})
}

const millisToMinutes = millis => {
  var minutes = Math.floor(millis / 60000);
  return minutes
}

module.exports = notifyUsers
