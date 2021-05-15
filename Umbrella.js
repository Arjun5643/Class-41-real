class Umbrella{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.image = loadImage("images/Walking Frame/walking_1.png")
         /*"images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png*/
         this.body = Bodies.circle(x, y, 350, options)
         World.add(world, this.body)
         this.radius = 50;
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 350, 350) 
    }
}