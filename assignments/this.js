/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding will cause "this" to point to window /console object 
* 2. Implicit Binding points to the object Left of
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function helloWorld(name) {
    console.log(this);
    return name;
}
helloWorld("d'sNutz");

// Principle 2

// code example for Implicit Binding
const declareAlly = obj => {
    obj.pledge = function() {
        console.log(`I ${this.name} Pledge Loyalty to House Stark`);
        console.log(this)
    };
};
const houseDs = { name: 'Jared'};
const houseNuts = { name: 'Joe'};
declareAlly(houseDs);
declareAlly(houseNuts);

houseDs.pledge();
houseNuts.pledge();

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding