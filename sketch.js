const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var background;
var mango;
var boy;
var rock;

function preload(){
  background = loadImage("./Capstone.background.png");


}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  
}


function draw() 
{
    background = new image(120,120,200,200);
    
  Engine.update(engine);
  
}

 