let openBtn = document.getElementById('open-btn');
let modalConatiner = document.getElementById('modal-conatiner');
let closeBtn = document.getElementById('close-btn');


openBtn.addEventListener('click', function() {
    modalConatiner.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modalConatiner.style.display = 'none';
});

window.addEventListener('click', evnt => {
    if (evnt.target === modalConatiner) {
        modalConatiner.style.display = 'none';
    }
});