/**
 * @author Boy van Amstel / http://www.boyvanamstel.nl
 */

Snow.prototype = new Char;

Snow.prototype.constructor = Snow;

function Snow(container, name) {
	this.id = Char.id++;
	this.container = container;
	this.name = name;
	
	if(this.id && this.container) this.setup();
}; Snow.id = 0;

Snow.prototype.setup = function() {
	this.element = document.createElement('div');
	this.element.setAttribute('id', 'snow'+this.id);
	
	var elemClass = 'snow';
	if(this.name) elemClass = elemClass + ' ' + this.name;
	this.element.setAttribute('class', elemClass);
	
	this.element.style.left = '0px';
	this.element.style.left = '0px';
	document.getElementById(this.container).appendChild(this.element);
}

Snow.prototype.move = function() {

		var element = this.getElement();	
		var x = this.getX();
		var y = this.getY();
		var xVelocity = this.getXVelocity();
		var yVelocity = this.getYVelocity();

		this.setX(x + xVelocity + Math.floor((Math.random() * xVelocity) - (xVelocity /2)));
		this.setY(y + yVelocity + Math.floor((Math.random() * yVelocity) - (yVelocity /2)));
		
		w = window.innerWidth || document.body.clientWidth;
		h = window.innerHeight || document.body.clientHeight;

		if(element.offsetLeft > w) this.setX(0 - element.offsetWidth );
		if(element.offsetLeft + element.offsetWidth < 0) this.setX(w);

		if(element.offsetTop > h) this.setY(0 - element.offsetHeight);	
		//if(element.offsetTop + element.offsetHeight < 0) this.setY(h);
}