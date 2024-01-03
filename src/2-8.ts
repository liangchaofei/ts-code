// 使用never避免出现未来扩展新的类没有对应类型的实现
type DataFlow = number | string;

function getData(data: DataFlow) {
    if (typeof data === 'string') {
        console.log(data.length)
    }else if(typeof data === 'number'){
        console.log(data.toString().length)
    } else {
        const check = data;
    }
}
getData('1')
getData(1)