function preload()
{

}

function setup()
{
 video=createCapture(VIDEO);
 video.size(550,550);
 canvas=createCanvas(500,550);
 canvas.position(1020,100);
 posenet=ml5.poseNet(video,modelLoaded);
 posenet.on("pose",gotPoses);
}

function draw()
{
 background("rgb(252, 179, 170)");
}

function modelLoaded()
{
    console.log("model Loaded!!!!");
}

function gotPoses(results)
{

 if (results.length > 0)
 {
    console.log(results);
 }
 
}