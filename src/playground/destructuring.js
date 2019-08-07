// Object Destructuring

// const person = {
//     name: 'Wes',
//     age: 22,
//     location: {
//         city: 'Philly',
//         temp: 87
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`it's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Boofing for Dummies',
//     author: 'Angus McMillan',
//     publisher: {
//         // name: 'Scholastic'
//     }
// };

// const { publisher: publisherName = 'self-published' } = book.publisher;
// console.log(publisherName); 


// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York' ] = address;

console.log(`you are in ${city}, ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`a medium ${itemName} costs ${mediumPrice}`)