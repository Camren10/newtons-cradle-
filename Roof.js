class Roof {
    constructor(x,y,width,height){
      var options = {
        isStatic: true
      }
     this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.width=width;
      this.height=height;
    }
    display() {
      fill("yellow");
      rectMode(CENTER);
      var pos=this.body.position;
      rect(pos.x,pos.y,this.width,this.height);
  }
  }
  