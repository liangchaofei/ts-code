// 可索引签名
interface Product {
    name: string;
    price: number;
    [propName: string]: any; // 可索引签名
}
// let p : Product = {
//     name: 'a',
//     price: 1,
//     a: 1,
//     b: 2
// }

type A = Product['name']
type A1 = Product['name' | 'price']

type PKeys = keyof Product
export {}