/* ----- logical NOT (!) ----- */
// let user = false;
// if (!user) {
//   console.log('you must be logged in to continus');
// }

/* ----- break and continue ----- */
// break >> break the loop completely
// continue >> break the current loop and go back to top and loop again
// const scores = [50, 25, 0, 30, 100, 20, 10];
// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue;
//   }
//   console.log('your score: ', scores[i]);
//   if (scores[i] === 100) {
//     console.log('congrats, you got the top score');
//     break;
//   }
// }

/* ----- switch statements ----- */
// const grade = '50';

// switch (grade) {
//   case '50':
//     console.log('you got an A!');
//     break;
//   case 'B':
//     console.log('you got an B!');
//     break;
//   case 'C':
//     console.log('you got an C!');
//     break;
//   case 'D':
//     console.log('you got an D!');
//     break;
//   case 'E':
//     console.log('you got an E!');
//     break;
//   default:
//     console.log('not a valid grade');
// }

/* ----- variables and block scope ----- */
// const age = 30;
// if (true) {
//   const age = 40;
//   const name = 'shaun';
//   console.log('inside 1st code block: ', age, name);

//   if (true) {
//     const age = 50;
//     var test = 'hello';
//     console.log('inside 2nd code block: ', age);
//   }
// }

// console.log('outside code block: ', age, name, test);

/* ----- functions ----- */
// function declaration

// hoisting works with function declaration but not with function expression
// greet();
// greet();
// greet();
// function greet() {
//   console.log('hello there');
// }

// function expression
// const speak = function () {
//   console.log('good day');
// };

// greet();
// greet();
// greet();

// speak();
// speak();
// speak();

/* ----- arguments and parameters ----- */
const speak = function (name = 'demoname', time = 'night') {
  console.log(`good ${time} ${name}`);
};
speak();
speak('ttzh', 'morning');
speak('ttzh');
