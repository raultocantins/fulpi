const express = require("express");
const router = express.Router();
const auth = require("./middlewares/token");
const upload = require('./multer')
router.use(express.json())
//import middlewares
const { setGenre, getGenres } = require('./middlewares/genres')

//get genres
router.get("/genres", getGenres);

//set new genre
router.post("/genres", setGenre)


/*router.post("/upload", upload.single("file"), (req, res) => {
  res.send("Upload com sucesso!!!");
});*/

module.exports = router;
