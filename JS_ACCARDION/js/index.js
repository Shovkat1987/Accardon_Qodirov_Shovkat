

const title = document.querySelectorAll('.title');
const text = document.querySelectorAll('.text');
const title1 = document.querySelectorAll('.title1');

title[0].addEventListener('click', function () {
    text[0].classList.toggle('text__acc');
});

title[1].addEventListener('click', function () {
    text[1].classList.toggle('text__acc');
});

title[0].addEventListener('click', function () {
    title[0].classList.toggle('title1');
});

title[1].addEventListener('click', function () {
    title[1].classList.toggle('title1');
});







