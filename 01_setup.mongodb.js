use('ecommers')
//db.dropDatabase()
db.createCollection("courses")
db.courses.insertOne({
  name: "yasvanth",
  price: 0,
  assignments: 5,
  projects: 2,
})

// db.products.insertMany([
//   {
//     name: "Wireless Mouse",
//     price: 799,
//     category: "Electronics",
//     stock: 120,
//     ratings: 4.5,
//     tags: ["computer", "accessory", "wireless"],
//     createdAt: new Date()
//   },
//   {
//     name: "Mechanical Keyboard",
//     price: 2499,
//     category: "Electronics",
//     stock: 80,
//     ratings: 4.8,
//     tags: ["keyboard", "mechanical"],
//     createdAt: new Date()
//   },
//   {
//     name: "Gaming Laptop",
//     price: 85999,
//     category: "Computers",
//     stock: 30,
//     ratings: 4.6,
//     tags: ["gaming", "laptop"],
//     createdAt: new Date()
//   }
// ]);

//READ
let a = db.courses.find({ price: 0 })
console.log(a.toArray())
//UPDATE
db.courses.updateOne({ price: 0 }, { $set: { price: 1000 } })
//delete
db.courses.deleteOne({ price: 1000 })