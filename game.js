function playGround(){
	var ch1 = new zhuge();
	var ch2 = new wangsitu();
	var count1 = 0;
	var count2 = 0;
	isPlay = true;
	this.initialize = function(){
		$(document).keydown(function(e){
			if(e.keyCode == 81 && isPlay){ //q
				document.getElementById('stage_gif').src = "assests/gif/action_10.gif";
				ch2.health-=2;
				var audio = new Audio('assests/mp3/zhuge_haha.mp3');
				audio.play();
			}else if(e.keyCode == 87 && isPlay){ //w
				document.getElementById('stage_gif').src = "assests/gif/action_11.gif";	
				ch2.health-=5;
				var audio = new Audio('assests/mp3/raoshe.mp3');
				audio.play();			
			}else if(e.keyCode == 69 && isPlay){ //e
				document.getElementById('stage_gif').src = "assests/gif/action_9.gif";	
				ch2.health-=10;
				var audio = new Audio('assests/mp3/wuchilaozei.mp3');
				audio.play();
				var audio2 = new Audio('assests/mp3/wangwangwang.mp3');
				audio2.play();			
			}else if(e.keyCode == 65 && isPlay){ //a
				document.getElementById('stage_gif').src = "assests/gif/action_8.gif";	
				ch2.health-=5;
				var audio = new Audio('assests/mp3/qinshou.mp3');
				audio.play();	
			}else if(e.keyCode == 83 && isPlay){ //s
				document.getElementById('stage_gif').src = "assests/gif/action_6.gif";	
				ch2.health-=30;
				var audio = new Audio('assests/mp3/houyanwuchi.mp3');
				audio.play();			
			}else if(e.keyCode == 68 && isPlay){ //d
				document.getElementById('stage_gif').src = "assests/gif/action_14.gif";
				ch1.health-=10;
				ch2.health-=10;
				var audio = new Audio('assests/mp3/wang_hehe.mp3');
				audio.play();
				var audio2 = new Audio('assests/mp3/zhuge_haha.mp3');
				audio2.play();	


			}else if(e.keyCode == 73 && isPlay){ //i
				document.getElementById('stage_gif').src = "assests/gif/action_13.gif";	
				ch1.health-=5;
				var audio = new Audio('assests/mp3/kongming.mp3');
				audio.play();				
			}else if(e.keyCode == 79 && isPlay){ //o
				document.getElementById('stage_gif').src = "assests/gif/action_7.gif";	
				ch2.health = ch2.health<=90?ch2.health+10:100;
				var audio = new Audio('assests/mp3/wang_hehe.mp3');
				audio.play();			
			}else if(e.keyCode == 80 && isPlay){ //p
				document.getElementById('stage_gif').src = "assests/gif/action_12.gif";	
				ch1.health -= 7;
				var audio = new Audio('assests/mp3/niruo.mp3');
				audio.play();
			}else if(e.keyCode == 74 && isPlay){ //j
				document.getElementById('stage_gif').src = "assests/gif/action_1.gif";	
				ch1.health -= 10;
				var audio = new Audio('assests/mp3/yizhiwangba.mp3');
				audio.play();			
			}else if(e.keyCode == 75 && isPlay){ //k
				document.getElementById('stage_gif').src = "assests/gif/action_5.gif";	
				ch1.health -= 10;
				var audio = new Audio('assests/mp3/zhugecunfu.mp3');
				audio.play();	
				var audio2 = new Audio('assests/mp3/zhukou.mp3');
				audio2.play();		
			}else if(e.keyCode == 76 && isPlay){ //l
				document.getElementById('stage_gif').src = "assests/gif/action_2.gif";	
				ch1.health -= 20;
				var audio = new Audio('assests/mp3/wang_die.mp3');
				audio.play();			
			}
		})

}
	this.mainLoop = function(){
		ch1.check();
		ch2.check();
		if(!(ch1.isLive && ch2.isLive)){
			//wangsitu die
			if(count1 <1 && ch1.isLive){
				var audio = new Audio('assests/mp3/wang_die.mp3');
				audio.play();
				document.getElementById('wst').src = "assests/img/wangsitu_bw.gif";
				count1+=1;
			}
			//zhuge die
			if(count2 <1 && ch2.isLive){
				var audio = new Audio('assests/mp3/zhuge_die.mp3');
				audio.play();
				document.getElementById('zgl').src = "assests/img/zhuge_bw.gif";
				count2+=1;
			}
			
			isPlay = false;
		}

	}
	this.checkplay = function(){
		return isPlay;
	}
}

function zhuge(){
	this.health = 100;
	var maxHealth = 100;
	this.isLive = true;
	var canvas = document.getElementById('health1');
	canvas.width = 200
	canvas.height = 70
	var context = canvas.getContext('2d');
	var object1 = {
		x: 20,
		y: 30,
		width: 200,
		height: 20
	};
		// Render Loop
		this.check = function(){
		    // Clear the canvas
		    canvas.width = canvas.width;
		    
		    // Calculate health bar percent
		    var percent = this.health / maxHealth;
		    percent = percent>0?percent:0;

		    context.fillStyle = "Red";
		    context.font = "18px sans-serif";
		    context.fillText("Life " + this.health +"%", 20, 20);

		    context.fillStyle = "black";
		    context.fillRect(object1.x, object1.y, object1.width, object1.height);

		    context.fillStyle = "red";
		    context.fillRect(object1.x, object1.y, object1.width * percent, object1.height);
		    if(this.health <=0){
		    	this.isLive = false;
		    	document.getElementById('stage_gif').src = "assests/img/zhuge_die.gif";

		    }
		}

	}
	function wangsitu(){
		this.health = 100;
		var maxHealth = 100;
		this.isLive = true;
		var canvas = document.getElementById('health2');
		canvas.width = 200
		canvas.height = 70
		var context = canvas.getContext('2d');
		var object1 = {
			x: 20,
			y: 30,
			width: 200,
			height: 20
		};
		// Render Loop
		this.check = function(){
		    // Clear the canvas
		    canvas.width = canvas.width;
		    
		    // Calculate health bar percent
		    var percent = this.health / maxHealth;
		    percent = percent>0?percent:0;

		    context.fillStyle = "Red";
		    context.font = "18px sans-serif";
		    context.fillText("Life " + this.health +"%", 20, 20);

		    context.fillStyle = "black";
		    context.fillRect(object1.x, object1.y, object1.width, object1.height);

		    context.fillStyle = "red";
		    context.fillRect(object1.x, object1.y, object1.width * percent, object1.height);

		    if(this.health <=0){
		    	this.isLive = false;
		    	document.getElementById('stage_gif').src = "assests/gif/action_3.gif";

		    }
		}


	}
