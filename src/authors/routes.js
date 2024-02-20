const { Router } = require("express");
const authorRouter = Router();

const Author = require("./model");

const { addAuthor } = require("./controllers");

authorRouter.post("/authors/addAuthor");
