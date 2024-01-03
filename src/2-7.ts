let data: {} = []

let data1: Object = [];


// 联合类型
let str: string | number = 1;

// 交叉类型
type Obj1 = { username: string }
type Obj2 = { age: number }
let obj: Obj1 = { username: 'a' }
let obj2: Obj2 = { age: 1 }
let obj3: Obj1 & Obj2 = { username: 'a', age: 1 }


// 字面量数据类型
type num = 1 | 2
let num1: num = 1
export { }