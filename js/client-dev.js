/* global TrelloPowerUp */

const Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize(
  {
    'card-buttons'(t, options) {
      return [
        {
          text: 'Open confirm',
          callback(t) {
            return t.popup({
              title: 'Confirm',
              type: 'confirm',
              message: 'Confirm?',
              confirmText: 'Confirm!',
              onConfirm: () => {
                return t.popup({
                  title: 'Next confirm',
                  type: 'confirm',
                  message: 'Confirm?',
                  confirmText: 'Confirm!',
                  onConfirm: () => {
                    console.log('confirm');
                  },
                });
              },
            });
          },
        },
        {
          text: 'Open date',
          callback(t) {
            t.popup({
              type: 'date',
              title: 'DaTE!!!!',
              callback(t, opts) {
                console.log(opts.date);
              },
              minDate: new Date('2025-03-01'),
              maxDate: new Date(),
            });
          },
        },
        {
          text: 'Open iframe',
          callback(t) {
            return t.popup({
              title: 'iframe',
              type: 'iframe',
              url: 'js/iframe.html',
              height: 200,
            });
          },
        },
        {
          text: 'Open modal',
          callback(t) {
            t.modal({
              // the url to load for the iframe
              url: 'js/iframe.html',
              // optional arguments to be passed to the iframe as query parameters
              // access later with t.arg('text')
              args: { text: 'Hello' },
              // optional color for header chrome
              accentColor: '#F2D600',
              // initial height for iframe
              height: 500, // not used if fullscreen is true
              // whether the modal should stretch to take up the whole screen
              fullscreen: true,
              // optional function to be called if user closes modal (via `X` or escape, etc)
              callback: () => console.log('Goodbye.'),
              // optional title for header chrome
              title: 'appear.in meeting',
              // optional action buttons for header chrome
              // max 3, up to 1 on right side
              actions: [
                {
                  icon: './images/icon.svg',
                  callback(t) {
                    return t.closeModal();
                  },
                  alt: 'Leftmost',
                  position: 'left',
                },
                {
                  icon: './images/icon.svg',
                  callback(tr) {
                    return tr.popup({
                      title: tr.localizeKey('appear_in_settings'),
                      url: 'js/iframe.html',
                      height: 164,
                    });
                  },
                  alt: 'Second from left',
                  position: 'left',
                },
                {
                  icon: './images/icon.svg',
                  callback(t) {
                    return t.updateModal({
                      accentColor: '#FFFFFF',
                      actions: [],
                      fullscreen: true,
                      title: 'updated',
                    });
                  },
                  alt: 'Right side',
                  position: 'right',
                },
              ],
            });
          },
        },
      ];
    },
    'board-buttons'(t, options) {
      return [
        {
          text: 'Open confirm',
          callback(t) {
            return t.popup({
              title: 'Confirm',
              type: 'confirm',
              message: 'Confirm?',
              confirmText: 'Confirm!',
              onConfirm: () => {
                console.log('confirm');
              },
            });
          },
        },
        {
          text: 'Open list',
          callback(t) {
            return t.popup({
              title: 'List!',
              items(t, options) {
                // use args.options.search which is the search text entered so far
                // return a Promise that resolves to an array of items
                // similar to the items you provided in the client side version above
                return new Promise(function (resolve) {
                  // you'd probably be making a network request at this point
                  resolve([
                    {
                      text: 'Result 1',
                      callback(t, opts) {
                        console.log(t);
                      },
                    },
                    {
                      text: 'Result 2',
                      callback(t, opts) {
                        console.log(opts);
                      },
                    },
                  ]);
                });
              },
              search: {
                count: 5,
                placeholder: 'placeholder',
                empty: 'no search results',
                searching: 'searching....',
              },
            });
          },
        },
        {
          text: 'Open board bar',
          callback(t) {
            return t.boardBar({
              // required URL to load in the iframe
              url: 'js/iframe.html',
              // optional arguments to be passed to the iframe as query parameters
              // access later with t.arg('text')
              args: { text: 'Hello' },
              // optional color for header chrome
              accentColor: '#F2D600',
              // initial height for iframe
              height: 200, // initial height for iframe
              // optional function to be called if user closes modal
              callback: () => console.log('Goodbye.'),
              // optional boolean for whether the user should
              // be allowed to resize the bar vertically
              resizable: true,
              // optional title for header chrome
              title: 'Board Meeting',
              // optional action buttons for header chrome
              // max 3, up to 1 on right side
              actions: [
                {
                  icon: './images/icon.svg',
                  url: 'https://google.com',
                  alt: 'Leftmost',
                  position: 'left',
                },
                {
                  icon: './images/icon.svg',
                  callback(t) {
                    return t.closeBoardBar();
                  },
                  alt: 'Second from left',
                  position: 'left',
                },
                {
                  icon: './images/icon.svg',
                  callback: () => console.log(':tada:'),
                  alt: 'Right side',
                  position: 'right',
                },
              ],
            });
          },
        },
        {
          text: 'Promise issue',
          callback(t) {
            return t.popup({
              title: 'Promise issue',
              type: 'list',
              items: (t, options) => {
                return t.cards('id', 'name', 'desc').then((cards) => {
                  const searchText = options.search;
                  const matchedCards = cards.filter((card) => card.name.includes(searchText));
                  return matchedCards.map((card) => ({
                    text: card.name,
                    callback: (t) => {
                      return console.log(card).then(() => {
                        return setTimeout(function(){
                          t.closePopup();}, 500)});
                    },
                  }));
                })
              }
            });
          },

        }
      ];
    },
  },
  { targetOrigin: 'http://localhost:2999/' },
);
