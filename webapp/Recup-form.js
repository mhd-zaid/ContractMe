$(document).ready(function () {
    $('#btn-s').click((e) => {
        e.preventDefault();
        var contract = {
            nom: $("#nom").val(),
            prenom: $("#prenom").val(),
            date_de_naissance: $("#DN").val(),
            lieu_de_naissance: $("#LN").val(),

            address: $("#AD").val() + " " + $("#VL").val() + ", " + $("#CP").val() + ", " + $("#PY").val() + ", " + $("#CAD").val(),
            secu: $("#NS").val(),
            date_de_debut: $("#DD").val(),
            date_edition: $("#DE").val(),
            salaire_brut: $("#SB").val(),
            statut: $("#ST").val(),
            position: $("#P").val(),
            coefficient: $("#C").val(),
            civilite: $("#CVL").val(),
            nationalite: $("#NT").val(),
        }
        console.log(contract);

        $.ajax("/contract", {
            type: "POST",
            data: JSON.stringify(contract),
            contentType: "application/json",
            dataType: 'json'
        })
            .done(function (data) {
                window.location.href = "/contract/" + data.id;
            })
            .fail(function () {
                alert("error");
            })
    });
})