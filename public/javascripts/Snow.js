/**
 * @author Boy van Amstel / http://www.boyvanamstel.nl
 */

/*
Snow.prototype = new Char();
Snow.prototype.constructor = Snow;
function Snow(constainer, class) {
	Char.call(this);
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

		if(element.offsetLeft + element.offsetWidth > (w + element.offsetWidth)) this.setX(0 - element.offsetWidth - 1);
		if(element.offsetLeft + element.offsetWidth < (0 - element.offsetWidth)) this.setX(w);

		//if(element.offsetTop + element.offsetHeight > h) this.setY(0);	
		//if(element.offsetTop + element.offsetWidth < 0) this.setY(h - element.offsetHeight);
}

Snow.prototype.checkAlive = function() {
		var element = this.getElement();

		if(!document.getElementById(element.getAttribute('id'))) {
			Engine.removeDelegate(this, this.move);
			Engine.removeDelegate(this, this.checkAlive);
		}
}
*/