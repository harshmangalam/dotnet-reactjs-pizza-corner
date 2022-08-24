const {Router}  = require("express");
const {PizzaModel} = require("./models")

const router = Router()

router.get("/pizza",async (req,res,next)=>{
    try {
        // get all pizza
        const pizza = await PizzaModel.find();
        return res.status(200).json(pizza)

    } catch (error) {
        next(error)
    }
})


router.get("/pizza/:id",async (req,res,next)=>{
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


router.post("/pizza/",async (req,res,next)=>{
    try {
      
        const pizza = await PizzaModel.create({
            ...req.body
        })
       
        return res.status(200).json(pizza)

    } catch (error) {
        next(error)
    }
})


module.exports = router