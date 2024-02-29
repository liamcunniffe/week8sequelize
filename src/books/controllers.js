const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      GenreId: req.body.GenreId,
    });

    res.status(201).json({ message: `${book.title} was added`, book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllBooks = async (req, res) => {
  const books = await Book.findAll({ include: "Genre" });
  res.send(books);
};

const getSingleBookByTitle = async (req, res) => {
  const book = await Book.findOne({ where: { title: req.params.title } });
  res.send({ message: "success", book: book });
};

const updateBookTitle = async (req, res) => {
  console.log(req.body);
  return res.json({
    title: "new amazing title",
  });
};

const delSingleBookByTitle = async (req, res) => {
  try {
    const book = await Book.deletOne({
      title: req.params.title,
    });
    res.json({ deletedCount: result.deletedCount });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  getSingleBookByTitle: getSingleBookByTitle,
  updateBookTitle: updateBookTitle,
  delSingleBookByTitle: delSingleBookByTitle,
};
