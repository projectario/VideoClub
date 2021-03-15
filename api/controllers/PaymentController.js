
let stripe = PaymentService('stripe', {
    apiKey: '<pk_test_51IUzjJH2q9tvfC7UCHlu1betORLO9uc73rVirCPFFTmLiNGXJVFsn1dThemX65hLqIFTfpUAfznm7n8CvZdtFdXc00YPs4Ero7>'
});

stripe
    .checkout({
        amount: 100 * 10, // How much money to charge in cents
        cardNumber: '4242424242424242', // Card Number (16-digit)
        cardHolderName: 'Eugene Obrezkov', // Card Holder Name (optional)
        expMonth: '01', // Expiration Date (Month)
        expYear: '2018', // Expiration Date (Year)
        cvv: '123' // CVV Code (optional, but highly recommend)
    })
    .then(console.log.bind(console))
    .catch(console.error.bind(console));
