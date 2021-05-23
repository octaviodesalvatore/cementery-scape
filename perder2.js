function perder2(){
        background(perdiste2,width,height)
        perderCondicion2++;
        if(perderCondicion2===10){
            if (!sonidoGrito.isPlaying()) {
              sonidoGrito.play();
              } 
          }
}