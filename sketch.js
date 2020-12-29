const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball,box1;


function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(230,150,50,50);
  box2 = new Box(200,50,50,50);
  ground = new Ground(200,380,400,30);
}

function draw() {
  background(0);  
 
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}
