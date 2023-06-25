// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
};

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
};

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
};

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
};

function appendCat(name){
    const catsAppended = [ ...cats,name]
    return catsAppended;
};

function prependCat(name){
    const catsPrepend = [name, ...cats]
    return catsPrepend;
};

function removeLastCat(){
    const CatCopyRemove = cats.slice(0,cats.length-1);
    return CatCopyRemove;
}

function removeFirstCat(){
    const RemoveCopyCat = cats.slice(1);
    return RemoveCopyCat;
}