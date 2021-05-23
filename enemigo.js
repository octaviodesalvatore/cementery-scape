class Enemigo{
    constructor(posX,posY){
        this.x = posX;
        this.y = posY;
        this.tam= 90;

        this.sprite = createSprite(this.x,this.y)
        this.sprite.addAnimation("fantasma", anim_fantasma)
        this.sprite.scale=0.4
    }

    move(){
        if(personaje.getX()>this.x){
            this.x += 0.7;
        } else {
            this.x -= 0.7;
        }
        if(personaje.getY()>this.y){
            this.y += 0.7;
        } else {
            this.y -= 0.7;
        }
        // this.show();
    }
    show(){
        // image(eImg,this.x, this.y, this.tam ,this.tam);
        this.sprite.position.x=this.x
        this.sprite.position.y=this.y
        drawSprites();
    }

    removeSprite(){
        this.sprite.remove();
    }

    getX(){
        return this.x
    }
    getY(){
        return this.y
    }

}
