let number1 = 0;
let AgarrarLlave = false;

function caminosPuerta(){
    background(puerta,width,height)

    if(AgarrarLlave===false){
        image(llave_img,50,50,100,100);
    }
    
    personaje.show();

    
    // posicionar el personaje
    number1++;
    if(number1==2){
        personaje.setX(1150);
        personaje.setY(550);
        
    }
    //
}