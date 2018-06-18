const usersController = require('../controllers').users
const postsController = require('../controllers').posts

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to Posts API'
    }))

    app.post('/api/users', usersController.create)
    app.get('/api/users', usersController.list)
    app.get('/api/users/:userId', usersController.retrieve)
    app.put('/api/users/:userId', usersController.update)
    app.delete('/api/users/:userId', usersController.destroy)

    app.post('/api/users/:userId/posts', postsController.create)
    app.put('/api/users/:userId/posts/:postId', postsController.update)
    app.delete('/api/users/:userId/posts/:postId', postsController.destroy)
}