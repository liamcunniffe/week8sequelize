const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const {
  addBook,
  getAllBooks,
  getSingleBookByTitle,
  updateBookTitle,
  delSingleBookByTitle,
} = require("./controllers");

bookRouter.post("/books/addBook", addBook);

bookRouter.get("/books/getAllBooks", getAllBooks);

bookRouter.get("/books/getSingleBookByTitle/:title", getSingleBookByTitle);

bookRouter.put("/books/:title", updateBookTitle);

bookRouter.delete("/books/:title", delSingleBookByTitle);

module.exports = bookRouter;
