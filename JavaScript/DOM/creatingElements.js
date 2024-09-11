// Creating Elements 

const ul = document.querySelector('ul');

const li = document.createElement('li');
li.innerText = 'Nobody';
// Adding Elements
ul.append(li);

//Modifying the text
const matrix = document.querySelector('li');
matrix.innerHTML = 'The Matrix Neo!';

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem);

//Modifying Elements Attributes & Classes
//1 attributes
// li.setAttribute('class', 'list-items');
// li.removeAttribute('class');
// also - getAttribute('class')
// classes
li.classList.add('list-items');
// .classList.remove('')

console.log(li.classList.contains('list-items'));

// Remove Elements
// li.remove()