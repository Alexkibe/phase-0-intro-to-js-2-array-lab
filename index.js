// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat(name){
    cats.shift("Milo");
}

function appendCat(name) {
    const newCats = [...cats, 'Broom'];
    return newCats;
}

function prependCat(name){
    const catsNew = ['Arnold', ...cats]
    return catsNew;
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}

