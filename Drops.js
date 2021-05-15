class Drops{
    constructor(x,y){
        var options={
            restitution: 0.1,
            friction:0.001
        }
         this.body = Bodies.circle(x, y, 5, options)
         World.add(world, this.body)
         this.radius = 5;
    }
    showDrop(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, 5, 5) 
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,800)})
        }
    }
}