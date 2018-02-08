var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var ctx    = canvas.getContext("2d");
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.strokeStyle="#94716b";
ctx.lineWidth = 7;
color = getRandomColor();
var r = 360;

var FizzyText = function() {
  this.description = 'Lovely trees';
  this.number           = 3;
  this.remove_last_Tree = false;
  this.rayon            = 260;

  this.create = function() {
  	r = this.rayon +100;
  	if (this.remove_last_Tree) {
  		ctx.clearRect(0, 0, canvas.width, canvas.height);
  	}

	for (var i = 1; i < this.number+1; i++ ) {
		arbre(i*canvas.width/(this.number+1),canvas.height)
	}
  };
};

window.onload = function() {
  var text = new FizzyText();
  var gui = new dat.GUI();
  gui.add(text, 'description');
  gui.add(text, 'number', 0, 1000, 1);
  gui.add(text, 'rayon', 0, 1000, 1);
  gui.add(text, 'remove_last_Tree');
  gui.add(text, 'create');
};
    


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
		draw(x,y);

		if(Math.random()<0.6){
						
			ctx.rotate(-0.3);	
			ctx.scale(0.8,0.8);		
			
			ctx.save();
			//wait(500);
			branche(gen+1,x,y,step+1)
			//setTimeout(()=>{ branche(gen+1,x,y,step+1) }, 500);
			
			ctx.restore();			
			
			ctx.rotate(0.6);
			
			ctx.save();
			//wait(500);
			branche(gen+1,x,y,step+1)
			//setTimeout(()=>{ branche(gen+1,x,y,step+1) }, 500);
			ctx.restore();
		}
		else{
			ctx.scale(0.8,0.8);	
			ctx.save();
			//wait(500);
			branche(gen,x,y,step+1)
			//setTimeout(()=>{ branche(gen,x,y,step+1) }, 500);
			ctx.restore();	
		}	

	}
	else{
		ctx.beginPath();
		ctx.fillStyle   = color ;
		ctx.strokeStyle = color;
		ctx.arc(0, 0, r - step*10 + Math.random() * 50, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}

function draw(x,y) {
	//console.log("test");
	ctx.beginPath();
	ctx.moveTo(0,0);
	let l_branche = -y/7 - (y/7)* (Math.random()*2-1)
	ctx.lineTo(0,l_branche);	
	ctx.stroke();
	ctx.translate(0,l_branche);
	ctx.rotate(Math.random()*0.2-0.1)
	ctx.closePath();
}



arbre(canvas.width/4, canvas.height)
arbre(3 * canvas.width/4, canvas.height)
arbre(2 * canvas.width/4, canvas.height)




