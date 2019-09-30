$(document).ready(function () {
    $('.dropdown-menu a').click(function () {
        var cryptoValue = $(this).text();
        $('#selectedOption').text(cryptoValue)
        console.log(cryptoValue);
    });

    $('#setNewMinutesButton').click(function () {
        var newMinutes = $('#newMinutesInput').val()
        $("#minutesForRefreshing").text(newMinutes)
    });
});

var apikey = {
    key: '919f2ec1-37e0-42d6-8e68-0625941de8ca'
}

request('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
    .then((r1) => {
        var x1 = JSON.parse(r1.target.responseText);
        console.log(x1.data[0].quote.USD.market_cap);

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