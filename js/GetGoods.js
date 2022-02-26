const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('https://test-db0d5-default-rtdb.firebaseio.com/db.json')
        .then((res) => res.json())  
        .then((data) => {
            localStorage.setItem('data', JSON.stringify(data));
        }); // метод для получения данных с сервера, а респон - это ответ от сервера
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    })

    localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, ]));
    const goods = JSON.parse(localStorage.getItem('goods'));
};

getGoods();