/*************************************************************************
    (*)Self Portrait
          (*)by Emily Farrow

    (*)Overview - coding my self portrait 
 
    ---------------------------------------------------------------------
    (*)Notes: (ie: To be fixed, I Need Help With, Clarify This, etc etc: )
     (1)
     (2)
**************************************************************************/

var e = 100;
var e2 = 200;
var e3 = 300;
var e4 = 400;
var e5 = 500;
var e6 = 600;


// Setup code goes here
function setup() {
  createCanvas(800, 1200);

  strokeWeight(3);
 }


// Draw code goes here
function draw() {
  background(0);

  noStroke();

  	drawShoulders();
	drawHairbuns();
	drawFace();
	drawEars();
	drawEarrings();
	drawHair1();
	drawHat();
	drawEyebrows();
	drawEyebrows2();
	drawEyes();
	drawMakeup();
	drawNose();
	drawMouth();

}

function drawShoulders(){
	noStroke();
	fill(224, 148, 141);
	rect( e2 + 72 , e5 + 25 , e2 + 56 , e2 );
	fill(255, 255, 133);
	rect( e + 7 , e6 + 40, e6 , e , 20, 20, 0, 0);
}

function drawHairbuns(){
	fill(255, 110, 74);
	ellipse( e2 , e5 + 20 , e2 - 30 , e2 - 30 );
	ellipse( e6 , e5 + 20 , e2 - 30 , e2 - 30 );
}

function drawFace(){
	fill(255, 170, 159);
  	ellipse( e4 , e4 - 50 , e4 + 50 , e5 );
}

function drawEars(){
	//left ear
 	fill(255, 170, 159);
 	ellipse( e2 - 25 , e4 - 20 , e , e );
 	//right ear
 	ellipse( e6 + 18 , e4 - 20 , e , e );
}

function drawEarrings(){
	fill(163, 163, 163); 
 	rect( e + 57 , e4 , 17, 70);

 	rect( e6 + 27 , e4 , 17, 70);

 	ellipse( e + 50 , e4 - 15, 10, 10);

 	ellipse( e + 46 , e4 - 30 , 10, 10);

 	ellipse( e6 + 46 , e4 - 15 , 10, 10);
}


function drawHair1(){
	//front hair strands
	fill(255, 110, 74);
  	ellipse( e2 - 10 , e3 - 25 , 50, e2);
  	ellipse( e6 + 10 , e3 - 25 , 50, e2);
}


function drawHat(){
	fill(255);
	rect( e + 40 , e2 - 20 , e5 + 20 ,70, 50);
	rect( e + 60 , e - 30 , e5 - 20 , e + 50 , 50);
}


function drawEyebrows(){
	for (var i = 280; i < 380; i += 18) {
  		stroke(120,46,38);
  		line(i, e3 , i - 60, e3 - 30 );
	}
}

function drawEyebrows2(){
	for (var j = 430; j < 530; j += 18) {
  		stroke(120,46,38);
  		line(j, e3 , j + 60, e3 - 30 );
	}
}

function drawEyes(){
	fill(255);
	stroke(0);
	//whites
	rect( e2 + 64 , e3 + 36 , 90, 20);
	rect( e4 + 44 , e3 + 36 , 90, 20);
	//pupils
	fill(0);
	ellipse( e3 + 24 , e3 + 46 , 16, 16);
	ellipse( e5 , e3 + 46 , 16, 16);
}


function drawMakeup(){
	fill(0);
	noStroke();
	//outer eyeliner
	triangle( e2 + 65 , e3 + 35 , e2 + 65 , e3 + 56 , e2 + 37 , e3 + 44 );
	triangle( e5 + 33, e3 + 35 , e5 + 33, e3 + 56 , e5 + 64 , e3 + 44 );
	//bottom lashes
	triangle( e2 + 65 , e3 + 55 , e2 + 78 , e3 + 56 , e2 + 56 , e3 + 67);
	triangle( e2 + 80 , e3 + 55 , e2 + 92 , e3 + 56 , e2 + 84 , e3 + 67);

	triangle( e5 + 40 , e3 + 70 , e5 + 33 , e3 + 55 , e5 + 16, e3 + 55 );
	triangle( e5 + 14 , e3 + 57 , e5 + 14 , e3 + 68 , e5 , e3 + 57 );

}

function drawNose(){

	//nose ring
	stroke(163, 163, 163);
	noFill();
	beginShape();
	curveVertex( e4 - 14, e4 + 12 );
	curveVertex( e4 - 14, e4 + 12 );
	curveVertex( e4 , e4 + 22 );
	curveVertex( e4 + 16 , e4 + 12 );
	curveVertex( e4 + 16 , e4 + 12 );

	endShape();

	//nose
	noStroke();
	fill(255, 120, 110);
	ellipse( e4 , e4 , 60 , 30 );
}

function drawMouth(){
	stroke(0);
	noFill();
	beginShape();
	curveVertex( e4 + 7, e4 + 58 );
	curveVertex( e4 + 7, e4 + 58 );
	curveVertex( e4 + 46, e4 + 49 );
	curveVertex( e4 + 72, e4 + 26 );
	curveVertex( e4 + 72, e4 + 26 );

	endShape();
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
