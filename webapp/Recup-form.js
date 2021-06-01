$(document).ready(function () {
    $('#btn').click((e) => {
        e.preventDefault();
        var contract = {
            nom: $("#nom").val(),
            prenom: $("#prenom").val(),
            date_de_naissance: $("#DN").val(),
            lieu_de_naissance: $("#LN").val(),

            address: $("#AD").val(),
            secu: $("#NS").val(),
            date_de_debut: $("#DD").val(),
            date_edition: $("#DE").val(),
            salaire_brut: $("#SB").val(),
            statut: $("#ST").val(),
            position_coeff: $("#PC").val(),
        }
        console.log(contract);

        var jqxhr = $.ajax("/contract", {
            type: "POST",
            data: JSON.stringify(contract),
            contentType:"application/json",
            dataType: 'json'
        })
            .done(function () {
                alert("success");
            })
            .fail(function () {
                alert("error");
            })
    });
})