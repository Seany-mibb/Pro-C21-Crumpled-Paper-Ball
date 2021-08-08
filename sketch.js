
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ground_left_basket, ground_right_basket;
var wall_left, wall_right, wall_top;
var ball;



function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	var ball_options = 
	{
		isStatic: false,
		restitution: 0.95,
		friction: 0,
		Density: 100
	};

	//Create the Bodies Here.

	ground = new Ground(200,395,1300,10);
	ground_left_basket = new Ground(500,370,10,100);
	ground_right_basket = new Ground(610,370,10,100);
	ground_top = new Ground(200,10,1300,10);
	ground_left = new Ground(10,200,10,400);
	ground_right = new Ground(790,200,10,1400);
	ball = Bodies.circle(200,200,30,ball_options);
	ball.radius = 30;
	World.add(world,ball);


	

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);

  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,ball.radius);

  ground.show();
  ground_left_basket.show();
  ground_right_basket.show();
  ground_left.show();
  ground_right.show();
  ground_top.show();
  Engine.update(engine);

  if(keyDown(RIGHT_ARROW))
  {
	  xforce_right();
  }

  if(keyDown(LEFT_ARROW))
  {
	  xforce_left();
  }

  if(keyDown(UP_ARROW))
  {
	  yforce_up();
  }


  
  drawSprites();
 
}

function xforce_right()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0});
}

function xforce_left()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.03,y:0});
	
}

function yforce_up()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.03});
	
}



