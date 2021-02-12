const data = [
    {
    id:0,
    img: 'img1.jpg',
    name: 'Ciao Pizza',
    stars: '4,5',
    minPrice: 1200,
    timeDelivery: 40,
    food: 'Суши',
    pizza: true,
    sushi: false,
    goods: [{title:'Фунги', price:2400, img: 'ciao/fungi.jpg', id: 0},{title:'Маргарита', price:1900, img: 'ciao/margo.jpg', id:1},{title:'Неаполитана', price:2300, img: 'ciao/neapolitano.jpg', id:2},{title:'Пеперони', price:2200, img: 'ciao/pepperoni.jpg', id:3},{title:'Росса', price:2400, img: 'ciao/rossa.jpg', id:4},{title:'Сырная', price:2200, img: 'ciao/syrnaya.jpg', id:5}]
    },
    {
    id:1,
    img: 'img2.jpg',
    name: 'Samurai Sushi',
    stars: '4,7',
    minPrice: 1400,
    timeDelivery: 50,
    food: 'Суши',
    pizza: false,
    sushi: true,
    goods: [{title:'Сет Фуне', price:5000, img:'samurai/fune.jpg'},{title:'Сет Гринвуд', price:5400, img:'samurai/grinwood.jpg'},{title:'Сет Гаваи', price:5400, img:'samurai/hawaii.jpg'},{title:'Сет Филадельфия Хит', price:5800, img:'samurai/philadelfiahit.jpg'},{title:'Филадельфия', price:1400, img:'samurai/philadelfiaroll.jpg'},{title:'Юки', price:1600, img:'samurai/yki.jpg'}]
    },
    {
    id:2,
    img: 'img3.jpg',
    name: 'Mama Mia',
    stars: '4,7',
    minPrice: 1200,
    timeDelivery: 40,
    food: 'Пицца',
    pizza: true,
    sushi: false,
    goods: [{title:'Пеперони', price:2500, img:'mamamia/peperoni.jpg'},{title:'Сырная', price:1700, img:'mamamia/syr.jpg'},{title:'Фокачча', price:2500, img:'mamamia/fokchcha.jpg'},{title:'Фокачча Песто', price:2700, img:'mamamia/fokachchapesto.jpg'},{title:'Фунги', price:2000, img:'mamamia/fungi.jpg'},{title:'Четыре Сезона', price:2600, img:'mamamia/fourseason.jpg'}]
    },
    {
    id:3,
    img: 'img4.jpg',
    name: 'Pizza Hut',
    stars: '4,5',
    minPrice: 1800,
    timeDelivery: 50,
    food: 'Пицца',
    pizza: true,
    sushi: false,
    goods: [{title:'Барбекю', price:2400, img:'pizzahut/bbq.jpg'},{title:'Грибная', price:2200, img:'pizzahut/gribnaya.jpg'},{title:'Гавайская', price:2200, img:'pizzahut/hawaii.jpg'},{title:'Куриная', price:2500, img:'pizzahut/kurinaya.jpg'},{title:'Терияки', price:2300, img:'pizzahut/teriyaki.jpg'},{title:'Веганская', price:2000, img:'pizzahut/vegan.jpg'}]
    },
    {
    id:4,
    img: 'img5.jpg',
    name: "Sushi'n'Roll",
    stars: '4,5',
    minPrice: 1200,
    timeDelivery: 45,
    food: 'Суши',
    pizza: false,
    sushi: true,
    goods: [{title:'Унаги', price:1400, img:'sushinroll/unagi.jpg'},{title:'Терияки', price:1600, img:'sushinroll/teriyaki.jpg'},{title:'Дракон', price:1800, img:'sushinroll/dragon.jpg'},{title:'Барби', price:1800, img:'sushinroll/barbie.jpg'},{title:'Филадельфия гриль', price:1800, img:'sushinroll/philagrill.jpg'},{title:'Супер Филадельфия', price:3400, img:'sushinroll/philasupa.jpg'}]
    },
    {
    id:5,
    img: 'img6.jpg',
    name: "Papa John's",
    stars: '4,5',
    minPrice: 1800,
    timeDelivery: 50,
    food: 'Пицца',
    pizza: true,
    sushi: false,
    goods: [{title:'Мексиканская', price:2300, img:'papajohns/mexican.jpg'},{title:'Маргарита', price:2000, img:'papajohns/margarita.jpg'},{title:'Техасская', price:2400, img:'papajohns/texas.jpg'},{title:'Ветчина и Грибы', price:2400, img:'papajohns/vechinaandgribi.jpg'},{title:'Веганская', price:2400, img:'papajohns/vegan.jpg'},{title:'Восточная', price:2400, img:'papajohns/vostochnaya.jpg'}]
    }
]
export default data;