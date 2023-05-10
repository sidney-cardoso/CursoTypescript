let x = 10; // eslint-disable-line
x = 1234;

const y = 10;
let a: 10 = 10 as const// eslint-disable-line


const person = {
    name: 'Sidney' as const,
    surname: 'Cardoso',
};

export const chooseColor = (color: 'red' | 'blue' | 'green'): string => {
    return color;
};

console.log(chooseColor('green'));

// Module mode
export default 1;
