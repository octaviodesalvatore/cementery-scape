let cantenemigosNivel6 = 0;
let enemigosNivel6 = []
let numberPasillos3 = 0;

function escenario_final(){
    background(escenarioFinal,width,height)
    personaje.show();

    numberPasillos3++;
    if(numberPasillos3==2){
        personaje.setX(650);
        personaje.setY(320);
    }
    caminosEleccion1_Inicio=false;


 
    
    for(let i = 0 ; i<enemigosNivel6.length; i++){
        enemigosNivel6[i].show();
        enemigosNivel6[i].move();
      }

    while(cantenemigosNivel6<20){
        if (random(1)< 0.01){
            enemigosNivel6[cantenemigosNivel6] = new Enemigo(135,random(0,720))
            cantenemigosNivel6++;
            enemigosNivel6[cantenemigosNivel6] = new Enemigo(1100,random(0,720))
            cantenemigosNivel6++;
            enemigosNivel6[cantenemigosNivel6] = new Enemigo(random(0,1180),110)
            cantenemigosNivel6++;
            enemigosNivel6[cantenemigosNivel6] = new Enemigo(random(0,1180),560)
            cantenemigosNivel6++;
        }   
    }


    escenario_final.prototype.colision = function(){
        for(let i = 0 ; i<enemigosNivel6.length; i++){
            if(personaje.getX()-40<enemigosNivel6[i].getX() && personaje.getX()+40 > enemigosNivel6[i].getX() && personaje.getY()-40<enemigosNivel6[i].getY() && personaje.getY()+40 > enemigosNivel6[i].getY()){
                return true;
              }
        }
    }


    // tresElecciones.prototype.gane = function(){
    //     if (personaje.getX()>640 && personaje.getX()<755 && personaje.getY()<645 && personaje.getY()>520){
    //         personaje.setX(600);
    //         personaje.setY(645);
    //         return true;
    //       }
    // }

    escenario_final.prototype.remove = function(){
        for(let i = 0; i<cantenemigosNivel6; i++){
            enemigosNivel6[0].removeSprite()
            enemigosNivel6.shift()
        }
    }
}