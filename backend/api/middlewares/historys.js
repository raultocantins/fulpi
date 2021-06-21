const db = require('../../database/db')
const orderBygenre=require('../../workers/orderBygenre')

const getHistorys = async (req, res) => {
    const favorites=await db("user02").select("favoritos").where({ id: req.user.id }) 
    const data = await db('historyDevelopment02').select('id', 'name', 'image', 'escritor','prefacio','score','lancamento','genero','link','distribuidora','status').then(historys => {
        return historys
    })

   var historys= orderBygenre(data,favorites)
    res.json(historys)
    

}
const getHistoryById = async (req, res) => {
    const id=req.params.id
    const history = await db('historyDevelopment02').select('id', 'name', 'image', 'escritor','prefacio','score','lancamento','genero','link','distribuidora','status').where({id:id}).first().then(history => {
        return history
    }).catch(err=>res.status(500).send(err))
    res.json(history)
  
}

const setHistory = async (req, res) => {
    var history = req.body.history
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
        status:false
    }
    await db('historyDevelopment02').insert(newHistory).then(_ => res.status(204).send('Inserção concluida!'))
        .catch(err => { console.log(err); res.status(500).send(err) })



}

module.exports = { getHistorys, setHistory,getHistoryById };
