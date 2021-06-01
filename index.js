const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static("webapp"))

app.get('/z', (req, res) => {
  res.send('Hello Zaid!')
})
app.post('/', (req, res) => {
    //reception des donnee
    // connexion a la base 
    //insertion des infos
    //gerer la reponse
    res.send('shgkdghhjsbc,;<sbh!')
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
