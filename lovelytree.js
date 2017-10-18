/*
Génération aléatoire récursive de jolis arbres dans un canvas
*/


/*
On assure la correspondance entre HTML et js en récupérant l'objet canvas et son contexte
*/
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var ctx    = canvas.getContext("2d");
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.strokeStyle="#94716b";
ctx.lineWidth = 7;
color = getRandomColor();

/*
getRandomColor permet de créér une couleur aléatoire
*/
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

/*
On dessine un arbre en dessinant des branches
*/
function arbre(x,y){
	ctx.save();
	color = getRandomColor();
	ctx.translate(x,y);
	branche(0,x,y,0);
	ctx.restore();
	
}

/*
fonction principale, implémentant la récursivité de l'algorithme
*/
function branche(gen,x,y,step){
	var l_branche = 0;
	
	if(step<8){ // Condition d'arret 
	
		/*
		On dessine la branche en décidant de son inclinaison et de sa longueur
		*/
		ctx.beginPath();
		ctx.moveTo(0,0);
		l_branche = -y/7 - (y/7)* (Math.random()*2-1)
		ctx.lineTo(0,l_branche);	
		ctx.stroke();
		ctx.translate(0,l_branche);
		ctx.rotate(Math.random()*0.2-0.1)
		
		
		/*
		Chaque branche peut se diviser et donner naissance à 2 autres branches
		*/
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
		
		/*
		Si elle ne se divise pas, elle continue avec une autre branche
		*/
		else{
			ctx.scale(0.8,0.8);	
			ctx.save();
			branche(gen,x,y,step+1);
			ctx.restore();	
		}	
		ctx.closePath();
	}
	/*
	Quand toutes les branches ont été généré, on dessine les feuilles
	*/
	else{
		ctx.beginPath();
		ctx.fillStyle   = color ;
		ctx.strokeStyle = color;
		ctx.arc(0, 0, 360 - step*10 + Math.random() * 50, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}
}
/*
On veut dessiner 2 arbres
*/

for (var i = 1; i < 3; i++ ) {
	arbre(i*canvas.width/3,canvas.height)
}


