noseX=0;
noseY=0;
function preload(){
    lip_stick = loadImage('lipstick.png')
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes)
}

function take_snapshot(){
    save('FilterImage.png');
}
function modelLoaded(){
    
}
function gotposes(results){
    
        noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("insideelse")
    }

function draw(){
    image(video, 0, 0, 300, 300)
    image(lip_stick, noseX-150, noseY-100, 30, 30 ); 
}