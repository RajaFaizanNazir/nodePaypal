/**************************************** */
process.env.PORT = 5000;
/**************************************** */
const express = require("express");
const bodyParser = require("body-parser");
/**************************************** */
// const transactionsRoutes = require("./routes/transactions-routes");
// const HttpError = require("./util/http-error");
/**************************************** */
const app = express();
/**************************************** */
app.use(bodyParser.json());
/**************************************** */
app.get("/api", async (req, res, next) => {});
/**************************************** */
app.use((req, res, next) => {
  res.status(400).json({ message: "can not find this route" });
});
/**************************************** */
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});
/**************************************** */
app.listen(process.env.PORT, () => {
  console.log("Server is up port " + process.env.PORT);
});
/**************************************** */
