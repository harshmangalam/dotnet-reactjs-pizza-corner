const {Schema,model} = require ("mongoose")
const pizzaSchema = new Schema({
    name:String,
    image:String,
    price:Number,
    description:String,
    isVeg:Boolean
});



exports.PizzaModel = model("Pizza",pizzaSchema)