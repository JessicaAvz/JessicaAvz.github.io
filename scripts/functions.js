var x1;

var apikey = {
    key: '919f2ec1-37e0-42d6-8e68-0625941de8ca'
}

var method = 'GET';

$(document).ready(function () {
    $('.dropdown-menu a').click(function () {
        var cryptoValue = $(this).text();
        $('#selectedOption').text(cryptoValue)
        console.log(cryptoValue);

        doCalculus();
    });

    $('#refreshManually').click(function () {
        doCalculus();
    })

    $('#setNewMinutesButton').click(function () {
        var newMinutes = $('#newMinutesInput').val()
        $("#minutesForRefreshing").text(newMinutes)
    });
});

request(method, 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
    .then((r1) => {
        x1 = JSON.parse(r1.target.responseText);
    }).catch(err => {
        console.log(err);
    })

function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}

function doCalculus() {
    var elementsArray = x1.data.filter(function (element) {
        return element.name == cryptoValue;
    })

    var market_cap = elementsArray[0].quote.USD.market_cap;
    var price = elementsArray[0].quote.USD.price;

    var market_cap_currency = '$' + market_cap.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    var price_currency = '$' + price.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    $('#cryptoCoin').text(cryptoValue);
    $('#cryptoCoinMarketCap').text(market_cap_currency);
    $('#cryptoCoinPrice').text(price_currency);
}