type HasName = {
    name: string;
};
type HasSurname = {
    surname: string;
};
type HasAge = {
    age: number;
};

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC;

type Person = HasName & HasAge & HasSurname;

export const person: Person = {
    name: 'Sidney',
    surname: 'Cardoso',
    age: 17,
};

console.log(person);
