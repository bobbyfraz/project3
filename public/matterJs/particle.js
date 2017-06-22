// // Daniel Shiffman
// // http://codingtra.in
// // http://patreon.com/codingtrain
// // Code for: https://youtu.be/szztTszPp-8

// function Particle(x, y, r, fixed) {
//   var options = {
//     friction: 0,
//     restitution: 0.95,
//     isStatic: fixed
//   }
//   this.body = Bodies.circle(x, y, r, options);
//   this.r = r;
//   World.add(world, this.body);

//   this.isOffScreen = function() {
//     var pos = this.body.position;
//     return (pos.y > height + 100);
//   }

//   this.removeFromWorld = function() {
//     World.remove(world, this.body);
//   }

//   this.show = function() {
//     var pos = this.body.position;
//     var angle = this.body.angle;
//     push();
//     translate(pos.x, pos.y);
//     rotate(angle);
//     rectMode(CENTER);
//     strokeWeight(1);
//     stroke(255);
//     fill(127);
//     ellipse(0, 0, this.r * 2);
//     pop();
//   }

// }


function Particle(x,y,r){
  this.hue = random(360);
  var options ={
    restitution:0.5,
    friction:0
  }
  x += random(-1, 1);
  this .body =Bodies.circle(x,y,r,options);
  this.r =r;
  World.add(world ,this.body);

  Particle.prototype.isOffScreen =function(){
    var x = this.body.position.x;
    (x <- 50 || x>width + 50)
  }

  Particle.prototype.show =function(){
    fill(this.hue , 255 ,255);
    stroke(255);
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipse(0,0,this.r*2);
    pop();
  }
}