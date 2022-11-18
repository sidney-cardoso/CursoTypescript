type Age = number;
type Person = {
    name: string;
    age: Age;
    salary: number;
    favoriteColor?: string;
};

type RGBColors = 'red' | 'green' | 'blue';
type CMYKColors = 'cyan' | 'magenta' | 'yellow' | 'black';

type FavoriteColor = RGBColors | CMYKColors;

const person: Person = {
    name: 'Mauricio',
    age: 40,
    salary: 20_000,
};

export const setFavoriteColor = (person: Person, color: FavoriteColor): Person => {
    return { ...person, favoriteColor: color };
};

console.log(setFavoriteColor(person, 'black'));
