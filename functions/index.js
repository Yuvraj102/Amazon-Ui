const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("STRIPE-SECRET-KEY-HERE");

// API

// -  App config
const app = express();

// -  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -  API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received BOOM!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.ceil(total), //subunits of the currency
    currency: "inr",
  });
  // console.log("sending client secret", paymentIntent.client_secret);
  // 201 - OK and Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -  Listen command

exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-caeed/us-central1/api
