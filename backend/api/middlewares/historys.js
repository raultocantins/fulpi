const db = require("../../database/db");
const orderBygenre = require("../../workers/orderBygenre");

const getHistorys = async (req, res) => {
  const data = await db("historyfull")
    .select(
      "id",
      "name",
      "image",
      "writer",
      "describe",
      "favorite",
      "likes",
      "writtenin",
      "genre",
      "link",
      "publisher",
      "status",
      "createdAt"
    )
    .then((historys) => {
      return historys;
    });
  var historys = orderBygenre(data);
  res.json(historys);
};
const getHistoryById = async (req, res) => {
  const id = req.params.id;
  const history = await db("historyfull")
    .select(
      "id",
      "name",
      "image",
      "writer",
      "describe",
      "favorite",
      "likes",
      "writtenin",
      "genre",
      "link",
      "publisher",
      "status",
      "createdAt"
    )
    .where({ id: id })
    .first()
    .then((history) => {
      return history;
    })
    .catch((err) => res.status(500).send(err));
  res.json(history);
};

const setHistory = async (req, res) => {
  var history = req.body.history;
  const newHistory = {
    name: history.name,
    image: history.image,
    prefacio: history.prefacio,
    score: history.score ? history.score : 0,
    escritor: history.escritor,
    lancamento: history.lancamento,
    genero: history.genero,
    link: history.link,
    distribuidora: history.distribuidora,
    userId: req.user.id,
    status: false,
  };
  await db("historyfull")
    .insert(newHistory)
    .then((_) => res.status(204).send("Inserção concluida!"))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const getBooksByGenre = async (req, res) => {
  let genre = req.query.genre;
  const page = req.query.page;
  return db("historyfull")
    .where({ genre: genre })
    .paginate({
      perPage: 5,
      currentPage: page,
    })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = { getHistorys, setHistory, getHistoryById, getBooksByGenre };
