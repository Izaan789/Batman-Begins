const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var maxDrops = 100;
var rain;
var drops = []


function preload(){
    thunder1image = loadImage("1.png")
    thunder2image = loadImage("2.png")
    thunder3image = loadImage("3.png")
    thunder4image = loadImage("4.png")
}

function setup(){
    createCanvas(1350, 620);

    engine = Engine.create();
    world = engine.world;
    
    boy = new Boy(700,400,450,400)

    if (frameCount % 150 === 0){
        for (var i = 0; i = maxDrops;i++){
            drops.push(new RainDrop(random(0,400),random(0,400)));
        }

    }   
}

function draw(){
    background("black");
    Engine.update(engine)

    rain = Math.round(random(1,4));
    if (frameCount % 80 === 0){

        thunderDestory = frameCount;
        thunder = createSprite(random(10,1350),ramdom(10,30),10,10);
        switch(rain){
            case 1 : thunder.addImage(thunder1image)
            break;
            case 2 : thunder.addImage(thunder2image)
            break
            case 3 : thunder.addImage(thunder3image)
            break;
            case 4 : thunder.addImage(thunder4image)
            break;
            default : break;
        }
    }

    if(thunderDestory + 10 === frameCount && thunder){
        thunder.destroy();
    }

    boy.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
drawSprites();
}   

