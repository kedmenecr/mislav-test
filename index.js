const express = require("express")
const app = express()
const PORT = 8080


app.get("/", () => {
  console.log("Mislav je čovek")
  res.send("Hello Mislav from Cakovec")
})

app.listen(PORT,() => {
console.log("listening at " + PORT)} )
