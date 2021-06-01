const express = require('express')
const app = express()
const port = 3000
const Contrat = require("./DBtable");
const mockContract = {

  prenom: "",
  nom: "",

}
app.use(express.json())
app.use(express.static("webapp"))

app.get('/contract', (req, res) => {
  Contrat.findAll().then((data) => {
    res.json(data);
  })
})
app.post('/contract', (req, res) => {
  //reception des donnee
  // connexion a la base 
  //insertion des infos
  //gerer la reponse
  Contrat.create(req.body).then((data) => {
    res.json(data);
  })
})
app.use('/contract/:id', (req, res) => {
  Contrat.findOne({where:{
    id:req.params.id
  }}).then((data) => {
    res.json(data);
  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
