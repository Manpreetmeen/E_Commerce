const express = require('express');
require("./db/config");
const users = require("./db/usersModel"); 
const Product = require("./db/product")


const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

app.post("/register",async (req, res) => {
        let user = new users(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password
        res.send(result)
})

app.post("/login", async (req, res) => {
        console.log(req.body)
        if(req.body.password && req.body.email){
                let data = await users.findOne(req.body).select("-password");
                if(data){
                        res.send(data)
                } else {
                        res.send("No User Found")
                }
        }
        else{
                res.send("No User Found")
        }
})

app.post("/add-product",async (req, res)=> {
       let product =  new Product(req.body);
       let result = await product.save();
       res.send(result)
})

app.get("/products", async (req, res) => {
        let produts = await Product.find();
        if(produts.length > 0){
                res.send(produts)
        } else {
                res.send("No result found")  
        }
})
app.delete("/product/:id",async (req, res) => {
        const result = await Product.deleteOne({_id : req.params.id})
        res.send(result);
})

app.get("/product/:id", async (req,res) => {
        let result = await Product.find({_id : req.params.id}); 
        if(result){
          res.send(result)
        } 
})

app.put("/product/:id", async (req, res)=> {
        let result = await Product.updateOne(
                {_id : req.params.id},
                { $set : req.body }
        )
        res.send(result);
});

app.get("/search/:key", async (req, res)=> {
        let result = await Product.find({
                "$or" : [
                        {name : {$regex : req.params.key }},
                        {company : {$regex : req.params.key }},
                        {category : {$regex : req.params.key }},
                ]
        });
        res.send(result);
})

app.listen(5000)