const dotenv = require('dotenv')
const express = require('express')
const app = express();
const cors = require('cors')

// middlewares
app.use(express.json())
dotenv.config();
app.use(cors())


require('./database/connection')
require('./model/userSchema')
app.use(require('./routes/auth'))


app.listen(process.env.PORT|| 5000)