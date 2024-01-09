import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import router from "./src/routes/productRoute.js"

const app=express()

app.use(express.json())
app.use(cors())

dotenv.config()
const password =process.env.PASSWORD
const url=process.env.CONNECTION_URL.replace("<password>",password)
const port = process.env.PORT

app.use("/api",router)

mongoose.connect(url).then(res=>console.log("Database Connected")).catch(err=>console.log(err))

app.listen(port,()=>{
    console.log("Server 4000 portunda isleyir");
})

