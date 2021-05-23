let cantenemigosNivel3 = 0;
let enemigosNivel3 = []

function nivel3(){
    pantalla=4;
    background(mapa3,width,height)
    personaje.show();
    
    for(let i = 0 ; i<enemigosNivel3.length; i++){
        enemigosNivel3[i].show();
        enemigosNivel3[i].move();
        //  console.log(personaje.getX())
        //  console.log(personaje.getY())
         // console.log(enemigosNivel1[0].getX())
 
        // if(personaje.getX()-40<enemigosNivel1[i].getX() && personaje.getX()+40 > enemigosNivel1[i].getX() && personaje.getY()-40<enemigosNivel1[i].getY() && personaje.getY()+40 > enemigosNivel1[i].getY()){
        //   terminoJuego=true;
        // }
 
      }


    while(cantenemigosNivel3<4){
        if (random(1)< 0.01){
            enemigosNivel3[cantenemigosNivel3] = new Enemigo(random(600,1180),random(0,720))
            cantenemigosNivel3++;
            // enemigosNivel1[cantenemigosNivel1-1].show();
        }   
    }

    nivel3.prototype.colision = function(){
        for(let i = 0 ; i<enemigosNivel3.length; i++){
            if(personaje.getX()-40<enemigosNivel3[i].getX() && personaje.getX()+40 > enemigosNivel3[i].getX() && personaje.getY()-40<enemigosNivel3[i].getY() && personaje.getY()+40 > enemigosNivel3[i].getY()){
                return true;
              }
        }
    }


    nivel3.prototype.gane = function(){
        if (personaje.getX()>930 && personaje.getX()<1080 && personaje.getY()<440 && personaje.getY()>370){
            
            personaje.setX(50);
            personaje.setY(50);
            return true;
          }
    }

    nivel3.prototype.remove = function(){
        for(let i = 0; i<cantenemigosNivel3; i++){
            enemigosNivel3[0].removeSprite()
            enemigosNivel3.shift()
        }
    }


    // for(let f of enemigos){
    //     f.move();
    //     f.show();
    // }
    

}