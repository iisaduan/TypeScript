// @strict: true
// @noemit: true


function f5<T extends {} | undefined | null>(a: T, b: T): boolean {
    return a > b;
}

function g5<T>(a: T, b: T): boolean {
    return a > b;
}

function h5<T extends unknown>(a: T, b: T): boolean {
    return a > b;
}
  

function d<T, U extends T>(x: T, y: U, k: keyof T) {
    x[k] = y[k];
    y[k] = x[k]; 
}

function f<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

function f2<T extends {} | null | undefined , K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

function f3<T extends unknown, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

// ************
function g1<T>(obj: T, key: keyof T) {
    return obj[key];
}

function g2<T extends {} | null | undefined>(obj: T, key: keyof T) {
    return obj[key];
}

function g3<T extends unknown>(obj: T, key: keyof T) {
    return obj[key];
}

// **************
function h1<T, K extends keyof T>(obj: T, other: T, key: K) {
    obj[key]; 
    other[key];
    return;
}

function h2<T extends {} | null | undefined , K extends keyof T>(obj: T, other: T, key: K) {
    obj[key]; 
    other[key];
    return;}

function h3<T extends unknown, K extends keyof T>(obj: T, other: T, key: K) {
    obj[key]; 
    other[key];
    return;
}