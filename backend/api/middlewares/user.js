const db = require('../../database/db')

const setImageUser = async (req, res) => {
    await db("user")
        .update({ image: req.file.location })
        .where({ id: req.user.id })
        .then((_) => {
            res.json({ url: req.file.location });
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send(err);
        });
}
const favoriteHistory = async (req, res) => {
    var history = parseInt(req.params.id)
    var favoritos = await db("user02").select("favoritos").where({ id: req.user.id })
    var historys = favoritos[0].favoritos

    await db("user02")
        .update({ favoritos: [...favoritos[0].favoritos, history] })
        .where({ id: req.user.id })
        .then((_) => {
            res.status(204)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send(err);
        });

}

module.exports = { setImageUser, favoriteHistory }