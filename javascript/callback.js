/*importent*/
console.log("yash is a hacker")
console.log("ayush is a hecker")

setTimeout(() => {
    console.log("i am inside settimeout")
}, 2000);

console.log("THE END")

const callback = (arg) => {
    console.log(arg)
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("yash");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)