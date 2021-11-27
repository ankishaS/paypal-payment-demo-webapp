// 1. Set up your server to make calls to PayPal

const form = document.getElementById('dateRange');

form.onsubmit = function (event) {

    PAYPAL_CLIENT = 'AUZZ8lWCcJlcNBX0OchPP8FuBUJPifPlb3C3PksFXnonTiaj3dEhNU53-TaPMJgeZpNd_w2_0-z9df9A';
    PAYPAL_SECRET = 'EOfOGo120Lf-SEPMXB_JqhbLolwWq06FJqRiCS8vgcJBR3Q8OMo6bdYnm-3ihw0kY_Pn_lNBKbYDRYhc';

    PAYPAL_OAUTH_API = 'https://api-m.sandbox.paypal.com/v1/oauth2/token/';
    PAYPAL_TRANSACTION_API = 'https://api.sandbox.paypal.com/v1/reporting/transactions';

    // generate access token using client id and secret key

    // construct an HTTP request
    var getToken = new XMLHttpRequest();
    getToken.open("POST", "https://api-m.sandbox.paypal.com/v1/oauth2/token", true);
    getToken.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    getToken.setRequestHeader('Authorization', "Basic " + btoa(PAYPAL_CLIENT + ":" + PAYPAL_SECRET));


    getToken.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200 && this.response != null) {
            var access_token = JSON.parse(this.response).access_token;
            // read the date value from Date fields in html form
            var startDate = document.getElementById("sDate");
            var endDate = document.getElementById("eDate");

            PAYPAL_TRANSACTION_API += "?start_date=" + startDate.value + "T00:00:00-0700" + "&end_date=" + endDate.value + "T23:59:59-0700" + "&fields=transaction_info";

            var transactions = document.getElementById('transactions');
            // make a call to the paypal server to fetch the results of all transactions
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", PAYPAL_TRANSACTION_API, true);
            xhttp.setRequestHeader('Content-type', 'application/json');
            xhttp.setRequestHeader('Authorization', 'Bearer ' + access_token);
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200 && this.response != null) {
                    var jsonResponse = JSON.parse(this.response);
                   var table = document.getElementById('myTable');

                        for (var i = 0; i < jsonResponse.transaction_details.length; i++) {
                            var row = `<tr>
							<td>${jsonResponse.transaction_details[i].transaction_info.transaction_id}</td>
							<td>${jsonResponse.transaction_details[i].transaction_info.transaction_initiation_date}</td>
							<td>${jsonResponse.transaction_details[i].transaction_info.transaction_amount.value}</td>
							<td>${jsonResponse.transaction_details[i].transaction_info.transaction_amount.currency_code}</td>
					            </tr>`
                            table.innerHTML += row;
                        }
                }
            };
            xhttp.send();
        }
    };
    getToken.send("grant_type=client_credentials");
    return false;// do not submit form
}
