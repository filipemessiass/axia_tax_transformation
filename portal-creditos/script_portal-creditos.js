const dadosCreditos = {
    indicadores: {
        identificado: 24.9,
        recuperado: 18.6,
        pipeline: 6.3,
        perdcompAtivos: 3
    },
    carteira: [
        { frente: 'Exclusão do ICMS da base de PIS/COFINS', empresa: 'Axia Energia Holding', identificado: 8.4, recuperado: 6.1, status: 'Homologado', owner: 'Tax Cash', observacao: 'Crédito convertido em caixa e já refletido no book do trimestre.' },
        { frente: 'Créditos sobre manutenção de ativos', empresa: 'Axia Geração Nordeste', identificado: 5.7, recuperado: 4.3, status: 'Protocolado', owner: 'Tributos Indiretos', observacao: 'Memória técnica consolidada e documentação de suporte em revisão final.' },
        { frente: 'Saldo negativo de IRPJ e CSLL', empresa: 'Axia Comercializadora', identificado: 7.2, recuperado: 5.9, status: 'Protocolado', owner: 'Tax Cash', observacao: 'Frente com maior impacto potencial sobre caixa tributário no curto prazo.' },
        { frente: 'Retenções sobre serviços compartilhados', empresa: 'Axia Serviços Corporativos', identificado: 3.6, recuperado: 2.3, status: 'Em análise', owner: 'SSC Fiscal', observacao: 'Última rodada de evidências depende de reconciliação contratual histórica.' }
    ],
    perdcomp: [
        { protocolo: 'PD-2026-0418', empresa: 'Axia Energia Holding', frente: 'Compensação previdenciária', valor: 2.4, etapa: 'Homologação parcial', owner: 'Tax Cash', status: 'Em validação', prazo: '18/04/2026' },
        { protocolo: 'PD-2026-0426', empresa: 'Axia Comercializadora', frente: 'Saldo negativo IRPJ/CSLL', valor: 3.1, etapa: 'Protocolo complementar', owner: 'Tax Cash', status: 'Protocolado', prazo: '26/04/2026' },
        { protocolo: 'PD-2026-0504', empresa: 'Axia Geração Nordeste', frente: 'Créditos de manutenção', valor: 1.8, etapa: 'Checklist final de evidências', owner: 'Tributos Indiretos', status: 'Em preparação', prazo: '04/05/2026' }
    ],
    oportunidades: [
        { oportunidade: 'Crédito complementar de insumos energéticos', empresa: 'Axia Geração Nordeste', potencial: 1.4, maturidade: 'Alta', owner: 'Tributos Indiretos', status: 'Prioritária', acao: 'Fechar parecer técnico e ampliar escopo do pedido complementar.' },
        { oportunidade: 'Revisão de retenções históricas de serviços', empresa: 'Axia Serviços Corporativos', potencial: 0.9, maturidade: 'Média', owner: 'SSC Fiscal', status: 'Mapeada', acao: 'Concluir reconciliação documental e amarrar trilha contratual.' },
        { oportunidade: 'Reprocessamento de créditos PIS/COFINS', empresa: 'Axia Comercializadora', potencial: 1.2, maturidade: 'Alta', owner: 'Tributos Indiretos', status: 'Prioritária', acao: 'Depende do saneamento de CST já endereçado em Inteligência e Compliance.' },
        { oportunidade: 'Aproveitamento de saldo negativo remanescente', empresa: 'Axia Energia Holding', potencial: 1.0, maturidade: 'Média', owner: 'Tax Cash', status: 'Em análise', acao: 'Revisar janela de compensação e critérios de materialidade.' }
    ],
    historico: [
        { periodo: 'Jan/2026', recuperado: 3.1, protocolado: 4.0, conversao: 77.5, destaque: 'Início da frente de exclusão de ICMS na Holding.' },
        { periodo: 'Fev/2026', recuperado: 4.2, protocolado: 5.1, conversao: 82.4, destaque: 'Primeiros créditos homologados e reforço do pipeline de manutenção.' },
        { periodo: 'Mar/2026', recuperado: 5.1, protocolado: 6.0, conversao: 85.0, destaque: 'Saldo negativo da Comercializadora entra no radar prioritário.' },
        { periodo: 'Abr/2026', recuperado: 6.2, protocolado: 6.8, conversao: 91.2, destaque: 'A carteira acelera e fecha o quadrimestre em R$ 18,6 mi recuperados.' }
    ],
    alertas: [
        {
            tipo: 'warning',
            titulo: 'Pipeline relevante ainda não monetizado',
            descricao: 'A carteira mantém R$ 6,3 mi em captura pendente, com maior peso em manutenção de ativos e saldo negativo de IRPJ/CSLL.'
        },
        {
            tipo: 'warning',
            titulo: 'PER/DCOMP exige disciplina de evidências',
            descricao: 'Três protocolos seguem ativos e dependem de amarração documental para preservar ritmo de homologação.'
        },
        {
            tipo: 'positive',
            titulo: 'Conversão em caixa acima do plano',
            descricao: 'O quadrimestre encerra com R$ 18,6 mi recuperados e tendência de aceleração na taxa de conversão dos créditos.'
        }
    ]
};

function inicializarPortalCreditos() {
    mostrarSecao('visao');
}

function mostrarSecao(secao) {
    atualizarMenuAtivo(secao);

    const content = document.getElementById('creditos-content');
    const renderizadores = {
        visao: renderizarVisaoExecutiva,
        carteira: renderizarCarteira,
        perdcomp: renderizarPerdcomp,
        oportunidades: renderizarOportunidades,
        historico: renderizarHistorico
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
            ${criarCardResumo('Créditos identificados', formatarMilhoes(dadosCreditos.indicadores.identificado), 'Carteira mapeada no exercício', 'Pipeline tributário consolidado', 'positive')}
            ${criarCardResumo('Créditos recuperados', formatarMilhoes(dadosCreditos.indicadores.recuperado), 'Conversão acumulada em caixa', 'Base coerente com os KPIs', 'positive')}
            ${criarCardResumo('Pipeline pendente', formatarMilhoes(dadosCreditos.indicadores.pipeline), 'Saldo ainda não monetizado', 'Prioridade de protocolo', 'warning')}
            ${criarCardResumo('PER/DCOMP ativos', `${dadosCreditos.indicadores.perdcompAtivos}`, 'Protocolos em acompanhamento', 'Governança de evidências ativa', 'warning')}
        </div>

        <div class="alert-grid">
            ${dadosCreditos.alertas.map(criarCardAlerta).join('')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Conversão por frente</p>
                        <h2>Carteira de créditos tributários</h2>
                    </div>
                    <span class="panel-tag">YTD 2026</span>
                </div>
                <div class="progress-list">
                    ${dadosCreditos.carteira.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.frente}</span>
                                <small>${formatarPercentual(percentualRecuperado(item))}</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${percentualRecuperado(item)}%"></div>
                            </div>
                            <span class="metric-legend">${item.empresa} | Recuperado ${formatarMilhoes(item.recuperado)} de ${formatarMilhoes(item.identificado)}</span>
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
                    <span class="panel-tag">Créditos</span>
                </div>
                <ul class="insight-list">
                    <li>A carteira de R$ 24,9 mi identificados já converteu R$ 18,6 mi em caixa, sustentando a narrativa de eficiência financeira no quadrimestre.</li>
                    <li>Holding e Comercializadora concentram as principais frentes de monetização de curto prazo, enquanto Geração e SSC ampliam o pipeline futuro.</li>
                    <li>O módulo foi desenhado para ligar oportunidade, protocolo, conversão e ação corretiva em uma única visão gerencial.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Portfólio consolidado</p>
                    <h2>Frentes, valores e estágio atual</h2>
                </div>
                <span class="panel-tag">Axia Energia</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Frente</th>
                            <th>Empresa</th>
                            <th>Identificado</th>
                            <th>Recuperado</th>
                            <th>Conversão</th>
                            <th>Status</th>
                            <th>Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosCreditos.carteira.map((item) => `
                            <tr>
                                <td>
                                    <span class="row-title">${item.frente}</span>
                                    <span class="row-note">${item.observacao}</span>
                                </td>
                                <td>${item.empresa}</td>
                                <td>${formatarMilhoes(item.identificado)}</td>
                                <td>${formatarMilhoes(item.recuperado)}</td>
                                <td>${formatarPercentual(percentualRecuperado(item))}</td>
                                <td>${criarBadgeStatus(item.status)}</td>
                                <td>${item.owner}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarCarteira() {
    const totalIdentificado = somar(dadosCreditos.carteira, 'identificado');
    const totalRecuperado = somar(dadosCreditos.carteira, 'recuperado');
    const homologados = dadosCreditos.carteira.filter((item) => item.status === 'Homologado').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Carteira total', formatarMilhoes(totalIdentificado), 'Base ativa do exercício', 'Frentes priorizadas', 'positive')}
            ${criarCardResumo('Valor monetizado', formatarMilhoes(totalRecuperado), 'Conversão acumulada', 'Caixa já capturado', 'positive')}
            ${criarCardResumo('Saldo remanescente', formatarMilhoes(totalIdentificado - totalRecuperado), 'Ainda em protocolo ou análise', 'Potencial de curto prazo', 'warning')}
            ${criarCardResumo('Frentes homologadas', `${homologados}`, 'Sem pendência material', 'Benchmark de execução', 'positive')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Peso por empresa</p>
                        <h2>Participação na carteira</h2>
                    </div>
                    <span class="panel-tag">Carteira</span>
                </div>
                <div class="progress-list">
                    ${dadosCreditos.carteira.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.empresa}</span>
                                <small>${formatarMilhoes(item.identificado)}</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${larguraPercentual(item.identificado, totalIdentificado)}%"></div>
                            </div>
                            <span class="metric-legend">${item.frente} | ${item.status}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Leitura da carteira</p>
                        <h2>Prioridades de monetização</h2>
                    </div>
                    <span class="panel-tag">Pipeline</span>
                </div>
                <ul class="note-list">
                    <li>A Holding já converteu a frente mais madura do portfólio e funciona como referência para novas homologações.</li>
                    <li>A Comercializadora combina alta materialidade com boa taxa de conversão, mas ainda depende de protocolo complementar.</li>
                    <li>O objetivo é deslocar rapidamente as frentes em análise para protocolo estruturado, mantendo disciplina de evidências.</li>
                </ul>
            </section>
        </div>
    `;
}

function renderizarPerdcomp() {
    const totalProtocolado = somar(dadosCreditos.perdcomp, 'valor');
    const emValidacao = dadosCreditos.perdcomp.filter((item) => item.status === 'Em validação').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Protocolos ativos', `${dadosCreditos.perdcomp.length}`, 'PER/DCOMP no radar atual', 'Fluxo controlado', 'warning')}
            ${criarCardResumo('Valor em protocolo', formatarMilhoes(totalProtocolado), 'Pedidos ativos ou em preparação', 'Impacto material em caixa', 'warning')}
            ${criarCardResumo('Em validação', `${emValidacao}`, 'Dependem de homologação técnica', 'Acompanhamento diário', 'warning')}
            ${criarCardResumo('Próximo prazo', '18/04/2026', 'Holding', 'Checkpoint mais próximo', 'positive')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Pipeline PER/DCOMP</p>
                        <h2>Andamento dos protocolos</h2>
                    </div>
                    <span class="panel-tag">Cash Tax</span>
                </div>
                <div class="progress-list">
                    ${dadosCreditos.perdcomp.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.protocolo}</span>
                                <small>${item.prazo}</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${larguraStatusPerdcomp(item.status)}%"></div>
                            </div>
                            <span class="metric-legend">${item.empresa} | ${item.frente} | ${formatarMilhoes(item.valor)}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Mensagens operacionais</p>
                        <h2>Pontos de atenção dos protocolos</h2>
                    </div>
                    <span class="panel-tag">PER/DCOMP</span>
                </div>
                <ul class="note-list">
                    <li>A frente da Holding segue mais madura e serve de referência de governança para os demais pedidos.</li>
                    <li>Comercializadora e Geração carregam a maior parte do pipeline não monetizado e precisam manter disciplina de documentação.</li>
                    <li>O monitoramento foi desenhado para conectar etapa, valor, prazo e owner em uma leitura objetiva de execução.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Controle de protocolos</p>
                    <h2>PER/DCOMP por empresa</h2>
                </div>
                <span class="panel-tag">Abr-Mai/2026</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Protocolo</th>
                            <th>Empresa</th>
                            <th>Frente</th>
                            <th>Valor</th>
                            <th>Etapa</th>
                            <th>Prazo</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosCreditos.perdcomp.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.protocolo}</span></td>
                                <td>${item.empresa}</td>
                                <td>${item.frente}</td>
                                <td>${formatarMilhoes(item.valor)}</td>
                                <td>${item.etapa}</td>
                                <td>${item.prazo}</td>
                                <td>${criarBadgeStatus(item.status)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarOportunidades() {
    const totalPotencial = somar(dadosCreditos.oportunidades, 'potencial');
    const prioritarias = dadosCreditos.oportunidades.filter((item) => item.status === 'Prioritária').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Potencial adicional', formatarMilhoes(totalPotencial), 'Oportunidades não monetizadas', 'Upside relevante para caixa', 'positive')}
            ${criarCardResumo('Oportunidades prioritárias', `${prioritarias}`, 'Com maturidade alta', 'Ação executiva imediata', 'warning')}
            ${criarCardResumo('Maturidade alta', `${dadosCreditos.oportunidades.filter((item) => item.maturidade === 'Alta').length}`, 'Frentes mais prontas', 'Conversão acelerável', 'positive')}
            ${criarCardResumo('Owner dominante', 'Tributos Indiretos', 'Concentra duas frentes relevantes', 'Coordenação necessária', 'warning')}
        </div>

        <div class="alert-grid">
            ${dadosCreditos.oportunidades.map((item) => criarCardOportunidade(item)).join('')}
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Backlog de valor</p>
                    <h2>Oportunidades e ações recomendadas</h2>
                </div>
                <span class="panel-tag">Tax opportunity</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Oportunidade</th>
                            <th>Empresa</th>
                            <th>Potencial</th>
                            <th>Maturidade</th>
                            <th>Owner</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosCreditos.oportunidades.map((item) => `
                            <tr>
                                <td>
                                    <span class="row-title">${item.oportunidade}</span>
                                    <span class="row-note">${item.acao}</span>
                                </td>
                                <td>${item.empresa}</td>
                                <td>${formatarMilhoes(item.potencial)}</td>
                                <td>${criarBadgeStatus(item.maturidade)}</td>
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

function renderizarHistorico() {
    const melhorMes = dadosCreditos.historico.reduce((melhor, atual) => (
        atual.recuperado > melhor.recuperado ? atual : melhor
    ));

    return `
        <div class="summary-grid">
            ${criarCardResumo('Quadrimestre recuperado', formatarMilhoes(somar(dadosCreditos.historico, 'recuperado')), 'Jan a Abr/2026', 'Base do KPI executivo', 'positive')}
            ${criarCardResumo('Quadrimestre protocolado', formatarMilhoes(somar(dadosCreditos.historico, 'protocolado')), 'Pedidos submetidos ou preparados', 'Pipeline saudável', 'positive')}
            ${criarCardResumo('Melhor mês', melhorMes.periodo, `Recuperado ${formatarMilhoes(melhorMes.recuperado)}`, 'Aceleração confirmada', 'positive')}
            ${criarCardResumo('Conversão atual', `${formatarNumero(dadosCreditos.historico[dadosCreditos.historico.length - 1].conversao, 1)}%`, 'Abril', 'Performance acima do início do ano', 'positive')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Evolução mensal</p>
                        <h2>Recuperado x protocolado</h2>
                    </div>
                    <span class="panel-tag">YTD 2026</span>
                </div>
                <div class="progress-list">
                    ${dadosCreditos.historico.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.periodo}</span>
                                <small>${formatarPercentual(item.conversao)}</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${item.conversao}%"></div>
                            </div>
                            <span class="metric-legend">Recuperado ${formatarMilhoes(item.recuperado)} | Protocolado ${formatarMilhoes(item.protocolado)}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Leitura temporal</p>
                        <h2>Mensagens do histórico</h2>
                    </div>
                    <span class="panel-tag">Tendência</span>
                </div>
                <ul class="note-list">
                    <li>A taxa de conversão evolui mês a mês, indicando maior maturidade da esteira de créditos e dos protocolos associados.</li>
                    <li>A aceleração de abril confirma o efeito combinado de maior disciplina documental e priorização das frentes de maior materialidade.</li>
                    <li>O histórico reforça a leitura de que o portal de créditos é um instrumento de gestão, não apenas de controle operacional.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Série histórica</p>
                    <h2>Conversão mensal de créditos</h2>
                </div>
                <span class="panel-tag">Jan-Abr/2026</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Período</th>
                            <th>Recuperado</th>
                            <th>Protocolado</th>
                            <th>Conversão</th>
                            <th>Destaque</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosCreditos.historico.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.periodo}</span></td>
                                <td>${formatarMilhoes(item.recuperado)}</td>
                                <td>${formatarMilhoes(item.protocolado)}</td>
                                <td>${formatarPercentual(item.conversao)}</td>
                                <td>${item.destaque}</td>
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

function criarCardOportunidade(item) {
    const tipo = item.status === 'Prioritária' ? 'warning' : 'positive';

    return `
        <article class="alert-card">
            <span class="status-badge is-${tipo}">${item.maturidade}</span>
            <h3>${item.oportunidade}</h3>
            <p>${item.empresa} | ${item.acao}</p>
        </article>
    `;
}

function criarBadgeStatus(status) {
    const normalizado = status.toLowerCase();
    let tipo = 'positive';

    if (
        normalizado.includes('prioritária') ||
        normalizado.includes('em validação')
    ) {
        tipo = 'danger';
    } else if (
        normalizado.includes('protocolado') ||
        normalizado.includes('em preparação') ||
        normalizado.includes('em análise') ||
        normalizado.includes('alta') ||
        normalizado.includes('média') ||
        normalizado.includes('mapeada')
    ) {
        tipo = 'warning';
    } else if (
        normalizado.includes('homologado')
    ) {
        tipo = 'positive';
    }

    return `<span class="status-badge is-${tipo}">${status}</span>`;
}

function somar(lista, chave) {
    return lista.reduce((total, item) => total + Number(item[chave] || 0), 0);
}

function percentualRecuperado(item) {
    if (!item.identificado) {
        return 0;
    }

    return (item.recuperado / item.identificado) * 100;
}

function larguraPercentual(valor, total) {
    if (!total) {
        return 0;
    }

    return (valor / total) * 100;
}

function larguraStatusPerdcomp(status) {
    if (status === 'Em validação') {
        return 82;
    }

    if (status === 'Protocolado') {
        return 68;
    }

    return 54;
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

function formatarPercentual(valor) {
    return `${formatarNumero(valor, 1)}%`;
}
