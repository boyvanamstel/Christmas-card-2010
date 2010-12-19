// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
(function($) {

	var chars = new Array();

	var w = window.innerWidth || document.body.clientWidth;
	var h = window.innerHeight || document.body.clientHeight;

	var xPosModifier = 0;
	var snowAmount = 50;

	function setCharPosition(char, i) {
		char.setY(h - char.getElement().offsetHeight - 50);
		char.setX((w / 5) * (i + 1) - (char.getElement().offsetWidth / 2))
	}

	function addChar(name) {
		var char = new Char('main', name);
		char.setXVelocity(0);
		char.setYVelocity(0);
		setCharPosition(char, xPosModifier++);
		Engine.addDelegate(char, char.move);	
		
		return char;
	}

	function addSnow() {
		var snow = new Snow('main');
		snow.setXVelocity(Math.floor(Math.random() * 1) + 1);
		snow.setYVelocity(-Math.floor(Math.random() * 1) + 3);
		snow.setX(Math.floor(Math.random() * w));
		snow.setY(snow.getElement().offsetHeight - Math.floor(Math.random() * 1000));
		Engine.addDelegate(snow, snow.move);	
	}

	function talk(name, text) {
		var char = chars[name];
		var element = char.getElement();
		
		var balloon = document.createElement('div');
		balloon.setAttribute('class', 'balloon');
		balloon.innerHTML = 'MIAUW!';

		$(balloon).appendTo(element);
		$(balloon).effect('bounce', { times: 2 }, 200);

	}

	function init() {
		chars['auk'] = addChar('auk');
		chars['boy'] = addChar('boy');
		chars['monster'] = addChar('monster');
		chars['vanesh'] = addChar('vanesh');
		
		for(var i = 0; i < snowAmount; i++) {
			addSnow();
		}
		
		$('#message').fadeIn(3000);
	}

	function onResize() {
		w = window.innerWidth || document.body.clientWidth;
		h = window.innerHeight || document.body.clientHeight;
	
		var i = 0;
		for(var key in chars) {
			setCharPosition(chars[key], i++);
		}
	}

	window.onload = init;
	window.onresize = onResize;
	
	window.focus();
	document.onkeyup = function(e) {
		e = e || window.event;
		switch(e.keyCode) {
			case(77):
				//addChars();
				talk('monster');
			break;
		}
	}

	Engine.start();

})(jQuery);
