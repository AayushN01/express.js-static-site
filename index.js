const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const host = 'http://127.0.0.1'

// app.use('/static',express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
    // res.status(500)
})

app.get('/about', (req, res) => {
    // res.send('About Page!')
    res.sendFile(path.join(__dirname,'about.html'))
  })

app.get('/contact', (req, res) =>{
    res.sendFile(path.join(__dirname,'contact.html'))
})

app.get('/hello', (req, res) => {
   res.json({"text":"Hello World!"})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${host}:${port}`)
})