var car
var wall;
var speed = 10;
var weight = random(400,1500);
var deformation = 0.5*wieght*speed*speed/22500;

function setup() {
  createCanvas(1600,400);
  
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed

  wall = createSprite(1500,200,60,200);
  //wall.shapeColor = colour(80,80,80);
  
  if(deformation < 100){
    car.shapeColor = ("Green");
  }

  if(deformation > 100 && deformation < 180){
    car.shapeColor = ("Yellow");
  }

  if(deformation > 180){
    car.shapeColor = ("Red");
  }

}

function draw() {
  background (255,255,255);
  drawSprites();
}