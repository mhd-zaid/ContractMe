fetch('http://contract.fact-/contract')
.then(response => response.json())
.then(contracts => {
    for (let i = 0; i < contracts.length; i++ ){
        contract = contracts[i];
        let collectionItem = document.createElement("li");
        collectionItem.setAttribute('data-id, contract.id');
        collectionItem.innerHTML += '<div data-id"' + contract.id + '"class="accordion-header">' + contract.prenom + '<br/>' + contract.nom + '</div>';
        collectionItem.innerHTML +='<div class="accordion-body">'+ contract.nom + '<br>' + contract.prenom +'</div>';
    }
});    
