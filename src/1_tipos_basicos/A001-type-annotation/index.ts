/* eslint-disable */

// Tipos básicos
export let name: string = "Sidney" // String: '' `` ""
let age: number = 17 // 11, 1.55, -12.23, 0xf00d, 0b1010, 0o7744
let teen: boolean = true // Somente true ou false, não são permitido valores truthy ou falsy
let symbol: symbol = Symbol('any-symbol')
// let big: bigint = 10n

// Arrays

let arrayNumbers: Array<number> = [2, 3, 4, 5];
let arrayNumbers2: number[] = [2, 3, 4, 5];

let stringNumbers: Array<string> = ['A', 'B', 'C', 'D'];
let stringNumbers2: string[] = ['A', 'B', 'C', 'D'];

// Objetos

let person: {
    name: string,
    age: number,
    teen?: boolean // interrogação para tornar opcional
} = {
    name: 'Sidney',
    age: 17
}

const sum = (x: number, y: number): number => x + y
const result = sum(2, 2)

const sum2: (x: number, y: number) => number = (x, y) => x + y
