const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //validation
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = 'that username is valid!';
  } else {
    // feedback help info
    feedback.textContent =
      'username must contain letters only & be between 6 and 12';
  }
});

// live feedback
form.username.addEventListener('keyup', (e) => {
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success');
  } else {
    form.username.setAttribute('class', 'error');
  }
});

// testing RegEx
// const username = 'shaunp';
// const pattern = /^[a-z]{6,}$/; //return boolean

// let result = pattern.test(username);
// if (result) {
//   console.log('regex test passed :)');
// } else {
//   console.log('regex test failed');
// }

// let result = username.search(pattern); //return integer, index of the first letter that matches, get -1 if we don't get a match
// console.log('🚀 -> file: sandbox.js -> line 22 -> result', result);
