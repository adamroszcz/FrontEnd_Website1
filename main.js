console.log("hello it's me");
const ham = document.querySelector('.hamburger');
const ul = document.querySelector('nav ul');
const li = document.querySelectorAll('ul li');

ham.addEventListener('click', () => {
    ul.classList.toggle('open');

    li.forEach(liItem => {
        liItem.classList.toggle('show');
    });

})


window.addEventListener('scroll', function (event) {
    const scroll = this.scrollY;
    if (scroll > window.innerHeight * 0.4) {
        ul.classList.add('nonenav');
        ham.classList.add('nonenav');
    } else {
        ul.classList.remove('nonenav');
        ham.classList.remove('nonenav');
    }
})