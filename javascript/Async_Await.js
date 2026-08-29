/*importent*/

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully


// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 10500)
//     })

//}
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 10500);
    });
}

async function main() {
    console.log("Loading");
    console.log("do something else");
    console.log("load data");

    let data = await getData();
    console.log(data);

    console.log("process data");
}

main();
