const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

require('./server/routes')(app)

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}))

app.listen(3000, () => console.log('App Listen in port http://localhost:3000'))