//@target: ES6

export function min<T>(it: Iterable<T>): T | null {
    let result: T | null = null;
    for (const v of it) {
        if (result === null || result > v) {
            result = v;
        }
    }
    return result;
}