const img = document.getElementById('img'); // Está armazenando na variável IMG o valor da IMG HTML
const buttons = document.getElementById('buttons'); // Está armazenando na variável BUTTONS a Class HTML

let colorIndex = 0; // Variável Global
let intervalId; // Variável Global

const trafficLight = ( event ) => { // Função que identifica o ID do botão que foi clicado (TARGET)
    stopAutomatic();
    turnOn[event.target.id]();
    
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;


const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () =>{ // Limpa o intervalo após clicar em outro botão
    clearInterval(intervalId);
}

const turnOn = { // Funções dentro de um Objeto
    'red':      ()=> img.src = './img/vermelho.png',
    'yellow':   ()=> img.src = './img/amarelo.png',
    'green':    ()=> img.src = './img/verde.png',
    'automatic': ()=> intervalId = setInterval( changeColor, 1000)
}

buttons.addEventListener('click', trafficLight); // Chama a função que identifica qual botão foi clicado através do ID