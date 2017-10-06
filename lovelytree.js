var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var ctx    = canvas.getContext("2d");
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.strokeStyle="#94716b";
ctx.lineWidth = 7;
color = getRandomColor();


function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function arbre(x,y){
	ctx.save();
	color = getRandomColor();
	ctx.translate(x,y);
	branche(0,x,y,0);
	ctx.restore();
	
}

function branche(gen,x,y,step){
	var l_branche = 0;
	if(step<8){
		ctx.beginPath();
		ctx.moveTo(0,0);
		l_branche = -y/7 - (Math.random()*100-50)
		ctx.lineTo(0,l_branche);	
		ctx.stroke();
		ctx.translate(0,l_branche);
		ctx.rotate(Math.random()*0.2-0.1)
		
		if(Math.random()<0.6){
						
			ctx.rotate(-0.3);	
			ctx.scale(0.8,0.8);		
			
			ctx.save();
			branche(gen+1,x,y,step+1);
			ctx.restore();			
			
			ctx.rotate(0.6);
			
			ctx.save();
			branche(gen+1,x,y,step+1);
			ctx.restore();
		}
		else{
			ctx.scale(0.8,0.8);	
			ctx.save();
			branche(gen,x,y,step+1);
			ctx.restore();	
		}	
		ctx.closePath();
	}
	else{
		ctx.beginPath();
		ctx.fillStyle   = color ;
		ctx.strokeStyle = color;
		ctx.arc(0, 0, 150 + Math.random() * 200, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

arbre(canvas.width/4, canvas.height)
arbre(3 * canvas.width/4, canvas.height)
arbre(2 * canvas.width/4, canvas.height)
/*
for (var i = 1; i < 4; i++ ) {
	arbre(i*canvas.width/4,canvas.height)
}
*/

