const { Router } = require("express");
const authorRouter = Router();

const Author = require("./model");

const { addAuthor, getSingleBookByAuthor } = require("./controllers");

authorRouter.post("/authors/addAuthor", addAuthor);

authorRouter.get(
  "/authors/getSingleBookByAuthor/:authorname",
  getSingleBookByAuthor
);
