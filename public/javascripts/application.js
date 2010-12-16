// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
(function($) {

	var chars = new Array();
	
	var w = window.innerWidth || document.body.clientWidth;
	var h = window.innerHeight || document.body.clientHeight;

	function addChar(name) {
		var char = new Char('main', name);
		char.setXVelocity(Math.floor(Math.random() *10) - 5);
		char.setYVelocity(0);
		char.setX((w /2) + (char.getElement().offsetWidth /2));
		char.setY(h - char.getElement().offsetHeight - 50);
		Engine.addDelegate(char, char.move);	
		Engine.addDelegate(char, char.checkAlive);	
		
		return char;
	}

	function init() {
		var auk = addChar('auk');
		var boy = addChar('boy');
		var monster = addChar('monster');
		var vanesh = addChar('vanesh');
		chars = [auk, boy, monster, vanesh];
		
		$('#message').fadeIn(3000);
	}

	function onResize() {
		w = window.innerWidth || document.body.clientWidth;
		h = window.innerHeight || document.body.clientHeight;
		
		for(var i = 0; i < chars.length; i++) {
			var char = chars[i];
			char.setY(h - char.getElement().offsetHeight - 50);
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
			break;
		}
	}

	Engine.start();

})(jQuery);