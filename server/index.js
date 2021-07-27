const express = require('express')
const PORT = process.env.PORT || 4000
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/db')
const app = express()

mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose
  .connect(config.database, { useNewUrlParser: true })
  .then(() => {
    console.log('Database is connected')
  })
  .catch((error) => {
    console.log({ database_error: error })
  })

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))

require('./api/model/Player')
require('./api/model/PlayerInfos')
require('./api/model/PlayerStats')
require('./api/model/Team')
require('./api/model/TeamDetails')
require('./api/model/TeamRoster')

const routes = require('./api/routes/index')
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
