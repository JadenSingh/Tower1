const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function preload()
{
	
}

function setup() {
    createCanvas(1200, 700);
    
	engine = Engine.create();
    world = engine.world;
	
    ground1= new Ground(500,550,300,10)
    ground2= new Ground(930,400,240,10)
// left tower
    box1= new Box(400,524,30,40)
    box2 = new Box(430,524,30,40)
    box3 = new Box(460,524,30,40)
    box4 = new Box(490,524,30,40)
    box5 = new Box(520,524,30,40)
    box6 = new Box(550,524,30,40)
    box7 = new Box(580,524,30,40)
    box8 = new Box(430,484,30,40)
    box9 = new Box(460,484,30,40)
    box10 = new Box(490,484,30,40)
    box11 = new Box(520,484,30,40)
    box12 = new Box(550,484,30,40)
    box13 = new Box(460,444,30,40)
    box14 = new Box(490,444,30,40)
    box15 = new Box(520,444,30,40)
    box16 = new Box(490,404,30,40)
// right tower
    box17 = new Box(870,374,30,40)
    box18 = new Box(900,374,30,40)
    box19 = new Box(930,374,30,40)
    box20 = new Box(960,374,30,40)
    box21 = new Box(990,374,30,40)
    box22 = new Box(900,334,30,40)
    box23 = new Box(930,334,30,40)
    box24 = new Box(960,334,30,40)
    box25 = new Box(930,294,30,40)

    polygon1= new polygon(200,200,50)

    slingshot1 = new rope(polygon1.body,{x:150,y:400})
    
    
}


function draw() {
    rectMode(CENTER)
    
      
  background(100);
  Engine.update(engine)

  ground1.display()
  ground2.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  polygon1.display()
  slingshot1.display()
 detectcollision(polygon1,box1);
 detectcollision(polygon1,box2);
 detectcollision(polygon1,box3);
 detectcollision(polygon1,box4);
 detectcollision(polygon1,box5);
 detectcollision(polygon1,box6);
 detectcollision(polygon1,box7);
 detectcollision(polygon1,box8);
 detectcollision(polygon1,box9);
 detectcollision(polygon1,box10);
 detectcollision(polygon1,box11);
 detectcollision(polygon1,box12);
 detectcollision(polygon1,box13);
 detectcollision(polygon1,box14);
 detectcollision(polygon1,box15);
 detectcollision(polygon1,box16);
 detectcollision(polygon1,box17);
 detectcollision(polygon1,box18);
 detectcollision(polygon1,box19);
 detectcollision(polygon1,box20);
 detectcollision(polygon1,box21);
 detectcollision(polygon1,box22);
 detectcollision(polygon1,box23);
 detectcollision(polygon1,box24);
 detectcollision(polygon1,box25);
 
}
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}
function detectcollision(polygon2,box26){
    polygonBodyPosition=polygon2.body.position
    boxBodyPosition=box26.body.position
    
    var distance=dist(polygonBodyPosition.x,polygonBodyPosition.y,boxBodyPosition.x,boxBodyPosition.y)
    if(distance<=box26.r+polygon2.r){
    
        Matter.Body.setStatic(box26.body,false)
    }
    }