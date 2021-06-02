const { Sequelize, Model, DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('contrat', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

class Contrat extends Model { }
Contrat.init({
    prenom: {
        type: DataTypes.STRING,
    },
    nom: {
        type: DataTypes.STRING
    },
    date_de_naissance: {
        type: DataTypes.DATEONLY
    },
    lieu_de_naissance:{
        type:DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    secu: {
        type: DataTypes.BIGINT
    },
    date_de_debut: {
        type: DataTypes.DATEONLY
    },
    date_edition: {
        type: DataTypes.DATEONLY
    },
    salaire_brut: {
        type: DataTypes.DOUBLE
    },
    statut: {
        type: DataTypes.STRING
    },
    position_coeff: {
        type: DataTypes.STRING
    },

}, {
    sequelize,
    modelName: 'contrat'
});




module.exports = Contrat;