function quickSort<T>(arr: Array<T>): Array<T> { 
    if (arr.length <= 1) return arr
    
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr.splice(pivotIndex, 1)[0]
    const left = []
    const right = []
    // 快排
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] < pivot) { 
            left.push(arr[i])
        } else { 
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}


// 泛型函数重载
// 使用ts实现中文排序
const chineseArr = ['张三', '李四', '王五', '赵六', '田七']

function sortChinese(arr: string[]): string[] {
    return arr.sort((a, b) => a.localeCompare(b))

    return arr
}

// 判断是否是中文
function isChinese(arr: string[]): boolean {
    const pattern = /^[\u4e00-\u9fa5]+/g
    return chineseArr.some(item => pattern.test(item))
}

// 字符串自排序
function strSelfSort(str: string) {
    const strArr = str.split('')
    const strSortArr = quickSort(strArr)
    return strSortArr.join('')
}

console.log(strSelfSort('bca')) // abc

// 函数重载
function sort(data: string[]): string[]
function sort(data: any[]): any[]
function sort(data: string): string
// 排序
function sort<T>(data: T): Array<any> | string | undefined{ 
    if (data instanceof Array) {
        if (isChinese(data)) {
            return sortChinese(data)
        } else { 
            return quickSort(data)
        }
    } else if(typeof data === 'string'){
        return strSelfSort(data)
    }
}

console.log(sort(['我','的','啊']))



export {}