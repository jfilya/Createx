    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 1;
    const container = document.querySelector('.slider');
    const track = document.querySelector('.team-people');
    const btnPrev =  document.querySelector('.arrow-left'); 
    const btnNext = document.querySelector('.arrow-right'); 
    const items = document.querySelectorAll('.people');
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });
 
btnNext.addEventListener('click',() =>{
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
});


btnPrev.addEventListener('click',() =>{
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
});

const setPosition= () =>{
    track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();

