// 1. APRESENTANDO O HTML PARA O JAVASCRIPT
const btnReceita = document.getElementById("btnReceita");
const btnDespesa = document.getElementById("btnDespesa");

// Agora pegamos TODOS os elementos que possuem essa classe
const camposReceita = document.querySelectorAll(".campo-receita");
const camposDespesa = document.querySelectorAll(".campo-despesa");

// 2. CONFIGURAÇÃO INICIAL

// Esconde todos os campos de despesa
camposDespesa.forEach(function (campo) {
    campo.classList.add("hidden");
});

// Mantém o botão despesa apagado
btnDespesa.classList.remove("bg-estgar-vermelho");
btnDespesa.classList.add("bg-estgar-cinza-500");


// 3. CLICOU EM RECEITA

btnReceita.addEventListener("click", function () {

    // BOTÕES

    btnReceita.classList.remove("bg-estgar-cinza-500");
    btnReceita.classList.add("bg-estgar-verde");

    btnDespesa.classList.remove("bg-estgar-vermelho");
    btnDespesa.classList.add("bg-estgar-cinza-500");


    // FORMULÁRIOS

    camposReceita.forEach(function (campo) {
        campo.classList.remove("hidden");
    });

    camposDespesa.forEach(function (campo) {
        campo.classList.add("hidden");
    });

});


// 4. CLICOU EM DESPESA

btnDespesa.addEventListener("click", function () {

    // BOTÕES

    btnDespesa.classList.remove("bg-estgar-cinza-500");
    btnDespesa.classList.add("bg-estgar-vermelho");

    btnReceita.classList.remove("bg-estgar-verde");
    btnReceita.classList.add("bg-estgar-cinza-500");


    // FORMULÁRIOS

    camposDespesa.forEach(function (campo) {
        campo.classList.remove("hidden");
    });

    camposReceita.forEach(function (campo) {
        campo.classList.add("hidden");
    });

});