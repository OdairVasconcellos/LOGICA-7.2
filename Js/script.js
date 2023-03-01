function vetor() {

    let resultado = [];

    for (let index = 0; index < 10; index++) {
        resultado.push(Math.floor(Math.random() * 1000));
    }
    document.getElementById("vet").innerHTML = resultado;


}