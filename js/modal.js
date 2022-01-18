const btnOpen = document.getElementById('btn-open-sing-in');
const btnOpen1 = document.getElementById('btn-open-sing-in1');
const modal = document.getElementById('wrapper-modal-sing-in');

const overlay = document.getElementById('overlay');


btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
});
btnOpen1.addEventListener('click', () => {
    modal.classList.add('active');
});
const closeModel = () => {
    modal.classList.remove('active');
};

overlay.addEventListener('click', closeModel);



const btnOpenUp = document.getElementById('btn-open-sing-up');
const btnOpenUp1 = document.getElementById('btn-open-sing-up1');
const modalUp = document.getElementById('wrapper-modal-sing-up');

const overlayUp = document.getElementById('overlayup');


btnOpenUp.addEventListener('click', () => {
    modalUp.classList.add('active');
});
btnOpenUp1.addEventListener('click', () => {
    modalUp.classList.add('active');
});
const closeModelUp = () => {
    modalUp.classList.remove('active');
};

overlayUp.addEventListener('click', closeModelUp);

