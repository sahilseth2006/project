
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	//boy=new Boy(200,240,200,300);

	mango1=new Mango(1120,100,30);
	mango2= new Mango(1100,50,30);
	mango3=new Mango(1050,140,30);
	mango4= new Mango(1100,160,30);
	mango5=new Mango(1000,150,30);
	mango6= new Mango(950,220,30);
	mango7=new Mango(1050,200,30);
	mango8= new Mango(900,200,30);
	mango9=new Mango(1200,200,30);
	mango10=new Mango(1150,200,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj=new Stone(230,400,30)

	slingshot = new SlingShot(stoneObj.body,{x:250, y:400});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
 //boy.display();
 stoneObj.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  groundObject.display();
  slingshot.display();
}

function mouseDragged(){
Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingshot.fly()
}