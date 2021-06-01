const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const Contrat = require("./DBtable");
var pdf = require('html-pdf');
app.use(express.json())
app.use(express.static("webapp"))

app.get('/contract', (req, res) => {
  Contrat.findAll().then((data) => {
    res.json(data);
  })
})
app.post('/contract', (req, res) => {
  Contrat.create(req.body).then((data) => {
    res.json(data);
  })
})
app.use('/contract/:id', (req, response) => {
  Contrat.findOne({
    where: {
      id: req.params.id
    }
  }).then((data) => {
    if (data) {
      var html = fs.readFileSync('htmls/contract.html', 'utf8');
      html = html.replace('{nom}',data.nom)
      html = html.replace('{prenom}',data.prenom)
      // html = html.replace('{nom}',data.nom)
      // html = html.replace('{nom}',data.nom)
      // html = html.replace('{nom}',data.nom)
      // html = html.replace('{nom}',data.nom)
      pdf.create(html).toStream(function(err, res){
        if (err) return console.log(err);
        response.setHeader('Content-Type', 'application/pdf');
        response.setHeader('Content-Disposition', 'inline; filename=Devis.pdf');
        res.pipe(response);
      });
    } else {
      response.end('No data in database')
    }



  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
