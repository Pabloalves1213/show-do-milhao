const perguntas = [
    {
        texto: "Qual é a capital do Brasil?",
        opcoes: ["(A) São Paulo", "(B) Rio de janeiro", "(C) Brasilia", "(D) Salvador"],
        correta: 2,
        valor: "1.000",
        dica: "Ondes os politicos se reuni.",

    },
    {
        texto: "Quanto é 5 x 6?",
        opcoes: ["(A) 30", "(B) 25", "(C) 11", "(D) 56",],
        correta: 0,
        valor: "2.000",
        dica: "25 + 5=....",
    },
    {
        texto: "Quem é o criador do Show do Milhão?",
        opcoes: ["(A) Gugu", "(B) Faustão", "(C) Silvio Santos", "(D) Ratinho"],
        correta: 2,
        valor: "5.000",
        dica: "Mais quem quer dinheiro.",
    },

    {
        texto: "Quem pintou a Mona Lisa?",
        opcoes: [" (A) Vincent van Gogh", " (B) Leonardo da Vinci", "(C) Pablo Picasso", "(D) Michelangelo"],
        correta: 1,
        valor: "10.000",
        dica: "Refencia a uma nota de dinheiro (R$ 20).",
    },

    {
        texto: "Qual planeta é conhecido como o Planeta Vermelho",
        opcoes: ["(A) Júpiter", "(B) Marte", "(C) Vênus", "(D) Saturno",],
        correta: 1,
        valor: "25.000",
        dica: "Ola vinhemos de M.",
    },
    {
        texto: "Qual tag HTML é usada para criar um parágrafo?",
        opcoes: ["(A) div", "(B) span", "(C) p", "(D) text"],
        correta: 2,
        valor: "50.000",
        dica: "C ta brincando dev´s",
    },
    {
        texto: "Qual desses animais é um mamífero?",
        opcoes: ["(A) Jacare", "(B) Tartaruga", "(C) Golfinho", "(D) Pinguim"],
        correta: 2,
        valor: "100.000",
        dica: "Sobe faz uma graça,depois volta para agua",
    },
    {
        texto: "Quanto é 7 x 8?",
        opcoes: ["(A) 56", "(B) 64", "(C) 49", "(D) 58",],
        correta: 0,
        valor: "200.000",
        dica: "No inicio é assim.",
    },
    {
        texto: "Qual a raiz quadrada de 144",
        opcoes: ["(A) 11", "(B) 12", "(C) 13", "(D)14",],
        correta: 1,
        valor: "500.000",
        dica: "A de amor, (B) de aqui é brasil",
    },
    {
        texto: "Qual o exemplo mais ultilizado por Vitor nos codigos?",
        opcoes: ["(A) Limão", "(B) Batatinha", "(C) Salsicha", "(D) Acerola",],
        correta: 1,
        valor: "1.000.000,00",
        dica: "A pergunta de 1 milhão de real em barra de ouro,que vale mais q dinheiro",
    }
];

let indicePergunta = 0;
let pontuacao = 0;

function mostrarPergunta() {
    const p = perguntas[indicePergunta];
    document.getElementById("pergunta").textContent = p.texto;

    const area = document.getElementById("alternativas");
    area.innerHTML = "";

    p.opcoes.forEach((opcao, i) => {
        const btn = document.createElement("button");
        btn.textContent = opcao;
        btn.onclick = () => verificarResposta(i);
        area.appendChild(btn);
    });
}

function verificarResposta(indice) {
    const p = perguntas[indicePergunta];

    if (indice === p.correta) {

        pontuacao = p.valor;
        alert("🎉Certa reposta✅");

        document.getElementById("pontos").textContent = "R$ " + pontuacao;
    } else {

        alert("❌fim do jogo");
        pontuacao = 0;
        document.getElementById("pontos").textContent = "R$ 0";
        indicePergunta = 0; // volta do início
        mostrarPergunta();
        return;
    }

}

function proximaPergunta() {
    indicePergunta++;
    if (indicePergunta < perguntas.length) {
        mostrarPergunta();
    } else {
        alert("Parabéns! Você completou todas as perguntas!");
    }
}

function abrirAjuda() {
    const ajuda = document.getElementById("opcoesAjuda");
    ajuda.style.display = ajuda.style.display === "none" ? "block" : "none";
}

function pularPergunta() {
    document.getElementById("mensagemAjuda").innerText = "Você pulou a pergunta! (próxima em 1s)";
    setTimeout(() => {
        proximaPergunta();
    }, 1000);
}

function eliminarDuas() {
    document.getElementById("mensagemAjuda").innerText = "Duas alternativas foram eliminadas.";
    //preciso ajeitar isso para outra forma//
    document.getElementById("a").style.display = "none";
    document.getElementById("c").style.display = "none";
}

function mostrarDica() {
    const p = perguntas[indicePergunta];
    document.getElementById("mensagemAjuda").innerText = "💡 Dica: " + p.dica;
}

// Valor acumulado (você pode mudar dinamicamente conforme o jogo)
let valorAcumulado = 1000;

function pararJogo() {
    const mensagem = document.getElementById("mensagemFinal");
    mensagem.innerHTML = `<strong>Parabéns! Você parou o jogo e recebeu R$ ${valorAcumulado.toLocaleString('pt-BR')}!</strong>`;
    alert("fim do jogo")

    desativarBotoes();
}

function desativarBotoes() {  //desativa todos os botões de respostas ao clica parar//
    const botoes = document.querySelectorAll("button");
    botoes.forEach(botao => {
        if (botao.innerText !== "🛑 Parar") {
            botao.disabled = true;
        }
    });
}


mostrarPergunta();
