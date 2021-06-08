const express = require("express");

const router = express.Router();
const { save_user, signin, validateToken,signinTest } = require("./middlewares/auth");
const { setGenre, getGenres } = require("./middlewares/genres");
//const passportValid = require("./middlewares/passport");
//const upload = require("./multer");
//import middlewares
router.use(express.json());

//get genres
router.get("/genres", validateToken, getGenres);
router.post("/genres",validateToken, setGenre);

//register user
router.post("/auth/register/user", save_user);

//login user
router.post("/auth/signin", signin);

//login user test
router.post("/auth/signinteste", signinTest);

//VALIDATE TOKEN
router.post("/validateToken", validateToken);

/*router.post("/upload", upload.single("file"), (req, res) => {
  res.send("Upload com sucesso!!!");
});*/

module.exports = router;
