const data = [
    {
    id:0,
    img: 'img1.jpg',
    name: 'Ciao Pizza',
    stars: '4,5',
    minPrice: 1200,
    timeDelivery: 40,
    food: 'Пицца',
    pizza: true,
    sushi: false,
    goods: [{title:'Фунги', price:2400, img: 'ciao/fungi.jpg', id: 0, foodId: 50010},{title:'Маргарита', price:1900, img: 'ciao/margo.jpg', id:1, foodId: 50011},{title:'Неаполитана', price:2300, img: 'ciao/neapolitano.jpg', id:2, foodId: 50012},{title:'Пеперони', price:2200, img: 'ciao/pepperoni.jpg', id:3, foodId: 50013},{title:'Росса', price:2400, img: 'ciao/rossa.jpg', id:4, foodId: 50014},{title:'Сырная', price:2200, img: 'ciao/syrnaya.jpg', id:5, foodId: 50015}]
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
    goods: [{title:'Сет Фуне', price:5000, img:'samurai/fune.jpg', id:0, foodId:50020},{title:'Сет Гринвуд', price:5400, img:'samurai/grinwood.jpg', id:1, foodId:50021},{title:'Сет Гаваи', price:5400, img:'samurai/hawaii.jpg', id:2, foodId:50022},{title:'Сет Филадельфия Хит', price:5800, img:'samurai/philadelfiahit.jpg', id:3, foodId:50023},{title:'Филадельфия', price:1400, img:'samurai/philadelfiaroll.jpg', id:4, foodId:50024},{title:'Юки', price:1600, img:'samurai/yki.jpg', id:5, foodId:50025}]
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
    goods: [{title:'Пеперони', price:2500, img:'mamamia/peperoni.jpg', id: 0, foodId:50030},{title:'Сырная', price:1700, img:'mamamia/syr.jpg', id: 1, foodId:50031},{title:'Фокачча', price:2500, img:'mamamia/fokchcha.jpg', id: 2, foodId:50032},{title:'Фокачча Песто', price:2700, img:'mamamia/fokachchapesto.jpg', id:3 , foodId:50033},{title:'Фунги', price:2000, img:'mamamia/fungi.jpg', id:4, foodId:50034},{title:'Четыре Сезона', price:2600, id:4 , img:'mamamia/fourseason.jpg', foodId:50035}]
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
    goods: [{title:'Барбекю', price:2400, img:'pizzahut/bbq.jpg',id: 0, foodId:50040},{title:'Грибная', price:2200, img:'pizzahut/gribnaya.jpg',id: 1, foodId:50041},{title:'Гавайская', price:2200, img:'pizzahut/hawaii.jpg',id: 2, foodId:50042},{title:'Куриная', price:2500, img:'pizzahut/kurinaya.jpg',id: 3, foodId:50043},{title:'Терияки', price:2300, img:'pizzahut/teriyaki.jpg',id: 4, foodId:50044},{title:'Веганская', price:2000, img:'pizzahut/vegan.jpg',id: 5, foodId:50045}]
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
    goods: [{title:'Унаги', price:1400, img:'sushinroll/unagi.jpg', id: 0, foodId:50050},{title:'Терияки', price:1600, img:'sushinroll/teriyaki.jpg', id: 1, foodId:50051},{title:'Дракон', price:1800, img:'sushinroll/dragon.jpg', id: 2, foodId:50052},{title:'Барби', price:1800, img:'sushinroll/barbie.jpg', id: 3, foodId:50053},{title:'Филадельфия гриль', price:1800, img:'sushinroll/philagrill.jpg', id:4 , foodId:50054},{title:'Супер Филадельфия', price:3400, img:'sushinroll/philasupa.jpg', id: 5, foodId:50055}]
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
    goods: [{title:'Мексиканская', price:2300, img:'papajohns/mexican.jpg',id:0 , foodId:50060},{title:'Маргарита', price:2000, img:'papajohns/margarita.jpg',id: 1, foodId:50061},{title:'Техасская', price:2400, img:'papajohns/texas.jpg',id: 2, foodId:50062},{title:'Ветчина и Грибы', price:2400, img:'papajohns/vechinaandgribi.jpg',id:3 , foodId:50063},{title:'Веганская', price:2400, img:'papajohns/vegan.jpg',id: 4, foodId:50064},{title:'Восточная', price:2400, img:'papajohns/vostochnaya.jpg',id: 5, foodId:50065}]
    },
    {
    id:6,
    img: 'img7.jpg',
    name: 'Tanuki',
    stars: 4.8,
    minPrice: 2000,
    timeDelivery:45,
    food: 'Суши',
    pizza: false,
    sushi: true,
    goods:[{title: 'Калифорния Дрим', price:2700, img:'tanuki/cal-dream.jpg', id: 0, foodId:50070}, {title: 'Ямато', price: 2500, img: 'tanuki/yamato.jpg', id: 1, foodId:50071}, {title: 'Калифорния Хот', price:2700, img: 'tanuki/cal-hot.jpg', id: 2, foodId:50072}, {title:'Киноа', price: 2100, img: 'tanuki/kinoa.jpg', id: 3, foodId:50073}, {title:'Сатоши Сет', price: 9100, img:'tanuki/satoshi.jpg', id: 4, foodId:50074}, {title: 'Вегетарианский сет', price: 6800, id: 5, img:'tanuki/veg.jpg', foodId:50075}]
    }
]
export default data;