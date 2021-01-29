class RainDrop{

    constructor(x,y,radius){

        var options={
            restitution:0.8
          }
        
          this.body = Bodies.circle(x,y,radius,options)
          World.add(world,this.body)

          this.radius=radius;
        }

        updateY(){
            if(this.body.position.y > height){
                Matter.Body.setPosition(this.rain, {x : random(0,400), y : random(0,400)})
            }
        }


    showDrop(){ 
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius, this.radius)
    }


}