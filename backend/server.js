console.log("Starting server file...")

const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req,res)=>{
   res.send("Doc-Store backend running...")
})
 
app.get("/api/test", (req,res)=>{
   res.json({
      message: "Doc-Store API working"
   }) 
}) 
  
app.listen(5500, ()=>{
   console.log("Server running on port 5500") 
}) 