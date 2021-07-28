// simple callback function
const text = 'Fullmetal';
console.log('Before defining calls.');
function useless(ninjaCallback) {
    console.log('In useless function');
    return ninjaCallback();
}

function getText() {
    console.log('In getText function.');
    return text;
}

console.log('Before making all calls...');
console.log(useless(getText));
console.log('After making calls.');



// functions as objects
// const ninja = function(){};
// ninja.name = 'Michael';
// console.log("ninja() name attribute: " + ninja.name);


// storing a collection of unique functions
// Since we're able to assign attributes to functions like objects then we can do the following
const store = {
    nextId: 1, // tracks the functions by assigning an id to it
    cache: {}, // object to store all the functions
    add: function(fn) {
        if (!fn.id) {
            fn.id = this.nextId++; // assigns the passed in function id attribute with the current value and increments after
            this.cache[fn.id] = fn;
            return true;
        } 
    }
};
function ninja() {}
store.add(ninja);
console.log(store.cache);
store.add(ninja);
console.log(store.cache);