const express = require("express");
const cors=require('cors')
const router = express.Router();
const { save_user, signin, validateToken,signinTest } = require("./middlewares/auth");
const { setGenre, getGenres } = require("./middlewares/genres");
const {getHistorys,setHistory}=require('./middlewares/historys')
const authenticate = require("./middlewares/passport");
//const upload = require("./multer");
//import middlewares
router.use(express.json());
router.use(cors())
//get genres
router.get("/genres", authenticate(), getGenres);
router.post("/genres",authenticate(), setGenre);

//get historys
router.get("/historys",authenticate(),getHistorys);

//set history
router.post("/history",authenticate(),setHistory)

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
