const showPassword = () =>{
    const btn = document.querySelector('.sing__in__field__feed-btn');
    const btnlog = document.querySelector('.btneyelogin');
    const btnup = document.querySelector('.sing__in__field__feed-btnup');
    const input = document.getElementById('singpassword');
    const inputLog = document.getElementById('singpassword2');
    const inputUp = document.getElementById('singpassword3');

    btn.addEventListener('click', () =>{
        btn.classList.toggle('activeeye');
        if(input.getAttribute('type') ==='password'){
            input.setAttribute('type','text')
        } 
        else {
            input.setAttribute('type','password');
        }

    });
    btnlog.addEventListener('click', () =>{
        btnlog.classList.toggle('activeeye');
        if(inputLog.getAttribute('type') ==='password'){
            inputLog.setAttribute('type','text')
        } 
        else {
            inputLog.setAttribute('type','password');
        }
    });  
    btnup.addEventListener('click', () =>{
        btnup.classList.toggle('activeeye');
        if(inputUp.getAttribute('type') ==='password'){
            inputUp.setAttribute('type','text')
        } 
        else {
            inputUp.setAttribute('type','password');
        }
    });
};
showPassword();