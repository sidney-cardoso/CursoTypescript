type MapStringCB = (item: string) => string;

export const mapString = (array: string[], callback: MapStringCB): string[] => {
    const newArray: string[] = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callback(item));
    }

    return newArray;
};

const abc = ['a', 'b', 'c'];
const abcUpper = mapString(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcUpper);
