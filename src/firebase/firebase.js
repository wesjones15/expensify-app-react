import * as firebase from 'firebase';
// import expenses from '../tests/fixtures/expenses';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(`Child Removed: ${snapshot.key}`, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(`Child Updated: ${snapshot.key}`, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(`Child Added: ${snapshot.key}`, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenseArray = [];

//         snapshot.forEach((childSnapshot) => {
//             expenseArray.push({
//                 ...childSnapshot.val(),
//                 id: childSnapshot.key
//             });
//         });
//         console.log(expenseArray);
//     });


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenseArray = [];

//         snapshot.forEach((childSnapshot) => {
//             expenseArray.push({
//                 ...childSnapshot.val(),
//                 id: childSnapshot.key
//             });
//         });
//         console.log(expenseArray);
//     });




// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);








// database.ref('notes/-Lmepjh2nlY4mPmC2hFM').update({
//     body: 'buy food'
// });
// database.ref('notes/-Lmepjh2nlY4mPmC2hFM').remove();

// database.ref('notes').push({
//     title: 'todo',
//     body: 'go for run'
// });


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (error) => {
//     console.log('Error with data fetching', error);
// });

// setTimeout(() => {
//     database.ref('age').set(21);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(22);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });


// database.ref().set({
//     name: 'Wes Jones',
//     age: 22,
//     stressLevel: 6,
//     job: {
//         title: 'Unemployed',
//         company: 'None'
//     },
//     location: {
//         city: 'Downingtown',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('This failed.', error.toString().slice(0, 50));
// });

// database.ref().update({
//     'job/title': 'Slave',
//     'job/company': 'Amazon',
//     'location/city': 'Topeka',
//     stressLevel: 9
// });

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('removed');
//     }).catch((error) => {
//         console.log('failed: ', error);
// });

