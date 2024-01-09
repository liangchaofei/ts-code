// 元组
let salart: [string, number] = ['string', 1];

// 元组和数组只读:as const
// let salart2: readonly [string, number] = ['string', 1] as const

// salart2[0] = 'string2'; // 报错

// 可变元组
let people: [string, ...any[]] = ['a', 1, 2];

// 元组解构
let [name, age, ...other] = people;

// 可变元组标签
let [name2, ...other2]: [name2: string, ...any[]] = people;

export {}