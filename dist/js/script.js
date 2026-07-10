// 1. APRESENTANDO O HTML PARA O JAVASCRIPT
// Criamos variáveis constantes (const) para guardar os elementos da tela
const btnReceita = document.getElementById("btnReceita");
const btnDespesa = document.getElementById("btnDespesa");
const camposReceita = document.getElementById("camposReceita");
const camposDespesa = document.getElementById("camposDespesa");

// 2. CONFIGURAÇÃO INICIAL (Quando a página carrega)
// A tela sempre deve começar no modo "Receita", então escondemos a Despesa e deixamos o botão cinza
camposDespesa.classList.add("hidden");
btnDespesa.classList.remove("bg-estgar-vermelho");
btnDespesa.classList.add("bg-estgar-cinza-500");


// 3. O QUE ACONTECE AO CLICAR EM "RECEITA"
btnReceita.addEventListener("click", function () {
    
    // --- PARTE VISUAL (BOTÕES) ---
    // Acende o botão de Receita
    btnReceita.classList.remove("bg-estgar-cinza-500");
    btnReceita.classList.add("bg-estgar-verde");

    // Apaga o botão de Despesa
    btnDespesa.classList.remove("bg-estgar-vermelho");
    btnDespesa.classList.add("bg-estgar-cinza-500");

    // --- PARTE ESTRUTURAL (FORMULÁRIOS) ---
    // Tira a classe 'hidden' da Receita (fazendo ela aparecer no formato grid)
    camposReceita.classList.remove("hidden");
    
    // Coloca a classe 'hidden' na Despesa (fazendo ela sumir)
    camposDespesa.classList.add("hidden");

});


// 4. O QUE ACONTECE AO CLICAR EM "DESPESA"
btnDespesa.addEventListener("click", function () {
    
    // --- PARTE VISUAL (BOTÕES) ---
    // Acende o botão de Despesa
    btnDespesa.classList.remove("bg-estgar-cinza-500");
    btnDespesa.classList.add("bg-estgar-vermelho");

    // Apaga o botão de Receita
    btnReceita.classList.remove("bg-estgar-verde");
    btnReceita.classList.add("bg-estgar-cinza-500");

    // --- PARTE ESTRUTURAL (FORMULÁRIOS) ---
    // Tira a classe 'hidden' da Despesa (fazendo ela aparecer)
    camposDespesa.classList.remove("hidden");
    
    // Coloca a classe 'hidden' na Receita (fazendo ela sumir)
    camposReceita.classList.add("hidden");

});