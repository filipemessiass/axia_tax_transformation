const dadosInteligencia = {
    indicadores: {
        robosAtivos: 6,
        validacoesMes: 428,
        alertasCriticos: 3,
        horasEconomizadas: 186
    },
    robos: [
        { nome: 'Validador de apuração IRPJ/CSLL', empresa: 'Axia Energia Holding', cobertura: 96, ganho: 42, owner: 'Tax Reporting', status: 'Estável', observacao: 'Cruza bridge societária, ajustes fiscais e provisão antes do fechamento.' },
        { nome: 'Monitor de PIS/COFINS por CST', empresa: 'Axia Comercializadora', cobertura: 89, ganho: 36, owner: 'Tributos Indiretos', status: 'Atenção', observacao: 'Identifica combinações de CST fora do padrão esperado nas operações bilaterais.' },
        { nome: 'Robô de reconciliação PER/DCOMP', empresa: 'Axia Energia Holding', cobertura: 91, ganho: 28, owner: 'Tax Cash', status: 'Estável', observacao: 'Concilia lote protocolado com saldo homologado e reflexo em DCTFWeb.' },
        { nome: 'Triagem de retenções EFD-Reinf', empresa: 'Axia Geração Nordeste', cobertura: 87, ganho: 24, owner: 'Fiscal Nordeste', status: 'Estável', observacao: 'Aponta exceções em contratos EPC e retenções fora da matriz histórica.' },
        { nome: 'Conferência de evidências ECD/ECF', empresa: 'Axia Serviços Corporativos', cobertura: 83, ganho: 31, owner: 'SSC Fiscal', status: 'Em implantação', observacao: 'Organiza anexos, razão contábil e premissas para fechamento anual.' },
        { nome: 'Leitor normativo e alertas regulatórios', empresa: 'Corporativo', cobertura: 78, ganho: 25, owner: 'Tax Advisory', status: 'Em expansão', observacao: 'Classifica atualizações legais e distribui alertas por impacto tributário.' }
    ],
    inconsistencias: [
        { evento: 'CST divergente em operações bilaterais', empresa: 'Axia Comercializadora', criticidade: 'Crítica', impacto: 'Pressão de R$ 0,2 mi em PIS/COFINS e aumento do tax rate.', owner: 'Tributos Indiretos', acao: 'Recálculo automático e ajuste sistêmico até 12/04.' },
        { evento: 'Amarração incompleta de PER/DCOMP', empresa: 'Axia Energia Holding', criticidade: 'Alta', impacto: 'Risco de ruído na DCTFWeb e no ciclo de fechamento.', owner: 'Tax Cash', acao: 'Reconciliar lote protocolado com histórico homologado.' },
        { evento: 'Checklist ECF abaixo do target', empresa: 'Axia Comercializadora', criticidade: 'Alta', impacto: 'Reduz previsibilidade de evidências para o calendário anual.', owner: 'Tax Reporting', acao: 'Completar biblioteca documental e automatizar conferência de saldos.' },
        { evento: 'Rateio intercompany sensível', empresa: 'Axia Serviços Corporativos', criticidade: 'Moderada', impacto: 'Gera ajustes recorrentes na base tributável compartilhada.', owner: 'SSC Fiscal', acao: 'Encerrar trilha documental e parametrização de centros de custo.' }
    ],
    leituras: [
        { documento: 'SPED EFD-Contribuições', empresa: 'Axia Comercializadora', score: 74, paginas: 1284, achados: 12, status: 'Atenção', resumo: 'IA simulada identificou padrões atípicos de CST e créditos sem amarração integral.' },
        { documento: 'ECF 2026 - pré-validação', empresa: 'Axia Energia Holding', score: 88, paginas: 942, achados: 5, status: 'Monitorado', resumo: 'Consistência alta entre lucro societário, LALUR e trilha de premissas.' },
        { documento: 'ECD 2026 - base contábil', empresa: 'Axia Serviços Corporativos', score: 86, paginas: 1137, achados: 6, status: 'Monitorado', resumo: 'Alertas residuais concentrados em contas intercompany e anexos de suporte.' },
        { documento: 'SPED EFD-Reinf', empresa: 'Axia Geração Nordeste', score: 91, paginas: 517, achados: 3, status: 'Estável', resumo: 'Leitura assistida valida retenções e concentra apenas exceções pontuais.' }
    ],
    legislacao: [
        { tema: 'Reforma tributária sobre consumo', impacto: 'Alto', horizonte: '2026-2027', owner: 'Tax Advisory', status: 'Monitorado', decisao: 'Mapear impactos em parametrização, pricing e créditos ao longo do rollout.' },
        { tema: 'Atualizações de PER/DCOMP Web', impacto: 'Médio', horizonte: 'Abr/2026', owner: 'Tax Cash', status: 'Em ação', decisao: 'Ajustar robô de reconciliação e reforçar validação pré-protocolo.' },
        { tema: 'Orientação sobre ECF e documentação de suporte', impacto: 'Médio', horizonte: 'Mai/2026', owner: 'Tax Reporting', status: 'Monitorado', decisao: 'Antecipar pacote de evidências e trilhas de revisão do fechamento anual.' },
        { tema: 'Jurisprudência sobre créditos de manutenção', impacto: 'Alto', horizonte: 'Q2/2026', owner: 'Tributos Indiretos', status: 'Em avaliação', decisao: 'Atualizar tese da Geração Nordeste e recalibrar potencial de recuperação.' }
    ],
    alertas: [
        {
            tipo: 'warning',
            titulo: 'Robô de CST priorizado',
            descricao: 'A Comercializadora segue como principal foco da automação por concentrar desvios de PIS/COFINS e pressão sobre o tax rate.'
        },
        {
            tipo: 'warning',
            titulo: 'Leitura assistida pede reforço documental',
            descricao: 'A pré-validação de ECF ainda mostra gaps de evidência que justificam ação antecipada antes do calendário anual.'
        },
        {
            tipo: 'positive',
            titulo: 'Automação gerando escala',
            descricao: 'Os robôs simulados capturam 186 horas economizadas no mês e reduzem esforço manual em atividades de conferência.'
        }
    ]
};

function inicializarPortalInteligencia() {
    mostrarSecao('visao');
}

function mostrarSecao(secao) {
    atualizarMenuAtivo(secao);

    const content = document.getElementById('inteligencia-content');
    const renderizadores = {
        visao: renderizarVisaoExecutiva,
        robos: renderizarRobos,
        inconsistencias: renderizarInconsistencias,
        leitura: renderizarLeitura,
        legislacao: renderizarLegislacao
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
            ${criarCardResumo('Robôs ativos', `${dadosInteligencia.indicadores.robosAtivos}`, 'Automação fiscal em produção', 'Escala operacional ampliada', 'positive')}
            ${criarCardResumo('Validações no mês', `${dadosInteligencia.indicadores.validacoesMes}`, 'Regras executadas no ciclo atual', 'Cobertura crescente dos controles', 'positive')}
            ${criarCardResumo('Alertas críticos', `${dadosInteligencia.indicadores.alertasCriticos}`, 'Eventos com potencial material', 'Escalonamento imediato', 'warning')}
            ${criarCardResumo('Horas economizadas', `${dadosInteligencia.indicadores.horasEconomizadas}h`, 'Produtividade convertida pela automação', 'Ganho direto de capacidade', 'positive')}
        </div>

        <div class="alert-grid">
            ${dadosInteligencia.alertas.map(criarCardAlerta).join('')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Esteira de automação</p>
                        <h2>Cobertura dos robôs fiscais</h2>
                    </div>
                    <span class="panel-tag">Abr/2026</span>
                </div>
                <div class="progress-list">
                    ${dadosInteligencia.robos.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.nome}</span>
                                <small>${item.cobertura}%</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${item.cobertura}%"></div>
                            </div>
                            <span class="metric-legend">${item.empresa} | ${item.ganho}h/mês | ${item.owner}</span>
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
                    <span class="panel-tag">Inteligência</span>
                </div>
                <ul class="insight-list">
                    <li>A automação já atua nas frentes mais sensíveis de apuração, compensação e obrigações, reduzindo dependência de conferência manual.</li>
                    <li>O maior benefício econômico está na priorização de exceções, sobretudo na Comercializadora e na frente de PER/DCOMP da Holding.</li>
                    <li>O portal conecta robôs, leitura documental e monitoramento legal em uma visão única de escala e qualidade tributária.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Portfólio de automação</p>
                    <h2>Robôs e cobertura operacional</h2>
                </div>
                <span class="panel-tag">Governança digital</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Robô</th>
                            <th>Empresa</th>
                            <th>Cobertura</th>
                            <th>Ganho</th>
                            <th>Owner</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosInteligencia.robos.map((item) => `
                            <tr>
                                <td>
                                    <span class="row-title">${item.nome}</span>
                                    <span class="row-note">${item.observacao}</span>
                                </td>
                                <td>${item.empresa}</td>
                                <td>${item.cobertura}%</td>
                                <td>${item.ganho}h/mês</td>
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

function renderizarRobos() {
    const maiorCobertura = Math.max(...dadosInteligencia.robos.map((item) => item.cobertura));
    const totalGanho = somar(dadosInteligencia.robos, 'ganho');
    const implantacao = dadosInteligencia.robos.filter((item) => item.status === 'Em implantação' || item.status === 'Em expansão').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Cobertura máxima', `${maiorCobertura}%`, 'Melhor robô do portfólio', 'Benchmark interno de qualidade', 'positive')}
            ${criarCardResumo('Ganho mensal agregado', `${totalGanho}h`, 'Capacidade liberada pela automação', 'Eficiência material para a operação', 'positive')}
            ${criarCardResumo('Robôs em expansão', `${implantacao}`, 'Frentes ainda em rollout', 'Potencial de escala adicional', 'warning')}
            ${criarCardResumo('Owner com mais frentes', 'Tax Advisory', 'Papel central no monitoramento normativo', 'Coordenação transversal', 'positive')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Produtividade por robô</p>
                        <h2>Capacidade liberada no mês</h2>
                    </div>
                    <span class="panel-tag">Automação</span>
                </div>
                <div class="progress-list">
                    ${dadosInteligencia.robos.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.nome}</span>
                                <small>${item.ganho}h</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${larguraGanho(item.ganho, totalGanho)}%"></div>
                            </div>
                            <span class="metric-legend">${item.empresa} | Cobertura ${item.cobertura}% | ${item.status}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Leitura operacional</p>
                        <h2>Prioridades da esteira</h2>
                    </div>
                    <span class="panel-tag">Robôs</span>
                </div>
                <ul class="note-list">
                    <li>O validador de IRPJ/CSLL e o reconciliador de PER/DCOMP suportam o fechamento com maior previsibilidade para a Holding.</li>
                    <li>O monitor de CST segue como principal alavanca de mitigação na Comercializadora por atuar na origem da divergência recorrente.</li>
                    <li>A conferência de ECD/ECF e o leitor normativo ainda estão em curva de expansão e devem ganhar peso no ciclo anual.</li>
                </ul>
            </section>
        </div>
    `;
}

function renderizarInconsistencias() {
    const criticas = dadosInteligencia.inconsistencias.filter((item) => item.criticidade === 'Crítica').length;
    const altas = dadosInteligencia.inconsistencias.filter((item) => item.criticidade === 'Alta').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Alertas críticos', `${criticas}`, 'Exigem ação imediata', 'Escalonamento diário', 'danger')}
            ${criarCardResumo('Alertas altos', `${altas}`, 'Com efeito operacional relevante', 'Ritual de acompanhamento', 'warning')}
            ${criarCardResumo('Empresas afetadas', '4', 'Cobertura transversal do grupo', 'Mapa corporativo completo', 'positive')}
            ${criarCardResumo('Principal causa', 'CST / evidências', 'Concentra eventos materiais', 'Atacar origem do desvio', 'warning')}
        </div>

        <div class="alert-grid">
            ${dadosInteligencia.inconsistencias.map((item) => criarCardEvento(item)).join('')}
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Fila de exceções</p>
                    <h2>Alertas priorizados pela inteligência</h2>
                </div>
                <span class="panel-tag">Tempo real</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Evento</th>
                            <th>Empresa</th>
                            <th>Criticidade</th>
                            <th>Impacto</th>
                            <th>Owner</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosInteligencia.inconsistencias.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.evento}</span></td>
                                <td>${item.empresa}</td>
                                <td>${criarBadgeStatus(item.criticidade)}</td>
                                <td>${item.impacto}</td>
                                <td>${item.owner}</td>
                                <td>${item.acao}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarLeitura() {
    const scoreMedio = media(dadosInteligencia.leituras.map((item) => item.score));
    const achados = somar(dadosInteligencia.leituras, 'achados');

    return `
        <div class="summary-grid">
            ${criarCardResumo('Score médio de leitura', `${formatarNumero(scoreMedio, 0)}/100`, 'Qualidade dos arquivos revisados', 'Base consistente para priorização', 'positive')}
            ${criarCardResumo('Achados identificados', `${achados}`, 'Exceções documentais e fiscais', 'Fila orientada por risco', 'warning')}
            ${criarCardResumo('Volume lido', `${somar(dadosInteligencia.leituras, 'paginas')} páginas`, 'SPED, ECD e ECF simulados', 'Escala sem esforço manual pleno', 'positive')}
            ${criarCardResumo('Documento mais sensível', 'EFD-Contribuições', 'Comercializadora', 'Foco imediato da revisão', 'warning')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Score por documento</p>
                        <h2>Leitura assistida de arquivos fiscais</h2>
                    </div>
                    <span class="panel-tag">IA simulada</span>
                </div>
                <div class="progress-list">
                    ${dadosInteligencia.leituras.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.documento}</span>
                                <small>${item.score}/100</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${item.score}%"></div>
                            </div>
                            <span class="metric-legend">${item.empresa} | ${item.achados} achados | ${item.paginas} páginas</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Leitura analítica</p>
                        <h2>Mensagens do motor assistido</h2>
                    </div>
                    <span class="panel-tag">SPED / ECF</span>
                </div>
                <ul class="note-list">
                    <li>A EFD-Contribuições da Comercializadora ainda concentra maior densidade de achados e reforça a prioridade do ajuste de CST.</li>
                    <li>A pré-validação da ECF da Holding mostra aderência elevada, reduzindo risco de surpresas no fechamento anual.</li>
                    <li>O uso da leitura assistida desloca o time para análise de exceções, em vez de revisão manual extensiva de arquivos.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Fila documental</p>
                    <h2>Arquivos lidos e score de consistência</h2>
                </div>
                <span class="panel-tag">Document Intelligence</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Documento</th>
                            <th>Empresa</th>
                            <th>Score</th>
                            <th>Páginas</th>
                            <th>Achados</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosInteligencia.leituras.map((item) => `
                            <tr>
                                <td>
                                    <span class="row-title">${item.documento}</span>
                                    <span class="row-note">${item.resumo}</span>
                                </td>
                                <td>${item.empresa}</td>
                                <td>${item.score}/100</td>
                                <td>${item.paginas}</td>
                                <td>${item.achados}</td>
                                <td>${criarBadgeStatus(item.status)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarLegislacao() {
    const impactosAltos = dadosInteligencia.legislacao.filter((item) => item.impacto === 'Alto').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Temas monitorados', `${dadosInteligencia.legislacao.length}`, 'Radar regulatório ativo', 'Cobertura do ciclo fiscal', 'positive')}
            ${criarCardResumo('Impacto alto', `${impactosAltos}`, 'Frentes com possível efeito material', 'Exigem preparo antecipado', 'warning')}
            ${criarCardResumo('Owners mobilizados', '4', 'Tax Advisory, Tax Cash, Reporting e Indiretos', 'Coordenação transversal', 'positive')}
            ${criarCardResumo('Janela prioritária', 'Q2/2026', 'Concentração de mudanças e protocolos', 'Preparação tática necessária', 'warning')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Radar legal</p>
                        <h2>Temas por relevância</h2>
                    </div>
                    <span class="panel-tag">Legislação</span>
                </div>
                <div class="progress-list">
                    ${dadosInteligencia.legislacao.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.tema}</span>
                                <small>${item.impacto}</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${larguraImpacto(item.impacto)}%"></div>
                            </div>
                            <span class="metric-legend">${item.horizonte} | ${item.owner} | ${item.status}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Implicações executivas</p>
                        <h2>Decisões recomendadas</h2>
                    </div>
                    <span class="panel-tag">Radar</span>
                </div>
                <ul class="note-list">
                    <li>A reforma tributária exige trilha contínua de parametrização e leitura antecipada de impactos em pricing e créditos.</li>
                    <li>As mudanças em PER/DCOMP Web têm efeito imediato sobre a esteira de compensações e sobre os robôs de reconciliação.</li>
                    <li>O monitoramento legal foi desenhado para converter atualização regulatória em ação objetiva para o time fiscal.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Backlog regulatório</p>
                    <h2>Temas monitorados e decisões associadas</h2>
                </div>
                <span class="panel-tag">Tax Advisory</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Tema</th>
                            <th>Impacto</th>
                            <th>Horizonte</th>
                            <th>Owner</th>
                            <th>Status</th>
                            <th>Decisão</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosInteligencia.legislacao.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.tema}</span></td>
                                <td>${criarBadgeStatus(item.impacto)}</td>
                                <td>${item.horizonte}</td>
                                <td>${item.owner}</td>
                                <td>${criarBadgeStatus(item.status)}</td>
                                <td>${item.decisao}</td>
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

function criarCardEvento(item) {
    const tipo = item.criticidade === 'Crítica' ? 'danger' : item.criticidade === 'Alta' ? 'warning' : 'positive';

    return `
        <article class="alert-card">
            <span class="status-badge is-${tipo}">${item.criticidade}</span>
            <h3>${item.evento}</h3>
            <p>${item.impacto}</p>
        </article>
    `;
}

function criarBadgeStatus(status) {
    const normalizado = status.toLowerCase();
    let tipo = 'positive';

    if (
        normalizado.includes('crítica') ||
        normalizado.includes('crítico')
    ) {
        tipo = 'danger';
    } else if (
        normalizado.includes('alto') ||
        normalizado.includes('atenção') ||
        normalizado.includes('alta') ||
        normalizado.includes('moderada') ||
        normalizado.includes('médio') ||
        normalizado.includes('monitorado') ||
        normalizado.includes('ação') ||
        normalizado.includes('avaliação') ||
        normalizado.includes('implantação') ||
        normalizado.includes('expansão')
    ) {
        tipo = 'warning';
    } else if (
        normalizado.includes('estável') ||
        normalizado.includes('controlado')
    ) {
        tipo = 'positive';
    }

    return `<span class="status-badge is-${tipo}">${status}</span>`;
}

function somar(lista, chave) {
    return lista.reduce((total, item) => total + Number(item[chave] || 0), 0);
}

function media(lista) {
    if (!lista.length) {
        return 0;
    }

    return somar(lista.map((valor) => ({ valor })), 'valor') / lista.length;
}

function larguraGanho(valor, total) {
    if (!total) {
        return 0;
    }

    return (valor / total) * 100;
}

function larguraImpacto(impacto) {
    if (impacto === 'Alto') {
        return 92;
    }

    if (impacto === 'Médio') {
        return 68;
    }

    return 42;
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
