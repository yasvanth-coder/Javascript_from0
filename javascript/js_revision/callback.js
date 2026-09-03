// callback fncs
//jab bhi koi aisa code jo baad me chalta hai aap likhoge,
//kyuki wo code baad mein chalta hai js ko ye pata nahi hota ke wo complete hua ya nahi
//aise code ke completion par js ko btaya jaata hai ke wo complete hogya aur aap use chala sakte ho, 
// ye bataane ka kaam callback ka hai
// setTimeout(function () {
//     console.log("2 second baad chala")
// }, 2000);
console.log("1")//main stack
console.log("2")//main stack
setTimeout(function () {//asynchronous|| side stack
    console.log(3)
}, 3000)
console.log("4")//main stack
//main stack is executed first and  and second stack will only ececute if main stack is empty







