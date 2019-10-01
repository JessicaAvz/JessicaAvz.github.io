var x1;
var cryptoValue = 'BTC';
var newMinutes = 1;
var elementsArray;
var method = 'GET'
var t;

$(document).ready(function () {
    $("#minutesForRefreshing").text(newMinutes);

    $('#itemDropdown').change(function () {
        cryptoValue = this.value;
        updateData();
    });

    $('#refreshManually').click(function (e) {
        updateData();
    })

    $('#setNewMinutesButton').click(function () {
        newMinutes = $('#newMinutesInput').val();
        clearInterval(t)
        t = setInterval(updateData, (newMinutes * 60000));
        $("#minutesForRefreshing").text(newMinutes);

    });
});

function updateData() {
    $.ajax({
        type: "GET",
        url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${cryptoValue}`,
        headers: {
            'X-CMC_PRO_API_KEY': 'bcfad2c4-b976-4ad0-8186-1ef89a369192',
        },
        success: function (result) {
            var ajax_marketcap = result.data[cryptoValue].quote.USD.market_cap;
            var ajax_price = result.data[cryptoValue].quote.USD.price;

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
t = setInterval(updateData, (newMinutes * 10000));

