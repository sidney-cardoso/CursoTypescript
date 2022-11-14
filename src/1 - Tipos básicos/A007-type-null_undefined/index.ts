let x;

if (typeof x === 'undefined') x = 100;

console.log(x * 10);

export const createPerson = (
    firstName: string,
    lastName?: string,
): {
    firstName: string;
    lastName?: string;
} => {
    return { firstName, lastName };
};

const person = createPerson('Sidney', 'Silva');

console.log(person);

export const exponential = (x: any, y: any) => {
    if (typeof x === 'number' && typeof y === 'number') return x ** y;
    return null;
};

const resultNumber = exponential(3, 3);

if (resultNumber === null) {
    console.error('Erro');
} else {
    console.log(resultNumber);
}
