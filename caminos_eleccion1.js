let numberPasillos2 = 0;
let perderCondicion3 =0;

let cantenemigosNivel4 = 0;
let enemigosNivel4 = []

function caminosEleccion1(){
    background(pasillo1,width,height)
    // rect(200,150,50,100)
    // rect(900,150,50,100)
    personaje.show();

    // posicionar el personaje
    numberPasillos2++;
    if(numberPasillos2==1){
        personaje.setX(550);
        personaje.setY(600);
    }

    for(let i = 0 ; i<enemigosNivel4.length; i++){
        enemigosNivel4[i].show();
        enemigosNivel4[i].move();
      }

      while(cantenemigosNivel4<2){
        if (random(1)< 0.01){
            enemigosNivel4[cantenemigosNivel4] = new Enemigo(random(600,1180),random(0,720))
            cantenemigosNivel4++;
            // enemigosNivel1[cantenemigosNivel1-1].show();
        }   
    }

    caminosEleccion1.prototype.colision = function(){
        for(let i = 0 ; i<enemigosNivel4.length; i++){
            if(personaje.getX()-40<enemigosNivel4[i].getX() && personaje.getX()+40 > enemigosNivel4[i].getX() && personaje.getY()-40<enemigosNivel4[i].getY() && personaje.getY()+40 > enemigosNivel4[i].getY()){
                return true;
              }
        }
    }


    // caminosEleccion1.prototype.gane = function(){
    //     if (personaje.getX()>1190 && personaje.getX()<1265 && personaje.getY()<255 && personaje.getY()>190){
            
    //         personaje.setX(50);
    //         personaje.setY(50);
    //         return true;
    //       }
    // }

    caminosEleccion1.prototype.gane = function(){
        if (personaje.getX()>810 && personaje.getX()<970 && personaje.getY()<355 && personaje.getY()>185){
            personaje.setX(80);
            personaje.setY(300);
            return true;
          }
    }

    caminosEleccion1.prototype.remove = function(){
        for(let i = 0; i<cantenemigosNivel4; i++){
            enemigosNivel4[0].removeSprite()
            enemigosNivel4.shift()
        }
    }




}