let cor;
let posicaoVertical; // Y
let posicaoHorizoltal; // X

function setup() {
  
  createCanvas(400, 400);
  background(color(100, 0, 0))
  cor = color(random(0,255), random(0, 255 ), random(0, 255 ));
posicaoHorizoltal = 200
posicaoVertical = 200
}

function draw() {
  
  fill(cor);
  circle(posicaoHorizoltal, posicaoVertical, 50); 


 if(mouseX < posicaoHorizoltal)
    posicaoHorizoltal = posicaoHorizoltal - 1;
  
  
  if(mouseX > posicaoHorizoltal)
    posicaoHorizoltal = posicaoHorizoltal + 1;


  if(mouseY < posicaoVertical) 
    posicaoVertical --;
   
  
  if(mouseY > posicaoVertical) 
    posicaoVertical ++;
}
{
  if(mouseIspressed) 
  cor = color(random(0,255), random(0, 255 ), random(0, 255 ));
  random(0, 100)
  }