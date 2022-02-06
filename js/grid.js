const prev = document.getElementById('btnline');
const slides = document.querySelectorAll('.blockgrid');


let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('blockactive');
    } 
    slides[n].classList.add('blockactive');
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
prev.addEventListener('click', prevSlide);


