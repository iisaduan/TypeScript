//// [undefinedComparisonError3.ts]
function h<T>(a: T, b: T): boolean {
    switch (a) {
    case undefined:
        return a > b;
    default:
        return a > b ;
    }
}

//// [undefinedComparisonError3.js]
function h(a, b) {
    switch (a) {
        case undefined:
            return a > b;
        default:
            return a > b;
    }
}
