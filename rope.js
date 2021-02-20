class Rope{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: point,
            stiffness: 1,
            length: 300
        }
        this.body = Matter.Constraint.create(options);
        World.add(world, this.body)
        this.pointB = point;

    }
    display(){
        push();
        strokeWeight(5);
        stroke("yellow")
        line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.pointB.x, this.pointB.y);
        pop();
        

    }
}