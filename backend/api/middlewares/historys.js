const db = require('../../database/db')
const getHistorys = async (req, res) => {
    await db('historyDevelopment').select('id', 'name', 'image', 'prefacio', 'score', 'escritor', 'lancamento', 'genero', 'link', 'distribuidora').then(historys => {
        res.json(historys);
    })

}

const setHistory = async (req, res) => {

    var history = req.body.history
    const newHistory = {
        name: history.name,
        image: history.image,
        prefacio: history.prefacio,
        score: history.score || null,
        escritor: history.escritor,
        lancamento: history.lancamento,
        genero: history.genero,
        link: history.link,
        distribuidora: history.distribuidora
    }
    await db('historyDevelopment').insert(newHistory).then(_ => res.status(204).send('Inserção concluida!'))
        .catch(err => { res.status(500).send(err) })



}

module.exports = { getHistorys, setHistory };
