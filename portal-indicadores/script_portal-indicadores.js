const dadosIndicadores = {
    serieMensal: [
        { periodo: 'Jan/2026', taxRate: 31.6, meta: 31.5, creditos: 12.4, fechamento: 4.8, riscos: 9, ajustes: 3.1 },
        { periodo: 'Fev/2026', taxRate: 32.4, meta: 31.5, creditos: 14.1, fechamento: 4.6, riscos: 8, ajustes: 2.8 },
        { periodo: 'Mar/2026', taxRate: 33.2, meta: 31.5, creditos: 16.5, fechamento: 4.6, riscos: 8, ajustes: 2.6 },
        { periodo: 'Abr/2026', taxRate: 34.8, meta: 31.5, creditos: 18.6, fechamento: 4.5, riscos: 7, ajustes: 2.4 }
    ],
    empresasAbril: [
        { empresa: 'Axia Energia Holding', unidade: 'Matriz São Paulo', resultadoAntesTributo: 33.1, irpj: 8.4, csll: 3.2, creditos: 6.1, fechamento: 4.2, riscos: 2, ajustes: 0.7, owner: 'Tax Reporting', status: 'Monitorado', observacao: 'Holding concentra a maior pressão de ETR do consolidado.' },
        { empresa: 'Axia Geração Nordeste', unidade: 'Hub Recife', resultadoAntesTributo: 22.1, irpj: 5.6, csll: 2.1, creditos: 4.3, fechamento: 4.7, riscos: 1, ajustes: 0.5, owner: 'Fiscal Nordeste', status: 'Controlado', observacao: 'Fechamento estável e carteira de créditos sem desvio material.' },
        { empresa: 'Axia Comercializadora', unidade: 'Mesa Rio de Janeiro', resultadoAntesTributo: 18.6, irpj: 4.8, csll: 1.7, creditos: 5.9, fechamento: 5.1, riscos: 3, ajustes: 0.9, owner: 'Tributos Indiretos', status: 'Atenção', observacao: 'Parametrização de CST ainda pressiona tax rate e tempo de fechamento.' },
        { empresa: 'Axia Serviços Corporativos', unidade: 'SSC Belo Horizonte', resultadoAntesTributo: 7.7, irpj: 1.9, csll: 0.7, creditos: 2.3, fechamento: 3.8, riscos: 1, ajustes: 0.3, owner: 'SSC Fiscal', status: 'Controlado', observacao: 'SSC sustenta o melhor ciclo de fechamento e menor ruído operacional.' }
    ],
    creditos: [
        { frente: 'Exclusão do ICMS da base de PIS/COFINS', empresa: 'Axia Energia Holding', identificado: 8.4, recuperado: 6.1, status: 'Homologado', owner: 'Tax Cash', observacao: 'Crédito com efeito caixa recorrente já refletido no book do trimestre.' },
        { frente: 'Créditos sobre manutenção de ativos', empresa: 'Axia Geração Nordeste', identificado: 5.7, recuperado: 4.3, status: 'Protocolado', owner: 'Tributos Indiretos', observacao: 'Memória de cálculo fechada e documentação de suporte anexada.' },
        { frente: 'Saldo negativo de IRPJ e CSLL', empresa: 'Axia Comercializadora', identificado: 7.2, recuperado: 5.9, status: 'Protocolado', owner: 'Tax Cash', observacao: 'Pedido complementar em fase final de validação para PER/DCOMP.' },
        { frente: 'Retenções sobre serviços compartilhados', empresa: 'Axia Serviços Corporativos', identificado: 3.6, recuperado: 2.3, status: 'Em análise', owner: 'SSC Fiscal', observacao: 'Última rodada de evidências depende de amarração com contratos históricos.' }
    ],
    fechamento: [
        { empresa: 'Axia Energia Holding', owner: 'Tax Reporting', ciclo: 4.2, bloqueio: 'Amarração final de compensação previdenciária', ajustes: 0.7, status: 'Controlado' },
        { empresa: 'Axia Geração Nordeste', owner: 'Fiscal Nordeste', ciclo: 4.7, bloqueio: 'Confirmação de créditos de manutenção', ajustes: 0.5, status: 'Monitorado' },
        { empresa: 'Axia Comercializadora', owner: 'Tributos Indiretos', ciclo: 5.1, bloqueio: 'Recálculo de PIS/COFINS por CST', ajustes: 0.9, status: 'Atenção' },
        { empresa: 'Axia Serviços Corporativos', owner: 'SSC Fiscal', ciclo: 3.8, bloqueio: 'Sem bloqueio material', ajustes: 0.3, status: 'Controlado' }
    ],
    riscos: [
        { tema: 'Parametrização de CST em operações bilaterais', empresa: 'Axia Comercializadora', exposicao: 0.9, impacto: 'Pressão em PIS/COFINS e tax rate', owner: 'Tributos Indiretos', status: 'Crítico', acao: 'Ajuste sistêmico e recálculo até 12/04' },
        { tema: 'Compensação previdenciária histórica', empresa: 'Axia Energia Holding', exposicao: 1.5, impacto: 'Ruído em DCTFWeb e fechamento', owner: 'Tax Cash', status: 'Monitorado', acao: 'Reconciliar lote e formalizar trilha de evidências' },
        { tema: 'Crédito sobre manutenção de ativos', empresa: 'Axia Geração Nordeste', exposicao: 1.7, impacto: 'Posterga captura integral de crédito', owner: 'Tributos Indiretos', status: 'Monitorado', acao: 'Concluir parecer técnico e protocolo complementar' },
        { tema: 'Rateio de serviços compartilhados', empresa: 'Axia Serviços Corporativos', exposicao: 1.3, impacto: 'Ajustes intercompany na base tributável', owner: 'SSC Fiscal', status: 'Controlado', acao: 'Fechar evidências contratuais no SSC' }
    ],
    alertas: [
        {
            tipo: 'warning',
            titulo: 'Tax rate acima da meta executiva',
            descricao: 'Abril encerra com 34,8%, 3,3 p.p. acima do target de 31,5%, concentrado em tributos diretos e PIS/COFINS da Comercializadora.'
        },
        {
            tipo: 'warning',
            titulo: 'Uma unidade fora da meta de fechamento',
            descricao: 'A Comercializadora fecha em 5,1 dias e exige atuação sobre parametrização antes do próximo ciclo regulatório.'
        },
        {
            tipo: 'positive',
            titulo: 'Recuperação de créditos sustentando caixa',
            descricao: 'A carteira acumula R$ 18,6 mi recuperados no ano, com frente relevante já homologada e duas em protocolo.'
        }
    ]
};

function inicializarPortalIndicadores() {
    mostrarSecao('visao');
}

function mostrarSecao(secao) {
    atualizarMenuAtivo(secao);

    const content = document.getElementById('indicadores-content');
    const renderizadores = {
        visao: renderizarVisaoExecutiva,
        taxrate: renderizarTaxRate,
        creditos: renderizarCreditos,
        fechamento: renderizarFechamento,
        riscos: renderizarRiscos
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
    const atual = obterPeriodoAtual();

    return `
        <div class="summary-grid">
            ${criarCardResumo('Tax rate efetivo', formatarPercentual(atual.taxRate), `Meta ${formatarPercentual(atual.meta)}`, 'Pressão acima do target', 'warning')}
            ${criarCardResumo('Créditos recuperados', formatarMilhoes(atual.creditos), 'Acumulado no exercício', 'Geração de caixa capturada', 'positive')}
            ${criarCardResumo('Fechamento fiscal', `${formatarNumero(atual.fechamento, 1)} dias`, 'Meta gerencial até 5 dias', 'Ciclo operacional previsível', 'positive')}
            ${criarCardResumo('Volume de ajustes', formatarMilhoes(atual.ajustes), `${atual.riscos} riscos mapeados`, 'Monitoramento executivo diário', 'warning')}
        </div>

        <div class="alert-grid">
            ${dadosIndicadores.alertas.map(criarCardAlerta).join('')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Painel mensal</p>
                        <h2>Evolução dos principais KPIs</h2>
                    </div>
                    <span class="panel-tag">Jan a Abr/2026</span>
                </div>
                <div class="progress-list">
                    ${dadosIndicadores.serieMensal.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.periodo}</span>
                                <small>${formatarPercentual(item.taxRate)}</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${larguraTaxRate(item.taxRate)}%"></div>
                            </div>
                            <span class="metric-legend">Créditos ${formatarMilhoes(item.creditos)} | Fechamento ${formatarNumero(item.fechamento, 1)} dias | Riscos ${item.riscos}</span>
                        </div>
                    `).join('')}
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
                    <li>O consolidado de abril mostra tax rate de ${formatarPercentual(atual.taxRate)}, acima da meta executiva, com maior contribuição da Holding e da Comercializadora.</li>
                    <li>A captura acumulada de ${formatarMilhoes(atual.creditos)} reforça a narrativa de eficiência financeira e suporta discussões de caixa com a diretoria.</li>
                    <li>O fechamento médio de ${formatarNumero(atual.fechamento, 1)} dias segue controlado, apesar de um ponto fora da meta operacional na Comercializadora.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Score por empresa</p>
                    <h2>Indicadores fiscais consolidados de abril/2026</h2>
                </div>
                <span class="panel-tag">Axia Energia</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>Tax rate</th>
                            <th>Créditos</th>
                            <th>Fechamento</th>
                            <th>Riscos</th>
                            <th>Ajustes</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosIndicadores.empresasAbril.map((empresa) => `
                            <tr>
                                <td>
                                    <span class="row-title">${empresa.empresa}</span>
                                    <span class="row-note">${empresa.unidade}</span>
                                </td>
                                <td>${formatarPercentual(calcularTaxRate(empresa))}</td>
                                <td>${formatarMilhoes(empresa.creditos)}</td>
                                <td>${formatarNumero(empresa.fechamento, 1)} dias</td>
                                <td>${empresa.riscos}</td>
                                <td>${formatarMilhoes(empresa.ajustes)}</td>
                                <td>${criarBadgeStatus(empresa.status)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarTaxRate() {
    const atual = obterPeriodoAtual();
    const taxas = dadosIndicadores.empresasAbril.map(calcularTaxRate);
    const maiorTaxRate = Math.max(...taxas);
    const menorTaxRate = Math.min(...taxas);
    const empresaPressao = dadosIndicadores.empresasAbril.reduce((maior, atualEmpresa) => (
        calcularTaxRate(atualEmpresa) > calcularTaxRate(maior) ? atualEmpresa : maior
    ));

    return `
        <div class="summary-grid">
            ${criarCardResumo('ETR consolidado', formatarPercentual(atual.taxRate), 'Abril de 2026', `Meta ${formatarPercentual(atual.meta)}`, 'warning')}
            ${criarCardResumo('Tributos diretos', formatarMilhoes(somarTributosDiretos()), `Resultado antes do tributo ${formatarMilhoes(somar(dadosIndicadores.empresasAbril, 'resultadoAntesTributo'))}`, 'Base consistente com o CORE', 'positive')}
            ${criarCardResumo('Maior pressão', formatarPercentual(calcularTaxRate(empresaPressao)), empresaPressao.empresa, 'Acompanhamento focal', 'warning')}
            ${criarCardResumo('Dispersão entre unidades', `${formatarNumero(maiorTaxRate - menorTaxRate, 1)} p.p.`, 'Amplitude do consolidado', 'Variabilidade controlada', 'positive')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Tax rate por empresa</p>
                        <h2>Comparativo do mês</h2>
                    </div>
                    <span class="panel-tag">Abr/2026</span>
                </div>
                <div class="progress-list">
                    ${dadosIndicadores.empresasAbril.map((empresa) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${empresa.empresa}</span>
                                <small>${formatarPercentual(calcularTaxRate(empresa))}</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${larguraTaxRate(calcularTaxRate(empresa))}%"></div>
                            </div>
                            <span class="metric-legend">Resultado ${formatarMilhoes(empresa.resultadoAntesTributo)} | IRPJ ${formatarMilhoes(empresa.irpj)} | CSLL ${formatarMilhoes(empresa.csll)}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Mensagens-chave</p>
                        <h2>Leitura executiva do ETR</h2>
                    </div>
                    <span class="panel-tag">Tax Rate</span>
                </div>
                <ul class="note-list">
                    <li>A Holding representa a maior contribuição absoluta de tributos diretos e sustenta a principal alavanca do ETR consolidado.</li>
                    <li>A Comercializadora combina pressão de PIS/COFINS com ciclo de fechamento mais longo, o que justifica o status de atenção.</li>
                    <li>As quatro unidades permanecem dentro de uma faixa estreita de dispersão, o que facilita leitura gerencial para diretoria e CFO.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Bridge de ETR</p>
                    <h2>Base por unidade</h2>
                </div>
                <span class="panel-tag">Tributos diretos</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>Resultado antes do tributo</th>
                            <th>IRPJ</th>
                            <th>CSLL</th>
                            <th>Tax rate</th>
                            <th>Owner</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosIndicadores.empresasAbril.map((empresa) => `
                            <tr>
                                <td>
                                    <span class="row-title">${empresa.empresa}</span>
                                    <span class="row-note">${empresa.observacao}</span>
                                </td>
                                <td>${formatarMilhoes(empresa.resultadoAntesTributo)}</td>
                                <td>${formatarMilhoes(empresa.irpj)}</td>
                                <td>${formatarMilhoes(empresa.csll)}</td>
                                <td>${formatarPercentual(calcularTaxRate(empresa))}</td>
                                <td>${empresa.owner}</td>
                                <td>${criarBadgeStatus(empresa.status)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function renderizarCreditos() {
    const totalIdentificado = somar(dadosIndicadores.creditos, 'identificado');
    const totalRecuperado = somar(dadosIndicadores.creditos, 'recuperado');
    const emTransito = dadosIndicadores.creditos.filter((item) => item.status !== 'Homologado').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Créditos identificados', formatarMilhoes(totalIdentificado), 'Carteira mapeada no exercício', 'Pipeline priorizado', 'positive')}
            ${criarCardResumo('Créditos recuperados', formatarMilhoes(totalRecuperado), 'Conversão em caixa acumulada', 'Performance acima do plano', 'positive')}
            ${criarCardResumo('Saldo em captura', formatarMilhoes(totalIdentificado - totalRecuperado), 'Frentes ainda não monetizadas', 'Prioridade de protocolo', 'warning')}
            ${criarCardResumo('PER/DCOMP em trânsito', `${emTransito}`, 'Frentes em protocolo ou análise', 'Governança ativa de evidências', 'warning')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Conversão por frente</p>
                        <h2>Recuperação de créditos tributários</h2>
                    </div>
                    <span class="panel-tag">YTD 2026</span>
                </div>
                <div class="progress-list">
                    ${dadosIndicadores.creditos.map((item) => `
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
                        <p class="panel-kicker">Leitura financeira</p>
                        <h2>Mensagens sobre captura de valor</h2>
                    </div>
                    <span class="panel-tag">Créditos</span>
                </div>
                <ul class="note-list">
                    <li>A carteira homologada da Holding sustenta credibilidade para novas frentes de monetização sem elevar risco material.</li>
                    <li>A Comercializadora concentra oportunidade relevante em saldo negativo de IRPJ e CSLL, com efeito direto sobre caixa tributário.</li>
                    <li>O módulo foi estruturado para conectar oportunidade identificada, valor recuperado e estágio processual em uma única leitura executiva.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Portfólio de créditos</p>
                    <h2>Oportunidades e estágio de recuperação</h2>
                </div>
                <span class="panel-tag">Cash Tax</span>
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
                        ${dadosIndicadores.creditos.map((item) => `
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

function renderizarFechamento() {
    const atual = obterPeriodoAtual();
    const dentroMeta = dadosIndicadores.fechamento.filter((item) => item.ciclo <= 5).length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Tempo médio de fechamento', `${formatarNumero(atual.fechamento, 1)} dias`, 'Média consolidada de abril', 'Meta executiva atendida', 'positive')}
            ${criarCardResumo('Unidades dentro da meta', `${dentroMeta}/4`, 'Meta operacional até 5 dias', 'Uma unidade em atenção', 'warning')}
            ${criarCardResumo('Ajustes no fechamento', formatarMilhoes(atual.ajustes), 'Movimentos materiais do mês', 'Carga sob monitoramento', 'warning')}
            ${criarCardResumo('Owners críticos', '1', 'Frente com escalonamento diário', 'Comercializadora no foco', 'warning')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Tempo por unidade</p>
                        <h2>Ciclo de fechamento fiscal</h2>
                    </div>
                    <span class="panel-tag">Dias úteis</span>
                </div>
                <div class="progress-list">
                    ${dadosIndicadores.fechamento.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.empresa}</span>
                                <small>${formatarNumero(item.ciclo, 1)} dias</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${larguraFechamento(item.ciclo)}%"></div>
                            </div>
                            <span class="metric-legend">${item.owner} | Ajustes ${formatarMilhoes(item.ajustes)}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Direcionadores</p>
                        <h2>Principais alavancas do ciclo</h2>
                    </div>
                    <span class="panel-tag">Fechamento</span>
                </div>
                <ul class="note-list">
                    <li>O SSC segue como referência operacional, com fechamento em 3,8 dias e ausência de bloqueios materiais.</li>
                    <li>A Comercializadora permanece acima da meta por depender de recálculo de PIS/COFINS antes da consolidação final.</li>
                    <li>O consolidado de 4,5 dias preserva narrativa de previsibilidade para a diretoria, mas requer disciplina de owner e evidência.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Governança de fechamento</p>
                    <h2>Bloqueios e owners</h2>
                </div>
                <span class="panel-tag">Abr/2026</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>Owner</th>
                            <th>Ciclo</th>
                            <th>Bloqueio principal</th>
                            <th>Ajustes</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosIndicadores.fechamento.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.empresa}</span></td>
                                <td>${item.owner}</td>
                                <td>${formatarNumero(item.ciclo, 1)} dias</td>
                                <td>${item.bloqueio}</td>
                                <td>${formatarMilhoes(item.ajustes)}</td>
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
    const exposicaoTotal = somar(dadosIndicadores.riscos, 'exposicao');
    const riscosCriticos = dadosIndicadores.riscos.filter((item) => item.status === 'Crítico').length;
    const monitorados = dadosIndicadores.riscos.filter((item) => item.status === 'Monitorado').length;

    return `
        <div class="summary-grid">
            ${criarCardResumo('Riscos fiscais ativos', `${obterPeriodoAtual().riscos}`, 'Mapa consolidado do mês', 'Prioridades definidas', 'warning')}
            ${criarCardResumo('Exposição líquida', formatarMilhoes(exposicaoTotal), 'Itens materiais na carteira', 'Monitoramento por ação corretiva', 'warning')}
            ${criarCardResumo('Riscos críticos', `${riscosCriticos}`, 'Demanda escalonamento imediato', 'Foco na Comercializadora', 'danger')}
            ${criarCardResumo('Riscos monitorados', `${monitorados}`, 'Com plano de ação estruturado', 'Governança em curso', 'positive')}
        </div>

        <div class="panel-grid">
            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Matriz de exposição</p>
                        <h2>Riscos materiais por frente</h2>
                    </div>
                    <span class="panel-tag">Compliance</span>
                </div>
                <div class="progress-list">
                    ${dadosIndicadores.riscos.map((item) => `
                        <div class="progress-item">
                            <div class="progress-top">
                                <span>${item.tema}</span>
                                <small>${formatarMilhoes(item.exposicao)}</small>
                            </div>
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${larguraExposicao(item.exposicao, exposicaoTotal)}%"></div>
                            </div>
                            <span class="metric-legend">${item.empresa} | ${item.impacto}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="panel-card">
                <div class="panel-header">
                    <div>
                        <p class="panel-kicker">Ações executivas</p>
                        <h2>Planos de mitigação</h2>
                    </div>
                    <span class="panel-tag">Risco Fiscal</span>
                </div>
                <ul class="note-list">
                    <li>O principal risco segue na Comercializadora, onde a correção sistêmica de CST tem efeito direto em tax rate, fechamento e consistência declaratória.</li>
                    <li>A Holding e a Geração carregam exposição relevante, mas já possuem plano técnico e trilha documental estruturada.</li>
                    <li>O objetivo do painel é permitir priorização objetiva entre exposição, impacto operacional e owner responsável.</li>
                </ul>
            </section>
        </div>

        <section class="table-card">
            <div class="panel-header">
                <div>
                    <p class="panel-kicker">Mapa de risco</p>
                    <h2>Exposição, impacto e ação corretiva</h2>
                </div>
                <span class="panel-tag">Abr/2026</span>
            </div>
            <div class="table-shell">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Tema</th>
                            <th>Empresa</th>
                            <th>Exposição</th>
                            <th>Impacto</th>
                            <th>Owner</th>
                            <th>Status</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${dadosIndicadores.riscos.map((item) => `
                            <tr>
                                <td><span class="row-title">${item.tema}</span></td>
                                <td>${item.empresa}</td>
                                <td>${formatarMilhoes(item.exposicao)}</td>
                                <td>${item.impacto}</td>
                                <td>${item.owner}</td>
                                <td>${criarBadgeStatus(item.status)}</td>
                                <td>${item.acao}</td>
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

function criarBadgeStatus(status) {
    const normalizado = status.toLowerCase();
    let tipo = 'positive';

    if (normalizado.includes('crítico')) {
        tipo = 'danger';
    } else if (
        normalizado.includes('atenção') ||
        normalizado.includes('monitorado') ||
        normalizado.includes('análise') ||
        normalizado.includes('protocolado')
    ) {
        tipo = 'warning';
    } else if (
        normalizado.includes('controlado') ||
        normalizado.includes('homologado')
    ) {
        tipo = 'positive';
    }

    return `<span class="status-badge is-${tipo}">${status}</span>`;
}

function obterPeriodoAtual() {
    return dadosIndicadores.serieMensal[dadosIndicadores.serieMensal.length - 1];
}

function calcularTaxRate(empresa) {
    return ((empresa.irpj + empresa.csll) / empresa.resultadoAntesTributo) * 100;
}

function percentualRecuperado(item) {
    if (!item.identificado) {
        return 0;
    }

    return (item.recuperado / item.identificado) * 100;
}

function somarTributosDiretos() {
    return dadosIndicadores.empresasAbril.reduce((total, empresa) => total + empresa.irpj + empresa.csll, 0);
}

function somar(lista, chave) {
    return lista.reduce((total, item) => total + Number(item[chave] || 0), 0);
}

function larguraTaxRate(valor) {
    return Math.min(100, (valor / 40) * 100);
}

function larguraFechamento(valor) {
    return Math.min(100, (valor / 6) * 100);
}

function larguraExposicao(valor, total) {
    if (!total) {
        return 0;
    }

    return (valor / total) * 100;
}

function formatarMilhoes(valor) {
    return `R$ ${formatarNumero(valor, 1)} mi`;
}

function formatarPercentual(valor) {
    return `${formatarNumero(valor, 1)}%`;
}

function formatarNumero(valor, casas) {
    return Number(valor).toLocaleString('pt-BR', {
        minimumFractionDigits: casas,
        maximumFractionDigits: casas
    });
}
