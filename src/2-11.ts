interface Product {
    name: string;
    price: number;
}

let p: Product = {
    name: 'a',
    price: 1
}

// 继承
interface Pet {
    name: string;
    love: number;
    health: number;
    toHealth: () => void;
}

interface Dog extends Pet {
    run: () => void;
}

let dog: Dog = {
    name: 'a',
    love: 1,
    health: 1,
    toHealth() { },
    run() { }
}

// 类继承接口
interface List {
    add: () => void;
}

class ArrayList implements List {
    add() { }
}