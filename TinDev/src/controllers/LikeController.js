const Devs = require('../models/Dev');
module.exports = {
    Store(req, res) {
        console.log(req.params.devId)

        return res.json({ ok: true });
    }
};