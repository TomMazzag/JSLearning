//Modifying DOM
const mainHeading = document.getElementById('main-heading');
const header = document.getElementById('page-header');
mainHeading.textContent = 'Modifying the DOM';

//Getting individual elements by their tag
const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');
const firstArticle = articles[0];


//Can also do by class or id
const whiteTextElements = document.getElementsByClassName('text-white');
const byID = document.getElementsById('sidebar');


//Finally can do by querySelector

//const byQSelector = document.querySelector('p.text-white');




header.innerHTML = '<h2>Modifying the DOM</h2>';


//Adding propetries to certain areas e.g. text-center property
header.classList.add('text-center');
// Can use .remove if element already has something 

//Modifying directly rather than adding and removing
header.style.padding = '40px';
byID.style.padding = '40px';