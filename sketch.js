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
	plank1=new plank(1000,260,250,20)
	plank2=new plank(865,195,20,150)
    plank3=new plank(1135,195,20,150)
	paper1=new Paper(200,250,70)
	console.log(paper1)
}


function draw() {
 
  background(0);
  //rectMode(CENTER);
  
  Engine.run(engine);



ground.display();
plank1.display();
plank2.display();
plank3.display();
paper1.display();
/*console.log(paper1.x)
console.log(paper1.y)*/

//drawSprites();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.positon,{x:110,y:-150});
	}
}

