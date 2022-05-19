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
 * MODULE PATTERN
 * Basic structure
 */
/* (function () {
  //declare private vars and functions
  return {
    //declare public vars and functions
  }
})(); */

const UIctrl = (function () {
  let text = "Hello World";

  const changeText = function () {
    const element = document.querySelector("h1");
    element.textContent = text;
  };
  return {
    callChangeText: function () {
      changeText();
      //console.log(text);
    },
  };
})();
UIctrl.callChangeText();

/**
 * Revealing Module Pattern
 */
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    //console.log("Item added...");
  }
  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "Hoddo" });
//console.log(ItemCtrl.get(1));

/**
 * SINGLETON PATTERN
 * POssible to have more instances
 */
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("Elon");
    return object;
  }

  return {
    getInstnce: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
const instanceA = Singleton.getInstnce();
const instanceB = Singleton.getInstnce();

//console.log(instanceA);
//console.log(instanceA === instanceB);

/**
 * Factory Pattern/Method -> Manage and maintain objects of collection that are different
 */
function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      // console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  };
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = "$5";
};
const StandardMembership = function (name) {
  this.name = name;
  this.cost = "$15";
};
const SuperMembership = function (name) {
  this.name = name;
  this.cost = "$25";
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("Billy Kid", "simple"));
members.push(factory.createMember("Elon Musk", "super"));
members.push(factory.createMember("George Me", "standard"));

// console.log(members);

members.forEach((member) => {
  member.define();
});

/**
 * Obeserver Pattern -> allows to subscribe and unsubscribe to certain events
 */
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
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
  },
  fire: function () {
    this.observers.forEach((item) => {
      item.call();
    });
  },
};

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
