
// vamos pegas as teclas do piano pelas class iremos criar um const e iremeos pegar as class
const pianoKeys =document.querySelectorAll(".piano-keys .key");

// criaremos uma consta para puxa os valors do input 
const volumeFinal = document.querySelector(".volume-slider input");

const keysChecks = document.querySelector(".keys-check input"); 

let mapedKeys =[]; 
let audio =new Audio("src/tunes/a.wav");
const playTuner =(key) =>{
    audio.src=`src/tunes/${key}.wav`;
    audio.play();
       // vamos cria uma consta que via amarmazena toda vez que eu clinca com o keydown e vai gerar o efeito na teca 
    // vamos cria a class para que seja feito o efeito e vamos remover a mesma depois de um certo tempo 
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150);
};
// vamos criar uma função para capturar o valor 
// para capturar apenas o valor com value do html temos que criar uma condição no html que nos pertime chamra iremos chaamr de data-key e iremos puxar
pianoKeys.forEach((key) =>{
    console.log(key.dataset.key);
    key.addEventListener("click",()=>playTuner(key.dataset.key));//aqui colocamos o evento de clique a cada clicke ele vai capturar o dataset da div do html
    mapedKeys.push(key.dataset.key);
    //criamos a string e atribuimos o painos keys
   
});
// função para criamos o evento de quando apertarmos o botão do teclado chamar nossa key e tocar o play 1 adcionamos o efeito evente e definismo ela como e e damos ao play tube o paramento e recebe key 

document.addEventListener("keydown",(e) => {
    if (mapedKeys.includes(e.key)) {
        playTuner(e.key);
    }
});

// aqui vamos adiconar o envento de clic que e o evento vai roda exempli cada vez que mudar o o volme vai baixa ou diminuir aivamoc capturar ese evento 

const equalizarVolume = (e) => {
    audio.volume = e.target.value;
};

volumeFinal.addEventListener("input",equalizarVolume);

const mudarTecla = () =>{
    pianoKeys.forEach(key => key.classList.toggle("hide"))
};

keysChecks.addEventListener("click", mudarTecla);

