const dadosObrigacoes = {
    indicadores: {
        total: 12,
        pontualidade: 92,
        checklistMedio: 84,
        prazosCriticos: 3
    },
    entregas: [
        { obrigacao: 'DCTFWeb', empresa: 'Axia Energia Holding', escopo: 'Tributos sobre folha', vencimento: '15/04/2026', status: 'Em validação', checklist: 82, owner: 'Compliance Corporativo', observacao: 'Divergência residual em compensação previdenciária.' },
        { obrigacao: 'EFD-Contribuições', empresa: 'Axia Energia Holding', escopo: 'PIS/COFINS', vencimento: '14/04/2026', status: 'Concluída', checklist: 100, owner: 'Tributos Indiretos', observacao: 'Arquivo validado sem pendências críticas.' },
        { obrigacao: 'PER/DCOMP', empresa: 'Axia Energia Holding', escopo: 'Compensações', vencimento: '18/04/2026', status: 'Em andamento', checklist: 74, owner: 'Tax Cash', observacao: 'Aguardando amarração final do crédito homologado.' },
        { obrigacao: 'EFD-Reinf', empresa: 'Axia Geração Nordeste', escopo: 'Retenções e serviços', vencimento: '16/04/2026', status: 'Em validação', checklist: 88, owner: 'Fiscal Nordeste', observacao: 'Ponto de atenção em retenções de EPC.' },
        { obrigacao: 'ECD', empresa: 'Axia Geração Nordeste', escopo: 'Escrituração contábil', vencimento: '31/05/2026', status: 'Em andamento', checklist: 63, owner: 'Controladoria', observacao: 'Cronograma aderente com o fechamento contábil.' },
        { obrigacao: 'DCTF', empresa: 'Axia Geração Nordeste', escopo: 'Tributos federais', vencimento: '22/04/2026', status: 'Concluída', checklist: 100, owner: 'Tributos Diretos', observacao: 'Sem apontamentos de cruzamento.' },
        { obrigacao: 'EFD-Contribuições', empresa: 'Axia Comercializadora', escopo: 'PIS/COFINS', vencimento: '14/04/2026', status: 'Atrasada', checklist: 68, owner: 'Tributos Indiretos', observacao: 'Dependência de ajuste de CST em operações bilaterais.' },
        { obrigacao: 'DCTFWeb', empresa: 'Axia Comercializadora', escopo: 'Folha e terceiros', vencimento: '15/04/2026', status: 'Em validação', checklist: 86, owner: 'Shared Service Fiscal', observacao: 'Pendente conferência de base de terceiros.' },
        { obrigacao: 'ECF', empresa: 'Axia Comercializadora', escopo: 'Lucro real', vencimento: '31/07/2026', status: 'Em andamento', checklist: 41, owner: 'Tax Reporting', observacao: 'Mapeamento de premissas iniciado.' },
        { obrigacao: 'EFD-Reinf', empresa: 'Axia Serviços Corporativos', escopo: 'Retenções', vencimento: '16/04/2026', status: 'Concluída', checklist: 100, owner: 'Compliance Operacional', observacao: 'Recibo conciliado no mesmo dia.' },
        { obrigacao: 'ECD', empresa: 'Axia Serviços Corporativos', escopo: 'Escrituração contábil', vencimento: '31/05/2026', status: 'Em validação', checklist: 77, owner: 'Controladoria SSC', observacao: 'Revisão de saldos intercompany em andamento.' },
        { obrigacao: 'DIRF Retificadora', empresa: 'Axia Serviços Corporativos', escopo: 'Histórico regulatório', vencimento: '25/04/2026', status: 'Em andamento', checklist: 79, owner: 'Tributos sobre folha', observacao: 'Retificação preventiva para alinhamento cadastral.' }
    ],
    alertas: [
        {
            tipo: 'danger',
            titulo: 'Entrega em atraso',
            descricao: 'A EFD-Contribuições da Axia Comercializadora permanece pendente e exige saneamento imediato da parametrização de CST.'
        },
        {
            tipo: 'warning',
            titulo: 'Janela crítica de vencimento',
            descricao: 'Três obrigações vencem em até sete dias e pedem ritual diário de owner, evidência e validação final.'
        },
        {
            tipo: 'positive',
            titulo: 'Governança estável no SSC',
            descricao: 'A frente de Serviços Corporativos sustenta entregas com recibo conciliado e sem desvio material de prazo.'
        }
    ],
    checklists: [
        { frente: 'ECF 2026', andamento: 41, owner: 'Tax Reporting', status: 'Estruturação inicial', meta: 'Target 90%' },
        { frente: 'ECD 2026', andamento: 70, owner: 'Controladoria', status: 'Evidências em consolidação', meta: 'Target 90%' },
        { frente: 'DCTFWeb abril', andamento: 84, owner: 'Compliance Corporativo', status: 'Validação final', meta: 'Target 100%' },
        { frente: 'EFD-Reinf abril', andamento: 94, owner: 'Compliance Operacional', status: 'Fechamento concluído', meta: 'Target 100%' }
    ]
};

function inicializarPortalObrigacoes() {
    mostrarSecao('visao');
}

function mostrarSecao(secao) {
    atualizarMenuAtivo(secao);

    const content = document.getElementById('obrigacoes-content');
    const renderizadores = {
        visao: renderizarVisaoExecutiva,
        calendario: renderizarCalendario,
        entregas: renderizarEntregasCriticas,
        checklists: renderizarChecklists,
        alertas: renderizarAlertas
    };

    content.innerHTML = renderizadores[secao]();
}

function atualizarMenuAtivo(secao) {
    const links = document.querySelectorAll('.sidebar a');
    links.forEach((link) => {
        if (link.getAttribute('onclick').includes(`'${secao}'`)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function renderizarVisaoExecutiva() {
    return `
        <div class="summary-grid">
            ${criarCardResumo('Obrigações monitoradas', `${dadosObrigacoes.indicadores.total}`, 'Carteira consolidada do período', 'Cobertura regulatória ativa', 'positive')}
            ${criarCardResumo('Pontualidade', `${dadosObrigacoes.indicadores.pontualidade}%`, 'Meta executiva de 95%', 'Uma entrega atrasada no portfólio', 'warning')}
            ${criarCardResumo('Checklist médio', `${dadosObrigacoes.indicadores.checklistMedio}%`, 'Validação média das entregas', 'Aderência abaixo do target', 'warning')}
            ${criarCardResumo('Prazos críticos', `${dadosObrigacoes.indicadores.prazosCriticos}`, 'Vencimento em até 7 dias', 'Ritual diário com owners', 'warning')}
        </div>

        <div class="alert-grid">
            ${dadosObrigacoes.alertas.map(criarCardAlerta).join('')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Agenda executiva</p>
                        <h2>Frentes mais sensíveis do período</h2>
                    </div>
                    <span class="panel-tag">Obrigações</span>
                </div>
                <ul class="note-list">
                    <li>A EFD-Contribuições da Comercializadora é o principal ponto de atenção e explica a pressão na pontualidade do consolidado.</li>
                    <li>DCTFWeb, EFD-Reinf e PER/DCOMP formam a trilha de vencimentos da semana e exigem acompanhamento por evidência.</li>
                    <li>O SSC mantém consistência de entrega, servindo como benchmark de disciplina operacional para as demais unidades.</li>
                </ul>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Checklists executivos</p>
                        <h2>Avanço das principais entregas</h2>
                    </div>
                    <span class="panel-tag">Controles</span>
                </div>
                <div class="progress-list">
                    ${dadosObrigacoes.checklists.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.frente}</span>
                                <small>${item.andamento}%</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${item.andamento}%"></div>
                            </div>
                            <span class="metric-legend">${item.owner} | ${item.status}</span>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Mapa consolidado</p>
                    <h2>Status das obrigações fiscais</h2>
                </div>
                <span class="panel-tag">Abr/2026</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Obrigação</th>
                            <th>Empresa</th>
                            <th>Escopo</th>
                            <th>Vencimento</th>
                            <th>Status</th>
                            <th>Checklist</th>
                            <th>Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosObrigacoes.entregas.map((item) => criarLinhaObrigacao(item)).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarCalendario() {
    const ordenadas = [...dadosObrigacoes.entregas].sort((a, b) => converterData(a.vencimento) - converterData(b.vencimento));

    return `
        <div class="summary-grid">
            ${criarCardResumo('Vencimento mais próximo', '14/04', 'EFD-Contribuições', 'Comercializadora e Holding', 'danger')}
            ${criarCardResumo('Eventos na semana', '5', 'Janela operacional curta', 'Necessário comitê diário', 'warning')}
            ${criarCardResumo('Entregas concluídas', `${dadosObrigacoes.entregas.filter((item) => item.status === 'Concluída').length}`, 'Com recibo e validação final', 'Pipeline saudável', 'positive')}
            ${criarCardResumo('Owners ativos', '8', 'Áreas mobilizadas no período', 'Governança distribuída', 'positive')}
        </div>

        <section class="panel-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Calendário regulatório</p>
                    <h2>Sequência de vencimentos</h2>
                </div>
                <span class="panel-tag">Prioridade por prazo</span>
            </div>
            <div class="progress-list">
                ${ordenadas.map((item) => `
                    <div class="progress-item">
                        <div class="progress-top">
                            <span>${item.obrigacao} | ${item.empresa}</span>
                            <small>${item.vencimento}</small>
                        </div>
                        <div class="progress-track">
                            <div class="progress-fill" style="width: ${item.checklist}%"></div>
                        </div>
                        <span class="metric-legend">${item.status} | ${item.owner}</span>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function renderizarEntregasCriticas() {
    const criticas = dadosObrigacoes.entregas.filter((item) => item.status === 'Atrasada' || item.status === 'Em validação');
    const concluidas = dadosObrigacoes.entregas.filter((item) => item.status === 'Concluída');
    const andamento = dadosObrigacoes.entregas.filter((item) => item.status === 'Em andamento');

    return `
        <div class="summary-grid">
            ${criarCardResumo('Críticas', `${criticas.length}`, 'Atraso ou validação final', 'Escalonamento imediato', 'danger')}
            ${criarCardResumo('Em andamento', `${andamento.length}`, 'Ainda sem recibo final', 'Acompanhamento tático', 'warning')}
            ${criarCardResumo('Concluídas', `${concluidas.length}`, 'Sem pendência de fechamento', 'Execução aderente', 'positive')}
            ${criarCardResumo('Checklist crítico médio', `${formatarNumero(media(criticas.map((item) => item.checklist)), 0)}%`, 'Frentes em maior risco', 'Elevar cobertura de evidência', 'warning')}
        </div>

        <div class="kanban-grid">
            ${criarKanban('Críticas', criticas, 'danger')}
            ${criarKanban('Em andamento', andamento, 'warning')}
            ${criarKanban('Concluídas', concluidas, 'positive')}
        </div>
    `;
}

function renderizarChecklists() {
    return `
        <div class="summary-grid">
            ${criarCardResumo('Checklist médio', `${dadosObrigacoes.indicadores.checklistMedio}%`, 'Base consolidada', 'Target 90%', 'warning')}
            ${criarCardResumo('Frentes acima de 90%', `${dadosObrigacoes.checklists.filter((item) => item.andamento >= 90).length}`, 'Maturidade operacional', 'Benchmark de execução', 'positive')}
            ${criarCardResumo('Frentes abaixo de 70%', `${dadosObrigacoes.checklists.filter((item) => item.andamento < 70).length}`, 'Necessitam reforço de evidências', 'Plano corretivo', 'warning')}
            ${criarCardResumo('Owners críticos', '2', 'ECF e ECD', 'Elevar cobertura antes do próximo checkpoint', 'warning')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Progresso</p>
                        <h2>Checklist por obrigação</h2>
                    </div>
                    <span class="panel-tag">Evidências</span>
                </div>
                <div class="progress-list">
                    ${dadosObrigacoes.checklists.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.frente}</span>
                                <small>${item.andamento}%</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${item.andamento}%"></div>
                            </div>
                            <span class="metric-legend">${item.owner} | ${item.meta}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Leitura executiva</p>
                        <h2>Mensagens de governança</h2>
                    </div>
                    <span class="panel-tag">Checklists</span>
                </div>
                <ul class="note-list">
                    <li>O gap mais relevante está em ECF, onde o checklist ainda se encontra em fase inicial de estruturação.</li>
                    <li>DCTFWeb e EFD-Reinf operam próximos do target e suportam um fechamento mais previsível.</li>
                    <li>O módulo foi desenhado para ligar owner, avanço e evidência em uma mesma visão de supervisão.</li>
                </ul>
            </section>
        </div>
    `;
}

function renderizarAlertas() {
    const itensRisco = dadosObrigacoes.entregas.filter((item) => item.status === 'Atrasada' || item.status === 'Em validação');

    return `
        <div class="summary-grid">
            ${criarCardResumo('Alertas ativos', `${dadosObrigacoes.alertas.length}`, 'Eventos priorizados na semana', 'Comitê de acompanhamento', 'warning')}
            ${criarCardResumo('Risco alto', '1', 'Entrega já vencida', 'Ação imediata na Comercializadora', 'danger')}
            ${criarCardResumo('Risco moderado', `${itensRisco.length - 1}`, 'Validação final sem recibo', 'Monitorar owners', 'warning')}
            ${criarCardResumo('Alertas estabilizados', '1', 'Operação SSC concluída', 'Boa prática replicável', 'positive')}
        </div>

        <div class="alert-grid">
            ${dadosObrigacoes.alertas.map(criarCardAlerta).join('')}
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Fila de risco</p>
                    <h2>Eventos com impacto de prazo ou consistência</h2>
                </div>
                <span class="panel-tag">Prioridade diária</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Obrigação</th>
                            <th>Empresa</th>
                            <th>Status</th>
                            <th>Checklist</th>
                            <th>Owner</th>
                            <th>Observação</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itensRisco.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.obrigacao}</span></td>
                                <td>${item.empresa}</td>
                                <td>${criarBadgeStatus(item.status)}</td>
                                <td>${item.checklist}%</td>
                                <td>${item.owner}</td>
                                <td>${item.observacao}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function criarCardResumo(titulo, valor, nota, tendencia, tipo) {
    return `
        <article class="summary-card">
            <p class="summary-label">${titulo}</p>
            <div class="summary-value">${valor}</div>
            <p class="summary-note">${nota}</p>
            <span class="summary-trend is-${tipo}">${tendencia}</span>
        </article>
    `;
}

function criarCardAlerta(alerta) {
    const tipo = alerta.tipo === 'positive' ? 'positive' : alerta.tipo;
    const label = tipo === 'danger' ? 'Crítico' : tipo === 'warning' ? 'Atenção' : 'Estável';

    return `
        <article class="alert-card">
            <span class="status-badge is-${tipo}">${label}</span>
            <h3>${alerta.titulo}</h3>
            <p>${alerta.descricao}</p>
        </article>
    `;
}

function criarLinhaObrigacao(item) {
    return `
        <tr>
            <td><span class="row-title">${item.obrigacao}</span></td>
            <td>${item.empresa}</td>
            <td>${item.escopo}</td>
            <td>${item.vencimento}</td>
            <td>${criarBadgeStatus(item.status)}</td>
            <td>${item.checklist}%</td>
            <td>
                <span class="row-title">${item.owner}</span>
                <span class="row-note">${item.observacao}</span>
            </td>
        </tr>
    `;
}

function criarKanban(titulo, itens, tipo) {
    return `
        <section class="kanban-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">${titulo}</p>
                    <h2>${itens.length} item(ns)</h2>
                </div>
                <span class="status-badge is-${tipo}">${titulo}</span>
            </div>
            <ul class="kanban-list">
                ${itens.map((item) => `
                    <li class="kanban-item">
                        <strong>${item.obrigacao}</strong>
                        <p>${item.empresa}</p>
                        <p>${item.checklist}% | ${item.owner}</p>
                    </li>
                `).join('')}
            </ul>
        </section>
    `;
}

function criarBadgeStatus(status) {
    const normalizado = status.toLowerCase();
    let tipo = 'positive';

    if (normalizado.includes('atrasada')) {
        tipo = 'danger';
    } else if (normalizado.includes('validação') || normalizado.includes('andamento')) {
        tipo = 'warning';
    } else if (normalizado.includes('concluída')) {
        tipo = 'positive';
    }

    return `<span class="status-badge is-${tipo}">${status}</span>`;
}

function media(lista) {
    if (!lista.length) {
        return 0;
    }

    return lista.reduce((total, valor) => total + Number(valor || 0), 0) / lista.length;
}

function converterData(valor) {
    const [dia, mes, ano] = valor.split('/').map(Number);
    return new Date(ano, mes - 1, dia);
}

function formatarNumero(valor, casas) {
    return Number(valor).toLocaleString('pt-BR', {
        minimumFractionDigits: casas,
        maximumFractionDigits: casas
    });
}
