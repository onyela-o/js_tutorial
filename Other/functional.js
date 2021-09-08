let states = ["Kansas","Nebraska","North Dakota","South Dakota"]

// RETURN ALL STATES AS A URL SUITABLE STRING
function urlify(string){
    return string.toLowerCase().split(/\s+/).join("-")
}

function imperativeUrls(states) {
    let urls = [];
    states.forEach(function(state){
        urls.push(urlify(state));
    })
    return urls;
}

function functionalUrls(states) {
    return states.map(state => urlify(state));
}

console.log(imperativeUrls(states));
console.log(functionalUrls(states));

// RETURN STATES THAT ARE SINGLE WORDS

function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element){
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    })
    return singles;
}
console.log(imperativeSingles(states))

function functionalSingles(states) {
    return states.filter(state => state.split(/\s+/).length === 1);
}

console.log(functionalSingles(states))



//

let numbers = [1,2,3,4,5,6,7,8,9,10]

function imperativeSum(numbers) {
    let total = 0;
    numbers.forEach(function(n){
        total += n;
    })
    return total;
}

console.log(imperativeSum(numbers))

function functionalSum(numbers) {
    return numbers.reduce((total, n) => {return total += n;});
}

console.log(functionalSum(numbers))


// PLAIN OBJECTS

function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element){
        lengths[element] = element.length;
    })
    return lengths;
}

console.log(imperativeLengths(states))

function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
    
}

