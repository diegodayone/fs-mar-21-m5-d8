import express, { json } from "express"
import { readFileJSON, appendToJSON } from "../utils/index.js"


const productsRouter = express.Router()

const dataFolder = "../data"
const jsonFile = "products.json"

// URL of the server : PORT / path I'm specifying in server.js / path I'm specifing for each enpoint
productsRouter.get("/", async(req,res,next) =>{
    res.send(await readFileJSON(dataFolder, jsonFile))
})

productsRouter.post("/", async(req,res,next) => {
    await appendToJSON(dataFolder, jsonFile, req.body)
    // const myproducts = await readJSON(filePath)
    // myproducts.push(req.body)
    // await fs.writeFile(filePath, JSON.stringify(myproducts))
    res.status(201).send("OK")
})

// productsRouter.get("/iphones", async(req,res,next) =>{
//     res.send([
//         {
//             name:"iPhone 12",
//             price: 1200
//         },
//         {
//             name:"iPhone 12 PRO",
//             price: 1500
//         }, 
//         {
//             name:"iPhone 12 MINI",
//             price: 900
//         }
//     ])
// })

// productsRouter.get("/:foo", async(req,res,next) =>{
//     res.send([
//         {
//             name:"iPhone 12" + req.params.foo,
//             price: 1200
//         }
//     ])
// })





export default productsRouter