/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;


TrelloPowerUp.initialize({
	'card-buttons': function(t, options) {
		return [{
			text: 'Open confirm',
		}];
	},
}, {targetOrigin: "https://trellis.coffee"});
