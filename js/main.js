// import { Status, tutorialMysql } from "./informacoesTutorial"

const areaTutorial = document.querySelector("#accordionTutorial");
const botaoIniciar = document.querySelector("#botao-iniciar");
console.log(areaTutorial)

// nos cards o id do accordion e botao é diferente para cada ent não da pra setar um valor default
// conforme adicionando etapa no tutorial adicionar novo id seguindo a ordem
const IDS_ACCORDION = [
    "collapseOne",
    "collapseTwo",
    "collapseThree",
    "collapseFour",
    "collapseFive"
];

document.addEventListener("DOMContentLoaded", () => renderizarTutorial());
botaoIniciar.addEventListener("click", iniciarTutorial);

function renderizarTutorial() {

    if (tutorialIniciado) {
        botaoIniciar.setAttribute("disabled", "true");
        botaoIniciar.classList.add("efeito-desativado");
    } else
        botaoIniciar.removeAttribute("disabled");

    tutorialMysql.forEach((item, index) => {
        const elementoAccordion = criarAccordion(item, index);

        areaTutorial.appendChild(elementoAccordion);
    });

    atualizarProgresso(tutorialMysql);
};

function iniciarTutorial() {
    liberarEtapa(tutorialMysql[0].id);
    const { etapa, btn, accordioBody } = selectItem(1);
    atualizarStatus(etapa, Status.EM_PROGRESSO);

    btn.classList.remove("collapsed");
    btn.setAttribute("area-expanded", "true")

    accordioBody.classList.add("show");
    botaoIniciar.setAttribute("disabled", "true");

    tutorialIniciado = true;
};

function liberarEtapa(id) {
    const { etapa, btn } = selectItem(id);

    etapa.classList.remove("efeito-desativado");
    btn.removeAttribute("disabled");
    atualizarStatus(etapa, Status.EM_PROGRESSO);
};

function fecharEtapa(id) {
    const { etapa, btn, accordioBody } = selectItem(id);

    btn.classList.add("collapsed");
    btn.setAttribute("area-expanded", "false")

    accordioBody.classList.remove("show");
    atualizarStatus(etapa, Status.CONCLUIDO);
};

function selectItem(id) {
    const etapa = document.querySelector(`[id-tutorial="${id}"]`);
    const btn = etapa.getElementsByTagName("button")[0];
    const accordioBody = etapa.querySelector(".accordion-collapse");

    return { etapa, btn, accordioBody };
};


function criarAccordion(item, index) {
    const accordionItem = document.createElement("div");
    const accordionHeader = document.createElement("h2");
    const accordionButton = document.createElement("button");
    const accordionBody = document.createElement("div");
    const textoStatus = document.createElement("p");
    const textoDivStatus = document.createElement("p");
    const textoTitulo = document.createElement("p");
    const collapseDiv = document.createElement("div");
    const divDivisao = document.createElement("div");
    const divStatus = document.createElement("div");

    accordionItem.classList.add("accordion-item")
    accordionItem.setAttribute("id-tutorial", tutorialMysql[index].id);

    accordionHeader.classList.add("accordion-header");

    accordionButton.classList.add("accordion-button", "collapsed", "d-flex", "align-items-center", "gap-4");
    accordionButton.setAttribute("type", "button");
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute("aria-expanded", "true");
    accordionButton.setAttribute("aria-controls", IDS_ACCORDION[index]);
    accordionButton.setAttribute("data-bs-target", "#" + IDS_ACCORDION[index]);

    divStatus.classList.add("d-flex", "align-items-center", "gap-1");
    divStatus.style.width = "150px";
    textoDivStatus.classList.add("m-0", "texto-generico");
    textoDivStatus.textContent = "Status:";
    const corTexto = item.status == Status.NAO_CONCLUIDO ?
        "txt-status-nao-concluido" : item.status == Status.EM_PROGRESSO ?
            "text-primary" : ".text-success";

    textoStatus.classList.add("m-0", "texto-status", corTexto);
    textoStatus.style.fontSize = "15.4px";
    textoStatus.style.whiteSpace = "nowrap";
    textoStatus.textContent = `${item.status}`;

    textoTitulo.classList.add("m-0", "fw-bold", "texto-titulo", "texto-generico");
    textoTitulo.textContent = `${item.tituloEtapa}`;
    divDivisao.classList.add("div-borda");

    collapseDiv.classList.add("accordion-collapse", "collapse");
    collapseDiv.setAttribute("data-bs-parent", "#accordionTutorial");
    collapseDiv.setAttribute("id", IDS_ACCORDION[index]);

    accordionBody.classList.add("accordion-body", "container-fluid", "row", "gap-4");
    accordionBody.innerHTML = bodyAccordion(item.descricaoEtapa, item.conteudo, item.status, item.id);

    // verifica se o tutorial foi iniciado ou status
    // se não bloqueia todos card e ativa/desativa o botao

    if (!tutorialIniciado || item.status == Status.NAO_CONCLUIDO) {
        accordionButton.setAttribute("disabled", !tutorialIniciado || item.status == Status.NAO_CONCLUIDO ? "true" : "false");
        accordionItem.classList.add(!tutorialIniciado || item.status == Status.NAO_CONCLUIDO ? "efeito-desativado" : "");
    }
    else
        accordionButton.removeAttribute("disabled");

    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(collapseDiv);
    accordionHeader.appendChild(accordionButton);
    accordionButton.appendChild(textoStatus);
    accordionButton.appendChild(divStatus);
    divStatus.appendChild(textoDivStatus);
    divStatus.appendChild(textoStatus);
    accordionButton.appendChild(divDivisao);
    accordionButton.appendChild(textoTitulo);
    collapseDiv.appendChild(accordionBody);

    return accordionItem;
};

function bodyAccordion(descricao, conteudo, status, id) {
    let conteudoBody = `
        <p class="m-0 col-12 texto-generico">${descricao}</p>
    `;

    conteudo.forEach(item => {
        conteudoBody += `
            <div class="row gap-1">
            <p class="m-0 col-12"><b>${item.tituloConteudo}:</b>
            ${item.descricaoConteudo}
            </p>
            <div class="col-12">
            ${!!item.imagem ? `<img src="${item.imagem}" class="img-fluid img-visu" onclick="visualizarImg(this)" alt="...">
            <p class="m-0 text-secondary" style="font-size: 12.8px"><small>Clique na imagem para melhor visualização.</small> </p>`
            : ""}
            </div>
            </div>
        `;
    });

    let btnProximo = `
    <button type="button" class="btn btn-primary ms-3 btn-sm" ${status == Status.CONCLUIDO ? "disabled" : ""} 
    onclick="concluirEtapa(this)" style="width:max-content">${tutorialMysql[tutorialMysql.length - 1].id == id ? "Concluir tutorial" : "Proximo"}</button>
    `;

    return conteudoBody + btnProximo;
};

const getId = (elemento) => parseInt(elemento.getAttribute("id-tutorial"), 10);

function concluirEtapa(botao) {
    const elmPai = botao.parentElement
        .parentElement
        .parentElement;

    const id = getId(elmPai);

    if (tutorialMysql[tutorialMysql.length - 1].id == id)
        finalizarTutorial();
    else
        liberarEtapa(id + 1);

    fecharEtapa(id);
    // atualizarStatus(elmPai, Status.CONCLUIDO);
    botao.setAttribute("disabled", "true");
    atualizarProgresso(tutorialMysql);
};

function atualizarStatus(elemento, status) {
    const id = getId(elemento);
    const txtStatus = elemento.querySelector(".texto-status");

    tutorialMysql[tutorialMysql.findIndex(i => i.id == id)].status = status;
    txtStatus.textContent = `${status}`;

    if (status == Status.EM_PROGRESSO) {
        txtStatus.classList.remove("txt-status-nao-concluido");
        txtStatus.classList.add("text-primary");
    } else {
        txtStatus.classList.remove("text-primary");
        txtStatus.classList.add("text-success");
    }
};

function atualizarProgresso(nTutorial) {
    const qntEtapa = nTutorial.length;
    const tProgresso = document.querySelector(".txtProgresso");

    let etapasConcluidas = 0;
    for (let i = 0; i < qntEtapa; i++)
        if (nTutorial[i].status == Status.CONCLUIDO)
            etapasConcluidas++;

    const calcProgresso = ((etapasConcluidas / qntEtapa) * 100).toFixed(0);
    tProgresso.textContent = `Seu progresso: ${calcProgresso}%`;
};

function visualizarImg(elementoImg) {
    const divImg = document.querySelector(".div-full-img");
    const img = divImg.querySelector(".img-conteudo");
    img.src = elementoImg.getAttribute("src");

    divImg.style.display = "flex";
};

function fecharImg(elementoBtn) {
    const elmPai = elementoBtn
        .parentElement
        .parentElement;

    const img = elmPai.querySelector(".img-conteudo");
    img.src = "";
    elmPai.style.display = "none";
};


function finalizarTutorial() {
    alert("Parabéns, voce concluiu o tutorial!");
};

{/*  
    <div class="accordion-item">
                    <h2 class="accordion-header">
                      <!-- <p class="m-0">teste: teste</p> -->

                      <button class="accordion-button collapsed d-flex align-items-center gap-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <p class="m-0">status</p>
                        <p class="m-0">Accordion Item #1</p>
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" style="width: 100%" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        
                          <!-- Corpo card -->
                      </div>
    </div> 
*/}
