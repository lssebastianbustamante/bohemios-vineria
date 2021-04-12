// Button Hamburguer

const btnHambuerguer = document.querySelector('#btnHamburguer');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay =  document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHambuerguer.addEventListener('click', function(){
    console.log('click hamburger')

    if(header.classList.contains('open')){ // Close Hamburguer Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        
    } else { // Open Hamburguer Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in'); 
        });
    } 
});