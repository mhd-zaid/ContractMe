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
      html = html.replace('{DN}',data.date_de_naissance)
      html = html.replace('{LN}',data.lieu_de_naissance)
      html = html.replace('{AD}',data.address)
      html = html.replace('{NS}',data.secu)
      html = html.replace('{DD}',data.date_de_debut)
      html = html.replace('{DE}',data.date_edition)
      html = html.replace('{SB}',data.salaire_brut)
      html = html.replace('{ST}',data.statut)
      html = html.replace('{PC}',data.position_coeff)
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
