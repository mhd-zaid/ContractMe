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
    let c =req.body;
    if (verification(c)==false) 
    {
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
        console.log(path.resolve("./htmls/logo.png"))
        html = html.replace('{LOGO}',path.resolve("./htmls/logo.png"))
        pdf.create(html).toStream(function(err, res){
          if (err) return console.log(err);
          response.setHeader('Content-Type', 'application/pdf');
          response.setHeader('Content-Disposition', 'inline; filename=contrat-'+data.nom+'-'+data.prenom+'.pdf');
          res.pipe(response);
        });
      } else {
        response.end('No data in database')
      }
  
  
  
    })
  });


module.exports = router;