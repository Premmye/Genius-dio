let ordem = [];
let ordemDosCliques = [];
let pontos = 0;

// 0 verde
// 1 vermelho
// 2 amarelo
// 3 azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

let ordemAleatoria = () => {
    let coresAleatorias = Math.floor(Math.random()*4);
    ordem[ordem.length] = coresAleatorias;
    ordemDosCliques = [];

    for ( let i in ordem) {
        let corDoBotao = criarCorDoBotao(ordem[i]);
        acenderBotao(corDoBotao,Number(i)+1)
    }
}

let acenderBotao = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

let conferirBotoesClicados = () => {
    for( let i in ordemDosCliques) {
        if(ordemDosCliques[i] != ordem[i]){
        gameOver();
        break;
        }
    }
    if(ordemDosCliques.length == ordem.length) {
        pontos++;
        alert(`Pontuação = ${pontos} \n você acertou! Iniciando próximo nível`);
        proximaDificuldade();
    }   
}

let clique = (cor) => {
    ordemDosCliques[ordemDosCliques.length] = cor;
    criarCorDoBotao(cor).classList.add('selected');
    
    setTimeout(() => {
        criarCorDoBotao(cor).classList.remove('selected');
        conferirBotoesClicados();

    },250);
}

let criarCorDoBotao = (cor) => {
    if (cor == 0) {
        return green;
    }else if (cor == 1){
        return red;
    }else if( cor == 2){
        return yellow
    }else if ( cor == 3){
            return blue 
    }
}

let proximaDificuldade = () => {
    ordemAleatoria();
}

let gameOver = () => {
    alert(`Pontuação ${pontos} \n você perdeu! \n clique em OK para iniciar um novo jogo`);
    ordem = [];
    ordemDosCliques = [];

    iniciarJogo();
}

let iniciarJogo = () => {
    alert(`Bem vindo ao Genius! iniciando novo jogo...!`)
    pontos = 0;

    proximaDificuldade();
}

green.addEventListener('click',clique(0));
red.addEventListener('click',clique(1));
yellow.addEventListener('click',clique(2));
blue.addEventListener('click',clique(3));

green.onclick = () => clique(0);
red.onclick = () => clique(1);
yellow.onclick = () => clique(2);
blue.onclick = () => clique(3);

iniciarJogo();