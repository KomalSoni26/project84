canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width= 80;
car1_height= 50;

car2_width= 80;
car2_height= 50;
 
background_image= "download.jpg";
car1_image = "yellow car.png";
car2_image = "bluecar.png";

car1_x = 10;
car1_y= 10;

car2_x = 10;
car2_y= 50;

function Add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;  

	car1_imageTag = new Image(); 
	car1_imageTag.onload = uploadcar1; 
	car1_imageTag.src = car1_image;   

    car2_imageTag = new Image(); 
	car2_imageTag.onload = uploadcar2; 
	car2_imageTag.src = car2_image;   
}
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1() {
	ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
	ctx.drawImage(car2_imageTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("up arrow key");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("down arrow key");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("left arrow key");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("right arrow key");
		} 		if(keyPressed == '87')
	    {
 			car2_up();
 			console.log("key w");
 		}
 		if(keyPressed == '83')
 		{
 			car2_down();
 			console.log("key s");
 		}
 		if(keyPressed == '65')
 		{
 			car2_left();
 			console.log("key a");
 		}
 		if(keyPressed == '68')
 		{
 			car2_right();
 			console.log("key d");
 		}
 } 


