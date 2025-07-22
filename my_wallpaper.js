//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
   //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 00;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  fill(100,0,0);//red
  rect(0,0, 50,50);
  rect(50,50 ,50,50);
  rect(100,100, 50,50);
  rect(150,150 ,50,50);

  fill(0,100,0);//green
  rect(50,0, 50,50);
  rect(100,50, 50,50);
  rect(150,100, 50,50);
  rect(0,150, 50,50);

  fill(0,0,100);//blue
  rect(100,0, 50,50);
  rect(150,50, 50,50);
  rect(0,100, 50,50);
  rect(50,150, 50,50);

  fill(150,150,0);//yellow
  rect(150,0, 50,50);
  rect(0,50, 50,50);
  rect(50,100, 50,50);
  rect(100,150, 50,50);

  fill(255)
  // O/X
  rect(0,0, 20,20);
  rect(20,180, 20,20);
  rect(40,0, 20,20);
  rect(60,180, 20,20);
  rect(80,0, 20,20);
  rect(100,180, 20,20);
  rect(120,0, 20,20);
  rect(140,180, 20,20);
  rect(160,0, 20,20);
  rect(180,180, 20,20);
  // I/X
  rect(60,40, 20,20);
  rect(40,140, 20,20);
  rect(100,40, 20,20);
  rect(80,140, 20,20);
  rect(140,40, 20,20);
  rect(120,140, 20,20);
  
  // Y
  rect(180,20, 20,20);
  rect(0,40, 20,20);
  rect(180,60, 20,20);
  rect(0,80, 20,20);
  rect(140,80, 20,20);
  rect(140,120, 20,20);
  rect(180,100, 20,20);
  rect(0,120, 20,20);
  rect(180,140, 20,20);
  rect(0,160, 20,20);
  rect(40,100, 20,20);
  rect(40,60, 20,20)

  //
  fill(50);
  strokeWeight(2);
  circle(100,100,90);

  //
  strokeWeight(1);
  fill(120); //
  quad(200,40, 200,160, 180,140, 180,60); //R
  quad(0,40, 0,160, 20,140, 20,60); //L
  fill(140); //
  triangle(180,70, 160,100 ,180,130); //R
  triangle(20,70 ,40,100, 20,130); //L
  //
  triangle(80,0, 100,20, 120,0)//top
  triangle(90,0, 100,10, 110,0)
  triangle(80,200, 100,180, 120,200)//bottom
  triangle(90,200, 100,190, 110,200)
  //
  push();
  translate(0,0);
  quad(0,0, 20,20, 40,20, 20,0);// tl
  line(10,0, 20,10);
  line(20,10, 20,20);
  line(20,10, 40,20);
  pop();
  //
  fill(175); //
  quad(200,72, 200,130, 190,120, 190,80); //R
  quad(0,70, 0,130, 10,120, 10,80); //L

  fill(120);
  quad(60,200, 80,180, 80,160, 60,180); //bottom
  quad(140,200, 120,180, 120,160, 140,180);
  //
  quad(40,180, 60,160, 60,140, 40,160); //bottom2
  quad(160,180, 140,160, 140,140, 160,160);
  quad(60,120, 80,100, 80,120, 60,140); //bottom3
  quad(140,120, 120,100, 120,120, 140,140);
  //
  quad(40,20, 60,40, 60,60, 40,40); //top
  quad(160,20, 140,40, 140,60, 160,40);
  //
  quad(60,0, 80,20, 80,40, 60,20); //top2
  quad(140,0, 120,20, 120,40, 140,20);
  //
  quad(60,60, 80,80, 80,100, 60,80); //top3
  quad(140,60, 120,80, 120,100, 140,80);

  strokeWeight(2);
  fill(12, 204, 204);
  circle(100,100,80);
  strokeWeight(5);
  //
  push();
  translate(100, 100);
  line(-38, 0, 38, 0);
  rotate(60);
  line(-38, 0, 38, 0);
  rotate(60);
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
  strokeWeight(0);
  push();
  translate(100, 100);
  quad(0,4, -3,9, 0,14, 3,9);
  rotate(120);
  quad(0,4, -3,9, 0,14, 3,9);
  rotate(120);
  quad(0,4, -3,9, 0,14, 3,9);
  pop();
  //
}
