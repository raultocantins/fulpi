require('dotenv').config()
const express=require('express')
const cors=require('cors')
const Routes=require('./routes')
const app=express()
app.use(cors())
app.use(Routes)
app.use(express.json())
app.set('view engine','ejs')
app.use(function (req,res,next){
	res.status(404).send("<h1>This is not the exist!</h1>");
});


app.listen(3000,()=>{
    console.log('Backend started!!')
})
