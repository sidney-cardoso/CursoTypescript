// tuple
const clientData1: readonly [number, string] = [1, 'Saulo'];
const clientData2: [number, string, string] = [17, 'Sidney', 'Cardoso'];
const clientData3: [number, string, string?] = [11, 'Marcos'];
const clientData4: [number, string, ...string[]] = [12, 'Marina', 'Silveira', 'Miranda', 'A', 'B', 'C'];

// clientData1[0] = 20;
// clientData1[1] = 'Mariana';
// clientData1[1] = 'Mariana';

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

// readonly array

const array: readonly string[] = ['Sidney', 'Cardoso'];
const array2: ReadonlyArray<string> = ['Muriel', 'Cardoso'];

console.log(array);
console.log(array2);
