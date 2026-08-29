/*importent*/
console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.lpg("Yes I am done")
    resolve("yash")
  }, 3000);
})

prom1.then((a) => {
  console.log(a)
})
