<h1 align='center' id='Título-e-Imagem-de-capa'>Trivia</h1>

<p align='center'>
<img src='https://grupo-10-trivia.surge.sh/static/media/logoTrivia.713a2b06f256fb71e176ebc2854b7ecf.svg' width="230" heigth="259"/>
</p>


## Bradges

<p align='left'>
<img src='https://img.shields.io/badge/STATUS-FINALIZADO-Green' width='250px'></img>
</p>

<h2>Deploy: https://grupo-10-trivia.surge.sh</h2>

</br>


## Execução

### Para instalar o projeto na sua máquina, faça antes o clone do repositório

### Para clones com HTTPS:

```bash
  git clone https://github.com/viniciusjosedev/project-trivia-react-redux.git
```

### Para clones com SSH:

```bash
  git clone git@github.com:viniciusjosedev/project-trivia-react-redux.git
```

### Para clones com GitHub CLI:

```bash
  gh repo clone viniciusjosedev/project-trivia-react-redux
```

### Depois de clonado, abra a o terminal na raiz do projeto e rode o seguinte comando:

```bash
  npm install && npm start
```

### Pronto! Com isso a aplicação irá rodar na sua máquina localmente.

## Descrição do projeto

### Projeto em grupo realizado mediante a necessidade da prática em conceitos inicialmente abordados de forma teórica. Conceitos esses que priorizam uma boa relação interpessoal, fazendo assim a necessidade de organizar métodos que fariam o grupo atingir grande objetivos.
### Diante das inúmeras opções de métodos para se trabalhar em grupo, optamos pela metodologia ágil scrum. A mesma foi a escolhida pois se encaixou na convivência dos integrantes, além da mesma ser atual e muito usada no mercado de trabalho.
### Neste projeto em específico, praticamos ainda mais a forma de se desenvolver uma aplicação em React. Usando componentes de classes, e junto com eles, tambem usamos os conhecimentos de redux, para manipular estados globais na aplicação.
### Além disso, praticamos requisições para API's, junto com isso, veio a necessidade de tratar essas requisições como uma Promise e então encaminhar os resultados para a tela do usuário.
### API('s) usada(s):

### End-Point para adquirir um token do jogo: https://opentdb.com/api_token.php?command=request - :heavy_check_mark:
### End-Point para adquirir as perguntas do jogo: https://opentdb.com/api.php?amount=5&token=${token} - :heavy_check_mark:
### End-Point para adquirir as perguntas do jogo de forma personalizada (opcional): https://opentdb.com/api.php?amount=5&token=${token}&${category}&${difficulty}&${type} - :heavy_check_mark:

## :hammer: Funcionalidades :hammer:

### A aplicação se inicia com a tela de login. Nela, é possivel colocar seu nome e endereço de email do Gravatar.
### Logo abaixo, temos 2 opções, a primeira se chama "Jogar" e assim que clicado você vai para a página do Game, onde recebe 5 de categorias e dificuldades totalmente aleatórias.
### A segunda opção se chama "Configurações", quando clicada vai para uma página onde o usuário personaliza as perguntas, desde a categoria até o nivel de dificuldade das mesmas.
### Depois de ter respondido as 5 perguntas, é entregue uma tela de feedbacks, onde o usuário poderá ver seu desempenho. Ainda nesta mesma tela tem 2 opções muito intuitivas, a de "Jogar novamente" onde o usuário volta para o inicio e "Ver Ranking".
### Quando clicado em "Ver Ranking", é possivel ver todo o histórico do usuário(s) naquele computador. Histórico este que mostra o nome do usuário e a pontuação atingida.

## :computer: Tecnologias/Linguagens utilizadas :computer:

### Tecnologias: - HTML5, CSS6, JS6 e CSS Modules - :heavy_check_mark:
### Bibliotecas: - react, react-router-dom@v5, prop-types@15, redux@4.2, react-redux@8.0 e redux-thunk@2.4 - :heavy_check_mark:

## Pessoas Desenvolvedoras do Projeto.
### Projeto realizado em grupo e também em conjunto com a empresa de tecnologia Trybe, que foi a responsável pela criação dos testes com o Cypress, fazendo-se assim, toda a estrutura necessária para um bom desenvolvimento orientado a testes (TDD).
### Além dos testes com o Cypress, toda a estrutura inicial do projeto foram feitas pela Trybe, isso inclui: todos os scripts no packge.json (com excessão do "erro"), estrutura inicial das pastas e arquivos e o arquivo renderWithRouterAndRedux.js.
### Todas os demais adições dos arquivos/diretórios do projeto são de autoria do grupo 10, isso inclui: src/components, src/pages, src/style, src/tests. As alterações dos demais arquivos soltos na pasta src/ também são de minha autoria, isso inclui: App.jsx, index.js.
##### OBS 1: O arquivo setupTests.js já vem como default com o React na instalação feita (npx create-react-app .).
##### OBS 2: Todos os testes de com o Cypress foram devidamente apagados, esta ação envolve proteger a autoria de código, respeitando assim as normas e regras internas da empresa de tecnologia Trybe.

### O denominado grupo 10 é formado por 5 pessoas, são elas: Heitor Pereira, João Pedro, Lucas Santos, Sthéfani Ferreira e Vinicius José.
### Heitor Pereira ficou responsável pela parte inicial da tela de Login, botão que leva as configurações da tela de Login, Header da página, estilização da página de Feedbacks, funcionalidade do esquema de cores de respostas certas e erradas, criação da opção para a pessoa jogadora poder jogar novamente, criação do conteúdo da tela de Ranking, criação dos testes com RTL da página de Ranking, das funcionalidades do arquivo que contém as API's e também foi responsável pela criação do mock do localstorage no arquivo localStorageMock.test.js.
### João Pedro ficou responsável pela parte inicial da tela de Login, pelo botão de inicar o jogo, Header da página e botão para ir para a tela de início.
### Lucas Santos ficou respnsável pela parte inicial da tela de Login, pelo botão de inicar o jogo, Header da página e botão para ir para a tela de início.
### Sthéfani Ferreira ficou respnsável pela parte inicial da tela de Login, desenvolvimento dos testes com RTL para atingir 90% de cobertura da tela de Login, criação da página de jogo que deve conter as informações relacionadas à pergunta, desenvolvimento do timer onde a pessoa que joga tem 30 segundos para responder, criação da mensagem de feedback para ser exibida a pessoa usuária, criação das exibições das informações relacionadas aos resultados obtidos para a pessoa usuária e criação do conteúdo da tela de Ranking.
### Vinicius José ficou responsável pela parte inicial da tela de Login, pelo botão de inicar o jogo, criação da página de jogo que deve conter as informações relacionadas à pergunta, desenvolvimento do timer onde a pessoa que joga tem 30 segundos para responder, criação do placar com várias características, criação do botão de botão de "Next" (Próxima) que apareça após a resposta ser dada, desenvolvimento do jogo de forma que a pessoa jogadora deve responder 5 perguntas no total, desenvolvimento do header de _feedback_ que deve conter as informações da pessoa jogadora, criação do conteúdo da tela de ranking, desenvolvimento dos testes em RTL da página de Game, Feedbacks e Configurações, também foi responsável pela criação dos estilos da página Login, Configurações, Game e Ranking.
