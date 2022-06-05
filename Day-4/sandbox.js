/* ----- for loop ----- */
// for (let i = 0; i < 5; i++) {
//   console.log('in loop: ', i);
// }

// console.log('loop finished');

// const names = ['shuan', 'mario', 'abc'];
// for (let i = 0; i < names.length; i++) {
//   // console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

/* ----- while loops ----- */
// const names = ['shuan', 'mario', 'abc'];

// let i = 0;
// while (i < 5) {
//   console.log('in loop: ', i);
//   i++;
// }

// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

/* ----- do while loops ----- */
// let i = 5;
// do {
//   console.log('val of i is: ', i);
//   i++;
// } while ( i < 5);

/* ----- if statements ----- */
// const age = 25;
// if (age > 20) {
//   console.log('you are over 20 years old');
// }

// const ninjas = ['shuan', 'rian', 'ttzh', 'ryu'];
// if (ninjas.length > 4) {
//   console.log("that's a lot of ninjas");
// }

// const password = 'password1';
// if (password.length >= 8) {
//   console.log('that password is long enough');
// }

/* ----- else if statements ----- */
// const password = 'pass';
// if (password.length >= 12) {
//   console.log('that password is might strong');
// } else if (password.length >= 8) {
//   console.log('that password is long enough');
// } else {
//   console.log('password is not long enough');
// }

/* ----- logical operators - OR || and AND && ----- */

const password = 'p@ss';
if (password.length >= 12 && password.includes('@')) {
  console.log('that password is might strong');
} else if (
  password.length >= 8 ||
  (password.includes('@') && password.length > 5)
) {
  console.log('that password is strong enough');
} else {
  console.log('password is not long enough');
}
