export default class BookstoreService {
    data = [
        { id: 2702218, title: "React в действии", author: "Томас М.", price: 1000, ISBN: '978-5-4461-0999-9' },
        { id: 2719537, title: "React быстро. Веб-приложения на React, JSX, Redux и GraphQL", author: 'Мардан А.', price: 1276, ISBN: '978-5-4461-0952-4' },
        { id: 2740970, title: "Изучаем React", author: 'Чиннатамби К.', price: 1650, ISBN: '978-5-04-098028-4' },
        { id: 2625561, title: "React и Redux. Функциональная веб-разработка", author: 'Бэнкс А., Порселло Е.', price: 1120, ISBN: '978-5-4461-0668-4' },
        { id: 2524138, title: "Разработка веб-приложений в ReactJS", author: 'Хортон А., Вайс Р.', price: 870, ISBN: '978-5-94074-819-9' },
        { id: 2585858, title: "React.js. Быстрый старт", author: 'Стефанов С.', price: 923, ISBN: '978-5-4461-0889-3' },
    ];

    getBooks = () => {
        return new Promise((resolve, reject) => {
            //reject("fail");
            setTimeout(() => resolve(this.data), 700);
        }) ;
    }


}