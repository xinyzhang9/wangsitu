function playGround(){
	var ch1 = new zhuge();
	var ch2 = new wangsitu();

	this.initialize = function(){
		$(document).keydown(function(e){
			if(e.keyCode == 81){ //q
				document.getElementById('stage_gif').src = "assests/gif/action_10.gif";
			}else if(e.keyCode == 87){ //w
				document.getElementById('stage_gif').src = "assests/gif/action_11.gif";				
			}else if(e.keyCode == 69){ //e
				document.getElementById('stage_gif').src = "assests/gif/action_9.gif";				
			}else if(e.keyCode == 65){ //a
				document.getElementById('stage_gif').src = "assests/gif/action_8.gif";				
			}else if(e.keyCode == 83){ //s
				document.getElementById('stage_gif').src = "assests/gif/action_6.gif";				
			}else if(e.keyCode == 68){ //d
				document.getElementById('stage_gif').src = "assests/gif/action_14.gif";				
			}else if(e.keyCode == 73){ //i
				document.getElementById('stage_gif').src = "assests/gif/action_13.gif";				
			}else if(e.keyCode == 79){ //o
				document.getElementById('stage_gif').src = "assests/gif/action_7.gif";				
			}else if(e.keyCode == 112){ //p
				document.getElementById('stage_gif').src = "assests/gif/action_12.gif";				
			}else if(e.keyCode == 74){ //j
				document.getElementById('stage_gif').src = "assests/gif/action_1.gif";				
			}else if(e.keyCode == 75){ //k
				document.getElementById('stage_gif').src = "assests/gif/action_5.gif";				
			}else if(e.keyCode == 76){ //l
				document.getElementById('stage_gif').src = "assests/gif/action_2.gif";				
			}
		})
	}

	function zhuge(ch){
		var health = 100;
		var maxHealth = 100;
		var canvas = document.getElementById('health1');
		var context = canvas.getContext('2d');
		var object1 = {
		    x: 20,
		    y: 30,
		    width: 300,
		    height: 20
		};
		// Loop
		setInterval(onTimerTick, 33);
		// Render Loop
		function onTimerTick() {
		    // Clear the canvas
		    canvas.width = canvas.width;
		    
		    // Calculate health bar percent
		    var percent = health / maxHealth;

		    context.fillStyle = "Red";
		    context.font = "18px sans-serif";
		    context.fillText("Life " + percent * 100 +"%", 20, 20);

		    context.fillStyle = "black";
		    context.fillRect(object1.x, object1.y, object1.width, object1.height);

		    context.fillStyle = "red";
		    context.fillRect(object1.x, object1.y, object1.width * percent, object1.height);
		}

	}
}