const express = require("express");
const morgan = require("morgan");
const moragn = require("morgan")
const {pizzaRoutes} = require("./routes");
const app = express();

app.use(express.json());
app.use(morgan("dev"))
app.get("/",(req,res,next)=>{
    res.status(200).json({"message":"Server is up and running"})
})
app.use("/api/pizza", pizzaRoutes);

app.get("*", (req, res, next) => {
  const error = {
    status: 404,
    message: "API endpoint does not exists",
  };
  next(error);
});
app.use("*", (err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  const data = err.data || null;
  res.status(status).json({
    type: "error",
    message,
    data,
  });
});

app.listen(4000, () => console.log("listening on port 4000"));
