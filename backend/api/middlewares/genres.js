const db = require('../../database/db')
const setGenre = (req, res) => {
    const genre = req.body
    db('genres')
        .insert(genre)
        .then(_ => res.status(204).send('Inserção concluida!'))
        .catch(err => { res.status(500).send(err) })
}
const getGenres = async (req, res) => {
    await db('genres')
        .select('id', 'name', 'image')
        .then(genres => {
            res.json(genres)
        })
        .catch(_ => res.status(400).send('Nenhum dado cadastrado!'))
}
module.exports = { setGenre, getGenres };