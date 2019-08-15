const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')
})

app.post('/user', (req, res)=> {
    let id = 4
    res.send(JSON.stringify(req.body) + ' id: ' + id)
    console.log(JSON.stringify(req.body))
})

app.listen(3000, ()=> {
    console.log('Express 4 online...')
})