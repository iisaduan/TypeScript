//// [undefinedComparisonError1.ts]
function f<T>(a: T, b: T): boolean {
    if (a === undefined) {
        return true;
    }

    const c: T = a;

    return c > b ;
}

//// [undefinedComparisonError1.js]
function f(a, b) {
    if (a === undefined) {
        return true;
    }
    const c = a;
    return c > b;
}
