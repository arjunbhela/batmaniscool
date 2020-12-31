const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var maxDrops = 100;
var person
var drops = []
var drop1
var width = width
var randoml
var light1, light2, light3, light4
function preload()
{
light1 = loadImage("thunderbolt/1.png")
light2 = loadImage("thunderbolt/2.png")
light3 = loadImage("thunderbolt/3.png")
light4 = loadImage("thunderbolt/4.png")
}

function setup() {
	createCanvas(400,660);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
    person = new Um(300,500,150,300)
    drop1 = new Droplet(200,350,5,5)
  Engine.run(engine);

}



function draw() {
  rectMode(CENTER);
  background(0)
  person.display()
  for (var f = 0; f < drops.length; f++) {
    drops[f].display();
  }
  randoml = random(0,400)
  randomw = random(0,5)
  randomr1 = random(0,10)
  randomr2 = random(0,10)
  if(frameCount%1===0){
    drops.push(new Droplet(randoml,randomw,randomr1,randomr2))
  }
  spawnLight();
  drawSprites();
}


function spawnLight() {
  if (frameCount%70===0) {
    light = createSprite(200,100,30,70)
    light.lifetime = 7
    light.addImage(light4)
    var rand=Math.round(random(1,3));
    switch(rand){
      case 1: light.addImage(light1);
        break;
        case 2: light.addImage(light2);
        break;
        case 3: light.addImage(light3);
        break;
        default:break;
    }
  }
}
