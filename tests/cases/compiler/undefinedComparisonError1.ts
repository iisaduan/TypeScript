//@target: ES6

function f<T>(a: T, b: T): boolean {
    if (a === undefined) {
        return true;
    }

    const c: T = a;

    return c > b ;
}