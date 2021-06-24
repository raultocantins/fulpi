const authSecret =
  "f4f62bc83fa5c7b98ee1d1f849a0904edbd3c7b1db8aa9fcbfa4f16158321cf2fc61423acd9fcf320f15453a671acbffda117615db9f1d5b48a0bae3fc155bbf";
const jwt = require("jsonwebtoken");
const jwtSimple = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");
const db = require("../../database/db");
function existsOrError(value, msg) {
  if (!value) throw msg;
  if (Array.isArray(value) && value.length === 0) throw msg;
  if (typeof value === "string" && !value.trim()) throw msg;
}

function notExistsOrError(value, msg) {
  try {
    existsOrError(value, msg);
  } catch (msg) {
    return;
  }
  throw msg;
}

function equalsOrError(valueA, valueB, msg) {
  if (valueA !== valueB) throw msg;
}

const signin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send("Informe o usuário e senha!");
  }
  const user = await db("user02").where({ email: req.body.email }).first();

  if (!user) return res.status(400).send("Usuário não encontrado!");
  const isMath = bcrypt.compareSync(req.body.password, user.password);
  if (!isMath) return res.status(401).send("E-mail/senha inválidos!");
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    writer: user.writer,
    image: user.image,
    iat: now,
    exp: now + 60 * 60 * 24,
  };
  res.json({
    ...payload,
    token: jwtSimple.encode(payload, authSecret),
  });
};

const signinWriter = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send("Informe o usuário e senha!");
  }
  const user = await db("user02").where({ email: req.body.email }).first();

  if (!user) return res.status(400).send("Usuário não encontrado!");
  const isMath = bcrypt.compareSync(req.body.password, user.password);
  if (!isMath) return res.status(401).send("E-mail/senha inválidos!");
  const now = Math.floor(Date.now() / 1000);
  if (!user.writer) {
    const updated = await db("user02")
      .where({ email: req.body.email })
      .first()
      .update({ writer: true });
    if (updated) {
      const userUpdated = await db("user02")
        .where({ email: req.body.email })
        .first();
      const payload = {
        id: userUpdated.id,
        name: userUpdated.name,
        email: userUpdated.email,
        writer: userUpdated.writer,
        image: userUpdated.image,
        iat: now,
        exp: now + 60 * 60 * 24,
      };
      res.json({
        ...payload,
        token: jwtSimple.encode(payload, authSecret),
      });
    }
  } else {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      writer: user.writer,
      image: user.image,
      iat: now,
      exp: now + 60 * 60 * 24,
    };
    res.json({
      ...payload,
      token: jwtSimple.encode(payload, authSecret),
    });
  }
};

const validateToken = async (req, res, next) => {
  //const userData = req.body || null;
  const authHeader = req.headers["authorization"];
  const token = authHeader ? authHeader.split(" ")[1] : null;
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, authSecret, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const save_user = async (req, res) => {
  const user = { ...req.body };

  if (req.params.id) user.id = req.params.id;
  // if (user) user.createAt = new Date().toLocaleString();
  try {
    const userFromDB = await db("user02").first().where({ email: user.email });

    if (!user.id) {
      notExistsOrError(userFromDB, "Usuário já cadastrado");
    }
  } catch (msg) {
    return res.status(400).send(msg);
  }

  if (user.id) {
    // delete user.createAt;
    db("user02")
      .update(user)
      .where({ id: user.id })
      .then((_) => {
        res.status(204).send("Atualização concluida!");
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else if (user) {
    user.password = encryptPassword(user.password);

    db("user02")
      .insert(user)
      .then((_) => res.status(204).send("Inserção concluida!"))
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(500).send("Erro ao tentar cadastrar usuário!");
  }
};

/*


const remove = async (req, res) => {
  try {
    const rowsDelete = await app
      .db("users")
      .update({ deletedAt: new Date() })
      .where({ id: req.params.id, gymId: req.user.id });
    existsOrError(rowsDelete, "Usuário não foi encontrado!");
    res.status(204).send();
  } catch (e) {
    res.status(400).send(e);
  }
};
const getUser = async (req, res) => {
  app
    .db("users")
    .select("id", "name", "number", "days", "gymId", "height", "weight")
    .where({ id: req.params.id, gymId: req.user.id })
    .whereNull("deletedAt")
    .first()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};*/
const signinTest = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send("Informe o usuário e senha!");
  }

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    id: 15,
    name: "Alex raul santo araujo",
    email: "alexbraul.ar@gmail.com",
    iat: now,
    exp: now + 60 * 60 * 24,
  };
  res.json({
    ...payload,
    token: jwtSimple.encode(payload, authSecret),
  });
};

module.exports = { signin, validateToken, save_user, signinTest, signinWriter };
