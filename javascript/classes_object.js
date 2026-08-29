// let obj={
//     a:1,
//     b:"yash"
// }

// console.log(obj)

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true
// };

// // Sets rabbit.[[Prototype]] = animal
// rabbit.__proto__ = animal; 

class animal {
    constructor(nane) {
        this.name = name
        console.log("Object is created...")
    }
    eates() {
        console.log("kha raha hoon")
    }
    jumps() {
        console.log("kood raha hoon")
    }
}
class Lion extends animal {
    constructor(name) {
        super()
        this.name = name
        console.log("obj is created and he is a lion")
    }

}

let a = new animal("Bunny");
console.log(a)

let l = new Lion("l")
console.log(l)