const caixaPrincipal = document.querySelector('.caixa-principal');   
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

 const perguntas = [
        {
    enunciado: "Qual País tem mais índice de pobreza?",
alternativas: ["Afríca”, “Somália","Suíça","Cuba"],},

{
enunciado: "Qual estado brasileiro mais racista?",
alternativas: ["São Paulo", "Paraná", "Rio Grande do Sul", "Santa Catarina "],},

{
    enunciado: "Qual dos fatores é mais frequentemente citado como uma causa primaria de desigualdade social em sociedades modernas?",
alternativas: ["Destribuição desigual de riqueza e renda ”, “ocalização geagráfica","Preferencias culturais","Condições climatica"],},
    ];

    let atual = 0;
    let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    }
    
    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document. createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);}}
        mostraPergunta();