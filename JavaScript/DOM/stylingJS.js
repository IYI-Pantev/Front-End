// Styling Elements

// const title = document.getElementById('main-heading');
// const title = document.querySelector('#main-heading');

// title.style.color = 'yellow';

const listItems = document.querySelectorAll('.list-items');

for (item of listItems) {
    item.style.color = 'blue';
}

console.log(listItems);