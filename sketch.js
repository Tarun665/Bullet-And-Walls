let Zenia;
let Tourus;
let Cyclap;
let wall;
let safe = true;
let wall2;
let wall3;
let bulletR;
let wallL;
let wall4;
let wall5;
let wall6;
let buton;
let button2;
let dcontrol = 0;
let damage;
let button3;

function setup() {
  createCanvas(1600,400);
  let thickness = Math.round(random(22,83));

  wall = createSprite(0, 200, thickness, height);
  wall2 = createSprite(width, 200, thickness, height);
  Tourus = createSprite(width-75,height/2,25,25);
  Cyclap = createSprite(width-75,height-50,25,25);
  Zenia = createSprite(width-75,50,25,25);
  wall4 = createSprite(width-50,height-50,25,50);
  wall5 = createSprite(width-50,height/2,25,50);
  wall6 = createSprite(width-50,50,25,50);
  let speed = Math.round(random(55,90));
  buton = createButton("play");
  button2 = createButton("stop");
  button3 = createButton("Restart");
  
  // let weigth = Math.round(random(30,52));
  // let speed = Math.round(random(223,321));
  // let thickness = Math.round(random(22,83));
  // let damage= Math.round(0.5*weigth*speed*speed/thickness*thickness*thickness);
  // 
}
function playing(){
  let speed = Math.round(random(55,90));
  if(!isTouching(Tourus,wall))
  {
   // if(keyWentDown("space")){
      Zenia.velocityX = -speed;
      Tourus.velocityX = -speed;
      Cyclap.velocityX = -speed;
    //}
    //isTouching(Tourus,wall);
       
  }
}
function reset(){
  Zenia.x = width-75;
  Tourus.x = width-75;
  Cyclap.x = width-75;
}
function stoping(){
  Zenia.velocityX = 0;
  Tourus.velocityX = 0;
  Cyclap.velocityX = 0;
  if(isTouching()){
  dcontrol = 1;
  }
}
function draw() {
  background(0); 
  //let speed = Math.round(random(223,321)); 
  wall.shapeColor = color("crimson");
  wall2.shapeColor = color("#7FFFD4");
  Zenia.shapeColor = color("#5F9EA0");
  Tourus.shapeColor = color("lightSalmon");
  Cyclap.shapeColor = color("lightSeaGreen");
  wall4.shapeColor = color("lightslategray");
  wall5.shapeColor = color("paleVioletRed");
  wall6.shapeColor = color("olive");
  fill("paleVioletRed");
  // textSize(25);
  // text("Press Space to play",width/2.3,height-50);
  let speed = Math.round(random(55,90));
  if(dcontrol === 0){
   //damage= Math.round(0.5*weigth*speed*speed/(thickness*thickness*thickness));
  }
  if(isTouching(Zenia,wall))
  {
    //Zenia.collide(wall);
    Zenia.velocityX = 0;
    isTouching(Zenia,wall);
       
  }
  if(isTouching(Tourus,wall))
  {
  //  Tourus.collide(wall);
    isTouching(Tourus,wall);
       
  }
  if(isTouching(Cyclap,wall))
  {
//Cyclap.collide(wall);
    isTouching(Cyclap,wall);
       
  }
  if(!isTouching(Tourus,wall))
  {
    if(keyWentDown("space")){
      Zenia.velocityX = -speed;
      Tourus.velocityX = -speed;
      Cyclap.velocityX = -speed;
    }
    //isTouching(Tourus,wall);
       
  }if(isTouching(Tourus,wall)){
    Zenia.velocityX = 0;
    Tourus.velocityX = 0;
    Cyclap.velocityX = 0;

  }
 

  drawSprites();
  buton.mousePressed(playing);
  button2.mousePressed(stoping);
  button3.mousePressed(reset);
  //button();

}
// function button(){
//   let thickness = Math.round(random(22,83));

//   if(keyWentDown("t")){
//     wall.width = thickness;
//     wall2.width = wall.width;
//   }

// }