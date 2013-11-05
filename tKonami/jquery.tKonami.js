(function($){
	$.fn.tKonami = function(userUrls){

		var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; //Konami code keys
		var keys = []; //Keys pressed by the user
		var urls; //Randoms url to open when Konami code is detected

		if(userUrls != undefined){
			urls = userUrls;
		}
		else{
			urls = ['http://heeeeeeeey.com/', 'http://eelslap.com/', 'http://www.staggeringbeauty.com/', 'http://www.omfgdogs.com/', 'http://www.fallingfalling.com/', 'http://ducksarethebest.com/', 'http://www.hristu.net/', 'http://www.taghua.com/', 'http://www.sanger.dk/', 'http://www.koalastothemax.com/'];
		}

		this.each(function(){
			
			$(this).keyup(function(e){
				var keyCode = (e.keyCode ? e.keyCode : e.which);

				//Handeling QWERTY keyboards.
				//The "A" keycode is 81 on QWERTY keyboards & 65 on AZERTY keyboards
				if(keyCode == 81){
					keyCode = 65;
				}

				if(keys.length < 10){
					keys.push(keyCode);
				}
				else{
					keys.shift();
					keys.push(keyCode);
				}
				if(keys.length == 10){
					checkKeys();
				}
			});

			function checkKeys(){
				var valideKeys = 0;

				for(var i = 0; i<keys.length; i++){
					if(keys[i] == konamiCode[i]){
						valideKeys++;
					}
				}

				if(valideKeys == 10){
					window.open(urls[Math.ceil(Math.random()*urls.length-1)], '_blank');
				}
			}

		});

		return this;

	};
})(jQuery);