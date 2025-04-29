const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map(num => num * 2);
console.log(doubled);

const numbers2 = [5, 12, 8, 130, 44];
const numsGreaterThan10 = numbers2.filter(nums => nums > 10);
console.log(numsGreaterThan10);

const productPrice1 = [50, 100, 150, 200, 250];
const discountPrice = productPrice1.map(price => price * 0.90);
console.log(discountPrice);

const userList = [{ name: 'John', active: true }, { name: 'Mary', active: false }];
const activeUser = userList.filter(user => user.active);
console.log(activeUser);

const numbers3 = [3, 6, 9];
const plusOne = numbers3.map(nums => nums + 1);
console.log(plusOne);

const numbers4 = [12, 5, 8, 130, 44];
const lessThan10 = numbers4.filter(nums => nums < 10);
console.log(lessThan10);

const cart1 = ["book", "pen", "shirt", "cream", "bag"];
const findItem1 = cart1.filter(item => item.includes("book"));
console.log(findItem1);

const playerNames = ["Gerrad", "Mikel", "Suarez", "Adam", "Diaz"];
const upperCased = playerNames.map(name => name.toLocaleUpperCase());
console.log(upperCased);

const numbers5 = [22, 35, 64, 23, 90];
const greaterThan30 = numbers5.filter(num => num > 30);
console.log(greaterThan30);

const cities = ["lagos", "benin", "ogun", "edo"];
const upperCasedCities = cities.map(city => city.toLocaleUpperCase());
console.log(upperCasedCities);

const myCart = ['phone', 'tablet', 'laptop'];
const findItem2 = myCart.filter(item => item.includes("laptop"));
console.log(findItem2);

const Library = ["Good Omens", "Neverwhere", "The Night Circus"];
Library.push("The Hobbit");  // mutation, so it's fine to keep as const since we're not reassigning
console.log(Library);

const scores = [80, 55, 60, 90, 45];
const scoresAbove60 = scores.filter(score => score > 60);
console.log(scoresAbove60);

const response = [true, false, true, false];
const yesOrNo = response.map(answer => answer ? "yes" : "No");
console.log(yesOrNo);

const ages = [18, 22, 15, 30, 25];
const olderThan21 = ages.filter(age => age >= 21);
console.log(olderThan21);

const notification = ["wale sent you a snap", "recieve a N300,000 in gift appreciation", "chelsea targeting Rogers"];
notification.unshift("liverpool are premier league champions");
console.log(notification);

const emailList = ["wale@example.com", "dele@example.com", "sade@example.com", "jack@example.com", "felix@example.com"];
const findEmail = emailList.filter(email => email.includes("jack@example.com"));
console.log(findEmail);

const productPrice2 = [12.5, 5.99, 100.0, 7.99];
const shippingFee = 2;
const totalPrice1 = productPrice2.map(price => price + shippingFee);
console.log(totalPrice1);

const numbers6 = [2, 4, 6, 8, 10];
const divisible = numbers6.filter(nums => nums % 4 === 0);
console.log(divisible);

const number1 = [1, 2, 3, 4, 5];
const squared1 = number1.map(num => num ** 2);
console.log(squared1);

const price1 = [50, 100, 150, 200, 250];
const priceGreaterThan50 = price1.filter(price => price > 50);
console.log(priceGreaterThan50);

const sensorReadings = [45, -3, 67, 20, -1];
const lessThan0 = sensorReadings.filter(sensor => sensor < 0);
console.log(lessThan0);

const customerList = ["dan", "serah", "esther", "julian", "edeth", "eshiet"];
const findName = customerList.filter(name => name.includes("an"));
console.log(findName);

const price2 = [12.5, 5.99, 100.0, 7.99];
const tax = 1.05;
const totalPrice2 = price2.map(price => price * tax);
console.log(totalPrice2);

const numbers7 = [4, 9, 16, 25];
const squared2 = numbers7.map(num => num ** 2);
console.log(squared2);

let mailList = ["wale@example.com", "dele@example.com", "sade@example.com", "jack@example.com", "felix@example.com"];
const removedUser = mailList.filter(mail => mail !== "sade@example.com");
mailList = removedUser;  // reassigned, so needs to be let
console.log(mailList);

const students = [
    { name: 'Felix', grade: 'A' },
    { name: 'Ayo', grade: 'B' },
    { name: 'Emmanuel', grade: 'A' },
    { name: 'David', grade: 'C' }
];
const gradeA = students.filter(student => student.grade.includes("A"));
console.log(gradeA);

const leaderBoard = [
    { username: "felix" },
    { username: "dele" },
    { username: "toyin" }
];
const userUpperCased = leaderBoard.map(board => board.username.toLocaleUpperCase());
console.log(userUpperCased);

const temperature = [32, 45, 28, 50, 38];
const tempBelow40 = temperature.filter(temp => temp < 40);
console.log(tempBelow40);

const product = [
    { Item: "bag", Price: 50 },
    { Item: "doll", Price: 150 },
    { Item: "charger", Price: 90 },
    { Item: "laptop", Price: 350 },
    { Item: "phone", Price: 200 }
];
const costAbove100 = product
    .map(item => item.Price)
    .find(price => price > 100);
console.log(costAbove100);
