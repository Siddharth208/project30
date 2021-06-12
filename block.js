class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("block.png");
        this.Visiblity = 255;
      }
      display(){
        if(this.body.speed < 3){
          image(this.image,this.body.position.x,this.body.position.y,this.width, this.height) 
         }
        
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        pop();
      }
}
