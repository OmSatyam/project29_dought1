const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;

var engine, world, ground,ball;
var polygon_img, polygon;

function preload(){
  polygon_img = loadImage("polygon.png");

}

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  text("Drag the stone and release the stone,to launch it towards the blocks",50,50);

  //making the ground
  ground1 = new Ground(400,680,800,20);
  ground2 = new Ground(600,590,150,20);
  ground3 = new Ground(390,260,150,20);
  
  //making boxes(bottom floor)
  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
   //making boxes(middle floor)
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  //making boxes(top floor)
  box9 = new Box(390,155,30,40);
  
  //creating polygon and sling
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  sling = new Slingshot(this.polygon,{x:40,y:300});
}

function draw() {
  background(107,18,8);  
  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  sling.display();

  imageMode(CENTER)
  image(polygon_img, polygon.position.x, polygon.position.y,40,40);
}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}
function mouseReleased(){
	slingshot.fly();
}