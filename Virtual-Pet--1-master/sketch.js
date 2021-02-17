var fineDog,happyDog;
var database,foodS,foodStock;

function preload()
{
  fineDog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  foodStock = database.ref('Food');
  foodStock.on('value',readStock);

  dog = createSprite(300,250);
  dog.addImage(fineDog);
  dog.scale = 0.2;
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
database.ref('/').update({
  Food : x
})
}