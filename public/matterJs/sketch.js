// // Daniel Shiffman
// // http://codingtra.in
// // http://patreon.com/codingtrain
// // Code for: https://youtu.be/szztTszPp-8

// // module aliases
// var Engine = Matter.Engine,
//   // Render = Matter.Render,
//   World = Matter.World,
//   Bodies = Matter.Bodies,
//   Constraint = Matter.Constraint;

// var engine;
// var world;
// var particles = [];
// var boundaries = [];

// var ground;

// function setup() {
//   createCanvas(400, 400);
//   engine = Engine.create();
//   world = engine.world;
//   //Engine.run(engine);

//   var prev = null;
//   for (var x = 200; x < 400; x += 20) {

//     var fixed = false;
//     if (!prev) {
//       fixed = true;
//     }
//     var p = new Particle(x, 100, 5, fixed);
//     // var p2 = new Particle(200, 150, 10);
//     particles.push(p);

//     if (prev) {
//       var options = {
//         bodyA: p.body,
//         bodyB: prev.body,
//         length: 20,
//         stiffness: 0.4
//       }
//       var constraint = Constraint.create(options);
//       World.add(world, constraint);
//     }

//     prev = p;
//   }


//   boundaries.push(new Boundary(200, height, width, 50, 0));
// }

// // function keyPressed() {
// //   if (key == ' ') {
// //   }
// // }

// // function mouseDragged() {
// //   circles.push(new Circle(mouseX, mouseY, random(5, 10)));
// // }

// function draw() {
//   background(51);
//   Engine.update(engine);
//   for (var i = 0; i < boundaries.length; i++) {
//     boundaries[i].show();
//   }

//   for (var i = 0; i < particles.length; i++) {
//     particles[i].show();
//   }

//   //line(particles[0].body.position.x, particles[0].body.position.y, particles[1].body.position.x, particles[1].body.position.y);

// }

var Engine =Matter.Engine,
   // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var particles =[];
var plinkos=[];
var boundaries=[];
var cols =11;
var rows=10;

function setup(){
  createCanvas(600,700);
  colorMode(HSB);
  engine =Engine.create();
  world =engine.world;
  world.gravity.y = 1;
   newParticle();
   var spacing =width/cols;
    for (var j = 0; j < rows; j++){
      for (var i = 0; i < cols; i++){
        var x =  i * spacing;
        if( j % 2 == 1){
          x += spacing/2
        }
        var y =spacing + j * spacing;
      var p = new Plinko( x, y ,10)
      plinkos.push(p);
    }
   }
var b =new Boundary(width/2 ,height+50, width,100);
 boundaries.push(b);

 for (var i = 0; i < cols + 1; i++){
  var x = i * spacing;
  var h = 100;
  var w =10;
  var y = height - h / 2;
  var b =new Boundary(x, y, w, h);
  boundaries.push(b);
 }
}
function newParticle(){
var p = new Particle(300 ,0 ,10);
    particles.push(p);
}

function draw(){
  if (frameCount % 80 == 0){
   newParticle();

  }
  background(0,0,0);
  Engine.update(engine);
  for (var i = 0 ; i < particles.length; i++){
  particles[i].show();
  if (particles[i].isOffScreen()){
    // particles.splice(i ,1);
    i--;
  }
 }
 for (var i = 0; i<plinkos.length; i++){
  plinkos[i].show();
 }
 for (var i = 0; i<boundaries.length; i++){
  boundaries[i].show();
 }
}