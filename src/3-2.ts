// type 定义基础类型
type num = number;

// type 定义联合类型
type numOrStr = number | string;

// type 定义交叉类型
type numAndStr = number & string;

// type 定义元组
type numArr = [number, string];

// interface可以extends一个或者多个接口、类，也可以继承type，但type没有继承功能
interface base {
    num: number;
}
interface TypeStuobj extends base {
    username: string;
    age: number;
}

class Stuobj implements TypeStuobj {
    num: number;
    username: string;
    age: number;
    constructor(num: number, username: string, age: number) {
        this.num = num;
        this.username = username;
        this.age = age;
    }
}

// type交叉类型
type TypeStuobj2 = TypeStuobj & Stuobj;

export { }