const objA: {
    readonly keyA: string;
    keyB: string;
    keyC?: string;
    [key: string]: unknown;
} = {
    keyA: 'value 1',
    keyB: 'value 2',
};

// objA.keyA = 'other value';
objA.keyB = 'other value 2';
objA.keyC = 'other value 3';
objA.keyD = 'new key';
objA.keyE = 'new key 2';

console.log(objA);
