//@target: ES6

function h<T>(a: T, b: T): boolean {
    switch (a) {
    case undefined:
        return a > b;
    default:
        return a > b ;
    }
}