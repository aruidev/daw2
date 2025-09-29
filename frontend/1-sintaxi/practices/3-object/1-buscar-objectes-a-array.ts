export function getObjectByValue(array: any[], atribut: string, valor: any): any | null {
    for (let i = 0; i < array.length; i++) {
        if (array[i][atribut] === valor) {
            return array[i];
        }
    }
    return null;
}

export function getObjectsByValue(array: any[], atribut: string, valor: any): any[] {
    const result: any[] = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][atribut] === valor) {
            result.push(array[i]);
        }
    }
    return result;
}

export function getObjectsByPattern(array: any[], atribut: string, pattern: RegExp): any[] {
    const result: any[] = [];
    for (let i = 0; i < array.length; i++) {
        if (pattern.test(array[i][atribut])) { 
            result.push(array[i]);
        }
    }
    return result;
}

export function getObjectsInRange(array: any[], atribut: string, min: number, max: number): any[] {
    const result: any[] = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][atribut] >= min && array[i][atribut] <= max) {
            result.push(array[i]);
        }
    }
    return result;
}