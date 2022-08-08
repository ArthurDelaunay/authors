const express = require("express")
const app = express()

const authors = [
  {
    id: 1,
    name: "Lawrence Nowell",
    nationality: "UK",
    books: ["Beowulf"],
  },
  {
    id: 2,
    name: "William Shakespeare",
    nationality: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
  },
  {
    id: 3,
    name: "Charles Dickens",
    nationality: "US",
    books: ["Oliver Twist", "A Christmas Carol"],
  },
  {
    id: 4,
    name: "Oscar Wilde",
    nationality: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
  },
]
app.get("/:id", (req, res) => {
  const currentAuthor = authors.find((author) => {
    return author.id === Number(req.params.id)
  })
  if (currentAuthor) {
    res.json(`${currentAuthor.name}, ${currentAuthor.nationality} `)
  } else {
    res.status(404).json("no ID found")
  }
})

app.get("/:id/books", (req, res) => {
  const currentAuthor = authors.find((author) => {
    return author.id === Number(req.params.id)
  })
  if (currentAuthor) {
    res.json(`${currentAuthor.books}`)
  } else {
    res.status(404).json("no ID found")
  }
})

module.exports = app
