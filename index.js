function myEach(collection, callback) {
    for (let element in collection) {
        callback(collection[element])
    }
    return collection
}

function myMap(collection, callback) {
    let newArray = []
    for (let element in collection) {
        newArray.push(callback(collection[element]))
    }
    return newArray
}

function myReduce(collection, callback, acc) {
    let copy = [...collection]
    acc = acc || copy.shift()
    for (let array in copy) {
        acc = callback(acc, copy[array], copy)
    }
    return acc
}

function myFind(collection, callback) {
    for (let element in collection) {
       let newElement = collection[element]
        if(callback(newElement)) {
            return newElement
       }
    }
}

function myFilter(collection, callback) {
    let selectedArray = []

    for (let element in collection) {
        let newElement = collection[element]
         if(callback(newElement)) {
             selectedArray.push(newElement)
        }
     } 
     return selectedArray
}

function mySize(collection) {
    return Object.keys(collection).length
}

function myFirst( collection, n = 1) {
    let count = 1
    let array = []
    for (let accessor in collection) {
        if (count <= n) {
            array.push(collection[accessor])
            count++
        }
    
    }
    return array.length > 1 ? array : array[0]
}

function myLast(collection, n = 1) {
    let startingIndex = collection.length - n
    return n >1 ?collection.slice(startingIndex, collection.length) : collection[startingIndex]
}

function myKeys (object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}