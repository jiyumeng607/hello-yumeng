var video;

function setup() {
  createCanvas(480, 360);
  background(51);
  video = createCapture(VIDEO);
  video.size(0, 0);
}

function draw() {
  var r = (r, 0, 255, 0, mouseX);
  var g = (g, 0, 255, 0, mouseY);
  if(mouseIsPressed){
  	fill(r, g, 100, 2);
    rect(0, 0, 480, 360,);
  } else{
  	tint(r, g, 100);
  	image(video, 0, 0, width, height);
  }
}