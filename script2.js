const mainHeading = document.getElementById('main-heading');
const header = document.getElementById('page-header');
const testButton = document.getElementById('testButton')

mainHeading.textContent = 'Modifying the DOM';

header.style.padding = '60px';
//header.classList.remove('bg-dark');
header.style.backgroundColor = '#B54135';
header.removeAttribute("background-color")

//Event listeners
//can use

testButton.addEventListener('click', () => {
    header.style.padding = '30px';
});


//To use a funciton to take action on eventListener;

function exampleFunciton() {
    console.log('Test Function')
}

testButton.addEventListener('click', () => {
    const useFunction = exampleFunciton();
})