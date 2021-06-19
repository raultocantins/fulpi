const db = require('../../database/db')

const setImageUser = async(req, res) => {  
    await db("user")
        .update({ image: req.file.location })
        .where({ id: req.user.id})
        .then((_) => {
            res.json({ url: req.file.location });
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send(err);
        });
}

module.exports = { setImageUser }