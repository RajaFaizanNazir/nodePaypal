var paypal = require("paypal-rest-sdk");
paypal.configure({
  mode: "sandbox", // or 'live' for production
  client_id: "your-client-id",
  client_secret: "your-client-secret",
});
var plan_attributes = {
  name: "T-Shirt of the Month Club Plan",
  description: "Template creation.",
  type: "fixed",
  payment_definitions: [
    {
      name: "Regular payment definition",
      type: "REGULAR",
      frequency: "MONTH",
      frequency_interval: "1",
      amount: {
        value: "9.99",
        currency: "USD",
      },
      cycles: "12",
      charge_models: [
        {
          type: "SHIPPING",
          amount: {
            value: "0",
            currency: "USD",
          },
        },
        {
          type: "TAX",
          amount: {
            value: "0",
            currency: "USD",
          },
        },
      ],
    },
  ],
  merchant_preferences: {
    auto_bill_amount: "yes",
    initial_fail_amount_action: "continue",
    max_fail_attempts: "0",
    return_url: "http://return.url",
    cancel_url: "http://cancel.url",
  },
};
paypal.billingPlan.create(plan_attributes, function (error, billingPlan) {
  if (error) {
    console.log(error);
    throw error;
  } else {
    console.log("Create Billing Plan Response");
    console.log(billingPlan);
  }
});
