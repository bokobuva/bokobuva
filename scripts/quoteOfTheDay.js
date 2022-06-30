const quotes = document.querySelectorAll("body section h3");

let quoteOfTheDay;

const date = new Date();

const today = 54;

for(let i = 0; i < quotes.length; i ++){
    if(today <= quotes.length){
        quoteOfTheDay = quotes[today-1];
    } else {
        quoteOfTheDay = quotes[(today - (quotes.length * Math.floor(today / quotes.length)))-1];
    }
}

quoteOfTheDay.style.display = 'block';

