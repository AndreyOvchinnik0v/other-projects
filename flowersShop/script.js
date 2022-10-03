//получить массив div-элементов(цветов)
let catalog = document.getElementsByClassName('card'); 

let cardsInCart = document.querySelector('div.cardsInCart');

let counter = 0; // счётчик колличества цветов добавленных в корзину

let pricesSum = document.querySelector('span.sum');

let cost = 0;

let prices = {
    'Anemon': 100,
    'Armalis': 110,
    'Gvozdika': 120,
    'Gerbera': 130,
    'Liziantus': 140,
    'Narcis': 150,
    'Orchideya': 160,
    'Pion': 170,
    'Rosa': 180,
    'Romashka': 190,
    'Tulpan': 200,
    'Celoziya': 210
}






//массив имён цветов для сравнения с flowersInCart
let flowersArr = [];
for (let i of catalog) {
    flowersArr.push(i.id);
}


//массив имён цветов добавленных в корзину
let flowersInCart = [];


let clone; // переменная для хранения клонированых div-цветов;



for (let i of catalog) {
    

    i.addEventListener('click', function () {
        if (!flowersInCart.includes(i.id)){
            clone = i.cloneNode(false)
            clone.classList.add('cardInCart', 'item',
            `item-${counter}`)
            counter++;

            console.log();
           
                      
            cardsInCart.appendChild(clone);
            flowersInCart.push(i.id);
                       
        }
        cost = cost + prices[i.id];
        
        pricesSum.innerText = `Итого: ${cost}`;
        
    })
    
   
}

