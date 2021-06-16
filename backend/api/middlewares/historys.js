const db = require('../../database/db')
const orderBygenre=require('../../workers/orderBygenre')

const getHistorys = async (req, res) => {
    const data = await db('historyDevelopment02').select('id', 'name', 'image', 'prefacio', 'score', 'escritor', 'lancamento', 'genero', 'link', 'distribuidora', 'userId').then(historys => {
        return historys
    })

   var historys= orderBygenre(data)
    res.json(historys)
    //res.json(teste.map(e=>e.action));
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
        userId: req.user.id
    }
    await db('historyDevelopment02').insert(newHistory).then(_ => res.status(204).send('Inserção concluida!'))
        .catch(err => { console.log(err); res.status(500).send(err) })



}

module.exports = { getHistorys, setHistory };
