var apikey = {
    key: '919f2ec1-37e0-42d6-8e68-0625941de8ca'
}

request('GET', ' https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((r1) => {
        var x1 = JSON.parse(r1.target.responseText);
        console.log("Bitcoin" + x1.data.quote.BTC .total_market_cap);
        console.log("Ethereum" + x1.data.quote.ETH .total_market_cap);
        console.log("XRP" + x1.data.quote.XRP .total_market_cap);
        console.log("Litecoin" + x1.data.quote.LTC .total_market_cap);
        console.log("Bitcoin Cash" + x1.data.quote.BCH .total_market_cap);

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