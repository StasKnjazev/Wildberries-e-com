// const searchInput = document.querySelector('.form-control');
// console.log(searchInput);

const search = function() {
    const input = document.querySelector('.search-block > input'); // получаем инпут по тегу
    const searchBtn = document.querySelector('.search-block > button'); // получаем кнопку по тегу

    // input.addEventListener('input', (event) => {
    //     console.log(event.target.value);
    // });

    searchBtn.addEventListener('click', () => {
        console.log(input.value);
    });
     
};

search();