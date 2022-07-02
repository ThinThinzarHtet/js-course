// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.abcd.com');
// link.innerText = 'Abcd website';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green;');

// const title = document.querySelector('h1');
// title.setAttribute('style', 'margin:50px');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = '#7bafd5';
// title.style.fontSize = '50px';
// title.style.margin = ''; //remove the property

// const content = document.querySelector('p');
// console.log(content.classList);

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const paras = document.querySelectorAll('p');
// paras.forEach((p) => {
//   if (p.textContent.includes('error')) {
//     p.classList.add('error');
//   }
//   if (p.textContent.includes('success')) {
//     p.classList.add('success');
//   }
// });

// const title = document.querySelector('h1');
// title.classList.toggle('test');
// title.classList.toggle('test');

const article = document.querySelector('article');
// console.log(article.children);

// Array.from(article.children).forEach((child) => {
//   child.classList.add('article-element');
// });

const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

// chaining
console.log(title.nextElementSibling.parentElement.children);
