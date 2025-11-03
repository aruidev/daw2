export function getObjectByValue(array, atribut, valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][atribut] === valor) {
            return array[i];
        }
    }
    return null;
}
export function getObjectsByValue(array, atribut, valor) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][atribut] === valor) {
            result.push(array[i]);
        }
    }
    return result;
}
export function getObjectsByPattern(array, atribut, pattern) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (pattern.test(array[i][atribut])) {
            result.push(array[i]);
        }
    }
    return result;
}
export function getObjectsInRange(array, atribut, min, max) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][atribut] >= min && array[i][atribut] <= max) {
            result.push(array[i]);
        }
    }
    return result;
}
