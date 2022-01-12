const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.bloges');


let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active-blogs');
    } 
    slides[n].classList.add('active-blogs');
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


