const LINK_DOWNLOAD_WINDOWS = "https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html";
const LINK_DOWNLOAD_MAC = "https://dev.mysql.com/doc/refman/8.0/en/macos-installation.html";
const LINK_DOWNLOAD_LINUX = "https://dev.mysql.com/doc/refman/8.0/en/linux-installation.html";
const LINK_DOWNLOAD_XAMPP = "https://www.apachefriends.org/pt_br/download.html";

let tutorialIniciado = false;

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
        dependendo do sistema operacional do seu computador, seja <a target="_blank" class="link-opacity-100" href="${LINK_DOWNLOAD_MAC}">macOS</a>,
        <a target="_blank" class="link-opacity-100 estilo-link" href="${LINK_DOWNLOAD_WINDOWS}">Windows</a>, ou 
        <a target="_blank" class="link-opacity-100" href="${LINK_DOWNLOAD_LINUX}">Linux</a>.`,
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
                descricaoConteudo: `No Windows é bastante simples. Usando a instalação padrão, 
                iniciará automaticamente o MySQL como um host local.`,
                imagem: false
            },
            {
                tituloConteudo: "Instalação no Linux",
                descricaoConteudo: `Instale o MySQL via terminal com \`sudo apt-get install mysql-server\`. 
                Inicie o serviço MySQL com \`sudo service mysql start\`.`,
                imagem: false
            },
            {
                tituloConteudo: "Verificação da Instalação",
                descricaoConteudo: `
                Após você pode verificar se o MySQL foi instalado corretamente executando o comando \`mysql --version\` no terminal. 
                Isso irá mostrar a versão instalada do MySQL e garantir que está tudo pronto.`,
                imagem: false
            }
        ],
        possiveisErros: false,
        status: Status.NAO_CONCLUIDO
    },
    {
        id: 2,
        tituloEtapa: "Configurando Conexão",
        descricaoEtapa: `
        Após a instalação do MySQL, será necessário configurar uma conexão e, para isso, vamos utilizar o 
        <a target="_blank" class="link-opacity-100 estilo-link" href="${LINK_DOWNLOAD_XAMPP}">XAMPP</a> 
        para gerenciamento.`,
        conteudo: [
            {
                tituloConteudo: "Instalação do XAMPP",
                descricaoConteudo: `
           O XAMPP é uma opção rápida para rodar o serviço MySQL junto com o Apache e PHP em um ambiente local. 
           Faça o download e siga as instruções de instalação.`,
                imagem: "./imagens/xampp.png"
            },
            {
                tituloConteudo: "Criar uma conexão MySQL",
                descricaoConteudo: `
                Abra o MySQL Workbench e, no painel de "MySQL Connections", clique no ícone de "+" para adicionar uma nova conexão. 
                Preencha os campos como "Hostname" (localhost) e "Port" (3306) que é a porta que está rodando o serviço Mysql no xampp.
                O "Username" geralmente será 'root', e insira a senha que foi configurada durante a instalação.
                `,
                imagem: "./imagens/conexao.png"
            }
        ],
        possiveisErros: false,
        status: Status.NAO_CONCLUIDO
    },
    {
        id: 3,
        tituloEtapa: "Criando Database",
        descricaoEtapa: `Após configurar a conexão, o próximo passo é criar um banco de dados.`,

        conteudo: [

            {
                tituloConteudo: "Criar Database",
                descricaoConteudo: `
                Coloque o comando "<spam class="estilo-sql">CREATE DATABASE</spam> nome_do_banco_de_dados;" (nome não pode possuir acentos ou espaço na query de conexão) e control + enter para executar.`,
                imagem: "./imagens/criacao-database.png"
            },
            {
                tituloConteudo: "Verificar DBs",
                descricaoConteudo: `Após criar o banco de dados, execute "<spam class="estilo-sql">SHOW DATABASES;</spam>" para listar todos os bancos de dados criados. 
`,
                imagem: false
            },
            {
                tituloConteudo: "Selecionar Database",
                descricaoConteudo: `Atualize a lista de "Schemas" e procure sua database criada e de dois cliques para seleciona-la
                ou o comando "<spam class="estilo-sql">USE</spam> nome_do_banco_de_dados;".`,
                imagem: "./imagens/selecionar-db.png"
            },
        ],
        status: Status.NAO_CONCLUIDO

    },
    {
        id: 4,
        tituloEtapa: "Primeira Tabela",
        descricaoEtapa: `Um banco de dados (ou database) é onde você armazena as informações, 
        e as tabelas são estruturas dentro do banco 
        de dados que organizam esses dados em linhas e colunas. 
        Cada tabela é como uma planilha, onde as colunas representam os campos (como nome, idade, data) 
        e as linhas são os registros dos dados.`,
        conteudo: [

            {
                tituloConteudo: "Criando tabela",
                descricaoConteudo: `Para criarmos uma tabela, usamos o comando 
                "<spam class="estilo-sql">CREATE TABLE</spam> nome_da_tabela ();" <br>
                Ex: <br>
                <spam class="estilo-sql">CREATE TABLE</spam> cliente (
                    id <spam class="estilo-sql">int primary key auto_increment</spam>
                ); <br>
                Após isso control + enter, para ver sua tabela criada, atualize novamente e abra o "tables" clicando na seta.`,
                imagem: "./imagens/criacao-tabela.png"
            },

            {
                tituloConteudo: "Tipos de dados",
                descricaoConteudo: `
                <br>
                <spam class="estilo-sql">Int</spam>, <<spam class="estilo-sql">varchar</spam>(?) e <spam class="estilo-sql">date</spam> - Tipos de dados que serão registrados; <br>
                Int - Números inteiros; <br>
                <spam class="estilo-sql">Varchar</spam>(?)- Registra textos, é preciso colocar o numero maximo de caracteres que ira conter entre os parenteses; <br>
                <spam class="estilo-sql">Date</spam> - Registra apenas dia, mes e ano, para adicinar dado nela é preciso escrever 'YYYY-MM-dd'(Ano-mes-dia); <br>
                <spam class="estilo-sql">Primary Key</spam> - É a chave primaria desta tabela, ela é importante para termos certeza que cada registo é unico na tabela; <br>
                <spam class="estilo-sql">Auto_increment</spam> - Ela auto incrementa a cada registro, assim não a deixando nula e também não precisando ser definida a cada insert; <br>
                Assim como no nome da Database, o nome das tabelas e dados não podem possuir espaço ou assentos;`,
                imagem: "./imagens/explicacao-tabela.png"
            }
        ],
        status: Status.NAO_CONCLUIDO

    },
    {
        id: 5,
        tituloEtapa: "Comandos",
        descricaoEtapa: `Uma vez com sua tabela criada, você pode executar diversos comandos para gerenciar os dados.`,
        conteudo: [
            {
                tituloConteudo: "Ver informações da tabela (SELECT)",
                descricaoConteudo: `Para podermos ver as informações registradas usamos o comando "<spam class="estilo-sql">SELECT</spam> * <spam class="estilo-sql">FROM</spam> tabela;" assim vemos os dados salvos.`,
                imagem: "./imagens/select-tabela.png"
            },
            {
                tituloConteudo: "Inserir registros na tabela (INSERT)",
                descricaoConteudo: `Para registrar informações na tabela usamos o comando "<spam class="estilo-sql">INSERT INTO</spam> tabela (atributo1, atributo2, ...) <spam class="estilo-sql">VALUES</spam> (valor1, valor2, ...);"
                Para valores de texto, insira entre aspas simples ('').`,
                imagem: "./imagens/insert-tabela.png"
            },
            {
                tituloConteudo: "Atualizar informações de um registro (UPDATE)",
                descricaoConteudo: `Utilizamos o comando, "<spam class="estilo-sql">UPDATE</spam> tabela <spam class="estilo-sql">SET</spam> dado_atualizar = registro_atualizado <spam class="estilo-sql">WHERE</spam> dado = registro_antigo;"`,
                imagem: "./imagens/update-tabela.png"
            },
            {
                tituloConteudo: "Deletar registros de uma tabela (DELETE)",
                descricaoConteudo: `Utilizamos o comando, "<spam class="estilo-sql">DELETE FROM</spam> tabela <spam class="estilo-sql">WHERE</spam> dado_excluido = registro;".
                Somente os registros que atendem à condição serão removidos.`,
                imagem: "./imagens/delete-tabela.png"
            }
        ],
        status: Status.NAO_CONCLUIDO

    }

];

// export {Status, tutorialMysql};
