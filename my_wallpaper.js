//your parameter variables go here!
let rect_width  = 20; //normal = 20
let rect_height = 20; //normal = 20
let bg_width = 50; //normal = 50
let bg_height = 50; //normal = 50
let sqrColour = (0,0,255); //normal = (0,0,255)
let coreLineRotation = 60; //normal = 60
let outLineGrey = 1; //normal = 1
let DoNotChange =120; //normal = 120
//
var x = 20;  // Warning: A lot of math...
var y = 10; // (This took way to long.)
var z = 50; 
//line 61 changed colour to blue

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
   //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let sqrColour = color(0,0,255); //normal = (0,0,255)
  let myWhite = color(255,255,255);
  let myRed = color(255,0,0);
  
  fill(100,0,0);//red
  rect(0,0, bg_width,bg_height);
  rect(z,z ,bg_width,bg_height);
  rect(z*2,z*2, bg_width,bg_height);
  rect(z*3,z*3 ,bg_width,bg_height);

  fill(0,100,0);//green
  rect(z,0, bg_width,bg_height);
  rect(z*2,z, bg_width,bg_height);
  rect(z*3,z*2, bg_width,bg_height);
  rect(0,z*3, bg_width,bg_height);

  fill(0,0,100);//blue
  rect(z*2,0, bg_width,bg_height);
  rect(z*3,z, bg_width,bg_height);
  rect(0,z*2, bg_width,bg_height);
  rect(z,z*3, bg_width,bg_height);

  fill(150,150,0);//yellow
  rect(z*3,0, bg_width,bg_height);
  rect(0,z, bg_width,bg_height);
  rect(z,z*2, bg_width,bg_height);
  rect(z*2,z*3, bg_width,bg_height);

  fill(sqrColour);
  // O/X
  rect(0,0, rect_width,rect_height);
  rect(x,y*18, rect_width,rect_height);
  rect(x*2,0, rect_width,rect_height);
  rect(x*3,y*18, rect_width,rect_height);
  rect(x*4,0, rect_width,rect_height);
  rect(x*5,y*18, rect_width,rect_height);
  rect(x*6,0, rect_width,rect_height);
  rect(x*7,y*18, rect_width,rect_height);
  rect(x*8,0, rect_width,rect_height);
  rect(x*9,y*18, rect_width,rect_height);
  // I/X
  rect(x*3,y*4, rect_width,rect_height);
  rect(x*2,y*14, rect_width,rect_height);
  rect(x*5,y*4, rect_width,rect_height);
  rect(x*4,y*14, rect_width,rect_height);
  rect(x*7,y*4, rect_width,rect_height);
  rect(x*6,y*14, rect_width,rect_height);
  
  // Y
  rect(x*9,y*2, rect_width,rect_height);
  rect(0,y*4, rect_width,rect_height);
  rect(x*9,y*6, rect_width,rect_height);
  rect(0,y*8, rect_width,rect_height);
  rect(x*7,y*8, rect_width,rect_height);
  rect(x*7,y*12, rect_width,rect_height);
  rect(x*9,y*10, rect_width,rect_height);
  rect(0,y*12, rect_width,rect_height);
  rect(x*9,y*14, rect_width,rect_height);
  rect(0,y*16, rect_width,rect_height);
  rect(x*2,y*10, rect_width,rect_height);
  rect(x*2,60, rect_width,rect_height)

  //
  strokeWeight(outLineGrey);
  fill(120); //
  quad(x*10,y*4, x*10,y*16, x*9,y*14, x*9,y*6); //R
  quad(0,y*4, 0,y*16, x,y*14, x,y*6); //L
  fill(140); //
  //
  triangle(x*9,y*7, x*8,y*10 ,x*9,y*13); //R
  strokeWeight(outLineGrey/2);
  triangle(x*9,y*7, x*9-7.5,y*10 ,x*9,y*13);
  line(x*8,y*10, x*9-7.5,y*10);
  strokeWeight(outLineGrey);
  //
  triangle(x,y*7 ,x*2,y*10, x,y*13); //L
  strokeWeight(outLineGrey/2);
  triangle(x,y*7 ,27.5,y*10, x,y*13);
  line(x*2,y*10, 27.5,y*10);
  strokeWeight(outLineGrey);
  //
  triangle(x*4,0, x*5,y*2, 120,0)//top
  triangle(x*4+10,0, x*5,y, 110,0)
  triangle(x*4,y*20, x*5,y*18, 120,y*20)//bottom 
  triangle(x*4+10,y*20, x*5,y*19, 110,y*20)
  //
  push();
  translate(0,0);
  rotate(0);
  quad(0,0, x,y*2, x*2,y*2, x,0);// t1
  line(x-10,0, x,y);
  line(x,y, x,y*2);
  line(x,y, x*2,y*2);
  translate(x*10,y*20);
  rotate(180);
  quad(0,0, x,y*2, x*2,y*2, x,0);// t2
  line(x-10,0, x,y);
  line(x,y, x,y*2);
  line(x,y, x*2,y*2);
  pop();
  //
  push();
  translate(0,0);
  rotate(0);
  quad(x*10,0, x*9,y*2, x*8,y*2, x*9,0);
  line(x*10-10,0, x*9,y);
  line(x*9,y, x*9,y*2);
  line(x*9,y, x*8,y*2);
  translate(x*10,y*20);
  rotate(180);
  quad(x*10,0, x*9,y*2, x*8,y*2, x*9,0);
  line(x*10-10,0, x*9,y);
  line(x*9,y, x*9,y*2);
  line(x*9,y, x*8,y*2);
  pop();
  //
  fill(175); //
  quad(x*10,y*7+2.5, x*10,y*13, x*10-10,y*12, x*10-10,y*8); //R
  line(x*10,y*5+7.5, x*10-10,y*6+5);
  line(x*10,145, x*10-10,y*13+5);
  quad(0,y*7+2.5, 0,y*13, x-10,y*12, 10,y*8); //L
  line(0,y*5+7.5, x-10,y*6+5)
  line(0,y*14+5, x-10,y*13+5);
  //
  fill(120);
  quad(x*3,y*20, x*4,y*18, x*4,y*16, x*3,y*18); //bottom
  line(x*3,y*19, x*4,y*17);
  quad(x*7,y*20, x*6,y*18, x*6,y*16, x*7,y*18);
  line(x*7,y*19, x*6,y*17);
  //
  quad(x*2,y*18, x*3,y*16, x*3,y*14, x*2,y*16); //bottom2
  line(x*2,y*17, x*3,y*15);
  quad(x*8,y*18, x*7,y*16, x*7,y*14, x*8,y*16);
  line(x*8,y*17, x*7,y*15);
  //
  quad(x*3,y*12, x*4,y*10, x*4,y*12, x*3,y*14); //bottom3
  line(x*3,y*13, x*4,y*11);
  quad(x*7,y*12, x*6,y*10, x*6,y*12, x*7,y*14);
  line(x*7,y*13, x*6,y*11);
  //
  quad(x*2,y*2, x*3,y*4, x*3,y*6, x*2,y*4); //top
  line(x*2,y*3, x*3,y*5);
  quad(x*8,y*2, x*7,y*4, x*7,y*6, x*8,y*4);
  line(x*8,y*3, x*7,y*5);
  //
  quad(x*3,0, x*4,y*2, x*4,y*4, x*3,y*2); //top2
  line(x*3,y, x*4,y*3);
  quad(x*7,0, x*6,y*2, x*6,y*4, x*7,y*2);
  line(x*7,y, x*6,y*3);
  //
  quad(x*3,y*6, x*4,y*8, x*4,y*10, x*3,y*8); //top3
  line(x*3,y*7, x*4,y*9);
  quad(x*7,y*6, x*6,y*8, x*6,y*10, x*7,y*8);
  line(x*7,y*7, x*6,y*9);

  //
  //Stark();
  //Captain();
  Hulk();
  //Widow();
}

function Stark(){
  push();
  translate(100, 100);//translate to centre 
  rotate(0);
  //outer circle
  fill(100,0,0);
  strokeWeight(1.5);
  circle(0,0,90);
    // InnerCore
  strokeWeight(2);
  fill(12, 204, 204);
  circle(0,0,80);
  strokeWeight(5);
  //
  push();
  rotate(coreLineRotation);
  line(-38, 0, 38, 0);
  rotate(coreLineRotation);
  line(-38, 0, 38, 0);
  rotate(coreLineRotation);
  line(-38, 0, 38, 0);
  pop();
  //
  strokeWeight(2); //Bigtriangle
  fill(117, 255, 255)
  triangle(-34,-19, 0,39, 34,-19);//bottom
  strokeWeight(1);
  line(0,0, 0,39); //yb
  line(0,0, -34,-19); //yl
  line(0,0, 34,-19); //yr
  //
  strokeWeight(4); // Innertriangle
  fill(242, 255, 255);
  triangle(-15,-8.5, 0,16, 15,-8.5);//top
  //
  //
  //Peasle do not mess with the rotation 
  //(if the rotation is changed please return it to = 120)
  strokeWeight(0);
  push();
  rotate(DoNotChange);
  quad(0,4, -3,9, 0,14, 3,9);
  rotate(DoNotChange);
  quad(0,4, -3,9, 0,14, 3,9);
  rotate(DoNotChange);
  quad(0,4, -3,9, 0,14, 3,9);
  pop();

  pop();
}

function Captain(){
  push();
  translate(100, 100);//translate to centre 
  rotate(0);
  //redOuterCircle
  fill(200,0,0);
  strokeWeight(1.5);
  circle(0,0,90);
    //whiteOuterCircle
  strokeWeight(0);
  fill(255);
  circle(0,0,75);
    //redInnerCircle
  strokeWeight(0);
  fill(200,0,0);
  circle(0,0,60);
    //blueInnerCircle
  stroke (255);
  strokeWeight(1);
  fill(0,0,200);
  circle(0,0,45);
  //star
  strokeWeight(0.5);
  stroke(225)
  fill(235);
  push();
  rotate(0) //top
  quad(0,0, -6,-8, 0,-21, 6,-8);
  quad(0,0, -4,-6, 0,-17, 4,-6);
  rotate(72) //right
  quad(0,0, -6,-8, 0,-21, 6,-8);
  quad(0,0, -4,-6, 0,-17, 4,-6);
  rotate(72) //bottomright
  quad(0,0, -6,-8, 0,-21, 6,-8);
  quad(0,0, -4,-6, 0,-17, 4,-6);
  rotate(72) //bottomleft
  quad(0,0, -6,-8, 0,-21, 6,-8);
  quad(0,0, -4,-6, 0,-17, 4,-6);
  rotate(72) //left
  quad(0,0, -6,-8, 0,-21, 6,-8);
  quad(0,0, -4,-6, 0,-17, 4,-6);
  pop();
  //

  pop();
}

function Hulk(){
  push();
  translate(100, 100);//translate to centre 
  rotate(0);
  //OuterCircle
  fill(0,100,0);
  strokeWeight(1.5);
  circle(0,0,90);
    //InnerCircle
  strokeWeight(1);
  fill(100,0,100);
  circle(0,0,80);
  //Hand
  fill(0,100,0)
  quad(-28,-28, -28,28, -14,14, -14,-14)
  strokeWeight(0.5);
  quad(1,-13.5, 1,-26, 26,-25, 28,-13.5)
  quad(0,0, 1,-13, 28,-13, 29,0)
  quad(0,0.5, 1,13.5, 28,13.5, 29,0.5)
  quad(1,14, 1,18 ,26,18 ,26,14)
  //
  quad(-6,-8.5, 7,-8.5, 7,-28.5, -6,-26.5)

  pop();
}
