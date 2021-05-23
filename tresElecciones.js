let cantenemigosNivel5 = 0;
let enemigosNivel5 = []

function tresElecciones(){
    background(tresImg,width,height)
    personaje.show();

    numberPasillos1++;
    if(numberPasillos1==1){
        personaje.setX(550);
        personaje.setY(600);
    }
    caminosEleccion1_Inicio=false;



    for(let i = 0 ; i<enemigosNivel5.length; i++){
        enemigosNivel5[i].show();
        enemigosNivel5[i].move();
      }


    while(cantenemigosNivel5<1){
        if (random(1)< 0.01){
            enemigosNivel5[cantenemigosNivel5] = new Enemigo(random(600,1180),random(0,720))
            cantenemigosNivel5++;
            // enemigosNivel5[cantenemigosNivel5-1].show();
        }   
    }

    tresElecciones.prototype.colision = function(){
        for(let i = 0 ; i<enemigosNivel5.length; i++){
            if(personaje.getX()-40<enemigosNivel5[i].getX() && personaje.getX()+40 > enemigosNivel5[i].getX() && personaje.getY()-40<enemigosNivel5[i].getY() && personaje.getY()+40 > enemigosNivel5[i].getY()){
                return true;
              }
        }
    }


    tresElecciones.prototype.gane = function(){
        if (personaje.getX()>640 && personaje.getX()<755 && personaje.getY()<645 && personaje.getY()>520){
            personaje.setX(600);
            personaje.setY(645);
            return true;
          }
    }

    tresElecciones.prototype.remove = function(){
        for(let i = 0; i<cantenemigosNivel5; i++){
            enemigosNivel5[0].removeSprite()
            enemigosNivel5.shift()
        }
    }

}