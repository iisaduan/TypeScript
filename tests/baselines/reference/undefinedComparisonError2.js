//// [undefinedComparisonError2.ts]
function g<T>(a: T, b: T): boolean {
    if (a === undefined) {
        return a > b;
    }
    else {
        return a > b ;
    }
}


//// [undefinedComparisonError2.js]
function g(a, b) {
    if (a === undefined) {
        return a > b;
    }
    else {
        return a > b;
    }
}
