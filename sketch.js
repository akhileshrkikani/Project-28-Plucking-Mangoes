var boy,boyImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boy

function preload(){
boy=loadImage("boy.png")
	
}

function setup() {
	createCanvas(1300, 700);



	engine = Engine.create();
	world = engine.world;


ground1=new Ground(700,705,1500,30);
tree1=new Tree(1000,700);
mango1=new Mango(930,200,40)
mango2=new Mango(850,350,40)
mango3=new Mango(970,300,40)
mango4=new Mango(1100,200,40)
mango5=new Mango(1200,300,40)
mango6=new Mango(1100,350,40)
//boy1=new Boy(250,650,200,250);
stone1=new Stone(235,420,30)
rope=new Chain(stone1.body,{x:155,y:510})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  image(boy,130,440,200,300)

  tree1.display()
ground1.display();

stone1.display();
rope.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
//boy1.display();



detectollision(stone1,mango1)
detectollision(stone1,mango2)
detectollision(stone1,mango3)
detectollision(stone1,mango4)
detectollision(stone1,mango5)
detectollision(stone1,mango6)
  
  
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope.fly()
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body, {x:235, y:420})
		rope.attach(stone1.body);
	}
}
function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r){
    
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }




