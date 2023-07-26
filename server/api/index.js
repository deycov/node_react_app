const express = require("express");
const app = express();
const port = 5000;

app.get("/api", (req,res)=>{
  res.json([
    {nombre: "Adrian"},
    {nombre: "Ricardo"},
    {nombre: "Tiffany"}
  ])
})

app.listen(port,()=>{
  console.log(`Server on port ${port}`);
})