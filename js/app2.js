const prev1 = document.getElementById('btn-prev1');
const next1 = document.getElementById('btn-next1');
const slides2 = document.querySelectorAll('.rewiew');
const dots = document.querySelectorAll('.control');

let index2 = 0;

const activeSlide2 = n => {
    for(slide2 of slides2) {
        slide2.classList.remove('rewiew-active');
    } 
    slides2[n].classList.add('rewiew-active');
}
console.log(activeSlide2);
const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('control-active');
    } 
    dots[n].classList.add('control-active');
}

const prepareCurrentSlide2 = ind => {
    activeSlide2(index2);
    activeDot(index2);
}
const nextSlide2 = () => {
    if(index2 == slides2.length-1) {
        index2 = 0;
        prepareCurrentSlide2(index2);
    }  else {
        index2++;
        prepareCurrentSlide2(index2);
    }
}

const prevSlide2 = () => {
    if(index2 == 0) {
        index2 = slides2.length-1;
        prepareCurrentSlide2(index2);
    }  else {
        index2--;
        prepareCurrentSlide2(index2);
    }
}

dots.forEach((item,indexDot)=>{
    item.addEventListener('click', () => {
        index2 = indexDot;
        prepareCurrentSlide2(index2);
    })
})

next1.addEventListener('click', nextSlide2);
prev1.addEventListener('click', prevSlide2);