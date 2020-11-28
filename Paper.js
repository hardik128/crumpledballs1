class Paper {
    constructor(x,y,r){
      var options={
         restitution:0,
         friction:1,
         density:1.2 
      }
      
      this.body=Bodies.circle(x,y,r/2,options)
      this.x=x;
      this.y=y;
      this.r=r/2;
      World.add(world,this.body)
    }
    display(){
        var paperpos=this.body.position
        push()
        translate(paperpos.x,paperpos.y)
        ellipseMode(CENTER)
        fill(255)
        ellipse(0,0,this.r)
        pop();    
    }
}