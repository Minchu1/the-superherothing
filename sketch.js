const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine  
var myWorld
var Building1,Building2,Building3,Building4,Building5,Building6,Building7,Building8,Building9,Building10,Building11,Building12
var Building13,Building14,Building15,Building16,Building17,Building18
var ground
var ball
var rope
var backgroundImg;
function preload() {
  backgroundImg=loadImage("images/GamingBackground.png");
  
  }
function setup() {
  createCanvas(1200,600);
  myEngine=Engine.create();
  myWorld= myEngine.world;
  Building1= new Building(1000,500);
  Building2= new Building(950,500);
  Building3= new Building(900,500);
  Building4= new Building(1000,450);
  Building5= new Building(950,450);
  Building6= new Building(900,450);
  Building7= new Building(1000,400);
  Building8= new Building(950,400);
  Building9= new Building(900,400);
  Building10= new Building(1000,350);
  Building11= new Building(950,350);
  Building12= new Building(900,350);
  Building13= new Building(1000,300);
  Building14= new Building(950,300);
  Building15= new Building(900,300);
  Building16= new Building(1000,250);
  Building17= new Building(950,250);
  Building18= new Building(900,250);
  ground= new Ground(600,550,1200,20);
  ball= new Ball(500,450,50);
  rope=new Rope(ball.body,{x:300,y:100});
}

function draw() {
  Engine.update(myEngine);
  background(backgroundImg);  
  Building1.display();
  Building2.display();
  Building3.display();
  Building4.display();
  Building5.display();
  Building6.display();
  Building7.display();
  Building8.display();
  Building9.display();
  Building10.display();
  Building11.display();
  Building12.display();
  Building13.display();
  Building14.display();
  Building15.display();
  Building16.display();
  Building17.display();
  Building18.display();
  ground.display();
  ball.display();
  rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}