import express from "express"
//const express = require("express")
import cors from "cors"

import productsRouter from "./products/index.js"

// const whitelist = [ process.env.WHITELIST_LOCAL, process.env.WHITELIST_DEV, process.env.WHITELIST_PROD]
const whitelist = process.env.WHITELIST.split(",")
console.log(whitelist)

const server = express()
server.use(cors({
    origin: function(origin, next) {
        // console.log("ORIGIN", origin)
        if (whitelist.includes(origin)) {
            next(null, true)
        }
        else{
            next(new Error("CORS PROBLEM: ORIGIN NOT SUPPORTED " + origin))
        }
    }
}))
server.use(express.json())

const port = process.env.PORT || 3001

server.get("/test", (req,res,next) => {
    res.send({
        response: "OK"
    })
})

server.use("/products", productsRouter)

server.listen(port, () => console.log("The server is up & running", port))