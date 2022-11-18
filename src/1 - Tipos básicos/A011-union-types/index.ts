export const sumConcat = (a: number | string, b: number | string): number | string => {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
};

console.log(sumConcat(10, 10));
console.log(sumConcat('10', '10'));
