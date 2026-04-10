const dadosCompliance = {
    indicadores: {
        riscosAtivos: 7,
        contingenciaTotal: 6.4,
        fiscalizacoesAbertas: 2,
        divergenciasMonitoradas: 5
    },
    riscos: [
        { tema: 'Parametrização de CST em operações bilaterais', empresa: 'Axia Comercializadora', exposicao: 0.9, classificacao: 'Alta', owner: 'Tributos Indiretos', status: 'Crítico', plano: 'Ajuste sistêmico com validação retroativa das apurações do trimestre.' },
        { tema: 'Compensação previdenciária histórica', empresa: 'Axia Energia Holding', exposicao: 1.5, classificacao: 'Alta', owner: 'Tax Cash', status: 'Monitorado', plano: 'Fechar trilha de evidências e conciliar reflexos em DCTFWeb.' },
        { tema: 'Créditos sobre manutenção de ativos', empresa: 'Axia Geração Nordeste', exposicao: 1.7, classificacao: 'Alta', owner: 'Tributos Indiretos', status: 'Monitorado', plano: 'Concluir parecer técnico e recalibrar potencial de crédito.' },
        { tema: 'Rateio intercompany de serviços', empresa: 'Axia Serviços Corporativos', exposicao: 1.3, classificacao: 'Média', owner: 'SSC Fiscal', status: 'Controlado', plano: 'Formalizar política de rateio e evidências contratuais no SSC.' },
        { tema: 'Checklist ECF abaixo do target', empresa: 'Axia Comercializadora', exposicao: 0.6, classificacao: 'Média', owner: 'Tax Reporting', status: 'Atenção', plano: 'Acelerar biblioteca documental antes do ciclo anual.' }
    ],
    fiscalizacoes: [
        { orgao: 'Receita Federal', empresa: 'Axia Energia Holding', tema: 'PER/DCOMP e compensações previdenciárias', inicio: 'Fev/2026', etapa: 'Resposta complementar enviada', owner: 'Tax Cash', status: 'Aberta', impacto: 'Baixo', observacao: 'Fiscalização preventiva com foco em lastro documental e amarração dos lotes.' },
        { orgao: 'SEFAZ PE', empresa: 'Axia Geração Nordeste', tema: 'Créditos de manutenção e insumos energéticos', inicio: 'Jan/2026', etapa: 'Memória técnica em revisão final', owner: 'Tributos Indiretos', status: 'Aberta', impacto: 'Médio', observacao: 'Discussão técnica ainda sem auto de infração emitido.' },
        { orgao: 'Receita Federal', empresa: 'Axia Comercializadora', tema: 'PIS/COFINS em operações bilaterais', inicio: 'Nov/2025', etapa: 'Encerrada sem autuação', owner: 'Tributos Indiretos', status: 'Encerrada', impacto: 'Baixo', observacao: 'Encerramento condicionado à regularização de parametrização e reforço de controles.' }
    ],
    contingencias: [
        { frente: 'Compensação previdenciária histórica', empresa: 'Axia Energia Holding', valor: 1.8, probabilidade: 'Possível', owner: 'Tax Cash', status: 'Em defesa', observacao: 'Base alinhada à frente já monitorada em tributos e inteligência fiscal.' },
        { frente: 'Créditos sobre manutenção de ativos', empresa: 'Axia Geração Nordeste', valor: 1.7, probabilidade: 'Possível', owner: 'Tributos Indiretos', status: 'Em análise', observacao: 'Potencial depende do entendimento técnico em discussão regulatória.' },
        { frente: 'CST e apuração de PIS/COFINS', empresa: 'Axia Comercializadora', valor: 1.6, probabilidade: 'Provável', owner: 'Tributos Indiretos', status: 'Mitigação imediata', observacao: 'Frente crítica por impacto direto em ETR, fechamento e obrigações.' },
        { frente: 'Rateio de serviços compartilhados', empresa: 'Axia Serviços Corporativos', valor: 1.3, probabilidade: 'Remota', owner: 'SSC Fiscal', status: 'Controlada', observacao: 'Carteira suportada por revisão contratual e governança intercompany.' }
    ],
    divergencias: [
        { processo: 'PIS/COFINS Comercializadora', empresa: 'Axia Comercializadora', origem: 'CST parametrizado de forma inconsistente', valor: 0.2, owner: 'Tributos Indiretos', status: 'Crítica', acao: 'Recalcular apuração e sincronizar obrigação acessória.' },
        { processo: 'PER/DCOMP Holding', empresa: 'Axia Energia Holding', origem: 'Lote protocolado sem amarração final', valor: 0.11, owner: 'Tax Cash', status: 'Alta', acao: 'Conciliar reflexo com DCTFWeb e trilha homologada.' },
        { processo: 'ECD Serviços Corporativos', empresa: 'Axia Serviços Corporativos', origem: 'Anexos intercompany incompletos', valor: 0.06, owner: 'SSC Fiscal', status: 'Moderada', acao: 'Completar documentação de suporte no SSC.' },
        { processo: 'EFD-Reinf Geração Nordeste', empresa: 'Axia Geração Nordeste', origem: 'Retenção EPC fora da matriz histórica', valor: 0.04, owner: 'Fiscal Nordeste', status: 'Moderada', acao: 'Validar contrato e memória de retenção.' }
    ],
    alertas: [
        {
            tipo: 'warning',
            titulo: 'Exposição concentrada em três frentes',
            descricao: 'CST da Comercializadora, PER/DCOMP da Holding e créditos de manutenção da Geração concentram a maior parte do risco material.'
        },
        {
            tipo: 'warning',
            titulo: 'Fiscalizações ainda abertas',
            descricao: 'Dois processos permanecem ativos e exigem disciplina documental para evitar escalonamento regulatório.'
        },
        {
            tipo: 'positive',
            titulo: 'Carteira com planos de mitigação definidos',
            descricao: 'Todos os riscos materiais já possuem owner, plano e conexão com os demais módulos do portal tributário.'
        }
    ]
};

function inicializarPortalCompliance() {
    mostrarSecao('visao');
}

function mostrarSecao(secao) {
    atualizarMenuAtivo(secao);

    const content = document.getElementById('compliance-content');
    const renderizadores = {
        visao: renderizarVisaoExecutiva,
        riscos: renderizarRiscos,
        fiscalizacoes: renderizarFiscalizacoes,
        contingencias: renderizarContingencias,
        divergencias: renderizarDivergencias
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
            ${criarCardResumo('Riscos fiscais ativos', `${dadosCompliance.indicadores.riscosAtivos}`, 'Mapa corporativo consolidado', 'Prioridades definidas', 'warning')}
            ${criarCardResumo('Contingência monitorada', formatarMilhoes(dadosCompliance.indicadores.contingenciaTotal), 'Carteira técnica de exposição', 'Visibilidade financeira preservada', 'warning')}
            ${criarCardResumo('Fiscalizações abertas', `${dadosCompliance.indicadores.fiscalizacoesAbertas}`, 'Órgãos com processos em andamento', 'Governança documental ativa', 'warning')}
            ${criarCardResumo('Divergências monitoradas', `${dadosCompliance.indicadores.divergenciasMonitoradas}`, 'Exceções com plano de ação', 'Ritual de mitigação contínuo', 'positive')}
        </div>

        <div class="alert-grid">
            ${dadosCompliance.alertas.map(criarCardAlerta).join('')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Risco por frente</p>
                        <h2>Exposição material monitorada</h2>
                    </div>
                    <span class="panel-tag">Abr/2026</span>
                </div>
                <div class="progress-list">
                    ${dadosCompliance.riscos.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.tema}</span>
                                <small>${formatarMilhoes(item.exposicao)}</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${larguraExposicao(item.exposicao, somar(dadosCompliance.riscos, 'exposicao'))}%"></div>
                            </div>
                            <span class="metric-legend">${item.empresa} | ${item.classificacao} | ${item.owner}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Leitura executiva</p>
                        <h2>Mensagens para decisão</h2>
                    </div>
                    <span class="panel-tag">Compliance</span>
                </div>
                <ul class="insight-list">
                    <li>A carteira de compliance fiscal está concentrada em frentes já conhecidas pelo CORE, o que reforça coerência entre operação e risco.</li>
                    <li>A Comercializadora permanece como principal prioridade por combinar divergência material, contingência provável e pressão regulatória.</li>
                    <li>O objetivo do módulo é traduzir risco técnico em leitura executiva, com dono, impacto e plano de mitigação explícitos.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Mapa consolidado</p>
                    <h2>Riscos, contingências e status</h2>
                </div>
                <span class="panel-tag">Axia Energia</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Tema</th>
                            <th>Empresa</th>
                            <th>Exposição</th>
                            <th>Classificação</th>
                            <th>Owner</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosCompliance.riscos.map((item) => `
                            <tr>
                                <td>
                                    <span class="row-title">${item.tema}</span>
                                    <span class="row-note">${item.plano}</span>
                                </td>
                                <td>${item.empresa}</td>
                                <td>${formatarMilhoes(item.exposicao)}</td>
                                <td>${criarBadgeStatus(item.classificacao)}</td>
                                <td>${item.owner}</td>
                                <td>${criarBadgeStatus(item.status)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarRiscos() {
    const criticos = dadosCompliance.riscos.filter((item) => item.status === 'Crítico').length;
    const altos = dadosCompliance.riscos.filter((item) => item.classificacao === 'Alta').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Riscos críticos', `${criticos}`, 'Demandam ação imediata', 'Escalonamento diário', 'danger')}
            ${criarCardResumo('Classificação alta', `${altos}`, 'Exposição material concentrada', 'Mitigação prioritária', 'warning')}
            ${criarCardResumo('Exposição agregada', formatarMilhoes(somar(dadosCompliance.riscos, 'exposicao')), 'Carteira ativa do mês', 'Monitoramento executivo', 'warning')}
            ${criarCardResumo('Owners mobilizados', '4', 'Cobertura multidisciplinar', 'Governança transversal', 'positive')}
        </div>

        <div class="alert-grid">
            ${dadosCompliance.riscos.map((item) => criarCardRisco(item)).join('')}
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Matriz de risco</p>
                    <h2>Tema, exposição e plano</h2>
                </div>
                <span class="panel-tag">Risco Fiscal</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Tema</th>
                            <th>Empresa</th>
                            <th>Classificação</th>
                            <th>Exposição</th>
                            <th>Owner</th>
                            <th>Plano</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosCompliance.riscos.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.tema}</span></td>
                                <td>${item.empresa}</td>
                                <td>${criarBadgeStatus(item.classificacao)}</td>
                                <td>${formatarMilhoes(item.exposicao)}</td>
                                <td>${item.owner}</td>
                                <td>${item.plano}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarFiscalizacoes() {
    const abertas = dadosCompliance.fiscalizacoes.filter((item) => item.status === 'Aberta').length;
    const encerradas = dadosCompliance.fiscalizacoes.filter((item) => item.status === 'Encerrada').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Processos abertos', `${abertas}`, 'Órgãos com interação ativa', 'Ritual documental em curso', 'warning')}
            ${criarCardResumo('Processos encerrados', `${encerradas}`, 'Sem autuação material', 'Aprendizado incorporado', 'positive')}
            ${criarCardResumo('Órgãos envolvidos', '2', 'Receita Federal e SEFAZ', 'Cobertura federativa relevante', 'positive')}
            ${criarCardResumo('Impacto máximo', 'Médio', 'Nenhum processo com efeito crítico aberto', 'Posição administrável', 'positive')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Histórico regulatório</p>
                        <h2>Fiscalizações por órgão</h2>
                    </div>
                    <span class="panel-tag">Governança</span>
                </div>
                <div class="progress-list">
                    ${dadosCompliance.fiscalizacoes.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.orgao} | ${item.empresa}</span>
                                <small>${item.inicio}</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${larguraImpacto(item.impacto)}%"></div>
                            </div>
                            <span class="metric-legend">${item.tema} | ${item.owner} | ${item.status}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Mensagens-chave</p>
                        <h2>Leitura das fiscalizações</h2>
                    </div>
                    <span class="panel-tag">Fiscalizações</span>
                </div>
                <ul class="note-list">
                    <li>Os processos em aberto seguem em fase técnica e ainda não se converteram em autuação material para o grupo.</li>
                    <li>A experiência recente da Comercializadora reforça o valor de agir antes da escalada formal do órgão fiscalizador.</li>
                    <li>O painel foi desenhado para ligar órgão, estágio, impacto e owner na mesma visão de supervisão.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Controle de processos</p>
                    <h2>Fiscalizações e estágio atual</h2>
                </div>
                <span class="panel-tag">Abr/2026</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Órgão</th>
                            <th>Empresa</th>
                            <th>Tema</th>
                            <th>Etapa</th>
                            <th>Impacto</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosCompliance.fiscalizacoes.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.orgao}</span></td>
                                <td>${item.empresa}</td>
                                <td>${item.tema}</td>
                                <td>${item.etapa}</td>
                                <td>${criarBadgeStatus(item.impacto)}</td>
                                <td>${criarBadgeStatus(item.status)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarContingencias() {
    const total = somar(dadosCompliance.contingencias, 'valor');
    const provavel = dadosCompliance.contingencias.filter((item) => item.probabilidade === 'Provável').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Carteira contingente', formatarMilhoes(total), 'Base consolidada de abril', 'Visibilidade financeira preservada', 'warning')}
            ${criarCardResumo('Frentes prováveis', `${provavel}`, 'Demanda resposta imediata', 'Prioridade de mitigação', 'danger')}
            ${criarCardResumo('Frentes possíveis', `${dadosCompliance.contingencias.filter((item) => item.probabilidade === 'Possível').length}`, 'Com documentação em reforço', 'Monitoramento técnico', 'warning')}
            ${criarCardResumo('Frentes remotas', `${dadosCompliance.contingencias.filter((item) => item.probabilidade === 'Remota').length}`, 'Baixa pressão financeira', 'Carteira estável', 'positive')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Peso por contingência</p>
                        <h2>Valor monitorado por frente</h2>
                    </div>
                    <span class="panel-tag">Contingências</span>
                </div>
                <div class="progress-list">
                    ${dadosCompliance.contingencias.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.frente}</span>
                                <small>${formatarMilhoes(item.valor)}</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${larguraExposicao(item.valor, total)}%"></div>
                            </div>
                            <span class="metric-legend">${item.empresa} | ${item.probabilidade} | ${item.owner}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Leitura financeira</p>
                        <h2>Mensagens sobre provisão e risco</h2>
                    </div>
                    <span class="panel-tag">Carteira</span>
                </div>
                <ul class="note-list">
                    <li>A maior contingência provável segue na Comercializadora e precisa permanecer conectada aos planos de ajuste operacional.</li>
                    <li>Holding e Geração concentram exposições técnicas relevantes, mas com sustentação documental e tese já estruturada.</li>
                    <li>O módulo permite comparar valor, probabilidade e estágio de defesa em uma visão direta para a gerência fiscal.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Carteira de contingências</p>
                    <h2>Valor, probabilidade e status</h2>
                </div>
                <span class="panel-tag">Risk book</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Frente</th>
                            <th>Empresa</th>
                            <th>Valor</th>
                            <th>Probabilidade</th>
                            <th>Owner</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosCompliance.contingencias.map((item) => `
                            <tr>
                                <td>
                                    <span class="row-title">${item.frente}</span>
                                    <span class="row-note">${item.observacao}</span>
                                </td>
                                <td>${item.empresa}</td>
                                <td>${formatarMilhoes(item.valor)}</td>
                                <td>${criarBadgeStatus(item.probabilidade)}</td>
                                <td>${item.owner}</td>
                                <td>${criarBadgeStatus(item.status)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarDivergencias() {
    const total = somar(dadosCompliance.divergencias, 'valor');
    const criticas = dadosCompliance.divergencias.filter((item) => item.status === 'Crítica').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Gap consolidado', formatarMilhoes(total), 'Diferenças ainda abertas', 'Reconciliação diária', 'warning')}
            ${criarCardResumo('Divergências críticas', `${criticas}`, 'Maior risco para fechamento', 'Escalação imediata', 'danger')}
            ${criarCardResumo('Empresas com exceções', '4', 'Cobertura do grupo inteiro', 'Mapa completo de desvios', 'positive')}
            ${criarCardResumo('Principal origem', 'Parametrização', 'Sistemas e evidências', 'Atuar na causa-raiz', 'warning')}
        </div>

        <div class="alert-grid">
            ${dadosCompliance.divergencias.map((item) => criarCardDivergencia(item)).join('')}
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Fila de divergências</p>
                    <h2>Origem, valor e ação corretiva</h2>
                </div>
                <span class="panel-tag">Reconciliação</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Processo</th>
                            <th>Empresa</th>
                            <th>Origem</th>
                            <th>Valor</th>
                            <th>Owner</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosCompliance.divergencias.map((item) => `
                            <tr>
                                <td>
                                    <span class="row-title">${item.processo}</span>
                                    <span class="row-note">${item.acao}</span>
                                </td>
                                <td>${item.empresa}</td>
                                <td>${item.origem}</td>
                                <td>${formatarMilhoes(item.valor)}</td>
                                <td>${item.owner}</td>
                                <td>${criarBadgeStatus(item.status)}</td>
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

function criarCardRisco(item) {
    const tipo = item.status === 'Crítico' ? 'danger' : item.classificacao === 'Alta' ? 'warning' : 'positive';

    return `
        <article class="alert-card">
            <span class="status-badge is-${tipo}">${item.classificacao}</span>
            <h3>${item.tema}</h3>
            <p>${item.empresa} | ${item.plano}</p>
        </article>
    `;
}

function criarCardDivergencia(item) {
    const tipo = item.status === 'Crítica' ? 'danger' : item.status === 'Alta' ? 'warning' : 'positive';

    return `
        <article class="alert-card">
            <span class="status-badge is-${tipo}">${item.status}</span>
            <h3>${item.processo}</h3>
            <p>${item.origem}</p>
        </article>
    `;
}

function criarBadgeStatus(status) {
    const normalizado = status.toLowerCase();
    let tipo = 'positive';

    if (
        normalizado.includes('crítica') ||
        normalizado.includes('crítico') ||
        normalizado.includes('provável')
    ) {
        tipo = 'danger';
    } else if (
        normalizado.includes('alta') ||
        normalizado.includes('média') ||
        normalizado.includes('possível') ||
        normalizado.includes('atenção') ||
        normalizado.includes('monitorado') ||
        normalizado.includes('aberta') ||
        normalizado.includes('análise') ||
        normalizado.includes('defesa') ||
        normalizado.includes('mitigação')
    ) {
        tipo = 'warning';
    } else if (
        normalizado.includes('médio') ||
        normalizado.includes('baixo') ||
        normalizado.includes('remota') ||
        normalizado.includes('controlada') ||
        normalizado.includes('controlado') ||
        normalizado.includes('encerrada')
    ) {
        tipo = 'positive';
    }

    return `<span class="status-badge is-${tipo}">${status}</span>`;
}

function somar(lista, chave) {
    return lista.reduce((total, item) => total + Number(item[chave] || 0), 0);
}

function larguraExposicao(valor, total) {
    if (!total) {
        return 0;
    }

    return (valor / total) * 100;
}

function larguraImpacto(impacto) {
    if (impacto === 'Médio') {
        return 70;
    }

    if (impacto === 'Baixo') {
        return 42;
    }

    return 92;
}

function formatarNumero(valor, casas) {
    return Number(valor).toLocaleString('pt-BR', {
        minimumFractionDigits: casas,
        maximumFractionDigits: casas
    });
}

function formatarMilhoes(valor) {
    return `R$ ${formatarNumero(valor, 1)} mi`;
}
