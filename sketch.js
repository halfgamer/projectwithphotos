
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,box1,dustbin1	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	box1 = new Box(200,200,60,60)
	dustbin1= new myBox(1200,200,160,180)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  if (keyCode=== UP_ARROW){
	Matter.Body.applyForce(box1.body,box1.body.position,{x:2,y:-9})
}
if (keyCode=== DOWN_ARROW){
  Matter.Body.applyForce(box1.body,box1.body.position,{x:0,y:7})

}
 

  groundObject.display();
  dustbinObj.display();
  box1.display();
  dustbin1.display();


}

