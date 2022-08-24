const {Router}  = require("express");
const {PizzaModel} = require("./models")

const pizzaRoutes = Router()

pizzaRoutes.get("/",async (req,res,next)=>{
    try {
        const pizza = await PizzaModel.find()
        return res.status(200).json(pizza)

    } catch (error) {
        return next(error)
    }
})


pizzaRoutes.get("/:id",async (req,res,next)=>{
    try {
        // get pizza by id 
        const pizza = await PizzaModel.findById(req.params.id);
        if(!pizza){
            next({status:404,error:"Pizza not found"})
        }
        return res.status(200).json(pizza)

    } catch (error) {
        next(error)
    }
})


pizzaRoutes.post("/",async (req,res,next)=>{
    try {
      
        const pizza = await PizzaModel.create({
            ...req.body
        })
       
        return res.status(200).json(pizza)

    } catch (error) {
        next(error)
    }
})


exports.pizzaRoutes = pizzaRoutes