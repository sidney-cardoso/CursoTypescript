export function func(this: Date, arg1: string): void {
    console.log(this);
    console.log(arg1);
}
func.call(new Date(), 'Hello');
