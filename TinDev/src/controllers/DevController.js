const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {
    async Store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username })
        if (userExists) {
            return res.json(userExists);
        }

        const Response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = Response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });
        return res.json(dev)
    }
};