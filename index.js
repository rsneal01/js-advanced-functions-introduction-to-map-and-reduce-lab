// Your code here
const mapToNegativize = function(sourceArray){
    return sourceArray.map(number => number * (-1))
}
const mapToNoChange = function(sourceArray){
    return sourceArray.map(number => number)
}
const mapToDouble = function(sourceArray) {
    return sourceArray.map(number => number * 2)
}
const mapToSquare = function(sourceArray) {
    return sourceArray.map(number => number * number)
}

const reduceToTotal = function(sourceArray, startingPoint = 0) {
    // return sourceArray.reduce(function(accumulator, element){return element + accumulator})
    let total = startingPoint
    for (const number of sourceArray) {
        total += number;
      };
    
      return total;
}

const reduceToAllTrue = function(sourceArray){
    for (let i = 0; i < sourceArray.length; i++) {
        // if (sourceArray[i]){
        //     return true;
        // }
        if (!sourceArray[i]) return false
        
    }

    return true
}

const reduceToAnyTrue = function(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false
}
 