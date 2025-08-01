

const questions = [
    {
        question: "Qual é a capital do Brasil?",
        answer: [
            { id: 1, Text: "São Paulo", correct: false },
            { id: 2, Text: "Rio de janeiro", correct: false },
            { id: 3, Text: "Brasilia", correct: true },
            { id: 4, Text: "Salvador", correct: false },
        ]
    },
    {
        question: "Quem pintou a Mona Lisa?",
        answer: [
            { id: 1, Text: "Vincent van Gogh", correct: false },
            { id: 2, Text: "Leonardo da Vinci ", correct: true },
            { id: 3, Text: "Pablo Picasso", correct: false },
            { id: 4, Text: "Michelangelo", correct: false },
        ]
    },
    {
        question: "Qual planeta é conhecido como o Planeta Vermelho",
        answer: [
            { id: 1, Text: "Júpiter", correct: false },
            { id: 2, Text: "Marte", correct: true },
            { id: 3, Text: "Vênus", correct: false },
            { id: 4, Text: "Saturno", correct: false },
        ]
    },
    {
        question: "Qual tag HTML é usada para criar um parágrafo?",
        answer: [
            { id: 1, Text: "div", correct: false },
            { id: 2, Text: "span", correct: false },
            { id: 3, Text: "p", correct: true },
            { id: 4, Text: "text", correct: false },
        ]
    },
    {
        question: "Qual desses animais é um mamífero?",
        answer: [
            { id: 1, Text: "Jacaré", correct: false },
            { id: 2, Text: "Tartaruga", correct: false },
            { id: 3, Text: "Golfinho", correct: true },
            { id: 4, Text: "Pinguim", correct: false },
        ]
    },
    {
        question: "Quanto é 7 x 8?",
        answer: [
            { id: 1, Text: "56", correct: true },
            { id: 2, Text: "64", correct: false },
            { id: 3, Text: "49", correct: false },
            { id: 4, Text: "58", correct: false },
        ]
    },                //pergunta vitor pq a virgula influencia no codigo//
    {
        question: "Qual dessas palavras é um verbo?",
        answer: [
            { id: 1, Text: "Casa", correct: false },
            { id: 2, Text: "Rapído", correct: false },
            { id: 3, Text: "Correr", correct: true },
            { id: 4, Text: "Amarelo", correct: false },
        ]
    },
    {
        question: "Quanto é a raiz quadrada de 144?",
        answer: [
            { id: 1, Text: "11", correct: false },
            { id: 2, Text: "14", correct: false },
            { id: 3, Text: "12", correct: true },
            { id: 4, Text: "13", correct: false },
        ]
    },
    {
        question: "Qual elemento químico tem o símbolo “O”?",
        answer: [
            { id: 1, Text: "Ouro", correct: false },
            { id: 2, Text: "Oxigênio", correct: true },
            { id: 3, Text: "Osmônio", correct: true },
            { id: 4, Text: "Óxido", correct: false },
        ]
    },
    {
        question: "", //pergunta zoeira// elabora
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
const pararButton = document.getElementById("parar-btn");
const ajudaButton = document.getElementById("ajuda-btn");

let currentQuestionindex = 0;     //variavel para mudar as questoes// 
let premio = 0;                   //lembrando que a sequencia de questoes sempre comeca do zero//

function startQuiz() {
    currentQuestionindex = 0;
    score = 0;
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
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement("button"); //mostra as alternativas//
        button.innerHTML = answer.Text //mostrar o text dentro da alternativa//
        button.dataset.id = answer.id; //cdg que vai mostrar o id das alternativas // preciso mudar para letra//
        button.addEventListener("click", selectAnswer);//cdg para mostrar as respotas das alternativas certa ou errada//
        button.classList.add("btn") // puxa css dos button//
        answerButtons.appendChild(button); //fez a mesma funcao de mostrar as opcoes de alt disponivel//
    })
    function selectAnswer(e) { //funcao que vai filtrar todas as respostas marcar como correta(true)//
        answer = questions[currentQuestionindex].answer;
        const correctAnswer = answer.filter((answer) => answer.correct == true)[0];

        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
           // alert("🎉Certa reposta✅")// lembra de mudar
        }
        else {
            selectedBtn.classList.add("incorrect");
           // alert("❌fim do jogo");// lembra de mudar
        }
        Array.from(answerButtons.children).forEach((button) => {
            button.disabled = true;  //cdg para evitar que participante click em duas ou mais alternativas//
        });

    }

    //erro esta aqui//
    function handleNextButton() {  // cdg para nao dar erro nas perguntas seguintes//
        console.log("pergunta atual: " + currentQuestionindex);
        currentQuestionindex++;    //++ soma // 
        console.log("testando proxima");

        if (currentQuestionindex < questions.length) {
            showQuestion();
        }
        else {
            console.log("chamou premioQuestion");

            premioQuestion();   // codigo de teste!! ver se vai entregar o resultado no final do jogo//
        }
    };

    function showScore() {
        resetState();
        questionElement.innerHTML = `voce ganhou ${premio} de ${questionElement.length}!`;
        nextButton.innerHTML = "play Again"
    }
    nextButton.addEventListener("click", () => {
        if (currentQuestionindex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })
}

startQuiz();


//erro pode ser o eventlistener com onclick// observar

