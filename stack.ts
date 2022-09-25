interface DataStructure<T> {
    push(newItem: T): void;
    pop(): T;
}

class Stack<T> implements DataStructure<T> {

    items: Array<T> = [];

    push(newItem: T): void {
        this.items.push(newItem);
    }

    pop(): T {
        return this.items.pop();
    }

    peek(): T {
        return this.items[this.items.length - 1];
    }

}

let myNumberStack: Stack<number> = new Stack<number>(); // typeScript compiler can infer generic types, as well as any other type

myNumberStack.push(1);
myNumberStack.push(2);
myNumberStack.push(3);

console.log(myNumberStack.pop());
console.log(myNumberStack.peek());
console.log(myNumberStack.pop());
console.log(myNumberStack.pop());