
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dustbin, paper;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 450,70);
	dustbin = new Dustbin(1200,650);
	ground = new Ground(width/2, 670, width, 20);
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin.display();
  drawSprites();
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-250});
	   
	}
}