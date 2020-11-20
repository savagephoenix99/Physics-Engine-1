// namespacing
const Engine=Matter.Engine
const World =Matter.World
const Bodies=Matter.Bodies
//variables
var engine,world;
//object 
var ground, ball;

function setup() {
  createCanvas(400,400);
  // engine creating 
  engine=Engine.create();
  // attaching world with  engine
  world=engine.world;
  //extra properties
  var option={
    isStatic:true
  }
  
  var bounciness={
    restitution:2
  }
  //creating body
  ground=Bodies.rectangle(200,375,400,50,option);
  ball=Bodies.circle(200,200,20, bounciness);
  // adding object in world
  World.add(world,ground);
  World.add(world,ball);
  console.log(ground.position.x);
  console.log(ground.position.y);
  console.log(ball);
  
  
}

function draw() {
  background("pink");  
  //to update engine
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  
  drawSprites();
}