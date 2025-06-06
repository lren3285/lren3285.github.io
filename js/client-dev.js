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
		'board-buttons': function(t, options) {
    return [
        {
            text: "Open list",
            callback: function(t) {
                return t.popup({
                    title: "List!",
                    items: () => [
                        {
                            text: "Item 1",
                            callback: function(t, opts) {
                                console.log("Item 1");
                            }
                        },
                        {
                            text: "Item 2",
                            callback: function(t, opts) {
                                console.log("Item 2");
                            }
                        },
                        {
                            text: "Item 3",
                            callback: function(t, opts) {
                                console.log("Item 3");
                            }
                        }
                    ]
                });
            }
        }
    ];
}
}, {targetOrigin: "http://localhost:2999/"});
