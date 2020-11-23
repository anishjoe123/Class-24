const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var g, b1, b2, b3, b4, b5;
var l1,l2,l3,l4;
var p1,p2;
var b;
var canvas;
function setup()
{
engine = Engine.create();
world = engine.world;
canvas = createCanvas(1200,400);
g = new Ground(600,height,1200,20);
b1 = new Box(700,320,70,70);
b2 = new Box(920,320,70,70);
b3 = new Box(700,240,70,70);
b4 = new Box(920,240,70,70);
b5 = new Box(810,160,70,70);
l1 = new Log(810,260,300,PI/2);
l2 = new Log(810,180,300,PI/2);
l3 = new Log(760,120,150,PI/7);
l4 = new Log(870,120,150,-PI/7);
p1 = new Pig(810,350);
p2 = new Pig(810,220);
b = new Bird(100,100);

}

function draw()
{
  background("white");
  Engine.update(engine);

  g.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  l1.display();
  l2.display();
  l3.display();
  l4.display();
  p1.display();
  p2.display();
  b.display();
}