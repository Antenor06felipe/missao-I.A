const caixaPrincipal = document.querySelector('.caixa-principal');   
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

 const perguntas = [
        {
    enunciado: "Qual País tem mais índice de pobreza?",
    alternativas :[
    {
        texto: "Afríca",
        afirmação: "afirmação"
    },
    {   texto: "Somália",
        afirmação: "afirmação"
    },
    {   texto: "Suíça",
        afirmação: "afirmação"
    },
    {   texto: "Cuba",
        afirmação: "afirmação"
    }]},

{
    enunciado: "Qual estado brasileiro mais racista?",
    alternativas :[
        {
            texto: "São Paulo",
            afirmação: "afirmação"
        },
        {   texto: "paraná",
            afirmação: "afirmação"
        },
        {   texto: "Rio Grande Do Sul",
            afirmação: "afirmação"
        },
        {   texto: "Santa Catarina",
            afirmação: "afirmação"
        }]},

{
    enunciado: "Qual dos fatores é mais frequentemente citado como uma causa primaria de desigualdade social em sociedades modernas?",
alternativas :[
    {
        texto: "Destribuição desigual de riqueza e renda",
        afirmação: "afirmação"
    },
    {   texto: "Localização geagráfica",
        afirmação: "afirmação"
    },
    {   texto: "Preferencias culturais",
        afirmação: "afirmação"
    },
    {   texto: "Condições climatica",
        afirmação: "afirmação"
    }]},
 ]
    let atual = 0;
    let perguntaAtual;
    let historiafinal = "";

function mostraPergunta() {
    if (atual>= perguntas.lnght)
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaPerguntas.textContent
    }
    
    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document. createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);}}
        mostraPergunta();