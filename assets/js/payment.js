
paypal_sdk.Buttons({
    style: {
        layout: 'vertical',
        shape: 'pill',
        label: 'paypal'
    },
    createOrder: async function (data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '1.99'
                }
            }]
        });
    },
    onApprove: async function (data, actions) {
        return actions.order.capture().then(function (details) {
            alert('Payment was successful!');
            setTimeout(() => {
                $('.form__container-payment--form').submit();
            }, 200);
        });
    }
}).render('#paypal-button-container'); // Display payment options on your web page