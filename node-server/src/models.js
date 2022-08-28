const { Schema, model } = require("mongoose");
const pizzaSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  isVeg: Boolean,
  category: {
    id: String,
    name: String,
    image: String,
  },
});

exports.PizzaModel = model("Pizza", pizzaSchema);
