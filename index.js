// Render the PayPal button into #paypal-button-container
paypal.Buttons({

    style : {
        layout: 'horizontal',
        size: 'small',
        color:  'blue',
        shape:  'pill',
        label:  'pay',
        height: 40,
        width: 40,
        tagline: 'false'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units : [{
                amount: {
                    value: '0.56'
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
            // Successful capture! For demo purposes:
            // console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            // var transaction = orderData.purchase_units[0].payments.captures[0];
            // alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');

            // Replace the above to show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '';
            var transaction = orderData.purchase_units[0].payments.captures[0];
            element.innerHTML = '<h3>Thank you for your payment! ' +'Transaction '+ transaction.status + ': ' + transaction.id  +'</h3>.';
        });
    },
    onCancel: function (data) {
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Payment got cancelled due to some technical reason!</h3>.';
    }
}).render('#paypal-button-container');