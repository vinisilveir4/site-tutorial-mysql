const LINK_WINDOWS = "https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html";
const LINK_MAC = "https://dev.mysql.com/doc/refman/8.0/en/macos-installation.html";
const LINK_LINUX = "https://dev.mysql.com/doc/refman/8.0/en/linux-installation.html";

const Status = {
    NAO_CONCLUIDO: "Não concluído",
    EM_PROGRESSO: "Em progresso",
    CONCLUIDO: "Concluído"
};

const tutorialMysql = [
    {
        id: 1,
        tituloEtapa: "Instalando o Mysql",
        descricaoEtapa: `
        A instalação da ferramenta é um processo simples. Basta fazer o download do instalador 
        correto no site oficial, 
        dependendo do sistema operacional do seu computador, seja <a target="_blank" class="link-opacity-100" href="${LINK_MAC}">macOS</a>,
        <a target="_blank" class="link-opacity-100 estilo-link" href="${LINK_WINDOWS}">Windows</a>, ou 
        <a target="_blank" class="link-opacity-100" href="${LINK_LINUX}">Linux</a>.`,
        conteudo: [
            {
                tituloConteudo: "Instalação no macOS",
                descricaoConteudo: `
                Depois de fazer o download do instalador do pacote MySQL, siga as instruções do assistente do instalador. 
                Você pode seguir a instalação padrão, 
                embora também possa personalizar os componentes a serem instalados clicando no botão "Customize" (Personalizar).`,
                imagem: "https://images.datacamp.com/image/upload/v1695979198/image2_5b425a173b.png"
            },

            {
                tituloConteudo: "Instalação no Windows",
                descricaoConteudo: `A instalação do MySQL no Windows é bastante simples. Usando a instalação padrão, 
                o Windows iniciará automaticamente o MySQL como um host local.`,
                imagem: false
            }
        ],
        possiveisErros: false,
        status: Status.NAO_CONCLUIDO
    },
    {
        id: 2,
        tituloEtapa: "Configuração",
        descricaoEtapa: `
        Texto...`,
        conteudo: [
            {
                tituloConteudo: "",
                descricaoConteudo:``,
                imagem: ""
            }
        ],
        possiveisErros: false,
        status: Status.NAO_CONCLUIDO
    }
];

// export {Status, tutorialMysql};
