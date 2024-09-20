const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele tambem gera imagens e áudios hiper-realistas. Qual é o primeiro pensamento?",
    alternativas: [
        "Isso é assustador!",
        "Isso é maravilhoso!"
    ]
},
{
    enunciado: "Com a descoberta desta tecnologia, chamada Inteligencia Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre e esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
        "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
        "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas nas internet e conhecimentos próprios sobre o tema."
     ]
},
{
    enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho o futuro. Nesse debate, como você se posiciona?",