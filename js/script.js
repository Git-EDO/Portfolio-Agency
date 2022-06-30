let slider = document.querySelector('.slider-string');
let slideLeft = document.querySelector('.arrow-left');
let slideRight = document.querySelector('.arrow-right');

let elemCount = document.getElementsByClassName('feedback__item');
let offSet = 0;

slideRight.onclick = function() {
    offSet -= 100;
    if (offSet < ((elemCount.length-1)*-100)) {
        offSet = 0;
    }
    slider.style.left = offSet + '%';
}
slideLeft.onclick = function() {
    offSet += 100;
    if (offSet > 0) {
        offSet = ((elemCount.length-1)*-100);
    }
    slider.style.left = offSet + '%';
}