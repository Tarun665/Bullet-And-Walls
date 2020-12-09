

function isTouching(object1,object2){
    let bulletR = object1.x+object1.width;
    let wallL = object2.x;
    bulletR=object1.x-25;
    wallL=object2.x;
    let weigth = Math.round(random(30,52));
    let speed = Math.round(random(223,321));
    let thickness = Math.round(random(22,83));
    let damage =0;
    let dcontrol = 0;
  // setTimeout(() => {
    if(dcontrol === 0){
      damage= Math.round(0.5*weigth*speed*speed/(thickness*thickness*thickness));
    }
    //}, 50);
   
  if(object2.x - object1.x < object2.width/2 + object1.width/2 && object1.x - object2.x  < object2.width/2 + object1.width/2 && object2.y - object1.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
    object2.velocityX = 0;
      console.log(damage);

      if(bulletR=wallL-thickness){
        if(damage>10){
          object2.shapeColor= color("lightblue");
          fill("whitt");
          textSize(20);
          text("Damage: "+damage,50,50);
        }
        
        if(damage<10){
          object2.shapeColor= color("lightgreen")
          textSize(20);
          text("Damage: "+damage,50,50);
        }
      }
      return true;

    }
    return false;
  }