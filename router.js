const router = require("express").Router();
const Contrat = require("./DBtable");
const fs = require('fs');
const path = require('path');
var pdf = require('html-pdf');

const verification = require("./verification")
var bool;

router.get('/contract', (req, res) => {
  Contrat.findAll().then((data) => {
    res.json(data);
  })
});
router.post('/contract', (req, res) => {
  let c = req.body;
  if (verification(c) == false) {
    Contrat.create(req.body).then((data) => {
      res.json(data);
    })
  }

});
router.get('/contract/:id', (req, response) => {
  Contrat.findOne({
    where: {
      id: req.params.id
    }
  }).then((data) => {
    if (data) {
      var html = fs.readFileSync('htmls/contract.html', 'utf8');
      html = html.replace('{nom}', data.nom)
      html = html.replace('{prenom}', data.prenom)
      html = html.replace('{DN}', (new Date(data.date_de_naissance)).toLocaleDateString())
      html = html.replace('{LN}', data.lieu_de_naissance)
      html = html.replace('{AD}', data.address)
      html = html.replace('{NS}', data.secu)
      html = html.replace('{DD}', (new Date(data.date_de_debut)).toLocaleDateString())
      html = html.replace('{DE}', (new Date(data.date_edition)).toLocaleDateString())
      html = html.replace('{SB}', data.salaire_brut)
      html = html.replace('{ST}', data.statut)
      html = html.replace('{P}', data.position)
      html = html.replace('{C}', data.coefficient)
      html = html.replace('{civilité}', data.civilite)
      html = html.replace('{N}', data.nationalite)
      html = html.replace('{nomC}', data.nom)
      html = html.replace('{prenomC}', data.prenom)
      if (data.civilite == 'Madame') {
        html = html.replace('{collab}','la Collaboratrice')
      }else{
        html = html.replace('{collab}','le Collaborateur')
      }
      console.log(path.resolve("./htmls/logo.png"))
      html = html.replace('{LOGO}', path.resolve("./htmls/logo.png"))
      pdf.create(html, {
        format: 'A4',
        width: "23.3cm",
        height: "29.7cm",
        border:{top:'0px',bottom:'0px',left:'0px',right:0}
      }).toStream(function (err, res) {
        if (err) return console.log(err);
        response.setHeader('Content-Type', 'application/pdf');
        response.setHeader('Content-Disposition', 'inline; filename=contrat-' + data.nom + '-' + data.prenom + '.pdf');
        res.pipe(response);
      });
    } else {
      response.end('No data in database')
    }



  })
});


module.exports = router;
