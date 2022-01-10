const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.team-people');


let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('people-active');
    } 
    slides[n].classList.add('people-active');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
}
const nextSlide = () => {
    if(index == slides.length-1) {
        index = 0;
        prepareCurrentSlide(index);
    }  else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length-1;
        prepareCurrentSlide(index);
    }  else {
        index--;
        prepareCurrentSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
setInterval( nextSlide, 5000 );


