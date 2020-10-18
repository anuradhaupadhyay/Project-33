var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var ground, particle;

var divisionHeight=300;
var score =0;
var turn = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  text(50,20,700);
  text(50,100,700);
  text(40,180,700);
  text(40,260,700);
  text(30,340,700);
  text(30,420,700);
  text(20,500,700);
  text(20,580,700);
  text(10,660,700);
  text(10,740,700);

if(mouseIsPressed === true){
  if(turn<5){
    particle = new Particle(mouseX, 10,10);
    particles.push(particle);

    turn++;
  }
  mouseIsPressed = null;
}

if(turn === 5){
  text("Game Over", 400, 400)
}

if(particle != undefined){

  if(particle.body.position.x < 170 && particle.body.position.x > 0 && particle.body.position.y > 500){
    score = score + 50;
    particle = undefined;
  }

  else if(particle.body.position.x < 330 && particle.body.position.x > 170 && particle.body.position.y > 500){
    score = score + 40;
    particle = undefined;
  }

  else if(particle.body.position.x < 490 && particle.body.position.x > 330 && particle.body.position.y > 500){
    score = score + 30;
    particle = undefined;
  }

  else if(particle.body.position.x < 650 && particle.body.position.x > 490 && particle.body.position.y > 500){
    score = score + 20;
    particle = undefined;
  }

  else if(particle.body.position.x < 805 && particle.body.position.x > 650 && particle.body.position.y > 500){
    score = score + 10;
    particle = undefined;
  }

 }

  Engine.update(engine);
 
  console.log(mouseX);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();

     
   }
   if(frameCount%60===0){

   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();


   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}