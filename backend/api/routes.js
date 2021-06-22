const express = require("express");
const cors = require('cors')
const router = express.Router();
const { save_user, signin, validateToken, signinTest ,signinWriter} = require("./middlewares/auth");
const { setGenre, getGenres } = require("./middlewares/genres");
const { getHistorys, setHistory,getHistoryById } = require('./middlewares/historys')
const { setImageUser ,favoriteHistory,likeBook} = require('./middlewares/user')
const authenticate = require("./middlewares/passport");
const multerImageProfile = require("./multer");
const multerFileHistory = require("./multerFileHistory")
const multer = require('multer')
//import middlewares
router.use(express.json());
router.use(cors())

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

//VALIDATE TOKEN
router.post("/validateToken", validateToken);

//Upload user image
router.post("/user/image",[authenticate(), multer(multerImageProfile).single("file")], setImageUser);

//Add book favorite
router.post('/favorite/book/:id',authenticate(),favoriteHistory)

//Like book
router.post('/like/book/:id',authenticate(),likeBook)

//finished book
router.post('/finished/book/:id',authenticate(),likeBook)


//Upload file history test
router.post("/history/uploads", multer(multerFileHistory).single("file"), (req,res)=>{
  res.json({url:req.file.location})
});

router.get('/test',(req,res)=>{
  res.send('ok')
})




module.exports = router;
