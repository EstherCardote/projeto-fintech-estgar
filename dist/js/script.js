// APRESENTANDO O HTML PARA O JAVASCRIPT
// CONSTANTES
const btnReceita = document.getElementById("btnReceita");
const btnDespesa = document.getElementById("btnDespesa");
const categoria = document.getElementById("categoria");
const valorMovimentacao = document.getElementById("valorMovimentacao");

// Agora pegamos TODOS os elementos que possuem essa classe
const camposReceita = document.querySelectorAll(".campo-receita");
const camposDespesa = document.querySelectorAll(".campo-despesa");

// COLOCANDO MÁSCARA NO INPUT DE VALOR PARA APARECER R$0,00
valorMovimentacao.addEventListener("input", function () {

    let valor = valorMovimentacao.value;

    // Remove tudo que não for número
    valor = valor.replace(/\D/g, "");

    // Divide por 100 para criar os centavos
    valor = Number(valor) / 100;

    // Atualiza o campo com a máscara
    valorMovimentacao.value = valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

});


// CONFIGURAÇÃO INICIAL
// Esconde todos os campos de despesa
camposDespesa.forEach(function (campo) {
    campo.classList.add("hidden");
});
// Mantém o botão despesa apagado
btnDespesa.classList.remove("bg-estgar-vermelho");
btnDespesa.classList.add("bg-estgar-cinza-500");

// CLICOU EM RECEITA
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

    // CATEGORIAS
    carregarCategorias(categoriasReceita);

});

// CLICOU EM DESPESA
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

    // CATEGORIAS
    carregarCategorias(categoriasDespesa);

});

// LISTA DE ITENS DA CATEGORIA
// CATEGORIA RECEITA
const categoriasReceita = [
    "Salário",
    "Freelance",
    "Venda",
    "Dividendos",
    "Investimentos",
    "Renda Extra",
    "Reembolso"
];

// CATEGORIA DESPESA
const categoriasDespesa = [
    "Alimentação",
    "Aluguel",
    "Assinaturas",
    "Compras",
    "Educação",
    "Empréstimos",
    "Financiamento",
    "Impostos",
    "Juros",
    "Lazer",
    "Moradia",
    "Saúde",
    "Transporte"
];

// FUNÇÃO PARA PREENCHER O SELECT DE CATEGORIAS
function carregarCategorias(listaCategorias) {

    // Remove todas as opções atuais
    categoria.innerHTML = "";

    // Cria a primeira opção
    const opcaoPadrao = document.createElement("option");
    opcaoPadrao.value = "0";
    opcaoPadrao.textContent = "Escolha uma opção";
    opcaoPadrao.disabled = true;
    opcaoPadrao.selected = true;

    categoria.appendChild(opcaoPadrao);

    // Percorre toda a lista recebida
    listaCategorias.forEach(function (item) {

        // Cria uma nova opção
        const opcao = document.createElement("option");

        opcao.value = item.toLowerCase();
        opcao.textContent = item;

        categoria.appendChild(opcao);

    });
}

// Carrega as categorias de Receita ao abrir a página
carregarCategorias(categoriasReceita);