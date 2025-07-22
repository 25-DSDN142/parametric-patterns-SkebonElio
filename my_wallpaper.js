//your parameter variables go here!
let rect_width  = 20; //normal = 20
let rect_height = 20; //normal = 20
//
let bg_width = 50; //normal = 50
let bg_height = 50; //normal = 50
//
let sqrColour = (100,160,25); //normal = (0,0,255)
//
let coreLineRotation = 60; //normal = 60
//
let outLineGrey = 1; //normal = 1
//
let DoNotChange =120; //normal = 120

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
   pWallpaper.output_mode(GRID_WALLPAPER);
  
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
  fill(100,0,0);//red
  rect(0,0, bg_width,bg_height);
  rect(50,50 ,bg_width,bg_height);
  rect(100,100, bg_width,bg_height);
  rect(150,150 ,bg_width,bg_height);

  fill(0,100,0);//green
  rect(50,0, bg_width,bg_height);
  rect(100,50, bg_width,bg_height);
  rect(150,100, bg_width,bg_height);
  rect(0,150, bg_width,bg_height);

  fill(0,0,100);//blue
  rect(100,0, bg_width,bg_height);
  rect(150,50, bg_width,bg_height);
  rect(0,100, bg_width,bg_height);
  rect(50,150, bg_width,bg_height);

  fill(150,150,0);//yellow
  rect(150,0, bg_width,bg_height);
  rect(0,50, bg_width,bg_height);
  rect(50,100, bg_width,bg_height);
  rect(100,150, bg_width,bg_height);

  fill(sqrColour);
  // O/X
  rect(0,0, rect_width,rect_height);
  rect(20,180, rect_width,rect_height);
  rect(40,0, rect_width,rect_height);
  rect(60,180, rect_width,rect_height);
  rect(80,0, rect_width,rect_height);
  rect(100,180, rect_width,rect_height);
  rect(120,0, rect_width,rect_height);
  rect(140,180, rect_width,rect_height);
  rect(160,0, rect_width,rect_height);
  rect(180,180, rect_width,rect_height);
  // I/X
  rect(60,40, rect_width,rect_height);
  rect(40,140, rect_width,rect_height);
  rect(100,40, rect_width,rect_height);
  rect(80,140, rect_width,rect_height);
  rect(140,40, rect_width,rect_height);
  rect(120,140, rect_width,rect_height);
  
  // Y
  rect(180,20, rect_width,rect_height);
  rect(0,40, rect_width,rect_height);
  rect(180,60, rect_width,rect_height);
  rect(0,80, rect_width,rect_height);
  rect(140,80, rect_width,rect_height);
  rect(140,120, rect_width,rect_height);
  rect(180,100, rect_width,rect_height);
  rect(0,120, rect_width,rect_height);
  rect(180,140, rect_width,rect_height);
  rect(0,160, rect_width,rect_height);
  rect(40,100, rect_width,rect_height);
  rect(40,60, rect_width,rect_height)

  //
  fill(50);
  strokeWeight(2);
  circle(100,100,90);

  //
  strokeWeight(outLineGrey);
  fill(120); //
  quad(200,40, 200,160, 180,140, 180,60); //R
  quad(0,40, 0,160, 20,140, 20,60); //L
  fill(140); //
  //
  triangle(180,70, 160,100 ,180,130); //R
  strokeWeight(outLineGrey/2);
  triangle(180,70, 172.5,100 ,180,130);
  line(160,100, 172.5,100);
  strokeWeight(outLineGrey);
  //
  triangle(20,70 ,40,100, 20,130); //L
  strokeWeight(outLineGrey/2);
  triangle(20,70 ,27.5,100, 20,130);
  line(40,100, 27.5,100);
  strokeWeight(outLineGrey);
  //
  triangle(80,0, 100,20, 120,0)//top
  triangle(90,0, 100,10, 110,0)
  triangle(80,200, 100,180, 120,200)//bottom
  triangle(90,200, 100,190, 110,200)
  //
  push();
  translate(0,0);
  rotate(0);
  quad(0,0, 20,20, 40,20, 20,0);// t1
  line(10,0, 20,10);
  line(20,10, 20,20);
  line(20,10, 40,20);
  translate(200,200);
  rotate(180);
  quad(0,0, 20,20, 40,20, 20,0);// t2
  line(10,0, 20,10);
  line(20,10, 20,20);
  line(20,10, 40,20);
  pop();
  //
  push();
  translate(0,0);
  rotate(0);
  quad(200,0, 180,20, 160,20, 180,0);
  line(190,0, 180,10);
  line(180,10, 180,20);
  line(180,10, 160,20);
  translate(200,200);
  rotate(180);
  quad(200,0, 180,20, 160,20, 180,0);
  line(190,0, 180,10);
  line(180,10, 180,20);
  line(180,10, 160,20);
  pop();
  //
  fill(175); //
  quad(200,72.5, 200,130, 190,120, 190,80); //R
  line(200,57.5, 190,65);
  line(200,145, 190,135);
  quad(0,72.5, 0,130, 10,120, 10,80); //L
  line(0,57.5, 10,65)
  line(0,145, 10,135);
  //
  fill(120);
  quad(60,200, 80,180, 80,160, 60,180); //bottom
  line(60,190, 80,170);
  quad(140,200, 120,180, 120,160, 140,180);
  line(140,190, 120,170);
  //
  quad(40,180, 60,160, 60,140, 40,160); //bottom2
  line(40,170, 60,150);
  quad(160,180, 140,160, 140,140, 160,160);
  line(160,170, 140,150);
  //
  quad(60,120, 80,100, 80,120, 60,140); //bottom3
  line(60,130, 80,110);
  quad(140,120, 120,100, 120,120, 140,140);
  line(140,130, 120,110);
  //
  quad(40,20, 60,40, 60,60, 40,40); //top
  line(40,30, 60,50);
  quad(160,20, 140,40, 140,60, 160,40);
  line(160,30, 140,50);
  //
  quad(60,0, 80,20, 80,40, 60,20); //top2
  line(60,10, 80,30);
  quad(140,0, 120,20, 120,40, 140,20);
  line(140,10, 120,30);
  //
  quad(60,60, 80,80, 80,100, 60,80); //top3
  line(60,70, 80,90);
  quad(140,60, 120,80, 120,100, 140,80);
  line(140,70, 120,90);

  strokeWeight(2);
  fill(12, 204, 204);
  circle(100,100,80);
  strokeWeight(5);
  //
  push();
  translate(100, 100);
  rotate(coreLineRotation);
  line(-38, 0, 38, 0);
  rotate(coreLineRotation);
  line(-38, 0, 38, 0);
  rotate(coreLineRotation);
  line(-38, 0, 38, 0);
  pop();
  //
  strokeWeight(2);
  fill(117, 255, 255)
  triangle(66,81, 100,139, 134,81);//bottom
  strokeWeight(1);
  line(100,100, 100,139); //yb
  line(100,100, 66,81); //yl
  line(100,100, 134,81); //yr
  //
  strokeWeight(4);
  fill(242, 255, 255);
  triangle(85,91.5, 100,115, 115,91.5);//top
  //
  //
  //Peasle do not mess with the rotation 
  //(if the rotation is changed please return it to = 120)
  strokeWeight(0);
  push();
  translate(100, 100);
  rotate(DoNotChange);
  quad(0,4, -3,9, 0,14, 3,9);
  rotate(DoNotChange);
  quad(0,4, -3,9, 0,14, 3,9);
  rotate(DoNotChange);
  quad(0,4, -3,9, 0,14, 3,9);
  pop();
  //
}
