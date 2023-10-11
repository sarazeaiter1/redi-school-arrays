let books = ["Harry Potter", "The Hobbit", "Game of Thrones"];
//index           0               1             2

console.log(books[0]); // "Harry Potter"
console.log(books[1]); // "The Hobbit"
console.log(books[2]); // "Game of Thrones"
console.log(books[3]); // returns undefined

let friends = ["Alice", "Bob", "Carol"];

console.log(friends[1]); // Bob
console.log(friends[3]); // undefined

// Step 1: Create an array with your 3 top friends (or foes)
// Step 2: Say "hello" on console to each friend, e.g.:
let threeTopFriends = ["Sara", "Azadeh", "Eva"];
console.log("hello", threeTopFriends[0]);
console.log("hello", threeTopFriends[1]);
console.log("hello", threeTopFriends[2]);
console.log("BREAK1", threeTopFriends.length);

// for (let i = 0; i < threeTopFriends.length -1; i++) {
for (let i = 0; i < threeTopFriends.length; i++) {
  console.log("hello", threeTopFriends[i]);
}

console.log("BREAK2");

for (let friend of threeTopFriends) {
  console.log("hello", friend);
}
