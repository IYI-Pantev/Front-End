// Event Listeners


// element.addEventListener("click", function);

const buttonTwo = document.querySelector('#btn-contact');

buttonTwo.addEventListener('click', alertBtn);

function alertBtn() {
    alert('phone: 346-66931');
}

const boxContact = document.querySelector('.box-btn1');
console.log(boxContact);

boxContact.addEventListener('mouseover', () => {boxContact.style.backgroundColor = 'white'})
boxContact.addEventListener('mouseout', () => {boxContact.style.backgroundColor = 'yellow'})
// function changeBgColor() {
//     boxContact.style.backgroundColor = 'white';
// }

// boxContact.addEventListener('mouseover', changeBgColor);