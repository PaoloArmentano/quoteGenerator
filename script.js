// turn every element into a variable
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

// function that fetches quote from API and displays it in card
function getQuote() {
  let randomQuote = Math.floor((Math.random() * 100000) + 1)
fetch(`https://api.goprogram.ai/inspiration?=${randomQuote}`)
  .then((response) => response.json())
  .then((data) => {
  	quoteText.innerText = `"${data.quote}"`;
    if(data.author === '') {data.author = 'Unknown'};
    authorText.innerText = `- ${data.author} -`;
  });
}

newQuoteBtn.addEventListener('click', getQuote);

// On Load show a quote
getQuote();

