const express = require("express");
const cors = require('cors')
const router = express.Router();
const { save_user, signin, validateToken, signinTest ,signinWriter} = require("./middlewares/auth");
const { setGenre, getGenres } = require("./middlewares/genres");
const { getHistorys, setHistory,getHistoryById } = require('./middlewares/historys')
const { setImageUser } = require('./middlewares/user')
const authenticate = require("./middlewares/passport");
const multerImageProfile = require("./multer");
const multerFileHistory = require("./multerFileHistory")
const multer = require('multer')
//import middlewares
router.use(express.json());
router.use(cors())
//get genres
router.get("/genres", authenticate(), getGenres);
router.post("/genres", authenticate(), setGenre);

//get historys
router.get("/historys", authenticate(), getHistorys);

//get history BY ID
router.get("/history/:id",  getHistoryById);

//set history
router.post("/history", authenticate(), setHistory)

//register user
router.post("/auth/register/user", save_user);

//login user
router.post("/auth/signin", signin);


//login writer
router.post("/auth/signin/writer", signinWriter);


//login user test
router.post("/auth/signinteste", signinTest);

//VALIDATE TOKEN
router.post("/validateToken", validateToken);


//Upload user image
router.post("/user/image",[authenticate(), multer(multerImageProfile).single("file")], setImageUser);


//Upload file history test
router.post("/history/uploads", multer(multerFileHistory).single("file"), (req,res)=>{
  res.json({url:req.file.location})
});

router.get('/test',(req,res)=>{
  res.send('ok')
})




module.exports = router;
