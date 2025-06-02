/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;


TrelloPowerUp.initialize({
	'card-buttons': function(t, options) {
		return [{
			text: 'Open confirm',
			        callback: function (t) {
          			  return t.popup({
            			    title: "Confirm",
            			    type: 'confirm',
				    message: 'Confirm?',
				    confirmText: 'Confirm!',
				    onConfirm: () => {console.log('confirm');},
         			   });
				},
		}];
	},
}, {targetOrigin: "https://trellis.coffee"});
