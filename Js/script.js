function vetor() {

    let resultado = [];

    for (let index = 0; index < 10; index++) {
        resultado.push(Math.floor(Math.random() * 1000));
    }
    document.getElementById("vet").innerHTML = resultado;


}

function troca() {

let resultado = [];
for (let index = 0; index < 5; index++) {
    resultado.push(Math.floor(Math.random() * 10));
}
document.getElementById("to").innerHTML = resultado;

}