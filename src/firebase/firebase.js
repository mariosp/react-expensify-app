import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBJH2xC7CX5dI-P04Z5UQ7CBGaDrnujvhs",
    authDomain: "expensify-app-e79d1.firebaseapp.com",
    databaseURL: "https://expensify-app-e79d1.firebaseio.com",
    projectId: "expensify-app-e79d1",
    storageBucket: "expensify-app-e79d1.appspot.com",
    messagingSenderId: "706609481258"
  };
 
  firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// database.ref('expenses')
//   .on('value',(snapshot)=>{
    
//     const expenses =[];

//     snapshot.forEach(child => {
       
//         expenses.push({
//             id: snapshot.key,
//             ...snapshot.val()
//         })

//     });
//     console.log(expenses);
//   }); //end on 

//   database.ref().set(
//       {
//       name: "Marios Patsis",
//       age :26,
//       isSingle:false,
//       location :{
//           city:"Athens",
//           country:"Greece"
//       }
//   }
//   );