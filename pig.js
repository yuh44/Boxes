class Pig {
    constructor(x, y) {
        var options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50
        this.height = 50
        World.add(world, this.body)
    }
    display() {
        var sop = this.body.position

        push();
        translate(sop.x, sop.y);
        rotate(this.body.angle)
        fill("green");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);  //x position , y position, width, height
        pop();
    }
}