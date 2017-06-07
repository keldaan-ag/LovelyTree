
var canvas = document.getElementById('canvas');
canvas.width = 1900;
canvas.height = 1000;
var ctx    = canvas.getContext("2d");


ctx.beginPath();
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.strokeStyle="brown";


function branche(gen,x,y){
	
	if(gen<5){
		
		ctx.moveTo(0,0);
		ctx.lineTo(0,-y/10);	
		ctx.lineWidth = 15/gen;
		ctx.stroke();
		ctx.translate(0,-y/10);

		ctx.rotate(-Math.random()*0.1+0.1)
		if(Math.random()<0.8){
						
			ctx.rotate(-0.3);		
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
		ctx.fillStyle = 'lightgreen';
		ctx.fillRect(0,0,50,50); 
	}
}
ctx.translate(canvas.width/2,canvas.height)
branche(0,canvas.width/2,canvas.height,15)

