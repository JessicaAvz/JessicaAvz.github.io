var x1;
var cryptoValue = 'Bitcoin';
var elementsArray;
var method = 'GET'
var apikey = {
    key: '919f2ec1-37e0-42d6-8e68-0625941de8ca'
}

$(document).ready(function () {
    $('#itemDropdown').change(function () {
        cryptoValue = this.value;
        console.log(cryptoValue);
        //$('#selectedOption').text(cryptoValue)
        updateData();
    });

    $('#refreshManually').click(function (e) {
        updateData();
    })

    $('#setNewMinutesButton').click(function () {
        var newMinutes = $('#newMinutesInput').val();
        $("#minutesForRefreshing").text(newMinutes);
    });
});

function updateData() {
    console.log('daniel es feo y popo ' + cryptoValue)
    $.ajax({
        type: "GET",
        url: `https://api.coinmarketcap.com/v1/ticker/${cryptoValue}`,
        /*data: {
            symbol: cryptoValue,
        },*/
        success: function (result) {
            console.log(result)
            var ajax_marketcap = result[0].market_cap_usd;
            var ajax_price = result[0].price_usd;

            var market_cap_currency = '$' + (+ajax_marketcap).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            var price_currency = '$' + (+ajax_price).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

            $('#cryptoCoin').text(cryptoValue);
            $('#cryptoCoinMarketCap').text(market_cap_currency);
            $('#cryptoCoinPrice').text(price_currency);
        },
        error: function (result) {
            alert('error');
        }
    });
}

updateData();


/*
function doCalculus() {
    elementsArray = x1.data.filter(function (element) {
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
}*/