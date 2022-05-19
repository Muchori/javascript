/**
 * PATTERNS
 * -> re-useable solution thta can be applied to occuring problems in js application
 * -> can also be throughout programming templates
 * -> varies
 * examples:
 *      -> module
 *      -> revealing module pattern,
 *      -> singleton
 *      -> factory
 *      -> observer
 *      -> mediator
 *      -> state
 */

/**
 * Obeserver Pattern ES6 -> allows to subscribe and unsubscribe to certain events
 */
class EventObserver {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    /**
     * Filter out from the list whatever matches the callback function. If there is no match,
     * the callback get to stay on the list. The filter return a new list and reassigns the
     * list of observers
     */
    this.observers = this.observers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach((item) => {
      item.call();
    });
  }
}

const click = new EventObserver();

document.querySelector("#sub-ms").addEventListener("click", () => {
  click.subscribe(getCurrentMillseconds);
});

document.querySelector("#unsub-ms").addEventListener("click", () => {
  click.unsubscribe(getCurrentMillseconds);
});
document.querySelector("#sub-s").addEventListener("click", () => {
  click.subscribe(getCurrentSeconds);
});

document.querySelector("#unsub-s").addEventListener("click", () => {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector("#fire").addEventListener("click", () => {
  click.fire();
});

// click handler
const getCurrentMillseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};
const getCurrentSeconds = function () {
  console.log(`Current Milliseconds: ${new Date().getSeconds()}`);
};
