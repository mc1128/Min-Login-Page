const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mincheol:as123123@mins.vdx82.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
.catch(() => console.log('error'))



app.get('/', (req, res) => res.send('hello world!'))

app.listen(port, () => console.log(`Example ${port}`))

