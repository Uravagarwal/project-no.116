noseX=0;
noseY=0;
leftEarX=0;
leftEarY=0;
leftEyeX=0;
leftEyeY=0;
rightEarX=0;
rightEarY=0;
rightEyeX=0;
rightEyeY=0;

function preload()
{
    mustach=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
    beard=loadImage('https://i.postimg.cc/bwrYhYj8/beard.png')
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,300,300)
    image(mustach,noseX,noseY,30,30)
    fill(105,105,105)
    stroke(105,105,105)
    circle(rightEyeX,rightEyeY,30)
    fill(105,105,105)
    stroke(105,105,105)
    circle(leftEyeX,leftEyeY,30)
}

function take_snapshot()
{
    save('quarter_clown.png');
}

function modelLoaded()
{
    console.log("modelloaded is working!")
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        console.log("leftEar x = "+results[0].pose.leftEar.x);
        console.log("leftEar y = "+results[0].pose.leftEar.y);
        console.log("leftEye x = "+results[0].pose.leftEye.x);
        console.log("leftEye y = "+results[0].pose.leftEye.y);
        console.log("rightEar x = "+results[0].pose.rightEar.x);
        console.log("rightEar y = "+results[0].pose.rightEar.y);
        console.log("rightEye x = "+results[0].pose.rightEye.x);
        console.log("rightEye y = "+results[0].pose.rightEye.y);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        rightEyeX=results[0].pose.rightEye.x;
        rightEyeY=results[0].pose.rightEye.y;
        rightEarX=results[0].pose.rightEar.x;
        rightEarY=results[0].pose.rightEar.y;
        leftEyeX=results[0].pose.leftEye.x;
        leftEyeY=results[0].pose.leftEye.y;
        leftEarX=results[0].pose.leftEar.x;
        leftEarY=results[0].pose.leftEar.y;
      
    }
}