var paper1,ground


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	

	
	
	ground=new Ground(600,280,1200,20)
	plank1=new plank(1000,260,100,20)
	plank2=new plank(940,220,20,100)
    plank3=new plank(1060,220,20,100)
	paper1=new Paper(200,200,20)
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);
  
  Engine.run(engine);

ground.display();
plank1.display();
plank2.display();
plank3.display();
paper1.display();

drawSprites();

}



