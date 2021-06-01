
const Contrat = require("./DBtable");
Contrat.drop().then(() => {
    Contrat.sync().then(()=>{
        console.log(" db sync ok");
        process.exit(0);
    })
})