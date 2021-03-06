/**
 * @author Boy van Amstel / http://www.boyvanamstel.nl
 */

var Engine = {
	start: function(interval) {
		if(!Engine.interval) {
			var i = interval != null ? interval : 50;
			Engine.interval = window.setInterval(Engine.tick, i);
		}
	},
	stop: function() {
		if(Engine.interval) {
			window.clearInterval(Engine.interval);
		}
	},
	tick: function() {
		for(var i in Engine.delegates) {
			var delegate = Engine.delegates[i];
			delegate.method.call(delegate.object);
		}
	},
	addDelegate: function(o,m) {
		if(Engine.delegates instanceof Array == false) {
			Engine.delegates = new Array();
		}
		Engine.delegates.push({ object: o, method: m });
	},
	removeDelegate: function(o,m) {
		if(Engine.delegates instanceof Array == false) return;
		for(var i in Engine.delegates) {
			var delegate = Engine.delegates[i];
			if(o.id == delegate.object.id && m == delegate.method) {
				Engine.delegates.splice(i, 1); return;	
			}
		}
	}
}
