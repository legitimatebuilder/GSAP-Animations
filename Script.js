let element = document.querySelector('.header');
// console.log(element);

let secondElement = document.querySelector('.contents');
// console.log(secondElement);

gsap.from('.box-three', { duration: 1, y: '-100%', ease: 'bounce' });

gsap.from('.box-one', { duration: 1, y: '-100%', ease: 'bounce' });

gsap.from('.social-box', { duration: 1, y: '100%', ease: 'elastic', delay: 1 });

let containerOne = document.getElementById("box-one");

let containerThree = document.getElementById("box-three");

let section = document.getElementById("contents");

// let banana = document.getElementById("coconut");
// Note: You can not call image tag or img tag via JS.//

let button = document.getElementById("btn");

button.addEventListener('click', (click) => {
    containerOne.style.backgroundImage = "url('./CSS/Images/beach_waves.jpg')";
    containerThree.style.borderRadius = '10px';
    containerThree.style.backgroundImage = " url('./CSS/Images/banana.png')";
    section.style.background = 'lightskyblue';
});

// Note: GSAP liberary only works on queryselector property of JS, meaning classes of block level elements, text and etc. //

