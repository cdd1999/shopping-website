const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");


//secret key of stripe below
const stripe = require("stripe")
(
  'REDACT'
);

//to set up a api
//app config
const app = express();

//middlewares
app.use(cors({ origin:true })); // cors is like security
app.use(express.json());

//api routes
app.get('/', (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total; //u can use request param also
  console.log('Payment request received', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "INR",//dollars u nneed to provide more details since international payment
  });


  //OK
  response.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen
exports.api = functions.https.onRequest(app);
