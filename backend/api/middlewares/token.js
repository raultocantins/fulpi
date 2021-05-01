const authentication=(req,res,next)=>{
console.log('têm token!!!!')
next()
}
module.exports= authentication