class Paper {
    constructor(x,y,r){
      var options={
         isStatic:false,
         restitution:0.5,
         friction:0.3,
         density:1.2 
      }
      this.x=x;
      this.y=y;
      this.r=r
      this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    }
    display(){
        var paperpos=this.body.position
        push()
        translate(paperpos.x,paperpos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill(255,0,255)
        ellipse(paperpos.x,paperpos.y,this.r)
        pop();    
    }
}