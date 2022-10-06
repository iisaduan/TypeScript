//@target: ES6

function g<T>(a: T, b: T): boolean {
    if (a === undefined) {
        return a > b;
    }
    else {
        return a > b ;
    }
}
