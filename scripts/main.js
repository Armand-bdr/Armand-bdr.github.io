
let Imagemy = document.querySelector('img');

Imagemy.addEventListener('click', function(){
    let mysrc = Imagemy.getAttribute('src');
    if (mysrc === 'images/nebula.jpg'){
        Imagemy.setAttribute('src','images/trou_noir.jpg');
    } else {
        Imagemy.setAttribute('src','images/nebula.jpg');
    }
});

let myButton = document.querySelector(".utillisateur");
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('veulliez saisir votre nom.');
    localStorage.setItem('nom',myName);
    myHeading.textContent = 'Mozilla est cool,'+ myName;
}

if (!localStorage.getItem('nom')){setUserName();
} else {
    let stroredName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool,'+ stroredName;
}

myButton.addEventListener('click',function(){
    setUserName();
});