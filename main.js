noseX=0
noseY=0
difference=0
rightWristX=0
leftWristX=0
function setup()
    {
var canvas = createCanvas(550,550)
canvas.position(560,150)    
video = createCapture(VIDEO)
video.size(550,500);
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on("pose",gotPoses)
}

function draw(){
    background("#039289")
    document.getElementById("square_sides").innerHTML="width and the height of the square will be  "+difference+"px"
    fill("#03fcdf")
    stroke("#03fcdf")
    square(noseX,noseY,difference)
}

function modelLoaded()
    {
        console.log("poseNet is initialised")
        
    }

    function gotPoses(results)
    {
        if (results.length>0)
        {
            console.log(results)
             noseX= results[0].pose.nose.x;
             noseY= results[0].pose.nose.y;
             console.log("noseX= "+noseX+", noseY= "+noseY)
             leftWristX= results[0].pose.leftWrist.x;
             rightWristX= results[0].pose.rightWrist.x;
             difference=floor(leftWristX-rightWristX);
             console.log("leftWristX= "+leftWristX+",rightWristX= "+rightWristX+"difference ="+difference);

        } 
    }

