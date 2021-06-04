function verification(contrat)
{

    var bool = false
    if(!contrat.civilite)
    {
        console.log("Veuillez saisir une civilité");
         bool = true;
    }
    if(!contrat.nom)
    {
        console.log("Veuillez saisir un nom");
         bool = true;
    }
    if (!contrat.prenom) 
    {
        console.log("Veuillez saisir un prenom")
         bool = true;
    }
    if (!contrat.lieu_de_naissance) 
    {
        console.log("Veuillez saisir un lieu de naissance")
         bool = true;
    }
    if(!contrat.nationalite)
    {
        console.log("Veuillez saisir une nationalité");
         bool = true;
    }
    if (!contrat.address) 
    {
        console.log("Veuillez saisir une address")
         bool = true;
    }
    if (!contrat.secu) 
    {
        console.log("Veuillez saisir un n° de sécurité sociale")
         bool = true;
    }
    if (contrat.secu.length !=13) 
    {
        console.log("Veuillez saisir un n° de sécurité sociale à 13 chiffres")
         bool = true;
    }
    if (!contrat.date_de_debut) 
    {
        console.log("Veuillez saisir une date début")
         bool = true;
    }
    if (!contrat.statut) 
    {
        console.log("Veuillez saisir un statut")
         bool = true;
    }
    if (!contrat.salaire_brut) 
    {
        console.log("Veuillez saisir un salaire brut")
         bool = true;
    }
    if (!contrat.position) 
    {
        
        console.log("Veuillez saisir une position")
         bool = true;
    }
    if (!contrat.coefficient) 
    {
        
        console.log("Veuillez saisir un coefficient")
         bool = true;
    }
    if(contrat.civilite && contrat.nom && contrat.prenom && contrat.lieu_de_naissance && contrat.address && contrat.secu && contrat.secu.length==13 && contrat.date_de_debut && contrat.nationalite && contrat.statut && contrat.salaire_brut && contrat.coefficient&& contrat.position)
    {
        console.log("L'insertion à la base à été un succes")
        return false;
    }
}

module.exports = verification;