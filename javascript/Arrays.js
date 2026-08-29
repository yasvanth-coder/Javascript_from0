let arr = [1, 9, 3, 5, 42]
console.log(arr.length)
console.log(arr[0])
console.log(arr.toString())
console.log(arr.pop())
console.log(arr.push(67))
console.log(arr.shift())
console.log(arr.unshift())
let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2);
// }
let newArr = arr.map((e) => {
    return e ** 2
})
console.log(newArr)


















