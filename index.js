// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name); //npm test isn't working when other functions after aren't written yet
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    let newCats = [...cats,name]
    return newCats;
}

function prependCat(name) {
    return [name,...cats]
}

function removeLastCat() {
    return cats.slice(0, cats.length-1);
}

function removeFirstCat() {
    return cats.slice(1, cats.length); //return cats.slice(1) works as well, keeps element starting from index 1, removes the rest
}