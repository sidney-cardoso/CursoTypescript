// tipo void significa que uma função por exemplo, não retorna nada

function noReturn(...args: string[]): void {
    console.log(args.join(' '));
}

const person = {
    name: 'Sidney',
    surname: 'Cardoso',

    showName(): void {
        console.log(`${this.name} ${this.surname}`);
    },
};

person.showName();
noReturn('Sidney', 'Cardoso', '17');

export { person };
