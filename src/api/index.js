const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();
const port = process.env.PORT || 4000;

const ProductsRouter = require("./routes/Products");
const SubmissionRouter = require("./routes/Submission");
const UserInformationRouter = require("./routes/UserInformation");
const ProdAndSubRouter = require("./routes/Products-and-Submission");
const OrdersRouter = require("./routes/Orders");

app.use(cors()); // Use the cors middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/products", ProductsRouter);
app.use("/submission", SubmissionRouter);
app.use("/userinformation", UserInformationRouter);
app.use("/products-and-submission", ProdAndSubRouter);
app.use("/orders", OrdersRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
