let cantenemigosNivel1 = 0;
let enemigosNivel1 = []

function nivel1(){
    pantalla=2;
    background(mapa1,width,height)
    personaje.show();
    
    for(let i = 0 ; i<enemigosNivel1.length; i++){
        enemigosNivel1[i].show();
        enemigosNivel1[i].move();
        //  console.log(personaje.getX())
        //  console.log(personaje.getY())
         // console.log(enemigosNivel1[0].getX())
 
        // if(personaje.getX()-40<enemigosNivel1[i].getX() && personaje.getX()+40 > enemigosNivel1[i].getX() && personaje.getY()-40<enemigosNivel1[i].getY() && personaje.getY()+40 > enemigosNivel1[i].getY()){
        //   terminoJuego=true;
        // }
 
      }


    while(cantenemigosNivel1<2){
        if (random(1)< 0.01){
            enemigosNivel1[cantenemigosNivel1] = new Enemigo(random(600,1180),random(0,720))
            cantenemigosNivel1++;
            // enemigosNivel1[cantenemigosNivel1-1].show();
        }   
    }

    nivel1.prototype.colision = function(){
        for(let i = 0 ; i<enemigosNivel1.length; i++){
            if(personaje.getX()-40<enemigosNivel1[i].getX() && personaje.getX()+40 > enemigosNivel1[i].getX() && personaje.getY()-40<enemigosNivel1[i].getY() && personaje.getY()+40 > enemigosNivel1[i].getY()){
                return true;
              }
        }
    }


    nivel1.prototype.gane = function(){
        if (personaje.getX()>1190 && personaje.getX()<1265 && personaje.getY()<255 && personaje.getY()>190){
            
            personaje.setX(50);
            personaje.setY(50);
            return true;
          }
    }

    nivel1.prototype.remove = function(){
        for(let i = 0; i<cantenemigosNivel1; i++){
            enemigosNivel1[0].removeSprite()
            enemigosNivel1.shift()
        }
    }


    // for(let f of enemigos){
    //     f.move();
    //     f.show();
    // }
    

}