
var canvas = document.getElementById('canvas');
canvas.width = 1900;
canvas.height = 1000;
var ctx    = canvas.getContext("2d");


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

ctx.beginPath();
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.strokeStyle="#94716b";
ctx.lineWidth = 10;
color = getRandomColor();



function branche(gen,x,y){
	
	if(gen<8){
		
		ctx.moveTo(0,0);
		ctx.lineTo(0,-y/7);	
		ctx.stroke();
		ctx.translate(0,-y/7);
		ctx.rotate(Math.random()*0.2-0.1)
		
		if(Math.random()<0.6){
						
			ctx.rotate(-0.3);	
			ctx.scale(0.6,0.6);		
			
			ctx.save();
			branche(gen+1,x,y);
			ctx.restore();			
			
			ctx.rotate(0.6);
			
			ctx.save();
			branche(gen+1,x,y);
			ctx.restore();
		}
		else{
			branche(gen,x,y);

		}	
	}
	else{
		ctx.fillStyle = color ;
		ctx.fillRect(0,0,2000,2000); 
	}
}
ctx.translate(canvas.width/2,canvas.height)
branche(0,canvas.width/2,canvas.height)

