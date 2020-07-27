// LINK DO TRAILER YOUTUBE: https://youtu.be/Vbtv1WT2moQ
// LINK DO VIDEO EXPLICATIVO DO CÓDIGO E DO JOGO: 

// DECLARAÇÃO DAS VARIAVEIS USADAS PARA BOTÕES, STROKES E RECT'S

var x2 = 105; var y2 = 120; largx2 = 200; altx2 = 40;
var x3 = 110; var y3 = 195; largx3 = 200; altx3 = 40;
var x4 = 110; var y4 = 260; largx4 = 200; altx4 = 40;
var bmenux = 30; var bmenuy = 35; var blarg = 100; var balt = 40;
var escx1 = 100; var escy1 = 250; var esclarg1 = 200; var escalt1 = 40;
var escx2 = 100; var escy2 = 350; var esclarg2 = 200; var escalt2 = 40;
var alt1x = 30; var alt1y = 305; var alt1larg = 75; var alt1alt = 40;
var alt2x = 120; var alt2y = 305; var alt2larg = 75; var alt2alt = 40;
var alt3x = 210; var alt3y = 305; var alt3larg = 75; var alt3alt = 40;
var alt4x = 300; var alt4y = 305; var alt4larg = 75; var alt4alt = 40;
var prox = 265; var proy = 35; var prolarg = 100; var proalt = 40;
var xvolta1 = 100; var yvolta1 = 330; var largv1 = 200; var altv1 = 40;
var xvolta2 = 100; var yvolta2 = 300; var largv2 = 200; var altv2 = 40; 
var tela = 1;

// DECLARAÇÃO DE IMAGENS (FUNÇÕES)

let img;
function preload() {
  img = loadImage('paineldojogo.jpg');
  img2 = loadImage('infodojogo.jpg');
  img3 = loadImage('creditosdojogo.jpg');
  img4 = loadImage('ect.png');
  img5 = loadImage('paineldeescolha.jpg');
  img6 = loadImage('lojadecarros.jpg');
  img7 = loadImage('shopping.jpg');
  img8 = loadImage('fases.jpg');
  img9 = loadImage('parceiroOrientador.jpg');
  img10 = loadImage('desenvolvedor.jpg');
  img11 = loadImage('parabensConcluiuBalões.png');
  img12 = loadImage('setaEscolha.png');
  img13 = loadImage('setaEsolha2.png');
  img14 = loadImage('falencia.jpg');
}
let myFont;
function preload2() {
  myFont = loadFont('Milko Denilo.ttf');
}

function setup() {
  createCanvas(400, 400);
}

//VALORES DAS TELAS QUE CHAMAM SUAS RESPECTIVAS FUNÇÕES

function draw() {
  background(img);

if(tela==1){
  menu();
}
if(tela==2){
  escolha(); 
}
if(tela==3){
  info();
}
if(tela==4){
  creditos();  
}
if(tela==5){
  fase1esc1();
}
if(tela==6){
  fase1esc2();
}
if(tela==7){
  resolucao1();
}
if(tela==8){
  fase2esc1();
}
if(tela==9){
  resolucao2();
}
if(tela==10){
  fase3esc1();
}
if(tela==11){
  resolucao3();
}
if (tela==12){
  fase4esc1();
}  
if (tela==13){
  resolucao4();
} 
if (tela==14){
  fase5esc1();
}
if (tela==15){
  resolucao5();
}
if (tela==16){
  parabens();
}
if (tela==17){
  resolucao1fase2();
}
if (tela==18){
  fase2esc2();
}
if (tela==19){
  resolucao2fase2();
}
if (tela==20){
  fase3esc2();
} 
if (tela==21){
  resolucao3esc2();
}
if (tela==22){
  fase4esc2();
}
if (tela==23){
  resolucao4esc2();
} 
if (tela==24){
  fase5esc2();
} 
if (tela==25){
  resolucao5esc2();
}
if (tela==26){
  falencia();
}  

  //MENU
  
function menu(){ 
  
if(mouseX > x2 && mouseX < x2+largx2 && mouseY > y2 && mouseY < y2+altx2){
  stroke(0,191,255);
  fill(255);
  rect(x2, y2, largx2, altx2, 15);
if(mouseIsPressed){
  tela=2;
}
  }    
  
if(mouseX > x3 && mouseX < x3+largx3 && mouseY > y3 && mouseY < y3+altx3){
  stroke(0,191,255);
  fill(255);
  rect(x3, y3, largx3, altx3, 15);
if(mouseIsPressed){
  tela=3;
}
  }  
  
if(mouseX > x4 && mouseX < x4+largx4 && mouseY > y4 && mouseY < y4+altx4){
  stroke(0,191,255);
  fill(255);
  rect(x4, y4, largx4, altx4, 15);
if(mouseIsPressed){
  tela=4;
}  
  } 
  
  stroke(0,191,255);
  fill(255);
  rect(75, 15, 250, 45, 15);
  
  textSize(20); 
  textFont('Georgia');
  fill(0); 
  text('Invista ou Falhe Tentando', 85, 42);
  
  noStroke();
  textSize(20);
  textFont('Georgia');

  text('INICIAR JOGO', 140, 150);
  text('INFO', 180, 220);
  text('CRÉDITOS', 155, 290);
  }
 
  //ESCOLHA
  
function escolha(){
background(img);
  
image(img12, 160, 295, 45, 50);  
image(img13, 185, 295, 45, 50);
  
fill(255);
rect(35,95,160,125,15);
fill(255);
rect(205,95,160,125,15);  
  
noStroke();
image(img6, 40, 100, 150, 115);
image(img7, 210, 100, 150, 115);

if(mouseX > escx1 && mouseX < escx1+esclarg1 && mouseY > escy1 && mouseY < escy1+escalt1){
  stroke(255);
  fill(255);
  rect(escx1, escy1, esclarg1, escalt1, 15);
if(mouseIsPressed){
  tela=5;
}  
  } 
if(mouseX > escx2 && mouseX < escx2+esclarg2 && mouseY > escy2 && mouseY < escy2+escalt2){
  stroke(255);
  fill(255);
  rect(escx2, escy2, esclarg2, escalt2, 15);
if(mouseIsPressed){
  tela=6;
}  
  } 
if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }   
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(15);
  textFont('Georgia');
  fill(0);
  text('Menu', 60, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(escx1, escy1, esclarg1, escalt1, 15);
  
  noStroke();
  textSize(14);
  textFont('Georgia');
  fill(0);
  text('Loja de Carros: Juros Simples', 107, 275);
  
  stroke(0,191,255);
  fill(255);
  rect(escx2, escy2, esclarg2, escalt2, 15);
  
  noStroke();
  textSize(14);
  textFont('Georgia');
  fill(0);
  text('Shopping: Juros Compostos', 112, 375);
}
  
  //INFO
  
function info(){
background(img2);  
  
  stroke(255);
  fill(255);
  rect(50, 30, 300, 290, 15); 
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('O "jogo Invista ou Falhe Tentando" tem como \no bjetivo ajudar os usuários a melhor compreender \n os assuntos de Juros Simples e Juros Compostos \n através de uma simulação de gestão comercial. \n O mesmo foi desenvolvido em formato de QUIZ, \n no qual o usuário terá duas opções de investimento: \n uma relacionada a uma loja de carros envolvendo \n juros simples e a outra relacionada a um shopping \n envolvendo juros compostos. Nas fases propostas \n surgirão problemas financeiros, os quais você terá \n que resolver para não deixar seu comércio falir. \n A cada fase, o nível de dificuldade aumenta. \n As fases funcionarão da seguinte maneira: \n A cada fase você terá apenas uma chance de acertar \n a alternativa correta. Se errar, seu comércio  irá \n falir e terá que começar novamente. O objetivo \n é chegar até a última fase e evitar a falencia do seu \n comércio.', 58, 45);
  if(mouseX > xvolta1 && mouseX < xvolta1+largv1 && mouseY > yvolta1 && mouseY < yvolta1+altv1){
  stroke(255);
  fill(255);
  rect(xvolta1, yvolta1, largv1, altv1, 15);
if(mouseIsPressed){
  tela=1;
}
  }
  noStroke();
  textSize(20);
  textFont('Georgia')
  fill(0);
  text('Voltar', 170, 360);
}

  //CREDITOS
  
function creditos(){
background(img3);
  
  
  
  stroke(255);
  fill(255);
  rect(50, 75, 300, 220, 15); 
  
  noStroke();
  image(img4, 200, 240, 100, 50);
  image(img9, 70, 90, 90, 90);
  image(img10, 70, 190, 90, 95);
  
  noStroke();
  fill(0);
  textSize(15);
  textFont('Georgia');
  text('Parceira Orientadora: \n Profª Katarine Jussara', 175, 130);
  text('Aluno: David Gabriel', 180, 215);
  text('Matrícula: 20190079017', 175, 235);

 if(mouseX > xvolta2 && mouseX < xvolta2+largv2 && mouseY > yvolta2 && mouseY < yvolta2+altv2){  
  stroke(255);
  fill(255);
  rect(xvolta2, yvolta2, largv2, altv2, 15);
if(mouseIsPressed){
  tela=1;
}  
 }
  
  noStroke();
  textFont('Georgia');
  textSize(20);
  fill(0);
  text('Voltar', 170, 330);
  
}
  
  //FASE1 DA ESCOLHA 1
  
function fase1esc1(){
background(img);

if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(15);
  textFont('Georgia');
  fill(0);
  text('Menu', 60, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 200, 15);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('PARA SE TORNAR UMA GRANDE EMPRESA, VOCÊ \n COMEÇOU APLICANDO UM VALOR BAIXO. VAMOS \n COM CALMA, VOCÊ ESTÁ APENAS COMEÇANDO! \n \n Você aplicou o capital de R$ 1.200,00 a uma taxa \n de 2% ao mês durante 14 meses. Determine os juros e o \n montante dessa aplicação.', 40, 105);
  text('Dicas: J = C * i * t // M = C + J', 40, 250);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(120, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(210, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(300, 305, 75, 40, 15);
  
  if(mouseX > alt1x && mouseX < alt1x+alt1larg && mouseY > alt1y && mouseY < alt1y+alt1alt){
  stroke(0,255,127);
  fill(255);
  rect(alt1x, alt1y, alt1larg, alt1alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt2x && mouseX < alt2x+alt1larg && mouseY > alt2y && mouseY < alt2y+alt2alt){
  stroke(0,255,127);
  fill(255);
  rect(alt2x, alt2y, alt2larg, alt2alt, 15);
if(mouseIsPressed){
  tela=7;
}
  } 
if(mouseX > alt3x && mouseX < alt3x+alt3larg && mouseY > alt3y && mouseY < alt3y+alt3alt){
  stroke(0,255,127);
  fill(255);
  rect(alt3x, alt3y, alt3larg, alt3alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt4x && mouseX < alt4x+alt4larg && mouseY > alt4y && mouseY < alt4y+alt4alt){
  stroke(0,255,127);
  fill(255);
  rect(alt4x, alt4y, alt4larg, alt4alt, 15);
if(mouseIsPressed){
  tela=26;
}
  }     
  
  noStroke();
  textSize(12.5);
  fill(0);
  textFont('Georgia');
  text('326,00 e \n 1.526,00', 37, 318);
  text('336,00 e \n 1.536,00', 127, 318);
  text('337,00 e \n 1.537,00', 217, 318);
  text('338,00 e \n 1.538,00', 307, 318);
    
}
  
  //RESOLUÇAO DA FASE1 DA ESCOLHA 1
  
function resolucao1(){
background(img);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 260, 15);
  
  if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('Capital (C) = R$ 1.200,00 \n Tempo (t) = 14 meses \n Taxa (i) = 2% ao mês = 2/100 = 0,02', 40, 105);
  text('Fórmula dos juros simples: \n J = C * i * t \n J = 1200 * 0,02 * 14 \n J = 336', 40, 160);
  text('Montante \n M = C + J \n M = 1200 + 336 \n M = 1536', 40, 225);
  text('O valor dos juros da aplicação é de R$ 336,00 e o \n montante a ser resgatado é de R$ 1.536,00.', 40, 310);
  
if(mouseX > prox && mouseX < prox+prolarg && mouseY > proy && mouseY < proy+proalt){
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
if(mouseIsPressed){
  tela=8;
}  
  } 
  
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
  
  noStroke();
  textSize(20);
  fill(0);
  text('Próximo', 275, 60);
}
  
  //FASE 2 DA ESCOLHA 1;
  
function fase2esc1(){
background(img);

if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(15);
  textFont('Georgia');
  fill(0);
  text('Menu', 60, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 200, 15);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('AGORA VOCÊ PRECISA BUSCAR PARCERIAS: \n \n Uma de suas parcerias aplicou um capital a juros simples \n durante 2 anos, sob taxa de juros de 5% ao mês e gerou \n um montante de R$ 26.950,00.\n Determine o valor do capital aplicado. ', 40, 105);
  text('Dicas: Para determinarmos o capital precisamos fazer a \n seguinte adaptação: M = C + J // J = M – C \n \n Substituindo na fórmula J = C * i * t, temos: \n M – C = C * i * t', 40, 220);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(120, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(210, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(300, 305, 75, 40, 15);
  
  if(mouseX > alt1x && mouseX < alt1x+alt1larg && mouseY > alt1y && mouseY < alt1y+alt1alt){
  stroke(0,255,127);
  fill(255);
  rect(alt1x, alt1y, alt1larg, alt1alt, 15);
if(mouseIsPressed){
  tela=9;
}
  } 
if(mouseX > alt2x && mouseX < alt2x+alt1larg && mouseY > alt2y && mouseY < alt2y+alt2alt){
  stroke(0,255,127);
  fill(255);
  rect(alt2x, alt2y, alt2larg, alt2alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt3x && mouseX < alt3x+alt3larg && mouseY > alt3y && mouseY < alt3y+alt3alt){
  stroke(0,255,127);
  fill(255);
  rect(alt3x, alt3y, alt3larg, alt3alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt4x && mouseX < alt4x+alt4larg && mouseY > alt4y && mouseY < alt4y+alt4alt){
  stroke(0,255,127);
  fill(255);
  rect(alt4x, alt4y, alt4larg, alt4alt, 15);
if(mouseIsPressed){
  tela=26;
}
  }     
  
  noStroke();
  textSize(12.5);
  fill(0);
  textFont('Georgia');
  text('12.250,00', 37, 325);
  text('12.450,00', 127, 325);
  text('13.250,00', 217, 325);
  text('13.550,00', 307, 325);
    
}
  
  // RESOLUÇÃO DA FASE 2 DA ESCOLHA 1
  
function resolucao2(){
background(img);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 200, 15);
  
  if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('Montante (M) = R$ 26.950,00 \n Tempo (t) = 2 anos = 24 meses \n Taxa (i) = 5% ao mês = 5/100 = 0,05', 40, 105);
  text('M – C = C * i * t \n 26950 – C = C * 0,05 * 24 \n 26950 – C = C * 1,2 \n 26950 = 1,2C + C \n 26950 = 2,2C \n C = 26950/2,2 \n C = 12250', 40, 160);
  text('Portanto, o capital aplicado foi de R$ 12250,00.', 40, 280);  
  
 if(mouseX > prox && mouseX < prox+prolarg && mouseY > proy && mouseY < proy+proalt){
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
if(mouseIsPressed){
  tela=10;
}  
  } 
  
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
  
  noStroke();
  textSize(20);
  fill(0);
  text('Próximo', 275, 60);
  
}
  
  //FASE 3 DA ESCOLHA 1
  
function fase3esc1(){
background(img);

if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(15);
  textFont('Georgia');
  fill(0);
  text('Menu', 60, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 200, 15);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('ESTÁ NA HORA DE COMEÇAR A INVESTIR: \n \n Sua empresa possui R$ 80.000,00. Você aplica 30% \n desse dinheiro em um investimento que rende juros \n simples a uma taxa de 3% ao mês, durante 2 meses; e \n aplica o restante em outro investimento que rende 2% \n ao mês durante 2 meses também. Ao fim desse período, \n você possui:', 40, 105);
  text('\n Dicas: J = C * i * t // M = C + J', 40, 230);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(120, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(210, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(300, 305, 75, 40, 15);
  
  if(mouseX > alt1x && mouseX < alt1x+alt1larg && mouseY > alt1y && mouseY < alt1y+alt1alt){
  stroke(0,255,127);
  fill(255);
  rect(alt1x, alt1y, alt1larg, alt1alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt2x && mouseX < alt2x+alt1larg && mouseY > alt2y && mouseY < alt2y+alt2alt){
  stroke(0,255,127);
  fill(255);
  rect(alt2x, alt2y, alt2larg, alt2alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt3x && mouseX < alt3x+alt3larg && mouseY > alt3y && mouseY < alt3y+alt3alt){
  stroke(0,255,127);
  fill(255);
  rect(alt3x, alt3y, alt3larg, alt3alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt4x && mouseX < alt4x+alt4larg && mouseY > alt4y && mouseY < alt4y+alt4alt){
  stroke(0,255,127);
  fill(255);
  rect(alt4x, alt4y, alt4larg, alt4alt, 15);
if(mouseIsPressed){
  tela=11;
}
  }     
  
  noStroke();
  textSize(12.5);
  fill(0);
  textFont('Georgia');
  text('83.000,00', 37, 327);
  text('85.200,00', 127, 327);
  text('86.300,00', 217, 327);
  text('83.680,00', 307, 327);
    
}
  // RESOLUÇÃO DA FASE 3 DA ESCOLHA 1
  
  function resolucao3(){
  background(img);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 250, 15);
  
  if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('30% de 80.000: 80000 . 30% = 80000.30/100 = \n 2400000/100 = 24000', 40, 105);
  text('Vamos calcular cada uma das aplicações:', 40, 145);
  text('* 24000 a 3% durante 2 meses:', 40, 170);
  text('24000.3% = 24000.3/100 = 72000/100 = 720 \n 2.720 = 1.440', 40, 185);
  text('* 56000 a 2% durante 2 meses:', 40, 230);
  text('56000.2% = 56000.2/100 = 112000/100 = 1120 \n 2.1120 = 2240', 40, 245);
   text('Total de juros: 1440 + 2240 = 3680 \n Resposta: 80000 + 3680 = 83680,00', 40, 300);
  
 if(mouseX > prox && mouseX < prox+prolarg && mouseY > proy && mouseY < proy+proalt){
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
if(mouseIsPressed){
  tela=12;
}  
  } 
  
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
  
  noStroke();
  textSize(20);
  fill(0);
  text('Próximo', 275, 60);  
  }
  
  //FASE 4 DA ESCOLHA 1
  
function fase4esc1(){
background(img);

if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(15);
  textFont('Georgia');
  fill(0);
  text('Menu', 60, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 200, 15);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('COM O AVANÇO DE SUA EMPRESA, DESPESAS \n COMEÇAM A SURGIR. VOCÊ PRECISA APLICAR \n ALGUMAS QUANTIAS MINÍMAS PARA PAGAR \n ENERGIA E ÁGUA. \n \n Uma quantia foi aplicada a juros simples de 6% ao mês, \n durante 5 meses e, em seguida, o montante foi aplicado \n durante mais 5 meses, a juros simples de 4% ao mês. \n No final dos 10 meses, o novo montante foi de R$ 234,00. \n Qual o valor da quantia aplicada inicialmente? ', 40, 105);
  text('Dicas: J = C * i * t // M = C + J', 40, 272);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(120, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(210, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(300, 305, 75, 40, 15);
  
  if(mouseX > alt1x && mouseX < alt1x+alt1larg && mouseY > alt1y && mouseY < alt1y+alt1alt){
  stroke(0,255,127);
  fill(255);
  rect(alt1x, alt1y, alt1larg, alt1alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt2x && mouseX < alt2x+alt1larg && mouseY > alt2y && mouseY < alt2y+alt2alt){
  stroke(0,255,127);
  fill(255);
  rect(alt2x, alt2y, alt2larg, alt2alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt3x && mouseX < alt3x+alt3larg && mouseY > alt3y && mouseY < alt3y+alt3alt){
  stroke(0,255,127);
  fill(255);
  rect(alt3x, alt3y, alt3larg, alt3alt, 15);
if(mouseIsPressed){
  tela=13;
}
  } 
if(mouseX > alt4x && mouseX < alt4x+alt4larg && mouseY > alt4y && mouseY < alt4y+alt4alt){
  stroke(0,255,127);
  fill(255);
  rect(alt4x, alt4y, alt4larg, alt4alt, 15);
if(mouseIsPressed){
  tela=26;
}
  }     
  
  noStroke();
  textSize(12.5);
  fill(0);
  textFont('Georgia');
  text('450,00', 37, 327);
  text('350,00', 127, 327);
  text('150,00', 217, 327);
  text('250,00', 307, 327);  
  
}

  //RESOLUÇÃO 4 DA ESCOLHA 1
  
function resolucao4(){
 background(img);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 285, 15);
  
  if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('1ª aplicação:', 40, 105);
  text('J = C * i * t \n J = C * 0,06 * 5 \n J = 0,3*C', 40, 125);
  text('M = C + J \n M = C + 0,3C \n M = 1,3C', 40, 180);
  text('2º aplicação:', 40, 230);
  text('O capital da 2º aplicação será o montante da 1º. Observe:', 40, 245);
  text('J = C * i * t \n J = 1,3C * 0,04 * 5 \n J = 0,26C', 40, 265);
  text('M = C + J \n 234 = 1,3C + 0,26C \n 234 = 1,56C \n C = 234 / 1,56 \n C = 150', 230, 265);
  text('Portanto, o capital inicial é de R$ 150,00.', 40, 350)
  
 if(mouseX > prox && mouseX < prox+prolarg && mouseY > proy && mouseY < proy+proalt){
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
if(mouseIsPressed){
  tela=14;
}  
  } 
  
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
  
  noStroke();
  textSize(20);
  fill(0);
  text('Próximo', 275, 60);  
}  
  //FASE 5 DA ESCOLHA 1
  
function fase5esc1(){
background(img);

if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(15);
  textFont('Georgia');
  fill(0);
  text('Menu', 60, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 200, 15);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('A CRISE CHEGOU A SUA EMPRESA DEVIDO A \n PANDEMIA. VOCÊ TEM UMA DÍVIDA E PRECISA \n NEGOCIAR E PAGAR CORRETAMENTE. CUIDADO, \n É UMA SITUAÇÃO MUITO DELICADA E PODE LEVAR \n SUA EMPRESA A FALÊNCIA! \n \n Você tem uma dívida da qual só pode pagar apenas 20%.\n Para pagar o restante, fez um empréstimo que, a uma \n taxa fixa de 5% ao mês, lhe custou juros simples de \n R$ 12.000,00, ao final de um ano. A dívida era de:', 40, 105);
  text('Dicas: J = C * i * t // REGRA DE TRÊS', 40, 280);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(120, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(210, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(300, 305, 75, 40, 15);
  
  if(mouseX > alt1x && mouseX < alt1x+alt1larg && mouseY > alt1y && mouseY < alt1y+alt1alt){
  stroke(0,255,127);
  fill(255);
  rect(alt1x, alt1y, alt1larg, alt1alt, 15);
if(mouseIsPressed){
  tela=15;
}
  } 
if(mouseX > alt2x && mouseX < alt2x+alt1larg && mouseY > alt2y && mouseY < alt2y+alt2alt){
  stroke(0,255,127);
  fill(255);
  rect(alt2x, alt2y, alt2larg, alt2alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt3x && mouseX < alt3x+alt3larg && mouseY > alt3y && mouseY < alt3y+alt3alt){
  stroke(0,255,127);
  fill(255);
  rect(alt3x, alt3y, alt3larg, alt3alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt4x && mouseX < alt4x+alt4larg && mouseY > alt4y && mouseY < alt4y+alt4alt){
  stroke(0,255,127);
  fill(255);
  rect(alt4x, alt4y, alt4larg, alt4alt, 15);
if(mouseIsPressed){
  tela=26;
}
  }     
  
  noStroke();
  textSize(12.5);
  fill(0);
  textFont('Georgia');
  text('25.000,00', 37, 327);
  text('30.000,00', 127, 327);
  text('100.000,00', 217, 327);
  text('240.000,00', 307, 327);  
}

  // RESOLUÇÃO DA FASE 5 DA ESCOLHA 1
  
function resolucao5(){
 background(img);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 285, 15);
  
  if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('Com a fórmula do juros simples, temos: J = C*i*t', 40, 105);
  text('1200 = C * 0,05 * 12', 40, 125);
  text('C = 20.000.', 40, 150);
  text('Como R$ 20.000 representa 80% da dívida, fazendo uma \n regra de três temos que a dívida total é de R$ 25.000,00.:', 40, 230);
  text('20.000 === 80% \n    x === 100% \n 80x = 2.000.000 \n x = 2.000.000 / 80 \n x = 25.000,00', 150, 300);
  
 if(mouseX > prox && mouseX < prox+prolarg && mouseY > proy && mouseY < proy+proalt){
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
if(mouseIsPressed){
  tela=16;
}  
  } 
  
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
  
  noStroke();
  textSize(20);
  fill(0);
  text('Próximo', 275, 60);  
}
  
  //GAME OVER
  
function parabens(){
background(img);

   if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 285, 15);
  image(img11, 100, 95, 200, 100);
  
  noStroke();
  fill(0);
  textSize(13);
  textFont('Georgia');
  text('Muito bem!! Você começou do zero, investiu e salvou \n sua empresa de uma falência geral. Agora você é um \n empresário famoso e transformou sua empresa em\n grande e famosa.\n \n LEMBRE - SE:' , 40, 200);
  text('"O sucesso é alcançado e conservado por aqueles \n que não deixam de tentar." \n \n "O sucesso é uma consequência e não um objetivo." \n - Gustave Flaubert', 40,300);
  
}
  
  //FASE1 DA ESCOLHA 2
  
function fase1esc2(){
background(img);

if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(15);
  textFont('Georgia');
  fill(0);
  text('Menu', 60, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 200, 15);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('PARA COMEÇAR SEU INVESTIMENTO, VOCÊ FEZ O \n SEGUINTE...\n\n Você aplicou hoje na caderneta de poupança a quantia \n de R$ 20.000,00. Qual será o montante gerado ao final \n de 4 anos, sabendo que a rentabilidade mensal é de 0,5%?', 40, 105);
  text('Dicas: S = P*(1+i)^n', 40, 280);  
  stroke(0,191,255);
  fill(255);
  rect(30, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(120, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(210, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(300, 305, 75, 40, 15);
  
  if(mouseX > alt1x && mouseX < alt1x+alt1larg && mouseY > alt1y && mouseY < alt1y+alt1alt){
  stroke(0,255,127);
  fill(255);
  rect(alt1x, alt1y, alt1larg, alt1alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt2x && mouseX < alt2x+alt1larg && mouseY > alt2y && mouseY < alt2y+alt2alt){
  stroke(0,255,127);
  fill(255);
  rect(alt2x, alt2y, alt2larg, alt2alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt3x && mouseX < alt3x+alt3larg && mouseY > alt3y && mouseY < alt3y+alt3alt){
  stroke(0,255,127);
  fill(255);
  rect(alt3x, alt3y, alt3larg, alt3alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt4x && mouseX < alt4x+alt4larg && mouseY > alt4y && mouseY < alt4y+alt4alt){
  stroke(0,255,127);
  fill(255);
  rect(alt4x, alt4y, alt4larg, alt4alt, 15);
if(mouseIsPressed){
  tela=17;
}
  }     
  
  noStroke();
  textSize(12.5);
  fill(0);
  textFont('Georgia');
  text('24.409,00', 37, 327);
  text('26.400,00', 127, 327);
  text('27.405,00', 217, 327);
  text('25.409,78', 307, 327);  
}
  
  //RESOLUÇÃO DA FASE 1 DA ESCOLHA 2
  
  function resolucao1fase2(){
   background(img);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 285, 15);
  
  if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('Com a fórmula do juros compostos, temos: S = P*(1+i)^n', 40, 105);
  text('P = 20000\nI = 0,5%a.m. = 0,005\nN = 4 anos = 48 meses (observe que o tempo e a taxa \ndevem estar no mesmo período)\nS = ?', 40, 125);
  text('Aplicando a formula:', 40, 220);
  text('S = 20000*(1+0,005)^48\nS = 20000*(1,005)^48\nS = 20000*1,2704891611\nS = 25.409,78', 40, 250);
  text('O montante produzido será de R$ 25.409,78.', 40, 340);
  
 if(mouseX > prox && mouseX < prox+prolarg && mouseY > proy && mouseY < proy+proalt){
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
if(mouseIsPressed){
  tela=18;
}  
  } 
  
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
  
  noStroke();
  textSize(20);
  fill(0);
  text('Próximo', 275, 60);  
}
  //FASE 2 DA ESCOLHA 2
  
function fase2esc2(){
background(img);

if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(15);
  textFont('Georgia');
  fill(0);
  text('Menu', 60, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 200, 15);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('BUSCANDO PARCERIAS \n\n A parceria que você conseguiu, aplicou determinado \n capital que gerou, após 24 meses, um montante de \n R$ 15.000,00. Sabendo que a taxa de juros é de 2% ao \n mês, determine o valor desse capital.', 40, 105);
  text('Dicas: S = P*(1+i)^n', 40, 280);  
  stroke(0,191,255);
  fill(255);
  rect(30, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(120, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(210, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(300, 305, 75, 40, 15);
  
  if(mouseX > alt1x && mouseX < alt1x+alt1larg && mouseY > alt1y && mouseY < alt1y+alt1alt){
  stroke(0,255,127);
  fill(255);
  rect(alt1x, alt1y, alt1larg, alt1alt, 15);
if(mouseIsPressed){
  tela=19;
}
  } 
if(mouseX > alt2x && mouseX < alt2x+alt1larg && mouseY > alt2y && mouseY < alt2y+alt2alt){
  stroke(0,255,127);
  fill(255);
  rect(alt2x, alt2y, alt2larg, alt2alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt3x && mouseX < alt3x+alt3larg && mouseY > alt3y && mouseY < alt3y+alt3alt){
  stroke(0,255,127);
  fill(255);
  rect(alt3x, alt3y, alt3larg, alt3alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt4x && mouseX < alt4x+alt4larg && mouseY > alt4y && mouseY < alt4y+alt4alt){
  stroke(0,255,127);
  fill(255);
  rect(alt4x, alt4y, alt4larg, alt4alt, 15);
if(mouseIsPressed){
  tela=26;
}
  }     
  
  noStroke();
  textSize(12.5);
  fill(0);
  textFont('Georgia');
  text('9.325,82', 37, 327);
  text('9.420,86', 127, 327);
  text('10.525,84', 217, 327);
  text('8.320,78', 307, 327);
}
  
  //RESOLUÇÃO DA FASE 2 DA ESCOLHA 2
  
function resolucao2fase2(){
 background(img);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 285, 15);
  
  if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('Com a fórmula do juros compostos, temos: S = P*(1+i)^n', 40, 105);
  text('P = ? \nN = 24 MESES \nS = 15000 \nI = 2% a.m. = 0,02', 40, 125);
  text('Aplicando a formula:', 40, 200);
  text('15000 = P*(1 + 0,02)^24 \n15000 = P*(1,02)^24 \n15000 = P*1,6084372495 \nP = 15000 / 1,6084372495 \nP = 9.325,82', 40, 230);
  text('O valor do capital é de: 9.325,82', 40, 340);
  
 if(mouseX > prox && mouseX < prox+prolarg && mouseY > proy && mouseY < proy+proalt){
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
if(mouseIsPressed){
  tela=20;
}  
  } 
  
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
  
  noStroke();
  textSize(20);
  fill(0);
  text('Próximo', 275, 60);
}
  
  //FASE 3 DA ESCOLHA 2
  
function fase3esc2(){
background(img);

if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(15);
  textFont('Georgia');
  fill(0);
  text('Menu', 60, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 200, 15);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('VOCÊ PRECISA PAGAR UM SEGURO PARA COBRIR\nQUALQUER ACIDENTE NO SEU ESTABELECIMENTO.\nVOCÊ ESTAVA SEM DINHEIRO NECESSÁRIO, MAS\nFEZ UM ACORDO DE PAGAR TUDO A VISTA DAQUI\nHÁ 10 ANOS.\n\nQuanto você terá que aplicar hoje num fundo de renda\nfixa para que, ao final de 10 anos a uma taxa de 1,3%a.m.,\nhaja um montante de R$ 100.000,00?', 40, 105);
  text('Dicas: S = P*(1+i)^n', 40, 280);  
  stroke(0,191,255);
  fill(255);
  rect(30, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(120, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(210, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(300, 305, 75, 40, 15);
  
  if(mouseX > alt1x && mouseX < alt1x+alt1larg && mouseY > alt1y && mouseY < alt1y+alt1alt){
  stroke(0,255,127);
  fill(255);
  rect(alt1x, alt1y, alt1larg, alt1alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt2x && mouseX < alt2x+alt1larg && mouseY > alt2y && mouseY < alt2y+alt2alt){
  stroke(0,255,127);
  fill(255);
  rect(alt2x, alt2y, alt2larg, alt2alt, 15);
if(mouseIsPressed){
  tela=21;
}
  } 
if(mouseX > alt3x && mouseX < alt3x+alt3larg && mouseY > alt3y && mouseY < alt3y+alt3alt){
  stroke(0,255,127);
  fill(255);
  rect(alt3x, alt3y, alt3larg, alt3alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt4x && mouseX < alt4x+alt4larg && mouseY > alt4y && mouseY < alt4y+alt4alt){
  stroke(0,255,127);
  fill(255);
  rect(alt4x, alt4y, alt4larg, alt4alt, 15);
if(mouseIsPressed){
  tela=26;
}
  }     
  
  noStroke();
  textSize(12.5);
  fill(0);
  textFont('Georgia');
  text('20.225,84', 37, 327);
  text('21.225,92', 127, 327);
  text('21.250,00', 217, 327);
  text('20.250,00', 307, 327);
}  
  
  //RESOLUCAO DA FASE 3 DA ESCOLHA 2
  
function resolucao3esc2(){
 background(img);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 285, 15);
  
  if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('Com a fórmula do juros compostos, temos: S = P*(1+i)^n', 40, 105);
  text('P = ? \nN = 10 ANOS = 120 MESES \nS = 100000 \nI = 1,3% a.m. = 0,013', 40, 125);
  text('Aplicando a formula:', 40, 200);
  text('100000 = P*(1 + 0,013)^120\n100000 = P*(1,013)^120\n100000 = P*4,711220632\nP = 100000 / 4,711220632\nP = 21.225,92', 40, 230);
  text('Portanto, você terá que aplicar: 21.225,92', 40, 340);
  
 if(mouseX > prox && mouseX < prox+prolarg && mouseY > proy && mouseY < proy+proalt){
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
if(mouseIsPressed){
  tela=22;
}  
  } 
  
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
  
  noStroke();
  textSize(20);
  fill(0);
  text('Próximo', 275, 60);
}
  
  //FASE 4 DA ESCOLHA 2
  
function fase4esc2(){
background(img);

if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(15);
  textFont('Georgia');
  fill(0);
  text('Menu', 60, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 200, 15);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('VOCÊ PRECISA COMPRAR UMA TV PARA A PRAÇA DE \nALIMENTAÇÃO.\n\nNo dia 1° de abril, você fez uma aplicação financeira, com \ncapitalização mensal, no valor de 1.000,00. No dia 1° de\nmaio, depositou outros 1.000,00 na mesma aplicação. No\ndia 1° de Junho, ele resgatou toda a aplicação e, com mais\nR$ 690,00, comprou uma TV digital que custava\nR$ 3.000,00. A taxa mensal de juros dessa aplicação\nera de:', 40, 105);
  text('Dicas: S = P*(1+i)^n', 40, 280);  
  stroke(0,191,255);
  fill(255);
  rect(30, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(120, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(210, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(300, 305, 75, 40, 15);
  
  if(mouseX > alt1x && mouseX < alt1x+alt1larg && mouseY > alt1y && mouseY < alt1y+alt1alt){
  stroke(0,255,127);
  fill(255);
  rect(alt1x, alt1y, alt1larg, alt1alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt2x && mouseX < alt2x+alt1larg && mouseY > alt2y && mouseY < alt2y+alt2alt){
  stroke(0,255,127);
  fill(255);
  rect(alt2x, alt2y, alt2larg, alt2alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt3x && mouseX < alt3x+alt3larg && mouseY > alt3y && mouseY < alt3y+alt3alt){
  stroke(0,255,127);
  fill(255);
  rect(alt3x, alt3y, alt3larg, alt3alt, 15);
if(mouseIsPressed){
  tela=23;
}
  } 
if(mouseX > alt4x && mouseX < alt4x+alt4larg && mouseY > alt4y && mouseY < alt4y+alt4alt){
  stroke(0,255,127);
  fill(255);
  rect(alt4x, alt4y, alt4larg, alt4alt, 15);
if(mouseIsPressed){
  tela=26;
}
  }     
  
  noStroke();
  textSize(12.5);
  fill(0);
  textFont('Georgia');
  text('8%', 37, 327);
  text('9%', 127, 327);
  text('10%', 217, 327);
  text('11%', 307, 327);
} 
  
  //RESOLUÇÃO DA FASE 4 DA ESCOLHA 2
  
function resolucao4esc2(){
 background(img);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 285, 15);
  
  if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('Sendo i a taxa mensal de juros:', 40, 105);
  text('1000 (1+i)^2 + 1000(1+i) + 690 = 3000\n1000(1+i)^2 + 1000(1+i) - 2310 = 0', 40, 125);
  text('Resolvando a equação do segundo grau:', 40, 200);
  text('1+i = -2,1 (não convém)\n1+i = 1,1\ni = 0,1 = 10%', 40, 230);
  text('A taxa mensal de aplicação de juros foi de: 10%', 40, 340);
  
 if(mouseX > prox && mouseX < prox+prolarg && mouseY > proy && mouseY < proy+proalt){
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
if(mouseIsPressed){
  tela=24;
}  
  } 
  
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
  
  noStroke();
  textSize(20);
  fill(0);
  text('Próximo', 275, 60);
} 
  
  //FASE 5 DA ESCOLHA 2
  
function fase5esc2(){
background(img);

if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(15);
  textFont('Georgia');
  fill(0);
  text('Menu', 60, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 200, 15);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('A VIGILÂNCIA SANITÁRIA APLICOU UMA\nMULTA NO SEU SHOPPING\n\nA pessoa aplicou uma multa com um capital de 2,400.00\npor dois meses, à uma taxe mensal de 3%. Se 2/3 do total\nfoi aplicado a juros compostos e o restante a juros\nsimples, o valor total de juros arrecadado ao fim do prazo\nfoi de: ', 40, 105);
  text('Dicas: S = P*(1+i)^n', 40, 280);  
  stroke(0,191,255);
  fill(255);
  rect(30, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(120, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(210, 305, 75, 40, 15);
  stroke(0,191,255);
  fill(255);
  rect(300, 305, 75, 40, 15);
  
  if(mouseX > alt1x && mouseX < alt1x+alt1larg && mouseY > alt1y && mouseY < alt1y+alt1alt){
  stroke(0,255,127);
  fill(255);
  rect(alt1x, alt1y, alt1larg, alt1alt, 15);
if(mouseIsPressed){
  tela=25;
}
  } 
if(mouseX > alt2x && mouseX < alt2x+alt1larg && mouseY > alt2y && mouseY < alt2y+alt2alt){
  stroke(0,255,127);
  fill(255);
  rect(alt2x, alt2y, alt2larg, alt2alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt3x && mouseX < alt3x+alt3larg && mouseY > alt3y && mouseY < alt3y+alt3alt){
  stroke(0,255,127);
  fill(255);
  rect(alt3x, alt3y, alt3larg, alt3alt, 15);
if(mouseIsPressed){
  tela=26;
}
  } 
if(mouseX > alt4x && mouseX < alt4x+alt4larg && mouseY > alt4y && mouseY < alt4y+alt4alt){
  stroke(0,255,127);
  fill(255);
  rect(alt4x, alt4y, alt4larg, alt4alt, 15);
if(mouseIsPressed){
  tela=26;
}
  }     
  
  noStroke();
  textSize(12.5);
  fill(0);
  textFont('Georgia');
  text('145,44', 37, 327);
  text('145,33', 127, 327);
  text('144,72', 217, 327);
  text('144,98', 307, 327);
}
 
  //RESOLUÇÃO DA FASE 5 DA ESCOLHA 2  
  
function resolucao5esc2(){
 background(img);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 285, 15);
  
  if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  noStroke();
  textSize(12.5);
  textFont('Georgia');
  fill(0);
  text('O valor inicial, em reais, aplicado no regime de juro\ncomposto é 2400*2/3 = 1600.', 40, 105);
  text('Assim, o montante acumulado por essa aplicação é:\nM = 1600*1(1 + 0,03)^2 = 1.697,44', 40, 150);
  text('Dessa forma, o valor de juros arrecadado, em reais,\nfoi:', 40, 200);
  text('1.697,44 - 1600 = 97,44', 40, 230);
  text('O valor inicial, em reais, aplicado no regime de\njuro simples é:\n2400 - 1600 = 800.\nSendo assim, o valor de juros arrecadados, em reais,\nfoi de 0,03*2*800 = 48.\nLogo o total, em reais, ao fim do prazo,\nfoi 97,44 + 48 = 145,44', 40, 265);
  
 if(mouseX > prox && mouseX < prox+prolarg && mouseY > proy && mouseY < proy+proalt){
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
if(mouseIsPressed){
  tela=16;
}  
  } 
  
  stroke(0,191,255);
  fill(255);
  rect(prox, proy, prolarg, proalt, 15);
  
  noStroke();
  textSize(20);
  fill(0);
  text('Próximo', 275, 60);
}  
  
  //TELA DA FALÊNCIA
  
function falencia(){
background(img);

   if(mouseX > bmenux && mouseX < bmenux+blarg && mouseY > bmenuy && mouseY < bmenuy+balt){
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
if(mouseIsPressed){
  tela=1;
}  
  }
  
  stroke(0,191,255);
  fill(255);
  rect(bmenux, bmenuy, blarg, balt, 15);
  
  noStroke();
  textSize(20);
  textFont('Georgia');
  fill(0);
  text('Menu', 54, 60);
  
  stroke(0,191,255);
  fill(255);
  rect(30, 90, 335, 285, 15);
  image(img14, 100,100,200,200);
  
  noStroke();
  fill(0);
  textSize(13);
  textFont('Georgia');
  text('Infelizmente você não soube resolver os problemas\ncorretamente como um bom empresário tem que fazer\ne levou sua empresa a falencia. Tente novamente.\nBoa Sorte!!', 40,320);
} 
}