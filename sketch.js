//이 프로그램은 콘텐츠프로그래밍 수업의 기말과제로
//조원: 20210374 김은재, 20210836 박유정, 20210888 이다희

var a;
var webCamera;
var song;
var Openimage;

function preload(){
  soundFormats('mp3');
  song = loadSound("Opening.mp3", loaded);
  Openimage=loadImage('KakaoTalk_20211209_112240590.png')
}

function loaded(){
  song.setVolume(0.5);
  song.play();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  webCamera = createCapture(VIDEO);
  a = 0;
  initialize();
  animate();
}

function draw() {
  background(0, 0, 0);
  a = a + 1;

  if (a < 600) {
    //song.play();
    image(Openimage,0,0,width,height);
    
  } else if (a>600) {
    song.stop();
    image(webCamera, 0, 0, windowWidth, windowHeight);
    // image(webCamera, 0, 0, windowWidth / 2, windowHeight);
    // image(webCamera, windowWidth / 2, 0, windowWidth / 2, windowHeight);
    webCamera.hide();
  }
}

function mousePressed() {
  a = 600;
}
