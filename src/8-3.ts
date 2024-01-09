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

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const res = quickSort(numArr)
res.forEach(item => console.log(item))

// 字符串数组
let strArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const res2 = quickSort(strArr)
res2.forEach(item => console.log(item))