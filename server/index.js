const express = require("express")
const fetch = require("node-fetch")
const app = express()

const cors = require("cors")

app.use(express.json())
app.use(cors())



const API_KEY = "4c7016a0"



app.get("/movies/:name",async (req, res)=>{
    const respo = await fetch(`http://www.omdbapi.com/?s=${req.params.name}&p=1&apikey=${API_KEY}`)
    const data = await respo.json()
    res.status(201).send(data)
})

app.get("/movie/:id",async (req, res)=>{
    const respo = await fetch(`https://www.omdbapi.com/?i=${req.params.id}&apikey=${API_KEY}`)
    const data = await respo.json()
    res.status(201).send(data)
})



app.listen(1500, ()=> console.log("running http://localhost:1500/"))
