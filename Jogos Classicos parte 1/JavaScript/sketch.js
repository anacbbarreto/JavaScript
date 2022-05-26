//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

//variaveis da velocidade
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
let raio= diametro/2;

//variaveis da raquete
let xRaquete =5;
let yRaquete =150;
let raqueteComprimento = 10;
let raqueteAltura=90;

let colidiu = false;

// tamanho da tela
function setup() {
    createCanvas(600, 400);
}

//desenhando inicio
function draw() {
    background(152,190,100);
    mostraBolinha();
    movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
   movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
}


function colisaoMinhaRaqueteBiblioteca() {  
  colidiu=collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
        velocidadeXBolinha *= -1;

  }
}


function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
}
  if (yBolinha +raio > height ||yBolinha - raio < 0) {
    velocidadeYBolinha *=-1;
}
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function mostraRaquete(){
  rect(xRaquete,yRaquete,raqueteComprimento,raqueteAltura);
}

function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}