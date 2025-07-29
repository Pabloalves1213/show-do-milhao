

const questions = [

    {
        questions: "Qual é a capital do Brasil?",
        answer: [
            { id: 1, Text: "São Paulo", correct: false },
            { id: 2, Text: "Rio de janeiro", correct: false },
            { id: 3, Text: "Brasilia", correct: true },
            { id: 4, Text: "Salvador", correct: false },
        ]
    },



    {
        questions: "Quem pintou a Mona Lisa?",
        answer: [
            { id: 1, Text: "Vincent van Gogh", correct: false },
            { id: 2, Text: "Leonardo da Vinci ", correct: true },
            { id: 3, Text: "Pablo Picasso", correct: false },
            { id: 4, Text: "Michelangelo", correct: false },
        ]
    },


    {
        questions: "Qual planeta é conhecido como o Planeta Vermelho",
        answer: [
            { id: 1, Text: "Júpiter", correct: false },
            { id: 2, Text: "Marte", correct: true },
            { id: 3, Text: "Vênus", correct: false },
            { id: 4, Text: "Saturno", correct: false },
        ]
    },



    {
        questions: "Qual tag HTML é usada para criar um parágrafo?",
        answer: [
            { id: 1, Text: "<div>", correct: false },
            { id: 2, Text: "<span>", correct: false },
            { id: 3, Text: "<p>", correct: true },
            { id: 4, Text: "<text>", correct: false },
        ]
    },



    {
        questions: "Qual desses animais é um mamífero?",
        answer: [
            { id: 1, Text: "Jacaré", correct: false },
            { id: 2, Text: "Tartaruga", correct: false },
            { id: 3, Text: "Golfinho", correct: true },
            { id: 4, Text: "Pinguim", correct: false },
        ]
    },


    {
        questions: "Quanto é 7 x 8?",
        answer: [
            { id: 1, Text: "56", correct: true },
            { id: 2, Text: "64", correct: false },
            { id: 3, Text: "49", correct: false },
            { id: 4, Text: "58", correct: false },
        ]
    },


    {
        questions: "Qual dessas palavras é um verbo?",
        answer: [
            { id: 1, Text: "Casa", correct: false },
            { id: 2, Text: "Rapído", correct: false },
            { id: 3, Text: "Correr", correct: true },
            { id: 4, Text: "Amarelo", correct: false },
        ]
    },


    {
        questions: "Quanto é a raiz quadrada de 144?",
        answer: [
            { id: 1, Text: "11", correct: false },
            { id: 2, Text: "14", correct: false },
            { id: 3, Text: "12", correct: true },
            { id: 4, Text: "13", correct: false },
        ]
    },


    {
        questions: "Qual elemento químico tem o símbolo “O”?",
        answer: [
            { id: 1, Text: "Ouro", correct: false },
            { id: 2, Text: "Oxigênio", correct: true },
            { id: 3, Text: "Osmônio", correct: true },
            { id: 4, Text: "Óxido", correct: false },
        ]
    },


    {
        questions: "", //pergunta zoeira// elabora
        answer: [
            { id: 1, Text: "*", correct: false },
            { id: 2, Text: "Oxigênio", correct: true },
            { id: 3, Text: "Osmônio", correct: true },
            { id: 4, Text: "Óxido", correct: false },
        ]
    }
]


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const pularButton = document.getElementById("pular-btn");
const ajudaButton = document.getElementById("ajuda-btn");

let currentQuestionindex = 0; //variavel para mudar as questoes// 
let premio = 0;                   //lembrando que a sequencia de questoes sempre comeca do zero//

function startQuiz() {
    currentQuestionindex = 0;
    premio = 0;
    nextButton.innerHTML = "Proxima";
    showQuestion();
}
function resetState() {

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();  //cdg para remover os buttons a cada nova pergunta/
    let currentQuestion = questions[currentQuestionindex]; // variavel onde esta armazenado as perguntas//
    let questionNo = currentQuestionindex + 1; //codigo para iniciar a contagem dos numeros antes da pergunta//
    questionElement.innerHTML = questionNo + "." + currentQuestion.questions;

    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text
        button.dataset.id = answer.id; //cdg que vai mostrar o id das alternativas // preciso mudar para letra//
        button.addEventListener("click", selectAnswer);//cdg para mostrar qual se alt ta certa ou errada//
        button.classList.add("btn")
        answerButtons.appendChild(button);
    })
    function selectAnswer(e) { //funcao que vai filtrar todas as respostas marcar como correta(true)//
        answer = questions[currentQuestionindex].answer;
        const correctAnswer = answer.filter((answer) => answer.correct == true)[0];
       
        const selectedBtn= e.target;
        const isCorrect=selectedBtn.dataset.id == correctAnswer.id;
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            premio++;
            alert("🎉Parabens, vamos para a proxima pergunta✅")
        }
        else{
            selectedBtn.classList.add("incorrect");
            alert("❌fim do jogo");
        }
    }
}
startQuiz();


