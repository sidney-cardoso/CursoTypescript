// Array<T> - T[]

export const multiplyArgs = (...args: Array<number>): number => {
    return args.reduce((acc, value) => acc * value, 1);
};

export const concSrings = (...args: string[]): string => {
    return args.join(' ');
};

export const toUpperCase = (...args: string[]): string[] => {
    return args.map((value) => value.toUpperCase());
};

export const result = multiplyArgs(2, 2, 2);
export const conc = concSrings('Hello', 'beautiful', 'world');
export const upper = toUpperCase('Hello', 'beautiful', 'world');

console.log(result);
console.log(conc);
console.log(upper);
