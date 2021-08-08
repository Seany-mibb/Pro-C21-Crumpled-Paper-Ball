class Ground
{
    constructor (x,y,width,height)
    {
        let options= {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    show()
    {
        var position = this.body.position;
        push();
        rectMode(CENTER);
        fill("orange");
        rect(position.x, position.y, this.width, this.height);
        pop();
        

    }
}