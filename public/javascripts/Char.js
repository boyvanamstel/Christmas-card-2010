/**
 * @author Boy van Amstel / http://www.boyvanamstel.nl
 */

var Char = function(container, class) {
	this.id = Char.id++;
	this.container = container;
	this.class = class;
	
	if(this.id && this.container) this.setup();	
}; Char.id = 0;

Char.prototype.constructor = Char;

Char.prototype.setup = function() {
	this.element = document.createElement('div');
	this.element.setAttribute('id', 'char'+this.id);
	
	var elemClass = 'char';
	if(this.class) elemClass = elemClass + ' ' + this.class;
	this.element.setAttribute('class', elemClass);
	
	this.element.style.left = '0px';
	this.element.style.left = '0px';
	document.getElementById(this.container).appendChild(this.element);
}

Char.prototype.setX = function(x) {
	this.x = x || 0;
	this.element.style.left = this.x + 'px';
}
Char.prototype.getX = function() { return this.x; }

Char.prototype.setY = function(y) {
	this.y = y || 0;
	this.element.style.top = this.y + 'px';
}
Char.prototype.getY = function() { return this.y; }

Char.prototype.setXVelocity = function(xVelocity) {
	this.xVelocity = xVelocity || 0;
}
Char.prototype.getXVelocity = function() { return this.xVelocity; }

Char.prototype.setYVelocity = function(yVelocity) {
	this.yVelocity = yVelocity || 0;
}
Char.prototype.getYVelocity = function() { return this.yVelocity; }

Char.prototype.getElement = function() { return this.element; }

Char.prototype.move = function() {

		var element = this.getElement();	
		var x = this.getX();
		var y = this.getY();
		var xVelocity = this.getXVelocity();
		var yVelocity = this.getYVelocity();

		this.setX(x + xVelocity);
		this.setY(y + yVelocity);
		
		w = window.innerWidth || document.body.clientWidth;
		h = window.innerHeight || document.body.clientHeight;

		if(element.offsetLeft > w) this.setX(0 - element.offsetWidth );
		if(element.offsetLeft + element.offsetWidth < 0) this.setX(w);

		if(element.offsetTop > h) this.setY(0 - element.offsetHeight);	
		if(element.offsetTop + element.offsetHeight < 0) this.setY(h);
}

Char.prototype.checkAlive = function() {
		var element = this.getElement();

		if(!document.getElementById(element.getAttribute('id'))) {
			Engine.removeDelegate(this, this.move);
			Engine.removeDelegate(this, this.checkAlive);
		}
}
