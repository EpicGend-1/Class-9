var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,10,50);
}

function draw() 
{
  background("white");
drawSprites();

if (keyDown("up")){
  box.y -=1
}
if (keyDown("down")){
  box.y +=1
}
if (keyDown("right")){
  box.x +=1
}
if (keyDown("left")){
  box.x -=1
}
}




