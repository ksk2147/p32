class Ball{
    constructor(x, y){
        var options = {
            frictionAir: 0.05,
            density: 1
        }
        this.body = Bodies.circle(x, y, 100, options)
        World.add(world, this.body)
        this.radius = 100;

    }
    display(){
        fill("Black");
        rectMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);

    }
}