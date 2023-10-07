document.getElementById('coupon-button').addEventListener('click', function (event) {
    let couponCode = document.getElementById('coupon-code').value;
    
    if (couponCode === 'SELL200') {
        let discount = document.getElementById('discount-price').classList;
        discount.remove('hidden');
        discount.add('inline');

        let total = document.getElementById('total-discounted-price').classList;
        total.remove('hidden');
        total.add('inline');
    }
})