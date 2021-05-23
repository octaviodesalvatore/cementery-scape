let enemigosNivel2 = []
let cantenemigosNivel2 = 0;
function nivel2(){
    pantalla=3;
    background(mapa2,width,height)
    personaje.show();
    

    for(let i = 0 ; i<enemigosNivel2.length; i++){
        enemigosNivel2[i].show();
        enemigosNivel2[i].move();
        //  console.log(personaje.getX())
        //  console.log(personaje.getY())
         // console.log(enemigosNivel2[0].getX())
 
        // if(personaje.getX()-40<enemigosNivel2[i].getX() && personaje.getX()+40 > enemigosNivel2[i].getX() && personaje.getY()-40<enemigosNivel2[i].getY() && personaje.getY()+40 > enemigosNivel2[i].getY()){
        //   terminoJuego=true;
        // }
 
      }


    while(cantenemigosNivel2<3){
        if (random(1)< 0.01){
            enemigosNivel2[cantenemigosNivel2] = new Enemigo(random(600,1180),random(0,720))
            cantenemigosNivel2++;
            // enemigosNivel2[cantenemigosNivel2-1].show();
        }   
    }

    nivel2.prototype.colision = function(){
        for(let i = 0 ; i<enemigosNivel2.length; i++){
            if(personaje.getX()-40<enemigosNivel2[i].getX() && personaje.getX()+40 > enemigosNivel2[i].getX() && personaje.getY()-40<enemigosNivel2[i].getY() && personaje.getY()+40 > enemigosNivel2[i].getY()){
                return true;
              }
        }
    }


    nivel2.prototype.gane = function(){
        if (personaje.getX()>705 && personaje.getX()<840 && personaje.getY()<775 && personaje.getY()>595){
            personaje.setX(50);
            personaje.setY(50);
            return true;
          }
    }


    nivel2.prototype.remove = function(){
        for(let i = 0; i<cantenemigosNivel2; i++){
            enemigosNivel2[0].removeSprite()
            enemigosNivel2.shift()
        }
    }
    // for(let f of enemigos){
    //     f.move();
    //     f.show();
    // }
    

}