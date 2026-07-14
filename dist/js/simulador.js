const formulario = document.getElementById("formInvestimento");
const btnLimpar = document.getElementById("btnLimpar");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    document
        .getElementById("resultadoSimulacao")
        .classList.remove("hidden");

    document
        .getElementById("acoesSimulacao")
        .classList.remove("hidden");

});

btnLimpar.addEventListener("click", function () {

    document
        .getElementById("resultadoSimulacao")
        .classList.add("hidden");

    document
        .getElementById("acoesSimulacao")
        .classList.add("hidden");

});