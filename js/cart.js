function cardModal() {
    const cartBtn = document.querySelector('.button-cart');
    const modalBtn = document.getElementById('modal-cart');
    const modalClouse = modalBtn .querySelector('.modal-close');

    cartBtn.addEventListener('click', () => {
        modalBtn.style.display = 'flex';
    });

    modalClouse.addEventListener('click', () => {
        modalBtn.style.display = '';
})
};

cardModal();