let a = prompt("efn:")
let b = prompt("esn:")
//let sum=a+b will give a string
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("you entered a string")
}
let sum = parseInt(a) + parseInt(b)
try {
    console.log("the sum is", sum)
} catch (error) {
    console.log("error bro")
}
finally {
    console.log("faaaaaaaaaaaaaaah")
}



