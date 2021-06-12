const db = require('../../database/db')

const setImageUser = (req, res) => {
    db("user")
        .update({ image: req.file.url })
        .where({ id: payload.id })
        .then((_) => {
            res.status(204).json({ url: req.file.url });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}

module.exports = { setImageUser }