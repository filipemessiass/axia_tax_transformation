const dadosTributos = {
    serieMensal: [
        { periodo: 'Jan/2026', realizado: 42.3, previsto: 41.0, irpj: 18.8, csll: 6.9, pisCofins: 16.6, provisao: 4.8, fechamento: 4.8, gap: 0.40 },
        { periodo: 'Fev/2026', realizado: 43.6, previsto: 42.1, irpj: 19.5, csll: 7.2, pisCofins: 16.9, provisao: 5.0, fechamento: 4.6, gap: 0.39 },
        { periodo: 'Mar/2026', realizado: 44.7, previsto: 44.0, irpj: 20.0, csll: 7.4, pisCofins: 17.3, provisao: 5.3, fechamento: 4.6, gap: 0.49 },
        { periodo: 'Abr/2026', realizado: 46.2, previsto: 45.2, irpj: 20.7, csll: 7.7, pisCofins: 17.8, provisao: 5.3, fechamento: 4.5, gap: 0.41 }
    ],
    empresasAbril: [
        { empresa: 'Axia Energia Holding', unidade: 'Matriz São Paulo', irpj: 8.4, csll: 3.2, pisCofins: 6.4, previsto: 17.4, provisao: 2.1, fechamento: 4.2, status: 'Conciliado' },
        { empresa: 'Axia Geração Nordeste', unidade: 'Hub Recife', irpj: 5.6, csll: 2.1, pisCofins: 4.7, previsto: 12.6, provisao: 1.4, fechamento: 4.7, status: 'Monitorado' },
        { empresa: 'Axia Comercializadora', unidade: 'Mesa Rio de Janeiro', irpj: 4.8, csll: 1.7, pisCofins: 5.1, previsto: 11.0, provisao: 1.2, fechamento: 5.1, status: 'Atenção' },
        { empresa: 'Axia Serviços Corporativos', unidade: 'SSC Belo Horizonte', irpj: 1.9, csll: 0.7, pisCofins: 1.6, previsto: 4.2, provisao: 0.6, fechamento: 3.8, status: 'Conciliado' }
    ],
    contribuicoes: [
        { empresa: 'Axia Energia Holding', baseCredito: 14.8, apurado: 6.4, previsto: 6.2, divergencia: 0.2, status: 'Controlado', observacao: 'Aproveitamento de créditos em linha com o budget.' },
        { empresa: 'Axia Geração Nordeste', baseCredito: 11.2, apurado: 4.7, previsto: 4.6, divergencia: 0.1, status: 'Controlado', observacao: 'Sem desvios materiais após conciliação dos insumos energéticos.' },
        { empresa: 'Axia Comercializadora', baseCredito: 12.1, apurado: 5.1, previsto: 4.9, divergencia: 0.2, status: 'Atenção', observacao: 'Diferença ligada à parametrização de CST em operações bilaterais.' },
        { empresa: 'Axia Serviços Corporativos', baseCredito: 3.8, apurado: 1.6, previsto: 1.5, divergencia: 0.1, status: 'Controlado', observacao: 'Rateio consolidado e revisado pelo SSC.' }
    ],
    provisoes: [
        { tema: 'Reorganização societária 2024', empresa: 'Axia Energia Holding', valor: 1.8, probabilidade: 'Média', owner: 'Tax Advisory', status: 'Parecer final emitido' },
        { tema: 'Crédito de PIS/COFINS sobre manutenção', empresa: 'Axia Geração Nordeste', valor: 1.4, probabilidade: 'Alta', owner: 'Tributos Indiretos', status: 'Memória de cálculo em revisão' },
        { tema: 'Compensação previdenciária histórica', empresa: 'Axia Comercializadora', valor: 1.2, probabilidade: 'Média', owner: 'Tax Cash', status: 'Revisão conjunta com consultoria' },
        { tema: 'Retenções sobre serviços compartilhados', empresa: 'Axia Serviços Corporativos', valor: 0.9, probabilidade: 'Baixa', owner: 'SSC Fiscal', status: 'Monitorado sem efeito material' }
    ],
    conciliacao: [
        { frente: 'PIS/COFINS Comercializadora', empresa: 'Axia Comercializadora', diferenca: 0.18, causa: 'Parametrização de CST', acao: 'Ajuste sistêmico e recálculo da apuração', prazo: '12/04', status: 'Crítico' },
        { frente: 'Compensação previdenciária', empresa: 'Axia Energia Holding', diferenca: 0.11, causa: 'Amarração de PER/DCOMP', acao: 'Reconciliar lote com DCTFWeb', prazo: '14/04', status: 'Em curso' },
        { frente: 'Rateio de insumos energéticos', empresa: 'Axia Geração Nordeste', diferenca: 0.08, causa: 'Fechamento de medição', acao: 'Confirmar memória de cálculo com operação', prazo: '15/04', status: 'Controlado' },
        { frente: 'Serviços compartilhados', empresa: 'Axia Serviços Corporativos', diferenca: 0.04, causa: 'Ajuste intercompany', acao: 'Fechar trilha de evidências no SSC', prazo: '11/04', status: 'Controlado' }
    ],
    alertas: [
        {
            tipo: 'warning',
            titulo: 'Desvio relevante em PIS/COFINS',
            descricao: 'A Axia Comercializadora concentra R$ 0,2 mi acima do previsto em abril, puxado por parametrização de CST.'
        },
        {
            tipo: 'warning',
            titulo: 'Gap de conciliação ainda aberto',
            descricao: 'A carteira consolidada encerra abril com R$ 0,41 mi em itens de reconciliação tributária ainda em tratamento.'
        },
        {
            tipo: 'positive',
            titulo: 'Fechamento dentro da meta gerencial',
            descricao: 'O ciclo médio de fechamento fiscal está em 4,5 dias, sustentando previsibilidade para a diretoria.'
        }
    ]
};

function inicializarPortalTributos() {
    mostrarSecao('visao');
}

function mostrarSecao(secao) {
    atualizarMenuAtivo(secao);

    const content = document.getElementById('tributos-content');
    const renderizadores = {
        visao: renderizarVisaoExecutiva,
        diretos: renderizarTributosDiretos,
        contribuicoes: renderizarContribuicoes,
        provisoes: renderizarProvisoes,
        conciliacao: renderizarConciliacao
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
    const atual = dadosTributos.serieMensal[dadosTributos.serieMensal.length - 1];
    const desvioTotal = atual.realizado - atual.previsto;
    const taxRate = (atual.irpj + atual.csll) / 81.5;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Carga tributária do período', formatarMilhoes(atual.realizado), `Previsto ${formatarMilhoes(atual.previsto)}`, `Desvio ${formatarSinalizado(desvioTotal)}`, desvioTotal > 0 ? 'warning' : 'positive')}
            ${criarCardResumo('Tax rate efetivo', formatarPercentual(taxRate), 'Meta executiva 31,5%', 'Pressão acima do target', 'warning')}
            ${criarCardResumo('Provisões fiscais', formatarMilhoes(atual.provisao), 'Carteira técnica consolidada', '4 frentes materiais monitoradas', 'positive')}
            ${criarCardResumo('Fechamento fiscal', `${formatarNumero(atual.fechamento, 1)} dias`, 'Meta gerencial até 5 dias', 'Janela de fechamento estável', 'positive')}
        </div>

        <div class="alert-grid">
            ${dadosTributos.alertas.map(criarCardAlerta).join('')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Acompanhamento mensal</p>
                        <h2>Real x previsto de tributos</h2>
                    </div>
                    <span class="panel-tag">Core tributário</span>
                </div>
                <div class="comparison-bars">
                    ${criarGraficoComparativo()}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Leitura gerencial</p>
                        <h2>Mensagens para decisão</h2>
                    </div>
                    <span class="panel-tag">Executivo</span>
                </div>
                <ul class="insight-list">
                    <li>A carga tributária consolidada de abril encerra em ${formatarMilhoes(atual.realizado)}, ${formatarSinalizado(desvioTotal)} frente ao orçamento fiscal do mês.</li>
                    <li>A maior pressão está concentrada em PIS/COFINS da Comercializadora, o que justifica acompanhamento diário até o fechamento final.</li>
                    <li>O ciclo médio de ${formatarNumero(atual.fechamento, 1)} dias mantém a narrativa de previsibilidade para gerente e supervisor fiscal.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Fechamento por empresa</p>
                    <h2>Visão consolidada de abril/2026</h2>
                </div>
                <span class="panel-tag">Axia Energia</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>IRPJ</th>
                            <th>CSLL</th>
                            <th>PIS/COFINS</th>
                            <th>Total</th>
                            <th>Provisão</th>
                            <th>Fechamento</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosTributos.empresasAbril.map((empresa) => `
                            <tr>
                                <td>
                                    <span class="row-title">${empresa.empresa}</span>
                                    <span class="row-note">${empresa.unidade}</span>
                                </td>
                                <td>${formatarMilhoes(empresa.irpj)}</td>
                                <td>${formatarMilhoes(empresa.csll)}</td>
                                <td>${formatarMilhoes(empresa.pisCofins)}</td>
                                <td>${formatarMilhoes(totalizarEmpresa(empresa))}</td>
                                <td>${formatarMilhoes(empresa.provisao)}</td>
                                <td>${formatarNumero(empresa.fechamento, 1)} dias</td>
                                <td>${criarBadgeStatus(empresa.status)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarTributosDiretos() {
    const totalIrpj = somar(dadosTributos.empresasAbril, 'irpj');
    const totalCsll = somar(dadosTributos.empresasAbril, 'csll');
    const baseResultado = 81.5;

    return `
        <div class="summary-grid">
            ${criarCardResumo('IRPJ do período', formatarMilhoes(totalIrpj), 'Consolidado abril/2026', 'Linha principal da apuração', 'positive')}
            ${criarCardResumo('CSLL do período', formatarMilhoes(totalCsll), 'Consolidado abril/2026', 'Base alinhada ao fechamento', 'positive')}
            ${criarCardResumo('Tributos diretos', formatarMilhoes(totalIrpj + totalCsll), `Resultado pré-tributos ${formatarMilhoes(baseResultado)}`, 'Tax rate direto 34,8%', 'warning')}
            ${criarCardResumo('Desvio vs budget', formatarMilhoes(0.4), 'Somente IRPJ + CSLL', 'Concentrado na Holding', 'warning')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Apuração direta</p>
                        <h2>Participação por empresa</h2>
                    </div>
                    <span class="panel-tag">IRPJ e CSLL</span>
                </div>
                <div class="mini-metrics">
                    ${dadosTributos.empresasAbril.map((empresa) => `
                        <div class="mini-metric">
                            <div class="mini-metric-top">
                                <span>${empresa.empresa}</span>
                                <small>${formatarMilhoes(empresa.irpj + empresa.csll)}</small>
                            </div>
                            <div class="mini-track">
                                <div class="mini-fill" style="width: ${((empresa.irpj + empresa.csll) / (totalIrpj + totalCsll)) * 100}%"></div>
                            </div>
                            <span class="metric-legend">IRPJ ${formatarMilhoes(empresa.irpj)} | CSLL ${formatarMilhoes(empresa.csll)}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Diagnóstico executivo</p>
                        <h2>Prioridades de gestão</h2>
                    </div>
                    <span class="panel-tag">Diretos</span>
                </div>
                <ul class="insight-list">
                    <li>A Holding responde por ${formatarMilhoes(11.6)} de tributos diretos e puxa a maior parte do tax rate consolidado do período.</li>
                    <li>A Geração mantém previsibilidade e reforça a tese de estabilidade operacional, sem ruído material em IRPJ/CSLL.</li>
                    <li>O módulo direciona atenção à ponte entre lucro societário, ajustes fiscais e provisão técnica.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Bridge de apuração</p>
                    <h2>IRPJ e CSLL por unidade</h2>
                </div>
                <span class="panel-tag">Abr/2026</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>IRPJ</th>
                            <th>CSLL</th>
                            <th>Total</th>
                            <th>Previsto total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosTributos.empresasAbril.map((empresa) => `
                            <tr>
                                <td>
                                    <span class="row-title">${empresa.empresa}</span>
                                    <span class="row-note">${empresa.unidade}</span>
                                </td>
                                <td>${formatarMilhoes(empresa.irpj)}</td>
                                <td>${formatarMilhoes(empresa.csll)}</td>
                                <td>${formatarMilhoes(empresa.irpj + empresa.csll)}</td>
                                <td>${formatarMilhoes(empresa.previsto - empresa.pisCofins)}</td>
                                <td>${criarBadgeStatus(empresa.status)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarContribuicoes() {
    const totalPisCofins = somar(dadosTributos.contribuicoes, 'apurado');
    const totalPrevisto = somar(dadosTributos.contribuicoes, 'previsto');
    const totalDivergencia = somar(dadosTributos.contribuicoes, 'divergencia');

    return `
        <div class="summary-grid">
            ${criarCardResumo('PIS/COFINS apurado', formatarMilhoes(totalPisCofins), `Previsto ${formatarMilhoes(totalPrevisto)}`, `Desvio ${formatarMilhoes(totalDivergencia)}`, 'warning')}
            ${criarCardResumo('Base de crédito', formatarMilhoes(somar(dadosTributos.contribuicoes, 'baseCredito')), 'Volume monitorado no mês', 'Suporta recuperação futura', 'positive')}
            ${criarCardResumo('Unidades em atenção', '1', 'CST e parametrização', 'Foco na Comercializadora', 'warning')}
            ${criarCardResumo('Cobertura analítica', '100%', 'Todas as frentes reconciliadas', 'Ritual diário ativo', 'positive')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Contribuições</p>
                        <h2>Resumo por empresa</h2>
                    </div>
                    <span class="panel-tag">PIS/COFINS</span>
                </div>
                <ul class="action-list">
                    ${dadosTributos.contribuicoes.map((item) => `
                        <li>
                            <strong>${item.empresa}</strong><br>
                            Apurado ${formatarMilhoes(item.apurado)} vs previsto ${formatarMilhoes(item.previsto)}. ${item.observacao}
                        </li>
                    `).join('')}
                </ul>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Leitura executiva</p>
                        <h2>Mensagem para a supervisão fiscal</h2>
                    </div>
                    <span class="panel-tag">Contribuições</span>
                </div>
                <ul class="insight-list">
                    <li>A divergência consolidada permanece controlada em ${formatarMilhoes(totalDivergencia)}, mas com concentração clara na Comercializadora.</li>
                    <li>A base de crédito de ${formatarMilhoes(somar(dadosTributos.contribuicoes, 'baseCredito'))} reforça a agenda de recuperação e compensação futura.</li>
                    <li>O racional da área está orientado à consistência entre apuração, classificação fiscal e crédito aproveitado.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Apuração detalhada</p>
                    <h2>PIS/COFINS por empresa</h2>
                </div>
                <span class="panel-tag">Abr/2026</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>Base de crédito</th>
                            <th>Apurado</th>
                            <th>Previsto</th>
                            <th>Divergência</th>
                            <th>Status</th>
                            <th>Observação</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosTributos.contribuicoes.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.empresa}</span></td>
                                <td>${formatarMilhoes(item.baseCredito)}</td>
                                <td>${formatarMilhoes(item.apurado)}</td>
                                <td>${formatarMilhoes(item.previsto)}</td>
                                <td>${formatarMilhoes(item.divergencia)}</td>
                                <td>${criarBadgeStatus(item.status)}</td>
                                <td>${item.observacao}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarProvisoes() {
    const totalProvisoes = somar(dadosTributos.provisoes, 'valor');

    return `
        <div class="summary-grid">
            ${criarCardResumo('Carteira provisionada', formatarMilhoes(totalProvisoes), 'Abr/2026', 'Base técnica consolidada', 'positive')}
            ${criarCardResumo('Frentes com risco alto', '1', 'Tema material em tributos indiretos', 'Monitoramento intensivo', 'warning')}
            ${criarCardResumo('Pareceres emitidos', '3 de 4', 'Cobertura jurídica e técnica', 'Encerrar última memória de cálculo', 'warning')}
            ${criarCardResumo('Materialidade média', formatarMilhoes(totalProvisoes / dadosTributos.provisoes.length), 'Por tema provisionado', 'Carteira bem segmentada', 'positive')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Carteira técnica</p>
                        <h2>Provisões por tema</h2>
                    </div>
                    <span class="panel-tag">Provisões</span>
                </div>
                <div class="mini-metrics">
                    ${dadosTributos.provisoes.map((item) => `
                        <div class="mini-metric">
                            <div class="mini-metric-top">
                                <span>${item.tema}</span>
                                <small>${formatarMilhoes(item.valor)}</small>
                            </div>
                            <div class="mini-track">
                                <div class="mini-fill" style="width: ${(item.valor / totalProvisoes) * 100}%"></div>
                            </div>
                            <span class="metric-legend">${item.empresa} | ${item.probabilidade}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Leitura gerencial</p>
                        <h2>Mensagens para a diretoria</h2>
                    </div>
                    <span class="panel-tag">Executivo</span>
                </div>
                <ul class="insight-list">
                    <li>A carteira de provisões em ${formatarMilhoes(totalProvisoes)} preserva visibilidade financeira e evita surpresas no fechamento.</li>
                    <li>O tema de maior sensibilidade segue na Geração, com risco alto em créditos de PIS/COFINS sobre manutenção terceirizada.</li>
                    <li>A governança por owner facilita o acompanhamento semanal com Tax Advisory e diretoria tributária.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Mapa de provisões</p>
                    <h2>Tema, owner e status técnico</h2>
                </div>
                <span class="panel-tag">Abr/2026</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Tema</th>
                            <th>Empresa</th>
                            <th>Valor</th>
                            <th>Probabilidade</th>
                            <th>Owner</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosTributos.provisoes.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.tema}</span></td>
                                <td>${item.empresa}</td>
                                <td>${formatarMilhoes(item.valor)}</td>
                                <td>${item.probabilidade}</td>
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

function renderizarConciliacao() {
    const gapTotal = somar(dadosTributos.conciliacao, 'diferenca');

    return `
        <div class="summary-grid">
            ${criarCardResumo('Gap consolidado', formatarMilhoes(gapTotal), 'Itens ainda em reconciliação', 'Foco no fechamento de abril', 'warning')}
            ${criarCardResumo('Itens críticos', '1', 'Impacto acima de R$ 0,15 mi', 'Comercializadora priorizada', 'danger')}
            ${criarCardResumo('Itens controlados', '2', 'Materialidade baixa', 'Sem risco para o fechamento', 'positive')}
            ${criarCardResumo('Prazo médio de saneamento', '3 dias', 'Pipeline de resolução', 'Monitoramento diário', 'positive')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Pipeline de reconciliação</p>
                        <h2>Itens em aberto e plano de ação</h2>
                    </div>
                    <span class="panel-tag">Conciliação</span>
                </div>
                <ul class="action-list">
                    ${dadosTributos.conciliacao.map((item) => `
                        <li>
                            <strong>${item.frente}</strong><br>
                            ${item.empresa}: diferença de ${formatarMilhoes(item.diferenca)} por ${item.causa}. Plano: ${item.acao}.
                        </li>
                    `).join('')}
                </ul>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Leitura executiva</p>
                        <h2>Conclusões do fechamento</h2>
                    </div>
                    <span class="panel-tag">Fechamento</span>
                </div>
                <ul class="insight-list">
                    <li>O gap de ${formatarMilhoes(gapTotal)} permanece administrável, mas requer disciplina diária até o corte final do mês.</li>
                    <li>A maior diferença está em PIS/COFINS da Comercializadora, com solução já endereçada em ajuste sistêmico.</li>
                    <li>O desenho do módulo permite transformar exceção operacional em agenda objetiva de saneamento.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Itens conciliatórios</p>
                    <h2>Diferenças, causa e prazo de resolução</h2>
                </div>
                <span class="panel-tag">Abr/2026</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Frente</th>
                            <th>Empresa</th>
                            <th>Diferença</th>
                            <th>Causa</th>
                            <th>Ação</th>
                            <th>Prazo</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosTributos.conciliacao.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.frente}</span></td>
                                <td>${item.empresa}</td>
                                <td>${formatarMilhoes(item.diferenca)}</td>
                                <td>${item.causa}</td>
                                <td>${item.acao}</td>
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

    return `
        <article class="alert-card">
            <span class="status-badge is-${tipo}">${tipo === 'positive' ? 'Estável' : 'Atenção'}</span>
            <h3>${alerta.titulo}</h3>
            <p>${alerta.descricao}</p>
        </article>
    `;
}

function criarBadgeStatus(status) {
    const normalizado = status.toLowerCase();
    let tipo = 'positive';

    if (normalizado.includes('atenção') || normalizado.includes('monitorado') || normalizado.includes('em curso') || normalizado.includes('controlado')) {
        tipo = 'warning';
    }

    if (normalizado.includes('crítico')) {
        tipo = 'danger';
    }

    if (normalizado.includes('conciliado') || normalizado.includes('parecer final') || normalizado.includes('sem efeito')) {
        tipo = 'positive';
    }

    return `<span class="status-badge is-${tipo}">${status}</span>`;
}

function criarGraficoComparativo() {
    const maximo = Math.max(...dadosTributos.serieMensal.map((item) => Math.max(item.realizado, item.previsto)));

    return dadosTributos.serieMensal.map((item) => `
        <div class="bar-group">
            <span class="bar-label">${item.periodo}</span>
            <div class="bar-track-group">
                <div class="bar-track">
                    <div class="bar-fill realizado" style="height: ${(item.realizado / maximo) * 100}%"></div>
                </div>
                <div class="bar-track">
                    <div class="bar-fill previsto" style="height: ${(item.previsto / maximo) * 100}%"></div>
                </div>
            </div>
            <div class="bar-values">
                <span>Real ${formatarMilhoes(item.realizado)}</span>
                <span>Previsto ${formatarMilhoes(item.previsto)}</span>
            </div>
        </div>
    `).join('');
}

function totalizarEmpresa(empresa) {
    return empresa.irpj + empresa.csll + empresa.pisCofins;
}

function somar(lista, chave) {
    return lista.reduce((total, item) => total + Number(item[chave] || 0), 0);
}

function formatarMilhoes(valor) {
    return `R$ ${formatarNumero(valor, 1)} mi`;
}

function formatarNumero(valor, casas) {
    return Number(valor).toLocaleString('pt-BR', {
        minimumFractionDigits: casas,
        maximumFractionDigits: casas
    });
}

function formatarPercentual(valor) {
    return `${formatarNumero(valor * 100, 1)}%`;
}

function formatarSinalizado(valor) {
    return `${valor > 0 ? '+' : ''}${formatarMilhoes(valor)}`;
}
