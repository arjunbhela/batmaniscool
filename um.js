class Um{
    constructor(x, y, width, height) {
        var options = {
           isStatic:true
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Walking Frame/walking_1.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image, 300,500, this.width, this.height);
      }
}