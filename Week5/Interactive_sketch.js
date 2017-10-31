var b;

function setup(){
  createCanvas(600, 600);
  b = new block();
}

function draw(){
  background(200, 80, 100);
  b.shape();
  b.move();

  if(b.y > height-60){
    b.xspeed = 1;
    b.yspeed = 0;
  } else if(b.x > width-60){
    b.xspeed = 0;
    b.yspeed = -1;
  } else if(b.y < 0){
    b.xspeed = -1;
    b.yspeed = 0;
  } else if(b.x < 0){
    b.xspeed = 0;
    b.yspeed = 1;
  }
}


function block(){
  this.x = 0;
  this.y = 0;
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.xspeed = 0;
  this.yspeed = 3;

  this.move = function(){
   this.y += this.yspeed;
   this.x += this.xspeed;
  }

  this.shape = function(){
    noStroke();
    fill(255);
    rect(this.x, this.y, 60, 60);
  }

  this.turn = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  }
}

function keyPressed(){
    if(keyCode == LEFT_ARROW){
    b.turn(-3, 0);
  } else if(keyCode == RIGHT_ARROW){
    b.turn(3, 0);
  } else if(keyCode == UP_ARROW){
    b.turn(0, -3);
  } else if(keyCode == DOWN_ARROW){
    b.turn(0, 3);
  }
}

//function autoTurn(){
  //if(this.y > height-60){
    //this.turn(-1, 0);
  //} else if(b.x > width-60){
    //this.turn(0, 1);
  //} else if(b.y < 0){
    //this.turn(1, 0);
  //} else if(b.x < 0){
    //this.turn(0, -1);
  //}
//}




