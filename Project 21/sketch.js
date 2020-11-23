var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
 
  thickness = random(22,83);
  speed = random(233,321);
  weight = random(30,52);
  

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColour = (80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);

 /* if(wall.x - bullet.x < (bullet.width + wall.width)/2) {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
      if(deformation>180){
        bullet.shapeColour = (255,0,0);
      }
      if(deformation<180 && deformation>100){
        bullet.shapeColour = (230,230,0);
      }
      if(deformation<100){
        car.shapeColour = (0,255,0);
      }
  }*/

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 *weight *speed *speed/(thickness *thickness *thickness);

    if(damage>10) {
      bullet.shapeColour = (255,0,0);
    }

    if(damage<10) {
      bullet.shapeColour = (0,255,0);
    }
    
  }


  drawSprites();
}

function hasCollided(lbullet,lwall) {
    bulletRightEdge = lbullet.x +lbullet.width;
    wallLeftEdge = lwall.x;
    if(bulletRightEdge>=wallLeftEdge) {
      return true
    }
    return false;
}