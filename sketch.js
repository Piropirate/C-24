
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var dustbin1, dustbin2, dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	ball = new CrumpledBall(50,680,20);
    ground = new Ground(400,690,800);
	dustbin1 = new Dustbin(500,640,20,100);
	dustbin2 = new Dustbin(550,670,100,20);
	dustbin3 = new Dustbin(600,640,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  dustbin2.display();
  dustbin1.display();
  dustbin3.display();
  ground.display();
  drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
	  
	    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-85});
       
    }
    
}



