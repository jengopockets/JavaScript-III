/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding will cause "this" to point to window /console object 
* 2. Implicit Binding points to the next object Left of "this".
* 3. New Binding Uses a Constructor To create new objects
* 4. Explicit
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
        console.log(`I ${this.name} Pledge Loyalty to Your Moms House`);
        console.log(this)
    };
};
const houseDs = { name: 'Jared'};
const houseNuts = { name: 'Joe',
things: "random"};
declareAlly(houseDs);
declareAlly(houseNuts);

houseDs.pledge();
houseNuts.pledge();

// Principle 3

// code example for New Binding
function BannerMan(watcher) {
    this.command = 'Halt';
    this.check = watcher;
    this.speak = function() {
        console.log(this.command + this.check);
        console.log(this);
    };
}

const ally = new BannerMan(' Good Sir');
const traitor = new BannerMan(' Scoundrel');

ally.speak();
traitor.speak();

// Principle 4

// code example for Explicit Binding
const person ={
    name:"Your Mom"
}

function intro(chore1,chore2,chore3){
    return `Hello I am ${person.name} and you need to ${chore1}, ${chore2}, ${chore3}`;
}

const chores = ["clean your room","sweep", "mop"]

console.log(intro.apply(person,chores));