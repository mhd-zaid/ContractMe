//Atendre le chargement du body avant de commencer
window.onload = () => {
    const start =   Date.now();


//Création de l'accordion:
//Créer le premier div class=accordion" + id="" qui englobera tout l'accordion

//1stAccordion
let accordionDiv = document.createElement("div")

//AccordionclassName
accordion.className = "accordion"


//fecth(url de la page html des données qu'on souhaite récupérer) + le renvoie des reponses et la définition du format de fichier de texte
fetch('/contract')
.then(response => response.json())
.then(contracts => {

    //créer une boucle pour l'insertion des données dans la liste
    for (let i = 0; i < contracts.length; i++) {
        contract = contracts[i];
        
        //créer le second div class="accordion-item" qui comportera l'accordion-header et l'accordion body + le div qui comportera le body de l'accordion
        let secondDiv = document.createElement("div")
        secondDiv.className ="accordion-items"
        secondDiv.innerHTML += '<h2 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">' + contract.prenom + contract.nom + '</button></h2>';
        secondDiv.innerHTML += '<div id="collapseOne" class="accordion collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" <div class="accordion-body">' + contract.prenom + contract.nom + '</div></div>';
        accordionDiv.append(secondDiv);

    }
})

}    
    //insérer le second div dans le premier


    //créer un h2 class="accordion-header" + id qui est l'entête de l'accordion
        //Afficher le nom+prenom du contractant dans le header
        //insérer le h2 dans le second div

    //créer le boutton de l'accordion
    //l'insérer dans le h2


    //créer un troisième div avec ses composant qui comportera le div dxu body de l'accordion
        //Afficherles autres information dans le body de l'accordion
        //insérer l'id du troisième  div dans le data-bs-target du boutton de l'accordion
        //insérer le troisième div dans le deuxième div

    //créer un dernier div qui comportera le body de l'accordion
        //insérer le dernier div dans le troisième div   



//Ensuite faire l'insertion