//Atendre le chargement du body avant de commencer
window.onload = () => {
    const start = Date.now();


    //Création de l'accordion:
    //Créer le premier div class=accordion" + id="" qui englobera tout l'accordion

    //1stAccordion
    let accordionDiv = document.createElement("div");
    //AccordionclassName
    accordionDiv.className = "accordion accordion-flush";

    //AccordionidName
    accordionDiv.setAttribute('id', "accordionFlushExample");


    //fecth(url de la page html des données qu'on souhaite récupérer) + le renvoie des reponses et la définition du format de fichier de texte
    fetch('/contract')
        .then(response => response.json())
        .then(contracts => {

            //créer une boucle pour l'insertion des données dans la liste
            for (let i = 0; i < contracts.length; i++) {
                contract = contracts[i];

                //créer le second div class="accordion-item" qui comportera l'accordion-header et l'accordion body + le div qui comportera le body de l'accordion
                let secondDiv = document.createElement("div")
                secondDiv.className = "accordion-item";

                //créer un h2 class="accordion-header" + id qui est l'entête de l'accordion
                //Afficher le nom+prenom du contractant dans le header
                //insérer le h2 dans le second div
                //   secondDiv.innerHTML += '<h2 class="accordion-header" id="flush-heading'+contract.id+'"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse'+contract.id+'" aria-expanded="false" aria-controls="flush-collapse'+contract.id+'">' + contract.prenom +" "+ contract.nom + '</button></h2>';
                //   secondDiv.innerHTML += '<div id="flush-collapse'+contract.id+'" class="accordion-collapse collapse" aria-labelledby="flush-heading'+contract.id+'" data-bs-parent="#accordionFlushExample" <div class="accordion-body">' + contract.prenom + contract.nom +  contract.date_de_bnaissance +  contract.lieu_de_naissance +  contract.address +  contract.secu +  contract.date_de_debut +  contract.date_edition +  contract.salaire_brut +  contract.statut +  contract.cadre +  contract.cadre +  contract.position +  contract.coefficient +  contract.civilite +  contract.nationalite + contract.createdAt +  contract.updatedAt + '</div></div>';

                secondDiv.innerHTML = `<div class="accordion-item">
       <h2 class="accordion-header" id="flush-heading${contract.id}">
         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${contract.id}" aria-expanded="false" aria-controls="flush-collapse${contract.id}">
         ${contract.prenom} ${contract.nom} crée le  ${new Date(contract.createdAt).toLocaleDateString()} à  ${new Date(contract.createdAt).toLocaleTimeString()}
         </button>
       </h2>
       <div id="flush-collapse${contract.id}" class="accordion-collapse collapse" aria-labelledby="flush-heading${contract.id}" data-bs-parent="#accordionFlushExample">
         <div class="accordion-body">
            <div class="alert alert-primary" role="alert">
            ${new Date(contract.date_de_naissance).toLocaleDateString()} 
            </div>
            <div class="alert alert-warning" role="alert">
            ${new Date(contract.date_de_naissance).toLocaleDateString()} 
            </div>
            <div class="alert alert-info" role="alert">
            ${new Date(contract.date_de_naissance).toLocaleDateString()} 
            </div>

            <div style="text-align:right">
                 <a class="btn btn-outline-success" target="_blank" href="/contract/${contract.id}" role="button">Afficher le contrat</a>
            </div>

         </div>
       </div>
     </div>`;

                //insérer le second div dans le premier
                accordionDiv.append(secondDiv);

            }

            //Insertion de l'acordion dans le body
            document.body.appendChild(accordionDiv);

        })

}





    //créer le boutton de l'accordion
    //l'insérer dans le h2


    //créer un troisième div avec ses composant qui comportera le div du body de l'accordion
        //Afficherles autres information dans le body de l'accordion
        //insérer l'id du troisième  div dans le data-bs-target du boutton de l'accordion
        //insérer le troisième div dans le deuxième div

    //créer un dernier div qui comportera le body de l'accordion
        //insérer le dernier div dans le troisième div   



//Ensuite faire l'insertion