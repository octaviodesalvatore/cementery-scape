let pantalla = 1;
let mapa1;
let mapa2;
let mapa3;
let personaje;
let enemigo;
let pImg;
let eImg;
let enemigos = [];
let inicioJuego = false;
let terminoJuego = false;
let nivel1_Termino = false;
let nivel2_Termino = false;
let nivel3_Termino = false;
let nivel1_Inicio = false;
let nivel2_Inicio = false;
let nivel3_Inicio = false;
let nivel4_Inicio = false;
let pantallaInicio=true;
let sonidoDeFondo;
var sonidoDePasos;
var sonidoGrito;
var anim_personaje;
var anim_fantasma;
let perdiste;
let perderCondicion = 0;
let caminos,puerta,pasillo,pasillo2;
let caminos_Inicio = false;
let caminos_Finalizo = false;
let caminosPuertas_Inicio = false;
let caminosPuertas_Finalizo = false;
let caminosPasillo_Inicio = false;
let caminosPasillo_Finalizo = false;
let caminosEleccion1_Inicio = false;
let caminosEleccion1_Finalizo = false;
let siguienteNivel = false;
let llave_img;
let perdiste2;
let arbol_on = false;
let tripleEleccion = false;
let tresImg;
let numero4 = 0;
let perderPantalla2 = false;
let escondido1,escondido2;
let pantallaFinal, escenarioFinal
let anteUltimo=false;
let ultimoArbol=false;
let ultimoEsc=false;

function preload(){
  sonidoGrito = loadSound('sound/scream1.wav')
  sonidoDeFondo = loadSound('sound/sonidoDeFondo.mp3')
  sonidoDePasos = loadSound('sound/pasos.mp3')
  anim_personaje = loadAnimation('img/personaje/pj1.png', 'img/personaje/pj2.png', 'img/personaje/pj3.png' )

  anim_fantasma = loadAnimation('img/fantasma2/Fantasma1.png', 'img/fantasma2/Fantasma2.png', 'img/fantasma2/Fantasma3.png')

  // anim_fantasma = loadAnimation('img/fantasma3/Fantasma1.png', 'img/fantasma3/Fantasma2.png', 'img/fantasma3/Fantasma3.png', 'img/fantasma3/Fantasma4.png', 'img/fantasma3/Fantasma5.png')

}


function setup() {
  escondido1 = loadImage('img/escondido1.png');
  escondido2 = loadImage('img/escondido2.png');
  perdiste = loadImage('img/PANTALLA_PERDISTE.png');
  intro = loadImage('img/intro.png');
  mapa1 = loadImage('img/mapa/1.png');
  mapa2 = loadImage('img/mapa/2.png');
  mapa3 = loadImage('img/mapa/3.png');
  caminos = loadImage ('img/mapa/escenario-caminos.png')
  puerta = loadImage ('img/mapa/escenario-puerta.png')
  llave_img = loadImage ('img/llave.png')
  perdiste2 = loadImage ('img/pantallaperdiste2.png')
  pasillo = loadImage ('img/mapa/escenario-pasillo.png')
  pasillo2 = loadImage ('img/mapa/escenario-pasillo2.png')
  pasillo1 = loadImage ('img/mapa/3prueba.png')
  tresImg = loadImage ('img/mapa/3cosas.png')
  pImg = loadImage('img/personaje/pj.png');
  eImg = loadImage('img/fantasma/fm.png');
  pantallaFinal = loadImage('img/pantallafinal.png');
  escenarioFinal = loadImage('img/escenario10.png');
  createCanvas(1280,720);
  sonidoDeFondo.setVolume(0.1);
  sonidoDePasos.setVolume(0.4);
  anim_personaje.frameDelay = 6;
  anim_fantasma.frameDelay =10;
  
  
  
  personaje = new Personaje;
  enemigo = new Enemigo;
  
}




function draw() {
  // console.log(caminosEleccion1_Inicio)
  //  console.log(anteUltimo)
  if (!sonidoDeFondo.isPlaying()) {
    sonidoDeFondo.play();
    
  } 
  
  
//  console.log(pantalla)
 if (pantallaInicio=true){
        inicio();
      if(mouseIsPressed){
        // nivel1_Inicio=true;
        caminos_Inicio=true;
        inicioJuego=true;

      }
 }

 if(inicioJuego){
 
      if( keyIsDown(87)){
        personaje.moveUp();
        if (!sonidoDePasos.isPlaying()) {
          sonidoDePasos.play();

          // if(caminosPasillo_Finalizo === true){
          //   sonidoDePasos.stop();
          // }

        } 
      }
      if( keyIsDown(68)){
        personaje.moveRight();
        if (!sonidoDePasos.isPlaying()) {
          sonidoDePasos.play();

          // if(caminosPasillo_Finalizo === true){
          //   sonidoDePasos.stop();
          // }

        } 
      }
      if(keyIsDown(83)){
        personaje.moveDown();
        if (!sonidoDePasos.isPlaying()) {
          sonidoDePasos.play();

          // if(caminosPasillo_Finalizo === true){
          //   sonidoDePasos.stop();
          // }

        } 
      }
      if(keyIsDown(65)){
        personaje.moveLeft();
        if (!sonidoDePasos.isPlaying()) {
          sonidoDePasos.play();

          // if(caminosPasillo_Finalizo === true){
          //   sonidoDePasos.stop();
          // }

        } 
      }   

  }
////////////////////////////////////////////////////////////////////
  if(caminos_Inicio){
    caminosIniciales();
    if (caminos_Inicio && personaje.getX()>34 && personaje.getX()<85 && personaje.getY()<390 && personaje.getY()>120){
      caminos_Finalizo=true;
      // Comentado para que no funcione el lado izquerdo
      // caminosPuertas_Inicio=true;
      // caminos_Inicio=false;
    }

    if (caminos_Inicio && personaje.getX()>1235 && personaje.getX()<1261 && personaje.getY()<495 && personaje.getY()>205){
      caminos_Finalizo=true;
      perder2();
      inicioJuego=false;
    }



    if (caminos_Inicio && personaje.getX()>415 && personaje.getX()<925 && personaje.getY()<55 && personaje.getY()>45){
      caminosPasillo_Inicio=true;
      caminos_Finalizo=true;
      caminos_Inicio=false;
      
    }
  }
////////////////////////////////////////////////////////////////////////
  if(caminosPasillo_Inicio){
    caminosPasillos()
    if (personaje.getX()>455 && personaje.getX()<735 && personaje.getY()<55 && personaje.getY()>44){
      // caminosPasillo_Inicio=false;
      caminosPasillo_Finalizo = true;
      caminosEleccion1_Inicio =true;
    }
  }
//////////////////////////////////////////////////////////////////////////
  if(caminosEleccion1_Inicio){
    const nivel = new caminosEleccion1()
    caminosEleccion1()
  if (nivel.gane() ){
    nivel.remove();
    inicioJuego=false;
    arbol_on=true;
    caminosEleccion1_Inicio=false;
  }
    if(nivel.colision()){
        perderCondicion++;
        perder2();
        inicioJuego=false
    }


       if (personaje.getX()>110 && personaje.getX()<275 && personaje.getY()<305 && personaje.getY()>60){
        inicioJuego=false;
        perderPantalla2=true;
        caminosEleccion1_Inicio=false;
    }

   
}

  if(perderPantalla2){
    perder2();
  }

  //////////////////////////////////////////////////////////////////////////////////////////////

  if(arbol_on){
    arbol();
    if(mouseIsPressed){
      siguienteNivel=true;
    }
  }
  if (siguienteNivel){
    camino_derecha()
    inicioJuego=true;
    if (personaje.getX()>1240 && personaje.getX()<1261 && personaje.getY()<490 && personaje.getY()>225){
        tripleEleccion=true;
        siguienteNivel=false;
        arbol_on=false;
   }
  }
  
  if(tripleEleccion){
    const nivel = new tresElecciones()
    tresElecciones()
  if (nivel.gane() ){
    nivel.remove();
      inicioJuego=false;
      ultimoArbol=true;
  }
    if(nivel.colision()){
        perderCondicion++;
        perder2();
        inicioJuego=false
    }
   
    if(numero4==0){
      personaje.setX(585);
      personaje.setY(50);
      numero4++
    }

   ///////////////Tumba muerto //////////
    if (personaje.getX()>96 && personaje.getX()<310 && personaje.getY()<380 && personaje.getY()>220){
      perder2();
      inicioJuego=false;
 } 
 ////////////////Mausoleo////////////////
    if (personaje.getX()>915 && personaje.getX()<1080 && personaje.getY()<210 && personaje.getY()>75){
      perder2();
      inicioJuego=false;
    } 
  
    //////////////Pasar al arbol///////////
    // if (personaje.getX()>640 && personaje.getX()<755 && personaje.getY()<645 && personaje.getY()>520){
    //   inicioJuego=false;
    //   ultimoArbol=true;
    //   nivel.remove();
    // }
 //////////////////////////////////////////////////////

  }

  if(ultimoArbol){
    arbol2();
    if(mouseIsPressed){
    anteUltimo=true;
    tripleEleccion=false;
    
    }
  }


  if(anteUltimo){
    camino_derecha2();
    inicioJuego=true;
    if (personaje.getX()>450 && personaje.getX()<745 && personaje.getY()<60 && personaje.getY()>45){
      ultimoEsc=true;
   }
  }

  if(ultimoEsc){
      const nivel = new escenario_final()
      escenario_final()
      if(nivel.colision()){
          ganaste();
          inicioJuego=false
          if(mouseIsPressed){
            location.reload();
          }
      }
  }

////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
    if(caminosPuertas_Inicio){
      caminosPuerta()

      if (personaje.getX()>60 && personaje.getX()<140 && personaje.getY()<105 && personaje.getY()>45){
         AgarrarLlave=true;
      }
      if(AgarrarLlave && caminosPuertas_Inicio && personaje.getX()>475 && personaje.getX()<695&& personaje.getY()<85 && personaje.getY()>45){
        caminosPuertas_Finalizo=true;
        nivel1_Inicio=true;
      }

    }




  if (nivel1_Inicio){
      
      const nivel = new nivel1()
      nivel1()
      if (nivel.gane()){
        nivel1_Termino=true
        nivel2_Inicio=true
        nivel1_Inicio=false
        nivel.remove();
    }
      if(nivel.colision()){
          perderCondicion++;
          perder();
          inicioJuego=false
      }
  }




  // console.log(pantalla)
   
 


  
  if (nivel2_Inicio){
    const nivel = new nivel2()
    nivel2()
    if (nivel.gane()){
      nivel2_Termino=true
      nivel3_Inicio=true
      nivel2_Inicio=false
      nivel.remove();
      // if(enemigosNivel1[0]===undefined){
      //   alert(enemigosNivel2.length)
      // }
      
  }
    if(nivel.colision()){
        perderCondicion++;
        perder();
        inicioJuego=false
    }
}

if (nivel3_Inicio){
  const nivel = new nivel3()
  nivel3()
  if (nivel.gane()){
    nivel3_Termino=true
    nivel4_Inicio=true
    nivel3_Inicio=false
    nivel.remove();
    // if(enemigosNivel1[0]===undefined){
    //   alert(enemigosNivel2.length)
    // }
    
}
  if(nivel.colision()){
      perderCondicion++
      perder();
      inicioJuego=false
  }
}

if(perderCondicion===1){
  if (!sonidoGrito.isPlaying()) {
    sonidoGrito.play();
    } 
}
//  console.log(perderCondicion)

if (nivel4_Inicio){
  ganaste();
  inicioJuego=false;
}

  
  // text( mouseX + "-" + mouseY, width/2, height/2);
}
