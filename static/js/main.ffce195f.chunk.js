(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[0],Array(33).concat([function(e,i,t){},function(e,i,t){},function(e,i,t){},,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},,function(e,i,t){},function(e,i,t){"use strict";t.r(i);var c=t(0),a=t(1),s=t.n(a),n=t(16),o=t.n(n),l=t(19),r=t(11),d=(t(33),t(34),t(4)),j=(t(35),function(e){var i=e.text,t=e.alt,a=e.imgClass,s=e.btnClass,n=e.imgLogo,o=e.path,l=e.haveIcon,r=e.counter;return!0===l&&0===r?Object(c.jsx)(d.b,{className:"link",to:o,children:Object(c.jsxs)("button",{href:"!#",className:["button",s].join(" "),children:[Object(c.jsx)("img",{className:a,src:"img/"+n,alt:t}),Object(c.jsx)("span",{className:"button-text",children:i})]})}):!0===l&&r>0?Object(c.jsx)(d.b,{className:"link",to:o,children:Object(c.jsxs)("button",{href:"!#",className:["button",s].join(" "),children:[Object(c.jsx)("i",{children:r}),Object(c.jsx)("span",{className:"button-text",children:i})]})}):!0===l?Object(c.jsx)(d.b,{className:"link",to:o,children:Object(c.jsxs)("button",{href:"!#",className:["button",s].join(" "),children:[Object(c.jsx)("img",{className:a,src:"img/"+n,alt:t}),Object(c.jsx)("span",{className:"button-text",children:i})]})}):!1===l?Object(c.jsx)("div",{children:Object(c.jsx)("a",{className:"link",to:o,href:"https://fishtheflip.github.io/Portfolio/",children:Object(c.jsx)("button",{href:"!#",className:["button",s].join(" "),children:Object(c.jsx)("span",{className:"button-text",children:i})})})}):void 0}),m=function(e){var i=e.counter;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)(d.b,{to:"/",className:"jump",children:Object(c.jsx)("img",{src:"img/logomain.svg",alt:"Logo",className:"logo"})}),Object(c.jsx)("input",{className:"input input-adress",placeholder:"\u0410\u0434\u0440\u0435\u0441 \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)(j,{text:"\u0412\u043e\u0439\u0442\u0438",btnClass:"button-primary",imgClass:"button-image",imgLogo:"user.svg",path:"/raw",haveIcon:!0}),Object(c.jsx)(j,{text:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430",btnClass:"button-cash",imgClass:"button-icon",imgLogo:"shop.svg",path:"/shop",haveIcon:!0,counter:i})]})]})},u=function(e){var i=e.counter;return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(m,{counter:i})})},b=(t(40),function(){return Object(c.jsx)("section",{className:"promo",children:Object(c.jsxs)("h1",{className:"promo-title",children:[" \u041e\u043d\u043b\u0430\u0439\u043d \u0441\u0435\u0440\u0432\u0438\u0441 ",Object(c.jsx)("br",{})," \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0435\u0434\u044b \u043d\u0430 \u0434\u043e\u043c"]})})}),g=(t(41),t(42),function(e){var i=e.FilterFunctionPizza,t=e.FilterFunctionSushi,s=e.FilterFunctionAll,n=Object(a.useState)({active:!0}),o=Object(r.a)(n,2),l=o[0],d=o[1],j=Object(a.useState)({active:!1}),m=Object(r.a)(j,2),u=m[0],b=m[1],g=Object(a.useState)({active:!1}),p=Object(r.a)(g,2),h=p[0],f=p[1];return Object(c.jsx)("div",{className:"section-filter",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{onClick:function(){b({active:!1}),f({active:!1}),s();var e=l.active;d({active:!e})},className:l.active?"active":null,children:"\u0412\u0441\u0435"}),Object(c.jsx)("li",{onClick:function(){f({active:!1}),d({active:!1});var e=u.active;b({active:!e}),u.active?s():i()},className:u.active?"active":null,children:"\u041f\u0438\u0446\u0446\u0430"}),Object(c.jsx)("li",{onClick:function(){b({active:!1}),d({active:!1});var e=h.active;f({active:!e}),h.active?s():t()},className:h.active?"active":null,children:"\u0421\u0443\u0448\u0438"})]})})}),p=function(e){var i=e.FilterFunctionPizza,t=e.FilterFunctionSushi,a=e.FilterFunctionAll;return Object(c.jsx)(s.a.Fragment,{children:Object(c.jsxs)("div",{className:"section-heading",children:[Object(c.jsx)("h1",{className:"section-heading-title",children:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u044b"}),Object(c.jsx)(g,{FilterFunctionPizza:i,FilterFunctionSushi:t,FilterFunctionAll:a})]})})},h=t(14),f=t.p+"static/media/star.817f3275.svg",O=(t(43),function(e){var i,t=e.name,a=e.stars,s=e.minPrice,n=e.timeDelivery,o=e.food,l=e.id,r=e.img;return Object(c.jsxs)(d.b,{to:"/"+l,className:"main-card wow fadeInUp","data-wow-delay":"0.2s",id:l,children:[Object(c.jsx)("img",(i={alt:"Restorant",className:"card-image"},Object(h.a)(i,"alt","img"),Object(h.a)(i,"src","img/"+r),i)),Object(c.jsxs)("div",{className:"main-card-text",children:[Object(c.jsxs)("div",{className:"main-card-heading",children:[Object(c.jsx)("h3",{className:"main-card-title",children:t}),Object(c.jsxs)("span",{className:"main-card-tag tag",children:[" ",n," \u043c\u0438\u043d\u0443\u0442"]})]}),Object(c.jsxs)("div",{className:"main-card-info",children:[Object(c.jsxs)("div",{className:"rating",children:[Object(c.jsx)("img",{src:f,alt:"star"}),a]}),Object(c.jsxs)("div",{className:"price",children:["\u041e\u0442 ",s," \u20b8"]}),Object(c.jsx)("div",{className:"category",children:o})]})]})]})}),x=(t(44),function(e){var i=e.data;console.log(i);var t=i.map((function(e){return Object(c.jsx)(O,{id:e.id,name:e.name,stars:e.stars,minPrice:e.minPrice,timeDelivery:e.timeDelivery,food:e.food,img:e.img},e.id)}));return Object(c.jsx)("div",{className:"cards",children:t})}),v=function(e){var i=e.data,t=e.FilterFunctionPizza,a=e.FilterFunctionSushi,s=e.FilterFunctionAll;return Object(c.jsxs)("section",{className:"restaurants",children:[Object(c.jsx)(p,{FilterFunctionPizza:t,FilterFunctionSushi:a,FilterFunctionAll:s}),Object(c.jsx)(x,{data:i})]})},N=(t(45),function(e){var i=e.data,t=e.FilterFunctionPizza,a=e.FilterFunctionSushi,s=e.FilterFunctionAll;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(b,{}),Object(c.jsx)(v,{data:i,FilterFunctionPizza:t,FilterFunctionSushi:a,FilterFunctionAll:s})]})}),I=(t(46),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"footer-block",children:[Object(c.jsx)("img",{src:"img/logomain.svg",alt:"logo",className:"logo footer-logo"}),Object(c.jsxs)("nav",{className:"footer",children:[Object(c.jsx)(d.b,{to:"/raw",className:"footer-link",children:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430\u043c"}),Object(c.jsx)(d.b,{to:"/raw",className:"footer-link",children:"\u041a\u0443\u0440\u044c\u0435\u0440\u0430\u043c"}),Object(c.jsx)(d.b,{to:"/raw",className:"footer-link",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"}),Object(c.jsx)(d.b,{to:"/raw",className:"footer-link",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]}),Object(c.jsxs)("div",{className:"social-links",children:[Object(c.jsx)(d.b,{to:"/raw",className:"social-link",children:Object(c.jsx)("img",{src:"img/inst.svg",alt:"instagram"})}),Object(c.jsx)(d.b,{to:"/raw",className:"social-link",children:Object(c.jsx)("img",{src:"img/face.svg",alt:"facebook"})}),Object(c.jsx)(d.b,{to:"/raw",className:"social-link",children:Object(c.jsx)("img",{src:"img/vk.svg",alt:"vk"})})]})]})})})}),k=[{id:0,img:"img1.jpg",name:"Ciao Pizza",stars:"4,5",minPrice:1200,timeDelivery:40,food:"\u041f\u0438\u0446\u0446\u0430",pizza:!0,sushi:!1,goods:[{title:"\u0424\u0443\u043d\u0433\u0438",price:2400,img:"ciao/fungi.jpg",id:0,foodId:50010},{title:"\u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430",price:1900,img:"ciao/margo.jpg",id:1,foodId:50011},{title:"\u041d\u0435\u0430\u043f\u043e\u043b\u0438\u0442\u0430\u043d\u0430",price:2300,img:"ciao/neapolitano.jpg",id:2,foodId:50012},{title:"\u041f\u0435\u043f\u0435\u0440\u043e\u043d\u0438",price:2200,img:"ciao/pepperoni.jpg",id:3,foodId:50013},{title:"\u0420\u043e\u0441\u0441\u0430",price:2400,img:"ciao/rossa.jpg",id:4,foodId:50014},{title:"\u0421\u044b\u0440\u043d\u0430\u044f",price:2200,img:"ciao/syrnaya.jpg",id:5,foodId:50015}]},{id:1,img:"img2.jpg",name:"Samurai Sushi",stars:"4,7",minPrice:1400,timeDelivery:50,food:"\u0421\u0443\u0448\u0438",pizza:!1,sushi:!0,goods:[{title:"\u0421\u0435\u0442 \u0424\u0443\u043d\u0435",price:5e3,img:"samurai/fune.jpg",id:0,foodId:50020},{title:"\u0421\u0435\u0442 \u0413\u0440\u0438\u043d\u0432\u0443\u0434",price:5400,img:"samurai/grinwood.jpg",id:1,foodId:50021},{title:"\u0421\u0435\u0442 \u0413\u0430\u0432\u0430\u0438",price:5400,img:"samurai/hawaii.jpg",id:2,foodId:50022},{title:"\u0421\u0435\u0442 \u0424\u0438\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0438\u044f \u0425\u0438\u0442",price:5800,img:"samurai/philadelfiahit.jpg",id:3,foodId:50023},{title:"\u0424\u0438\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0438\u044f",price:1400,img:"samurai/philadelfiaroll.jpg",id:4,foodId:50024},{title:"\u042e\u043a\u0438",price:1600,img:"samurai/yki.jpg",id:5,foodId:50025}]},{id:2,img:"img3.jpg",name:"Mama Mia",stars:"4,7",minPrice:1200,timeDelivery:40,food:"\u041f\u0438\u0446\u0446\u0430",pizza:!0,sushi:!1,goods:[{title:"\u041f\u0435\u043f\u0435\u0440\u043e\u043d\u0438",price:2500,img:"mamamia/peperoni.jpg",id:0,foodId:50030},{title:"\u0421\u044b\u0440\u043d\u0430\u044f",price:1700,img:"mamamia/syr.jpg",id:1,foodId:50031},{title:"\u0424\u043e\u043a\u0430\u0447\u0447\u0430",price:2500,img:"mamamia/fokchcha.jpg",id:2,foodId:50032},{title:"\u0424\u043e\u043a\u0430\u0447\u0447\u0430 \u041f\u0435\u0441\u0442\u043e",price:2700,img:"mamamia/fokachchapesto.jpg",id:3,foodId:50033},{title:"\u0424\u0443\u043d\u0433\u0438",price:2e3,img:"mamamia/fungi.jpg",id:4,foodId:50034},{title:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0421\u0435\u0437\u043e\u043d\u0430",price:2600,id:4,img:"mamamia/fourseason.jpg",foodId:50035}]},{id:3,img:"img4.jpg",name:"Pizza Hut",stars:"4,5",minPrice:1800,timeDelivery:50,food:"\u041f\u0438\u0446\u0446\u0430",pizza:!0,sushi:!1,goods:[{title:"\u0411\u0430\u0440\u0431\u0435\u043a\u044e",price:2400,img:"pizzahut/bbq.jpg",id:0,foodId:50040},{title:"\u0413\u0440\u0438\u0431\u043d\u0430\u044f",price:2200,img:"pizzahut/gribnaya.jpg",id:1,foodId:50041},{title:"\u0413\u0430\u0432\u0430\u0439\u0441\u043a\u0430\u044f",price:2200,img:"pizzahut/hawaii.jpg",id:2,foodId:50042},{title:"\u041a\u0443\u0440\u0438\u043d\u0430\u044f",price:2500,img:"pizzahut/kurinaya.jpg",id:3,foodId:50043},{title:"\u0422\u0435\u0440\u0438\u044f\u043a\u0438",price:2300,img:"pizzahut/teriyaki.jpg",id:4,foodId:50044},{title:"\u0412\u0435\u0433\u0430\u043d\u0441\u043a\u0430\u044f",price:2e3,img:"pizzahut/vegan.jpg",id:5,foodId:50045}]},{id:4,img:"img5.jpg",name:"Sushi'n'Roll",stars:"4,5",minPrice:1200,timeDelivery:45,food:"\u0421\u0443\u0448\u0438",pizza:!1,sushi:!0,goods:[{title:"\u0423\u043d\u0430\u0433\u0438",price:1400,img:"sushinroll/unagi.jpg",id:0,foodId:50050},{title:"\u0422\u0435\u0440\u0438\u044f\u043a\u0438",price:1600,img:"sushinroll/teriyaki.jpg",id:1,foodId:50051},{title:"\u0414\u0440\u0430\u043a\u043e\u043d",price:1800,img:"sushinroll/dragon.jpg",id:2,foodId:50052},{title:"\u0411\u0430\u0440\u0431\u0438",price:1800,img:"sushinroll/barbie.jpg",id:3,foodId:50053},{title:"\u0424\u0438\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0438\u044f \u0433\u0440\u0438\u043b\u044c",price:1800,img:"sushinroll/philagrill.jpg",id:4,foodId:50054},{title:"\u0421\u0443\u043f\u0435\u0440 \u0424\u0438\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0438\u044f",price:3400,img:"sushinroll/philasupa.jpg",id:5,foodId:50055}]},{id:5,img:"img6.jpg",name:"Papa John's",stars:"4,5",minPrice:1800,timeDelivery:50,food:"\u041f\u0438\u0446\u0446\u0430",pizza:!0,sushi:!1,goods:[{title:"\u041c\u0435\u043a\u0441\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f",price:2300,img:"papajohns/mexican.jpg",id:0,foodId:50060},{title:"\u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430",price:2e3,img:"papajohns/margarita.jpg",id:1,foodId:50061},{title:"\u0422\u0435\u0445\u0430\u0441\u0441\u043a\u0430\u044f",price:2400,img:"papajohns/texas.jpg",id:2,foodId:50062},{title:"\u0412\u0435\u0442\u0447\u0438\u043d\u0430 \u0438 \u0413\u0440\u0438\u0431\u044b",price:2400,img:"papajohns/vechinaandgribi.jpg",id:3,foodId:50063},{title:"\u0412\u0435\u0433\u0430\u043d\u0441\u043a\u0430\u044f",price:2400,img:"papajohns/vegan.jpg",id:4,foodId:50064},{title:"\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u0430\u044f",price:2400,img:"papajohns/vostochnaya.jpg",id:5,foodId:50065}]},{id:6,img:"img7.jpg",name:"Tanuki",stars:4.8,minPrice:2e3,timeDelivery:45,food:"\u0421\u0443\u0448\u0438",pizza:!1,sushi:!0,goods:[{title:"\u041a\u0430\u043b\u0438\u0444\u043e\u0440\u043d\u0438\u044f \u0414\u0440\u0438\u043c",price:2700,img:"tanuki/cal-dream.jpg",id:0,foodId:50070},{title:"\u042f\u043c\u0430\u0442\u043e",price:2500,img:"tanuki/yamato.jpg",id:1,foodId:50071},{title:"\u041a\u0430\u043b\u0438\u0444\u043e\u0440\u043d\u0438\u044f \u0425\u043e\u0442",price:2700,img:"tanuki/cal-hot.jpg",id:2,foodId:50072},{title:"\u041a\u0438\u043d\u043e\u0430",price:2100,img:"tanuki/kinoa.jpg",id:3,foodId:50073},{title:"\u0421\u0430\u0442\u043e\u0448\u0438 \u0421\u0435\u0442",price:9100,img:"tanuki/satoshi.jpg",id:4,foodId:50074},{title:"\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0439 \u0441\u0435\u0442",price:6800,id:5,img:"tanuki/veg.jpg",foodId:50075}]}],y=(t(47),function(e){var i=e.data,t=e.num;return Object(c.jsxs)("div",{className:"section-heading",children:[Object(c.jsx)("h1",{className:"section-title",children:i[t].name}),Object(c.jsxs)("div",{className:"card-info card-res",children:[Object(c.jsxs)("div",{className:"rating",children:[Object(c.jsx)("img",{src:"img/star.svg",alt:"rating",className:"rating-star"}),i[t].stars]}),Object(c.jsxs)("div",{className:"price",children:[" \u041e\u0442 ",i[t].minPrice,"\u20b8"]}),Object(c.jsx)("div",{className:"category",children:i[t].food})]})]})}),z=(t(48),t(49),function(e){var i=e.id,t=e.img,a=e.price,s=e.title,n=e.food,o=e.onAdd,l=e.foodId;return Object(c.jsxs)("div",{className:"dynamic-card",id:i,children:[Object(c.jsx)("img",{src:"img/food/"+t,alt:"food",className:"dynamic-card-image-restaurant"}),Object(c.jsxs)("div",{className:"dynamic-card-text",children:[Object(c.jsx)("div",{className:"dynamic-card-heading",children:Object(c.jsx)("h3",{className:"dynamic-card-title dynamic-card-title-reg",children:s})}),Object(c.jsx)("div",{className:"dynamic-card-info",children:Object(c.jsx)("div",{className:"ingredients",children:n})}),Object(c.jsxs)("div",{className:"dynamic-card-buttons",children:[Object(c.jsxs)("button",{className:"button button-primary",id:i,onClick:function(){return o(i,s,a,l)},children:[Object(c.jsx)("span",{className:"button-cadr-text",children:"\u0412 \u041a\u043e\u0440\u0437\u0438\u043d\u0443"}),Object(c.jsx)("img",{src:"img/shopres.svg",alt:"logo",className:"dynamic-card-button-image"})]}),Object(c.jsxs)("strong",{className:"dynamic-card-price-bold",children:[a,"\u20b8"]})]})]})]})}),F=function(e){var i=e.data,t=e.num,a=e.onAdd,s=i[t].goods.map((function(e){return Object(c.jsx)(z,{img:e.img,price:e.price,title:e.title,food:i[0].food,id:e.id,onAdd:a,foodId:e.foodId},e.id)}));return Object(c.jsx)("div",{className:"cards",children:s})},D=function(e){var i=e.data,t=e.resId,a=e.onAdd;return console.log("GOOT",t),Object(c.jsx)("div",{className:"main",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("section",{className:"restaurants",children:[Object(c.jsx)(y,{data:i,num:t}),Object(c.jsx)(F,{data:i,num:t,onAdd:a})]})})})},A=(t(50),function(e){var i=e.deleteAll;return Object(c.jsxs)("section",{className:"shopping-header",children:[Object(c.jsxs)("div",{className:"main-shop",children:[Object(c.jsx)("img",{src:"img/main-shop.svg",alt:"Logo",className:"logo logo-shopping-header"}),Object(c.jsx)("h2",{className:"shop-title",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})]}),Object(c.jsxs)("div",{className:"delete-field",onClick:i,children:[Object(c.jsx)("img",{src:"img/delete.svg",alt:"delete",className:"logo"}),Object(c.jsx)("h2",{className:"delete-title",children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]})}),P=(t(51),function(e){var i=e.shoppingBasketItem,t=e.onDecrease,a=e.onDeleteItem,n=e.onAdd;if(0===i.food.length)return null;console.log(i.food);var o=i.food.map((function(e){return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsxs)("section",{className:"item-section",children:[Object(c.jsx)("img",{src:"img/sushi-basket.png",className:"mini-img",alt:"item"}),Object(c.jsx)("div",{className:"item-description",children:Object(c.jsx)("div",{className:"item-title",children:Object(c.jsx)("h3",{children:e.name})})}),Object(c.jsxs)("div",{className:"item-count",children:[Object(c.jsx)("img",{className:"item-count-block",src:"img/btn-minus.svg",alt:"minus",onClick:function(){return t(e.id)}}),Object(c.jsx)("div",{className:"item-count-block item-count-label",children:e.count}),Object(c.jsx)("img",{className:"item-count-block",src:"img/btn-plus.svg",alt:"plus",onClick:function(){return n(e.id,e.name,e.price,e.id)}})]}),Object(c.jsx)("div",{className:"item-price",children:e.totalprice}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{className:"item-count-delete",src:"img/btn-delete.svg",alt:"delete",onClick:function(){return a(e.id)}})})]}),Object(c.jsx)("div",{className:"line"})]},e.id)}));return Object(c.jsx)("div",{children:o})}),w=(t(52),t(53),function(){return Object(c.jsxs)("section",{className:"empty-basket-section",children:[Object(c.jsx)("div",{className:"empty-basket-label",children:Object(c.jsx)("label",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u043e\u043a\u0430 \u043f\u0443\u0441\u0442\u0430\u044f \ud83c\udf55"})}),Object(c.jsxs)("div",{className:"empty-basket-label-mini",children:[Object(c.jsx)("label",{children:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0435 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u0435\u0449\u0435 \u043d\u0435 \u0434\u0435\u043b\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437."}),Object(c.jsx)("label",{children:"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443\u044e"})]}),Object(c.jsx)("div",{className:"empty-basket-img",children:Object(c.jsx)("img",{src:"img/empty-basket.png",alt:"empty"})})]})}),C=(t(54),function(e){var i=e.shoppingBasketItem;return Object(c.jsxs)("section",{className:"shopping-footer",children:[Object(c.jsxs)("div",{className:"items-amount",children:[Object(c.jsx)("span",{className:"items-title",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: "}),Object(c.jsxs)("span",{className:"items-title-bold",children:[i.count," \u0448\u0442"]})]}),Object(c.jsxs)("div",{className:"delete-field",children:[Object(c.jsx)("span",{className:"total-price-title",children:"\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430:"}),Object(c.jsxs)("span",{className:"total-price-title-bold",children:[i.finalprice," \u20b8"]})]})]})}),E=function(e){var i=e.shoppingBasketItem,t=e.deleteAll,a=e.onDecrease,s=e.onDeleteItem,n=e.onAdd;return 0===i.food.length?Object(c.jsx)(w,{}):Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(A,{deleteAll:t}),Object(c.jsx)("div",{className:"line"}),Object(c.jsx)(P,{shoppingBasketItem:i,onDecrease:a,onDeleteItem:s,onAdd:n}),Object(c.jsx)(C,{shoppingBasketItem:i})]})},S=t(3),L=(t(55),function(){return Object(c.jsxs)("section",{className:"empty-basket-section",children:[Object(c.jsx)("div",{className:"empty-basket-label",children:Object(c.jsx)("label",{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \ud83c\udfaf"})}),Object(c.jsx)("div",{className:"empty-basket-img",children:Object(c.jsx)("img",{className:"empty-basket-logo",src:"img/raw-page.png",alt:"logo"})}),Object(c.jsx)("div",{className:"empty-basket-label",children:Object(c.jsx)("div",{className:"empty-basket-shift",children:Object(c.jsx)(j,{text:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u0430\u0432\u0442\u043e\u0440\u043e\u043c",btnClass:"button-dark",imgClass:"button-image",imgLogo:"contact.png",path:"",haveIcon:!1})})})]})}),T=t(20),B=(t(57),Object(T.b)((function(e){return{state:e}}),(function(e){return{addItem:function(i,t,c,a){e({type:"ADD",payload:[i,t,c,a]})},onDecrease:function(i){e({type:"DEC_ITEM",payload:i})},onDeleteItem:function(i){e({type:"DEL_ITEM",payload:i})},deleteAll:function(){e({type:"DELETE_ALL"})}}}))((function(e){var i=e.state,t=e.addItem,s=e.onDecrease,n=e.onDeleteItem,o=e.deleteAll;console.log(k);var l=i.count,j=Object(a.useState)(k),m=Object(r.a)(j,2),b=m[0],g=m[1];return Object(c.jsxs)(d.a,{children:[Object(c.jsxs)("div",{className:"app-main",children:[Object(c.jsx)(u,{counter:l}),Object(c.jsxs)(S.c,{children:[Object(c.jsx)(S.a,{exact:!0,path:"/",children:Object(c.jsx)(N,{data:b,FilterFunctionAll:function(){g(k)},FilterFunctionPizza:function(){var e=k.filter((function(e){return"\u041f\u0438\u0446\u0446\u0430"===e.food}));g(e)},FilterFunctionSushi:function(){var e=k.filter((function(e){return"\u0421\u0443\u0448\u0438"===e.food}));g(e)}})}),Object(c.jsx)(S.a,{exact:!0,path:"/shop",children:Object(c.jsx)(E,{shoppingBasketItem:i,deleteAll:o,onDecrease:s,onDeleteItem:n,onAdd:t})}),Object(c.jsx)(S.a,{exact:!0,path:"/raw",children:Object(c.jsx)(L,{})}),Object(c.jsx)(S.a,{exact:!0,path:"/empty",children:Object(c.jsx)(w,{})}),Object(c.jsx)(S.a,{path:"/:id",render:function(e){var i=e.match;console.log(i);var a=i.params.id;return Object(c.jsx)(D,{data:k,resId:a,onAdd:t})}})]})]}),Object(c.jsx)(I,{})]})}))),M=t(9),_=t(15),J={food:[],finalprice:0,count:0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,i=arguments.length>1?arguments[1]:void 0;switch(console.log(i.type),i.type){case"ADD":var t,c=i.payload,a=e.food.findIndex((function(e){return e.id===c[3]})),s=e.food[a],n=c[2]+e.finalprice,o=e.count+1;return t=s?Object(_.a)(Object(_.a)({},s),{},{count:s.count+1,price:c[2],totalprice:c[2]*(s.count+1)}):{id:c[3],name:c[1],price:c[2],count:1,totalprice:c[2]},a<0?{count:o,finalprice:n,food:[].concat(Object(M.a)(e.food),[t])}:{count:o,finalprice:n,food:[].concat(Object(M.a)(e.food.slice(0,a)),[t],Object(M.a)(e.food.slice(a+1)))};case"DEC_ITEM":var l,r=e.food.findIndex((function(e){return e.id===i.payload})),d=e.food[r];if(console.log(d),!(d.count>1)){var j=e.count-1,m=e.finalprice-d.price;return{count:j,finalprice:m,food:[].concat(Object(M.a)(e.food.slice(0,r)),Object(M.a)(e.food.slice(r+1)))}}l=Object(_.a)(Object(_.a)({},d),{},{count:d.count-1,totalprice:d.totalprice-d.price});var u=e.count-1,b=e.finalprice-d.price;return console.log(l),{count:u,finalprice:b,food:[].concat(Object(M.a)(e.food.slice(0,r)),[l],Object(M.a)(e.food.slice(r+1)))};case"DELETE_ALL":return{food:[],finalprice:0,count:0};case"DEL_ITEM":var g=e.food.findIndex((function(e){return e.id===i.payload})),p=e.count-e.food[g].count,h=e.finalprice-e.food[g].totalprice;return{count:p,finalprice:h,food:[].concat(Object(M.a)(e.food.slice(0,g)),Object(M.a)(e.food.slice(g+1)))};default:return e}},q=Object(l.b)(R);o.a.render(Object(c.jsx)(T.a,{store:q,children:Object(c.jsx)(B,{})}),document.getElementById("root"))}]),[[58,1,2]]]);
//# sourceMappingURL=main.ffce195f.chunk.js.map