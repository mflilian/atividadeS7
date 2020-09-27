const distopias = require('../model/lista-distopias.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(distopias);
}

module.exports = { getAll };