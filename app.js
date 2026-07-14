const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://ananya_2004:Anyamongo@ac-owpbjf1-shard-00-00.9qx1pdq.mongodb.net:27017,ac-owpbjf1-shard-00-01.9qx1pdq.mongodb.net:27017,ac-owpbjf1-shard-00-02.9qx1pdq.mongodb.net:27017/petdb?ssl=true&replicaSet=atlas-3dap86-shard-0&authSource=admin&appName=Cluster0").then(

    () => {


console.log("mongodb connected")

    }


).catch(

(error) => {

        console.log(error)

}

)


const Pet=mongoose.model("Pets",new mongoose.Schema(

    {
          booking_id: String,
    pet_name: String,
    pet_type: String,
    breed: String,
    age: String,
    weight: String,
    vaccination_status: String,
    owner_name: String,
    owner_phone: String,
    owner_email: String,
    check_in_date: String,
    check_out_date: String,
    kennel_number: String
    }
 ))

    app.post("/view-pets", async (req,res) => {


        const pets=await Pet.find()

        res.json(pets)
    }
    )

    app.post("/add-pet" , async (req,res) => {

        await Pet.create(req.body)
        res.json({"Status":"Success"})

    }) 

    app.listen(3000, () => {

        console.log("server started")


    })