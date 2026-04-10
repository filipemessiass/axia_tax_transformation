// Dados das certidões
const certidoes = {
    federal: [
        { nome: "Certidão Negativa de Débitos (CND)", link: "https://solucoes.receita.fazenda.gov.br/servicos/certidaointernet/pj/emitir", icon: "fa-landmark" },
        { nome: "Certidão Negativa de Débitos Rurais (CND)", link: "https://solucoes.receita.fazenda.gov.br/Servicos/CertidaoInternet/ITR/Consultar/", icon: "fa-tractor" },
        { nome: "Cadastro Nacional de Obras (CNO)", link: "https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/OBRA/Consultar", icon: "fa-building-circle-check" }
    ],
    estadual: [
        { nome: "Acre", link: "http://sefazonline.ac.gov.br/sefazonline/app.cndprincipal", sigla: "AC" },
        { nome: "Alagoas", link: "https://contribuinte.sefaz.al.gov.br/certidao/", sigla: "AL" },
        { nome: "Amapá", link: "https://www.sefaz.ap.gov.br/sate/seg/SEGf_AcessarFuncao.jsp?cdFuncao=DIA_060", sigla: "AP" },
        { nome: "Amazonas", link: "https://sistemas.sefaz.am.gov.br/GAE/mnt/dividaAtiva/certidaoNegativa/emitirCertidaoNegativaContPortal.do", sigla: "AM" },
        { nome: "Bahia", link: "https://servicos.sefaz.ba.gov.br/sistemas/DSCRE/Modulos/Publico/EmissaoCertidao.aspx", sigla: "BA" },
        { nome: "Ceará", link: "https://consultapublica.sefaz.ce.gov.br/certidaonegativa/preparar-consultar", sigla: "CE" },
        { nome: "Distrito Federal", link: "https://ww1.receita.fazenda.df.gov.br/cidadao/certidoes/Certidao", sigla: "DF" },
        { nome: "Espírito Santo", link: "https://sefaz.es.gov.br/emissao-de-certidoes", sigla: "ES" },
        { nome: "Goiás", link: "https://www.sefaz.go.gov.br/Certidao/Emissao/default.asp", sigla: "GO" },
        { nome: "Maranhão", link: "https://sistemas1.sefaz.ma.gov.br/portalsefaz/jsp/menu/view.jsf?codigo=16", sigla: "MA" },
        { nome: "Mato Grosso", link: "https://www.sefaz.mt.gov.br/cnd/certidao/servlet/ServletRotd?origem=60", sigla: "MT" },
        { nome: "Mato Grosso do Sul", link: "https://servicos.efazenda.ms.gov.br/pndfis/Home/Emissao", sigla: "MS" },
        { nome: "Minas Gerais", link: "https://www2.fazenda.mg.gov.br/sol/ctrl/SOL/CDT/SERVICO_829?ACAO=INICIAR", sigla: "MG" },
        { nome: "Pará", link: "https://app.sefa.pa.gov.br/emissao-certidao/template.action", sigla: "PA" },
        { nome: "Paraíba", link: "https://www.sefaz.pb.gov.br/servirtual/certidoes/emissao-de-certidao-de-debitos-cidadao", sigla: "PB" },
        { nome: "Paraná", link: "http://www.cdw.fazenda.pr.gov.br/cdw/emissao/certidaoAutomatica", sigla: "PR" },
        { nome: "Pernambuco", link: "https://efisco.sefaz.pe.gov.br/sfi_trb_gpf/PREmitirCertidaoNegativaNarrativaDebitoFiscal", sigla: "PE" },
        { nome: "Piauí", link: "https://webas.sefaz.pi.gov.br/certidaonft-web/index.xhtml", sigla: "PI" },
        { nome: "Rio de Janeiro", link: "https://www4.fazenda.rj.gov.br/certidao-fiscal-web/emitirCertidao.jsf", sigla: "RJ" },
        { nome: "Rio Grande do Sul", link: "https://www.sefaz.rs.gov.br/sat/CertidaoSitFiscalSolic.aspx", sigla: "RS" },
        { nome: "Rio Grande do Norte", link: "https://uvt.set.rn.gov.br/#/services/certidao-negativa/emitir", sigla: "RN" },
        { nome: "Rondônia", link: "https://www.sefin.ro.gov.br/certidaonegativa/", sigla: "RO" },
        { nome: "Roraima", link: "https://portalweb.sefaz.rr.gov.br/cnd/servlet/wp_siate_emitircndcentralservicopublica", sigla: "RR" },
        { nome: "Santa Catarina", link: "https://sat.sef.sc.gov.br/tax.NET/Sat.CtaCte.Web/SolicitacaoCnd.aspx", sigla: "SC" },
        { nome: "São Paulo", link: "https://www10.fazenda.sp.gov.br/CertidaoNegativaDeb/Pages/EmissaoCertidaoNegativa.aspx", sigla: "SP" },
        { nome: "Sergipe", link: "https://www.sefaz.se.gov.br/SitePages/emissao_certidao_negativa.aspx", sigla: "SE" },
        { nome: "Tocantins", link: "https://www.sefaz.to.gov.br/cnd/com.cnd.hecwbcnd01", sigla: "TO" }
    ],
    municipal: [
        { nome: "São Paulo", link: "https://duc.prefeitura.sp.gov.br/certidoes/forms_anonimo/frmConsultaEmissaoCertificado.aspx", icon: "fa-building-circle-check" },
        { nome: "Recife", link: "https://recifeemdia.recife.pe.gov.br/emissaoCertidao/4", icon: "fa-building-circle-check" },
        { nome: "Jaboatão dos Guararapes", link: "https://www.tinus.com.br/csp/JABOATAO/portal/index.csp", icon: "fa-building-circle-check" },
        { nome: "Rio de Janeiro", link: "https://www2.rio.rj.gov.br/smf/forms/pesquisa.asp", icon: "fa-building-circle-check" },
        { nome: "Campinas", link: "https://certidoes-web.campinas.sp.gov.br/", icon: "fa-building-circle-check" }
    ],
    trabalhista: [
        { nome: "FGTS", link: "https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf", icon: "fa-building-columns" },
        { nome: "Certidão Negativa de Débitos Trabalhistas", link: "https://cndt-certidao.tst.jus.br/inicio.faces", icon: "fa-gavel" }
    ]
};

// Dados das certidões com URLs das bandeiras
const bandeirasUrls = {
    AC: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bandeira_do_Acre.svg",
    AL: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bandeira_de_Alagoas.svg",
    AP: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amap%C3%A1.svg",
    AM: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bandeira_do_Amazonas.svg",
    BA: "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg",
    CE: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Cear%C3%A1.svg",
    DF: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg",
    ES: "https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg",
    GO: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Goi%C3%A1s.svg",
    MA: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeira_do_Maranh%C3%A3o.svg",
    MT: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg",
    MS: "https://upload.wikimedia.org/wikipedia/commons/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg",
    MG: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg",
    PA: "https://upload.wikimedia.org/wikipedia/commons/0/02/Bandeira_do_Par%C3%A1.svg",
    PB: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Bandeira_da_Para%C3%ADba.svg",
    PR: "https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paran%C3%A1.svg",
    PE: "https://upload.wikimedia.org/wikipedia/commons/5/59/Bandeira_de_Pernambuco.svg",
    PI: "https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piau%C3%AD.svg",
    RJ: "https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg",
    RN: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bandeira_do_Rio_Grande_do_Norte.svg",
    RS: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bandeira_do_Rio_Grande_do_Sul.svg",
    RO: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Bandeira_de_Rond%C3%B4nia.svg",
    RR: "https://upload.wikimedia.org/wikipedia/commons/9/98/Bandeira_de_Roraima.svg",
    SC: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg",
    SP: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg",
    SE: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg",
    TO: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bandeira_do_Tocantins.svg"
};

// Dados das certidões consolidadas
const certidoesConsolidadas = {
    tipos: [
        { id: 'federal', nome: 'Federal' },
        { id: 'estadual', nome: 'Estadual' },
        { id: 'municipal', nome: 'Municipal' },
        { id: 'trabalhista', nome: 'Trabalhista' }
    ],
    estados: certidoes.estadual.map(estado => ({
        id: estado.sigla,
        nome: estado.nome
    }))
};

// Função para mostrar o formulário de certidões consolidadas
function mostrarFormularioConsolidado() {
    const certidoesContent = document.getElementById('certidoes-content');
    const welcomeSection = document.querySelector('.welcome-section');
    
    if (welcomeSection) {
        welcomeSection.style.display = 'none';
    }

    let html = `
        <div class="consolidada-container">
            <div class="consolidada-form">
                <h2><i class="fas fa-layer-group"></i> Buscar Certidões Consolidadas</h2>
                <div class="form-group">
                    <label for="tipo-certidao">Tipo de Certidão</label>
                    <select id="tipo-certidao" multiple>
                        ${certidoesConsolidadas.tipos.map(tipo => 
                            `<option value="${tipo.id}">${tipo.nome}</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="estado">Estado (opcional)</label>
                    <select id="estado">
                        <option value="">Selecione um estado</option>
                        ${certidoesConsolidadas.estados.map(estado => 
                            `<option value="${estado.id}">${estado.nome}</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label for="cnpj">CNPJ</label>
                    <input type="text" id="cnpj" placeholder="Digite o CNPJ">
                </div>
                <button onclick="buscarCertidoesConsolidadas()">Buscar Certidões</button>
            </div>
            <div id="consolidada-results" class="consolidada-results"></div>
        </div>
    `;

    certidoesContent.innerHTML = html;
}

// Função para buscar as certidões consolidadas
function buscarCertidoesConsolidadas() {
    const tiposSelecionados = Array.from(document.getElementById('tipo-certidao').selectedOptions).map(option => option.value);
    const estadoSelecionado = document.getElementById('estado').value;
    const cnpj = document.getElementById('cnpj').value;
    const resultsContainer = document.getElementById('consolidada-results');

    if (!tiposSelecionados.length || !cnpj) {
        alert('Por favor, selecione pelo menos um tipo de certidão e informe o CNPJ.');
        return;
    }

    // Simulação de busca (substitua por sua lógica real)
    let resultados = [];
    tiposSelecionados.forEach(tipo => {
        if (tipo === 'estadual' && estadoSelecionado) {
            const estado = certidoes.estadual.find(e => e.sigla === estadoSelecionado);
            if (estado) {
                resultados.push({
                    tipo: 'Estadual',
                    nome: estado.nome,
                    link: estado.link
                });
            }
        } else {
            certidoes[tipo].forEach(certidao => {
                resultados.push({
                    tipo: tipo.charAt(0).toUpperCase() + tipo.slice(1),
                    nome: certidao.nome,
                    link: certidao.link
                });
            });
        }
    });

    // Exibir resultados
    let html = '';
    resultados.forEach(resultado => {
        html += `
            <div class="consolidada-result-item">
                <h3>${resultado.nome}</h3>
                <p>Tipo: ${resultado.tipo}</p>
                <a href="${resultado.link}" target="_blank">Acessar Certidão</a>
            </div>
        `;
    });

    resultsContainer.innerHTML = html;
}

// Função para mostrar as certidões
function mostrarCertidoes(tipo) {
    if (tipo === 'consolidada') {
        mostrarFormularioConsolidado();
        return;
    }
    const certidoesContent = document.getElementById('certidoes-content');
    const certidoesList = certidoes[tipo];

    // Remove a seção de boas-vindas se existir
    const welcomeSection = document.querySelector('.welcome-section');
    if (welcomeSection) {
        welcomeSection.style.display = 'none';
    }

    // Adiciona a classe ativa ao item do menu selecionado
    const menuItems = document.querySelectorAll('.sidebar a');
    menuItems.forEach(item => {
        if (item.getAttribute('onclick').includes(tipo)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Gera o HTML para as certidões
    let html = '<div class="certidoes-grid">';
    
    if (tipo === 'estadual') {
        // Layout especial para estados com bandeiras
        certidoesList.forEach(certidao => {
            html += `
                <div class="certidao-button estado">
                    <a href="${certidao.link}" target="_blank">
                        <div class="bandeira-container">
                            <img src="${bandeirasUrls[certidao.sigla]}" 
                                 alt="Bandeira ${certidao.nome}" 
                                 class="estado-bandeira"
                                 onerror="this.src='https://dummyimage.com/300x200/0000ff/faf5f0.png&text=${certidao.sigla}';">
                        </div>
                        <span class="estado-nome">${certidao.nome}</span>
                        <span class="estado-sigla">${certidao.sigla}</span>
                    </a>
                </div>
            `;
        });
    } else {
        // Layout padrão para outros tipos
        certidoesList.forEach(certidao => {
            html += `
                <div class="certidao-button">
                    <a href="${certidao.link}" target="_blank">
                        <i class="fas ${certidao.icon || getTipoIcon(tipo)}"></i>
                        ${certidao.nome}
                    </a>
                </div>
            `;
        });
    }
    
    html += '</div>';
    certidoesContent.innerHTML = html;
}

// Função auxiliar para retornar o ícone adequado para cada tipo
function getTipoIcon(tipo) {
    const icons = {
        'federal': 'fa-landmark',
        'estadual': 'fa-building',
        'municipal': 'fa-city',
        'trabalhista': 'fa-briefcase'
    };
    return icons[tipo] || 'fa-certificate';
}
