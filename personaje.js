
class Personaje{
    constructor(){
        this.x = 40;
        this.y = 100;
        this.tam= 100;
        this.sprite = createSprite(this.x,this.y)
        this.sprite.addAnimation("personaje", anim_personaje)
        this.sprite.scale=0.13
    }


    show(){
          
      this.sprite.position.x=this.x
      this.sprite.position.y=this.y
      drawSprites();

      console.log("PosY=",this.y)
      console.log("PosX=",this.x)
        // image(pImg,this.x, this.y, this.tam ,this.tam);
    }

    moveUp(){
      if(this.y>45){
        this.y= this.y - 5;
      }
    }
    moveDown(){
      if(this.y<670){
         
        this.y= this.y + 5;
        
      }
    }
      moveLeft(){
        if(this.x>35){
          this.x= this.x - 5;
        }
      }
      moveRight(){
        if(this.x<1260){
          
           
          this.x= this.x + 5;
          // if (this.x>1035 && this.x<1200 && this.y<620 && this.y>500){
          //   nivel1_Termino=true;
          //   this.x=50;
          //   this.y=50;
          // }
        }
      }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
    setX(x){
      this.x = x
    }
    setY(y){
      this.y = y
    }

}