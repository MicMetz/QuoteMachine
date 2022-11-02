


const apiUrl = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
const quotecontainer = document.querySelector('#js-quote-text');

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', function (event) {
    event.preventDefault();
    getQuote()
});

const tweetButton = document.querySelector('#js-tweet');
tweetButton.addEventListener('click', function (event) {
    event.preventDefault();
    tweetQuote()
});


function getQuote() {
    const config = {
        method: 'get',
        url   : apiUrl,
    }

    axios(config)
        .then(function (response) {
            quotecontainer.innerHTML = response.data.message;
        })
        .catch(function (error) {
            console.log(error);
            quotecontainer.innerHTML = 'Error';
        });
}


function tweetQuote() {
    const quote = quotecontainer.innerHTML;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quote}`;  // twitter api intent function
    window.open(tweetUrl, '_blank');        // open in new tab
}






