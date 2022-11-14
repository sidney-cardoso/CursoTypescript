enum Colors {
    RED = 1,
    GREEN,
    BLUE,
}

enum Colors {
    PURPLE = 'PURPLE',
    BLACK = 4,
    PINK,
}

console.log(Colors);
console.log(Colors.GREEN);

console.log(Colors[2]);

export const chooseColor = (color: Colors): void => {
    console.log(Colors[color]);
};

chooseColor(Colors.PINK);
