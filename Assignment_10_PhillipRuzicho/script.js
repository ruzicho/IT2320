var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');
Main.MilkyWay = new Image();
Main.MilkyWay.src = "image1.jpg";
Main.Universe = new Image();
Main.Universe.src = "image3.jpg";
Main.Nebula = new Image();
Main.Nebula.src = "image2.jpg";
Main.Galaxy = new Image();
Main.Galaxy.src = "image5.jpg";
Main.MX = 0;
Main.MY = 0;

Main.Canvas.onmousemove = function(event)
{
	if (event.offsetX)
	{
		mouseX = event.offsetX;
		mouseY = event.offsetY;
	}
	else if (event.layerX)
	{
		mouseX = event.layerX;
		mouseY = event.layerY;
	}

	Main.MX = mouseX;
	Main.MY = mouseY;
}

Main.Box = function(x, y, w, h)
{
	this.X = x;
	this.Y = y;
	this.Width = w;
	this.Height = h;

	this.DrawAsImage = function(image)
	{
		Main.Context.drawImage(image, Main.MX, this.Y, this.Width, this.Height);
		
	}
}

Main.Boxes = [
	new Main.Box(Main.MX,Main.MY, 150, 150),
	new Main.Box(200,200, 150, 150),
	new Main.Box(400, 400, 150, 150),
	new Main.Box(600, 600, 150, 150),
	
	
];


Main.Animate = function()
{
	Main.Context.clearRect(0,0, Main.Canvas.width, Main.Canvas.height);

	for (var i=0; i<Main.Boxes.length; i++)
	{
		Main.Boxes[0].DrawAsImage(Main.MilkyWay);
		Main.Boxes[1].DrawAsImage(Main.Universe);
		Main.Boxes[2].DrawAsImage(Main.Nebula);
		Main.Boxes[3].DrawAsImage(Main.Galaxy);
	}
	

	Main.Context.font = "50px Arial";
	Main.Context.fillText("X: " + Main.MX + "  Y: " + Main.MY, 100, 150);

	

	requestAnimFrame(function() { Main.Animate(); });
}

window.requestAnimFrame = (function(callback)
{
	return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(document).ready(function()
{

	Main.Animate();
});