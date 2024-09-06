// import { Status, tutorialMysql } from "./informacoesTutorial"

const areaTutorial = document.querySelector("#accordionTutorial");
console.log(areaTutorial)


// nos cards o id do accordion e botao é diferente para cada ent não da pra setar um valor default
// conforme adicionando etapa no tutorial adicionar novo id seguindo a ordem
const IDS_ACCORDION = [
    "collapseOne",
    "collapseTwo",
];
 
document.addEventListener("DOMContentLoaded", () => renderizarTutorial());

function renderizarTutorial() {

    tutorialMysql.forEach((item, index) => {
        console.log(index)
        const elementoAccordion = criarAccordion();
        elementoAccordion.setAttribute("id-tutorial", item.id);

        const elementoBotao = elementoAccordion.querySelector(".accordion-button");
        elementoBotao.setAttribute("data-bs-target", "#" + IDS_ACCORDION[index])

        const elementoStatus = elementoAccordion.querySelector(".texto-status");
        elementoStatus.textContent = `Status: ${item.status}`;

        const elementoTitulo = elementoAccordion.querySelector(".texto-titulo");
        elementoTitulo.textContent = `${item.tituloEtapa}`;

        const elementoCollapse = elementoAccordion.querySelector(".accordion-collapse");
        elementoCollapse.setAttribute("id", IDS_ACCORDION[index]);

        const elementoBody = elementoAccordion.querySelector(".accordion-body");
        elementoBody.innerHTML = `
        <p class="m-0 texto-generico">${item.descricaoEtapa}</p>
        `;

        areaTutorial.appendChild(elementoAccordion);
    });

};



function criarAccordion() {
    const accordionItem = document.createElement("div");
    const accordionHeader = document.createElement("h2");
    const accordionButton = document.createElement("button");
    const accordionBody = document.createElement("div");
    const textoStatus = document.createElement("p");
    const textoTitulo = document.createElement("p");
    const collapseDiv = document.createElement("div");
    const divDivisao = document.createElement("div");


    accordionItem.classList.add("accordion-item")

    accordionHeader.classList.add("accordion-header");

    accordionButton.className = "accordion-button collapsed d-flex align-items-center gap-4";
    accordionButton.classList.add("desabilitado");
    accordionButton.setAttribute("type", "button");
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute("data-bs-target", "#collapseOne");
    accordionButton.setAttribute("aria-expanded", "true");
    accordionButton.setAttribute("aria-controls", "collapseOne");
    // accordionButton.setAttribute("disabled", "true");

    textoStatus.className = "m-0 texto-status texto-generico";
    textoTitulo.className = "m-0 fw-bold texto-titulo texto-generico";
    divDivisao.classList.add("div-borda");
    
    collapseDiv.classList.add("accordion-collapse", "collapse");
    collapseDiv.setAttribute("data-bs-parent", "#accordionTutorial");

    accordionBody.classList.add("accordion-body");

    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(collapseDiv);
    accordionHeader.appendChild(accordionButton);
    accordionButton.appendChild(textoStatus);
    accordionButton.appendChild(divDivisao);
    accordionButton.appendChild(textoTitulo);
    collapseDiv.appendChild(accordionBody);

    return accordionItem;
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
