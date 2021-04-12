var ball;
var db;
var bposition;
function setup(){
    db=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var position=db.ref('ball/position');
    position.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
            writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function readposition(data){
    bposition=data.val();
    ball.x=bposition.x;
    ball.y=bposition.y;
}

function writeposition(x,y)
{
    db.ref('ball/position').set({
'x':bposition.x+x,
'y':bposition.y+y
    });
}

function showerror(){
console.log("Error in Writing to Database")
}