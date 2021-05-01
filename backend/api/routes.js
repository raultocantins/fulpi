const express = require("express");
const router = express.Router();
const auth=require('./middlewares/token')
router.all('/*',[auth],(req,res,next)=>{ 
  next()
})


router.get("/genres", (req, res) => {
  res.send("Irá devolver lista de gêneros de historias");
});

router.get("/genres/:type", (req, res) => {
  const type = req.params.type;
  res.send("Irá devolver todas as historias do tipo " + type);
});

router.get("/genres/:type/:id", (req, res) => {
  const type = req.params.type;
  const history = req.params.id;
  res.send(`Irá devolver a historia ${history} do gênero ${type} `);
});


module.exports = router;
