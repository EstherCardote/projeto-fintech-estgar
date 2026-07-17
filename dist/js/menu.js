//  MENU LATERAL
function carregarMenu() {
    const menu = `
<nav
        class="fixed left-0 top-0 h-full bg-estgar-roxo w-20 hover:w-64 transition-all duration-300 z-50 group flex flex-col py-8 shadow-xl overflow-x-hidden overflow-y-auto">

        <a href="./dashboard.html" class="mb-12 flex justify-start items-center w-full px-6 min-h-10">
            <div class="relative w-full h-8 flex items-center">
                <img src="./assets/images/LOGO SOZINHO-BRANCO-SEM FUNDO.png" alt="Icone Estgar"
                    class="absolute left-0 h-8 w-auto object-contain transition-opacity duration-200 ease-in-out opacity-100 group-hover:opacity-0">

                <img src="./assets/images/LOGO-INTEIRO-BRANCO SEM FUNDO.png" alt="Icone Logo + Estgar"
                    class="absolute left-0 h-8 w-auto object-contain transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100">
            </div>

        </a>

        <!-- MENU PRINCIPAL -->

        <ul class="w-full flex flex-col gap-1 px-4 text-sm">
            <!-- INICIO -->
            <li>
                <a href="./dashboard.html"
                    class="flex items-center gap-4 px-2 py-3 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-all">
                    <span class="text-2xl min-w-8 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-house-icon lucide-house">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                            <path
                                d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg></span>
                    <span
                        class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold whitespace-nowrap">Inicio</span>
                </a>
            </li>

            <!-- CARTÕES -->
            <li class="group/cartoes relative">
                <a href="#"
                    class="flex items-center gap-4 px-2 py-3 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-all">
                    <span class="text-2xl min-w-8 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-credit-card-icon lucide-credit-card">
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                        </svg></span>
                    <span
                        class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold whitespace-nowrap">Cartões</span>
                </a>
                <!-- SUBMENU -->
                <ul class="hidden group-hover/cartoes:block ml-12 mt-2 space-y-1 text-xs">
                    <li>
                        <a href="./lista-cartoes.html"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Lista
                            de Cartões</a>
                    </li>
                    <li>
                        <a href="./cartao-novo.html"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Novo
                            Cartão</a>
                    </li>
                </ul>
            </li>

            <!-- EXTRATO -->
            <li class="group/extrato relative">
                <a href="#"
                    class="flex items-center gap-4 px-2 py-3 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-all">
                    <span class="text-2xl min-w-8 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-receipt-text-icon lucide-receipt-text">
                            <path d="M13 16H8" />
                            <path d="M14 8H8" />
                            <path d="M16 12H8" />
                            <path
                                d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
                        </svg></span>
                    <span
                        class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold whitespace-nowrap">Transações</span>
                </a>
                <!-- SUBMENU -->
                <ul class="hidden group-hover/extrato:block ml-12 mt-2 space-y-1 text-xs">
                    <li>
                        <a href="#"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Lista
                            de transações</a>
                    </li>
                    <li>
                        <a href="./movimentacao-nova.html"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Nova
                            transação</a>
                    </li>
                </ul>
            </li>

            <!-- PLANEJAMENTO -->
            <li class="group/planejamento relative">
                <a href="#"
                    class="flex items-center gap-4 px-2 py-3 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-all">
                    <span class="text-2xl min-w-8 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-calendar-days-icon lucide-calendar-days">
                            <path d="M8 2v4" />
                            <path d="M16 2v4" />
                            <rect width="18" height="18" x="3" y="4" rx="2" />
                            <path d="M3 10h18" />
                            <path d="M8 14h.01" />
                            <path d="M12 14h.01" />
                            <path d="M16 14h.01" />
                            <path d="M8 18h.01" />
                            <path d="M12 18h.01" />
                            <path d="M16 18h.01" />
                        </svg></span>
                    <span
                        class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold whitespace-nowrap">Planejamento</span>
                </a>
                <!-- SUBMENU -->
                <ul class="hidden group-hover/planejamento:block ml-12 mt-2 space-y-1 text-xs">
                    <li>
                        <a href="./lista-planejamento.html"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Lista
                            de Planejamento</a>
                    </li>
                    <li>
                        <a href="./planejamento-novo.html"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Novo
                            Planejamento</a>
                    </li>
                </ul>
            </li>

            <!-- PROJETO -->
            <li class="group/projeto relative">
                <a href="#"
                    class="flex items-center gap-4 px-2 py-3 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-all">
                    <span class="text-2xl min-w-8 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-target-icon lucide-target">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="6" />
                            <circle cx="12" cy="12" r="2" />
                        </svg></span>
                    <span
                        class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold whitespace-nowrap">Projeto
                        Financeiro</span>
                </a>
                <!-- SUBMENU -->
                <ul class="hidden group-hover/projeto:block ml-12 mt-2 space-y-1 text-xs">
                    <li>
                        <a href="./lista-projeto.html"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Lista
                            de Projetos</a>
                    </li>
                    <li>
                        <a href="./projeto-financeiro-novo.html"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Novo
                            Projeto</a>
                    </li>
                </ul>
            </li>
            <!-- SIMULADOR DE INVESTIMENTO -->
            <li class="group/simulador relative">
                <a href="#"
                    class="flex items-center gap-4 px-2 py-3 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-all">
                    <span class="text-2xl min-w-8 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined">
                            <path d="M12 16v5" />
                            <path d="M16 14.639V21" />
                            <path d="M20 10.656V21" />
                            <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
                            <path d="M4 18.463V21" />
                            <path d="M8 14.656V21" />
                        </svg></span>
                    <span
                        class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold whitespace-nowrap">Simulador
                        de Investimento</span>
                </a>
                <!-- SUBMENU -->
                <ul class="hidden group-hover/simulador:block ml-12 mt-2 space-y-1 text-xs">
                    <li>
                        <a href="#"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Lista
                            de Simulações</a>
                    </li>
                    <li>
                        <a href="./simulado-investimento-novo.html"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Nova
                            Simulação</a>
                    </li>
                </ul>
            </li>

            <!-- CADASTROS -->
            <li class="group/simulador relative">
                <a href="#"
                    class="flex items-center gap-4 px-2 py-3 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-all">
                    <span class="text-2xl min-w-8 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-layout-grid-icon lucide-layout-grid">
                            <rect width="7" height="7" x="3" y="3" rx="1" />
                            <rect width="7" height="7" x="14" y="3" rx="1" />
                            <rect width="7" height="7" x="14" y="14" rx="1" />
                            <rect width="7" height="7" x="3" y="14" rx="1" />
                        </svg></span>
                    <span
                        class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold whitespace-nowrap">Cadastros</span>
                </a>
                <!-- SUBMENU -->
                <ul class="hidden group-hover/simulador:block ml-12 mt-2 space-y-1 text-xs">
                    <li>
                        <a href="#"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Categoria</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block p-2 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-opacity duration-300 whitespace-nowrap">Centro
                            de custo</a>
                    </li>
                </ul>
            </li>
        </ul>

        <!-- MENU RODAPÉ -->
        <div class="mt-auto px-4 pb-6">

            <hr class="border-white/30 mx-4 mb-4">

            <ul class="text-sm">
                <!-- CONFIGURAÇÕES -->
                <li>
                    <a href="./configuracoes.html"
                        class="flex items-center gap-4 px-2 py-3 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-all">

                        <span class="text-2xl min-w-8 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings">
                                <path
                                    d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </span>

                        <span
                            class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold whitespace-nowrap">
                            Configurações
                        </span>
                    </a>
                </li>

                <!-- PERFIL -->
                <li>
                    <a href="./perfil-usuario.html"
                        class="flex items-center gap-4 px-2 py-3 text-white hover:bg-white/30 hover:text-slate-900 rounded-xl transition-all">

                        <span class="text-2xl min-w-8 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-circle-user-round">
                                <path d="M17.925 20.056a6 6 0 0 0-11.851.001" />
                                <circle cx="12" cy="10" r="4" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </span>

                        <span
                            class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold whitespace-nowrap">
                            Esther
                        </span>
                    </a>
                </li>
            </ul>
        </div>

    </nav>

`;

    document.querySelector("#menu").innerHTML = menu;
}

// CHAMADA DO MENU LATERAL
carregarMenu();