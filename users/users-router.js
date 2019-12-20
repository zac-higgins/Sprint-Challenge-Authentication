const router = require('express').Router();
const restricted = require('../auth/authenticate-middleware');
const Users = require('./users-model.js');

router.get('/', restricted, (req, res) => {

    Users.getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "there was a problem retrieving the users" })
        })

    // const { department } = req.token
    // if (req.token.department === 'admin') {
    //     Users.getUsers()
    //         .then(users => {
    //             res.json(users);
    //         })
    // } else {
    //     Users.getUsersBy({ department })
    //         .then(users => {
    //             res.json(users);
    //         })
    //         .catch(err => res.send(err));
    // }
});

module.exports = router;