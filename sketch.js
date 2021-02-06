var tom, jerry;
var tomImg,jerryImg;
var garden, gardenImg;
function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    tomImg = loadAnimation("cat1.png");
    tomImg = loadAnimation("cat2.png");
    tomImg = loadAnimation("cat3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(200,400);
    garden.addImage(gardenImg);
    tom = createSprite(200,400);
    tom.addAnimation(tomImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
