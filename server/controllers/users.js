const User = require('../models').User
const Post = require('../models').Post

module.exports = {
    create(req, res) {
        return User
            .create({
                name: req.body.name,
                email: req.body.email
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error))
    },

    list(req, res) {
        return User
            .findAll({
                include: [{
                    model: Post
                }]
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))
    },

    retrieve(req, res) {
        return User
            .findById(req.params.userId, {
                include: [{
                    model: Post
                }]
            })
            .then(user => {
                if (!user) {
                  return res.status(404).send({
                    message: 'User Not Found',
                  });
                }
                return res.status(200).send(user);
              })
              .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        return User
            .findById(req.params.userId, {
                include: [{
                    model: Post
                }]
            })
            .then(user => {
                if (!user) {
                  return res.status(404).send({
                    message: 'User Not Found',
                  });
                }
                return user
                    .update({
                        name: req.body.name || user.name,
                        email: req.body.email || user.email
                    })
                    .then(() => res.status(200).send(user))
              })
              .catch(error => res.status(400).send(error));
    },

    destroy(req, res) {
        return User
            .findById(req.params.userId)
            .then(user => {
                if (!user) {
                  return res.status(404).send({
                    message: 'User Not Found',
                  });
                }
                return user
                    .destroy()
                    .then(() => res.status(204).send())
              })
              .catch(error => res.status(400).send(error));
    },
}