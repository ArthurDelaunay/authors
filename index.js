const express = require("express")
const app = express()
const authors = require("./routes/authors")
const json = require("./routes/json")
const port = 5000

app.get("/", (req, res) => {
  res.send("Authors API")
})

app.use("/authors", authors)
app.use("/json/authors", json)

app.listen(port, () => {
  console.log("Server started on port: " + port)
})
