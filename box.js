class Box{
    constructor(x, y){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 0.04
        }
        this.body = Bodies.rectangle(x, y,70,70, options)
        World.add(world, this.body)
        this.width = 70
        this.height = 70

    }
    display(){
        fill("White");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }
}