const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function generation(){
	let green = document.getElementById("green").value;
	let red = document.getElementById("red").value;
	let blue = document.getElementById("blue").value;

	for (let i = 0; i < 64; i++) {
	  	for (let j = 0; j < 64; j++) {
	  		for(let m = 0; m < 64; m++){
	    		ctx.fillStyle = `rgb(
	    		    ${Math.floor(i*red/25)},
	   			    ${Math.floor(j*green/25)},
	        		${Math.floor(m*blue/25) })`;
	    		ctx.fillRect(j*8, i*8, 16,16);
			}
	  	}
	}
}

var download = function(){
  var link = document.createElement('a');
  link.download = document.getElementById("fileName").value + '.png';
  link.href = document.getElementById('canvas').toDataURL()
  link.click();
}