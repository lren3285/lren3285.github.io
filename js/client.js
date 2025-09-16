/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize(
  {
    "card-buttons": function (t, options) {
      return [
        {
          text: "Open confirm",
          callback: function (t) {
            return t.popup({
              title: "Confirm",
              type: "confirm",
              message: "Confirm?",
              confirmText: "Confirm!",
              onConfirm: () => {
                console.log("confirm");
              },
            });
          },
        },
        {
          text: "Open date",
          callback: function (t) {
            t.popup({
              type: "date",
              title: "DaTE!!!!",
              callback: function (t, opts) {
                console.log(opts.date);
              },
              minDate: new Date("2025-03-01"),
              maxDate: new Date(),
            });
          },
        },
        {
          text: "Open iframe",
          callback: function (t) {
            return t.popup({
              title: "iframe",
              type: "iframe",
              url: "js/iframe.html",
              height: 200,
            });
          },
        },
        {
          text: "Open modal",
          callback: function (t) {
            t.modal({
              // the url to load for the iframe
              url: "js/iframe.html",
              // optional arguments to be passed to the iframe as query parameters
              // access later with t.arg('text')
              args: { text: "Hello" },
              // optional color for header chrome
              accentColor: "#F2D600",
              // initial height for iframe
              height: 500, // not used if fullscreen is true
              // whether the modal should stretch to take up the whole screen
              fullscreen: true,
              // optional function to be called if user closes modal (via `X` or escape, etc)
              callback: () => console.log("Goodbye."),
              // optional title for header chrome
              title: "appear.in meeting",
              // optional action buttons for header chrome
              // max 3, up to 1 on right side
              actions: [
                {
                  icon: "./images/icon.svg",
                  callback: function (t) {
                    return t.sizeTo(300);
                  },
                  alt: "Leftmost",
                  position: "left",
                },
                {
                  icon: "./images/icon.svg",
                  callback: function (tr) {
                    return tr.popup({
                      title: tr.localizeKey("appear_in_settings"),
                      url: "js/iframe.html",
                      height: 164,
                    });
                  },
                  alt: "Second from left",
                  position: "left",
                },
                {
                  icon: "./images/icon.svg",
                  callback: function (t) {
                    return t.updateModal({
                      accentColor: "#FFFFFF",
                      actions: [],
                      fullScreen: true,
                      title: "updated",
                    });
                  },
                  alt: "Right side",
                  position: "right",
                },
              ],
            });
          },
        },
      ];
    },
    "board-buttons": function (t, options) {
      return [
        {
          text: "Open confirm",
          callback: function (t) {
            return t.popup({
              title: "Confirm",
              type: "confirm",
              message: "Confirm?",
              confirmText: "Confirm!",
              onConfirm: () => {
                console.log("confirm");
              },
            });
          },
        },
        {
          text: "Open list",
          callback: function (t) {
            return t.popup({
              title: "List!",
              items: [
                {
                  text: "Item 1",
                  callback: function (t, opts) {
                    console.log("Item 1");
                  },
                },
                {
                  text: "Item 2",
                  callback: function (t, opts) {
                    console.log("Item 2");
                  },
                },
                {
                  text: "Item 3",
                  callback: function (t, opts) {
                    console.log("Item 3");
                  },
                },
              ],
              search: {
                count: 5,
                placeholder: "placeholder",
                empty: "no search results",
                searching: "searching....",
              },
            });
          },
        },
        {
          text: "Open board bar",
          callback: function (t) {
            return t.boardBar({
              // required URL to load in the iframe
              url: "js/iframe.html",
              // optional arguments to be passed to the iframe as query parameters
              // access later with t.arg('text')
              args: { text: "Hello" },
              // optional color for header chrome
              accentColor: "#F2D600",
              // initial height for iframe
              height: 200, // initial height for iframe
              // optional function to be called if user closes modal
              callback: () => console.log("Goodbye."),
              // optional boolean for whether the user should
              // be allowed to resize the bar vertically
              resizable: true,
              // optional title for header chrome
              title: "Board Meeting",
              // optional action buttons for header chrome
              // max 3, up to 1 on right side
              actions: [
                {
                  icon: "./images/icon.svg",
                  url: "https://google.com",
                  alt: "Leftmost",
                  position: "left",
                },
                {
                  icon: "./images/icon.svg",
                  callback: (tr) =>
                    tr.popup({
                      title: tr.localizeKey("appear_in_settings"),
                      url: "settings.html",
                      height: 164,
                    }),
                  alt: "Second from left",
                  position: "left",
                },
                {
                  icon: "./images/icon.svg",
                  callback: () => console.log(":tada:"),
                  alt: "Right side",
                  position: "right",
                },
              ],
            });
          },
        },
      ];
    },
  },
  { targetOrigin: "https://trellis.coffee" }
);
