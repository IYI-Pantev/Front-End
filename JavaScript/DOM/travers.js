// Traverse the DOM

// Parent Node Traversal

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);


//Child Node Traversal

// let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// for (let i = 1; i < ul.childNodes.length; i++) {
//     if (i % 2 !== 0) {
//         ul.childNodes[i].style.backgroundColor = 'yellow';
//     }
// }

// better for looping 

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);


// Sibling Node Traversal

let ul = document.querySelector('ul');
console.log(ul.previousElementSibling);
console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.nextElementSibling);