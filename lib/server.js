const app = require('./app')
const express = require('express')
const {fallback} = require('./error-handlers')

const distFolder = './dist'
app.use('/', express.static(distFolder))
app.use(fallback(`${distFolder}/index.html`))

const port = process.env.PORT
app.listen(port, () => console.log(`> Listening on port ${port}`))
