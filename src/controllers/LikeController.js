const Devs = require('../models/Dev');
module.exports = {
    async Store(req, res) {
        console.log(req.params.devId);
        console.log(req.headers.user);

        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Devs.findById(user);
        const targetDev = await Devs.findById(devId);

        if (!targetDev) {
            return res.status(400).json({ error: 'Dev not exists' });
        }
        if (targetDev.likes.includes(loggedDev._id)) {
            console.log('DEU MATCH');
        }
        loggedDev.likes.push(targetDev._id)

        await loggedDev.save();

        return res.json(loggedDev);
    }
};