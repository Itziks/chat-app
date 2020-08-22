const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

require('dotenv').config()
app.use(express.json())
app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`*** Server is up and running on port ${port} ***`)
})

