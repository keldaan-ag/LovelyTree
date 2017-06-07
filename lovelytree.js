
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


ctx.lineCap="round";
ctx.lineJoin="round";
ctx.strokeStyle="#94716b";
ctx.lineWidth = 7;
color = getRandomColor();

function arbre(x,y){
	ctx.save();
	ctx.translate(x,y);
	branche(0,x,y);
	ctx.restore();
	
}

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

for (var i = 1; i < 4; i++ ) {
	arbre(i*canvas.width/4,canvas.height)
}

