var car;
var wall;

var speed;
var weight;

 var deform;

function setup() {
  createCanvas(windowWidth,400);
  
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  wall = createSprite(width - 100, 200, 60, height/2);
  wall.shapeColor = "grey";

   speed = random(55, 90);
  weight = random(400, 1500);

  deform = deformations(speed, weight);

  console.log(speed, weight, deform);
}

function draw() {
  background("black");

  car.velocityX = speed;
  
 

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
     
    // console.log(deformation);
    if(deformations(speed, weight) >= 180){
      car.shapeColor = color(225, 0, 0);
    }

    else if(deformations(speed, weight) < 180 && deformations(speed, weight)> 100 ){
      car.shapeColor = color(230, 230, 0)
    }

    else {
      car.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

function deformations(speed, weight){
  
   var deformation = 0.5 * weight * speed * speed/22509;
   return deformation;
}