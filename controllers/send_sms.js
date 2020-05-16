
require("dotenv/config");
const Customer = require("../models/customer");
const accountSid = process.env.ACC_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'You are next in line! Please arrive in 5 minutes or else your spot will be removed.',
        from: '+REGISTERED NUMBER FROM',
        to: 'REGISTERED NUMBER HERE'
    })
    .then(message => console.log(message.sid));
